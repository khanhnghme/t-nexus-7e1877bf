"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [26665], {
        5576: (e, t, i) => {
            i.d(t, {
                A: () => l
            });
            var a = i(296540),
                o = i(474848);
            let l = function(e) {
                let {
                    disabled: t,
                    type: l,
                    tooltipLabel: n,
                    children: r,
                    style: s,
                    onClick: c,
                    experimentGroup: d
                } = e, p = (0, i(533992).v3)(), m = (0, a.useCallback)(e => {
                    let {
                        inputTextSelection: t
                    } = i(793767).A.state;
                    i(31904).po({
                        environment: p,
                        annotation: [l],
                        forcedSelection: t
                    }), c && c(), (0, i(961511).s)(p, {
                        action: l
                    })
                }, [p, l, c]), u = (0, i(682985).K8)(() => {
                    let e = "editing" === i(358377).default.state.mode,
                        a = !!i(793767).A.state.inputTextSelection;
                    return t || !e && !a
                }, [t]), b = (0, i(682985).K8)(() => !!(0, i(56968).B)(l), [l]), y = (0, i(960253).I)(() => ({
                    button: {
                        display: "flex",
                        alignItems: "center",
                        fill: b ? i(632079).Tj.blue.icon.accentPrimary : i(632079).Tj.icon.primary,
                        background: b && null != d && d.includes("vertical") ? i(632079).Tj.blue.background.secondary : void 0,
                        borderRadius: 6,
                        height: 28,
                        width: 28,
                        padding: 6,
                        ...s
                    }
                }), [b, s, d]);
                return (0, o.jsx)(i(51831).m, {
                    content: () => n,
                    children: e => (0, o.jsx)(i(64960).Ay, {
                        style: y.button,
                        disabled: u,
                        disabledFeedback: u,
                        onClick: m,
                        "aria-pressed": b,
                        ...e,
                        children: r
                    })
                })
            }
        },
        114525: (e, t, i) => {
            i.d(t, {
                j: () => a
            });

            function a() {
                return {
                    height: 32,
                    display: "flex",
                    alignItems: "center"
                }
            }
        },
        200261: (e, t, i) => {
            i.d(t, {
                A: () => l
            }), i(296540);
            var a = i(474848);
            let o = {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                },
                l = function() {
                    return (0, a.jsx)(i(636518).Ay, {
                        title: (0, a.jsx)(i(517334).k, {
                            size: "default"
                        }),
                        titleStyle: o
                    })
                }
        },
        248791: (e, t, i) => {
            i.d(t, {
                lz: () => o,
                nO: () => a,
                wl: () => l
            });
            let a = {
                    chatSidebar: new(i(815048)).O2("chatSidebar", () => Promise.all([i.e(75134), i.e(9773), i.e(55373), i.e(36192), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(16471), i.e(37353), i.e(18965), i.e(85142), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(12560), i.e(88268), i.e(39726), i.e(42534), i.e(86662), i.e(6212), i.e(29663), i.e(28482), i.e(14369), i.e(56308), i.e(75136), i.e(98175), i.e(83490), i.e(58360), i.e(12690), i.e(68583), i.e(35602), i.e(12024), i.e(95969), i.e(22195), i.e(65441), i.e(44903), i.e(3456), i.e(28463), i.e(2703)]).then(i.bind(i, 827778))),
                    chatSidebarActions: new(i(815048)).O2("chatSidebarActions", async () => await i.e(87196).then(i.bind(i, 358667))),
                    chatSidebarHelpers: new(i(815048)).O2("chatSidebarHelpers", async () => await Promise.resolve().then(i.bind(i, 548124))),
                    chatSidebarModeButton: new(i(815048)).O2("chatSidebarModeButton", async () => await Promise.all([i.e(9773), i.e(55373), i.e(36192), i.e(96346), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(43444), i.e(23979), i.e(64696), i.e(48486), i.e(76135), i.e(76298), i.e(23644), i.e(94814)]).then(i.bind(i, 471286))),
                    dockedSidebar: new(i(815048)).O2("dockedSidebar", async () => await Promise.all([i.e(75134), i.e(9773), i.e(55373), i.e(36192), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(16471), i.e(37353), i.e(18965), i.e(85142), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(12560), i.e(88268), i.e(39726), i.e(42534), i.e(86662), i.e(6212), i.e(29663), i.e(28482), i.e(14369), i.e(56308), i.e(75136), i.e(98175), i.e(83490), i.e(58360), i.e(12690), i.e(68583), i.e(35602), i.e(12024), i.e(95969), i.e(22195), i.e(65441), i.e(44903), i.e(3456), i.e(28463)]).then(i.bind(i, 707709)))
                },
                o = (0, i(815048)._h)(a.chatSidebar, e => e.ChatSidebar),
                l = (0, i(815048)._h)(a.chatSidebarModeButton, e => e.ChatSidebarModeButtonPopupContents)
        },
        312712: (e, t, i) => {
            i.d(t, {
                q: () => s
            }), i(18107), i(967357);
            let a = (0, i(109939).YK)({
                    viewTitle: {
                        defaultMessage: "List view",
                        id: "blockTemplates.list.viewTitle"
                    },
                    namePropertyTitle: {
                        defaultMessage: "Name",
                        id: "blockTemplates.list.namePropertyTitle"
                    },
                    tagsPropertyTitle: {
                        defaultMessage: "Tags",
                        id: "blockTemplates.list.tagsPropertyTitle"
                    },
                    createdPropertyTitle: {
                        defaultMessage: "Created",
                        id: "blockTemplates.list.createdPropertyTitle"
                    }
                }),
                o = (0, i(109939).YK)({
                    viewTitle: {
                        defaultMessage: "Gallery view",
                        id: "blockTemplates.gallery.viewTitle"
                    },
                    namePropertyTitle: {
                        defaultMessage: "Name",
                        id: "blockTemplates.gallery.namePropertyTitle"
                    },
                    tagsPropertyTitle: {
                        defaultMessage: "Tags",
                        id: "blockTemplates.gallery.tagsPropertyTitle"
                    },
                    createdPropertyTitle: {
                        defaultMessage: "Created",
                        id: "blockTemplates.gallery.createdPropertyTitle"
                    }
                }),
                l = (0, i(109939).YK)({
                    viewTitle: {
                        defaultMessage: "Timeline view",
                        id: "blockTemplates.timeline.viewTitle"
                    },
                    datePropertyTitle: {
                        defaultMessage: "Date",
                        id: "blockTemplates.timeline.datePropertyTitle"
                    }
                }),
                n = (0, i(109939).YK)({
                    viewTitle: {
                        defaultMessage: "Feed view",
                        id: "blockTemplates.feed.viewTitle"
                    },
                    namePropertyTitle: {
                        defaultMessage: "Name",
                        id: "blockTemplates.feed.namePropertyTitle"
                    }
                }),
                r = (0, i(109939).YK)({
                    viewTitle: {
                        defaultMessage: "Map view",
                        id: "blockTemplates.map.viewTitle"
                    },
                    namePropertyTitle: {
                        defaultMessage: "Name",
                        id: "blockTemplates.map.namePropertyTitle"
                    },
                    placePropertyTitle: {
                        defaultMessage: "Place",
                        id: "blockTemplates.map.placePropertyTitle"
                    }
                });

            function s(e) {
                let {
                    isInline: t,
                    viewType: s,
                    name: c
                } = e;
                return "table" === s ? function(e) {
                    let {
                        isInline: t,
                        name: a
                    } = e, o = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "table",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    table_properties: [{
                                        property: "title",
                                        visible: !0,
                                        width: i(986939).A.isMobile ? i(565546).PI : i(565546).Xv
                                    }, {
                                        property: o,
                                        visible: !0
                                    }],
                                    table_wrap: !0
                                },
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: a,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(i(632468).n4.namePropertyTitle),
                                        type: "title"
                                    }
                                },
                                format: {},
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "board" === s ? function(e) {
                    let {
                        isInline: t,
                        name: a
                    } = e, o = (0, i(698596).Ay)(), l = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "board",
                                name: i(962299).A.formatMessage(i(632468).jm.viewTitle),
                                query2: {
                                    aggregations: [{
                                        aggregator: "count"
                                    }]
                                },
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    board_columns_by: {
                                        property: o,
                                        type: "status",
                                        groupBy: "option",
                                        sort: {
                                            type: "ascending"
                                        }
                                    },
                                    board_columns: [{
                                        property: o,
                                        value: {
                                            type: "status",
                                            value: {
                                                type: "by_option",
                                                option: i(962299).A.formatMessage(i(998833).M_.statusOptionNotStarted)
                                            }
                                        }
                                    }, {
                                        property: o,
                                        value: {
                                            type: "status",
                                            value: {
                                                type: "by_option",
                                                option: i(962299).A.formatMessage(i(998833).M_.statusOptionInProgress)
                                            }
                                        }
                                    }, {
                                        property: o,
                                        value: {
                                            type: "status",
                                            value: {
                                                type: "by_option",
                                                option: i(962299).A.formatMessage(i(998833).M_.statusOptionDone)
                                            }
                                        }
                                    }],
                                    board_properties: [{
                                        property: o,
                                        visible: !1
                                    }, {
                                        property: l,
                                        visible: !0
                                    }]
                                },
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: a,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(i(632468).jm.namePropertyTitle),
                                        type: "title"
                                    },
                                    [l]: {
                                        name: i(962299).A.formatMessage(i(632468).jm.assignPropertyTitle),
                                        type: "person"
                                    },
                                    [o]: (0, i(366710).D)(i(962299).A.formatMessage(i(632468).jm.statusPropertyTitle), i(962299).A.getIntl())
                                },
                                format: {
                                    collection_page_properties: [{
                                        property: o,
                                        visible: !0
                                    }, {
                                        property: l,
                                        visible: !0
                                    }]
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "calendar" === s ? function(e) {
                    let {
                        isInline: t,
                        name: a
                    } = e, o = (0, i(698596).Ay)(), l = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "calendar",
                                name: i(962299).A.formatMessage(i(632468).PU.viewTitle),
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }
                                },
                                query2: {
                                    calendar_by: o
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: a,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(i(632468).PU.namePropertyTitle),
                                        type: "title"
                                    },
                                    [o]: {
                                        name: i(962299).A.formatMessage(i(632468).PU.datePropertyTitle),
                                        type: "date"
                                    },
                                    [l]: {
                                        name: i(962299).A.formatMessage(i(632468).PU.tagsPropertyTitle),
                                        type: "multi_select"
                                    }
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "list" === s ? function(e) {
                    let {
                        isInline: t,
                        name: o
                    } = e, l = (0, i(698596).Ay)(), n = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "list",
                                name: i(962299).A.formatMessage(a.viewTitle),
                                query2: {
                                    aggregations: [{
                                        aggregator: "count"
                                    }]
                                },
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    list_properties: [{
                                        property: l,
                                        visible: !0
                                    }]
                                },
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: o,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(a.namePropertyTitle),
                                        type: "title"
                                    },
                                    [l]: {
                                        name: i(962299).A.formatMessage(a.tagsPropertyTitle),
                                        type: "multi_select",
                                        options: []
                                    },
                                    [n]: {
                                        name: i(962299).A.formatMessage(a.createdPropertyTitle),
                                        type: "created_time"
                                    }
                                },
                                format: {
                                    collection_page_properties: [{
                                        property: n,
                                        visible: !0
                                    }, {
                                        property: l,
                                        visible: !0
                                    }]
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "gallery" === s ? function(e) {
                    let {
                        isInline: t,
                        name: a
                    } = e, l = (0, i(698596).Ay)(), n = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "gallery",
                                name: i(962299).A.formatMessage(o.viewTitle),
                                query2: {
                                    aggregations: [{
                                        aggregator: "count"
                                    }]
                                },
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    gallery_cover: {
                                        type: "page_content_first"
                                    }
                                },
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: a,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(o.namePropertyTitle),
                                        type: "title"
                                    },
                                    [l]: {
                                        name: i(962299).A.formatMessage(o.tagsPropertyTitle),
                                        type: "multi_select",
                                        options: []
                                    },
                                    [n]: {
                                        name: i(962299).A.formatMessage(o.createdPropertyTitle),
                                        type: "created_time"
                                    }
                                },
                                format: {
                                    collection_page_properties: [{
                                        property: n,
                                        visible: !0
                                    }, {
                                        property: l,
                                        visible: !0
                                    }]
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "timeline" === s ? function(e) {
                    let {
                        isInline: t,
                        name: a
                    } = e, o = (0, i(698596).Ay)(), n = (0, i(698596).Ay)(), r = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["view"],
                                alive: !0
                            },
                            item_1: {
                                id: "item_1",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: {
                                    title: [
                                        [i(962299).A.formatMessage(i(632468).jm.card1Title)]
                                    ],
                                    [o]: (0, i(561872).m5)((0, i(25825).Mk)(i(906745).DateTime.now().minus({
                                        days: 5
                                    }).startOf("day").valueOf(), i(906745).DateTime.now().minus({
                                        days: 1
                                    }).startOf("day").valueOf(), (0, i(714350).P)()))
                                },
                                alive: !0
                            },
                            item_2: {
                                id: "item_2",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: {
                                    title: [
                                        [i(962299).A.formatMessage(i(632468).jm.card2Title)]
                                    ],
                                    [o]: (0, i(561872).m5)((0, i(25825).Mk)(i(906745).DateTime.now().minus({
                                        days: 3
                                    }).startOf("day").valueOf(), i(906745).DateTime.now().plus({
                                        days: 1
                                    }).startOf("day").valueOf(), (0, i(714350).P)()))
                                },
                                alive: !0
                            },
                            item_3: {
                                id: "item_3",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: {
                                    title: [
                                        [i(962299).A.formatMessage(i(632468).jm.card3Title)]
                                    ],
                                    [o]: (0, i(561872).m5)((0, i(25825).Mk)(i(906745).DateTime.now().minus({
                                        days: 1
                                    }).startOf("day").valueOf(), i(906745).DateTime.now().plus({
                                        days: 3
                                    }).startOf("day").valueOf(), (0, i(714350).P)()))
                                },
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "timeline",
                                name: i(962299).A.formatMessage(l.viewTitle),
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    timeline_show_table: !t,
                                    timeline_properties: [{
                                        property: "title",
                                        visible: !0
                                    }],
                                    timeline_table_properties: [{
                                        property: "title",
                                        visible: !0,
                                        width: 280
                                    }, {
                                        property: o,
                                        visible: !1,
                                        width: 180
                                    }, {
                                        property: n,
                                        visible: !1,
                                        width: 180
                                    }, {
                                        property: r,
                                        visible: !1,
                                        width: 180
                                    }]
                                },
                                page_sort: ["item_1", "item_2", "item_3"],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: a,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(i(632468).jm.namePropertyTitle),
                                        type: "title"
                                    },
                                    [o]: {
                                        name: i(962299).A.formatMessage(l.datePropertyTitle),
                                        type: "date"
                                    },
                                    [n]: {
                                        name: i(962299).A.formatMessage(i(632468).jm.assignPropertyTitle),
                                        type: "person"
                                    },
                                    [r]: (0, i(366710).D)(i(962299).A.formatMessage(i(632468).jm.statusPropertyTitle), i(962299).A.getIntl())
                                },
                                format: {
                                    collection_page_properties: [{
                                        property: o,
                                        visible: !0
                                    }, {
                                        property: n,
                                        visible: !0
                                    }, {
                                        property: r,
                                        visible: !0
                                    }]
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "page" === s ? i(412951).RecordMapPolymorphic.create({}) : "chart" === s ? function(e) {
                    let t, {
                            isInline: a,
                            name: o,
                            chartType: l
                        } = e,
                        n = (0, i(698596).Ay)(),
                        r = (0, i(698596).Ay)(),
                        s = (0, i(698596).Ay)(),
                        c = (0, i(366710).D)(i(962299).A.formatMessage(i(632468).jm.statusPropertyTitle), i(962299).A.getIntl()),
                        d = {
                            name: i(962299).A.formatMessage(i(632468).n4.namePropertyTitle),
                            type: "title"
                        },
                        p = "line" === l ? {
                            title: d,
                            [r]: {
                                name: i(962299).A.formatMessage(i(632468).PU.datePropertyTitle),
                                type: "date"
                            }
                        } : "number" === l ? {
                            title: d,
                            [s]: {
                                name: i(962299).A.formatMessage(i(632468).tT.pricePropertyTitle),
                                type: "number",
                                number_format: "dollar"
                            }
                        } : {
                            title: d,
                            [n]: c
                        };
                    switch (l) {
                        case "donut":
                            t = (0, i(105639).ZS)({
                                collectionSchema: p
                            });
                            break;
                        case "number":
                            t = (0, i(105639).y_)({
                                property: s
                            });
                            break;
                        case "column":
                        case "bar":
                        case "line":
                            t = (0, i(105639).EZ)({
                                collectionSchema: p,
                                axisChartType: l
                            });
                            break;
                        default:
                            (0, i(722371).HB)(l)
                    }
                    let m = (0, i(714350).P)(),
                        u = {
                            type: "date",
                            start_date: (0, i(25825).kB)((0, i(25825).ah)(m).minus({
                                days: 4
                            }))
                        },
                        b = {
                            type: "date",
                            start_date: (0, i(25825).kB)((0, i(25825).ah)(m).minus({
                                days: 3
                            }))
                        },
                        y = {
                            type: "date",
                            start_date: (0, i(25825).kB)((0, i(25825).ah)(m).minus({
                                days: 2
                            }))
                        },
                        g = {
                            type: "date",
                            start_date: (0, i(25825).kB)((0, i(25825).ah)(m).minus({
                                days: 1
                            }))
                        },
                        h = "line" === l ? [{
                            [r]: (0, i(561872).m5)(u)
                        }, {
                            [r]: (0, i(561872).m5)(b)
                        }, {
                            [r]: (0, i(561872).m5)(y)
                        }, {
                            [r]: (0, i(561872).m5)(y)
                        }, {
                            [r]: (0, i(561872).m5)(y)
                        }, {
                            [r]: (0, i(561872).m5)(g)
                        }] : "number" === l ? [{
                            [s]: [
                                ["100"]
                            ]
                        }, {
                            [s]: [
                                ["200"]
                            ]
                        }, {
                            [s]: [
                                ["300"]
                            ]
                        }, {
                            [s]: [
                                ["400"]
                            ]
                        }] : [{
                            [n]: [
                                [c.options.at(0).value]
                            ]
                        }, {
                            [n]: [
                                [c.options.at(1).value]
                            ]
                        }, {
                            [n]: [
                                [c.options.at(1).value]
                            ]
                        }, {
                            [n]: [
                                [c.options.at(2).value]
                            ]
                        }];
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: a ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["chart_view", "data_view"],
                                alive: !0
                            },
                            item_1: {
                                id: "item_1",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: h[0],
                                alive: !0
                            },
                            item_2: {
                                id: "item_2",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: h[1],
                                alive: !0
                            },
                            item_3: {
                                id: "item_3",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: h[2],
                                alive: !0
                            },
                            item_4: {
                                id: "item_4",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: h[3],
                                alive: !0
                            },
                            ..."line" === l && {
                                item_5: {
                                    id: "item_5",
                                    type: "page",
                                    parent_id: "collection",
                                    parent_table: "collection",
                                    properties: h[4],
                                    alive: !0
                                },
                                item_6: {
                                    id: "item_6",
                                    type: "page",
                                    parent_id: "collection",
                                    parent_table: "collection",
                                    properties: h[5],
                                    alive: !0
                                }
                            }
                        },
                        collection_view: {
                            chart_view: {
                                id: "chart_view",
                                version: 0,
                                type: "chart",
                                name: i(962299).A.formatMessage(i(632468).tT.chartViewTitle),
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    chart_config: t,
                                    subitem_display_mode: "flattened",
                                    hide_linked_collection_name: !0
                                },
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            },
                            data_view: {
                                id: "data_view",
                                version: 0,
                                type: "table",
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0,
                                name: i(962299).A.formatMessage(i(632468).tT.dataViewTitle),
                                format: {
                                    table_properties: [{
                                        property: "title",
                                        visible: !0
                                    }],
                                    table_wrap: !0,
                                    hide_linked_collection_name: !0
                                }
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: o,
                                schema: p,
                                format: {
                                    collection_page_properties: [{
                                        property: "line" === l ? r : "number" === l ? s : n,
                                        visible: !0
                                    }]
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c,
                    chartType: e.chartType
                }) : "form_editor" === s ? i(412951).RecordMapPolymorphic.create({}) : "feed" === s ? function(e) {
                    let {
                        isInline: t,
                        name: a
                    } = e;
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "feed",
                                name: i(962299).A.formatMessage(n.viewTitle),
                                query2: {},
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    list_properties: []
                                },
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: a,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(n.namePropertyTitle),
                                        type: "title"
                                    }
                                },
                                format: {
                                    collection_page_properties: []
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "map" === s ? function(e) {
                    let {
                        isInline: t,
                        name: a
                    } = e, o = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "map",
                                name: i(962299).A.formatMessage(r.viewTitle),
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }
                                },
                                query2: {
                                    map_by: o
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: a,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(r.namePropertyTitle),
                                        type: "title"
                                    },
                                    [o]: {
                                        name: i(962299).A.formatMessage(r.placePropertyTitle),
                                        type: "place"
                                    }
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "chat" === s || "custom" === s ? i(412951).RecordMapPolymorphic.create({}) : "dashboard" === s ? function(e) {
                    let {
                        isInline: t
                    } = e;
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                format: {
                                    hide_inline_collection_name: !0
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "dashboard",
                                format: {},
                                name: i(799514).to.dashboard,
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t
                }) : "teamspace_directory" === s || "library_external_pages" === s || "agents" === s ? i(412951).RecordMapPolymorphic.create({}) : void(0, i(722371).HB)(s)
            }
        },
        431228: (e, t, i) => {
            i.d(t, {
                A: () => n
            });
            var a = i(296540),
                o = i(474848);

            function l(e) {
                let t = (0, i(533992).v3)(),
                    l = (0, a.useRef)(null),
                    n = async () => {
                        let a = i(358377).default.state;
                        if ("empty" === a.mode) return;
                        let o = await i(864850).T.formulas.load();
                        i(22229).of({
                            environment: t,
                            blockStore: e.blockStore,
                            multiSelection: a.multiSelection,
                            formulasModule: o
                        })
                    };
                return (0, o.jsx)(i(51831).m, {
                    content: () => (0, o.jsx)("div", {
                        children: (0, o.jsx)(i(109939).sA, {
                            defaultMessage: "React to selected text",
                            id: "inlineReactionButton.tooltip"
                        })
                    }),
                    children: t => (0, o.jsxs)(i(64960).Ay, {
                        ref: l,
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: e.iconOnly ? 6 : "0 6px",
                            gap: 4,
                            whiteSpace: "nowrap",
                            ...e.style
                        },
                        disabled: e.disabled,
                        disabledFeedback: e.disabled,
                        onClick: n,
                        ...t,
                        children: [(0, o.jsx)(i(16275).I, {
                            icon: i(704694).r
                        }), i(986939).A.isMobile || e.iconOnly ? void 0 : (0, o.jsx)(i(109939).sA, {
                            defaultMessage: "React",
                            id: "inlineReactionButton.reactLabel"
                        })]
                    })
                })
            }
            l.displayName = "InlineReactionButton";
            let n = l
        },
        481569: (e, t, i) => {
            i.d(t, {
                A: () => s
            });
            var a = i(296540);
            let o = new(i(815048)).O2("SelectionLinkMenu", async () => await i.e(4586).then(i.bind(i, 349525))),
                l = (0, i(815048)._h)(o, e => e.SelectionLinkMenu);
            var n = i(474848);
            let r = {
                popup: {
                    width: i(785596).aU
                },
                shortcut: {
                    color: i(632079).Tj.text.inverseSecondary
                },
                buttonSelected: {
                    color: i(632079).Tj.blue.text.accentPrimary
                },
                button: {
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 6,
                    paddingInlineStart: 7,
                    paddingInlineEnd: 6,
                    whiteSpace: "nowrap"
                }
            };

            function s(e) {
                let t = (0, i(533992).v3)(),
                    o = (0, a.useRef)(null),
                    s = (0, i(682985).K8)(() => (0, i(56968).B)(i(247438).Ifu.Link), []),
                    c = (0, i(682985).K8)(() => !!(e.disabled || "editing" !== i(358377).default.state.mode && !i(68119).A.state.open || (0, i(816893).y)(i(247438).Ifu.User) || (0, i(816893).y)(i(247438).Ifu.Bot) || (0, i(816893).y)(i(247438).Ifu.Date) || (0, i(816893).y)(i(247438).Ifu.Page) || (0, i(816893).y)(i(247438).Ifu.Group)), [e.disabled]),
                    d = (0, a.useCallback)(() => {
                        i(280546).fi({
                            type: "focusOnly",
                            focus: !0,
                            disablePopup: !i(986939).A.isMobile
                        }), (0, i(961511).s)(t, {
                            action: i(247438).Ifu.Link
                        })
                    }, [t]),
                    p = (0, a.useCallback)(() => {
                        requestAnimationFrame(() => {
                            i(68119).A.state.open && i(280546).d()
                        })
                    }, []),
                    m = (0, a.useMemo)(() => ({ ...r.button,
                        ...s && r.buttonSelected,
                        ...e.style
                    }), [s, e.style]);
                return i(986939).A.isMobile ? (0, n.jsx)(i(64960).Ay, {
                    style: m,
                    disabled: c,
                    disabledFeedback: c,
                    onClick: d,
                    children: e.children
                }) : (0, n.jsx)(i(656252).A, {
                    popupType: i(656252).z.Popup,
                    style: r.popup,
                    originGap: 4,
                    disabled: c,
                    onClick: d,
                    onClose: p,
                    disableMouseCapture: !0,
                    enableOutsideClickDismiss: !0,
                    trapFocus: !0,
                    content: e => (0, n.jsx)(l, {
                        onClose: e.close,
                        originRef: o
                    }),
                    children: t => (0, n.jsx)(i(51831).m, {
                        content: () => (0, n.jsxs)(a.Fragment, {
                            children: [(0, n.jsx)("div", {
                                children: (0, n.jsx)(i(109939).sA, {
                                    defaultMessage: "Add link",
                                    id: "selectionLinkButton.addLink.tooltip"
                                })
                            }), (0, n.jsx)("div", {
                                children: (0, n.jsx)(i(693592).A, {
                                    style: r.shortcut,
                                    name: "openLinkMenuOrOpenSearch"
                                })
                            })]
                        }),
                        children: a => (0, n.jsx)(i(64960).Ay, {
                            ref: o,
                            style: m,
                            disabled: c,
                            disabledFeedback: c,
                            ...(0, i(63390).A)(t, a),
                            children: e.children
                        })
                    })
                })
            }
        },
        535566: (e, t, i) => {
            i.d(t, {
                A: () => n
            });
            var a = i(296540),
                o = i(474848);
            let l = {
                keyboardShorcut: {
                    color: i(632079).Tj.text.inverseSecondary
                }
            };

            function n(e) {
                let t = (0, i(533992).v3)(),
                    n = async () => {
                        let a;
                        if (!e.blockStore) return;
                        let o = i(358377).default.state,
                            l = i(793767).A.state.isInputFocused ? i(793767).A.state.inputTextSelection : "empty" !== o.mode ? o.multiSelection : void 0;
                        if (l) {
                            a = i(169274).wg();
                            let o = await i(864850).T.formulas.load();
                            i(22229).hN({
                                environment: t,
                                blockStore: e.blockStore,
                                multiSelection: l,
                                property_id: i(363746).A.state.isOpen ? i(363746).A.state.property : i(129894).A.state.isOpen ? i(129894).A.state.property : void 0,
                                formulasModule: o
                            })
                        }(0, i(961511).s)(t, {
                            action: "comment",
                            from: a ? "simple_table_cell" : void 0
                        }), i(661720).I()
                    };
                return (0, o.jsx)(i(51831).m, {
                    placement: e.placement ? ? void 0,
                    content: () => (0, o.jsxs)(a.Fragment, {
                        children: [(0, o.jsx)("div", {
                            children: (0, o.jsx)(i(109939).sA, {
                                defaultMessage: "Comment",
                                id: "inlineCommentButton.tooltip"
                            })
                        }), (0, o.jsx)("div", {
                            children: (0, o.jsx)(i(693592).A, {
                                style: l.keyboardShorcut,
                                name: "comment"
                            })
                        })]
                    }),
                    children: t => (0, o.jsxs)(i(64960).Ay, {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            padding: e.iconOnly ? 6 : "0 6px",
                            whiteSpace: "nowrap",
                            gap: 4,
                            ...e.style
                        },
                        disabled: e.disabled,
                        disabledFeedback: e.disabled,
                        onClick: n,
                        ariaLabel: e.ariaLabel,
                        ...t,
                        children: [(0, o.jsx)(i(16275).I, {
                            icon: i(557488).h
                        }), i(986939).A.isMobile || e.iconOnly ? void 0 : (0, o.jsx)(i(109939).sA, {
                            defaultMessage: "Comment",
                            id: "inlineCommentButton.commentLabel"
                        })]
                    })
                })
            }
        },
        567691: (e, t, i) => {
            i.d(t, {
                s7: () => Y,
                dH: () => J
            }), i(16280), i(944114), i(898992), i(354520), i(581454), i(908872), i(296540);
            var a = i(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, a.jsx)("path", {
                        d: "M15.625 7.25a.625.625 0 1 0 1.25 0v-1.5a2.625 2.625 0 0 0-2.625-2.625h-1.5a.625.625 0 1 0 0 1.25h1.5c.76 0 1.375.616 1.375 1.375zm-11.25 5.5a.625.625 0 1 0-1.25 0v1.5a2.625 2.625 0 0 0 2.625 2.625h1.5a.625.625 0 1 0 0-1.25h-1.5c-.76 0-1.375-.616-1.375-1.375zm7.75 3.5c0-.345.28-.625.625-.625h1.5c.76 0 1.375-.616 1.375-1.375v-1.5a.625.625 0 1 1 1.25 0v1.5a2.625 2.625 0 0 1-2.625 2.625h-1.5a.625.625 0 0 1-.625-.625m-7.75-9a.625.625 0 1 1-1.25 0v-1.5A2.625 2.625 0 0 1 5.75 3.125h1.5a.625.625 0 1 1 0 1.25h-1.5c-.76 0-1.375.616-1.375 1.375zm2-.25c0-.897.728-1.625 1.625-1.625h4c.898 0 1.625.728 1.625 1.625v6c0 .898-.727 1.625-1.625 1.625H8A1.625 1.625 0 0 1 6.375 13zM8 6.625A.375.375 0 0 0 7.625 7v1.117H9.45V6.625zm2.55 0v1.492h1.825V7A.375.375 0 0 0 12 6.625zm0 2.592v1.566h1.825V9.217zm-1.1 0H7.625v1.566H9.45zm0 2.666H7.625V13c0 .207.168.375.375.375h1.45zm1.1 1.492H12a.375.375 0 0 0 .375-.375v-1.117H10.55z"
                    })
                },
                l = (0, i(104509).wt)("databaseEmbed", o, "default"),
                n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 2.87 13.75 14.26",
                    svg: (0, a.jsx)("path", {
                        d: "M3.75 2.875a.625.625 0 1 0 0 1.25h9.5a.625.625 0 1 0 0-1.25zm0 7.8a.625.625 0 1 0 0 1.25h9.5a.625.625 0 1 0 0-1.25zm-.625-3.883c0-.727.59-1.317 1.317-1.317h11.116c.727 0 1.317.59 1.317 1.317v1.216c0 .727-.59 1.317-1.317 1.317H4.442c-.727 0-1.317-.59-1.317-1.317zm1.317-.067a.067.067 0 0 0-.067.067v1.216c0 .037.03.067.067.067h11.116c.037 0 .067-.03.067-.067V6.792a.067.067 0 0 0-.067-.067zm0 6.55c-.727 0-1.317.59-1.317 1.317v1.216c0 .727.59 1.317 1.317 1.317h6.689c.727 0 1.317-.59 1.317-1.317v-1.216c0-.727-.59-1.317-1.317-1.317zm-.067 1.317c0-.037.03-.067.067-.067h6.689c.037 0 .067.03.067.067v1.216c0 .037-.03.067-.067.067H4.442a.067.067 0 0 1-.067-.067z"
                    })
                },
                r = (0, i(104509).wt)("inlineBlockDouble", n, "default"),
                s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.27 4.37 15.46 11.25",
                    svg: (0, a.jsx)("path", {
                        d: "M7 4.375a.625.625 0 1 0 0 1.25h10.1a.625.625 0 1 0 0-1.25zm0 5a.625.625 0 1 0 0 1.25h10.1a.625.625 0 1 0 0-1.25zM6.375 15c0-.345.28-.625.625-.625h10.1a.625.625 0 1 1 0 1.25H7A.625.625 0 0 1 6.375 15M2.9 9.375a.625.625 0 1 0 0 1.25h1.5a.625.625 0 1 0 0-1.25zM2.275 5c0-.345.28-.625.625-.625h1.5a.625.625 0 1 1 0 1.25H2.9A.625.625 0 0 1 2.275 5m.625 9.375a.625.625 0 1 0 0 1.25h1.5a.625.625 0 1 0 0-1.25z"
                    })
                },
                c = (0, i(104509).wt)("listDash", s, "default");

            function d(e) {
                let {
                    isInline: t,
                    viewType: a,
                    chartType: o
                } = e;
                return i(412951).RecordMapPolymorphic.create({
                    block: {
                        root: {
                            id: "root",
                            type: t ? "collection_view" : "collection_view_page",
                            view_ids: ["view"],
                            alive: !0
                        }
                    },
                    collection_view: {
                        view: {
                            id: "view",
                            version: 0,
                            type: a,
                            parent_id: "root",
                            parent_table: "block",
                            alive: !0,
                            format: o ? {
                                chart_config: {
                                    type: "placeholder",
                                    placeHolderType: o
                                }
                            } : {}
                        }
                    }
                })
            }
            let p = (0, i(109939).YK)({
                    basicBlocksSection: {
                        id: "action.section.basicBlocks",
                        defaultMessage: "Basic blocks"
                    },
                    tableViewTitle: {
                        id: "newBlock.tableView.title",
                        defaultMessage: "Table view"
                    },
                    tableViewDescription: {
                        id: "newBlock.tableView.description",
                        defaultMessage: "Add a table view for a new or existing data source"
                    },
                    boardViewTitle: {
                        id: "newBlock.boardView.title",
                        defaultMessage: "Board view"
                    },
                    boardViewDescription: {
                        id: "newBlock.boardView.description",
                        defaultMessage: "Create a kanban board database view"
                    },
                    boardViewKeywords: {
                        id: "newBlock.boardView.fuzzySearchKeyword",
                        defaultMessage: "board view kanban"
                    },
                    galleryViewTitle: {
                        id: "newBlock.galleryView.title",
                        defaultMessage: "Gallery view"
                    },
                    galleryViewDescription: {
                        id: "newBlock.galleryView.description",
                        defaultMessage: "Create a gallery database view"
                    },
                    listViewTitle: {
                        id: "newBlock.listView.title",
                        defaultMessage: "List view"
                    },
                    listViewDescription: {
                        id: "newBlock.listView.description",
                        defaultMessage: "Create a list database view"
                    },
                    feedViewTitle: {
                        id: "newBlock.feedView.title",
                        defaultMessage: "Feed view"
                    },
                    feedViewDescription: {
                        id: "newBlock.feedView.description",
                        defaultMessage: "Create a feed database view"
                    },
                    dashboardViewTitle: {
                        id: "newBlock.dashboardView.title",
                        defaultMessage: "Dashboard view"
                    },
                    dashboardViewDescription: {
                        id: "newBlock.dashboardView.description",
                        defaultMessage: "Create a dashboard database view"
                    },
                    mapViewTitle: {
                        id: "newBlock.mapView.title",
                        defaultMessage: "Map view"
                    },
                    mapViewDescription: {
                        id: "newBlock.mapView.description",
                        defaultMessage: "Create a map database view"
                    },
                    calendarViewTitle: {
                        id: "newBlock.calendarView.title",
                        defaultMessage: "Calendar view"
                    },
                    calendarViewDescription: {
                        id: "newBlock.calendarView.description",
                        defaultMessage: "Create a calendar database view"
                    },
                    timelineViewTitle: {
                        id: "newBlock.timelineView.title",
                        defaultMessage: "Timeline view"
                    },
                    timelineViewDescription: {
                        id: "newBlock.timelineView.description",
                        defaultMessage: "Create a timeline database view"
                    },
                    verticalBarChartTitle: {
                        id: "newBlock.verticalBarChart.title",
                        defaultMessage: "Vertical bar chart"
                    },
                    verticalBarChartDescription: {
                        id: "newBlock.verticalBarChart.description",
                        defaultMessage: "Create a vertical bar chart from a database"
                    },
                    horizontalBarChartTitle: {
                        id: "newBlock.horizontalBarChart.title",
                        defaultMessage: "Horizontal bar chart"
                    },
                    horizontalBarChartDescription: {
                        id: "newBlock.horizontalBarChart.description",
                        defaultMessage: "Create a horizontal bar chart from a database"
                    },
                    lineChartTitle: {
                        id: "newBlock.lineChart.title",
                        defaultMessage: "Line chart"
                    },
                    lineChartDescription: {
                        id: "newBlock.lineChart.description",
                        defaultMessage: "Create a line chart from a database"
                    },
                    donutChartTitle: {
                        id: "newBlock.donutChart.title",
                        defaultMessage: "Donut chart"
                    },
                    donutChartDescription: {
                        id: "newBlock.donutChart.description",
                        defaultMessage: "Create a donut chart from a database"
                    },
                    numberChartTitle: {
                        id: "newBlock.numberChart.title",
                        defaultMessage: "Number chart"
                    },
                    numberChartDescription: {
                        id: "newBlock.numberChart.description",
                        defaultMessage: "Create a number chart from a database"
                    },
                    databaseInlineTitle: {
                        id: "newBlock.databaseInline.title",
                        defaultMessage: "Database - Inline"
                    },
                    formTitle: {
                        id: "newBlock.databaseInline.form",
                        defaultMessage: "Form"
                    },
                    formDatabaseTitle: {
                        id: "newBlock.databaseInline.formDatabaseTitle",
                        defaultMessage: "New form"
                    },
                    formDisabledTooltipMessage: {
                        id: "newBlock.databaseInline.form.cannotCreateWithoutFullAccess",
                        defaultMessage: "You need “Full access” to this page to create a form."
                    },
                    formDisabledInPrivatePageTooltipMessage: {
                        id: "newBlock.form.cannotCreateInPrivatePage",
                        defaultMessage: "Guests cannot create forms in their private pages"
                    },
                    databaseInlineDescription: {
                        id: "newBlock.databaseInline.description",
                        defaultMessage: "Add a new inline database to this page"
                    },
                    formDescription: {
                        id: "newBlock.form.description",
                        defaultMessage: "Create a form from scratch"
                    },
                    databaseInlineKeywords: {
                        id: "newBlock.databaseInline.fuzzySearchKeywords",
                        defaultMessage: "Database Inline db"
                    },
                    formInlineKeywords: {
                        id: "newBlock.form.fuzzySearchKeywords",
                        defaultMessage: "Form"
                    },
                    databaseFullPageTitle: {
                        id: "newBlock.databaseFullPage.title",
                        defaultMessage: "Database - Full page"
                    },
                    databaseFullPageDescription: {
                        id: "newBlock.databaseFullPage.description",
                        defaultMessage: "Add a new database as a sub-page"
                    },
                    databaseFullPageKeywords: {
                        id: "newBlock.databaseFullPage.fuzzySearchKeywords",
                        defaultMessage: "Database Full page db"
                    },
                    linkedViewOfCollectionTitle: {
                        id: "newBlock.linkedViewOfCollection.title",
                        defaultMessage: "Linked view of data source"
                    },
                    linkedViewOfCollectionMobileTitle: {
                        id: "newBlock.linkedViewOfCollectionMobile.title",
                        defaultMessage: "Linked view"
                    },
                    linkedViewOfCollectionKeywords: {
                        id: "newBlock.linkedViewOfCollection.fuzzySearchKeywords",
                        defaultMessage: "Create linked view of data source database db"
                    },
                    linkedViewOfCollectionDescription: {
                        id: "newBlock.linkedViewOfCollection.description",
                        defaultMessage: "Add a view of an existing data source to this page"
                    },
                    customBlockTitle: {
                        id: "newBlock.customBlock.title",
                        defaultMessage: "Custom block"
                    },
                    customBlockKeywords: {
                        id: "newBlock.customBlock.fuzzySearchKeywords",
                        defaultMessage: "custom block custom view component iframe module widget"
                    },
                    customBlockDescription: {
                        id: "newBlock.customBlock.description",
                        defaultMessage: "Insert a configurable custom view block"
                    },
                    mentionPersonTitle: {
                        id: "action.mentionPerson.title",
                        defaultMessage: "Mention a person"
                    },
                    mentionPersonDescription: {
                        id: "action.mentionPerson.description",
                        defaultMessage: "Ping someone so they get a notification"
                    },
                    mentionPageTitle: {
                        id: "action.mentionPage.title",
                        defaultMessage: "Mention a page or data source"
                    },
                    mentionPageDescription: {
                        id: "action.mentionPage.description",
                        defaultMessage: "Mention a page or data source, and place in text"
                    },
                    dateOrReminderTitle: {
                        id: "action.dateOrReminder.title",
                        defaultMessage: "Date or reminder"
                    },
                    dateOrReminderDescription: {
                        id: "action.dateOrReminder.description",
                        defaultMessage: "Insert a date or reminder in text"
                    },
                    insertEmojiTitle: {
                        id: "action.insertEmoji.title",
                        defaultMessage: "Emoji"
                    },
                    insertEmojiDescription: {
                        id: "action.insertEmoji.description",
                        defaultMessage: "Search for an emoji to place in text"
                    },
                    insertInlineEquationTitle: {
                        id: "action.insertInlineEquation.title",
                        defaultMessage: "Inline equation"
                    },
                    insertInlineEquationKeywords: {
                        id: "action.insertInlineEquation.fuzzySearchKeyword",
                        defaultMessage: "LaTeX Math Inline Equation $"
                    },
                    insertInlineEquationDescription: {
                        id: "action.insertInlineEquation.description",
                        defaultMessage: "Insert mathematical symbols in text"
                    },
                    databaseSection: {
                        id: "action.section.database",
                        defaultMessage: "Database"
                    },
                    mediaSection: {
                        id: "action.section.media",
                        defaultMessage: "Media"
                    },
                    advancedBlocksSection: {
                        id: "action.section.advancedBlocks",
                        defaultMessage: "Advanced blocks"
                    },
                    inlineSection: {
                        id: "action.section.inline",
                        defaultMessage: "Inline"
                    },
                    embedsSection: {
                        id: "action.section.embeds",
                        defaultMessage: "Embeds"
                    },
                    syncedDatabasesSection: {
                        id: "action.section.syncedDatabases",
                        defaultMessage: "Synced Databases"
                    },
                    actionsSection: {
                        id: "action.section.actions",
                        defaultMessage: "Actions"
                    },
                    importsBlockSection: {
                        id: "action.section.importsBlock",
                        defaultMessage: "Import"
                    }
                }),
                m = (0, i(109939).YK)({
                    aiImageSectionTitle: {
                        id: "action.section.aiImageGeneration",
                        defaultMessage: "Image creation"
                    },
                    aiImageTitle: {
                        id: "action.aiImage.title",
                        defaultMessage: "AI Image"
                    },
                    aiImageKeywords: {
                        id: "action.aiImage.keywords",
                        defaultMessage: "AI Image image generation"
                    },
                    aiImageDescription: {
                        id: "action.aiImage.description",
                        defaultMessage: "Generate an image with AI"
                    },
                    aiSlidesTitle: {
                        id: "action.aiSlides.title",
                        defaultMessage: "AI Slides"
                    },
                    aiSlidesKeywords: {
                        id: "action.aiSlides.keywords",
                        defaultMessage: "AI Slides slide presentation"
                    },
                    aiSlidesDescription: {
                        id: "action.aiSlides.description",
                        defaultMessage: "Create a presentation slide summarizing this page"
                    },
                    aiChartTitle: {
                        id: "action.aiChart.title",
                        defaultMessage: "AI Chart"
                    },
                    aiChartKeywords: {
                        id: "action.aiChart.keywords",
                        defaultMessage: "AI Chart chart generation"
                    },
                    aiChartDescription: {
                        id: "action.aiChart.description",
                        defaultMessage: "Create a chart that visualizes this page"
                    },
                    aiDiagramTitle: {
                        id: "action.aiDiagram.title",
                        defaultMessage: "AI Diagram"
                    },
                    aiDiagramKeywords: {
                        id: "action.aiDiagram.keywords",
                        defaultMessage: "AI Diagram diagram generation"
                    },
                    aiDiagramDescription: {
                        id: "action.aiDiagram.description",
                        defaultMessage: "Create a diagram about this page"
                    }
                });

            function u(e) {
                return !i(986939).A.isMobile && (0, i(272659).V)({
                    pageContext: e.pageContext
                })
            }

            function b(e) {
                if (0 === e.blocks.length) return !1;
                let t = e.blocks[0];
                if (!t) return !1;
                let a = t.getSpaceStore();
                if (!a || !e.environment.currentUser.id) return !1;
                let o = i(852864).H({
                    spaceStore: a,
                    userId: e.environment.currentUser.id,
                    environment: e.environment
                });
                return (0, i(642138).E)(t, o)
            }
            let y = [i(992140).ry[i(955630).xd.text], i(992140).ry[i(955630).xd.header], i(992140).ry[i(955630).xd.subHeader], i(992140).ry[i(955630).xd.subSubHeader], i(992140).ry[i(955630).xd.header4], i(992140).ry[i(955630).xd.bulletedList], i(992140).ry[i(955630).xd.numberedList], i(992140).ry[i(955630).xd.toDo], i(992140).ry[i(955630).xd.toggle], i(992140).ry[i(955630).xd.page], i(992140).ry[i(955630).xd.callout], i(992140).ry[i(955630).xd.quote], i(992140).ry[i(955630).xd.table], i(992140).ry[i(955630).xd.divider], i(992140).ry[i(955630).xd.linkToPage]],
                g = [i(992140).ry[i(955630).xd.image], i(992140).ry[i(955630).xd.video], i(992140).ry[i(955630).xd.audio], i(992140).ry[i(955630).xd.code], i(992140).ry[i(955630).xd.file], i(992140).ry[i(955630).xd.drawing], i(992140).ry[i(955630).xd.bookmark]],
                h = i(992140).ry[i(955630).xd.image];

            function f(e) {
                var t;
                let a, o = i(962299).A.formatMessage(e.titleMessage),
                    l = `${t=e.keywordsMessage,(a=i(962299).A.formatMessage(t))!==t.defaultMessage?`${a} ${t.defaultMessage}`:a} ${h.searchName}`.trim(),
                    n = i(962299).A.formatMessage(e.descriptionMessage);
                return { ...h,
                    key: e.key,
                    analyticsName: e.titleMessage.defaultMessage,
                    displayName: o,
                    searchName: l,
                    description: n,
                    tooltipPhoto: void 0,
                    icon: () => e.icon,
                    badge: e.badge,
                    shouldShow: u,
                    postCreateCallback: (t, a, o) => {
                        var l;
                        null == (l = h.postCreateCallback) || l.call(h, t, a, o), e.templateStyle && (0, i(233519).V)({
                            blockId: t.id,
                            template: {
                                style: e.templateStyle,
                                prefill: (0, i(347035).E)(e.templateStyle)
                            }
                        }), i(326190).Rt(a, {
                            source: "page_block",
                            status: "shortcut_selected",
                            entrypoint: "slash_menu",
                            shortcut: e.key,
                            style: e.templateStyle
                        })
                    }
                }
            }
            let w = [f({
                    key: "ai_image",
                    titleMessage: m.aiImageTitle,
                    keywordsMessage: m.aiImageKeywords,
                    descriptionMessage: m.aiImageDescription,
                    icon: i(775451).W,
                    badge: "new"
                }), f({
                    key: "ai_slides",
                    titleMessage: m.aiSlidesTitle,
                    keywordsMessage: m.aiSlidesKeywords,
                    descriptionMessage: m.aiSlidesDescription,
                    icon: i(632054).T,
                    templateStyle: "slide",
                    badge: "beta"
                }), f({
                    key: "ai_chart",
                    titleMessage: m.aiChartTitle,
                    keywordsMessage: m.aiChartKeywords,
                    descriptionMessage: m.aiChartDescription,
                    icon: i(344630).j,
                    templateStyle: "chart",
                    badge: "beta"
                }), f({
                    key: "ai_diagram",
                    titleMessage: m.aiDiagramTitle,
                    keywordsMessage: m.aiDiagramKeywords,
                    descriptionMessage: m.aiDiagramDescription,
                    icon: i(950237).layoutIcon,
                    templateStyle: "diagram",
                    badge: "beta"
                })],
                v = [i(992140).h_[i(955630).bF.csvImport], i(992140).h_[i(955630).bF.htmlImport], i(992140).h_[i(955630).bF.markdownImport], i(992140).h_[i(955630).bF.asanaImport], i(992140).h_[i(955630).bF.confluenceApiImport], i(992140).h_[i(955630).bF.googleDocsImport], i(992140).h_[i(955630).bF.trelloImport], i(992140).h_[i(955630).bF.dropboxPaperImport], i(992140).h_[i(955630).bF.evernoteImport], i(992140).h_[i(955630).bF.workflowyImport], i(992140).h_[i(955630).bF.wordImport], i(992140).h_[i(955630).bF.mondayImport], i(992140).h_[i(955630).bF.quipImport], i(992140).h_[i(955630).bF.genericImport], i(992140).h_[i(955630).bF.pdfImport]],
                k = (0, i(992140).Vg)({
                    key: "table view",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.tableViewTitle,
                    thumbnail: i(896221).A.images.blocks.tableViewInlinePng,
                    icon: () => i(518630).T,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.tableViewSvg,
                    description: p.tableViewDescription,
                    fuzzySearchKeywords: p.tableViewTitle,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.tablePng,
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "table"
                    }),
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "table",
                            isPlaceholderCollection: !0
                        })
                    },
                    collectionViewType: "table"
                }),
                T = (0, i(992140).Vg)({
                    key: "board view",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.boardViewTitle,
                    thumbnail: i(896221).A.images.blocks.boardInlinePng,
                    icon: () => i(602834).q,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.boardViewSvg,
                    description: p.boardViewDescription,
                    fuzzySearchKeywords: p.boardViewKeywords,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.boardPng,
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "board"
                    }),
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "board",
                            isPlaceholderCollection: !0
                        })
                    },
                    collectionViewType: "board"
                }),
                _ = (0, i(992140).Vg)({
                    key: "gallery view",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.galleryViewTitle,
                    thumbnail: i(896221).A.images.blocks.galleryInlinePng,
                    icon: () => i(7776).squareGrid2X2Icon,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.galleryViewSvg,
                    description: p.galleryViewDescription,
                    fuzzySearchKeywords: p.galleryViewTitle,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.galleryPng,
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "gallery"
                    }),
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "gallery",
                            isPlaceholderCollection: !0
                        })
                    },
                    collectionViewType: "gallery"
                }),
                A = (0, i(992140).Vg)({
                    key: "list view",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.listViewTitle,
                    thumbnail: i(896221).A.images.blocks.listInlinePng,
                    icon: () => c,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.listViewSvg,
                    description: p.listViewDescription,
                    fuzzySearchKeywords: p.listViewTitle,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.listPng,
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "list"
                    }),
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "list",
                            isPlaceholderCollection: !0
                        })
                    },
                    collectionViewType: "list"
                }),
                M = (0, i(992140).Vg)({
                    key: "calendar view",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.calendarViewTitle,
                    thumbnail: i(896221).A.images.blocks.calendarInlinePng,
                    icon: () => i(998172).D,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.calendarViewSvg,
                    description: p.calendarViewDescription,
                    fuzzySearchKeywords: p.calendarViewTitle,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.calendarPng,
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "calendar"
                    }),
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "calendar",
                            isPlaceholderCollection: !0
                        })
                    },
                    collectionViewType: "calendar"
                }),
                S = (0, i(992140).Vg)({
                    key: "timeline view",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.timelineViewTitle,
                    thumbnail: i(896221).A.images.blocks.timelineInlinePng,
                    icon: () => i(840745).u,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.timelineViewSvg,
                    description: p.timelineViewDescription,
                    fuzzySearchKeywords: p.timelineViewTitle,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.timelinePng,
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "timeline"
                    }),
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "timeline",
                            isPlaceholderCollection: !0
                        })
                    },
                    collectionViewType: "timeline"
                }),
                P = (0, i(992140).Vg)({
                    key: "feed view",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.feedViewTitle,
                    thumbnail: "",
                    icon: () => i(128382).N,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.feedViewSvg,
                    description: p.feedViewDescription,
                    fuzzySearchKeywords: p.feedViewTitle,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.feedPng,
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "feed"
                    }),
                    postCreateCallback: (e, t) => {
                        let a = e.getCollectionViewStores()[0];
                        a && (0, i(132229).F)(a.id, {
                            viewType: "feed",
                            isPlaceholderCollection: !0
                        })
                    },
                    collectionViewType: "feed"
                }),
                C = (0, i(992140).Vg)({
                    key: "dashboard view",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.dashboardViewTitle,
                    thumbnail: "",
                    icon: () => i(30594).r,
                    badge: "new",
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.feedViewSvg,
                    description: p.dashboardViewDescription,
                    fuzzySearchKeywords: p.dashboardViewTitle,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.tablePng,
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "dashboard"
                    }),
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "dashboard",
                            isPlaceholderCollection: !0,
                            shouldOpenDashboardBuildMode: !0,
                            viewSettingsStack: {
                                type: "skip"
                            }
                        })
                    },
                    collectionViewType: "dashboard"
                }),
                I = (0, i(992140).Vg)({
                    key: "map view",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.mapViewTitle,
                    thumbnail: "",
                    icon: () => i(183519).O,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.mapViewSvg,
                    description: p.mapViewDescription,
                    fuzzySearchKeywords: p.mapViewTitle,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.mapPng,
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "map"
                    }),
                    postCreateCallback: (e, t, a) => {
                        let o = e.getCollectionViewStores()[0];
                        o && (0, i(132229).F)(o.id, {
                            viewType: "map",
                            isPlaceholderCollection: !0
                        }), (0, i(331941).gh)({
                            transaction: a
                        })
                    },
                    collectionViewType: "map",
                    badge: () => {
                        let e = i(728372).AppStoreCurrentUserSettingsStore.state;
                        return (null == e ? void 0 : e.hasClickedNewMapButton()) ? void 0 : "new"
                    },
                    shouldShow: () => i(218744).default.checkGate({
                        gateName: "place_property",
                        disableExposureLogging: !0
                    })
                }),
                x = (0, i(992140).Vg)({
                    key: "vertical bar chart",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.verticalBarChartTitle,
                    thumbnail: i(896221).A.images.blocks.chartVerticalBarPng,
                    icon: () => i(289871).q,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.verticalBarChartSvg,
                    description: p.verticalBarChartDescription,
                    fuzzySearchKeywords: p.verticalBarChartTitle,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.chartVerticalBarViewPng,
                    collectionViewType: "chart",
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "chart",
                        chartType: "column"
                    }),
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "chart",
                            isPlaceholderCollection: !0
                        })
                    },
                    isDisabled: () => !i(205885).A.state.online
                }),
                V = (0, i(992140).Vg)({
                    key: "horizontal bar chart",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.horizontalBarChartTitle,
                    thumbnail: i(896221).A.images.blocks.chartHorizontalBarPng,
                    icon: () => i(479116).l,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.horizontalBarChartSvg,
                    description: p.horizontalBarChartDescription,
                    fuzzySearchKeywords: p.horizontalBarChartTitle,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.chartHorizontalBarViewPng,
                    collectionViewType: "chart",
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "chart",
                        chartType: "bar"
                    }),
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "chart",
                            isPlaceholderCollection: !0
                        })
                    },
                    isDisabled: () => !i(205885).A.state.online
                }),
                B = (0, i(992140).Vg)({
                    key: "line chart",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.lineChartTitle,
                    thumbnail: i(896221).A.images.blocks.chartLinePng,
                    icon: () => i(58195).g,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.lineChartSvg,
                    description: p.lineChartDescription,
                    fuzzySearchKeywords: p.lineChartTitle,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.chartLineViewPng,
                    collectionViewType: "chart",
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "chart",
                        chartType: "line"
                    }),
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "chart",
                            isPlaceholderCollection: !0
                        })
                    },
                    isDisabled: () => !i(205885).A.state.online
                }),
                D = (0, i(992140).Vg)({
                    key: "donut chart item",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.donutChartTitle,
                    thumbnail: i(896221).A.images.blocks.chartDonutPng,
                    icon: () => i(451248).w,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.donutChartSvg,
                    description: p.donutChartDescription,
                    fuzzySearchKeywords: p.donutChartTitle,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.chartDonutViewPng,
                    collectionViewType: "chart",
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "chart",
                        chartType: "donut"
                    }),
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "chart",
                            isPlaceholderCollection: !0
                        })
                    },
                    isDisabled: () => !i(205885).A.state.online
                }),
                j = (0, i(992140).Vg)({
                    key: "number chart item",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.numberChartTitle,
                    thumbnail: i(896221).A.images.blocks.chartNumberPng,
                    icon: () => i(504118).L,
                    description: p.numberChartDescription,
                    fuzzySearchKeywords: p.numberChartTitle,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.chartNumberViewPng,
                    collectionViewType: "chart",
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "chart",
                        chartType: "number"
                    }),
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "chart",
                            isPlaceholderCollection: !0
                        })
                    },
                    shouldShow: () => i(218744).default.checkGate({
                        gateName: "number_chart"
                    }),
                    isDisabled: () => !i(205885).A.state.online
                }),
                N = (0, i(992140).Vg)({
                    key: "database inline",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.databaseInlineTitle,
                    thumbnail: i(896221).A.images.blocks.tableViewInlinePng,
                    icon: () => l,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.databaseInlineSvg,
                    description: p.databaseInlineDescription,
                    fuzzySearchKeywords: p.databaseInlineKeywords,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.tableViewPng,
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !0,
                        viewType: "table"
                    }),
                    collectionViewType: "inline"
                }),
                z = (0, i(992140).Vg)({
                    key: "form",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.formTitle,
                    thumbnail: i(896221).A.images.blocks.formViewPng,
                    icon: () => r,
                    description: p.formDescription,
                    fuzzySearchKeywords: p.formInlineKeywords,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.formPng,
                    collectionViewType: "form_editor",
                    isDisabled: e => !(0, i(329117).K)(e) || !i(205885).A.state.online || b(e),
                    shouldShow: e => !i(986939).A.isMobile,
                    disabledTooltipMessage: e => (0, i(329117).K)(e) ? b(e) ? i(962299).A.formatMessage(p.formDisabledInPrivatePageTooltipMessage) : void 0 : i(962299).A.formatMessage(p.formDisabledTooltipMessage),
                    createTemplate: e => (0, i(737270).m)({
                        isInline: !0,
                        name: (0, i(247438).x9d)(i(962299).A.formatMessage(p.formDatabaseTitle))
                    }),
                    postCreateCallback: (e, t, a) => {
                        let o = e.getCollectionStoreIfSingleSource();
                        if (!o) throw Error("Collection store not found");
                        let l = null == o ? void 0 : o.getSchema();
                        if (!l) throw Error("Schema not found");
                        (0, i(936441).createCollectionFormEditorView)({
                            environment: t,
                            transaction: a,
                            collectionViewBlockStore: e,
                            collectionId: o.id,
                            schema: l,
                            initializeWithAllDefaultQuestions: !0
                        }), (0, i(936441).createResponsesCollectionView)({
                            environment: t,
                            transaction: a,
                            collectionViewBlockStore: e,
                            collectionStore: o,
                            schema: l
                        })
                    }
                }),
                F = (0, i(992140).Vg)({
                    key: "database full page",
                    blockType: i(955630).xd.collectionViewPage,
                    displayName: p.databaseFullPageTitle,
                    thumbnail: i(896221).A.images.blocks.tableViewPng,
                    icon: () => i(518630).T,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.databaseFullPageSvg,
                    description: p.databaseFullPageDescription,
                    fuzzySearchKeywords: p.databaseFullPageKeywords,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.tableViewPng,
                    createTemplate: () => (0, i(312712).q)({
                        isInline: !1,
                        viewType: "table"
                    }),
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "table",
                            isPlaceholderCollection: !0
                        })
                    },
                    collectionViewType: "full_page"
                }),
                K = (0, i(992140).Vg)({
                    key: "linked database",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.linkedViewOfCollectionTitle,
                    fuzzySearchKeywords: p.linkedViewOfCollectionKeywords,
                    thumbnail: i(896221).A.images.blocks.linkPng,
                    icon: () => i(402524).P,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.linkedViewSvg,
                    description: p.linkedViewOfCollectionDescription,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.tablePng,
                    createTemplate: () => d({
                        isInline: !0,
                        viewType: "table"
                    }),
                    shouldShow: e => !i(986939).A.isMobile,
                    postCreateCallback: e => {
                        let t = e.getCollectionViewStores()[0];
                        t && (0, i(132229).F)(t.id, {
                            viewType: "table",
                            viewSettingsStack: {
                                type: "custom",
                                stack: [{
                                    type: "createViewSource",
                                    existingCollectionStore: void 0,
                                    createdCollectionRecordPointerMap: void 0,
                                    analytics: void 0
                                }]
                            }
                        })
                    }
                }),
                O = (0, i(992140).Vg)({
                    key: "linked database mobile",
                    blockType: i(955630).xd.collectionView,
                    displayName: p.linkedViewOfCollectionMobileTitle,
                    fuzzySearchKeywords: p.linkedViewOfCollectionKeywords,
                    thumbnail: i(896221).A.images.blocks.linkPng,
                    icon: () => i(402524).P,
                    mobileNativeThumbnail: () => i(896221).A.images.mab.database.linkedViewSvg,
                    description: p.linkedViewOfCollectionDescription,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.tablePng,
                    createTemplate: () => d({
                        isInline: !0,
                        viewType: "table"
                    }),
                    shouldShow: e => i(986939).A.isMobile
                }),
                R = [i(992140).ry[i(955630).xd.tableOfContents], i(992140).ry[i(955630).xd.equation], i(992140).ry[i(955630).xd.button], i(992140).ry[i(955630).xd.factory], (0, i(992140).Vg)({
                    key: "custom block",
                    blockType: i(955630).xd.custom,
                    displayName: p.customBlockTitle,
                    fuzzySearchKeywords: p.customBlockKeywords,
                    description: p.customBlockDescription,
                    thumbnail: i(896221).A.images.blocks.embedPng,
                    icon: () => i(950237).layoutIcon,
                    shouldShow: e => !i(986939).A.isMobile && i(218744).default.checkGate({
                        gateName: "custom_blocks"
                    }),
                    postCreateCallback: e => {
                        e.getType() !== i(955630).xd.custom || i(391605).$.setState({
                            open: !0,
                            blockStore: e
                        })
                    }
                }), i(992140).ry[i(955630).xd.breadcrumb], i(992140).ry[i(955630).xd.tab], i(992140).ry[i(955630).xd.transclusionContainer], i(992140).ry[i(955630).sh.toggleFormatHeaderBlock], i(992140).ry[i(955630).sh.toggleFormatSubHeaderBlock], i(992140).ry[i(955630).sh.toggleFormatSubSubHeaderBlock], i(992140).ry[i(955630).sh.column2Block], i(992140).ry[i(955630).sh.column3Block], i(992140).ry[i(955630).sh.column4Block], i(992140).ry[i(955630).sh.column5Block], i(992140).ry[i(955630).xd.transcription], i(992140).ry[i(955630).sh.mermaidCodeBlock], i(992140).ry[i(955630).sh.aiFreePromptBlock], i(992140).ry[i(955630).xd.mail]],
                q = [...[{
                    key: "mentionPerson",
                    title: p.mentionPersonTitle,
                    thumbnail: i(896221).A.images.blocks.mentionPersonPng,
                    icon: i(338).personCircleIcon,
                    description: p.mentionPersonDescription,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.mentionPersonPng,
                    validators: [(0, i(572251).A)(i(287310).J)],
                    action: ({
                        environment: e,
                        pageContext: t
                    }) => {
                        i(977712).Gf({
                            environment: e,
                            spaceStore: null == t ? void 0 : t.spaceStore,
                            mentionTypes: {
                                user: !0,
                                inviteUserToWorkspace: !0,
                                inviteUserToPage: !0,
                                bot: !1,
                                date: !1,
                                page: !1,
                                collection: !1,
                                heading: !1,
                                createPage: !1,
                                reminder: !1,
                                templateVariable: !0,
                                group: !1,
                                team: !1,
                                formulaContextVariable: !1,
                                slackSpecialMention: !1,
                                property: !1,
                                propertyValue: !1
                            }
                        })
                    }
                }, {
                    key: "mentionPage",
                    title: p.mentionPageTitle,
                    thumbnail: i(896221).A.images.blocks.mentionPagePng,
                    icon: i(822084).pageIcon,
                    description: p.mentionPageDescription,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.mentionPagePng,
                    validators: [(0, i(572251).A)(i(287310).J)],
                    action: ({
                        environment: e,
                        pageContext: t
                    }) => {
                        i(977712).Gf({
                            environment: e,
                            spaceStore: null == t ? void 0 : t.spaceStore,
                            mentionTypes: {
                                user: !1,
                                inviteUserToWorkspace: !1,
                                inviteUserToPage: !1,
                                bot: !1,
                                date: !1,
                                reminder: !1,
                                page: !0,
                                collection: !0,
                                heading: !1,
                                createPage: !1,
                                templateVariable: !1,
                                group: !1,
                                team: !1,
                                formulaContextVariable: !1,
                                slackSpecialMention: !1,
                                property: !1,
                                propertyValue: !1
                            }
                        })
                    }
                }, {
                    key: "dateOrReminder",
                    title: p.dateOrReminderTitle,
                    thumbnail: i(896221).A.images.blocks.mentionDatePng,
                    icon: i(772683).clockIcon,
                    description: p.dateOrReminderDescription,
                    tooltipPhoto: i(896221).A.images.tooltips.blocks.mentionTimePng,
                    validators: [(0, i(572251).A)(i(287310).J)],
                    action: ({
                        environment: e,
                        pageContext: t
                    }) => {
                        i(977712).Gf({
                            environment: e,
                            spaceStore: null == t ? void 0 : t.spaceStore,
                            mentionTypes: {
                                user: !1,
                                inviteUserToWorkspace: !1,
                                inviteUserToPage: !1,
                                bot: !1,
                                date: !0,
                                reminder: !0,
                                page: !1,
                                collection: !1,
                                heading: !1,
                                createPage: !1,
                                templateVariable: !0,
                                group: !1,
                                team: !1,
                                formulaContextVariable: !1,
                                slackSpecialMention: !1,
                                property: !1,
                                propertyValue: !1
                            }
                        })
                    }
                }].map(e => (0, i(233319).Ls)({
                    key: `insert ${e.key}`,
                    displayName: e.title,
                    analyticsName: "Insert mention",
                    render: (t, o, {
                        sectionTitle: l,
                        styles: n
                    }) => (0, a.jsx)(i(869770).Ay, { ...t,
                        title: i(962299).A.formatMessage(e.title),
                        thumbnail: e.thumbnail,
                        icon: () => e.icon,
                        tooltipPhoto: e.tooltipPhoto,
                        description: i(962299).A.formatMessage(e.description),
                        format: i(869770).og.Insert,
                        showSectionTitle: !1,
                        sectionTitle: l ? ? "",
                        desktopTitleStyle: null == n ? void 0 : n.desktopTitleStyle
                    }),
                    validators: [(0, i(572251).A)(i(287310).J), i(158213).I],
                    closeParentMenu: !0,
                    action: t => e.action(t),
                    nativeImageReference: t => (0, i(233319).eW)({
                        thumbnail: e.thumbnail
                    })
                })), (0, i(233319).Ls)({
                    key: "insert emoji",
                    displayName: p.insertEmojiTitle,
                    analyticsName: p.insertEmojiTitle.defaultMessage,
                    validators: [(0, i(572251).A)(i(287310).J), i(158213).I],
                    closeParentMenu: !0,
                    render: (e, t, {
                        sectionTitle: o,
                        styles: l
                    }) => (0, a.jsx)(i(869770).Ay, { ...e,
                        title: i(962299).A.formatMessage(p.insertEmojiTitle),
                        description: i(962299).A.formatMessage(p.insertEmojiDescription),
                        thumbnail: i(896221).A.images.blocks.inlineEmojiPng,
                        icon: () => i(976898).emojiFaceIcon,
                        tooltipPhoto: i(896221).A.images.tooltips.blocks.inlineEmojiPng,
                        format: i(869770).og.Insert,
                        showSectionTitle: !1,
                        sectionTitle: o ? ? "",
                        desktopTitleStyle: null == l ? void 0 : l.desktopTitleStyle
                    }),
                    action: ({
                        environment: e
                    }) => i(68205).ns(e),
                    nativeImageReference: e => (0, i(233319).eW)({
                        thumbnail: i(896221).A.images.blocks.inlineEmojiPng
                    })
                }), (0, i(233319).Ls)({
                    key: "insert inline equation",
                    displayName: p.insertInlineEquationTitle,
                    analyticsName: p.insertInlineEquationTitle.defaultMessage,
                    fuzzySearchKeywords: p.insertInlineEquationKeywords,
                    validators: [(0, i(572251).A)(i(287310).J), i(158213).I],
                    closeParentMenu: !0,
                    render: (e, t, {
                        sectionTitle: o,
                        styles: l
                    }) => (0, a.jsx)(i(869770).Ay, { ...e,
                        title: i(962299).A.formatMessage(p.insertInlineEquationTitle),
                        description: i(962299).A.formatMessage(p.insertInlineEquationDescription),
                        thumbnail: i(896221).A.images.blocks.inlineEquationPng,
                        icon: () => i(790656).v,
                        tooltipPhoto: i(896221).A.images.tooltips.blocks.inlineEquationPng,
                        format: i(869770).og.Insert,
                        showSectionTitle: !1,
                        sectionTitle: o ? ? "",
                        desktopTitleStyle: null == l ? void 0 : l.desktopTitleStyle
                    }),
                    lazyDependencyKeys: ["katex"],
                    action: ({
                        environment: e
                    }) => i(817048).Wx({
                        environment: e,
                        analyticsFrom: "slash_menu",
                        katex: (0, i(968864).Y)("katex")
                    }),
                    nativeImageReference: e => (0, i(233319).eW)({
                        thumbnail: i(896221).A.images.blocks.inlineEquationPng
                    })
                })],
                E = new(i(345426)).ComputedStore(() => i(610463).A.integrations.state.filter(e => e.id !== i(49361).ob && e.id !== i(49361).io && e.id !== i(49361).F6 && e.id !== i(49361).mn).map(e => {
                    if ((0, i(212527).Hy)(e) || (0, i(212527).Z1)(e)) {
                        let t = (0, i(212527).Hy)(e) ? "link preview" : "data sync";
                        return {
                            key: e.id,
                            displayName: e.name,
                            analyticsName: e.name,
                            searchName: `${t} ${e.name}`,
                            thumbnail: e.info.icon ? ? i(896221).A.images.blocks.embedPng,
                            thumbnailPadding: 6,
                            description: e.info.tagline,
                            templateRootBlockId: "root",
                            blockType: i(955630).xd.externalObjectInstance,
                            hasTransformShortcut: !1,
                            shouldShow: e => !(0, i(974226).P)(e),
                            createTemplate: () => {
                                let t = {
                                    is_placeholder: !0,
                                    integration_id: e.id
                                };
                                return i(412951).RecordMapPolymorphic.create({
                                    [i(832375).evP]: {
                                        root: {
                                            id: "root",
                                            type: i(955630).xd.externalObjectInstance,
                                            format: t
                                        }
                                    }
                                })
                            }
                        }
                    }
                }).filter(i(722371).O9), {
                    debugName: "getExternalIntegrationCreateBlockItems"
                });

            function L(e) {
                return new(i(345426)).ComputedStore(() => {
                    let t = (0, i(828294).a)("agent_writer"),
                        o = e.isMobileNative || t ? [] : [function(e) {
                            var t;
                            let o, {
                                maxActionsBeforeMore: l,
                                actions: n
                            } = (o = i(728372).AppStoreMainEditorCurrentBlockStore.state ? (0, i(484053).filterAndRankAssistantSurfaceActionsForContext)((0, i(484053).clientSkillToAssistantSurfaceAction)((0, i(681620).getAllClientSkills)({
                                currentPageRecordPointer: void 0,
                                currentCollectionRecordPointer: void 0
                            })), {
                                type: "assistant",
                                surface: "writer",
                                isMobile: i(986939).A.isMobile,
                                pageStore: i(728372).AppStoreMainEditorCurrentBlockStore.state,
                                selectionState: i(584265).default.state,
                                textSelectionState: i(358377).default.state,
                                userSettings: null == (t = i(728372).AppStoreCurrentUserSettingsStore.state) ? void 0 : t.getSettings()
                            }) : [], {
                                maxActionsBeforeMore: i(132108).P.state ? 5 : 1,
                                actions: o.map(e => (0, i(233319).Ls)({
                                    key: `completions.${e.key}`,
                                    analyticsName: `Completions - ${e.key}`,
                                    displayName: e.displayName,
                                    fuzzySearchKeywords: e.displayName,
                                    validators: i(49204).X,
                                    closeParentMenu: !0,
                                    svg: () => (0, a.jsx)(H, {
                                        clientSkill: e
                                    }),
                                    right: (0, i(950884).tY)("submitPrompt"),
                                    sortScoreMultiplier: .75,
                                    action: ({
                                        environment: t
                                    }) => {
                                        let a = (0, i(681620).dangerouslyCreateClientSkillWithParameterValues)(e);
                                        (0, i(950884).Nj)({
                                            environment: t,
                                            clientSkillWithParameterValues: a,
                                            from: "slash_menu",
                                            assistantSurfaceType: i(986939).A.isMobile ? "mobileWriter" : "writer"
                                        })
                                    },
                                    disabled: () => !i(205885).A.state.online
                                })).filter(i(722371).O9)
                            });
                            return (0, i(233319).gy)({
                                key: "completionsSkills",
                                title: i(950884).DZ.notionAI,
                                render: (0, i(950884).V0)(),
                                actions: (0, i(950884).NM)(n, l)
                            })
                        }(e.environment)];
                    return {
                        insertActions: $({
                            environment: e.environment,
                            aiCompletionSections: o,
                            analyticsFrom: "add_menu",
                            isMobileNative: e.isMobileNative
                        }),
                        slashActions: function(e) {
                            let {
                                prefixActions: t
                            } = e;
                            return [...t, (0, i(993581).kR)(), (0, i(233319).gy)({
                                key: "slash actions",
                                title: p.actionsSection,
                                actions: (0, i(173231).hS)((0, i(982735).A2)(), e => e && !e.subActions && !e.hideFromSlashActionMenu).reduce((e, t) => [...e, ...t.actions], [])
                            }), (0, i(612678).II)({
                                itemRenderer: G
                            }), (0, i(612678).DX)({
                                itemRenderer: G
                            })]
                        }({
                            prefixActions: $({
                                environment: e.environment,
                                aiCompletionSections: o,
                                analyticsFrom: "slash_menu",
                                isMobileNative: e.isMobileNative
                            })
                        })
                    }
                }, {
                    debugName: "insertAndSlashActionsStore"
                })
            }

            function H(e) {
                let {
                    clientSkill: t,
                    iconStyle: o
                } = e, l = (0, i(960253).e)(), n = (0, i(681620).skillSectionTypeGivenSkillCategory)(t.category);
                return (0, a.jsx)(i(950884).O1, {
                    svg: t.icon,
                    svgFill: (0, i(681620).getSkillSectionColor)(n, l).color,
                    iconStyle: o
                })
            }
            let U = new(i(345426)).ComputedStore(() => i(610463).A.integrations.state.filter(i(720871).rr).map(e => ({
                key: `synced database ${e.id}`,
                displayName: `${e.name}`,
                analyticsName: `synced database ${e.name}`,
                searchName: `synced database ${e.name}`,
                thumbnail: e.info.icon ? ? i(896221).A.images.blocks.embedPng,
                thumbnailPadding: 6,
                description: e.info.tagline,
                templateRootBlockId: "root",
                blockType: i(955630).xd.collectionView,
                hasTransformShortcut: !1,
                shouldShow: e => !(0, i(974226).P)(e),
                createTemplate: () => (function(e) {
                    let {
                        isInline: t,
                        viewType: a,
                        integrationId: o
                    } = e;
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: void 0,
                                schema: {},
                                format: {
                                    is_placeholder: !0,
                                    integration_id: o
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: a,
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                })({
                    isInline: !0,
                    viewType: "table",
                    integrationId: e.id
                }),
                postCreateCallback: e => {
                    let t = e.getCollectionViewStores()[0];
                    t && (0, i(132229).F)(t.id, {
                        viewType: "table"
                    })
                },
                integrationId: e.id,
                ...e.id === i(49361).F6 && {
                    badge: "new"
                }
            })), {
                debugName: "getExternalIntegrationCreateCollectionViewBlockItems"
            });

            function $(e) {
                let {
                    environment: t,
                    aiCompletionSections: o,
                    analyticsFrom: l,
                    isMobileNative: n
                } = e, r = [(0, i(233319).gy)({
                    key: "Insert Basic Blocks",
                    title: p.basicBlocksSection,
                    actions: y.map(e => W({
                        environment: t,
                        createBlockItem: e,
                        analyticsFrom: l
                    }))
                }), ...o, (0, i(233319).gy)({
                    key: "Insert Media",
                    title: p.mediaSection,
                    actions: g.map(e => W({
                        environment: t,
                        createBlockItem: e,
                        analyticsFrom: l
                    }))
                }), (0, i(233319).gy)({
                    key: "ai image generation shortcuts",
                    title: m.aiImageSectionTitle,
                    actions: w.map(e => W({
                        environment: t,
                        createBlockItem: e,
                        analyticsFrom: "slash_menu"
                    }))
                }), (0, i(233319).gy)({
                    key: "Insert Database New",
                    title: p.databaseSection,
                    actions: [k, T, _, A, P, C, M, S, I, x, V, B, D, j, z, N, F, K, O].map(e => W({
                        environment: t,
                        createBlockItem: e,
                        analyticsFrom: l
                    }))
                }), (0, i(233319).gy)({
                    key: "Insert Advanced Blocks",
                    title: p.advancedBlocksSection,
                    actions: R.map(e => {
                        let a = e.key === i(955630).sh.aiFreePromptBlock ? 1 : void 0;
                        return W({
                            environment: t,
                            createBlockItem: e,
                            analyticsFrom: l,
                            sortScoreMultiplier: a
                        })
                    })
                }), (0, i(233319).gy)({
                    key: "Insert Inline",
                    title: p.inlineSection,
                    actions: q
                }), (0, i(233319).gy)({
                    key: "Insert Embeds",
                    title: p.embedsSection,
                    actions: (function() {
                        let e, t, a, o, l = [];
                        for (let i of E.state) "Figma" === i.displayName ? e = i : "Hex" === i.displayName ? t = i : "Google Drive" === i.displayName ? a = i : "Whimsical" === i.displayName ? o = i : l.push(i);
                        return [i(992140).ry[i(955630).xd.embed], a ? ? i(992140).ry[i(955630).xd.drive], i(992140).ry[i(955630).xd.tweet], i(992140).ry[i(955630).xd.gist], i(992140).ry[i(955630).xd.maps], e ? ? i(992140).ry[i(955630).xd.figma], i(992140).ry[i(955630).xd.abstract], i(992140).ry[i(955630).xd.invision], i(992140).ry[i(955630).xd.mixpanel], i(992140).ry[i(955630).xd.framer], o ? ? i(992140).ry[i(955630).xd.whimsical], i(992140).ry[i(955630).xd.miro], i(992140).ry[i(955630).xd.sketch], i(992140).ry[i(955630).xd.excalidraw], i(992140).ry[i(955630).xd.pdf], i(992140).ry[i(955630).xd.loom], i(992140).ry[i(955630).xd.typeform], i(992140).ry[i(955630).xd.codepen], i(992140).ry[i(955630).xd.replit], t ? ? i(992140).ry[i(955630).xd.hex], i(992140).ry[i(955630).xd.deepnote], ...l]
                    })().map(e => W({
                        environment: t,
                        createBlockItem: { ...e,
                            isDisabled: () => !i(205885).A.state.online
                        },
                        analyticsFrom: l
                    }))
                }), (0, i(233319).gy)({
                    key: "Insert Synced Databases",
                    title: p.syncedDatabasesSection,
                    actions: U.state.map(e => W({
                        environment: t,
                        createBlockItem: { ...e,
                            isDisabled: () => !i(205885).A.state.online
                        },
                        analyticsFrom: l
                    }))
                })];
                return n || r.push((0, i(233319).gy)({
                    key: "Import data from other tools",
                    title: p.importsBlockSection,
                    actions: v.map(e => {
                        var t;
                        return t = { ...e,
                            isDisabled: () => !i(205885).A.state.online
                        }, {
                            key: `import ${t.key}`,
                            displayName: t.displayName,
                            analyticsName: t.analyticsName,
                            searchName: t.searchName,
                            render: (e, o, l) => {
                                let {
                                    extendItemTitle: n,
                                    sectionTitle: r,
                                    styles: s
                                } = l;
                                return (0, a.jsx)(i(869770).Ay, { ...e,
                                    ...t,
                                    thumbnailPadding: 6,
                                    title: t.displayName,
                                    format: i(869770).og.Insert,
                                    showSectionTitle: !!n,
                                    sectionTitle: r ? ? "",
                                    desktopTitleStyle: null == s ? void 0 : s.desktopTitleStyle
                                })
                            },
                            validators: [(0, i(572251).A)(i(287310).J), e => !t.shouldShow || t.shouldShow(e)],
                            closeParentMenu: !0,
                            action: t.action
                        }
                    })
                })), r
            }

            function W({
                environment: e,
                createBlockItem: t,
                analyticsFrom: o,
                blockMenuItemProps: l,
                sortScoreMultiplier: n
            }) {
                let r = [];
                (!i(955630).ei[t.blockType] || t.isToggleable) && r.push((0, i(572251).A)(i(287310).J)), r.push(e => !t.shouldShow || t.shouldShow(e));
                let s = [i(962299).A.formatMessage(p.databaseSection), i(962299).A.formatMessage(p.syncedDatabasesSection), i(962299).A.formatMessage(p.embedsSection)],
                    c = i(610269).Pl({
                        environment: e,
                        hasTransformShortcut: t.hasTransformShortcut,
                        blockType: t.blockType,
                        formatBlockType: t.formatBlockType,
                        locale: i(849917).locale
                    });
                return {
                    key: `insert ${t.key}`,
                    displayName: t.displayName,
                    analyticsName: t.analyticsName,
                    searchName: `${t.searchName} ${c.trim()}`,
                    lazyDependencyKeys: ["insertBlockActions"],
                    render: (o, n, r) => (0, a.jsx)(X, {
                        props: o,
                        context: n,
                        parent: r,
                        createBlockItem: t,
                        environment: e,
                        locale: i(849917).locale,
                        blockMenuItemProps: l,
                        showTitleSections: s
                    }),
                    closeParentMenu: !0,
                    validators: r,
                    action: e => {
                        var a, l, n;
                        let {
                            environment: r,
                            pageContext: s
                        } = e;
                        if (t.isDisabled && null != (a = t.isDisabled) && a.call(t, e)) return;
                        let c = null == (l = (0, i(888).$)(s)) ? void 0 : l.getSpaceId(),
                            d = null == (n = i(728372).AppStoreCurrentUserRootStore.state) ? void 0 : n.id,
                            p = null == t ? void 0 : t.integrationId,
                            m = (0, i(59651).l)(p);
                        if (m) {
                            let e = (0, i(367890).x)(r, {
                                name: m,
                                spaceId: c,
                                userId: d
                            });
                            if (e && !(0, i(94418).e2)(e)) return void(0, i(907063).K)(r, {
                                from: "synced_database_insert_actions",
                                upsell: e.upsell,
                                spaceStore: (0, i(888).$)(s)
                            })
                        }
                        t.key.includes(i(49361).F6) ? (i(667932).j({
                            environment: r,
                            from: "external_object_instance_block",
                            action: "show_teamspaces"
                        }), (0, i(104310).u)({
                            event: {
                                eventName: "external_sync_entry_point",
                                eventProperties: {
                                    integration: "jira",
                                    from: "slash_menu",
                                    flowId: i(639675).Ay.createNewFlowId()
                                }
                            }
                        })) : i(162865).H.load().then(({
                            insertBlockAndEdit: e
                        }) => {
                            (0, i(377796).createAndCommit)({
                                userAction: "actionRegistry.createInsertAction",
                                environment: r,
                                cellTarget: c ? {
                                    spaceWithId: c
                                } : void 0,
                                canUndo: !0,
                                perform: a => {
                                    e({
                                        environment: r,
                                        selection: i(584265).default.state.stores,
                                        createBlockItem: t,
                                        analyticsFrom: o,
                                        transaction: a
                                    })
                                }
                            })
                        })
                    },
                    nativeImageReference: () => (0, i(233319).eW)({
                        thumbnail: t.mobileNativeThumbnail ? t.mobileNativeThumbnail() : t.thumbnail
                    }),
                    sortScoreMultiplier: n,
                    isDisabled: null == t ? void 0 : t.isDisabled
                }
            }

            function G(e) {
                let {
                    color: t,
                    overrideDisplayName: o,
                    selected: l
                } = e, n = (0, i(114525).j)();
                return (0, a.jsx)(i(377357).A, { ...e.menuListItemProps,
                    color: t,
                    overrideDisplayName: o,
                    selected: l,
                    desktopTitleStyle: n,
                    iconStyle: {
                        height: 20,
                        width: 20,
                        fontSize: 12
                    },
                    itemMarginLeft: 0,
                    itemMarginRight: l ? 4 : void 0,
                    rightStyle: {
                        marginInlineEnd: 4
                    }
                })
            }

            function Y(e) {
                return L({
                    isMobileNative: !1,
                    environment: e
                })
            }

            function J(e) {
                return L({
                    isMobileNative: !0,
                    environment: e
                })
            }

            function X({
                props: e,
                context: t,
                parent: o,
                createBlockItem: l,
                environment: n,
                locale: r,
                blockMenuItemProps: s,
                showTitleSections: c
            }) {
                let {
                    extendItemTitle: d,
                    sectionTitle: p,
                    styles: m
                } = o, u = !!d && c.includes(p || ""), b = i(610269).Pl({
                    environment: n,
                    hasTransformShortcut: l.hasTransformShortcut,
                    blockType: l.blockType,
                    formatBlockType: l.formatBlockType,
                    locale: r
                }), y = (0, i(109939).tz)(), {
                    title: g,
                    selected: h
                } = (0, i(682985).K8)(() => {
                    let e = l.displayName;
                    if (l.blockType === i(955630).xd.transcription) {
                        let t = i(992308).W.state,
                            a = (0, i(869708).vz)(t);
                        e = y.formatMessage(a)
                    }
                    return {
                        title: e,
                        selected: (0, i(993581).sp)(t, l)
                    }
                }, [l, t, y]);
                return (0, a.jsx)(i(869770).Ay, { ...e,
                    ...l,
                    title: g,
                    sectionTitle: p ? ? "",
                    showSectionTitle: u,
                    format: i(869770).og.Insert,
                    selected: h,
                    ...s,
                    isDisabled: l.isDisabled,
                    desktopTitleStyle: null == m ? void 0 : m.desktopTitleStyle,
                    shortcut: b
                })
            }
        },
        725111: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowInCircleDownIcon: () => l,
                iconDefinition: () => o
            }), i(296540);
            var a = i(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M6.958 10.446a.625.625 0 0 1 .884 0l1.533 1.533V6.513a.625.625 0 1 1 1.25 0v5.466l1.533-1.533a.625.625 0 1 1 .884.883l-2.6 2.6a.625.625 0 0 1-.884 0l-2.6-2.6a.625.625 0 0 1 0-.883"
                        }), (0, a.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                        })]
                    })
                },
                l = (0, i(104509).wt)("arrowInCircleDown", o, "default")
        },
        790656: (e, t, i) => {
            i.d(t, {
                v: () => l
            }), i(296540);
            var a = i(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.87 3.62 18.25 12.76",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M19.125 4.25c0 .345-.28.625-.625.625H9.07l-4.745 11.12a.626.626 0 0 1-1.07.137l-.049-.073-2.25-3.97-.05-.115a.625.625 0 0 1 1.065-.604l.073.103 1.626 2.869L8.081 4.005l.043-.083a.63.63 0 0 1 .532-.297H18.5c.345 0 .625.28.625.625"
                        }), (0, a.jsx)("path", {
                            d: "M17.405 15.476a.625.625 0 0 1-.968.748l-.087-.092-2.694-3.487-2.693 3.487-.087.092a.624.624 0 0 1-.969-.748l.068-.108 2.892-3.743-2.892-3.743-.068-.108a.625.625 0 0 1 .97-.748l.086.092 2.693 3.486 2.694-3.486.087-.092a.624.624 0 0 1 .968.748l-.067.108-2.892 3.743 2.892 3.743z"
                        })]
                    })
                },
                l = (0, i(104509).wt)("squareRoot", o, "default")
        },
        890283: (e, t, i) => {
            i.d(t, {
                A: () => p
            }), i(581454);
            var a = i(296540),
                o = i(474848);
            let l = a.Fragment,
                n = {
                    style0: {
                        color: i(632079).Tj.text.inverseSecondary
                    },
                    style1: {
                        display: "flex",
                        alignItems: "center",
                        paddingInlineStart: 7,
                        paddingInlineEnd: 6,
                        whiteSpace: "nowrap",
                        borderRadius: 6,
                        gap: 6
                    }
                },
                r = {
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: 4,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                },
                s = {
                    display: "block"
                },
                c = {
                    paddingBottom: 8
                };

            function d({
                parent: e,
                shouldShowUpdatedColorPicker: t,
                textSelectionColor: l,
                backgroundSelectionColor: n
            }) {
                let p, m = (0, i(533992).v3)(),
                    [u, b] = (0, a.useState)(() => i(363256).e.withListenerIgnored(() => i(735140).A.state.recentlyUsedColors)),
                    y = (0, a.useCallback)(e => {
                        i(31187).Q(e);
                        let {
                            inputTextSelection: t
                        } = i(793767).A.state;
                        i(31904).po({
                            environment: m,
                            annotation: ["h", i(735140).A.getMostRecentlyUsedColor()],
                            forcedSelection: t
                        }), (0, i(961511).s)(m, {
                            action: "h",
                            color: i(735140).A.getMostRecentlyUsedColor()
                        })
                    }, [m]),
                    g = (0, a.useCallback)((e, a, l, n) => ({
                        key: a || e,
                        action: () => {
                            y(e), i(986939).A.isMobile && l.close()
                        },
                        render: l => (0, o.jsx)(i(377357).A, { ...l,
                            color: e,
                            overrideDisplayName: a,
                            selected: n,
                            shouldShowUpdatedColorPicker: t
                        })
                    }), [y, t]);
                p = i(986939).A.isMobile ? {
                    menuType: i(649476).gu.Modal,
                    title: (0, o.jsx)(i(109939).sA, {
                        defaultMessage: "Text color",
                        id: "highlightSelectionButton.mobileTextColor.label"
                    }),
                    right: (0, o.jsx)(i(109939).sA, { ...i(789722).W.cancel
                    }),
                    onClickRight: () => {
                        e.close()
                    }
                } : t ? {
                    menuType: i(649476).gu.Popup,
                    width: 190
                } : {
                    menuType: i(649476).gu.Popup,
                    width: 220
                };
                let h = u.map(t => g(t, void 0, e, !1)),
                    f = (0, i(682985).K8)(() => i(735140).A.getMostRecentlyUsedColor(), []),
                    w = i(632079).N.map(t => g(t, void 0, e, l || n ? t === l : "default" === t)),
                    v = i(632079).AQ.map(t => g(t, void 0, e, t === n));
                return (0, o.jsx)(i(747369).A, { ...p,
                    children: (0, o.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        sections: [{
                            key: 0,
                            items: t ? h : [{
                                key: 0,
                                action: () => {
                                    y(f), i(986939).A.isMobile && e.close()
                                },
                                render: e => (0, o.jsx)(i(377357).A, { ...e,
                                    color: f,
                                    shortcuts: ["toggleHighlight"]
                                })
                            }],
                            render: e => (0, o.jsx)(i(844565).A, { ...e,
                                title: (0, o.jsx)(i(109939).sA, {
                                    defaultMessage: "Recently used",
                                    id: "highlightSelectionButton.lastUsedSection.label"
                                }),
                                desktopStyle: s,
                                children: t ? (0, o.jsx)("div", {
                                    style: r,
                                    children: e.children
                                }) : e.children
                            })
                        }, {
                            key: 1,
                            items: w,
                            render: e => (0, o.jsx)(i(844565).A, { ...e,
                                title: (0, o.jsx)(i(109939).sA, {
                                    defaultMessage: "Text color",
                                    id: "highlightSelectionButton.colorSection.label"
                                }),
                                desktopStyle: s,
                                children: t ? (0, o.jsx)("div", {
                                    style: r,
                                    children: e.children
                                }) : e.children
                            })
                        }, {
                            key: 2,
                            items: v,
                            render: e => (0, o.jsx)(i(844565).A, { ...e,
                                title: (0, o.jsx)(i(109939).sA, {
                                    defaultMessage: "Background color",
                                    id: "highlightSelectionButton.backgroundSection.label"
                                }),
                                desktopStyle: s,
                                children: t ? (0, o.jsx)("div", {
                                    style: { ...r,
                                        ...c
                                    },
                                    children: e.children
                                }) : e.children
                            })
                        }],
                        initialFocus: void 0
                    })
                })
            }
            let p = function(e) {
                let {
                    disabled: t,
                    style: r,
                    blockStore: s,
                    updatedColorPickerIconStyles: c
                } = e, p = (0, i(533992).v3)(), m = (0, a.useCallback)(e => {
                    (0, i(961511).s)(p, {
                        action: "h"
                    })
                }, [p]), u = (0, a.useCallback)(() => {
                    i(358377).default.emit()
                }, []), b = !i(986939).A.isMobile, {
                    textSelectionColor: y,
                    backgroundSelectionColor: g
                } = (0, i(682985).K8)(() => {
                    let e = i(793767).A.state.inputTextSelection ? ? ("editing" === i(358377).default.state.mode ? i(358377).default.state.multiSelection : void 0);
                    if (!e) return {
                        textSelectionColor: void 0,
                        backgroundSelectionColor: void 0
                    };
                    let t = "editing" === i(358377).default.state.mode ? i(358377).default.state.forceExtendAnnotations : {},
                        a = (0, i(1890).x)(["hf", "hb"], e, t),
                        o = a.hf,
                        l = a.hb,
                        n = "default",
                        r = "default_background";
                    if (o && i(247438).YuY(o)) n = i(247438).uIc(o);
                    else if (s) {
                        let {
                            block_color: e
                        } = s.getFormat();
                        e && (0, i(722371).Xk)(i(632079).N, e) && (n = e)
                    }
                    return l && i(247438).YuY(l) && (r = i(247438).uIc(l)), {
                        textSelectionColor: n,
                        backgroundSelectionColor: r
                    }
                }, [s]), h = (0, i(960253).e)(), f = (0, i(960253).I)(() => {
                    let e = (0, i(632079).D$)(y ? ? "default", i(632079).Tj),
                        t = (0, i(632079).D$)(g ? ? "default_background", i(632079).Tj),
                        a = "default" !== y || void 0 === t.background ? e : t,
                        o = (0, i(641822).N)(g ? ? "default_background", !1, h);
                    return {
                        colorIcon: {
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 18,
                            textAlign: "center",
                            fontSize: 15,
                            borderRadius: 2,
                            ...!i(986939).A.isMobile && {
                                width: 18,
                                fontWeight: i(699422).Wy.medium,
                                marginBottom: 2
                            },
                            ...t,
                            ...e
                        },
                        colorIconCircle: b ? {
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: (null == c ? void 0 : c.width) ? ? 24,
                            height: (null == c ? void 0 : c.height) ? ? 24,
                            textAlign: "center",
                            padding: 8,
                            margin: 0,
                            fontSize: (null == c ? void 0 : c.fontSize) ? ? 16,
                            borderRadius: 6,
                            fontWeight: i(699422).Wy.medium,
                            color: e.color,
                            background: t.background,
                            boxShadow: (0, i(245803).Y)(o, !1)
                        } : {
                            width: 16,
                            height: 16,
                            borderRadius: 8,
                            background: a.color ? ? a.fill ? ? a.background
                        }
                    }
                }, [y, g, b, c, h]);
                return (0, o.jsx)(i(656252).A, {
                    popupType: i(986939).A.isMobile ? i(656252).z.SlideUp : i(656252).z.Popup,
                    originGap: 4,
                    onClose: u,
                    onClick: m,
                    disableMouseCapture: !i(986939).A.isMobile,
                    enableOutsideClickDismiss: !i(986939).A.isMobile,
                    content: e => (0, o.jsx)(d, {
                        parent: e,
                        shouldShowUpdatedColorPicker: b,
                        textSelectionColor: y,
                        backgroundSelectionColor: g
                    }),
                    children: e => (0, o.jsx)(i(51831).m, {
                        content: () => (0, o.jsxs)(l, {
                            children: [(0, o.jsx)("div", {
                                children: (0, o.jsx)(i(109939).sA, {
                                    defaultMessage: "Text color",
                                    id: "highlightSelectionButton.textColor.tooltip"
                                })
                            }), (0, o.jsx)("div", {
                                children: (0, o.jsx)(i(693592).A, {
                                    style: n.style0,
                                    name: "toggleHighlight"
                                })
                            })]
                        }),
                        children: a => (0, o.jsx)(i(64960).Ay, {
                            style: { ...n.style1,
                                ...r
                            },
                            disabled: t,
                            disabledFeedback: t,
                            ...(0, i(63390).A)(e, a),
                            children: i(986939).A.isMobile ? (0, o.jsx)("div", {
                                style: f.colorIcon,
                                children: (0, o.jsx)(i(109939).sA, {
                                    defaultMessage: "Color",
                                    id: "highlightSelectionButton.mobileColorIcon.label"
                                })
                            }) : (0, o.jsx)("div", {
                                style: f.colorIconCircle,
                                children: b ? "A" : ""
                            })
                        })
                    })
                })
            }
        },
        928838: (e, t, i) => {
            i.d(t, {
                A: () => r
            });
            var a = i(296540),
                o = () => i(816893),
                l = i(474848);
            let n = {
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 6,
                    padding: 6,
                    width: 28,
                    height: 28
                },
                r = function({
                    style: e,
                    children: t,
                    disabled: a,
                    onClick: r
                }) {
                    let d = (0, i(533992).v3)(),
                        {
                            value: p
                        } = (0, i(815048).fJ)(i(406921).V),
                        m = (0, i(682985).K8)(() => s().equationButton, []),
                        u = (0, i(682985).K8)(() => (function(e) {
                            if (e || "editing" !== i(358377).default.state.mode && !i(552556).A.isOpen()) return !0;
                            for (let e of Object.values({
                                    [i(247438).Ifu.User]: i(247438).Ifu.User,
                                    [i(247438).Ifu.Page]: i(247438).Ifu.Page,
                                    [i(247438).Ifu.Collection]: i(247438).Ifu.Collection,
                                    [i(247438).Ifu.CustomEmoji]: i(247438).Ifu.CustomEmoji,
                                    [i(247438).Ifu.Comment]: i(247438).Ifu.Comment,
                                    [i(247438).Ifu.Bot]: i(247438).Ifu.Bot,
                                    [i(247438).Ifu.Date]: i(247438).Ifu.Date,
                                    [i(247438).Ifu.ExternalObjectInstance]: i(247438).Ifu.ExternalObjectInstance,
                                    [i(247438).Ifu.TemporaryPage]: i(247438).Ifu.TemporaryPage,
                                    [i(247438).Ifu.TemporaryCollection]: i(247438).Ifu.TemporaryCollection,
                                    [i(247438).Ifu.TemplateVariable]: i(247438).Ifu.TemplateVariable,
                                    [i(247438).Ifu.FormulaPageProperty]: i(247438).Ifu.FormulaPageProperty,
                                    [i(247438).Ifu.FormulaContextValue]: i(247438).Ifu.FormulaContextValue,
                                    [i(247438).Ifu.PropertyValue]: i(247438).Ifu.PropertyValue,
                                    [i(247438).Ifu.Group]: i(247438).Ifu.Group,
                                    [i(247438).Ifu.Team]: i(247438).Ifu.Team,
                                    [i(247438).Ifu.Citation]: i(247438).Ifu.Citation,
                                    [i(247438).Ifu.TemporaryCitation]: i(247438).Ifu.TemporaryCitation,
                                    [i(247438).Ifu.LinkMention]: i(247438).Ifu.LinkMention,
                                    [i(247438).Ifu.ChatSelectionContext]: i(247438).Ifu.ChatSelectionContext,
                                    [i(247438).Ifu.AssistantInstructionsCollection]: i(247438).Ifu.AssistantInstructionsCollection,
                                    [i(247438).Ifu.Place]: i(247438).Ifu.Place,
                                    [i(247438).Ifu.SlackSpecialMention]: i(247438).Ifu.SlackSpecialMention,
                                    [i(247438).Ifu.TemporarySearchFilter]: i(247438).Ifu.TemporarySearchFilter,
                                    [i(247438).Ifu.TitleOnly]: i(247438).Ifu.TitleOnly,
                                    [i(247438).Ifu.Sort]: i(247438).Ifu.Sort,
                                    [i(247438).Ifu.SearchFilterCreatedTime]: i(247438).Ifu.SearchFilterCreatedTime,
                                    [i(247438).Ifu.SearchFilterLastEditedTime]: i(247438).Ifu.SearchFilterLastEditedTime,
                                    [i(247438).Ifu.DeletionMarker]: i(247438).Ifu.DeletionMarker
                                }))
                                if ((0, o().y)(e)) return !0;
                            return !1
                        })(a), [a]);
                    return (0, l.jsx)(i(51831).m, {
                        content: () => (0, l.jsx)(c, {}),
                        children: a => (0, l.jsx)(i(64960).Ay, {
                            style: { ...n,
                                ...m,
                                ...e
                            },
                            disabled: u,
                            disabledFeedback: u,
                            onClick: e => (function(e) {
                                let {
                                    e: t,
                                    environment: a,
                                    onClick: o,
                                    katex: l
                                } = e, {
                                    inputTextSelection: n
                                } = i(793767).A.state;
                                n && (0, i(726923).setMultiSelection)({
                                    multiSelection: n
                                }), i(817048).Wx({
                                    environment: a,
                                    analyticsFrom: "rich_text_menu",
                                    katex: l
                                }), o && o(t)
                            })({
                                e,
                                environment: d,
                                onClick: r,
                                katex: p
                            }),
                            ...a,
                            children: t
                        })
                    })
                };

            function s() {
                return {
                    equationButton: {
                        fill: (0, i(56968).B)(i(247438).Ifu.Equation) ? i(632079).Tj.blue.icon.accentPrimary : i(632079).Tj.icon.primary
                    },
                    keyboardShortcut: {
                        color: i(632079).Tj.text.inverseSecondary
                    }
                }
            }

            function c() {
                let e = (0, i(682985).K8)(() => s().keyboardShortcut, []);
                return (0, l.jsxs)(a.Fragment, {
                    children: [(0, l.jsx)("div", {
                        children: (0, l.jsx)(i(109939).sA, {
                            id: "richTextMenu.equationButton.tooltip",
                            defaultMessage: "Mark as equation"
                        })
                    }), (0, l.jsx)("div", {
                        children: (0, l.jsx)(i(693592).A, {
                            style: e,
                            name: "openEquationMenu"
                        })
                    })]
                })
            }
        }
    }
]);