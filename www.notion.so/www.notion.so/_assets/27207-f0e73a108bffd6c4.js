"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [27207, 77916], {
        5967: (e, t, i) => {
            i.d(t, {
                V: () => o
            });

            function o(e) {
                let {
                    spaceStore: t
                } = e, o = (0, i(993077).nB)(t);
                return (0, i(682985).K8)(() => (0, i(924448).MU)({
                    spaceStore: t,
                    actorRole: o
                }), [t, o])
            }
        },
        15438: (e, t, i) => {
            i.d(t, {
                Ay: () => c,
                xG: () => u
            });
            var o = i(296540),
                n = i(474848);
            let a = (0, i(109939).YK)({
                    updates: {
                        id: "topbar.commentsButton.title",
                        defaultMessage: "Comments"
                    },
                    closeDiscussions: {
                        defaultMessage: "Close all discussions",
                        id: "topbar.commentsButton.closeSidebarTooltip"
                    },
                    openDiscussions: {
                        defaultMessage: "View all discussions",
                        id: "topbar.commentsButton.openSidebarTooltip"
                    },
                    unreadDiscussionsPopupMessage: {
                        defaultMessage: "View all new discussions",
                        id: "topbar.commentsButton.openDiscussionsPopupTooltip"
                    }
                }),
                s = {
                    textAlign: "center"
                },
                r = {
                    position: "relative",
                    display: "flex",
                    alignItems: "center"
                },
                l = {
                    dot: {
                        position: "absolute",
                        top: 1.8 * !i(986939).A.isMobile,
                        insetInlineEnd: i(986939).A.isMobile ? 12 : 5.5,
                        height: 11,
                        width: 11,
                        border: `2px solid ${i(632079).Tj.whiteButtonBackground}`,
                        borderRadius: 12,
                        background: i(632079).oZ.red,
                        pointerEvents: "none"
                    }
                };

            function d() {
                return (0, n.jsx)("div", {
                    style: l.dot
                })
            }
            let c = function({
                blockStore: e,
                unreadDiscussionsPopupStore: t
            }) {
                let l = (0, i(714050).B)({
                        navigableBlockStore: e
                    }),
                    c = (0, i(109939).tz)(),
                    u = (0, i(533992).v3)(),
                    p = l.length > 0,
                    {
                        value: g
                    } = (0, i(815048).fJ)(i(656915).commentsDependency),
                    {
                        isSidebarCommentsTabExpanded: m,
                        isSidebarUpdatesExpanded: f
                    } = (0, i(682985).K8)(() => ({
                        isSidebarCommentsTabExpanded: (0, i(832122).m)(u),
                        isSidebarUpdatesExpanded: (0, i(953099).N)(u)
                    }), [u]),
                    h = (0, i(682985).K8)(() => i(475097).default.state.open, []),
                    v = (0, i(682985).K8)(() => {
                        let e = i(475097).default.state.open;
                        return i(82702).A.getPanelState(e ? "peek" : "mainPage").isOpen
                    }, []),
                    b = !f,
                    S = (0, i(682985).K8)(() => t.state.open, [t]),
                    y = (0, o.useCallback)(() => {
                        var o;
                        let n = null == g || null == (o = g.discussionHelpers) ? void 0 : o.getDiscussions,
                            a = !!n && n(e).length > 0;
                        (0, i(104310).u)({
                            event: {
                                eventName: "topbar_comments_menu_click",
                                eventProperties: {
                                    has_discussions: a,
                                    has_unread_indicator: p
                                }
                            }
                        }), b ? S ? t.reset() : S || t.setState({
                            open: !0
                        }) : (t.reset(), (0, i(418001).j)({
                            environment: u,
                            blockStore: e,
                            tabToOpen: i(449473).tF.Comments,
                            from: "topbar"
                        }))
                    }, [u, e, g, b, p, S, t]),
                    k = m ? c.formatMessage(a.closeDiscussions) : b ? c.formatMessage(a.unreadDiscussionsPopupMessage) : c.formatMessage(a.openDiscussions),
                    x = (0, n.jsx)(i(51831).m, {
                        placement: "bottom",
                        content: () => (0, n.jsx)("div", {
                            style: s,
                            children: k
                        }),
                        children: e => (0, n.jsxs)("div", {
                            style: r,
                            children: [(0, n.jsx)(i(374533).A, { ...e,
                                icon: i(557488).h,
                                iconStyle: i(440601).RN.icon,
                                onClick: y,
                                style: i(440601).RN.iconButton,
                                ariaLabel: c.formatMessage(a.updates),
                                hovered: m && !v && !h || S,
                                className: i(828432).rm
                            }), p ? (0, n.jsx)(d, {}) : void 0]
                        })
                    });
                return (0, n.jsx)(i(656252).A, {
                    buttonPopupStore: t,
                    content: () => (0, n.jsx)(i(656915).j9, {
                        blockStore: e,
                        unreadDiscussionsPopupStore: t
                    }),
                    popupType: i(182718).nl.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "end",
                    originGap: 8,
                    children: () => x
                })
            };

            function u(e) {
                let {
                    blockType: t,
                    systemBlockType: o,
                    discussionCount: n,
                    isDraftPage: a,
                    isCollectionViewPageWithContent: s
                } = e;
                if (!t) return !1;
                let r = t !== i(955630).xd.form,
                    l = (0, i(512845).SF)(o),
                    d = t === i(955630).xd.collectionView || t === i(955630).xd.collectionViewPage;
                return r && l && n > 0 && (!d || s) && !a
            }
        },
        27445: (e, t, i) => {
            i.d(t, {
                M: () => o
            }), i(18107), i(967357);

            function o(e) {
                let t = e.blocks.at(0);
                return !!t && (0, i(822012).V)(t) && (0, i(505941).y)(e.environment, t)
            }
        },
        30082: (e, t, i) => {
            i.d(t, {
                H: () => a,
                U: () => n
            });
            var o = i(296540);
            let n = (0, o.createContext)(new(i(232081)).A);

            function a() {
                return (0, o.useContext)(n)
            }
            n.displayName = "TrustedDomainsContext"
        },
        59579: (e, t, i) => {
            i.d(t, {
                a: () => o
            });

            function o(e, t) {
                let o = {
                    id: "",
                    key: t,
                    type: "static",
                    category: i(292609).lU[t].category,
                    props: {}
                };
                (0, i(466290).K)(e, o)
            }
        },
        103415: (e, t, i) => {
            i.d(t, {
                l: () => o
            });

            function o() {
                return i(218744).default.getEligibleGroup({
                    experimentId: "guest_duplicate_page_topbar",
                    defaultGroup: "control"
                })
            }
        },
        137683: (e, t, i) => {
            i.d(t, {
                m: () => s
            });
            var o = () => i(546605);
            class n extends o().Store {
                constructor() {
                    super(), setInterval(() => {
                        this.setState({
                            timeNow: Date.now()
                        })
                    }, 3e4)
                }
                getInitialState() {
                    return {
                        timeNow: Date.now()
                    }
                }
            }
            let a = null;

            function s() {
                return a || (a = new n), a
            }
        },
        149402: (e, t, i) => {
            i.d(t, {
                w: () => a
            });
            var o = () => i(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                setCampaign(e) {
                    this.setState({ ...this.state,
                        campaign: e
                    })
                }
                open(e) {
                    this.setState({
                        open: !0,
                        ...e
                    })
                }
                close() {
                    this.setState({
                        open: !1
                    })
                }
            }
            let a = new n
        },
        170303: (e, t, i) => {
            i.d(t, {
                F: () => n
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.4 2.39 15.2 14.52",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10.594 2.83a.625.625 0 0 0-1.188 0L7.899 7.468H3.025a.625.625 0 0 0-.367 1.13L6.6 11.462l-1.506 4.636a.625.625 0 0 0 .962.699L10 13.932l3.943 2.865a.625.625 0 0 0 .962-.699L13.4 11.462l3.943-2.865a.625.625 0 0 0-.367-1.13H12.1z"
                    })
                },
                n = (0, i(104509).wt)("starFill", o, "fill")
        },
        232081: (e, t, i) => {
            i.d(t, {
                A: () => a
            });
            var o = () => i(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        trustedDomainPointers: [],
                        enabledTrustedEmailDomains: [],
                        trustedDomains: [],
                        lastEmitData: {
                            value: -1,
                            spaceId: void 0
                        }
                    }
                }
                getForSpace(e) {
                    if (!e) return;
                    let {
                        enabledTrustedEmailDomains: t,
                        trustedDomainPointers: i,
                        trustedDomains: o,
                        lastEmitData: n
                    } = this.state;
                    if (n.spaceId === e.id) return {
                        enabledTrustedEmailDomains: t,
                        trustedDomainPointers: i,
                        trustedDomains: o
                    }
                }
                shouldRefetchTrustedDomains({
                    currentSpaceId: e,
                    emitValue: t
                }) {
                    let {
                        spaceId: i,
                        value: o
                    } = this.state.lastEmitData;
                    return e !== i || t !== o
                }
            }
            let a = n
        },
        239419: (e, t, i) => {
            i.d(t, {
                M: () => n
            });
            let o = new(i(815048)).O2("topbarStopSuggestModeButton", async () => await Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(26361), i.e(16471), i.e(37353), i.e(62475), i.e(3151), i.e(18965), i.e(98629), i.e(96527), i.e(30085), i.e(90109), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(17250), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(55940), i.e(12560), i.e(88268), i.e(12001), i.e(40198), i.e(39726), i.e(31243), i.e(42534), i.e(86662), i.e(14886), i.e(39225), i.e(6212), i.e(2626), i.e(64453), i.e(4779), i.e(21969), i.e(29663), i.e(28482), i.e(76361), i.e(14369), i.e(74145), i.e(48860), i.e(75136), i.e(98175), i.e(18682), i.e(79349), i.e(58360), i.e(33162), i.e(82538), i.e(63793), i.e(18881), i.e(62731), i.e(41049), i.e(60262), i.e(72805), i.e(18416), i.e(2276), i.e(30532), i.e(73588), i.e(3723), i.e(91100), i.e(78311), i.e(4287), i.e(9817), i.e(65594), i.e(47302), i.e(91636), i.e(36441), i.e(64049), i.e(75189), i.e(28372), i.e(28663), i.e(47281), i.e(29087), i.e(46350), i.e(75234), i.e(67281), i.e(66200), i.e(52064), i.e(69626), i.e(82816), i.e(2832), i.e(48095), i.e(67098), i.e(35118), i.e(63611), i.e(94849), i.e(75484), i.e(98821), i.e(97711), i.e(89076), i.e(86998), i.e(58889), i.e(22920), i.e(9914), i.e(78257), i.e(84382), i.e(51386), i.e(95150), i.e(10471), i.e(87087), i.e(98419), i.e(11719), i.e(13592), i.e(6743), i.e(5234), i.e(85376), i.e(67252), i.e(42709), i.e(44903), i.e(92181), i.e(7251), i.e(72143), i.e(67612), i.e(53478), i.e(75559), i.e(86793), i.e(34), i.e(54253), i.e(26665), i.e(67984), i.e(605), i.e(75681)]).then(i.bind(i, 186269))),
                n = (0, i(815048)._h)(o, e => e.TopbarStopSuggestModeButton)
        },
        241838: (e, t, i) => {
            i.r(t), i.d(t, {
                DiscussionFormat: () => c,
                anyDiscussionCommentsLoading: () => b,
                discussionLocationToDiscussionFormat: () => S,
                formatFileSize: () => x,
                getDiscussions: () => g,
                getDiscussionsForSidebar: () => m,
                getIcon: () => d,
                getLatestRelevantComment: () => u,
                getSetOfUsersInDiscussions: () => y,
                hasCommentChanged: () => v,
                inputIsEmpty: () => h,
                isCommentAllEmojis: () => k,
                isUserImplicitlyFollowingDiscussion: () => _,
                lineClampForCommentCount: () => p,
                sortDiscussionStoresByLatestComment: () => f
            }), i(898992), i(354520), i(803949), i(581454), i(737550);
            var o, n = () => i(247438);
            i(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.79 1.87 16.47 15.5",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M9.66 1.977a.63.63 0 0 1 .785.08l2.647 2.647.08.097a.626.626 0 0 1-.866.867l-.098-.08-1.579-1.58v6.95l6.018 3.475-.577-2.155a.626.626 0 0 1 1.207-.324l.97 3.615.019.121a.625.625 0 0 1-.462.645l-3.614.967a.625.625 0 0 1-.325-1.207l2.158-.579-6.015-3.472-5.97 3.55 2.165.55.118.043a.626.626 0 0 1-.301 1.188l-.125-.02-3.627-.922a.625.625 0 0 1-.451-.76l.921-3.626a.625.625 0 0 1 1.212.308L3.4 14.52l5.98-3.554V4.008L7.8 5.588l-.099.08a.626.626 0 0 1-.786-.964l2.647-2.647z"
                    })
                },
                s = (0, i(104509).wt)("arrow3D", a, "default"),
                r = () => i(43371),
                l = {
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
                return l[(function(e) {
                    if (!e) return "";
                    let {
                        pathname: t
                    } = i(758654).qg(e);
                    if (!t) return "";
                    let o = t.split(".");
                    return o[o.length - 1]
                })(e).toLowerCase()] ? ? i(865213).Y
            }
            let c = ((o = {})[o.Menu = 0] = "Menu", o[o.Page = 1] = "Page", o[o.Sidebar = 2] = "Sidebar", o[o.Margin = 3] = "Margin", o[o.Unfurl = 4] = "Unfurl", o);

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
                    let o = e.getCommentStoresSortedByCreatedTime().filter(e => i ? e.isDefined() && e.getCreatedTime() < i : e.isDefined());
                    return o[o.length - 1]
                }({
                    recordStore: e,
                    currentUserId: t,
                    timestamp: i
                }) || e.getFirstComment()
            }

            function p(e) {
                return e > 1 ? 3 : 6
            }

            function g(e) {
                return e ? i(966980).Bw(e, {
                    recursivelyLoadAllDiscussions: !0,
                    includeLoadingDiscussions: !0
                }) : []
            }

            function m({
                blockStore: e,
                currentUserId: t,
                ignoreAfterTime: o
            }) {
                if (!e) return [];
                let n = i(966980).Bw(e, {
                        recursivelyLoadAllDiscussions: !0,
                        includeLoadingDiscussions: !0,
                        includePropertyDiscussions: !0
                    }),
                    a = new Map;
                return n.forEach(e => {
                    let i = u({
                        recordStore: e,
                        currentUserId: t,
                        timestamp: o
                    });
                    a.set(e.id, i)
                }), n.sort((e, t) => {
                    let i = a.get(e.id),
                        o = a.get(t.id);
                    return null != i && i.isDefined() ? null != o && o.isDefined() ? -(i.getCreatedTime() - o.getCreatedTime()) : 1 : -1
                })
            }

            function f(e) {
                return e.sort((e, t) => (0, i(9959).a)(e.getLastComment(), t.getLastComment()))
            }

            function h(e) {
                let t = e.state.textStore.getValue(),
                    i = (e.state.files ? ? []).length > 0,
                    o = t && t.length > 0;
                return !i && !o
            }

            function v(e, t) {
                var o, n;
                let a, s, r = e.state.textStore.getValue(),
                    l = e.state.files;
                if (!t) return r && 0 !== r.length || l && l.length > 0;
                let d = i(966980).gp(t).getValue();
                return !i(381453).n4(d, r) || (o = e, n = t, a = o.state.files, (s = i(966980).dd(n)).length !== a.length || s.some((e, t) => e.id !== a[t].id))
            }

            function b(e) {
                return !!(e.some(e => !e.isReady()) || e.some(e => i(966980).wc(e).some(e => !e.isReady())))
            }

            function S(e) {
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

            function y(e) {
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

            function k(e) {
                for (let i of e) {
                    if (!i.length) return !1;
                    if (!(i[1] && i[1].some(n().nNl))) {
                        var t;
                        let e = i[0].trim(),
                            o = r()();
                        if ((null == (t = e.match(o)) ? void 0 : t.join("")) !== e) return !1
                    }
                }
                return !0
            }

            function x(e) {
                return ((null == e ? void 0 : e.match(/[0-9.]+|[a-z]+/gi)) ? ? []).join(" ")
            }

            function _(e) {
                var t, o;
                let {
                    discussionStore: a,
                    userId: s
                } = e, r = null == (t = a.getParentStore()) ? void 0 : t.getNavigableBlockStore(), l = null == r || null == (o = r.getFollowStore()) ? void 0 : o.getModel();
                return !!(null != l && l.isFollowingAllComments()) || i(966980).wc(a).some(e => {
                    let t = e.getCreatedByPointer();
                    if (t && t.table === i(832375).oo9 && t.id === s) return !0;
                    let o = e.getText();
                    return (0, n().Fbh)(o).includes(s)
                })
            }
        },
        268736: (e, t, i) => {
            function o(e = !0, t = !1) {
                return {
                    flex: 1,
                    marginInlineStart: 8 * !e,
                    overflow: "hidden",
                    marginInlineEnd: t ? 16 : 8,
                    whiteSpace: "nowrap",
                    height: "100%",
                    minWidth: 0,
                    maxWidth: "100%",
                    textOverflow: "ellipsis"
                }
            }
            i.d(t, {
                MS: () => s,
                aD: () => a,
                bu: () => n,
                uO: () => o,
                uZ: () => r
            });
            let n = 36;

            function a() {
                return {
                    iconStyle: {
                        height: 26,
                        width: 26,
                        fill: i(632079).Tj.icon.primary
                    },
                    iconContainer: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        marginInlineEnd: 14,
                        color: i(632079).Tj.icon.secondary,
                        width: 26
                    },
                    redesignedIconStyle: {
                        height: 24,
                        width: 24,
                        fill: i(632079).Tj.icon.primary
                    },
                    redesignedCircleIconContainer: {
                        background: i(632079).Tj.background.primary,
                        color: i(632079).Tj.icon.primary,
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 18,
                        width: n,
                        height: n
                    },
                    redesignedCoverPhotoIconContainer: {
                        background: i(632079).Tj.background.primary,
                        color: i(632079).Tj.icon.primary,
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 18,
                        width: n,
                        height: n,
                        boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 14px 28px -6px rgba(0, 0, 0, 0.10)"
                    }
                }
            }

            function s(e) {
                let {
                    WindowSizeStore: t
                } = e;
                return {
                    marginTop: t.state.paddingTop,
                    paddingInlineStart: t.getSafePaddingLeftPx(0),
                    paddingInlineEnd: t.getSafePaddingRightPx(0)
                }
            }

            function r(e = i(515378).s1, t = !0) {
                let o = 1 / (window.devicePixelRatio || 1);
                return {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "100%",
                    height: e,
                    boxShadow: t ? `0 ${o}px 0 ${i(632079).Tj.border.secondaryTranslucent}` : "none",
                    background: i(632079).Tj.background.primary,
                    transition: "box-shadow 300ms",
                    WebkitUserSelect: "none",
                    cursor: "pointer"
                }
            }
        },
        282276: (e, t, i) => {
            i.r(t), i.d(t, {
                TopbarActionButtons: () => u,
                shouldShowTopbarMoreButton: () => m,
                shouldShowTopbarPresence: () => g,
                shouldShowTopbarShareMenu: () => p
            });
            var o = i(296540);

            function n({
                spaceId: e,
                trustedDomainsStore: t,
                trustedDomains: o,
                value: a
            }) {
                let s = o.map(t => ({
                        table: i(832375).A3P,
                        id: t.id,
                        spaceId: e
                    })),
                    r = o.map(e => e.getEmailDomain());
                t.setState({
                    trustedDomainPointers: s,
                    enabledTrustedEmailDomains: r,
                    trustedDomains: o,
                    lastEmitData: {
                        value: a,
                        spaceId: e
                    }
                })
            }
            i(581454), i(18107), i(967357);
            var a = i(474848);
            let s = (0, i(109939).YK)({
                    openAgent: {
                        id: "workflows.topbar.agentButton.openAgent",
                        defaultMessage: "Chat with Notion AI"
                    }
                }),
                r = {
                    height: 28,
                    width: "auto",
                    paddingTop: 0,
                    paddingInlineEnd: 8,
                    paddingBottom: 0,
                    paddingInlineStart: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6
                },
                l = {
                    fontSize: 14
                };

            function d(e) {
                let t = (0, i(533992).v3)(),
                    n = (0, i(109939).tz)(),
                    d = (0, i(682985).K8)(() => {
                        let t = i(728372).AppStoreSidebarSpaceStore.state;
                        if (t) return e.store ? {
                            table: i(682956).ev,
                            id: e.store.pointer.id,
                            spaceId: t.id
                        } : {
                            table: i(213003).NX,
                            id: t.id,
                            spaceId: t.id
                        }
                    }, [e.store]),
                    [{
                        value: c
                    }] = (0, i(97668).Yb)(async () => {
                        let o = i(728372).AppStoreSidebarSpaceStore.state;
                        if (!d || !i(205885).A.state.online || !o) return;
                        let n = await t.api.callApi({
                            eventName: "getInferenceTranscriptsForUser",
                            environment: t,
                            data: {
                                threadParentPointer: d
                            }
                        });
                        if ("failed" === n.type) return;
                        let a = n.data.transcripts.at(0);
                        if (!a) return;
                        let s = i(174148).E.createChildStore(e.store, {
                            table: i(298085).T,
                            id: a.id,
                            spaceId: o.id
                        });
                        await s.load();
                        let r = s.getMessageStores().at(-1);
                        if (r) return await r.load(), r.getCreatedTime() > Date.now() - i(695216).Xb ? s.id : void 0
                    }, [d, t, e.store]),
                    u = (0, o.useCallback)(() => {
                        (0, i(358667).openChatPanel)({
                            environment: t,
                            store: e.store,
                            chatPanelState: c ? {
                                isOpen: !0,
                                threadId: c
                            } : {
                                isOpen: !0,
                                isNewThread: !0
                            }
                        })
                    }, [t, e.store, c]);
                return (0, i(682985).K8)(() => (0, i(932052).G)(e.store), [e.store]) ? (0, a.jsx)(i(51831).m, {
                    placement: "bottom",
                    originGap: t.device.isElectronWindows ? 10 : void 0,
                    content: () => (0, a.jsx)(i(109939).sA, { ...s.openAgent
                    }),
                    children: e => (0, a.jsxs)(i(988022).p, { ...e,
                        onClick: u,
                        style: r,
                        "aria-label": n.formatMessage(s.openAgent),
                        children: [(0, a.jsx)(i(16275).I, {
                            icon: i(273344).aiFaceIcon,
                            size: "lg"
                        }), (0, a.jsx)("span", {
                            style: l,
                            children: "Chat"
                        })]
                    })
                }) : null
            }
            let c = {
                agentDivider: {
                    width: 1,
                    height: 20,
                    margin: "0 8px",
                    backgroundColor: i(632079).Tj.border.primary
                }
            };

            function u(e) {
                let t = (0, i(533992).v3)(),
                    {
                        device: s
                    } = t,
                    r = (0, i(109939).tz)(),
                    {
                        store: l
                    } = e,
                    u = (0, i(83208).X)("top_corner_agent_entry_point"),
                    p = (0, i(682985).K8)(() => i(562733).zI.state.chatPanelMode, []),
                    g = (0, i(682985).K8)(() => (0, i(548124).getIsChatPanelOpen)(t), [t]),
                    m = (0, i(682985).K8)(() => l.canEdit(), [l]),
                    [f, h] = (0, i(682985).$y)(void 0, i(184332).A),
                    [v, b] = (0, o.useState)(!1),
                    S = (0, i(682985).K8)(() => (0, i(829435).s)(l.id), [l.id]),
                    y = (0, i(67499).S)(),
                    {
                        spaceStore: k,
                        spaceViewStore: x,
                        pageVisitStore: _,
                        presenceStore: T
                    } = (0, i(682985).K8)(() => ({
                        spaceStore: (0, i(888).$)(y),
                        spaceViewStore: i(728372).AppStoreSidebarSpaceViewStore.state,
                        pageVisitStore: i(728372).default.state.pageVisitStore,
                        presenceStore: i(728372).default.state.presenceStore
                    }), [y]),
                    w = (0, i(682985).K8)(() => {
                        var e;
                        return null == (e = i(708929).Uv.getStateForBlock(l.id)) ? void 0 : e.mode
                    }, [l.id]),
                    j = (0, i(682985).K8)(() => (0, i(933062).Nh)(l.id), [l.id]),
                    A = (0, i(682985).K8)(() => (0, i(505941).y)(t), [t]),
                    {
                        isTeamPost: M,
                        isFormBlock: C,
                        isPageBlock: I,
                        isEOIPBlock: P
                    } = (0, i(682985).K8)(() => ({
                        isTeamPost: l.isTeamPost(),
                        isFormBlock: l.isFormBlock(),
                        isPageBlock: l.isPageBlock(),
                        isEOIPBlock: l.isExternalObjectInstancePageBlockStore()
                    }), [l]),
                    B = (0, i(682985).K8)(() => (0, i(953099).N)(t), [t]),
                    E = (0, i(682985).K8)(() => 1150 > (0, i(424332).xK)(t, !1), [t]),
                    D = (0, i(809210).oo)({
                        blockStore: l,
                        spaceStore: k,
                        spaceViewStore: x
                    });
                (0, o.useEffect)(() => {
                    b(!B)
                }, [B]);
                let {
                    canShowUpdateSidebarUnexpander: L,
                    shouldShowUpdateSidebarUnexpander: O
                } = (0, i(682985).K8)(() => {
                    let e = !v && B,
                        t = e && (i(449473).B8.state.mouseEntered || f.mouseEntered);
                    return {
                        canShowUpdateSidebarUnexpander: e,
                        shouldShowUpdateSidebarUnexpander: t
                    }
                }, [v, B, f]), V = (0, i(682985).K8)(() => L ? i(449473).B8.state.width : void 0, [L]), {
                    sidebarExpanded: F,
                    sidebarIsAnimating: N
                } = (0, i(682985).K8)(() => ({
                    sidebarExpanded: i(449473).B8.state.expanded,
                    sidebarIsAnimating: i(449473).B8.state.isAnimating
                }), []), K = (0, i(682985).O$)((0, i(348295).$)(t)), R = (0, i(809210).Yj)({
                    blockStore: l
                }), U = (0, i(682985).O$)(i(585823).gZ), {
                    suggestTranslation: z,
                    suggestedPageTranslationLanguage: G,
                    detectedPageLanguage: Z,
                    setTranslationSuggestionDismissed: H
                } = (0, i(417131).V)(l), Y = (0, i(809210).bQ)({
                    blockStore: l
                }), $ = (0, i(809210).ju)({
                    blockStore: l,
                    spaceViewStore: x
                }), q = (0, i(682985).K8)(() => l.pathIsDead(), [l]), W = (0, i(682985).K8)(() => {
                    let e = l.getType(),
                        t = l.isFormBlock(),
                        o = "translate_locked" === w,
                        n = l.getParentTable() === i(832375).C0E;
                    return !!e && !q && !t && !o && !n
                }, [l, w, q]), J = (0, i(682985).K8)(() => D && !i(986939).A.isMobile && "control" !== i(218744).default.getEligibleGroup({
                    experimentId: "move_copy_link_button",
                    defaultGroup: "control"
                }), [D]), X = (0, i(682985).K8)(() => W && "copy_link_only" !== i(218744).default.getEligibleGroup({
                    experimentId: "move_copy_link_button",
                    defaultGroup: "control",
                    disableExposureLogging: !0
                }), [W]), Q = !i(986939).A.isMobile && (I || P) && !C, ee = (0, i(682985).O$)(i(584257).b), et = function({
                    spaceId: e
                }) {
                    let t = (0, i(533992).v3)(),
                        [a] = (0, o.useState)(new(i(232081)).A);
                    return (0, o.useEffect)(() => {
                        if (!e) return;
                        (0, i(986251).XC)({
                            environment: t,
                            spaceId: e
                        }).then(t => n({
                            spaceId: e,
                            trustedDomainsStore: a,
                            trustedDomains: t,
                            value: 0
                        }));
                        let o = i(48091).Ay.addListener({
                            key: (0, i(568479)._i)({
                                spaceId: e
                            }),
                            authorizationToken: void 0,
                            listener: async ({
                                value: o
                            }) => {
                                if (a.shouldRefetchTrustedDomains({
                                        currentSpaceId: e,
                                        emitValue: o
                                    })) {
                                    let s = await (0, i(986251).XC)({
                                        environment: t,
                                        spaceId: e
                                    });
                                    n({
                                        spaceId: e,
                                        trustedDomainsStore: a,
                                        trustedDomains: s,
                                        value: o
                                    })
                                }
                            },
                            subscriptionId: void 0
                        });
                        return () => {
                            o && i(48091).Ay.removeListener(o)
                        }
                    }, [t, e, a]), a
                }({
                    spaceId: null == k ? void 0 : k.id
                }), ei = (0, i(682985).K8)(() => (0, i(642138).E)(l, x), [l, x]), eo = (0, i(682985).K8)(() => (0, i(686648).L)({
                    environment: t,
                    blocks: [l]
                }) && "topbar" === (0, i(103415).l)(), [t, l]), en = (0, i(682985).K8)(() => (0, i(27445).M)({
                    environment: t,
                    blocks: [l]
                }) && "topbar" === (0, i(521324).w)(), [t, l]), ea = (0, o.useRef)(null), es = (0, o.useCallback)(() => {
                    var e;
                    let o = null == (e = ea.current) ? void 0 : e.getBoundingClientRect();
                    i(5594).RV({
                        environment: t,
                        store: l,
                        originRect: o
                    })
                }, [t, l]), er = (0, o.useRef)(null), el = (0, o.useCallback)(() => {
                    var e;
                    let o = null == (e = er.current) ? void 0 : e.getBoundingClientRect();
                    i(5594).Ul({
                        environment: t,
                        store: l,
                        originRect: o
                    })
                }, [t, l]), ed = (0, i(440601).Nq)(), ec = (0, i(960253).I)(() => ({
                    actionButtonsWrapStyle: {
                        flexGrow: 0,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        paddingInlineEnd: 4 * !!i(986939).A.isMobile,
                        paddingInlineStart: ed,
                        width: V,
                        justifyContent: "space-between",
                        zIndex: 101,
                        height: i(801113).ek(t.device.isElectronMac),
                        opacity: +!K,
                        transition: `
					opacity ${i(97143).L}ms,
					color ${i(97143).L}ms
				`
                    },
                    pageFreshnessContainer: D ? {} : {
                        marginInlineEnd: 12
                    }
                }), [ed, V, t.device.isElectronMac, K, D]);
                if (e.isInvalidPage) return null;
                let eu = (!s.isElectronMac || !K) && L && (s.isElectron || O) && !N;
                return (0, a.jsx)(i(30082).U.Provider, {
                    value: et,
                    children: (0, a.jsxs)("div", {
                        style: ec.actionButtonsWrapStyle,
                        onMouseMove: () => {
                            h({ ...f,
                                mouseEntered: !0
                            })
                        },
                        onMouseLeave: () => {
                            h({ ...f,
                                mouseEntered: !1
                            })
                        },
                        className: i(828432)._6K,
                        children: [eu ? (0, a.jsx)(i(405907).i, {
                            isVisible: eu,
                            icon: i(487415).O,
                            caption: r.formatMessage({
                                defaultMessage: "Close panel",
                                id: "updateSidebarUnexpandButton.closePanel.tooltip"
                            }),
                            onClick: () => {
                                b(!0), (0, i(911046).u)({
                                    environment: t,
                                    isExpanded: !1,
                                    from: "close_for_space",
                                    saveDetailsSidebarPreference: !0
                                })
                            },
                            keyboardShortcutName: "toggleUpdateSidebar"
                        }) : (0, a.jsx)("div", {}), (0, a.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            children: [G && Z ? (0, a.jsx)(i(912572).Z6, {
                                store: l,
                                isVisible: z,
                                setTranslationSuggestionDismissed: () => H(!0),
                                suggestedPageTranslationLanguage: G,
                                detectedPageLanguage: Z
                            }) : void 0, (0, a.jsx)(i(239419).M, {
                                store: l,
                                isVisible: "suggest" === w && !C
                            }), j || C || U || z || "suggest" === w ? void 0 : (0, a.jsx)(i(356901).y, {
                                store: l,
                                isExpanded: B,
                                isWindowSmall: E,
                                isElectron: s.isElectron,
                                style: ec.pageFreshnessContainer,
                                isShowingTabBar: ee
                            }), Y && m && !M && _ && T && !C && !A ? (0, a.jsx)(i(616922).Ay, {
                                rootStore: l,
                                pageVisitStore: _,
                                presenceStore: T,
                                maxUsers: F ? 5 : void 0
                            }) : void 0, D ? (0, a.jsx)(i(644097).E, {
                                store: l,
                                buttonPopupStore: i(409614).A
                            }) : void 0, J ? (0, a.jsx)(i(874367).e, {
                                store: l
                            }) : void 0, eo ? (0, a.jsx)(i(407487).G, {
                                ref: ea,
                                onClick: es
                            }) : void 0, en ? (0, a.jsx)(i(407487).G, {
                                ref: er,
                                onClick: el
                            }) : void 0, Q ? (0, a.jsx)(i(309316).n, {
                                blockStore: l,
                                buttonPopupStore: i(601406).A,
                                pageViewBlockContext: i(166654).R.Frame
                            }) : void 0, R ? (0, a.jsx)(i(15438).Ay, {
                                blockStore: l,
                                unreadDiscussionsPopupStore: i(704657).Z
                            }) : void 0, X ? (0, a.jsx)(i(722716).TopbarFavoriteButton, {
                                store: l,
                                spaceViewStore: x
                            }) : void 0, S ? (0, a.jsx)(i(442661).A, {}) : void 0, C && !ei ? (0, a.jsx)(i(298956).A, {
                                formBlockStore: l,
                                inPeekMode: !1
                            }) : void 0, $ ? (0, a.jsx)(i(517745).u, {
                                store: l,
                                buttonPopupStore: i(19750).A
                            }) : void 0, u && "sidebar" === p && !g ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    style: c.agentDivider
                                }), (0, a.jsx)(d, {
                                    store: l
                                })]
                            }) : void 0]
                        })]
                    })
                })
            }

            function p(e) {
                let {
                    isSpaceGuest: t,
                    canEditPage: o,
                    blockType: n,
                    systemBlockType: a,
                    isTranslated: s,
                    shouldShowPeopleCollection: r,
                    isCrossSpaceBlock: l,
                    hasPermissionViaPublicAccess: d,
                    isPublicShareLink: c,
                    isGuestPrivatePage: u,
                    isCustomAgentInstructionsPage: p
                } = e;
                if (!n) return !1;
                if (i(986939).A.isAdminMode) return !0;
                let g = n !== i(955630).xd.form,
                    m = (0, i(512845).Oz)(a, r),
                    f = !0;
                return (0, i(722371).O9)(t) && (f = !t || o), !p && !u && !c && g && m && f && !d && !l && !s
            }

            function g(e) {
                let {
                    blockType: t,
                    systemBlockType: o,
                    canEditPage: n,
                    isTeamPost: a,
                    userIsViewingAsPublicShareLink: s
                } = e;
                if (!t) return !1;
                let r = t !== i(955630).xd.form,
                    l = (0, i(512845).D7)(o);
                return n && r && l && !a && !s
            }

            function m(e) {
                let {
                    blockType: t,
                    systemBlockType: o,
                    isGuestPrivatePage: n
                } = e;
                if (!t || n) return !1;
                let a = t !== i(955630).xd.form,
                    s = (0, i(512845).dy)(o);
                return a && s
            }
        },
        298956: (e, t, i) => {
            i.d(t, {
                A: () => d
            });
            var o = i(296540),
                n = i(474848);
            let a = {
                    marginInlineEnd: void 0
                },
                s = {
                    width: 24
                },
                r = {
                    position: "absolute",
                    borderRadius: 1,
                    marginTop: 6,
                    marginInlineEnd: 10
                },
                l = (0, i(109939).YK)({
                    edit: {
                        id: "FormEmbedActionButtons.edit",
                        defaultMessage: "Edit form"
                    },
                    copyLink: {
                        id: "FormEmbedActionButtons.link",
                        defaultMessage: "Copy link to form"
                    },
                    copiedLink: {
                        id: "FormTopbarActionButtons.copiedLinkToForm.tooltip",
                        defaultMessage: "Copied"
                    }
                }),
                d = function(e) {
                    let t = (0, i(533992).v3)(),
                        d = (0, i(109939).tz)(),
                        c = (0, o.useRef)(null),
                        {
                            formBlockStore: u,
                            inPeekMode: p
                        } = e,
                        g = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceViewStore),
                        m = (0, i(682985).K8)(() => !!g && (0, i(87822).J)({
                            spaceViewStore: g,
                            pageId: u.id
                        }), [g, u]),
                        f = (0, i(960253).I)(() => {
                            let e = p ? i(104509).Ev.sm : i(104509).Ev.default;
                            return {
                                actionButtonStyle: {
                                    width: p ? 24 : 32,
                                    height: p ? "auto" : 28,
                                    marginInlineStart: 4 * !p,
                                    marginInlineEnd: 0
                                },
                                actionIconStyle: {
                                    width: e,
                                    height: e,
                                    fill: p ? i(632079).Tj.icon.secondary : i(632079).Tj.icon.primary
                                }
                            }
                        }, [p]),
                        [h, v] = (0, o.useState)(!1),
                        b = (0, i(682985).K8)(() => u.getIsFormPublic(), [u]),
                        S = (0, i(682985).K8)(() => {
                            var e;
                            return !b && !i(986939).A.isMobile && t.currentUser.id === u.getCreatedById() && !!(null == (e = u.getFormBlockParentBlockStore()) ? void 0 : e.canEditCollection())
                        }, [t.currentUser.id, u, b]),
                        y = (0, o.useMemo)(() => async () => {
                            v(!0);
                            let e = (0, i(805999).px)(u);
                            (await (0, i(969899).jd)())({
                                stringValue: e,
                                environment: t,
                                copiedMessage: i(986939).A.isMobile ? i(329977).l.copiedLinkToForm : void 0
                            }), setTimeout(() => {
                                v(!1)
                            }, 1e3)
                        }, [u, t]);

                    function k() {
                        let e = u.getFormBlockParentBlockStore();
                        if (e) {
                            var o;
                            (0, i(545586).navigateToBlock)({
                                environment: t,
                                store: e,
                                collectionViewId: null == (o = u.getParentStore()) ? void 0 : o.id,
                                pageVisitSource: i(254656).y8.FormInternalPage
                            })
                        }
                    }
                    let x = (0, n.jsxs)(n.Fragment, {
                        children: [S ? (0, n.jsx)(i(51831).m, {
                            content: () => (0, n.jsx)(n.Fragment, {
                                children: d.formatMessage(l.edit)
                            }),
                            children: e => (0, n.jsx)(i(374533).A, { ...e,
                                style: { ...f.actionButtonStyle,
                                    ...a
                                },
                                icon: i(636).pencilLineIcon,
                                iconStyle: f.actionIconStyle,
                                ariaLabel: d.formatMessage(l.edit),
                                onClick: k
                            })
                        }) : void 0, (0, n.jsx)(i(51831).m, {
                            originGap: t.device.isElectronWindows ? 10 : void 0,
                            forceVisibleState: !!h || void 0,
                            content: () => (0, n.jsx)(i(109939).sA, { ...h ? l.copiedLink : l.copyLink
                            }),
                            children: e => (0, n.jsx)(i(374533).A, { ...e,
                                style: f.actionButtonStyle,
                                icon: i(588739).linkIcon,
                                iconStyle: f.actionIconStyle,
                                ariaLabel: d.formatMessage(l.copyLink),
                                onClick: y
                            })
                        }), b ? void 0 : (0, n.jsx)(i(722716).TopbarFavoriteButton, {
                            store: u,
                            useDefaultTooltipPlacement: !0,
                            iconStyle: { ...f.actionIconStyle,
                                fill: m ? i(632079).Tj.topbarFavorite : f.actionIconStyle.fill
                            },
                            buttonStyle: f.actionButtonStyle,
                            spaceViewStore: g
                        }), p ? (0, n.jsx)(i(753248).A, {
                            store: u,
                            shouldShowMoveToMenu: !1,
                            hasBackground: !0,
                            iconStyle: f.actionIconStyle,
                            style: s
                        }) : void 0]
                    });
                    return p ? (0, n.jsx)("div", {
                        ref: c,
                        children: (0, n.jsx)(i(871629).Y, {
                            align: "right",
                            containerRef: c,
                            height: 28,
                            style: r,
                            children: x
                        })
                    }) : x
                }
        },
        309316: (e, t, i) => {
            i.d(t, {
                n: () => n
            });
            let o = {
                    TopbarLayoutInfoButton: new(i(815048)).O2("TopbarLayoutInfoButton", async () => i.e(2597).then(i.bind(i, 251772)))
                },
                n = (0, i(815048)._h)(o.TopbarLayoutInfoButton, e => e.TopbarLayoutInfoButton)
        },
        329977: (e, t, i) => {
            i.d(t, {
                l: () => o
            });
            let o = (0, i(109939).YK)({
                copiedLinkToForm: {
                    id: "FormActionButtons.copiedLinkToForm",
                    defaultMessage: "Copied link to form"
                }
            })
        },
        356901: (e, t, i) => {
            i.d(t, {
                y: () => g
            });
            var o = i(296540);
            i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            var n = () => i(48091),
                a = () => i(773352),
                s = () => i(568479),
                r = () => i(722371),
                l = () => i(358519);
            let d = i(969475).object({
                required: {
                    state: i(969475).object({
                        required: {
                            completedRecords: i(969475).number(),
                            status: i(969475).literals("failure", "pending", "running", "success"),
                            timestamp: i(969475).number(),
                            totalRecords: i(969475).number()
                        },
                        optional: {}
                    })
                },
                optional: {}
            });

            function c(e) {
                var t;
                return (null == (t = e.getFormat()) ? void 0 : t.duplication_job_ids) ? ? []
            }
            var u = i(474848);
            let p = {
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap"
            };

            function g(e) {
                let {
                    store: t,
                    isExpanded: g,
                    isWindowSmall: h,
                    isElectron: b,
                    isShowingTabBar: S,
                    style: y,
                    testOverrideStatus: k
                } = e, [x, _] = (0, o.useState)("none"), [T, w] = (0, o.useState)("none"), j = function(e) {
                    let t = (0, i(533992).v3)(),
                        [u, p] = (0, o.useState)({}),
                        g = (0, o.useRef)({}),
                        m = (0, o.useRef)(e.id),
                        f = (0, i(682985).K8)(() => {
                            let t = function(e) {
                                if (!e.isDefined()) return;
                                let t = [...c(e)];
                                for (let o of (0, i(307983).mG)(e)) switch (o.table) {
                                    case "block":
                                        t.push(...c(o));
                                        continue;
                                    case "team":
                                    case "collection":
                                    case "workflow":
                                        continue;
                                    default:
                                        (0, r().HB)(o)
                                }
                                return (0, i(627179).sb)(t)
                            }(e);
                            if (!t) return;
                            let o = m.current !== e.id;
                            for (let i of (m.current = e.id, Object.keys(u)))
                                if (!t.includes(i)) {
                                    if (o) {
                                        p(({
                                            [i]: e,
                                            ...t
                                        }) => t);
                                        continue
                                    }
                                    t.push(i), g.current[i] || (g.current[i] = setTimeout(() => {
                                        delete g.current[i], p(({
                                            [i]: e,
                                            ...t
                                        }) => t)
                                    }, 5e3))
                                }
                            return t
                        }, [e, u]);
                    (0, o.useEffect)(() => {
                        let e = g.current;
                        return () => {
                            for (let t of Object.values(e)) clearTimeout(t)
                        }
                    }, []);
                    let h = (0, o.useRef)({});
                    (0, o.useEffect)(() => {
                        void 0 !== f && function({
                            duplicationJobIds: e,
                            jobSubscriptionMap: t,
                            setJobStateMap: i,
                            environment: o
                        }) {
                            let r = new Set(e);
                            for (let [e, i] of Object.entries(t)) r.has(e) || n().Ay.removeListener({
                                key: (0, s().B5)(e),
                                subscriptionId: i
                            }), delete t[e];
                            for (let o of e) {
                                if (t[o]) continue;
                                let e = (0, s().B5)(o),
                                    r = n().Ay.addListener({
                                        key: e,
                                        authorizationToken: void 0,
                                        listener: ({
                                            value: e
                                        }) => {
                                            var t;
                                            let n = null == (t = (0, l().Qq)(d, e)) ? void 0 : t.state;
                                            n ? i(e => {
                                                let t = e[o];
                                                return t && t.completedRecords > n.completedRecords ? e : { ...e,
                                                    [o]: n
                                                }
                                            }) : (0, a().log)({
                                                from: "useDuplicationStatus",
                                                level: "error",
                                                type: "invalid_job_state",
                                                data: {
                                                    miscDataToConvertToString: e
                                                }
                                            })
                                        },
                                        subscriptionId: void 0
                                    });
                                if (!r) {
                                    (0, a().log)({
                                        from: "useDuplicationStatus",
                                        level: "error",
                                        type: "failed_to_add_listener",
                                        data: {
                                            miscDataToConvertToString: {
                                                jobId: o
                                            }
                                        }
                                    });
                                    continue
                                }
                                t[o] = r.subscriptionId
                            }
                        }({
                            duplicationJobIds: f,
                            jobSubscriptionMap: h.current,
                            environment: t,
                            setJobStateMap: p
                        })
                    }, [f, t, h]), (0, o.useEffect)(() => {
                        let e = h.current;
                        return () => {
                            for (let [t, i] of Object.entries(e)) n().Ay.removeListener({
                                key: (0, s().B5)(t),
                                subscriptionId: i
                            })
                        }
                    }, [h, t]);
                    let v = { ...u
                    };
                    if (f)
                        for (let e of f) v[e] || (v[e] = {
                            status: "pending",
                            totalRecords: 0,
                            completedRecords: 0,
                            timestamp: Date.now()
                        });
                    return void 0 === f ? void 0 : function(e) {
                        if (0 === Object.keys(e).length) return {
                            status: "none"
                        };
                        let t = 0,
                            i = 0,
                            o = !0;
                        for (let n of Object.values(e)) "success" !== n.status && "failure" !== n.status && (o = !1), t += "success" === n.status || "failure" === n.status ? n.completedRecords : n.totalRecords, i += n.completedRecords;
                        return o ? {
                            status: "complete"
                        } : {
                            status: "duplicating",
                            progressPercentage: 0 === t ? 0 : Math.min(Math.floor(100 * i / t), 99)
                        }
                    }(v)
                }(t), {
                    status: A,
                    progressPercentage: M
                } = k ? ? j ? ? {};
                return ((0, o.useEffect)(function() {
                    let e;
                    return g ? _("none") : h ? (_("hidden"), e = setTimeout(() => {
                        _("none")
                    }, 150)) : (_("hidden"), e = setTimeout(() => {
                        _("visible")
                    }, 150)), () => clearTimeout(e)
                }, [g, h]), (0, o.useEffect)(function() {
                    let e;
                    return A && "none" !== A ? "duplicating" === A ? w("visible") : "complete" === A && (w("visible"), e = setTimeout(() => {
                        w("hidden"), e = setTimeout(() => {
                            w("none")
                        }, 150)
                    }, 3e3)) : w("none"), () => clearTimeout(e)
                }, [A]), A) ? (0, u.jsx)(i(111010).D, {
                    colorPalette: "gray",
                    colorVariant: "tertiary",
                    styleKey: "bodyRegular",
                    style: { ...p,
                        ...y
                    },
                    children: "none" === T ? (0, u.jsx)(m, {
                        visibility: x,
                        children: (0, u.jsx)(v, {
                            store: t,
                            isElectron: b,
                            isShowingTabBar: S
                        })
                    }) : (0, u.jsx)(m, {
                        visibility: T,
                        children: (0, u.jsx)(f, {
                            status: A,
                            progressPercentage: M
                        })
                    })
                }) : null
            }

            function m({
                visibility: e,
                children: t
            }) {
                let o = (0, i(960253).I)(() => ({
                    container: {
                        display: "none" === e ? "none" : "flex",
                        opacity: +("visible" === e),
                        transition: "opacity 150ms linear",
                        alignItems: "center",
                        whiteSpace: "nowrap"
                    }
                }), [e]);
                return (0, u.jsx)("div", {
                    style: o.container,
                    children: t
                })
            }

            function f({
                status: e,
                progressPercentage: t = 0
            }) {
                return "none" === e ? null : "duplicating" === e ? (0, u.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    gap: 6,
                    children: [(0, u.jsx)(i(109939).sA, {
                        defaultMessage: "Duplicating",
                        id: "pageFreshnessMetadata.duplicating"
                    }), t > 0 ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(i(320500).E, {
                            progressPercentage: t,
                            size: 12
                        }), (0, u.jsx)(i(109939).sA, {
                            defaultMessage: "{progressPercentage}%",
                            id: "pageFreshnessMetadata.duplicating.progress",
                            values: {
                                progressPercentage: t
                            }
                        })]
                    }) : void 0]
                }) : (0, u.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    gap: 6,
                    children: [(0, u.jsx)(i(16275).I, {
                        icon: i(15956).checkmarkIcon,
                        colorPalette: "gray",
                        colorVariant: "tertiary"
                    }), (0, u.jsx)(i(109939).sA, {
                        defaultMessage: "Duplicated",
                        id: "pageFreshnessMetadata.duplicated"
                    })]
                })
            }
            let h = {
                display: "flex",
                flexFlow: "wrap"
            };

            function v({
                store: e,
                isElectron: t,
                isShowingTabBar: n
            }) {
                let a = (0, i(533992).v3)(),
                    s = (0, i(682985).K8)(() => {
                        let t = e.getLastEditedTime();
                        return t ? (0, i(799843).nl)(t, {
                            useLowercase: !0,
                            useCompactFormat: !0,
                            roundDownYears: !0,
                            nowOverrideMs: (0, i(137683).m)().state.timeNow
                        }) : ""
                    }, [e]),
                    r = (0, o.useCallback)(() => {
                        (0, i(418001).j)({
                            environment: a,
                            blockStore: e,
                            tabToOpen: i(449473).tF.Updates,
                            from: "topbar"
                        }), i(449473).B8.setState({ ...i(449473).B8.state,
                            updatesSubTab: i(449473).VE.Updates
                        })
                    }, [a, e]);
                return s ? (0, u.jsx)("div", {
                    style: h,
                    children: (0, u.jsx)(i(33402).J, {
                        store: e,
                        placement: "bottom",
                        alignment: "start",
                        children: (0, u.jsx)(i(988022).p, {
                            onClick: r,
                            colorVariant: "tertiary",
                            style: { ...(0, i(1249).g)({
                                    noDrag: t && !n
                                })
                            },
                            children: (0, u.jsx)(i(109939).sA, {
                                defaultMessage: "Edited {timestamp}",
                                id: "pagePropertiesHeader.edited.label",
                                values: {
                                    timestamp: s
                                }
                            })
                        })
                    })
                }) : null
            }
        },
        405907: (e, t, i) => {
            i.d(t, {
                I: () => a,
                i: () => r
            });
            var o = i(296540),
                n = i(474848);

            function a(e) {
                let t = (0, i(533992).v3)(),
                    o = (0, i(533992).Y0)(),
                    a = (0, i(109939).tz)(),
                    s = (0, i(682985).O$)(i(984858).sidebarMouseEnteredStore),
                    l = (0, i(682985).O$)(i(584257).b),
                    d = (0, i(682985).O$)((0, i(348295).$)(t)),
                    c = a.formatMessage({
                        defaultMessage: "Close sidebar",
                        id: "sidebarUnexpandButton.closeSidebar.tooltip"
                    }),
                    u = (!o.isElectronMac || !d) && !l && s;
                return (0, n.jsx)(r, {
                    isVisible: u,
                    icon: i(437959).S,
                    caption: c,
                    onClick: () => {
                        (0, i(568071).O)(t)
                    },
                    keyboardShortcutName: "toggleSidebar",
                    style: e.style,
                    hoveredStyle: e.hoveredStyle
                })
            }
            let s = {
                keyboardShortcut: {
                    color: i(632079).Tj.text.inverseSecondary
                },
                button: {
                    fill: i(632079).Tj.icon.secondary,
                    width: 24,
                    height: 24,
                    borderRadius: 9999
                }
            };

            function r(e) {
                let t = (0, i(533992).Y0)(),
                    [a, r] = (0, i(768397).s)(),
                    [l, d] = (0, o.useState)(!e.isVisible),
                    c = e.isVisible || r;
                (0, o.useEffect)(() => {
                    c && d(!1)
                }, [c]);
                let u = (0, o.useCallback)(() => {
                        c || d(!0)
                    }, [c]),
                    p = (0, o.useMemo)(() => ({
                        position: "relative",
                        marginInlineStart: 10,
                        ...i(986939).A.isMobile && {
                            height: "100%"
                        },
                        ...s.button,
                        ...e.style,
                        ...l && i(69916).Qg
                    }), [e.style, l]);
                return (0, n.jsx)(i(51831).m, {
                    content: () => (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("div", {
                            children: e.caption
                        }), e.keyboardShortcutName ? (0, n.jsx)(i(693592).A, {
                            style: s.keyboardShortcut,
                            name: e.keyboardShortcutName
                        }) : void 0]
                    }),
                    originGap: 6,
                    placement: t.isElectron ? "right" : "bottom",
                    children: t => (0, n.jsx)(i(654979).A, {
                        tag: i(374533).A,
                        ref: a,
                        animate: {
                            opacity: +!!c
                        },
                        onAnimationEnd: u,
                        ariaLabel: e.caption,
                        size: "sm",
                        shape: "default",
                        icon: {
                            icon: e.icon,
                            size: "default",
                            style: {
                                fill: "inherit"
                            }
                        },
                        style: p,
                        hoveredStyle: e.hoveredStyle,
                        onClick: e.onClick,
                        className: i(828432).P7S,
                        ...t
                    })
                })
            }
        },
        407487: (e, t, i) => {
            i.d(t, {
                G: () => r
            });
            var o = i(296540),
                n = i(474848);
            let a = (0, i(109939).YK)({
                    tooltip: {
                        id: "topbar.guestDuplicateButton.tooltip",
                        defaultMessage: "Duplicate page"
                    }
                }),
                s = {
                    textAlign: "center"
                },
                r = o.forwardRef(function(e, t) {
                    let {
                        onClick: o
                    } = e, r = (0, i(109939).tz)();
                    return (0, n.jsx)(i(51831).m, {
                        placement: "bottom",
                        content: () => (0, n.jsx)("div", {
                            style: s,
                            children: (0, n.jsx)(i(109939).sA, { ...a.tooltip
                            })
                        }),
                        children: e => (0, n.jsx)(i(374533).A, { ...e,
                            ref: t,
                            icon: i(703696).V,
                            style: i(440601).RN.iconButton,
                            iconStyle: i(440601).RN.icon,
                            onClick: o,
                            ariaLabel: r.formatMessage(a.tooltip)
                        })
                    })
                })
        },
        417131: (e, t, i) => {
            i.d(t, {
                V: () => n
            });
            var o = i(296540);

            function n(e) {
                let t = (0, i(533992).v3)(),
                    n = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = i(708929).Uv.getStateForBlock(e.id)) ? void 0 : t.mode
                    }, [e]),
                    a = (0, i(682985).K8)(() => i(886556).z.isFullPageTranslateEnabled(), []),
                    s = (0, i(682985).K8)(() => {
                        let e = i(728372).AppStoreCurrentUserSettingsStore.state;
                        return !!e && void 0 === e.getSettingsStore().getKeyStore("ai_page_translation_dismissed_at").getValue()
                    }, []),
                    r = a && s,
                    {
                        detectedPageLanguage: l,
                        suggestedPageTranslationLanguage: d,
                        canSuggestInConfidence: c
                    } = function(e) {
                        let {
                            pageStore: t,
                            enabled: o
                        } = e, {
                            detectedLanguage: n,
                            canSuggestInConfidence: a
                        } = (0, i(572577).H)({
                            pageStore: t,
                            enabled: o
                        }), s = (0, i(768718).n)();
                        return n && n !== s && (0, i(703820).FM)(s) ? {
                            detectedPageLanguage: n,
                            suggestedPageTranslationLanguage: s,
                            canSuggestInConfidence: a
                        } : {
                            detectedPageLanguage: void 0,
                            suggestedPageTranslationLanguage: void 0,
                            canSuggestInConfidence: !1
                        }
                    }({
                        pageStore: e,
                        enabled: r
                    }),
                    [u, p] = (0, o.useState)(!1);
                (0, i(668745).ZC)(e.id) !== e.id && u && p(!1);
                let g = !!(c && !u && r && d && (void 0 === n || "default" === n));
                return (0, o.useEffect)(() => {
                    g && l && d && function({
                        environment: e,
                        detectedLanguage: t,
                        suggestedLanguage: o
                    }) {
                        (0, i(104310).u)({
                            event: {
                                eventName: "suggested_page_translation",
                                eventProperties: {
                                    detected_language: t,
                                    suggested_language: o
                                }
                            }
                        })
                    }({
                        environment: t,
                        detectedLanguage: l,
                        suggestedLanguage: d
                    })
                }, [g]), {
                    suggestTranslation: g,
                    detectedPageLanguage: l,
                    suggestedPageTranslationLanguage: d,
                    setTranslationSuggestionDismissed: p
                }
            }
        },
        423127: (e, t, i) => {
            function o(e) {
                let {
                    mostRecentOfferDate: t,
                    daysToAdd: o,
                    billingData: n
                } = e, a = (0, i(192159).DS)(n).toMillis();
                return (0, i(25825).K1)({
                    date: t,
                    daysToAdd: o
                }) < a
            }

            function n({
                memberCount: e,
                billingData: t,
                spaceId: o,
                environment: a
            }) {
                return !!e && !!t && !!o && !!(0, i(262166).dL)((0, i(192159).AI)(t)) && !(e > 10) && !(e < 2) && !!i(617995).I.getData(a, {
                    spaceId: o,
                    offerCampaign: "expansion_offer"
                }) && (0, i(717274).Nu)()
            }
            async function a({
                billingData: e,
                spaceStore: t,
                environment: o
            }) {
                var n;
                let [r, l] = await Promise.all([s({
                    billingData: e,
                    spaceStore: t,
                    environment: o
                }), (0, i(832129).x)({
                    environment: o,
                    spaceId: t.id
                })]), {
                    eligible: d,
                    campaign: c
                } = r;
                if (!d || !l) return {
                    shouldShow: !1,
                    campaign: void 0
                };
                let u = t.getModel();
                return (null == u || null == (n = u.getSettings()) || null == (n = n.offer_member_count) ? void 0 : n.find(e => e.campaign === c)) || !(l > 4) ? {
                    shouldShow: !0,
                    campaign: c
                } : {
                    shouldShow: !1,
                    campaign: void 0
                }
            }
            async function s({
                billingData: e,
                spaceStore: t,
                environment: n
            }) {
                if (!e || !(0, i(226309).qc)(e)) return {
                    eligible: !1,
                    campaign: void 0
                };
                let a = (0, i(192159).AI)(e);
                if (!((0, i(262166).$P)(a) || (0, i(262166).tL)(a)) || "month" !== (0, i(192159).N4)("plan", e)) return {
                    eligible: !1,
                    campaign: void 0
                };
                let r = (0, i(521469).UB)(a);
                if (!r) return {
                    eligible: !1,
                    campaign: void 0
                };
                let l = i(218744).default.getEligibleGroup({
                    experimentId: r,
                    defaultGroup: i(218745).STATSIG_DEFAULT_GROUP,
                    disableExposureLogging: !0
                });
                if ("control" === l || l === i(218745).STATSIG_DEFAULT_GROUP) return {
                    eligible: !1,
                    campaign: void 0
                };
                let d = (0, i(521469).$E)(a, l);
                if (!d) return {
                    eligible: !1,
                    campaign: void 0
                };
                let c = t.getModel();
                if ((0, i(521469).fd)(c, d)) return {
                    eligible: !1,
                    campaign: void 0
                };
                let u = await i(185995).default.awaitData(n, {
                    spaceId: t.id
                });
                if (u) {
                    let {
                        isEligible: t
                    } = function(e) {
                        let {
                            campaign: t,
                            offerStatuses: n,
                            billingData: a
                        } = e, s = n.filter(i(90119).GK), r = [], l = (0, i(875472).e8)(s, "coupon"), d = !l || o({
                            mostRecentOfferDate: l.endDateMs,
                            daysToAdd: i(361200).offerEligibilityMap[t].couponRefreshDays,
                            billingData: a
                        });
                        d || r.push({
                            reason: "Coupon cooldown period has not passed",
                            extra: {
                                mostRecentCoupon: l,
                                requiredCouponRefreshDays: i(361200).offerEligibilityMap[t].couponRefreshDays
                            }
                        });
                        let c = (0, i(875472).e8)(s, "trial"),
                            u = !c || o({
                                mostRecentOfferDate: c.endDateMs,
                                daysToAdd: i(361200).offerEligibilityMap[t].trialRefreshDays,
                                billingData: a
                            });
                        return u || r.push({
                            reason: "Trial cooldown period has not passed",
                            extra: {
                                mostRecentTrial: c,
                                requiredTrialRefreshDays: i(361200).offerEligibilityMap[t].trialRefreshDays
                            }
                        }), {
                            isEligible: d && u,
                            ineligibleReasons: r
                        }
                    }({
                        campaign: d,
                        offerStatuses: u,
                        billingData: e
                    });
                    if (!t) return {
                        eligible: !1,
                        campaign: void 0
                    }
                }
                return {
                    eligible: !0,
                    campaign: d
                }
            }
            async function r({
                billingData: e,
                spaceStore: t,
                environment: o
            }) {
                let {
                    eligible: n,
                    campaign: a
                } = await s({
                    billingData: e,
                    spaceStore: t,
                    environment: o
                });
                if (!n || !a) return;
                let l = t.getModel(),
                    d = (0, i(521469)._w)(l, a);
                if (d) return {
                    shouldShowCallout: !0,
                    campaign: a,
                    membersAdded: d.membersAdded ? ? 0
                }
            }

            function l({
                initialTimestamp: e,
                dismissalKey: t,
                billingData: o
            }) {
                var n, a;
                let s = (0, i(192159).DS)(o).toMillis();
                if (s - e > 30 * Number(i(627179).nD)) return !1;
                let r = null == (n = i(728372).AppStoreCurrentUserSettingsStore.state) ? void 0 : n.getSettings(),
                    d = null == r || null == (a = r.callout_dismissal_timestamps) ? void 0 : a.find(e => e.name === t);
                return !(null != d && d.timestamp && (s - d.timestamp) / Number(i(627179).nD) < 3) && !0
            }
            i.d(t, {
                dM: () => n,
                Xd: () => r,
                ju: () => l,
                TO: () => a
            }), i(898992), i(672577), i(944114), i(354520)
        },
        437959: (e, t, i) => {
            i.d(t, {
                S: () => a
            }), i(296540);
            var o = i(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.42 3.97 12.16 12.06",
                    directional: !0,
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M3.608 10.442a.625.625 0 0 1 0-.884l5.4-5.4a.625.625 0 0 1 .884.884L4.934 10l4.958 4.958a.625.625 0 1 1-.884.884z"
                        }), (0, o.jsx)("path", {
                            d: "m14.508 4.158-5.4 5.4a.625.625 0 0 0 0 .884l5.4 5.4a.625.625 0 1 0 .884-.884L10.434 10l4.958-4.958a.625.625 0 1 0-.884-.884"
                        })]
                    })
                },
                a = (0, i(104509).wt)("arrowChevronDoubleBackward", n, "default")
        },
        442661: (e, t, i) => {
            i.d(t, {
                A: () => a
            }), i(296540);
            var o = i(474848);
            let n = {
                    style0: {
                        width: i(440601).RN.iconButton.width,
                        height: i(440601).RN.iconButton.height
                    }
                },
                a = function() {
                    let e = (0, i(109939).tz)(),
                        t = (0, i(533992).v3)(),
                        a = (0, i(109939).YK)({
                            helpTitle: {
                                defaultMessage: "Learn about tasks",
                                id: "myTasks.helpTooltip.title"
                            }
                        });
                    return (0, o.jsx)(i(51831).m, {
                        placement: "bottom",
                        content: t => e.formatMessage(a.helpTitle),
                        children: s => (0, o.jsx)(i(374533).A, {
                            icon: i(80094).questionMarkCircleIcon,
                            iconStyle: i(440601).RN.icon,
                            ariaLabel: e.formatMessage(a.helpTitle),
                            style: n.style0,
                            onClick: e => {
                                e.preventDefault(), (0, i(624621).L)({
                                    environment: t,
                                    url: i(933062).hI,
                                    targetSelf: !1
                                })
                            },
                            ...s
                        })
                    })
                }
        },
        466290: (e, t, i) => {
            i.d(t, {
                K: () => n
            });
            var o = () => i(906745);

            function n(e, t) {
                i(696190).default.isVisible(t.key) && (i(696190).default.removeMessage(t.key), i(986939).A.isAdminMode || (! function(e, t) {
                    let n = i(728372).AppStoreCurrentUserSettingsStore.state,
                        a = null == n ? void 0 : n.getSettings();
                    if (!a || !n) return;
                    let s = new(i(543346)).GO(a.callout_placement_exposures);
                    for (let e of t) s.add(e, o().DateTime.now().toMillis());
                    (0, i(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addPlacementExposures",
                        cellTarget: "main",
                        canUndo: !0,
                        perform: e => {
                            (0, i(862759).m)({
                                userSettingsStore: n,
                                transaction: e,
                                data: {
                                    callout_placement_exposures: s.exportUserSetting()
                                }
                            })
                        }
                    })
                }(e, [(0, i(125542).Q3)(t)]), (0, i(476114).q)(e, t), i(728372).AppStoreInAppCalloutStore.state.updateCalloutStatus({
                    calloutId: t.key,
                    visible: !1
                }), (0, i(819416).Z)(e, t.key)), i(696190).default.isPendingDynamicMessage(t.key) && (0, i(740063).G)(t.key))
            }
        },
        476114: (e, t, i) => {
            function o({
                environment: e,
                message: t,
                overwrite: n = !1
            }) {
                let a = i(728372).AppStoreCurrentUserSettingsStore.state,
                    s = null == a ? void 0 : a.getSettings();
                if (!a || !s) return;
                let r = new Map((s.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                (!r.has(t.key) || n) && r.set(t.key, {
                    name: t.key,
                    timestamp: i(906745).DateTime.now().toMillis()
                }), (0, i(377796).createAndCommit)({
                    environment: e,
                    userAction: "messageActions.addUserSettingsDismissal",
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        (0, i(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                callout_dismissal_timestamps: Array.from(r.values())
                            }
                        })
                    }
                })
            }

            function n(e, t) {
                let n = (0, i(125542).K0)(t);
                "once_per_user" === n ? o({
                    environment: e,
                    message: t
                }) : "once_per_space" === n && function({
                    environment: e,
                    message: t,
                    overwrite: o = !1
                }) {
                    let n = i(728372).AppStoreSidebarSpaceViewStore.state,
                        a = null == n ? void 0 : n.getSettings();
                    if (!n || !a) return;
                    let s = n.getSpaceId(),
                        r = new Map((a.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                    (!r.has(t.key) || o) && r.set(t.key, {
                        name: t.key,
                        timestamp: i(906745).DateTime.now().toMillis()
                    }), (0, i(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addSpaceViewDismissal",
                        canUndo: !0,
                        cellTarget: s ? {
                            spaceWithId: s
                        } : void 0,
                        perform: e => {
                            i(380762).AG(n, e, {
                                callout_dismissal_timestamps: Array.from(r.values())
                            })
                        }
                    })
                }({
                    environment: e,
                    message: t
                })
            }
            i.d(t, {
                q: () => n,
                H: () => o
            }), i(581454)
        },
        481522: (e, t, i) => {
            i.d(t, {
                X: () => o
            });

            function o() {
                let e = (0, i(533992).v3)(),
                    t = (0, i(109939).tz)();
                return (0, i(682985).K8)(() => {
                    let o = i(728372).AppStoreSidebarSpaceStore.state;
                    return o ? (0, i(742197).G)(e, o) : t.formatMessage({
                        defaultMessage: "Untitled workspace",
                        id: "spaceHelpers.getSpaceName.untitledWorkspace.name"
                    })
                }, [e, t])
            }
        },
        487415: (e, t, i) => {
            i.d(t, {
                O: () => a
            }), i(296540);
            var o = i(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.42 3.97 12.16 12.06",
                    directional: !0,
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "m5.492 4.158 5.4 5.4a.625.625 0 0 1 0 .884l-5.4 5.4a.625.625 0 1 1-.884-.884L9.566 10 4.608 5.042a.625.625 0 1 1 .884-.884"
                        }), (0, o.jsx)("path", {
                            d: "m16.392 10.442-5.4 5.4a.625.625 0 0 1-.884-.884L15.066 10l-4.958-4.958a.625.625 0 0 1 .884-.884l5.4 5.4a.625.625 0 0 1 0 .884"
                        })]
                    })
                },
                a = (0, i(104509).wt)("arrowChevronDoubleForward", n, "default")
        },
        517745: (e, t, i) => {
            i.d(t, {
                u: () => n
            });
            let o = new(i(815048)).O2("topbarMoreButton", async () => await Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(26361), i.e(16471), i.e(37353), i.e(62475), i.e(3151), i.e(18965), i.e(98629), i.e(96527), i.e(30085), i.e(90109), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(17250), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(55940), i.e(12560), i.e(88268), i.e(12001), i.e(40198), i.e(39726), i.e(31243), i.e(42534), i.e(86662), i.e(14886), i.e(39225), i.e(6212), i.e(2626), i.e(64453), i.e(4779), i.e(21969), i.e(29663), i.e(28482), i.e(76361), i.e(14369), i.e(74145), i.e(48860), i.e(75136), i.e(98175), i.e(18682), i.e(79349), i.e(58360), i.e(33162), i.e(82538), i.e(63793), i.e(18881), i.e(62731), i.e(41049), i.e(60262), i.e(72805), i.e(18416), i.e(2276), i.e(30532), i.e(73588), i.e(3723), i.e(91100), i.e(78311), i.e(4287), i.e(9817), i.e(65594), i.e(47302), i.e(91636), i.e(36441), i.e(64049), i.e(75189), i.e(28372), i.e(28663), i.e(47281), i.e(29087), i.e(46350), i.e(75234), i.e(67281), i.e(66200), i.e(52064), i.e(69626), i.e(82816), i.e(2832), i.e(48095), i.e(67098), i.e(35118), i.e(63611), i.e(94849), i.e(75484), i.e(98821), i.e(97711), i.e(89076), i.e(86998), i.e(58889), i.e(22920), i.e(9914), i.e(78257), i.e(84382), i.e(51386), i.e(95150), i.e(10471), i.e(87087), i.e(98419), i.e(11719), i.e(13592), i.e(6743), i.e(5234), i.e(85376), i.e(67252), i.e(42709), i.e(44903), i.e(92181), i.e(7251), i.e(72143), i.e(67612), i.e(53478), i.e(75559), i.e(86793), i.e(34), i.e(54253), i.e(26665), i.e(67984), i.e(605), i.e(75681)]).then(i.bind(i, 458277))),
                n = (0, i(815048)._h)(o, e => e.TopbarMoreButton)
        },
        521324: (e, t, i) => {
            i.d(t, {
                w: () => o
            });

            function o() {
                return i(218744).default.getEligibleGroup({
                    experimentId: "share_link_duplicate_page_topbar",
                    defaultGroup: "control"
                })
            }
        },
        568071: (e, t, i) => {
            i.d(t, {
                O: () => o
            });

            function o(e) {
                (0, i(16822).h)({
                    environment: e,
                    isExpanded: !1,
                    from: "sidebar_unexpand_button",
                    saveDetailsSidebarPreference: !0
                }), (i(550830).default.isVisible() || (0, i(875439).shouldShowLoggedOutPublicSharingSidebar)(e)) && (0, i(713167).V)()
            }
        },
        572577: (e, t, i) => {
            i.d(t, {
                H: () => o
            });

            function o(e) {
                let {
                    detectedLanguage: t,
                    canSuggestInConfidence: o
                } = function(e) {
                    let {
                        pageStore: t,
                        enabled: o,
                        forceUpdate: n = !1
                    } = e, a = (0, i(533992).v3)();
                    return (0, i(682985).K8)(() => o && t ? i(307594).bY({
                        pageStore: t,
                        environment: a,
                        enabled: o,
                        forceUpdate: n
                    }) : {
                        detectedLanguage: void 0,
                        canSuggestInConfidence: !1
                    }, [t, a, o, n])
                }(e);
                return t && !(0, i(703820).cE)(t) ? {
                    detectedLanguage: void 0,
                    canSuggestInConfidence: !1
                } : {
                    detectedLanguage: t,
                    canSuggestInConfidence: o
                }
            }
        },
        642138: (e, t, i) => {
            i.d(t, {
                E: () => o
            });

            function o(e, t) {
                var o;
                if (!t || !(0, i(484712).U)(t)) return !1;
                let n = null == (o = e.getTopLevelAncestorBlockStore()) ? void 0 : o.id;
                return !!n && !!t.getPrivatePageIds().includes(n)
            }
        },
        644097: (e, t, i) => {
            i.d(t, {
                E: () => n
            });
            let o = new(i(815048)).O2("topbarShareButton", async () => await Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(26361), i.e(16471), i.e(37353), i.e(62475), i.e(3151), i.e(18965), i.e(98629), i.e(96527), i.e(30085), i.e(90109), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(17250), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(55940), i.e(12560), i.e(88268), i.e(12001), i.e(40198), i.e(39726), i.e(31243), i.e(42534), i.e(86662), i.e(14886), i.e(39225), i.e(6212), i.e(2626), i.e(64453), i.e(4779), i.e(21969), i.e(29663), i.e(28482), i.e(76361), i.e(14369), i.e(74145), i.e(48860), i.e(75136), i.e(98175), i.e(18682), i.e(79349), i.e(58360), i.e(33162), i.e(82538), i.e(63793), i.e(18881), i.e(62731), i.e(41049), i.e(60262), i.e(72805), i.e(18416), i.e(2276), i.e(30532), i.e(73588), i.e(3723), i.e(91100), i.e(78311), i.e(4287), i.e(9817), i.e(65594), i.e(47302), i.e(91636), i.e(36441), i.e(64049), i.e(75189), i.e(28372), i.e(28663), i.e(47281), i.e(29087), i.e(46350), i.e(75234), i.e(67281), i.e(66200), i.e(52064), i.e(69626), i.e(82816), i.e(2832), i.e(48095), i.e(67098), i.e(35118), i.e(63611), i.e(94849), i.e(75484), i.e(98821), i.e(97711), i.e(89076), i.e(86998), i.e(58889), i.e(22920), i.e(9914), i.e(78257), i.e(84382), i.e(51386), i.e(95150), i.e(10471), i.e(87087), i.e(98419), i.e(11719), i.e(13592), i.e(6743), i.e(5234), i.e(85376), i.e(67252), i.e(42709), i.e(44903), i.e(92181), i.e(7251), i.e(72143), i.e(67612), i.e(53478), i.e(75559), i.e(86793), i.e(34), i.e(54253), i.e(26665), i.e(67984), i.e(605), i.e(75681)]).then(i.bind(i, 194443))),
                n = (0, i(815048)._h)(o, e => e.TopbarShareButton)
        },
        686648: (e, t, i) => {
            i.d(t, {
                L: () => o
            }), i(18107), i(967357);

            function o(e) {
                let t = e.blocks.at(0);
                if (!t) return !1;
                let o = t.getSpaceStore(),
                    n = (0, i(916804).I)(o);
                return (0, i(822012).V)(t) && n && t.canEdit() && !(0, i(642138).E)(t, i(728372).AppStoreSidebarSpaceViewStore.state) && !(0, i(505941).y)(e.environment, t)
            }
        },
        687815: (e, t, i) => {
            i.d(t, {
                A: () => s
            }), i(296540);
            var o = i(474848);
            let n = {
                style0: {
                    width: i(986939).A.isMobile ? "100%" : void 0
                },
                style1: {
                    marginInlineStart: 2 * !!i(986939).A.isMobile,
                    marginInlineEnd: i(986939).A.isMobile ? 8 : 6
                }
            };

            function a(e) {
                let {
                    store: t,
                    routeId: a
                } = e, s = (0, i(533992).v3)(), r = (0, i(616844).Y5)("left", 8), l = (0, i(616844).Y5)("right", 12), {
                    collection_view_block_id: d,
                    collection_view_id: c,
                    collection_id: u
                } = (0, i(682985).K8)(() => {
                    if (t && t.table === i(832375).evP && t.isCollectionView()) {
                        var e;
                        return {
                            collection_view_block_id: t.id,
                            collection_view_id: (0, i(700790).I)(t, s),
                            collection_id: null == (e = t.getCollectionStoreIfSingleSource()) ? void 0 : e.id
                        }
                    }
                    return {
                        collection_view_block_id: void 0,
                        collection_view_id: void 0,
                        collection_id: void 0
                    }
                }, [t, s]), p = (0, i(960253).I)(() => ({
                    button: {
                        display: "flex",
                        alignItems: "center",
                        width: i(986939).A.isMobile ? "100%" : void 0,
                        height: i(986939).A.isMobile ? 44 : 32,
                        paddingTop: i(986939).A.isMobile ? 12 : 4,
                        paddingBottom: i(986939).A.isMobile ? 12 : 4,
                        paddingInlineStart: r,
                        paddingInlineEnd: l
                    }
                }), [r, l]);
                return (0, o.jsx)(i(68774).N, {
                    href: (0, i(442564).x)(a ? ? "guides.sharing"),
                    onClick: () => (0, i(150782).F)(s, {
                        from: "sharing",
                        share_menu_session_id: i(880853).Ay.state.sessionId,
                        collection_id: u,
                        collection_view_block_id: d,
                        collection_view_id: c
                    }),
                    style: n.style0,
                    external: !0,
                    children: (0, o.jsxs)(i(988022).p, {
                        size: "sm",
                        style: { ...p.button,
                            ...e.style
                        },
                        disabled: !!e.disableHover,
                        children: [(0, o.jsx)("div", {
                            style: n.style1,
                            children: (0, o.jsx)(i(16275).I, {
                                icon: i(211052).questionMarkCircleSmallIcon,
                                size: "sm",
                                colorVariant: i(986939).A.isMobile ? "secondary" : "tertiary"
                            })
                        }), (0, o.jsx)(i(324489).V, {
                            isSecondaryColor: !i(986939).A.isMobile,
                            children: (0, o.jsx)(i(109939).sA, {
                                defaultMessage: "Learn about sharing",
                                id: "blockPermissionsSettings.learnAboutSharing.prompt"
                            })
                        })]
                    })
                })
            }
            a.displayName = "LearnAboutSharingLink";
            let s = a
        },
        703820: (e, t, i) => {
            var o;
            i.d(t, {
                FM: () => d,
                J6: () => l,
                cE: () => a,
                h5: () => p,
                kl: () => u,
                oQ: () => c
            });
            let n = ["ar", "bg", "cs", "da", "de", "el", "es", "et", "fi", "fr", "he", "hu", "id", "it", "ja", "ko", "lt", "lv", "nb", "nl", "pl", "ro", "ru", "sk", "sl", "sv", "th", "tr", "uk", "vi", "zh", "en", "pt"];

            function a(e) {
                return !!(0, i(722371).Xk)(n, e)
            }
            let s = ["en-US", "ko", "ja", "fr", "de", "es", "pt-BR", "pt-PT", "fi", "da", "nl", "nb", "sv", "zh-HANS", "zh-HANT", "ru", "it", "id", "th", "vi"],
                r = [...s, "ar", "he"];

            function l(e) {
                return (null == e ? void 0 : e.includeRtlLanguages) ? r : s
            }

            function d(e) {
                var t;
                return t = (0, i(20707).JE)(e), !!(0, i(722371).Xk)(r, t)
            }

            function c(e) {
                return (0, i(955630).Db)(e, void 0) || "form" === e || "collection_view_page" === e ? "title" : (0, i(955630).z9)(e) ? "caption" : "table_row" === e || "collection_view" === e ? "properties" : (0, i(955630).Mp)(e) || "column" === e || "column_list" === e || "table" === e ? "unmapped" : void(0, i(722371).HB)(e)
            }
            let u = ((o = {}).NAME = "name", o.VIEW_NAME = "view_name", o.DESCRIPTION = "description", o.SCHEMA_PROPERTY_NAME = "schema_property_name", o.SCHEMA_PROPERTY_OPTION = "schema_property_option", o.SCHEMA_PROPERTY_AI_INFERENCE = "schema_property_ai_inference_prompt", o),
                p = {
                    questionName: "question_name",
                    questionDescription: "question_description",
                    checkboxLabel: "checkbox_label"
                }
        },
        714050: (e, t, i) => {
            function o(e, t) {
                let {
                    value: o
                } = (0, i(815048).fJ)(i(656915).commentsDependency);
                return (0, i(682985).K8)(() => e && o ? o.discussionHelpers.getDiscussionsForSidebar({
                    blockStore: e,
                    currentUserId: e.userId,
                    ignoreAfterTime: t ? ? Date.now()
                }).filter(e => e.isDefined() && e.getCommentPointers().length > 0) : [], [o, e, t])
            }

            function n({
                navigableBlockStore: e
            }) {
                let t = o(e);
                return (0, i(682985).K8)(() => t.filter(t => (0, i(47354).s)({
                    discussionStore: t,
                    navigableBlockStore: e
                })), [t, e])
            }
            i.d(t, {
                B: () => n,
                S: () => o
            }), i(898992), i(354520)
        },
        722716: (e, t, i) => {
            i.r(t), i.d(t, {
                TopbarFavoriteButton: () => r
            });
            var o = i(296540),
                n = i(474848);
            let a = (0, i(109939).YK)({
                    isBookmarkedMessage: {
                        defaultMessage: "Favorited",
                        id: "topbar.favoriteButton.activeTitle"
                    },
                    isNotBookmarkedMessage: {
                        defaultMessage: "Favorite",
                        id: "topbar.favoriteButton.title"
                    },
                    isBookmarkedTooltip: {
                        defaultMessage: "Remove from your favorites",
                        id: "topbar.favoriteButton.activeTooltip1"
                    },
                    isNotBookmarkedTooltip: {
                        defaultMessage: "Add to your favorites",
                        id: "topbar.favoriteButton.tooltip1"
                    }
                }),
                s = {
                    iconContainer: (0, i(268736).aD)().iconContainer
                };

            function r({
                spaceViewStore: e,
                store: t,
                iconStyle: l,
                buttonStyle: c,
                showKeyboardShortcut: u,
                useDefaultTooltipPlacement: p,
                isTablet: g
            }) {
                let m = (0, i(533992).v3)(),
                    f = (0, i(109939).tz)(),
                    h = (0, i(682985).K8)(() => {
                        let e = i(728372).AppStoreSidebarSpaceViewStore.state;
                        return (0, i(494144).o)(e)
                    }, []),
                    v = (0, i(682985).K8)(() => !!e && (0, i(87822).J)({
                        spaceViewStore: e,
                        pageId: t.id
                    }), [e, t]),
                    b = v ? i(170303).F : i(150963).w,
                    S = (0, o.useMemo)(() => v ? () => (function(e) {
                        let {
                            store: t,
                            environment: o,
                            spaceViewStore: n
                        } = e;
                        if (!n) return;
                        (0, i(471e3).I)({
                            environment: o
                        }), (0, i(635690).J)({
                            environment: o,
                            from: "topbar"
                        });
                        let a = n.pointer.spaceId;
                        (0, i(377796).createAndCommit)({
                            userAction: "TopbarFavoriteButton.handleUnbookmarkClick",
                            environment: o,
                            canUndo: !0,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            perform: e => {
                                (0, i(622862).Y)({
                                    modificationType: "remove",
                                    spaceViewStore: n,
                                    storesToModify: [t],
                                    transaction: e
                                })
                            }
                        })
                    })({
                        store: t,
                        environment: m,
                        spaceViewStore: e
                    }) : () => (function(e) {
                        let {
                            store: t,
                            environment: o,
                            spaceViewStore: n
                        } = e;
                        if (!n) return;
                        (0, i(471e3).I)({
                            environment: o
                        }), (0, i(635690).W)({
                            environment: o,
                            from: "topbar"
                        });
                        let a = n.pointer.spaceId;
                        (0, i(377796).createAndCommit)({
                            userAction: "TopbarFavoriteButton.handleBookmarkClick",
                            environment: o,
                            canUndo: !0,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            perform: e => {
                                (0, i(622862).Y)({
                                    modificationType: "add",
                                    spaceViewStore: n,
                                    storesToModify: [t],
                                    transaction: e
                                })
                            }
                        })
                    })({
                        store: t,
                        environment: m,
                        spaceViewStore: e
                    }), [v, t, m, e]),
                    y = (0, i(960253).I)(() => ({
                        icon: { ...g ? i(440601).RN.tabletIcon : i(440601).RN.icon,
                            ...v ? {
                                fill: i(632079).Tj.topbarFavorite
                            } : void 0,
                            ...l
                        },
                        button: { ...i(440601).RN.iconButton,
                            ...c
                        }
                    }), [v, l, c, g]);
                return h ? null : (0, n.jsx)(i(51831).m, {
                    placement: p ? void 0 : "bottom",
                    originGap: m.device.isElectronWindows ? 10 : void 0,
                    content: () => (0, n.jsx)(d, {
                        isBookmarked: v,
                        showKeyboardShortcut: u
                    }),
                    children: e => (0, n.jsx)(i(374533).A, { ...e,
                        className: i(828432).ZEs,
                        icon: b,
                        style: g ? s.iconContainer : y.button,
                        iconStyle: y.icon,
                        onClick: S,
                        ariaLabel: f.formatMessage(v ? a.isBookmarkedMessage : a.isNotBookmarkedMessage)
                    })
                })
            }
            let l = {
                style0: {
                    textAlign: "center"
                },
                style1: {
                    color: i(632079).Tj.text.inverseSecondary
                }
            };

            function d({
                isBookmarked: e,
                showKeyboardShortcut: t
            }) {
                return (0, n.jsxs)("div", {
                    style: l.style0,
                    children: [(0, n.jsx)("div", {
                        children: (0, n.jsx)(i(109939).sA, { ...e ? a.isBookmarkedTooltip : a.isNotBookmarkedTooltip
                        })
                    }), t ? (0, n.jsx)(i(693592).A, {
                        style: l.style1,
                        name: "toggleFavorite"
                    }) : void 0]
                })
            }
        },
        724175: (e, t, i) => {
            i.d(t, {
                x: () => o
            });

            function o() {
                return (0, i(881016).d)()
            }
        },
        742364: (e, t, i) => {
            i.r(t), i.d(t, {
                COPY_LINK_NO_PERMISSIONS_TOOLTIP_ID: () => a,
                CopyLinkNoPermissionsTooltip: () => d,
                PUBLIC_SHARE_LINK_TOOLTIP_ID: () => n,
                PublicShareLinkTutorialTooltip: () => r
            }), i(296540);
            var o = i(474848);
            let n = "public_share_link_tooltip",
                a = "copy_link_no_permissions_tooltip",
                s = {
                    width: 260
                };

            function r(e) {
                let {
                    originRef: t,
                    onPrimaryButtonClick: a
                } = e, r = (0, i(533992).v3)(), l = (0, i(682985).K8)(() => i(696190).default.isVisible(n), []), d = (0, i(718012).V)();
                return (0, o.jsx)(i(397732).B, {
                    shouldShow: l,
                    calloutId: n,
                    inAppCalloutStore: d,
                    children: (0, o.jsx)(i(788139).k, {
                        style: s,
                        pointerLength: 25,
                        pointerPosition: "50%",
                        origin: t,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        numSteps: 1,
                        header: (0, o.jsxs)(i(4458).VP, {
                            gap: 10,
                            children: [(0, o.jsx)(i(16275).I, {
                                icon: i(515388).globeIcon
                            }), (0, o.jsx)(i(109939).sA, {
                                id: "generalAccessPermissions.publicShareLink.tutorialTooltip.header",
                                defaultMessage: "Share your page with anyone"
                            })]
                        }),
                        content: (0, o.jsx)(i(109939).sA, {
                            id: "generalAccessPermissions.publicShareLink.tutorialTooltip.content",
                            defaultMessage: "You can now change your page settings to collaborate with anyone on the web with the link"
                        }),
                        finalButtonContent: (0, o.jsx)(i(109939).sA, {
                            id: "generalAccessPermissions.publicShareLink.tutorialTooltip.finalButtonContent",
                            defaultMessage: "Try it out"
                        }),
                        onPrimaryButtonClick: () => {
                            (0, i(59579).a)(r, n), a()
                        },
                        shouldDismissUponOutsideClick: !0,
                        onCloseClick: () => {
                            (0, i(59579).a)(r, n)
                        }
                    })
                })
            }
            let l = {
                width: 260
            };

            function d(e) {
                let {
                    originRef: t,
                    onPrimaryButtonClick: n
                } = e, s = (0, i(533992).v3)(), r = (0, i(682985).K8)(() => i(696190).default.isVisible(a), []), d = (0, i(718012).V)();
                return (0, o.jsx)(i(397732).B, {
                    shouldShow: r,
                    calloutId: a,
                    inAppCalloutStore: d,
                    children: (0, o.jsx)(i(788139).k, {
                        style: l,
                        pointerLength: 25,
                        pointerPosition: "50%",
                        origin: t,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        numSteps: 1,
                        header: (0, o.jsxs)(i(4458).VP, {
                            gap: 10,
                            children: [(0, o.jsx)(i(16275).I, {
                                icon: i(515388).globeIcon
                            }), (0, o.jsx)(i(109939).sA, {
                                id: "shareMenu.copyLinkNoPermissions.tutorialTooltip.header",
                                defaultMessage: "Ready to share?"
                            })]
                        }),
                        content: (0, o.jsx)(i(109939).sA, {
                            id: "shareMenu.copyLinkNoPermissions.tutorialTooltip.content",
                            defaultMessage: "This page is private. Update permissions to share with others."
                        }),
                        finalButtonContent: (0, o.jsx)(i(109939).sA, {
                            id: "shareMenu.copyLinkNoPermissions.tutorialTooltip.finalButtonContent",
                            defaultMessage: "Add permissions"
                        }),
                        onPrimaryButtonClick: () => {
                            (0, i(195857).DO_NOT_USE_trackLegacy)("tooltip_action", {
                                tooltip_type: "copy_link_no_permissions",
                                action: "add_permissions_clicked"
                            }), (0, i(59579).a)(s, a), n()
                        },
                        shouldDismissUponOutsideClick: !0,
                        onCloseClick: () => {
                            (0, i(104310).u)({
                                event: {
                                    eventName: "dismiss_tooltip",
                                    eventProperties: {
                                        tooltip_type: "copy_link_no_permissions"
                                    }
                                }
                            }), (0, i(59579).a)(s, a)
                        }
                    })
                })
            }
        },
        745452: (e, t, i) => {
            i.d(t, {
                p: () => o
            });

            function o() {
                var e, t, o, n, a, s, r, l, d, c, u, p, g, m;
                let f = i(728372).AppStoreSidebarSpaceStore.state,
                    h = i(728372).AppStoreSidebarSpaceViewStore.state,
                    v = null == f ? void 0 : f.getSpaceSurveyData(),
                    b = null == h ? void 0 : h.getUserSurveyData();
                return {
                    function: null != b && null != (e = b.function) && e.value ? (0, i(88917).Tj)(null == b || null == (t = b.function) ? void 0 : t.value) : void 0,
                    role: null != b && null != (o = b.role) && o.value ? (0, i(88917).t_)(null == b || null == (n = b.role) ? void 0 : n.value) : void 0,
                    educationRole: null == b || null == (a = b.education_role) ? void 0 : a.value,
                    educationLevel: null == b || null == (s = b.education_level) ? void 0 : s.value,
                    useCases: null != v && null != (r = v.use_cases) && r.value ? (0, i(88917).h0)(null == v || null == (l = v.use_cases) ? void 0 : l.value) : void 0,
                    companySize: null != v && null != (d = v.company_size) && d.value ? (0, i(88917).JE)(null == v || null == (c = v.company_size) ? void 0 : c.value) : void 0,
                    intent: null != v && null != (u = v.intent) && u.value ? (0, i(88917).j9)(null == v || null == (p = v.intent) ? void 0 : p.value) : void 0,
                    categories: null == b || null == (g = b.categories) ? void 0 : g.value,
                    collaborativeIntent: null == v || null == (m = v.collaborative_intent) ? void 0 : m.value
                }
            }
        },
        753248: (e, t, i) => {
            i.d(t, {
                A: () => s
            });
            var o = i(296540),
                n = i(474848);
            let a = {
                    keyboardShortcut: {
                        color: i(632079).Tj.text.inverseSecondary
                    },
                    iconButtonWrapper: {
                        height: 24
                    }
                },
                s = function(e) {
                    let {
                        store: t,
                        shouldShowMoveToMenu: s,
                        iconStyle: r,
                        style: l
                    } = e, d = (0, i(533992).v3)(), c = (0, i(109939).tz)(), u = (0, i(682985).K8)(() => {
                        let e = i(304636).default.state;
                        if ("agentCompletionPopup" === e.type && e.context.origin instanceof i(970831).B) return e.context.origin.id
                    }, []), p = (0, i(682985).K8)(() => (0, i(483227).Ay)({
                        store: t,
                        fullyQualified: !1,
                        pageVisitSource: i(254656).y8.Expand,
                        scrollToBlockId: u
                    }), [t, u]), g = (0, o.useCallback)(() => {
                        i(304636).default.setDidTransitionFromPeekToFullPage(!0)
                    }, []), m = (0, o.useCallback)(() => {
                        var e, t, o;
                        "agentCompletionPopup" === i(304636).default.state.type && i(304636).default.updateScrollerStore(i(257130).A), i(20557).uO(d, {
                            isNewPage: s,
                            peek_mode: i(475097).default.state.mode,
                            from: "topbar_button",
                            target_page_id: null == (e = i(475097).default.peekTargetStore.state) ? void 0 : e.id
                        }), i(20557).Zh(d, {
                            peek_mode: i(475097).default.state.mode,
                            from: "topbar_open_as_page_button",
                            target_page_id: null == (t = i(475097).default.peekTargetStore.state) ? void 0 : t.id,
                            target_parent_id: null == (o = i(475097).default.peekTargetStore.state) ? void 0 : o.getParentId()
                        })
                    }, [d, s]);
                    return (0, n.jsx)(i(51831).m, {
                        content: () => (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("div", {
                                children: (0, n.jsx)(i(109939).sA, {
                                    defaultMessage: "Open in full page",
                                    id: "peekTopbar.navigateToPage.tooltip"
                                })
                            }), (0, n.jsx)(i(693592).A, {
                                style: a.keyboardShortcut,
                                name: "commandEnter"
                            })]
                        }),
                        children: t => (0, n.jsx)("div", {
                            style: a.iconButtonWrapper,
                            children: (0, n.jsx)(i(374533).A, { ...t,
                                onMouseDown: g,
                                icon: i(934181).p,
                                iconStyle: r,
                                hasBackground: e.hasBackground,
                                href: p,
                                onClick: m,
                                ariaLabel: c.formatMessage({
                                    id: "peekTopbar.navigateToPage.tooltip",
                                    defaultMessage: "Open in full page"
                                }),
                                style: l
                            })
                        })
                    })
                }
        },
        768718: (e, t, i) => {
            i.d(t, {
                n: () => o
            });

            function o() {
                return (0, i(682985).K8)(() => {
                    var e;
                    let t = (null == (e = i(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.preferred_locale) ? ? i(619157).q;
                    return (0, i(619157).o_)(t)
                }, [])
            }
        },
        790022: (e, t, i) => {
            i.d(t, {
                H: () => a
            }), i(296540);
            var o = i(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.12 2.37 11.75 15.25",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M9.134 5.001c-.236-.667-1.18-.667-1.415 0L6.28 9.084a.5.5 0 1 0 .943.332l.276-.784h1.857l.276.784a.5.5 0 0 0 .944-.332zm-.708 1.001.576 1.63h-1.15zM10.75 5a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1zm.313 3a.5.5 0 0 1 .5-.5h1.687a.5.5 0 0 1 0 1h-1.687a.5.5 0 0 1-.5-.5M6.75 10.708a.5.5 0 0 0-.5.5v3.715a.5.5 0 0 0 .845.362l1.101-1.05a.25.25 0 0 1 .347.003l.675.657a.5.5 0 0 0 .734-.038l1.189-1.435a.25.25 0 0 1 .375-.01l1.368 1.467a.5.5 0 0 0 .866-.341v-3.33a.5.5 0 0 0-.5-.5zm2.554 2.435a.696.696 0 1 1 0-1.393.696.696 0 0 1 0 1.393"
                        }), (0, o.jsx)("path", {
                            d: "M6.25 2.375A2.125 2.125 0 0 0 4.125 4.5v11c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125v-11a2.125 2.125 0 0 0-2.125-2.125zM5.375 4.5c0-.483.392-.875.875-.875h7.5c.483 0 .875.392.875.875v11a.875.875 0 0 1-.875.875h-7.5a.875.875 0 0 1-.875-.875z"
                        })]
                    })
                },
                a = (0, i(104509).wt)("docRichText", n, "default")
        },
        809210: (e, t, i) => {
            function o(e) {
                let {
                    blockStore: t,
                    spaceViewStore: o
                } = e;
                return (0, i(682985).K8)(() => (0, i(282276).shouldShowTopbarMoreButton)({
                    blockType: t.getType(),
                    systemBlockType: t.getSystemBlockTypeStore().getValue(),
                    isGuestPrivatePage: (0, i(642138).E)(t, o)
                }), [t, o])
            }

            function n(e) {
                let {
                    blockStore: t
                } = e, {
                    value: o
                } = (0, i(815048).fJ)(i(656915).commentsDependency), n = (0, i(682985).K8)(() => o ? (0, i(241838).getDiscussions)(t).length : 0, [o, t]);
                return (0, i(682985).K8)(() => (0, i(15438).xG)({
                    blockType: t.getType(),
                    systemBlockType: t.getSystemBlockTypeStore().getValue(),
                    discussionCount: n,
                    isDraftPage: t.isDraft(),
                    isCollectionViewPageWithContent: t.isCollectionViewPageWithContent()
                }), [t, n])
            }

            function a(e) {
                let {
                    blockStore: t
                } = e, o = (0, i(533992).v3)(), n = (0, i(682985).K8)(() => (0, i(505941).y)(o), [o]);
                return (0, i(682985).K8)(() => (0, i(282276).shouldShowTopbarPresence)({
                    canEditPage: t.canEdit(),
                    blockType: t.getType(),
                    systemBlockType: t.getSystemBlockTypeStore().getValue(),
                    isTeamPost: t.isTeamPost(),
                    userIsViewingAsPublicShareLink: n
                }), [t, n])
            }

            function s(e) {
                let {
                    spaceStore: t,
                    blockStore: o,
                    spaceViewStore: n
                } = e, a = (0, i(533992).v3)(), s = (0, i(682985).K8)(() => t ? !t.canEdit() : void 0, [t]), r = (0, i(5967).V)({
                    spaceStore: t
                }), l = (0, i(682985).K8)(() => !!(0, i(142484).q)(a, o, o.getSpaceStore()), [a, o]), d = (0, i(682985).K8)(() => (0, i(505941).y)(a), [a]);
                return (0, i(682985).K8)(() => {
                    var e;
                    let a = null == (e = i(708929).Uv.getStateForBlock(o.id)) ? void 0 : e.mode,
                        c = !!t && t.id !== o.getSpaceId(),
                        u = !!n && (0, i(642138).E)(o, n),
                        p = o.getParentTable() === i(832375).C0E;
                    return (0, i(282276).shouldShowTopbarShareMenu)({
                        isSpaceGuest: s,
                        canEditPage: o.canEdit(),
                        blockType: o.getType(),
                        systemBlockType: o.getSystemBlockTypeStore().getValue(),
                        isTranslated: "translate_locked" === a,
                        isCrossSpaceBlock: c,
                        shouldShowPeopleCollection: r,
                        hasPermissionViaPublicAccess: l,
                        isPublicShareLink: d,
                        isGuestPrivatePage: u,
                        isCustomAgentInstructionsPage: p
                    })
                }, [o, t, l, r, s, d, n])
            }
            i.d(t, {
                Yj: () => n,
                bQ: () => a,
                ju: () => o,
                oo: () => s
            })
        },
        822012: (e, t, i) => {
            i.d(t, {
                V: () => o
            });

            function o(e) {
                return e.isPageBlock() && !e.isTeamPost() && !e.pathIsDead()
            }
        },
        855361: (e, t, i) => {
            i.d(t, {
                S: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    spaceId: o
                } = e;
                return (0, i(682985).K8)(() => {
                    if (o) return (0, i(616579).j)({
                        environment: t,
                        spaceId: o
                    })
                }, [t, o])
            }
        },
        859419: (e, t, i) => {
            i.d(t, {
                A: () => u,
                T: () => p
            }), i(296540);
            var o = i(474848);
            let n = new(i(245541)).R({
                    key: "copy_link_no_permissions_tooltip_shown",
                    namespace: i(274919).cd,
                    important: !0,
                    trackingType: "necessary"
                }),
                a = {
                    width: 280
                },
                s = {
                    button: {
                        flex: 1,
                        height: 36,
                        minHeight: 36,
                        borderRadius: 12,
                        marginTop: 12,
                        ...i(986939).A.isMobile ? {
                            minHeight: 48,
                            fontSize: i(699422).J.UIRegular.mobile
                        } : {}
                    }
                };

            function r(e) {
                let {
                    store: t,
                    buttonPopupStore: n,
                    events: a
                } = e, r = (0, i(533992).v3)(), {
                    device: l,
                    mobileNative: d
                } = r;
                return (0, o.jsx)(i(912946).A, {
                    colorPalette: "blue",
                    onClick: () => {
                        l.isMobileNative ? function(e) {
                            let {
                                store: t,
                                mobileNative: o
                            } = e, n = (0, i(213858).kb)({
                                schemeUrl: (0, i(483227).Ay)({
                                    store: t,
                                    pageVisitSource: i(254656).y8.CopyLink
                                }),
                                baseUrl: i(986939).A.domainBaseUrl
                            });
                            o && o.share(n)
                        }({
                            store: t,
                            mobileNative: d
                        }) : c({
                            store: t,
                            buttonPopupStore: n,
                            environment: r
                        });
                        let {
                            collectionId: e,
                            ownedCollectionCount: o,
                            linkedCollectionCount: a
                        } = (0, i(633171).P)(t, {
                            skipPages: !0
                        });
                        p(r, {
                            collection_id: e,
                            owned_collection_count: o,
                            linked_collection_count: a,
                            parent_collection_id: t.getParentCollectionIdUpToTwoLevels(),
                            from: "share_menu"
                        })
                    },
                    style: s.button,
                    ...a,
                    children: l.isMobileNative ? (0, o.jsx)(i(109939).sA, {
                        id: "pageShareMenu.shareLinkButton.label",
                        defaultMessage: "Share link"
                    }) : (0, o.jsx)(i(109939).sA, {
                        id: "pageShareMenu.copyLinkButton.label",
                        defaultMessage: "Copy link"
                    })
                })
            }

            function l(e) {
                let {
                    store: t,
                    buttonPopupStore: a,
                    events: s,
                    trustedDomainPermissionItem: r,
                    calculatedPermissions: l
                } = e, d = (0, i(533992).v3)();
                return (0, o.jsx)(i(548436).A, {
                    size: "lg",
                    onClick: () => {
                        let e = (0, i(865768).Jz)({
                            calculatedPermissions: l,
                            currentUserId: d.currentUser.id
                        });
                        c({
                            store: t,
                            buttonPopupStore: a,
                            environment: d,
                            keepPopupOpen: !0
                        }), e && setTimeout(async () => {
                            await i(94849).S.copy_link_no_permissions_tooltip({
                                mainEditorCurrentBlockStore: t
                            }) && !n.state && ((0, i(195857).DO_NOT_USE_trackLegacy)("tooltip_action", {
                                tooltip_type: "copy_link_no_permissions",
                                action: "shown",
                                space_id: t.getSpaceId()
                            }), n.setState(!0), (0, i(171629).U)(d, i(742364).COPY_LINK_NO_PERMISSIONS_TOOLTIP_ID))
                        }, 100);
                        let {
                            collectionId: o,
                            ownedCollectionCount: s,
                            linkedCollectionCount: u
                        } = (0, i(633171).P)(t, {
                            skipPages: !0
                        });
                        p(d, {
                            collection_id: o,
                            owned_collection_count: s,
                            linked_collection_count: u,
                            parent_collection_id: t.getParentCollectionIdUpToTwoLevels(),
                            trusted_domain_permission_role: r.role,
                            from: "share_menu"
                        })
                    },
                    iconLeading: {
                        icon: i(588739).linkIcon,
                        colorVariant: "secondary"
                    },
                    ...s,
                    children: (0, o.jsx)(i(109939).sA, {
                        id: "blockPermissionsSettings.copyLinkButtonV2.label",
                        defaultMessage: "Copy link"
                    })
                })
            }

            function d(e) {
                let {
                    calculatedPermissions: t,
                    spaceName: n
                } = e, a = t.mostPermissivePublicItem.permissionItem;
                if ((0, i(642157).Tt)(a.role)) return (0, o.jsx)(i(109939).sA, {
                    defaultMessage: "This page has public link access, so anyone with the link will be able to view the page.",
                    id: "blockPermissionsSettings.publicLinkInfo.tooltip"
                });
                let s = t.mostPermissiveSpaceItem.permissionItem;
                return (0, i(642157).Tt)(s.role) ? n ? (0, o.jsx)(i(109939).sA, {
                    defaultMessage: "Anyone at {spaceName} can access with this link",
                    id: "blockPermissionsSettings.workspacePermissions.tooltipV2",
                    values: {
                        spaceName: n
                    }
                }) : (0, o.jsx)(i(109939).sA, {
                    defaultMessage: "This page has workspace access, so anyone in the workspace will be able to view the link.",
                    id: "blockPermissionsSettings.workspacePermissions.tooltip"
                }) : t.permissionItemsCount > 1 ? (0, o.jsx)(i(109939).sA, {
                    defaultMessage: "Only people invited to this page can access with this link",
                    id: "blockPermissionsSettings.userPermissions.tooltipV2"
                }) : (0, o.jsx)(i(109939).sA, {
                    defaultMessage: "Only you can access this page, so the link will only work for you.",
                    id: "blockPermissionsSettings.privatePermissions.tooltip"
                })
            }
            async function c(e) {
                let {
                    store: t,
                    buttonPopupStore: o,
                    environment: n,
                    keepPopupOpen: a
                } = e, s = (0, i(483227).Ay)({
                    store: t,
                    pageVisitSource: i(254656).y8.CopyLink
                }), [r, l] = await Promise.all([(0, i(161333).r)(), (0, i(969899).jd)()]);
                await l({
                    environment: n,
                    stringValue: s,
                    copiedMessage: r.copiedLinkToClipboard
                }), o && !a && o.setState({
                    open: !1
                })
            }
            let u = function(e) {
                let {
                    store: t,
                    buttonPopupStore: n,
                    calculatedPermissions: s
                } = e, c = (0, i(481522).X)();
                return (0, o.jsxs)(o.Fragment, {
                    children: [i(986939).A.isMobile ? void 0 : (0, o.jsx)(i(687815).A, {
                        store: t
                    }), (0, o.jsx)(i(51831).m, {
                        delayThreshold: 500,
                        placement: "bottom",
                        content: () => (0, o.jsx)(d, {
                            calculatedPermissions: s,
                            spaceName: c
                        }),
                        textWrap: !0,
                        style: a,
                        children: e => i(986939).A.isMobile ? (0, o.jsx)(r, {
                            store: t,
                            buttonPopupStore: n,
                            events: e
                        }) : (0, o.jsx)(l, {
                            store: t,
                            buttonPopupStore: n,
                            events: e,
                            trustedDomainPermissionItem: s.mostPermissiveTrustedDomainItem.permissionItem,
                            calculatedPermissions: s
                        })
                    })]
                })
            };

            function p(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "copy_link_from_permissions_setting",
                        eventProperties: t
                    }
                })
            }
        },
        874367: (e, t, i) => {
            i.d(t, {
                e: () => r
            });
            var o = i(296540),
                n = i(474848);
            let a = (0, i(109939).YK)({
                    copyLink: {
                        defaultMessage: "Copy link",
                        id: "topbar.copyLinkButton.tooltip"
                    }
                }),
                s = {
                    shortcut: {
                        color: i(632079).Tj.text.inverseSecondary
                    }
                };

            function r({
                store: e
            }) {
                let t = (0, i(533992).v3)(),
                    l = (0, i(109939).tz)(),
                    d = t.device.isElectron,
                    c = (0, o.useCallback)(() => {
                        (async () => {
                            let o = await i(235645).R.clipboardActions.load();
                            (d ? o.copyLinkToBlock : o.copyFormattedLinkToBlock)({
                                environment: t,
                                blockStore: e
                            })
                        })(), (0, i(859419).T)(t, {
                            from: "topbar"
                        })
                    }, [e, t, d]),
                    u = l.formatMessage(a.copyLink);
                return (0, n.jsx)(i(51831).m, {
                    placement: "bottom",
                    content: () => (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            children: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Copy link",
                                id: "topbar.copyLinkButton.tooltip"
                            })
                        }), (0, n.jsx)(i(693592).A, {
                            style: s.shortcut,
                            name: t.device.isElectron ? "copyLinkToCurrentPage" : "copyCurrentPageLinkifiedBlockTitle"
                        })]
                    }),
                    children: e => (0, n.jsx)(i(374533).A, { ...e,
                        icon: i(588739).linkIcon,
                        style: i(440601).RN.iconButton,
                        iconStyle: i(440601).RN.icon,
                        onClick: c,
                        ariaLabel: u
                    })
                })
            }
        },
        896714: (e, t, i) => {
            i.d(t, {
                P: () => n
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.72 1.77 14.55 16.45",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10.302 1.853a.63.63 0 0 0-.604 0l-6.65 3.669c-.2.11-.323.32-.323.547v7.862c0 .228.124.437.323.547l6.65 3.67a.63.63 0 0 0 .604 0l6.65-3.67c.2-.11.323-.32.323-.547V6.069a.63.63 0 0 0-.323-.547zM3.975 7.127l5.4 2.98v6.434l-5.4-2.98zm6.65 9.414v-6.434l5.4-2.98v6.435zM15.356 6.07 10 9.024 4.644 6.069 10 3.114z"
                    })
                },
                n = (0, i(104509).wt)("cube", o, "default")
        },
        912572: (e, t, i) => {
            i.d(t, {
                Z6: () => n,
                rN: () => a
            });
            let o = {
                    translation: new(i(815048)).O2("translation", () => Promise.all([i.e(26997), i.e(73588), i.e(2337), i.e(57339), i.e(61915), i.e(74139), i.e(3773), i.e(8340)]).then(i.bind(i, 194785))),
                    TranslateBanner: new(i(815048)).O2("TranslateBanner", async () => await Promise.all([i.e(26997), i.e(73588), i.e(2337), i.e(57339), i.e(61915), i.e(74139), i.e(3773)]).then(i.bind(i, 398915)))
                },
                n = (0, i(815048)._h)(o.translation, e => e.TopbarAmbientSuggestTranslateButton),
                a = (0, i(815048)._h)(o.TranslateBanner, e => e.TranslateBanner)
        },
        986251: (e, t, i) => {
            function o({
                trustedDomainIds: e,
                spaceStore: t
            }) {
                return e.map(e => {
                    let o = i(902573).L.createChildStore(t, {
                        table: i(832375).A3P,
                        id: e,
                        spaceId: t.id
                    });
                    if (o.canRead()) return o
                }).filter(i(722371).O9)
            }
            async function n({
                environment: e,
                spaceId: t,
                currentUserId: o,
                organizationId: a
            }) {
                let s = await e.api.callApi({
                    eventName: "getTrustedDomainsNumberOfMembers",
                    environment: e,
                    data: {
                        spaceId: t,
                        organizationId: a
                    },
                    userId: o
                });
                return "failed" === s.type ? (i(773352).rateLimitedLog({
                    from: "trustedDomainHelpers",
                    level: "error",
                    type: "getTrustedDomainsNumberOfMembersForSpaceFailed",
                    spaceId: t,
                    actor: o ? {
                        id: o,
                        table: i(832375).oo9
                    } : void 0,
                    error: (0, i(416607).convertErrorToLog)(s.error)
                }), []) : s.data.results
            }
            async function a({
                environment: e,
                spaceId: t
            }) {
                let o = await e.api.callApi({
                    eventName: "getTrustedDomainsForSpace",
                    environment: e,
                    data: {
                        spaceId: t
                    }
                });
                return "success" !== o.type ? [] : o.data.results.filter(e => e.domain_link_sharing_enabled).map(e => i(993189).Bj6.fromValue(i(832375).A3P, e))
            }
            i.d(t, {
                J7: () => o,
                XC: () => a,
                hs: () => n
            }), i(898992), i(354520), i(581454)
        }
    }
]);