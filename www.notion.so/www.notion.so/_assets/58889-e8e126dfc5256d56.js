"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [58889], {
        10097: (e, t, i) => {
            i.d(t, {
                E: () => o
            }), i(296540);
            var n = i(474848);

            function o({
                authorStore: e,
                avatarSize: t,
                avatarStyle: l,
                hasTooltip: s = !0
            }) {
                let r = (0, i(682985).K8)(() => (0, i(935786).d5)(e), [e]),
                    a = (0, i(960253).I)(() => ({
                        placeholder: {
                            width: t,
                            height: t,
                            background: i(632079).Tj.background.tertiaryTranslucent,
                            borderRadius: t / 2,
                            flexShrink: 0,
                            ...l
                        }
                    }), [t, l]);
                return r.asActor ? r.table === i(832375).oo9 ? (0, n.jsx)(i(321753).A, {
                    hasPersonHoverCard: !0,
                    hasTooltip: s,
                    userValue: r.asActor,
                    style: l,
                    size: t,
                    avatarShouldShowShadow: !1,
                    personHoverCardEntrypoint: "page_comment"
                }) : r.table === i(832375).GPl ? (0, n.jsx)(i(31319).A, {
                    botValue: r,
                    size: t,
                    style: l
                }) : void(0, i(722371).HB)(r) : (0, n.jsx)("div", {
                    style: a.placeholder
                })
            }
        },
        66637: (e, t, i) => {
            i.d(t, {
                H8: () => s,
                I7: () => a,
                aE: () => l
            }), i(296540);
            var n = i(474848);
            let o = (0, i(109939).YK)({
                repliesAndMentions: {
                    id: "pageNotificationSettings.repliesAndMentions.displayName",
                    defaultMessage: "Mentions"
                },
                comments: {
                    id: "pageNotificationSettings.comments.displayName",
                    defaultMessage: "Comments"
                },
                allUpdates: {
                    id: "pageNotificationSettings.allUpdates.displayName",
                    defaultMessage: "All"
                },
                importantUpdates: {
                    id: "pageNotificationSettings.importantUpdates.displayName",
                    defaultMessage: "Important"
                }
            });

            function l(e) {
                switch (e) {
                    case "Mentions":
                        return o.repliesAndMentions;
                    case "Comments":
                        return o.comments;
                    case "All":
                        return o.allUpdates;
                    case "Important":
                        return o.importantUpdates;
                    default:
                        return
                }
            }

            function s(e) {
                let {
                    followSettingsKey: t,
                    environment: l,
                    blockStore: s,
                    from: a
                } = e, d = r({
                    key: "none",
                    selectedKey: t,
                    title: (0, n.jsx)(i(109939).sA, {
                        id: "GetNotifiedDropdown.repliesAndMentions.label",
                        defaultMessage: "Replies and @mentions"
                    }),
                    displayName: o.repliesAndMentions,
                    environment: l,
                    blockStore: s,
                    from: a
                }), c = r({
                    key: "comments",
                    selectedKey: t,
                    title: (0, n.jsx)(i(109939).sA, {
                        id: "GetNotifiedDropdown.allComments.label",
                        defaultMessage: "All comments"
                    }),
                    displayName: o.comments,
                    environment: l,
                    blockStore: s,
                    from: a
                }), u = r({
                    key: "all",
                    selectedKey: t,
                    title: (0, n.jsx)(i(109939).sA, {
                        id: "GetNotifiedDropdown.allUpdates.label",
                        defaultMessage: "All updates"
                    }),
                    caption: (0, n.jsx)(i(109939).sA, {
                        id: "GetNotifiedDropdown.simpleAllUpdates.caption",
                        defaultMessage: "All comments and property changes"
                    }),
                    displayName: o.allUpdates,
                    environment: l,
                    blockStore: s,
                    from: a
                }), m = s.getAssociatedCollectionStore();
                if (!m) return [c, d];
                let p = m.getDatabaseType();
                return p === i(11448).dC ? [u, r({
                    key: "important",
                    selectedKey: t,
                    title: (0, n.jsx)(i(109939).sA, {
                        id: "GetNotifiedDropdown.importantUpdatesTasks.label",
                        defaultMessage: "Important updates"
                    }),
                    caption: (0, n.jsx)(i(109939).sA, {
                        id: "GetNotifiedDropdown.importantUpdatesTasks.caption",
                        defaultMessage: "All comments and changes to Status, Assignee, or Due Date"
                    }),
                    displayName: o.importantUpdates,
                    environment: l,
                    blockStore: s,
                    from: a
                }), d] : p === i(11448).Tw ? [u, r({
                    key: "important",
                    selectedKey: t,
                    title: (0, n.jsx)(i(109939).sA, {
                        id: "GetNotifiedDropdown.importantUpdatesProjects.label",
                        defaultMessage: "Important updates"
                    }),
                    caption: (0, n.jsx)(i(109939).sA, {
                        id: "GetNotifiedDropdown.importantUpdatesProjects.caption",
                        defaultMessage: "All comments and changes to Status or Date"
                    }),
                    displayName: o.importantUpdates,
                    environment: l,
                    blockStore: s,
                    from: a
                }), d] : [u, r({
                    key: "comments",
                    selectedKey: t,
                    title: (0, n.jsx)(i(109939).sA, {
                        id: "GetNotifiedDropdown.onlyCommentsAllComments.label",
                        defaultMessage: "All comments"
                    }),
                    displayName: o.comments,
                    environment: l,
                    blockStore: s,
                    from: a
                }), d]
            }

            function r(e) {
                let {
                    key: t,
                    title: o,
                    caption: l,
                    selectedKey: s,
                    environment: r,
                    blockStore: d,
                    from: c,
                    displayName: u
                } = e, m = a({
                    key: t,
                    userSelectedKey: s
                }), p = {
                    width: 14,
                    height: 14
                };
                return {
                    action: (0, i(233319).Ls)({
                        key: t,
                        displayName: u,
                        analyticsName: t,
                        validators: [],
                        closeParentMenu: !0,
                        action: () => {
                            let e = i(728372).AppStoreCurrentUserRootStore.state;
                            if (e) {
                                let {
                                    following: o,
                                    followSettings: l
                                } = (0, i(366995).A)(t), a = e.id, u = d.id, m = d.getSpaceId();
                                i(90359).v({
                                    environment: r,
                                    following: o,
                                    followSettings: l,
                                    navigableBlockId: u,
                                    spaceId: m,
                                    userId: a,
                                    from: c,
                                    key: t,
                                    selectedKey: s
                                }), ("inbox" === c || "more_menu" === c) && (0, i(562033).r)({
                                    item: {
                                        label: function(e) {
                                            switch (e) {
                                                case "none":
                                                    return (0, n.jsx)(i(109939).sA, {
                                                        id: "GetNotifiedDropdown.subscribedRepliesAndMentionsSuccess.snackbarMessage",
                                                        defaultMessage: "Subscribed to replies and @mentions"
                                                    });
                                                case "comments":
                                                    return (0, n.jsx)(i(109939).sA, {
                                                        id: "GetNotifiedDropdown.subscribedAllCommentsSuccess.snackbarMessage",
                                                        defaultMessage: "Subscribed to all comments"
                                                    });
                                                case "important":
                                                    return (0, n.jsx)(i(109939).sA, {
                                                        id: "GetNotifiedDropdown.subscribedImportantUpdatesSuccess.snackbarMessage",
                                                        defaultMessage: "Subscribed to important updates"
                                                    });
                                                case "all":
                                                    return (0, n.jsx)(i(109939).sA, {
                                                        id: "GetNotifiedDropdown.subscribedAllUpdatesSuccess.snackbarMessage",
                                                        defaultMessage: "Subscribed to all updates"
                                                    });
                                                default:
                                                    (0, i(722371).HB)(e)
                                            }
                                        }(t)
                                    },
                                    undoFunc: () => {
                                        (0, i(462446).t)({
                                            environment: r,
                                            preventSelectText: !0
                                        });
                                        let {
                                            following: e,
                                            followSettings: n
                                        } = (0, i(366995).A)(s);
                                        i(90359).v({
                                            environment: r,
                                            following: e,
                                            followSettings: n,
                                            navigableBlockId: u,
                                            spaceId: m,
                                            userId: a,
                                            from: c,
                                            key: t,
                                            selectedKey: s
                                        })
                                    }
                                })
                            }
                        },
                        render: e => (0, n.jsx)(i(860287).A, { ...e,
                            title: o,
                            caption: l,
                            shouldWrapCaption: !0,
                            isChecked: m,
                            right: !m && (0, n.jsx)("div", {
                                style: p
                            })
                        })
                    }),
                    title: o,
                    isSelectedOption: m
                }
            }

            function a(e) {
                let {
                    key: t,
                    userSelectedKey: i
                } = e;
                return "important" === i || "comments" === i ? "important" === t || "comments" === t : t === i
            }
        },
        90359: (e, t, i) => {
            i.d(t, {
                v: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    key: n,
                    selectedKey: o,
                    following: l,
                    followSettings: s,
                    navigableBlockId: r,
                    userId: a,
                    spaceId: d,
                    from: c
                } = e;
                (0, i(377796).createAndCommit)({
                    userAction: "UpdateSidebarFollowControl.setFollowing",
                    environment: e.environment,
                    cellTarget: {
                        spaceWithId: d
                    },
                    canUndo: !1,
                    perform: t => {
                        i(124937).vt({
                            environment: e.environment,
                            table: i(832375).Cy3,
                            args: {
                                following: l,
                                followSettings: s,
                                navigableBlockId: r,
                                userId: a,
                                spaceId: d
                            },
                            inMemoryRecordCache: e.environment.defaultRecordCache.inMemoryRecordCache,
                            transaction: t
                        })
                    }
                }), l ? i(142215).KN(t, {
                    from: "page_updates"
                }) : i(142215).tm(t, {
                    from: "page_updates"
                }), o !== n && i(142215).EV(t, {
                    from: c,
                    navigableBlockId: r,
                    oldSetting: o,
                    newSetting: n
                })
            }
        },
        222121: (e, t, i) => {
            i.d(t, {
                A: () => s,
                T: () => r
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(296540);
            var n = i(474848);
            let o = new Set([i(955630).xd.toggle, i(955630).xd.bulletedList, i(955630).xd.numberedList, i(955630).xd.quote, i(955630).xd.toDo, i(955630).xd.code, i(955630).xd.callout, i(955630).xd.header, i(955630).xd.subHeader, i(955630).xd.subSubHeader, i(955630).xd.tableRow]),
                l = {
                    style0: {
                        marginTop: 0,
                        marginBottom: 0
                    },
                    style1: {
                        fontFamily: (0, i(699422).vc)(i(849917).locale).mono,
                        fontSize: 12,
                        tabSize: 2
                    },
                    style3: {
                        cursor: "text"
                    }
                };

            function s(e) {
                let t = (0, i(109939).tz)(),
                    s = (0, i(682985).K8)(() => {
                        var t;
                        return e.store.isDefined() ? null == (t = e.store.getParentStore()) ? void 0 : t.getValue() : null
                    }, [e.store]),
                    a = (0, i(682985).K8)(() => e.blockStore.getSpaceId(), [e.blockStore]),
                    d = (0, i(682985).K8)(() => {
                        let t = e.store.getParentStore();
                        if (!(null != t && t.isType("alias"))) return;
                        let n = t.getAliasTargetStore();
                        if ((null == n ? void 0 : n.table) === i(832375).evP && n.isFormBlock()) return {
                            store: n,
                            value: n.getValue()
                        }
                    }, [e.store]),
                    c = (0, i(682985).K8)(() => {
                        if (!e.store.isDefined()) return;
                        let n = e.store.getContext(),
                            o = n ? (0, i(353711).l8)({
                                discussionContextData: n,
                                discussionType: e.store.getType(),
                                discussionId: e.store.id,
                                intl: t
                            }) : void 0;
                        if (!o) return;
                        let l = i(247438).JJ$(o, t => !i(247438).iQL(t) || i(247438).Orm(t) === e.store.id);
                        return i(247438).AhH(l) > 50 && (l = i(247438).JG8(l, 50, [(0, i(247438).Ey_)("…")])), l
                    }, [e.store, t]),
                    u = (0, i(682985).K8)(() => {
                        let t = e.blockStore.getAssociatedCollectionStore();
                        if (!t || "collection" !== t.table) return;
                        let n = t.getSchema(),
                            o = e.store.getPropertyId();
                        if (void 0 !== o) return (0, i(561872)._g)({
                            schema: n,
                            property: o
                        })
                    }, [e.blockStore, e.store]),
                    m = {
                        display: "flex",
                        width: "100%",
                        marginTop: 6,
                        marginBottom: 6,
                        fontSize: 13,
                        color: i(632079).Tj.text.secondary
                    };

                function p(o) {
                    c || (c = [
                        [""]
                    ]);
                    let s = (0, i(511791).RX)(t).title;
                    return s ? (0, n.jsx)("div", {
                        style: m,
                        children: (0, n.jsxs)(i(4458).fI, {
                            width: "100%",
                            children: [(0, n.jsx)(r, {}), u ? (0, n.jsx)(i(384943).A, {
                                propertySchema: u,
                                dontShowColon: "" === c[0][0]
                            }) : void 0, (({
                                textValue: t,
                                propertySchema: o,
                                discussionParentValue: s
                            }) => {
                                let r = (0, n.jsx)("div", {
                                    style: {
                                        overflow: "hidden",
                                        lineHeight: "18px",
                                        maxHeight: 72
                                    },
                                    children: (0, n.jsx)(i(877634).vY, {
                                        value: {
                                            value: t,
                                            spaceId: a
                                        },
                                        propertySchema: o,
                                        labeled: !1,
                                        rootStore: e.blockStore,
                                        disableStyleAnnotations: !0,
                                        disableInsertedDeletedAnnotations: !0,
                                        disableDateStyleAnnotations: !0
                                    })
                                });
                                if (!s) return r;
                                let d = s.type;
                                return d === i(955630).xd.code ? (0, n.jsx)(i(806106).A, {
                                    title: (0, i(877634).Ab)(s),
                                    theme: i(632079).Tj,
                                    style: l.style0,
                                    children: (0, n.jsx)("span", {
                                        style: l.style1,
                                        children: r
                                    })
                                }) : (0, i(877634).ux)(d) ? (0, n.jsx)(i(806106).A, {
                                    title: (0, i(877634).ux)(d),
                                    theme: i(632079).Tj,
                                    style: l.style0,
                                    children: r
                                }) : r
                            })({
                                textValue: c,
                                discussionParentValue: o,
                                propertySchema: s
                            })]
                        })
                    }) : null
                }
                if ("updates_sidebar" === e.discussionLocation) {
                    if (!s) return null;
                    if ("text" !== s.type && void 0 === u) {
                        let t = null != d && d.value ? d.value : s,
                            l = null != d && d.store ? d.store : e.blockStore;
                        return (0, n.jsx)("div", {
                            onClick: e.onClick,
                            style: {
                                display: "flex",
                                cursor: i(993189).Bj6.fromBlock(s).isType(i(955630).Si) ? "text" : void 0
                            },
                            children: c && o.has(s.type) ? p(s) : (0, n.jsxs)("div", {
                                style: m,
                                children: [(0, n.jsx)(r, {}), (0, n.jsx)(i(877634).Ay, {
                                    blockValue: t,
                                    rootStore: l,
                                    blockPreviewLocation: "comments_sidebar"
                                })]
                            })
                        })
                    }
                }
                return (0, n.jsx)("div", {
                    onClick: e.onClick,
                    style: l.style3,
                    children: p()
                })
            }

            function r() {
                let e = (0, i(960253).e)(),
                    t = (0, i(960253).I)(() => ({
                        bar: {
                            width: 2,
                            marginInlineStart: 1,
                            borderRadius: 4,
                            marginInlineEnd: 8,
                            background: (0, i(632079).eb)(e),
                            flexShrink: 0
                        }
                    }), [e]);
                return (0, n.jsx)("div", {
                    style: t.bar
                })
            }
        },
        233633: (e, t, i) => {
            i.d(t, {
                C: () => n
            });

            function n(e) {
                let t;
                if (!i(986939).A.isMobile) return !1;
                if ("discussionFormat" === e.type) t = e.format;
                else {
                    if ("discussionLocation" !== e.type || "post_creator" === e.location || "mobile_post_creator" === e.location) return !1;
                    t = (0, i(241838).discussionLocationToDiscussionFormat)(e.location)
                }
                return t === i(241838).DiscussionFormat.Menu || t === i(241838).DiscussionFormat.Sidebar
            }
        },
        241838: (e, t, i) => {
            i.r(t), i.d(t, {
                DiscussionFormat: () => c,
                anyDiscussionCommentsLoading: () => v,
                discussionLocationToDiscussionFormat: () => b,
                formatFileSize: () => w,
                getDiscussions: () => p,
                getDiscussionsForSidebar: () => g,
                getIcon: () => d,
                getLatestRelevantComment: () => u,
                getSetOfUsersInDiscussions: () => x,
                hasCommentChanged: () => h,
                inputIsEmpty: () => y,
                isCommentAllEmojis: () => S,
                isUserImplicitlyFollowingDiscussion: () => C,
                lineClampForCommentCount: () => m,
                sortDiscussionStoresByLatestComment: () => f
            }), i(898992), i(354520), i(803949), i(581454), i(737550);
            var n, o = () => i(247438);
            i(296540);
            let l = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.79 1.87 16.47 15.5",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M9.66 1.977a.63.63 0 0 1 .785.08l2.647 2.647.08.097a.626.626 0 0 1-.866.867l-.098-.08-1.579-1.58v6.95l6.018 3.475-.577-2.155a.626.626 0 0 1 1.207-.324l.97 3.615.019.121a.625.625 0 0 1-.462.645l-3.614.967a.625.625 0 0 1-.325-1.207l2.158-.579-6.015-3.472-5.97 3.55 2.165.55.118.043a.626.626 0 0 1-.301 1.188l-.125-.02-3.627-.922a.625.625 0 0 1-.451-.76l.921-3.626a.625.625 0 0 1 1.212.308L3.4 14.52l5.98-3.554V4.008L7.8 5.588l-.099.08a.626.626 0 0 1-.786-.964l2.647-2.647z"
                    })
                },
                s = (0, i(104509).wt)("arrow3D", l, "default"),
                r = () => i(43371),
                a = {
                    doc: i(550270).D,
                    docx: i(550270).D,
                    pages: i(550270).D,
                    md: i(550270).D,
                    txt: i(550270).D,
                    rtf: i(550270).D,
                    xls: i(518630).T,
                    xlsx: i(518630).T,
                    csv: i(518630).T,
                    tsv: i(518630).T,
                    ods: i(518630).T,
                    pdf: i(790022).H,
                    pptx: i(61913).G,
                    ppt: i(61913).G,
                    zip: i(225056).p,
                    br: i(225056).p,
                    bz2: i(225056).p,
                    gz: i(225056).p,
                    "7z": i(225056).p,
                    dmg: i(225056).p,
                    pkg: i(225056).p,
                    jar: i(225056).p,
                    rar: i(225056).p,
                    tar: i(225056).p,
                    xar: i(225056).p,
                    stl: s,
                    obj: s,
                    fbx: s,
                    amf: s,
                    iges: s,
                    mp3: i(388544).$,
                    m4a: i(388544).$,
                    wav: i(388544).$,
                    aac: i(388544).$,
                    ogg: i(388544).$,
                    flac: i(388544).$,
                    alac: i(388544).$,
                    wma: i(388544).$,
                    mp4: i(59041).C,
                    m4v: i(59041).C,
                    gifv: i(59041).C,
                    webm: i(59041).C,
                    mkv: i(59041).C,
                    mov: i(59041).C,
                    qt: i(59041).C,
                    avi: i(59041).C,
                    wmv: i(59041).C,
                    asf: i(59041).C,
                    flv: i(59041).C,
                    f4v: i(59041).C,
                    mpeg: i(59041).C,
                    amv: i(59041).C,
                    exe: i(896714).P,
                    otf: i(517259).a,
                    ttf: i(517259).a,
                    woff: i(517259).a,
                    eof: i(517259).a,
                    py: i(501148).Z,
                    java: i(501148).Z,
                    js: i(501148).Z,
                    ts: i(501148).Z,
                    tsx: i(501148).Z,
                    c: i(501148).Z,
                    h: i(501148).Z,
                    cpp: i(501148).Z,
                    go: i(501148).Z,
                    rs: i(501148).Z,
                    css: i(501148).Z,
                    php: i(501148).Z,
                    swift: i(501148).Z,
                    kt: i(501148).Z,
                    lua: i(501148).Z,
                    m: i(501148).Z,
                    bash_profile: i(501148).Z,
                    bashrc: i(501148).Z,
                    zshrc: i(501148).Z,
                    vimrc: i(501148).Z,
                    vim: i(501148).Z
                };

            function d(e) {
                return a[(function(e) {
                    if (!e) return "";
                    let {
                        pathname: t
                    } = i(758654).qg(e);
                    if (!t) return "";
                    let n = t.split(".");
                    return n[n.length - 1]
                })(e).toLowerCase()] ? ? i(865213).Y
            }
            let c = ((n = {})[n.Menu = 0] = "Menu", n[n.Page = 1] = "Page", n[n.Sidebar = 2] = "Sidebar", n[n.Margin = 3] = "Margin", n[n.Unfurl = 4] = "Unfurl", n);

            function u({
                recordStore: e,
                currentUserId: t,
                timestamp: i
            }) {
                return function({
                    recordStore: e,
                    currentUserId: t,
                    timestamp: i
                }) {
                    let n = e.getCommentStoresSortedByCreatedTime().filter(e => i ? e.isDefined() && e.getCreatedTime() < i : e.isDefined());
                    return n[n.length - 1]
                }({
                    recordStore: e,
                    currentUserId: t,
                    timestamp: i
                }) || e.getFirstComment()
            }

            function m(e) {
                return e > 1 ? 3 : 6
            }

            function p(e) {
                return e ? i(966980).Bw(e, {
                    recursivelyLoadAllDiscussions: !0,
                    includeLoadingDiscussions: !0
                }) : []
            }

            function g({
                blockStore: e,
                currentUserId: t,
                ignoreAfterTime: n
            }) {
                if (!e) return [];
                let o = i(966980).Bw(e, {
                        recursivelyLoadAllDiscussions: !0,
                        includeLoadingDiscussions: !0,
                        includePropertyDiscussions: !0
                    }),
                    l = new Map;
                return o.forEach(e => {
                    let i = u({
                        recordStore: e,
                        currentUserId: t,
                        timestamp: n
                    });
                    l.set(e.id, i)
                }), o.sort((e, t) => {
                    let i = l.get(e.id),
                        n = l.get(t.id);
                    return null != i && i.isDefined() ? null != n && n.isDefined() ? -(i.getCreatedTime() - n.getCreatedTime()) : 1 : -1
                })
            }

            function f(e) {
                return e.sort((e, t) => (0, i(9959).a)(e.getLastComment(), t.getLastComment()))
            }

            function y(e) {
                let t = e.state.textStore.getValue(),
                    i = (e.state.files ? ? []).length > 0,
                    n = t && t.length > 0;
                return !i && !n
            }

            function h(e, t) {
                var n, o;
                let l, s, r = e.state.textStore.getValue(),
                    a = e.state.files;
                if (!t) return r && 0 !== r.length || a && a.length > 0;
                let d = i(966980).gp(t).getValue();
                return !i(381453).n4(d, r) || (n = e, o = t, l = n.state.files, (s = i(966980).dd(o)).length !== l.length || s.some((e, t) => e.id !== l[t].id))
            }

            function v(e) {
                return !!(e.some(e => !e.isReady()) || e.some(e => i(966980).wc(e).some(e => !e.isReady())))
            }

            function b(e) {
                switch (e) {
                    case "block_menu":
                    case "ai_reject_all_suggestions":
                    case "reply_menu_mentions_comments":
                    case "reply_menu_all_updates":
                    case "reply_menu_archive":
                    case "reply_menu_updates_sidebar":
                    case "updates_menu_mentions_comments":
                    case "updates_menu_all_updates":
                    case "updates_menu_archive":
                        return c.Menu;
                    case "page_discussion":
                    case "feed_item_top_level_discussion":
                        return c.Page;
                    case "updates_sidebar":
                        return c.Sidebar;
                    case "margin_comments":
                    case "new_discussions_sheet":
                        return c.Margin;
                    case "comment_unfurl":
                        return c.Unfurl;
                    default:
                        (0, i(722371).HB)(e)
                }
            }

            function x(e) {
                return i(381453).hS(i(381453).qI(e, e => i(966980).wc(e).map(e => ({
                    store: e,
                    pointer: e.getCreatedByPointer()
                }))), e => {
                    var t;
                    return null == (t = e.pointer) ? void 0 : t.id
                }).filter(e => (0, i(722371).O9)(e.pointer)).map(({
                    store: e,
                    pointer: t
                }) => (0, i(935786).JQ)({
                    parentStore: e,
                    pointer: t
                })).map(e => e.getModel()).filter(i(722371).O9).map(e => e instanceof i(97113).F ? (0, i(197018).A7)(e) : e instanceof i(646883).Hj ? (0, i(197018).qt)(e) : void(0, i(722371).HB)(e)).filter(i(722371).O9)
            }

            function S(e) {
                for (let i of e) {
                    if (!i.length) return !1;
                    if (!(i[1] && i[1].some(o().nNl))) {
                        var t;
                        let e = i[0].trim(),
                            n = r()();
                        if ((null == (t = e.match(n)) ? void 0 : t.join("")) !== e) return !1
                    }
                }
                return !0
            }

            function w(e) {
                return ((null == e ? void 0 : e.match(/[0-9.]+|[a-z]+/gi)) ? ? []).join(" ")
            }

            function C(e) {
                var t, n;
                let {
                    discussionStore: l,
                    userId: s
                } = e, r = null == (t = l.getParentStore()) ? void 0 : t.getNavigableBlockStore(), a = null == r || null == (n = r.getFollowStore()) ? void 0 : n.getModel();
                return !!(null != a && a.isFollowingAllComments()) || i(966980).wc(l).some(e => {
                    let t = e.getCreatedByPointer();
                    if (t && t.table === i(832375).oo9 && t.id === s) return !0;
                    let n = e.getText();
                    return (0, o().Fbh)(n).includes(s)
                })
            }
        },
        305215: (e, t, i) => {
            i.d(t, {
                V: () => x
            }), i(898992), i(354520), i(803949), i(581454), i(814603), i(147566), i(198721);
            var n = i(296540);

            function o(e, t) {
                return t ? `UnsentDiscussion-${e}-${t}` : `UnsentDiscussion-${e}`
            }
            var l = i(474848);
            let s = {
                    width: 20,
                    height: 20
                },
                r = function(e) {
                    let {
                        icon: t,
                        onClick: n,
                        tooltip: o,
                        onMouseDown: r
                    } = e, a = (0, i(336995).A)(!0);
                    return (0, l.jsx)(i(51831).m, {
                        content: () => o,
                        children: e => (0, l.jsx)(i(374533).A, {
                            ariaLabel: o,
                            icon: t,
                            iconStyle: s,
                            onClick: n,
                            ...e,
                            ...a,
                            onMouseDown: r
                        })
                    })
                },
                a = {
                    style0: {
                        height: i(986939).A.isMobile ? 26 : 24,
                        width: i(986939).A.isMobile ? 26 : 24
                    },
                    style1: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: i(986939).A.isMobile ? 16 : 6
                    },
                    style2: {
                        height: 14
                    },
                    container: {
                        display: "flex",
                        flexDirection: "column-reverse",
                        alignItems: "end",
                        width: "min-content"
                    }
                },
                d = function(e) {
                    let t = (0, i(109939).tz)(),
                        {
                            device: n
                        } = (0, i(533992).v3)(),
                        o = (0, i(336995).A)(!0),
                        {
                            canSend: s,
                            canAttach: d,
                            visible: c,
                            onSend: u,
                            onCancel: m,
                            isEditing: p,
                            animated: g,
                            onMention: f,
                            onAttach: y,
                            sendTooltip: h
                        } = e;
                    return (0, l.jsx)("div", {
                        style: { ...a.container,
                            opacity: +!!c,
                            pointerEvents: c ? void 0 : "none",
                            position: c ? void 0 : "absolute",
                            transition: g ? "opacity 200ms ease" : void 0
                        },
                        children: (0, l.jsxs)("div", {
                            style: a.style1,
                            children: [d ? (0, l.jsx)(r, {
                                icon: i(695317).o,
                                onClick: y,
                                tooltip: t.formatMessage({
                                    id: "discussionInput.uploadFile.button.tooltip",
                                    defaultMessage: "Attach file"
                                }),
                                onMouseDown: e => {
                                    e.preventDefault()
                                }
                            }) : void 0, n.isMobileBrowser ? void 0 : (0, l.jsx)(r, {
                                icon: i(584578).b,
                                onClick: e => {
                                    e.preventDefault(), f()
                                },
                                tooltip: t.formatMessage({
                                    id: "discussionInput.insertMention.button.tooltip",
                                    defaultMessage: "Mention a person, page, or date"
                                }),
                                onMouseDown: e => {
                                    e.preventDefault()
                                }
                            }), p ? (0, l.jsx)("div", {
                                style: a.style2,
                                children: (0, l.jsx)(i(346268).c, {
                                    type: "vertical",
                                    size: 1
                                })
                            }) : void 0, p ? (0, l.jsx)(i(374533).A, {
                                ariaLabel: t.formatMessage({
                                    id: "discussionInput.cancelButton.ariaLabel",
                                    defaultMessage: "Cancel editing comment"
                                }),
                                icon: i(367198).xMarkCircleFillIcon,
                                colorPalette: "gray",
                                colorVariant: "secondary",
                                onClick: m,
                                size: i(986939).A.isMobile ? "md" : "sm",
                                iconStyle: a.style0,
                                ...o
                            }) : null, p ? (0, l.jsx)(i(374533).A, {
                                ariaLabel: t.formatMessage({
                                    id: "discussionInput.updateButton.ariaLabel",
                                    defaultMessage: "Update comment"
                                }),
                                icon: i(93042).checkmarkCircleFillIcon,
                                onClick: u,
                                colorPalette: s ? "blue" : void 0,
                                colorVariant: s ? "accentPrimary" : "secondary",
                                disabled: !s,
                                size: i(986939).A.isMobile ? "md" : "sm",
                                iconStyle: a.style0,
                                ...o
                            }) : (0, l.jsx)(i(51831).m, {
                                disableTooltip: !(0, i(722371).O9)(h),
                                content: () => (0, l.jsx)(l.Fragment, {
                                    children: h
                                }),
                                children: e => (0, l.jsx)(i(374533).A, {
                                    ariaLabel: t.formatMessage({
                                        id: "discussionInput.sendButton.ariaLabel",
                                        defaultMessage: "Send comment"
                                    }),
                                    icon: i(682612).arrowInCircleUpFillIcon,
                                    onClick: u,
                                    colorPalette: s ? "blue" : void 0,
                                    colorVariant: s ? "accentPrimary" : "secondary",
                                    disabled: !s,
                                    size: i(986939).A.isMobile ? "md" : "sm",
                                    iconStyle: a.style0,
                                    ...(0, i(63390).A)(o, e)
                                })
                            })]
                        })
                    })
                },
                c = (0, i(109939).YK)({
                    defaultPlaceholder: {
                        defaultMessage: "Add a comment…",
                        id: "discussionInput.defaultPlaceholder.addComment"
                    },
                    pasteFileIntoCommentNotAllowed: {
                        id: "clipboardActions.pasteFileIntoCommentError.message",
                        defaultMessage: "Sorry, you cannot paste files into a comment."
                    },
                    replyInputPlaceholder: {
                        defaultMessage: "Reply…",
                        id: "updateSidebar.placeholder.addComment"
                    }
                });

            function u({
                children: e,
                handleRemoveFileClicked: t
            }) {
                let [o, s] = (0, n.useState)(!1), r = (0, i(109939).tz)(), a = o || i(986939).A.isMobile;
                return (0, l.jsxs)(i(64960).Ay, {
                    onMouseEnter: () => s(!0),
                    onMouseLeave: () => s(!1),
                    style: p,
                    hoveredStyle: g,
                    pressedStyle: g,
                    children: [e, a ? (0, l.jsx)(i(374533).A, {
                        icon: i(25094).xMarkSmallIcon,
                        style: m,
                        hasBackground: !0,
                        colorVariant: "primary",
                        hovered: !1,
                        showShadow: !0,
                        onClick: t,
                        ariaLabel: r.formatMessage({
                            id: "discussionInputAttachment.removeFileButton.label",
                            defaultMessage: "Remove file"
                        })
                    }) : void 0]
                })
            }
            let m = {
                    position: "absolute",
                    top: -4,
                    insetInlineEnd: -3,
                    height: 18,
                    width: 18,
                    borderRadius: 18
                },
                p = {
                    position: "relative",
                    cursor: "pointer",
                    width: "min-content",
                    height: "min-content",
                    background: "transparent"
                },
                g = {
                    background: "transparent"
                },
                f = function({
                    file: e,
                    isLarge: t
                }) {
                    let o = (0, n.useRef)(null),
                        s = (0, i(533992).v3)(),
                        r = (0, i(960253).I)(() => ({
                            imageThumbnail: { ...{
                                    border: `1px solid ${i(632079).Tj.border.secondary}`,
                                    borderRadius: 8,
                                    cursor: "zoom-in"
                                },
                                ...t ? {
                                    objectFit: "contain",
                                    width: "auto",
                                    height: "auto",
                                    maxWidth: 120,
                                    maxHeight: 120,
                                    minWidth: 48,
                                    minHeight: 48
                                } : {
                                    width: 48,
                                    height: 48
                                }
                            }
                        }), [t]),
                        a = (0, n.useCallback)(() => {
                            var t;
                            let n = null == (t = o.current) ? void 0 : t.getImageDimensions();
                            if (!n) return;
                            let {
                                naturalHeight: s,
                                naturalWidth: r
                            } = n;
                            return "local" === e.type ? (0, l.jsx)(i(408873).F, {
                                url: e.dataURL,
                                imageNaturalHeight: s,
                                imageNaturalWidth: r
                            }) : (0, l.jsx)(i(738251).A, {
                                url: e.source,
                                render: (e, t) => (0, l.jsx)(i(408873).F, {
                                    url: t,
                                    error: e,
                                    imageNaturalHeight: s,
                                    imageNaturalWidth: r
                                }),
                                isAuthenticated: !0,
                                permissionRecord: e.store.pointer
                            })
                        }, [e]),
                        d = (0, n.useCallback)(e => {
                            var t;
                            e.stopPropagation();
                            let n = null == (t = o.current) ? void 0 : t.getImageDimensions();
                            n && i(515260).o9({
                                environment: s,
                                renderFullScreenNode: a,
                                fullScreenNodeRect: n.clientRect,
                                contentAspectRatio: n.naturalWidth / n.naturalHeight
                            })
                        }, [a, s]);
                    return "local" === e.type ? (0, l.jsx)(i(989059).A, {
                        src: e.dataURL,
                        style: r.imageThumbnail,
                        placeholderStyle: r.imageThumbnail,
                        onClick: d,
                        ref: o
                    }) : (0, l.jsx)(i(738251).A, {
                        url: e.source,
                        isAuthenticated: !0,
                        permissionRecord: e.store.pointer,
                        render: (e, t) => (0, l.jsx)(i(989059).A, {
                            src: t,
                            style: r.imageThumbnail,
                            placeholderStyle: r.imageThumbnail,
                            onClick: d,
                            ref: o
                        })
                    })
                };

            function y({
                files: e,
                onRemoveFile: t
            }) {
                let {
                    images: n,
                    nonImages: o
                } = (0, i(682985).K8)(() => {
                    let [t, n] = i(381453).jB(e, e => (function(e) {
                        if ("local" === e.type) {
                            let [t] = e.file.type.split("/");
                            if ("image" === t) return !0
                        }
                        return "image" === (0, i(939438).WT)({
                            url: "local" === e.type ? e.file.name : e.source,
                            baseUrl: i(986939).A.domainBaseUrl,
                            publicDomainName: i(986939).A.publicDomainName
                        })
                    })(e) && "local" === e.type && e.dataURL);
                    return {
                        images: t,
                        nonImages: n
                    }
                }, [e]);
                return (0, l.jsxs)(i(4458).VP, {
                    width: "100%",
                    gap: 4,
                    marginTop: 4,
                    children: [(0, l.jsx)(h, {
                        files: n,
                        onRemoveFile: t
                    }), (0, l.jsx)(v, {
                        files: o,
                        onRemoveFile: t
                    })]
                })
            }

            function h(e) {
                let {
                    files: t,
                    onRemoveFile: n
                } = e, o = (0, i(533992).WS)();
                return 0 === t.length ? null : t.length <= 3 && !o ? (0, l.jsx)(i(4458).fI, {
                    gap: 4,
                    children: t.map(e => (0, l.jsx)(u, {
                        handleRemoveFileClicked: () => n(e),
                        children: (0, l.jsx)(f, {
                            file: e,
                            isLarge: !0
                        })
                    }, e.id))
                }) : (0, l.jsx)(i(674707).A, {
                    children: t.map(e => (0, l.jsx)(u, {
                        handleRemoveFileClicked: () => n(e),
                        children: (0, l.jsx)(f, {
                            file: e,
                            isLarge: !1
                        })
                    }, e.id))
                })
            }

            function v({
                files: e,
                onRemoveFile: t
            }) {
                if (0 === e.length) return null;
                let n = e.map(e => {
                    let n = e.name ? ? "",
                        o = "remote" === e.type ? e.source : n,
                        s = e.size ? ? "";
                    return (0, l.jsx)(u, {
                        handleRemoveFileClicked: () => t(e),
                        children: (0, l.jsx)(i(576454).A, {
                            title: n,
                            source: o,
                            size: s,
                            showBlockActionMenuButton: !1
                        })
                    }, e.id)
                });
                return e.length <= 3 ? (0, l.jsx)(i(4458).VP, {
                    gap: 4,
                    children: n
                }) : (0, l.jsx)(i(674707).A, {
                    children: n
                })
            }
            let b = i(381453).sg(e => {
                    i(773352).log({
                        level: "info",
                        from: "DiscussionInput",
                        type: "draftCommentCreated",
                        data: { ...e,
                            timestamp: Date.now()
                        }
                    })
                }, 1e3),
                x = n.memo(n.forwardRef(function(e, t) {
                    var s;
                    let r = (0, i(109939).tz)(),
                        a = (0, i(533992).v3)(),
                        {
                            device: u,
                            currentUser: m
                        } = a,
                        {
                            onFileUploaded: p
                        } = e,
                        [g, f, h] = (0, i(682985).$y)(e.discussionInputStore),
                        {
                            textStore: v,
                            files: x
                        } = g,
                        j = (0, i(682985).K8)(() => v.getValue(), [v]),
                        [A, I] = (0, n.useState)(!1),
                        _ = (0, n.useRef)(null),
                        M = (0, i(83208).X)("bullets_in_simple_tables_indentation"),
                        T = (0, n.useMemo)(() => ({
                            bulletIndentationEnabled: M
                        }), [M]),
                        {
                            adjustWidthForDraftDiscussions: D,
                            dontMoveCursorToInputEndOnFocus: F
                        } = e,
                        R = e.discussionFormat !== i(241838).DiscussionFormat.Page;
                    (0, n.useImperativeHandle)(t, () => ({
                        uploadFiles: Z
                    }));
                    let B = (0, i(682985).K8)(() => (0, i(427846)._)(a), [a]),
                        N = (0, n.useRef)(null == (s = e.blockStore) ? void 0 : s.clone()),
                        {
                            loadDraft: L,
                            saveDraft: P
                        } = function(e) {
                            let {
                                blockId: t,
                                parentStoreId: l,
                                discussionId: s,
                                discussionFormat: r,
                                userId: a
                            } = e, d = r === i(241838).DiscussionFormat.Page, c = (0, n.useMemo)(() => (function(e) {
                                let {
                                    blockId: t,
                                    parentStoreId: i,
                                    discussionId: n,
                                    shouldOmitDiscussionId: l
                                } = e;
                                return {
                                    primaryKey: o(t, l ? void 0 : n),
                                    legacyKey: o(i, n)
                                }
                            })({
                                blockId: t,
                                parentStoreId: l,
                                discussionId: s,
                                shouldOmitDiscussionId: d
                            }), [t, l, s, d]), u = (0, n.useCallback)(() => {
                                if (a) return function(e) {
                                    let {
                                        userId: t,
                                        primaryKey: n,
                                        legacyKey: o
                                    } = e, l = i(255482).K.get({
                                        userId: t,
                                        key: n
                                    });
                                    if (l) return l;
                                    let s = i(255482).K.get({
                                        userId: t,
                                        key: o
                                    });
                                    if (s) return i(255482).K.set({
                                        userId: t,
                                        key: n,
                                        value: s
                                    }), i(255482).K.remove({
                                        userId: t,
                                        key: o
                                    }), s
                                }({
                                    userId: a,
                                    primaryKey: c.primaryKey,
                                    legacyKey: c.legacyKey
                                })
                            }, [a, c]), m = (0, n.useCallback)(e => {
                                a && function(e) {
                                    let {
                                        userId: t,
                                        primaryKey: n,
                                        legacyKey: o,
                                        value: l
                                    } = e;
                                    l ? i(255482).K.set({
                                        userId: t,
                                        key: n,
                                        value: l ? ? null
                                    }) : i(255482).K.remove({
                                        userId: t,
                                        key: n
                                    }), o !== n && i(255482).K.remove({
                                        userId: t,
                                        key: o
                                    })
                                }({
                                    userId: a,
                                    primaryKey: c.primaryKey,
                                    legacyKey: c.legacyKey,
                                    value: e
                                })
                            }, [a, c]);
                            return (0, n.useMemo)(() => ({
                                loadDraft: u,
                                saveDraft: m
                            }), [u, m])
                        }({
                            blockId: e.blockStore.id,
                            parentStoreId: e.parentStore.id,
                            discussionId: e.inReplyToDiscussionId,
                            discussionFormat: e.discussionFormat,
                            userId: m.id
                        }),
                        E = (0, i(682985).K8)(() => {
                            let e = i(358377).default.state;
                            return "editing" === e.mode && (0, i(689461).K)(e.multiSelection) && e.multiSelection.start.store === v
                        }, [v]),
                        {
                            inputIsEmptyValue: U,
                            inputHasNewLineCharacter: K
                        } = (0, i(682985).K8)(() => ({
                            inputIsEmptyValue: (0, i(241838).inputIsEmpty)(h),
                            inputHasNewLineCharacter: h.hasNewLineCharacter()
                        }), [h]),
                        z = (0, i(682985).K8)(() => {
                            var e;
                            let t = i(728372).AppStoreCurrentUserSettingsStore.state;
                            return (null == t || null == (e = t.getSettings()) ? void 0 : e.chat_enter_key_behavior) ? ? "send"
                        }, []),
                        H = E || !U,
                        V = (0, n.useCallback)(async () => {
                            let e = i(358377).default.state;
                            "editing" === e.mode && (0, i(689461).K)(e.multiSelection) && e.multiSelection.start.store === v || ((0, i(739204).z)({
                                store: v
                            }), await i(374176).default.afterNextFlush())
                        }, [v]),
                        G = (0, i(682985).K8)(() => !!(e.blockStore && (0, i(336136).dL)(e.blockStore)), [e.blockStore]),
                        W = async ({
                            files: e
                        }) => {
                            await Z(e), i(65255).Sd(a, {
                                type: "drop"
                            })
                        },
                        $ = async e => {
                            await Z(e.files), i(65255).Sd(a, {
                                type: "paste"
                            })
                        },
                        Z = (0, n.useCallback)(async e => {
                            if (await V(), x.length + e.length > 10) return void i(647095).f1((0, l.jsx)(i(109939).sA, {
                                id: "discussionInput.uploadFile.tooManyFilesErrorMessage",
                                defaultMessage: "You cannot upload more than {maxFiles} files per comment.",
                                values: {
                                    maxFiles: 10
                                }
                            }));
                            let t = e.map(i(385475).x9);
                            f({ ...g,
                                files: [...x, ...t]
                            }), null == p || p()
                        }, [V, x, f, g, p]),
                        O = async () => {
                            let e = await i(385475).dA({
                                environment: a,
                                supportsMobileNativeFileUpload: !0,
                                multiple: !0
                            });
                            await Z(e), i(65255).Sd(a, {
                                type: "file_picker"
                            })
                        },
                        J = e.discussionFormat === i(241838).DiscussionFormat.Margin,
                        q = e.discussionFormat === i(241838).DiscussionFormat.Sidebar;
                    (0, n.useEffect)(() => {
                        e.commentStore && i(63728).e(h, e.commentStore)
                    }, [h, e.commentStore]);
                    let X = (0, n.useRef)(!1),
                        Y = (0, n.useCallback)(t => {
                            P(t), t && b({
                                parent_id: e.parentStore.id,
                                discussion_id: e.inReplyToDiscussionId,
                                text_length: t.length
                            })
                        }, [P, e.inReplyToDiscussionId, e.parentStore.id]);
                    (0, n.useEffect)(() => {
                        e.shouldSaveUnsentComments && X.current && Y(j), X.current = !0
                    }, [e.shouldSaveUnsentComments, Y, j]);
                    let Q = (0, n.useRef)(v);
                    (0, n.useEffect)(() => {
                        if (!i(272755).g.state.isOpen && e.shouldSaveUnsentComments) {
                            let t = L();
                            if (t) {
                                let n = e.blockStore.getSpaceId();
                                (0, i(377796).createAndCommit)({
                                    userAction: "DiscussionInput.willMount",
                                    environment: a,
                                    cellTarget: n ? {
                                        spaceWithId: n
                                    } : void 0,
                                    canUndo: !0,
                                    perform: e => {
                                        i(41403).R9({
                                            environment: a,
                                            store: Q.current,
                                            value: t,
                                            transaction: e
                                        })
                                    }
                                })
                            }
                        }
                    }, [a, L, e.blockStore, e.shouldSaveUnsentComments]);
                    let ee = (0, n.useRef)(x);
                    (0, n.useEffect)(() => {
                        ee.current = x
                    }, [x]), (0, n.useEffect)(() => () => {
                        ee.current && ee.current.forEach(e => {
                            "local" === e.type && e.dataURL && URL.revokeObjectURL(e.dataURL)
                        })
                    }, []);
                    let et = (0, n.useCallback)(({
                        animate: e
                    }) => {
                        if (!N.current) return;
                        let t = i(240414).T.findSelectableFromStore(N.current);
                        t && (0, i(840529).p)({
                            environment: a,
                            handle: t,
                            vertical: {
                                reveal: "bottom"
                            },
                            horizontal: {
                                reveal: "closest"
                            },
                            animate: e
                        })
                    }, [a]);
                    (0, n.useEffect)(() => {
                        A && et({
                            animate: !0
                        })
                    }, [A, et]);
                    let ei = (0, n.useCallback)(() => {
                            var e;
                            return null == (e = _.current) ? void 0 : e.focus()
                        }, []),
                        {
                            autoFocus: en = !1
                        } = e;
                    (0, i(383953).l)(() => {
                        en && ei()
                    });
                    let eo = x && x.length > 0,
                        el = e.discussionFormat === i(241838).DiscussionFormat.Menu && e.inReplyToDiscussionId,
                        es = !e.disableFocusRing && !el && (q || J && !e.isNewComment),
                        er = void 0 !== e.showCtaButtons ? e.showCtaButtons : e.isEditingExistingComment || H || A,
                        ea = !e.isMobileSlideUpMenu,
                        ed = (J || q) && !e.isNewComment,
                        ec = (0, i(233633).C)({
                            type: "discussionFormat",
                            format: e.discussionFormat
                        }),
                        eu = (0, i(960253).I)(() => {
                            let e = ec ? i(699422).J.UIRegular.mobile : i(699422).J.UIRegular.desktop;
                            return {
                                inputWrapper: {
                                    display: "flex",
                                    width: D ? "calc(100% + 6px)" : void 0,
                                    flex: D ? void 0 : 1,
                                    minWidth: 0,
                                    fontSize: e,
                                    borderRadius: 6,
                                    transition: "background 300ms ease",
                                    cursor: er ? "text" : "pointer",
                                    alignSelf: "center",
                                    position: "relative",
                                    flexWrap: "wrap",
                                    justifyContent: "flex-end",
                                    background: "transparent",
                                    alignItems: "center",
                                    rowGap: 4,
                                    columnGap: 6,
                                    paddingTop: 3.5,
                                    paddingInlineEnd: 4,
                                    paddingBottom: 3,
                                    paddingInlineStart: 4,
                                    marginTop: -3.5,
                                    marginInlineEnd: -4,
                                    marginBottom: 0,
                                    marginInlineStart: -4
                                },
                                textFieldStyle: {
                                    fontSize: e,
                                    maxHeight: u.isMobileNative ? "50vh" : "70vh",
                                    WebkitOverflowScrolling: "touch",
                                    userSelect: "auto",
                                    WebkitUserSelect: "auto",
                                    lineHeight: "20px",
                                    overflow: "auto",
                                    whiteSpace: "pre-wrap",
                                    padding: "2.5px",
                                    margin: "-2.5px"
                                },
                                textFieldWrapper: {
                                    flexGrow: 1,
                                    display: "flex",
                                    minHeight: 24,
                                    paddingTop: 2,
                                    width: K || i(986939).A.isMobile ? "100%" : ""
                                }
                            }
                        }, [D, er, u.isMobileNative, K, ec]),
                        em = function(e) {
                            let {
                                isEditing: t,
                                onEditPreviousComment: n,
                                textRef: o
                            } = e;
                            return t ? {
                                onUp: n ? ? (e => {
                                    "key" in e && (e.metaKey || e.ctrlKey) && o.current && (0, i(940763).e)({
                                        store: o.current.getProps().store
                                    })
                                }),
                                onDown: e => {
                                    "key" in e && (e.metaKey || e.ctrlKey) && o.current && (0, i(739204).z)({
                                        store: o.current.getProps().store
                                    })
                                }
                            } : {}
                        }({
                            isEditing: E,
                            shouldTrapCursorInInput: R,
                            onEditPreviousComment: 0 === (j || []).length ? e.onEditPreviousComment : void 0,
                            textRef: _
                        }),
                        ep = async () => {
                            var t;
                            await V(), i(977712).Gf({
                                environment: a,
                                spaceStore: null == (t = e.blockStore) ? void 0 : t.getSpaceStore(),
                                mentionTypes: {
                                    page: !0,
                                    collection: !0,
                                    heading: !0,
                                    createPage: !1,
                                    user: !0,
                                    inviteUserToWorkspace: !0,
                                    inviteUserToPage: !0,
                                    bot: !0,
                                    date: !0,
                                    reminder: !1,
                                    templateVariable: !1,
                                    group: !0,
                                    team: !0,
                                    formulaContextVariable: !1,
                                    slackSpecialMention: !1,
                                    property: !1,
                                    propertyValue: !1
                                }
                            })
                        },
                        eg = () => {
                            Y(void 0), e.onSubmit()
                        },
                        ef = !i(986939).A.isMobile && "send" === z,
                        ey = (0, n.useCallback)(e => (0, i(195251).RE)({
                            environment: a,
                            textStore: v,
                            editingState: e,
                            editorMode: "default",
                            userActionPrefix: "DiscussionInput",
                            options: T
                        }), [v, a, T]),
                        eh = (0, n.useCallback)(t => {
                            let n = e.blockStore.getSpaceId();
                            (0, i(377796).createAndCommit)({
                                userAction: "DiscussionInput.handleEnter",
                                environment: a,
                                cellTarget: n ? {
                                    spaceWithId: n
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    i(41403).$D({
                                        environment: a,
                                        editorMode: "default",
                                        string: "\n",
                                        multiSelection: t,
                                        disableMentions: !0,
                                        disableSlashCommands: !0,
                                        disableEmojiCommands: !0,
                                        transaction: e
                                    })
                                }
                            })
                        }, [a, e.blockStore]),
                        ev = (0, n.useCallback)(e => {
                            var t, n;
                            let o = i(358377).default.state;
                            if ("editing" !== o.mode) return;
                            let l = null == (t = (0, i(778758).H)(o.multiSelection)) ? void 0 : t.selection;
                            if (!l) return;
                            let s = v.getValue();
                            if (!s || 0 === s.length) return;
                            let r = i(247438).q4_(s),
                                d = l.endIndex,
                                c = (0, i(195251).kg)(r, d);
                            (0, i(195251).Ei)({
                                environment: a,
                                textStore: v,
                                editingState: o,
                                userActionPrefix: "DiscussionInput",
                                text: r,
                                currentLineStart: c,
                                options: T
                            }) && (null == (n = e.preventDefault) || n.call(e))
                        }, [v, a, T]),
                        eb = (0, n.useCallback)(e => {
                            (0, i(195251).$X)({
                                bulletIndentationEnabled: T.bulletIndentationEnabled,
                                textStore: v,
                                environment: a,
                                direction: "indent",
                                e
                            })
                        }, [v, a, T]),
                        ex = (0, n.useCallback)(e => {
                            (0, i(195251).$X)({
                                bulletIndentationEnabled: T.bulletIndentationEnabled,
                                textStore: v,
                                environment: a,
                                direction: "outdent",
                                e
                            })
                        }, [v, a, T]),
                        eS = (0, l.jsx)(d, {
                            visible: er,
                            onAttach: O,
                            onMention: ep,
                            canSend: !U && !G,
                            canAttach: !0,
                            onSend: eg,
                            onCancel: e.onCancel,
                            isEditing: e.isEditingExistingComment || !1,
                            animated: !!(J || i(986939).A.isMobile),
                            inline: !0,
                            sendTooltip: G ? (0, l.jsx)(i(109939).sA, {
                                id: "discussionInput.cannotSubmitBecauseOfAIEdits",
                                defaultMessage: "Resolve pending edits before commenting"
                            }) : void 0
                        });
                    return (0, l.jsx)(i(369064).N, {
                        debugName: "DiscussionInput",
                        capture: E,
                        onCommandEnter: i(763230).D_,
                        children: (0, l.jsx)(k, {
                            enabled: !!N.current && !!e.canDrop,
                            store: N.current,
                            onNativeDrop: W,
                            children: (0, l.jsx)("div", {
                                className: e.isEditingExistingComment ? i(828432).d1T : i(828432).rgg,
                                style: { ...S,
                                    ...e.containerStyle || {}
                                },
                                onFocus: t => {
                                    let n = t.target;
                                    if (n instanceof HTMLElement && (0, i(768397).p)(n)) {
                                        var o;
                                        null == (o = e.onFocus) || o.call(e), I(!0)
                                    }
                                },
                                onBlur: t => {
                                    var i;
                                    null == (i = e.onBlur) || i.call(e), I(!1)
                                },
                                children: (0, l.jsxs)("div", {
                                    style: w,
                                    children: [e.showAvatar ? (0, l.jsx)(i(321753).A, {
                                        userStore: B,
                                        size: i(42615).eQ,
                                        avatarShouldShowShadow: !1,
                                        style: C.style0
                                    }) : void 0, (0, l.jsxs)("div", {
                                        className: es ? i(828432).CCX : "",
                                        onClick: ei,
                                        style: eu.inputWrapper,
                                        tabIndex: -1,
                                        children: [(0, l.jsx)("div", {
                                            dir: (0, i(619157).A1)() ? "rtl" : "auto",
                                            style: eu.textFieldWrapper,
                                            children: (0, l.jsx)(i(53373).A, {
                                                style: eu.textFieldStyle,
                                                store: v,
                                                parentStore: e.parentStore,
                                                disabled: !1,
                                                onChange: () => {
                                                    et({
                                                        animate: !1
                                                    })
                                                },
                                                onEnter: () => {
                                                    let e = i(358377).default.state;
                                                    if ("editing" !== e.mode) {
                                                        ef && eg();
                                                        return
                                                    }
                                                    if (!ey(e)) {
                                                        if (ef) return void eg();
                                                        eh(e.multiSelection)
                                                    }
                                                },
                                                onBackspace: ev,
                                                onTab: eb,
                                                onUntab: ex,
                                                onCommandEnter: eg,
                                                onPasteFiles: $,
                                                onEsc: e.onCancel,
                                                ...em,
                                                placeholder: r.formatMessage(ed ? c.replyInputPlaceholder : c.defaultPlaceholder),
                                                ref: _,
                                                "aria-label": r.formatMessage(ed ? c.replyInputPlaceholder : c.defaultPlaceholder),
                                                isDiscussionInput: !0,
                                                disableSlashCommands: !0,
                                                disableInsertText: !0,
                                                disableSelectAllBlocks: !0,
                                                disableSelectionDrag: !0,
                                                disableEmbedMenu: !0,
                                                disabledMentionTypes: {
                                                    reminder: !0,
                                                    property: !0
                                                },
                                                disableMobileActionBar: !0,
                                                disableStyleAnnotations: u.isMobileBrowser,
                                                disableInsertedDeletedAnnotations: u.isMobileBrowser,
                                                pasteBehavior: "inline",
                                                inPageFind: i(831719).Os.none,
                                                className: "discussion-input-text-block",
                                                disableMoveCursorToEndOnFocus: F,
                                                context: "comment-input"
                                            })
                                        }), eo ? (0, l.jsx)(y, {
                                            files: x,
                                            onRemoveFile: e => {
                                                let t = h.state;
                                                h.setState({ ...t,
                                                    files: t.files.filter(t => t.id !== e.id)
                                                })
                                            }
                                        }) : void 0, eS]
                                    }), ea ? (0, l.jsx)(i(368678).P, {
                                        show: E,
                                        onDismiss: () => (0, i(525779).clear)({
                                            environment: a
                                        })
                                    }) : void 0]
                                })
                            })
                        })
                    })
                })),
                S = {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    cursor: "pointer"
                },
                w = {
                    display: "flex",
                    alignItems: "center",
                    flexGrow: 1
                },
                C = {
                    style0: {
                        flexShrink: 0,
                        flexGrow: 0,
                        marginInlineEnd: 6,
                        alignSelf: "flex-start",
                        marginTop: 6,
                        marginTop: 0,
                        marginInlineEnd: 8
                    }
                };

            function k(e) {
                let {
                    enabled: t,
                    children: n,
                    store: o,
                    onNativeDrop: s
                } = e;
                return t && o ? (0, l.jsx)(i(611752).Ay, {
                    store: o,
                    analyticsName: "discussion_input",
                    canNativeDropOnto: !0,
                    onNativeDrop: s,
                    keepTextSelectionOnDrop: !0,
                    shouldShowDropZone: !0,
                    children: n
                }) : (0, l.jsx)(l.Fragment, {
                    children: n
                })
            }
        },
        366995: (e, t, i) => {
            i.d(t, {
                A: () => n
            });

            function n(e, t) {
                switch (e) {
                    case "all":
                        return {
                            following: !0,
                            followSettings: { ...(0, i(731747).JY)({
                                    explicitly_set_by_user: !0
                                }),
                                feed_setting: t
                            }
                        };
                    case "important":
                        return {
                            following: !0,
                            followSettings: { ...(0, i(731747).gK)({
                                    explicitly_set_by_user: !0
                                }),
                                feed_setting: t
                            }
                        };
                    case "comments":
                        return {
                            following: !0,
                            followSettings: { ...(0, i(731747).lx)({
                                    explicitly_set_by_user: !0
                                }),
                                feed_setting: t
                            }
                        };
                    case "none":
                        return {
                            following: !1,
                            followSettings: { ...(0, i(731747).gU)({
                                    explicitly_set_by_user: !0
                                }),
                                feed_setting: t
                            }
                        };
                    default:
                        (0, i(722371).HB)(e)
                }
            }
        },
        384943: (e, t, i) => {
            i.d(t, {
                A: () => l
            }), i(296540);
            var n = i(474848);
            let o = {
                style1: {
                    display: "flex",
                    alignItems: "start",
                    lineHeight: "110%",
                    minWidth: 0,
                    fontSize: 13,
                    fill: "dark"
                },
                style2: {
                    marginTop: 1
                },
                style3: { ...i(699422).RC,
                    marginInlineStart: 4,
                    maxWidth: 100
                },
                style4: { ...i(699422).RC,
                    marginInlineEnd: 4
                }
            };

            function l(e) {
                let {
                    propertySchema: t,
                    dontShowColon: l
                } = e, s = t.name;
                return (0, n.jsx)(i(4458).fI, {
                    paddingTop: 2,
                    inline: !0,
                    children: (0, n.jsxs)("div", {
                        style: o.style1,
                        children: [(0, n.jsx)(i(151710).Rl, {
                            iconStyle: o.style2,
                            propertySchema: t,
                            iconSize: 12
                        }), (0, n.jsx)("div", {
                            style: o.style3,
                            children: (0, n.jsx)("span", {
                                children: `${s}`
                            })
                        }), (0, n.jsx)("span", {
                            style: o.style4,
                            children: l ? null : ":"
                        })]
                    })
                })
            }
        },
        408873: (e, t, i) => {
            i.d(t, {
                F: () => s
            });
            var n = i(296540),
                o = i(474848);
            let l = {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            };

            function s(e) {
                let {
                    url: t,
                    imageNaturalHeight: s,
                    imageNaturalWidth: a
                } = e, d = (0, n.useMemo)(() => ({
                    display: "block",
                    width: `min(${a}px, 100%)`,
                    height: `min(${s}px, 100%)`,
                    pointerEvents: "auto",
                    objectFit: "cover"
                }), [a, s]);
                return (0, o.jsx)("div", {
                    style: r,
                    children: (0, o.jsx)(i(989059).A, {
                        src: t,
                        style: d,
                        placeholderLoadedStyle: l
                    })
                })
            }
            let r = {
                alignSelf: "center",
                margin: "0 auto",
                position: "relative",
                height: "100%",
                width: "100%",
                overflow: "hidden"
            }
        },
        554067: (e, t, i) => {
            function n(e, t) {
                let n = i(966980).jP(e),
                    o = (0, i(627179).WY)(Date.now()),
                    l = e.getCreatedTime();
                (0, i(368198).K)({
                    store: n,
                    value: Math.max(o, l),
                    transaction: t
                })
            }

            function o(e) {
                var t, o, l, s;
                let r, d, {
                        environment: c,
                        store: u,
                        text: m,
                        files: p,
                        transaction: g,
                        discussionLocation: f,
                        property_id: y,
                        blockStore: h
                    } = e,
                    v = i(966980).eK(u);
                if (!v) return;
                let {
                    filesToCreate: b,
                    fileStoresToDelete: x
                } = (l = u, s = p, r = [], d = new Set, s.forEach(e => {
                    "local" === e.type ? r.push(e.file) : d.add(e.id)
                }), {
                    filesToCreate: r,
                    fileStoresToDelete: i(966980).dd(l).filter(e => e.getAlive() && !d.has(e.id))
                });
                a({
                    commentStore: u,
                    fileBlocks: x,
                    transaction: g
                }), (0, i(730027).t)({
                    commentStore: u,
                    files: b,
                    environment: c,
                    transaction: g
                });
                let S = i(966980).gp(u);
                i(41403).R9({
                    environment: c,
                    store: S,
                    value: m,
                    transaction: g
                }), n(u, g);
                let w = null == u || null == (t = u.getParentStore()) ? void 0 : t.getParentStore(),
                    C = i(313432).eR.includes(f),
                    k = null == v || null == (o = v.getParentStore()) ? void 0 : o.getNavigableBlockStore(),
                    {
                        property_type: j,
                        collection_id: A,
                        collection_view_id: I,
                        view_type: _,
                        collection_view_block_id: M
                    } = (0, i(618682).q)(y, h);
                i(65255).ZM(c, {
                    from: f,
                    comment_id: u.id,
                    discussion_id: v.id,
                    discussion_type: v.getType(),
                    parent_block_id: v.getParentId(),
                    parent_collection_id: null == w ? void 0 : w.getParentCollectionIdUpToTwoLevels(),
                    ...C && {
                        inbox_session_id: i(825109).Ay.state.sessionId,
                        notification_page_id: null == k ? void 0 : k.id
                    },
                    property_type: j,
                    collection_id: A,
                    collection_view_id: I,
                    view_type: _,
                    collection_view_block_id: M
                })
            }

            function l(e) {
                var t, o;
                let {
                    environment: l,
                    commentStore: s,
                    transaction: r,
                    discussionLocation: d
                } = e, c = i(966980).eK(s);
                if (!c) return;
                let u = i(966980).uB(c),
                    m = u.getValue();
                if (!m) return;
                let p = i(966980).dd(s);
                a({
                    commentStore: s,
                    fileBlocks: p,
                    transaction: r
                }), (0, i(173157).z)({
                    store: s,
                    transaction: r,
                    data: {
                        alive: !1
                    }
                }), (0, i(421439).y4)({
                    store: u,
                    operation: {
                        pointer: u.pointer,
                        path: u.path,
                        command: "listRemove",
                        args: {
                            id: s.id
                        }
                    },
                    transaction: r
                }), (0 === m.length || 1 === m.length && m[0] === s.id) && (0, i(247027).v)({
                    environment: l,
                    discussionStore: c,
                    transaction: r
                }), n(s, r);
                let g = i(313432).eR.includes(d),
                    f = null == c || null == (t = c.getParentStore()) ? void 0 : t.getNavigableBlockStore();
                i(65255).gN(l, {
                    from: e.discussionLocation,
                    discussion_id: c.id,
                    discussion_type: c.getType(),
                    comment_id: s.id,
                    parent_block_id: c.getParentId(),
                    parent_collection_id: null == (o = c.getParentStore()) ? void 0 : o.getParentCollectionIdUpToTwoLevels(),
                    ...g && {
                        inbox_session_id: i(825109).Ay.state.sessionId,
                        notification_page_id: null == f ? void 0 : f.id
                    }
                })
            }

            function s(e) {
                var t, n;
                let {
                    environment: o,
                    commentStore: l,
                    discussionStore: s,
                    transaction: r,
                    discussionLocation: a
                } = e;
                (0, i(173157).z)({
                    store: s,
                    data: {
                        resolved: !1
                    },
                    transaction: r
                }), (0, i(737146).U)({
                    transaction: r,
                    discussionStore: s
                });
                let d = i(313432).eR.includes(a),
                    c = null == s || null == (t = s.getParentStore()) ? void 0 : t.getNavigableBlockStore();
                i(65255).Jg(o, {
                    comment_id: l.id,
                    discussion_id: s.id,
                    from: e.discussionLocation,
                    parent_block_id: s.getParentId(),
                    parent_collection_id: null == (n = s.getParentStore()) ? void 0 : n.getAssociatedCollectionId(),
                    ...d && {
                        inbox_session_id: i(825109).Ay.state.sessionId,
                        notification_page_id: null == c ? void 0 : c.id
                    }
                })
            }

            function r(e) {
                var t, n, o;
                let {
                    environment: l,
                    discussionStore: s,
                    textValue: r,
                    transaction: a,
                    files: d,
                    property_id: c,
                    blockStore: u
                } = e, {
                    id: m
                } = l.currentUser;
                if (!m) return;
                let p = i(385475).JC(d);
                if (i(381453).n4(r, []) && 0 === p.length) return;
                let g = (0, i(708376).G)({
                        discussionStore: s,
                        text: r,
                        files: p,
                        markDiscussionRead: !0,
                        environment: l,
                        transaction: a
                    }),
                    f = i(313432).eR.includes(e.discussionLocation),
                    y = null == (t = s.getParentStore()) ? void 0 : t.getNavigableBlockStore(),
                    {
                        property_type: h,
                        collection_id: v,
                        collection_view_id: b,
                        view_type: x,
                        collection_view_block_id: S
                    } = (0, i(618682).q)(c, u),
                    w = (0, i(545849).B)(null == u || null == (n = u.getAssociatedCollectionStore()) ? void 0 : n.getLayoutStore());
                i(65255).mw(l, {
                    from: e.discussionLocation,
                    comment_id: g.id,
                    discussion_id: s.id,
                    discussion_type: s.getType(),
                    parent_block_id: s.getParentId(),
                    parent_collection_id: null == s || null == (o = s.getParentStore()) ? void 0 : o.getParentCollectionIdUpToTwoLevels(),
                    ...f && {
                        inbox_session_id: i(825109).Ay.state.sessionId,
                        notification_page_id: null == y ? void 0 : y.id
                    },
                    property_type: h,
                    collection_id: v,
                    collection_view_id: b,
                    view_type: x,
                    collection_view_block_id: S,
                    page_discussion_layout_location: w
                })
            }

            function a(e) {
                let {
                    commentStore: t,
                    fileBlocks: n,
                    transaction: o
                } = e, l = i(966980).eP(t);
                n.forEach(e => {
                    (0, i(173157).z)({
                        store: e,
                        data: {
                            alive: !1
                        },
                        transaction: o
                    }), (0, i(818646).T)({
                        parentStore: l,
                        childToRemoveStore: e,
                        transaction: o
                    })
                })
            }
            async function d(e) {
                var t;
                let {
                    discussionStore: n,
                    currentBlockStore: o,
                    environment: l,
                    topOffset: s,
                    animate: r
                } = e;
                if (!o || !n.isDefined()) return null;

                function a(e) {
                    var t, o;
                    let a, d = (0, i(900644).S)({
                        discussionId: n.id,
                        blockId: e
                    });
                    if (!d) return;
                    let c = document.getElementsByClassName((0, i(762507).wV)({
                        discussionId: n.id
                    }))[0];
                    if (s) {
                        let e = d.getScrollerContext(),
                            n = null == e ? void 0 : e.verticalScroller,
                            o = null == n ? void 0 : n.getNode(),
                            r = null == n ? void 0 : n.getClientRect();
                        if (a = c ? c.getBoundingClientRect() : null == (t = d.getNode()) ? void 0 : t.getBoundingClientRect(), n && o && r && a) {
                            let e = o.scrollTop + a.top,
                                t = r.top;
                            (0, i(661767).V)({
                                element: o,
                                environment: l,
                                options: {
                                    top: e - t - s,
                                    behavior: "smooth"
                                }
                            })
                        }
                    } else c ? ((0, i(341471).h)({
                        element: c,
                        environment: l,
                        scrollerContext: d.getScrollerContext(),
                        vertical: {
                            reveal: "top"
                        },
                        horizontal: {
                            reveal: "closest"
                        },
                        animate: r
                    }), a = c.getBoundingClientRect()) : ((0, i(840529).p)({
                        environment: l,
                        handle: d,
                        vertical: {
                            reveal: "top"
                        },
                        horizontal: {
                            reveal: "closest"
                        },
                        animate: r
                    }), a = null == (o = d.getNode()) ? void 0 : o.getBoundingClientRect());
                    return d.displaySelectionHalo(750), {
                        selectable: d,
                        rect: a
                    }
                }
                let d = (null == (t = n.getRecordStoreUIParent()) ? void 0 : t.id) ? ? n.getParentId(),
                    c = a(d);
                return c || (await i(807635).NH({
                    environment: l,
                    pageStore: o,
                    scrollToBlockIds: [d]
                }), await i(374176).default.afterNextFlush(), c = a(d)), {
                    scrollResult: c,
                    blockStore: i(970831).B.createChildStore(o, n.getParentPointer())
                }
            }
            async function c(e) {
                let {
                    discussionStore: t,
                    currentBlockStore: n,
                    environment: o,
                    analyticsFrom: l,
                    currentEl: s,
                    shouldSetRect: r,
                    animateScroll: a,
                    discussionReadStatus: c
                } = e, u = await d({
                    discussionStore: t,
                    currentBlockStore: n,
                    environment: o,
                    animate: a
                });
                if (!u) return null;
                let {
                    scrollResult: m,
                    blockStore: p
                } = u, g = i(239134).get(), f = null == g ? void 0 : g.commonAncestorContainer, y = !(null != g && g.collapsed) && f && (s === f || (null == s ? void 0 : s.contains(f)));
                i(821243).B4({
                    environment: o,
                    blockStore: p || n,
                    analyticsFrom: l,
                    discussionIds: [t.id],
                    shouldFocusDiscussion: !y,
                    recursivelyLoadAllDiscussions: !1,
                    rect: r ? null == m ? void 0 : m.rect : void 0,
                    discussionReadStatus: c
                })
            }
            i.d(t, {
                Tu: () => l,
                L6: () => a,
                QA: () => o,
                DZ: () => c,
                E3: () => s,
                JO: () => d,
                lV: () => r
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(803949)
        },
        576454: (e, t, i) => {
            i.d(t, {
                A: () => s
            }), i(814603), i(147566), i(198721);
            var n = i(296540),
                o = i(474848);
            let l = {
                justBackgroundHovered: {
                    background: i(632079).Tj.background.secondary
                },
                wrapperHoveredStyle: {
                    background: i(632079).Tj.background.secondary
                },
                iconContainer: {
                    height: 32,
                    width: 32,
                    minWidth: 32,
                    background: i(632079).Tj.background.tertiaryTranslucent,
                    borderRadius: 6,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                fileName: {
                    fontSize: 14,
                    fontWeight: i(699422).Wy.medium,
                    lineHeight: "18px",
                    color: i(632079).Tj.text.primary,
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden"
                },
                fileSizeText: {
                    fontSize: 12,
                    lineHeight: "15px",
                    color: i(632079).Tj.text.secondary
                },
                actionMenuHoveredStyle: {
                    background: i(632079).Tj.background.tertiaryTranslucent
                },
                style1: {
                    overflow: "hidden",
                    flexGrow: 1
                },
                style2: {
                    display: "flex",
                    flexDirection: "column"
                },
                style3: {
                    borderRadius: i(399411).VJ.md
                }
            };

            function s({
                title: e,
                source: t,
                size: r,
                file: a,
                store: d,
                onClick: c,
                showBlockActionMenuButton: u
            }) {
                (0, n.useEffect)(() => () => {
                    (null == a ? void 0 : a.type) === "local" && null != a && a.dataURL && URL.revokeObjectURL(a.dataURL)
                }, [a]);
                let m = (0, i(960253).I)(() => ({
                        wrapper: {
                            height: 48,
                            width: 214,
                            background: i(632079).Tj.background.primary,
                            border: `1px solid ${i(632079).Tj.border.secondaryTranslucent}`,
                            borderRadius: 12,
                            paddingTop: 7,
                            paddingInlineEnd: 10,
                            paddingBottom: 8,
                            paddingInlineStart: 8,
                            cursor: c ? "pointer" : "default"
                        }
                    }), [c]),
                    p = (0, i(241838).getIcon)(t);
                return (0, o.jsx)(i(64960).Ay, {
                    style: m.wrapper,
                    hoveredStyle: d ? l.wrapperHoveredStyle : l.justBackgroundHovered,
                    pressedStyle: d ? l.wrapperHoveredStyle : l.justBackgroundHovered,
                    onClick: c,
                    children: (0, o.jsxs)(i(4458).fI, {
                        gap: 8,
                        alignItems: "center",
                        children: [(0, o.jsx)("div", {
                            style: l.iconContainer,
                            children: (0, o.jsx)(i(16275).I, {
                                icon: p,
                                size: "lg",
                                colorVariant: "primary"
                            })
                        }), (0, o.jsx)("div", {
                            style: l.style1,
                            children: (0, o.jsx)(i(51831).m, {
                                content: () => (0, o.jsx)("div", {
                                    children: e
                                }),
                                children: t => (0, o.jsxs)("div", {
                                    style: l.style2,
                                    ...t,
                                    children: [(0, o.jsx)("div", {
                                        style: l.fileName,
                                        children: e
                                    }), r ? (0, o.jsx)("span", {
                                        style: l.fileSizeText,
                                        children: (0, i(241838).formatFileSize)(r)
                                    }) : void 0]
                                })
                            })
                        }), d && u ? (0, o.jsx)(i(957145).A, {
                            store: d,
                            fadeIn: !1,
                            actionSectionGroupKey: "comment_media",
                            hideFilterActionsInput: !0,
                            style: l.style3,
                            hoveredStyle: l.actionMenuHoveredStyle
                        }) : void 0]
                    })
                })
            }
        },
        674707: (e, t, i) => {
            i.d(t, {
                A: () => r
            });
            var n = i(296540),
                o = i(474848);
            let l = (0, i(109939).YK)({
                    scrollLeftButtonAriaLabel: {
                        defaultMessage: "Scroll left",
                        id: "FilmStrip.scrollLeftButtonAriaLabel"
                    },
                    scrollRightButtonAriaLabel: {
                        defaultMessage: "Scroll right",
                        id: "FilmStrip.scrollRightButtonAriaLabel"
                    }
                }),
                s = {
                    scrollerWrapper: {
                        display: "flex",
                        position: "relative"
                    },
                    scroller: {
                        display: "flex",
                        gap: 4,
                        zIndex: 0,
                        paddingTop: 6,
                        marginTop: -6,
                        paddingInlineEnd: 4
                    },
                    commonArrowStyles: {
                        position: "absolute",
                        borderRadius: 12,
                        width: 24,
                        height: 24,
                        background: i(632079).Tj.background.tertiaryTranslucent,
                        top: 12,
                        boxShadow: "none"
                    },
                    iconHoveredStyle: {
                        background: i(632079).Tj.background.tertiaryTranslucent
                    },
                    leftArrowStyle: {
                        insetInlineStart: 0
                    },
                    rightArrowStyle: {
                        insetInlineEnd: 4
                    }
                };

            function r({
                children: e,
                shouldShowGrayFog: t
            }) {
                let a = (0, i(109939).tz)(),
                    d = (0, n.useRef)(null),
                    c = (0, i(533992).v3)(),
                    u = (0, i(682985).uB)(void 0, i(593423).A),
                    m = (0, i(682985).K8)(() => u.state.elementRef, [u]),
                    p = (0, i(239160).HD)(m),
                    g = (0, i(239160).Xg)(m),
                    f = (0, i(239160).sj)(m),
                    y = (0, n.useCallback)(() => {
                        var e;
                        null == (e = d.current) || e.getClientRect()
                    }, []);
                (0, n.useEffect)(() => ((0, i(166027).P)({
                    el: window,
                    eventName: "resize",
                    callback: y
                }), () => {
                    (0, i(260244).O)({
                        el: window,
                        eventName: "resize",
                        callback: y
                    })
                }), [y]), (0, n.useEffect)(() => {
                    y()
                }, [y]);
                let h = Math.ceil(f + p) < g,
                    v = (0, n.useCallback)(e => {
                        var t;
                        e.stopPropagation(), (0, i(284247).H)({
                            element: null == (t = d.current) ? void 0 : t.getNode(),
                            environment: c,
                            options: {
                                left: -.8 * p,
                                behavior: "smooth"
                            }
                        })
                    }, [p, c]),
                    b = (0, n.useCallback)(e => {
                        var t;
                        e.stopPropagation(), (0, i(284247).H)({
                            element: null == (t = d.current) ? void 0 : t.getNode(),
                            environment: c,
                            options: {
                                left: .8 * p,
                                behavior: "smooth"
                            }
                        })
                    }, [p, c]),
                    x = (0, i(960253).I)(() => ({
                        leftArrowContainer: {
                            position: "absolute",
                            height: "100%",
                            width: 30,
                            background: `linear-gradient(to right, ${t?i(632079).Tj.hoveredMarginDiscussionBackground:i(632079).Tj.selectedMarginDiscussionBackground} 0px, ${i(632079).Tj.contentBackgroundTransparent} 30px`
                        },
                        rightArrowContainer: {
                            position: "absolute",
                            height: "100%",
                            width: 30,
                            insetInlineEnd: 0,
                            background: `linear-gradient(to left, ${t?i(632079).Tj.hoveredMarginDiscussionBackground:i(632079).Tj.selectedMarginDiscussionBackground} 0px, ${i(632079).Tj.contentBackgroundTransparent} 30px`
                        }
                    }), [t]);
                return (0, o.jsxs)("div", {
                    style: s.scrollerWrapper,
                    children: [(0, o.jsx)(i(136508)._, {
                        ref: d,
                        type: i(644154).A.X,
                        store: u,
                        onScroll: y,
                        style: s.scroller,
                        children: e
                    }), f > 0 ? (0, o.jsx)("div", {
                        style: x.leftArrowContainer,
                        children: (0, o.jsx)(i(374533).A, {
                            icon: () => (0, o.jsx)(i(16275).I, {
                                icon: i(374241).arrowStraightLeftSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            }),
                            hovered: !1,
                            showShadow: !0,
                            onClick: v,
                            ariaLabel: a.formatMessage(l.scrollLeftButtonAriaLabel),
                            style: { ...s.commonArrowStyles,
                                ...s.leftArrowStyle
                            },
                            hoveredStyle: s.iconHoveredStyle
                        })
                    }) : void 0, h ? (0, o.jsx)("div", {
                        style: x.rightArrowContainer,
                        children: (0, o.jsx)(i(374533).A, {
                            icon: () => (0, o.jsx)(i(16275).I, {
                                icon: i(969278).arrowStraightRightSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            }),
                            hovered: !1,
                            showShadow: !0,
                            onClick: b,
                            ariaLabel: a.formatMessage(l.scrollRightButtonAriaLabel),
                            style: { ...s.commonArrowStyles,
                                ...s.rightArrowStyle
                            },
                            hoveredStyle: s.iconHoveredStyle
                        })
                    }) : void 0]
                })
            }
        },
        896714: (e, t, i) => {
            i.d(t, {
                P: () => o
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.72 1.77 14.55 16.45",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10.302 1.853a.63.63 0 0 0-.604 0l-6.65 3.669c-.2.11-.323.32-.323.547v7.862c0 .228.124.437.323.547l6.65 3.67a.63.63 0 0 0 .604 0l6.65-3.67c.2-.11.323-.32.323-.547V6.069a.63.63 0 0 0-.323-.547zM3.975 7.127l5.4 2.98v6.434l-5.4-2.98zm6.65 9.414v-6.434l5.4-2.98v6.435zM15.356 6.07 10 9.024 4.644 6.069 10 3.114z"
                    })
                },
                o = (0, i(104509).wt)("cube", n, "default")
        },
        957145: (e, t, i) => {
            i.d(t, {
                A: () => o,
                X: () => s
            }), i(296540);
            var n = i(474848);
            let o = function({
                    tooltipContent: e,
                    fadeIn: t,
                    style: o,
                    hoveredStyle: l,
                    store: r,
                    onClick: a,
                    extraAnalyticsData: d,
                    hideFilterActionsInput: c,
                    actionSectionGroupKey: u,
                    onFocus: m,
                    onBlur: p,
                    iconStyle: g,
                    isFromCollectionView: f,
                    label: y,
                    disabled: h,
                    experimentGroup: v
                }) {
                    let b = (0, i(533992).v3)(),
                        x = h || !r;

                    function S(e) {
                        var t, n, o, l, s, m, p, g;
                        let y;
                        x || (t = e, n = r, o = b, l = a, s = d, m = c, p = u, g = f, (0, i(472709).L)({
                            environment: o,
                            store: n
                        }), y = n.isInLibraryBlock(), i(899964).it({
                            environment: o,
                            stores: i(584265).default.state.stores,
                            left: t.clientX,
                            top: t.clientY,
                            showInput: !m,
                            actionSectionGroupKey: y ? "library" : g ? "block_in_collection" : p || "default",
                            analyticsFrom: "block_more_menu",
                            optionalAnalyticsProperties: {
                                isFromBulkActionsToolbar: s ? s.isFromBulkActionsToolbar : void 0
                            }
                        }), null == l || l())
                    }
                    return e ? (0, n.jsx)(i(51831).m, {
                        content: () => e,
                        delayThreshold: 300,
                        children: e => (0, n.jsx)(s, {
                            tooltipEvents: e,
                            fadeIn: t,
                            style: o,
                            hoveredStyle: l,
                            onClick: S,
                            onFocus: m,
                            onBlur: p,
                            iconStyle: g,
                            label: y,
                            disabled: x,
                            experimentGroup: v
                        })
                    }) : (0, n.jsx)(s, {
                        fadeIn: t,
                        style: o,
                        hoveredStyle: l,
                        onClick: S,
                        onFocus: m,
                        onBlur: p,
                        iconStyle: g,
                        label: y,
                        disabled: x,
                        experimentGroup: v
                    })
                },
                l = {
                    fontSize: 14
                };

            function s({
                tooltipEvents: e = {},
                fadeIn: t,
                style: o,
                hoveredStyle: r,
                onClick: a,
                onFocus: d,
                onBlur: c,
                iconStyle: u,
                ariaLabel: m,
                label: p,
                disabled: g,
                experimentGroup: f
            }) {
                let y = (0, i(643160).yf)();
                return (0, n.jsx)(i(64960).Ay, {
                    className: t ? i(828432).qGl : void 0,
                    style: function({
                        style: e,
                        isContentReskinV2: t
                    }) {
                        return {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            width: t ? 24 : 26,
                            height: t ? 24 : 26,
                            fill: i(986939).A.isMobile ? i(632079).Tj.icon.tertiary : i(632079).Tj.icon.secondary,
                            transition: "opacity 200ms ease-in",
                            ...e
                        }
                    }({
                        style: o,
                        isContentReskinV2: y
                    }),
                    hoveredStyle: r,
                    onClick: a,
                    ariaLabel: m,
                    disabled: g,
                    disabledFeedback: g,
                    ...(0, i(63390).A)(e, {
                        onFocus: d,
                        onBlur: c
                    }),
                    children: p ? (0, n.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: 4,
                        width: "100%",
                        children: [(0, n.jsx)(i(16275).I, {
                            icon: i(397900).ellipsisIcon,
                            style: u
                        }), (0, n.jsx)("div", {
                            style: l,
                            children: p
                        })]
                    }) : "vertical_margin" === f || "vertical_2" === f ? (0, n.jsx)(i(16275).I, {
                        icon: i(397900).ellipsisIcon,
                        style: u
                    }) : (0, n.jsx)(i(16275).I, {
                        icon: i(361226).ellipsisSmallIcon,
                        size: "sm",
                        style: u
                    })
                })
            }
        }
    }
]);