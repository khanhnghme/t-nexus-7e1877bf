"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [31914], {
        78172: (e, t, i) => {
            i.d(t, {
                $: () => c,
                s: () => k
            }), i(944114), i(898992), i(354520), i(581454);
            var n = i(296540),
                o = i(474848);
            let s = (0, i(109939).YK)({
                    unreadDiscussions: {
                        defaultMessage: "Discussions",
                        id: "topbar.discussionsPopup.unreadDiscussions"
                    },
                    seeAll: {
                        defaultMessage: "See all",
                        id: "topbar.discussionsPopup.seeAll"
                    },
                    caughtUpMessage: {
                        defaultMessage: "You’re all caught up",
                        id: "topbar.discussionsPopup.caughtUpMessage"
                    },
                    caughtUpSubMessage: {
                        defaultMessage: "There are no open discussions",
                        id: "topbar.discussionsPopup.caughtUpSubMessage"
                    },
                    newSectionTitle: {
                        defaultMessage: "New",
                        id: "topbar.discussionsPopup.newSectionTitle"
                    },
                    previousSectionTitle: {
                        defaultMessage: "Previous",
                        id: "topbar.discussionsPopup.previousSectionTitle"
                    },
                    draftSectionTitle: {
                        defaultMessage: "Draft",
                        id: "topbar.discussionsPopup.draftSectionTitle"
                    },
                    viewCommentFallback: {
                        defaultMessage: "View comment",
                        id: "topbar.discussionsPopup.viewComment"
                    },
                    viewDraftCommentFallback: {
                        defaultMessage: "View draft comment",
                        id: "topbar.discussionsPopup.viewDraftComment"
                    }
                }),
                l = 20 + i(42615).eQ,
                a = 28 + i(42615).eQ,
                r = "unread_discussions_popup";

            function d(e) {
                return e.sort((e, t) => {
                    var i, n, o, s;
                    let l = (null == (i = e.getUserSeenRecordStore()) ? void 0 : i.getLastSeenAt()) ? ? 0,
                        a = (null == (n = t.getUserSeenRecordStore()) ? void 0 : n.getLastSeenAt()) ? ? 0;
                    if (a - l != 0) return a - l;
                    let r = (null == (o = e.getLastComment()) ? void 0 : o.getCreatedTime()) ? ? 0;
                    return ((null == (s = t.getLastComment()) ? void 0 : s.getCreatedTime()) ? ? 0) - r
                })
            }

            function c(e) {
                let {
                    blockStore: t,
                    unreadDiscussionsPopupStore: n
                } = e, s = (0, i(714050).S)(t), l = (0, i(682985).K8)(() => s.filter(e => !e.getResolved()), [s]), a = (0, i(682985).K8)(() => i(332190).A.isComposingNewDiscussion(), []), r = 0 === l.length && !a, {
                    unreadDiscussions: c,
                    readDiscussions: u
                } = (0, i(682985).K8)(() => {
                    let [e, n] = i(381453).jB(l, e => (0, i(47354).s)({
                        discussionStore: e,
                        navigableBlockStore: t.getNavigableBlockStore()
                    }));
                    return {
                        unreadDiscussions: d(e).slice(0, 25),
                        readDiscussions: d(n).slice(0, 5)
                    }
                }, [l, t]);
                return (0, o.jsx)(p, {
                    blockStore: t,
                    unreadDiscussions: c,
                    readDiscussions: u,
                    shouldRenderZeroState: r,
                    unreadDiscussionsPopupStore: n
                })
            }
            let u = {
                container: {
                    width: i(912221).$D,
                    fontSize: i(699422).J.UIRegular.desktop,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    maxHeight: 492
                },
                header: {
                    paddingTop: 14,
                    paddingBottom: 10,
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: i(632079).Tj.text.primary,
                    fontWeight: i(699422).Wy.medium,
                    flexShrink: 0
                },
                notificationDropdown: {
                    marginInlineEnd: -6
                },
                scroller: {
                    flexGrow: 1,
                    minHeight: 0,
                    maxHeight: 384,
                    width: "100%"
                },
                menuListStyle: {
                    width: "100%",
                    paddingInlineStart: 0,
                    paddingInlineEnd: 0
                }
            };

            function p({
                blockStore: e,
                unreadDiscussions: t,
                readDiscussions: l,
                shouldRenderZeroState: a,
                unreadDiscussionsPopupStore: d
            }) {
                let c = (0, i(682985).uB)(void 0, i(510969).A),
                    g = (0, i(682985).uB)(void 0, i(593423).A),
                    m = (0, i(533992).v3)(),
                    x = (0, n.useCallback)(async t => {
                        var n;
                        d.reset();
                        let o = (0, i(424332).$N)(m, e),
                            s = (0, i(47354).g)({
                                discussionStore: t,
                                navigableBlockStore: e.getNavigableBlockStore()
                            });
                        "unread" === s && (null == (n = t.getParentStore()) ? void 0 : n.getType()) === "page" && (0, i(737146).X)({
                            environment: m,
                            discussionStores: [t]
                        }), await i(554067).DZ({
                            discussionStore: t,
                            currentBlockStore: e,
                            environment: m,
                            analyticsFrom: r,
                            currentEl: null,
                            shouldSetRect: !0,
                            animateScroll: o,
                            discussionReadStatus: s
                        })
                    }, [m, e, d]),
                    v = k({
                        unreadDiscussions: t,
                        readDiscussions: l,
                        handleDiscussionClick: x,
                        handleDraftDiscussionClick: (0, n.useCallback)(() => {
                            d.reset();
                            let t = i(332190).A.getDiscussionInputStore();
                            (0, i(758275).x)({
                                currentBlockStore: e,
                                discussionInputStore: t,
                                environment: m
                            })
                        }, [e, m, d]),
                        isMobile: !1,
                        hasDraftComment: (0, i(682985).K8)(() => i(332190).A.isComposingNewDiscussion(), [])
                    }),
                    S = (0, n.useCallback)(() => {
                        d.reset(), i(449473).B8.setToShowAllDiscussions(), (0, i(418001).j)({
                            environment: m,
                            blockStore: e,
                            tabToOpen: i(449473).tF.Comments,
                            from: "new_discussions_sheet"
                        })
                    }, [m, e, d]);
                return (0, o.jsxs)("div", {
                    style: u.container,
                    children: [(0, o.jsxs)("div", {
                        style: u.header,
                        children: [(0, o.jsx)(i(109939).sA, { ...s.unreadDiscussions
                        }), (0, o.jsx)("div", {
                            style: u.notificationDropdown,
                            children: (0, o.jsx)(i(970475).O, {
                                blockStore: e,
                                from: r,
                                buttonPopupStore: c,
                                renderType: "button"
                            })
                        })]
                    }), a ? (0, o.jsx)(f, {
                        handleSeeAllComments: S
                    }) : (0, o.jsxs)(i(747369).A, {
                        menuType: i(649476).gu.Popup,
                        width: i(912221).$D,
                        children: [(0, o.jsx)(i(126767).H, {
                            type: i(644154).A.Y,
                            style: u.scroller,
                            store: g,
                            children: (0, o.jsx)(i(558045).A, {
                                type: i(558045).O.Vertical,
                                sections: v,
                                initialFocus: void 0,
                                style: u.menuListStyle
                            })
                        }), (0, o.jsx)(h, {
                            scrollerStore: g,
                            handleSeeAllComments: S
                        })]
                    })]
                })
            }
            let g = {
                    display: "block",
                    flexGrow: 0,
                    flexShrink: 0,
                    flexBasis: "auto",
                    width: "100%"
                },
                m = {
                    width: "100%",
                    height: 32
                };

            function h({
                scrollerStore: e,
                handleSeeAllComments: t
            }) {
                let n = (0, i(682985).K8)(() => e.state.elementRef, [e]),
                    l = (0, i(239160).CR)(n) > (0, i(239160).o7)(n),
                    a = (0, i(960253).I)(() => ({
                        footerContent: {
                            width: "100%",
                            paddingTop: l ? 16 : 8,
                            paddingBottom: 16,
                            paddingInlineStart: 16,
                            paddingInlineEnd: 16
                        }
                    }), [l]);
                return (0, o.jsxs)("div", {
                    style: g,
                    children: [(0, o.jsx)(i(292239).A, {
                        type: "bottom",
                        scrollerStore: e
                    }), (0, o.jsx)("div", {
                        style: a.footerContent,
                        children: (0, o.jsx)(i(265779).E, {
                            onClick: t,
                            style: m,
                            children: (0, o.jsx)(i(324489).V, {
                                children: (0, o.jsx)(i(109939).sA, { ...s.seeAll
                                })
                            })
                        })
                    })]
                })
            }
            let x = {
                container: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 268,
                    width: "100%",
                    paddingBottom: 16,
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16
                },
                caughtUpMessage: {
                    marginTop: 6,
                    fontWeight: i(699422).Wy.medium
                },
                caughtUpSubMessage: {
                    marginTop: 2
                },
                seeAllButton: {
                    fontSize: i(699422).J.UIRegular.desktop,
                    marginTop: 10
                }
            };

            function f({
                handleSeeAllComments: e
            }) {
                let t = (0, i(109939).tz)();
                return (0, o.jsxs)("div", {
                    style: x.container,
                    children: [(0, o.jsxs)(i(4458).VP, {
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        children: [(0, o.jsx)(i(16275).I, {
                            icon: i(444202).d,
                            size: "xl",
                            colorVariant: "tertiary"
                        }), (0, o.jsx)(i(324489).V, {
                            isSecondaryColor: !0,
                            style: x.caughtUpMessage,
                            children: t.formatMessage(s.caughtUpMessage)
                        }), (0, o.jsx)(i(324489).V, {
                            isSecondaryColor: !0,
                            style: x.caughtUpSubMessage,
                            children: t.formatMessage(s.caughtUpSubMessage)
                        })]
                    }), (0, o.jsx)(i(548436).A, {
                        onClick: e,
                        style: x.seeAllButton,
                        size: "lg",
                        children: t.formatMessage(s.seeAll)
                    })]
                })
            }
            let v = {
                    marginInlineStart: 0
                },
                S = {
                    marginInlineEnd: 0
                };

            function w({
                focused: e,
                isMobile: t,
                onClick: n,
                authorElement: s,
                contentElement: r,
                rightElement: d
            }) {
                let c = (0, i(960253).I)(() => {
                    let e = t ? i(699422).J.UIRegular.mobile : i(699422).J.UIRegular.desktop,
                        n = t ? 10 : 8,
                        o = t ? void 0 : 10;
                    return {
                        container: {
                            paddingInlineStart: n,
                            paddingInlineEnd: n,
                            fontSize: e,
                            width: "100%"
                        },
                        buttonStyle: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 6,
                            paddingTop: o,
                            paddingBottom: o,
                            paddingInlineStart: n,
                            paddingInlineEnd: n + 2 * !t,
                            borderRadius: 8,
                            maxHeight: t ? a : l,
                            minHeight: t ? a : void 0
                        },
                        contentContainer: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            overflow: "hidden",
                            flex: 1,
                            fontSize: e,
                            gap: 6,
                            color: i(632079).Tj.text.secondary
                        },
                        menuItem: {
                            borderBottom: void 0,
                            background: void 0,
                            paddingInlineStart: 0,
                            paddingInlineEnd: 0,
                            gap: 6
                        }
                    }
                }, [t]);
                return (0, o.jsx)("div", {
                    style: c.container,
                    children: (0, o.jsx)(i(95582).A, {
                        onClick: n,
                        focused: e,
                        buttonStyle: c.buttonStyle,
                        style: c.menuItem,
                        itemMarginLeft: 0,
                        itemMarginRight: 0,
                        leftStyle: v,
                        left: s,
                        title: (0, o.jsx)("div", {
                            style: c.contentContainer,
                            children: r
                        }),
                        right: d,
                        rightStyle: S
                    })
                })
            }
            let y = {
                text: {
                    color: i(632079).Tj.text.secondary,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    fontWeight: i(699422).Wy.regular
                }
            };

            function b({
                discussionStore: e,
                handleClick: t,
                focused: l,
                isMobile: a,
                isUnread: r
            }) {
                let d = (0, i(682985).K8)(() => e.getLastComment(), [e]),
                    c = (0, i(682985).K8)(() => null == d ? void 0 : d.getCreatedByStore(), [d]),
                    u = (0, n.useMemo)(() => (0, o.jsx)("div", {
                        style: y.text,
                        children: (0, o.jsx)(i(109939).sA, { ...s.viewCommentFallback
                        })
                    }), []);
                if (!c) return null;
                let p = a ? i(699422).J.UIRegular.mobile : i(699422).J.UIRegular.desktop;
                return (0, o.jsx)(w, {
                    focused: l,
                    isMobile: a,
                    onClick: async () => await t(e),
                    authorElement: (0, o.jsx)(i(917563).Y, {
                        authorStore: c,
                        location: "updates_sidebar",
                        suppressMouse: !0,
                        shouldOmitTimestamp: !0,
                        authorFontSizeOverride: p,
                        createdTime: Date.now(),
                        lastEditedTime: Date.now()
                    }),
                    contentElement: d ? (0, o.jsx)(i(313447).j, {
                        discussionStore: e,
                        commentStore: d,
                        location: "unread_discussions_popup",
                        fallbackText: u
                    }) : u,
                    rightElement: r ? (0, o.jsx)(i(210882).m, {
                        size: 8
                    }) : void 0
                })
            }
            let j = {
                text: {
                    color: i(632079).Tj.text.secondary,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    fontWeight: i(699422).Wy.regular
                }
            };

            function T({
                focused: e,
                isMobile: t,
                handleClick: l
            }) {
                let a = (0, i(533992).v3)(),
                    r = (0, i(960253).e)(),
                    {
                        value: d
                    } = (0, i(815048).fJ)(i(406921).V),
                    c = (0, i(682985).K8)(() => (0, i(427846)._)(a), [a]),
                    u = (0, n.useMemo)(() => (0, o.jsx)("div", {
                        style: j.text,
                        children: (0, o.jsx)(i(109939).sA, { ...s.viewDraftCommentFallback
                        })
                    }), []),
                    p = (0, i(682985).K8)(() => {
                        var e;
                        let t = null == (e = i(332190).A.getDiscussionInputStore()) ? void 0 : e.getState().textStore.getValue(),
                            n = i(332190).A.getBlockStore(),
                            o = null == n ? void 0 : n.getSpaceId();
                        return t && (0, i(722371).O9)(o) && i(332190).A.state.open && n ? (0, i(536614).S5)({
                            textValue: {
                                value: t,
                                spaceId: o
                            },
                            parentStore: n,
                            environment: a,
                            disableStyleAnnotations: !1,
                            disableInsertedDeletedAnnotations: !1,
                            disableDateStyleAnnotations: !1,
                            disableSuggestionAnnotations: !1,
                            disableHover: !0,
                            disabled: !0,
                            theme: i(632079).Tj,
                            themeMode: r,
                            emojiType: (0, i(591404).FN)(a),
                            katex: d,
                            formulaValueTypes: []
                        }) : u
                    }, [a, u, d, r]);
                if (!c) return null;
                let g = t ? i(699422).J.UIRegular.mobile : i(699422).J.UIRegular.desktop;
                return (0, o.jsx)(w, {
                    focused: e,
                    isMobile: t,
                    onClick: l,
                    authorElement: (0, o.jsx)(i(917563).Y, {
                        authorStore: c,
                        location: "updates_sidebar",
                        suppressMouse: !0,
                        shouldOmitTimestamp: !0,
                        authorFontSizeOverride: g,
                        lastEditedTime: Date.now(),
                        createdTime: Date.now()
                    }),
                    contentElement: p,
                    rightElement: (0, o.jsx)(i(210882).m, {
                        size: 8,
                        color: "#CB9433"
                    })
                })
            }

            function k({
                unreadDiscussions: e,
                readDiscussions: t,
                handleDiscussionClick: n,
                handleDraftDiscussionClick: l,
                isMobile: a,
                hasDraftComment: r
            }) {
                let d, c = (d = [], r && d.push("draft"), e.length > 0 && d.push("new"), t.length > 0 && d.push("previous"), d),
                    u = (e, t) => {
                        let n, s = {
                                desktop: {
                                    paddingInlineStart: 16,
                                    paddingInlineEnd: 16,
                                    marginBottom: 4,
                                    marginTop: (n = c.length > 0 && e === c[0]) ? 2 : 8
                                },
                                mobile: {
                                    paddingInlineStart: 20,
                                    paddingInlineEnd: 20,
                                    marginTop: 14 * !!n
                                }
                            },
                            l = "draft" !== e && 1 === c.length;
                        return e => (0, o.jsx)(i(844565).A, { ...e,
                            disableMobilePadding: !0,
                            disableDesktopPadding: !0,
                            title: (0, o.jsx)(i(109939).sA, { ...t
                            }),
                            mobileTitleStyle: s.mobile,
                            desktopTitleStyle: s.desktop,
                            hideTitle: l
                        })
                    },
                    p = {
                        draft: {
                            key: "draft",
                            render: u("draft", s.draftSectionTitle),
                            items: [{
                                key: "draft_discussion",
                                render: e => (0, o.jsx)(T, {
                                    focused: e.focused,
                                    isMobile: a,
                                    handleClick: l
                                }),
                                action: l
                            }]
                        },
                        new: {
                            key: "new",
                            render: u("new", s.newSectionTitle),
                            items: e.map(e => ({
                                key: e.id,
                                render: t => (0, o.jsx)(b, {
                                    focused: t.focused,
                                    discussionStore: e,
                                    handleClick: n,
                                    isMobile: a,
                                    isUnread: !0
                                }),
                                action: async () => {
                                    await n(e)
                                }
                            }))
                        },
                        previous: {
                            key: "previous",
                            render: u("previous", s.previousSectionTitle),
                            items: t.map(e => ({
                                key: e.id,
                                render: t => (0, o.jsx)(b, {
                                    focused: t.focused,
                                    discussionStore: e,
                                    handleClick: n,
                                    isMobile: a,
                                    isUnread: !1
                                }),
                                action: async () => {
                                    await n(e)
                                }
                            }))
                        }
                    };
                return c.map(e => p[e])
            }
        },
        93042: (e, t, i) => {
            i.r(t), i.d(t, {
                checkmarkCircleFillIcon: () => o,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0m10.5-2.018a.625.625 0 1 0-1.071-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                    })
                },
                o = (0, i(104509).wt)("checkmarkCircleFill", n, "fill")
        },
        292239: (e, t, i) => {
            i.d(t, {
                A: () => s
            });
            var n = i(296540),
                o = i(474848);

            function s({
                scrollerStore: e,
                type: t,
                dividerColor: l,
                errorMargin: a = 4
            }) {
                let r = (0, i(682985).K8)(() => e.state.elementRef, [e]),
                    d = (0, i(239160).Xg)(r),
                    c = (0, i(239160).CR)(r),
                    u = (0, i(239160).sj)(r),
                    p = (0, i(239160).yE)(r),
                    g = (0, i(239160).o7)(r),
                    m = (0, i(239160).HJ)(r),
                    h = (0, n.useMemo)(() => {
                        if (!e) return !1;
                        switch (t) {
                            case "top":
                                return Math.round(p) > a;
                            case "bottom":
                                return Math.abs(Math.round(p) - (c - g)) > a;
                            case "left":
                                return Math.round(u) > a;
                            case "right":
                                return Math.abs(Math.round(u) - (d - m)) > a
                        }
                    }, [e, t, a, d, c, u, p, g, m]),
                    x = "left" === t || "right" === t,
                    f = (0, i(960253).I)(() => ({
                        divider: {
                            flexShrink: 0,
                            boxShadow: h ? x ? `1px 0 0 ${l??i(632079).Tj.border.secondaryTranslucent}` : `0 1px 0 ${l??i(632079).Tj.border.secondaryTranslucent}` : "0 0 0 transparent",
                            transition: "box-shadow 300ms",
                            ...x ? {
                                width: 1,
                                height: "100%",
                                marginInlineStart: -1
                            } : {
                                height: 1,
                                width: "100%",
                                marginTop: -1
                            },
                            zIndex: 99
                        }
                    }), [x, h, l]);
                return (0, o.jsx)("div", {
                    style: f.divider
                })
            }
        },
        313447: (e, t, i) => {
            i.d(t, {
                j: () => c
            }), i(898992), i(823215), i(296540);
            var n = i(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.37 11.75 9.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M6.753 5.845a.383.383 0 0 0-.576.33v3.85c0 .295.321.477.576.33l3.332-1.926a.38.38 0 0 0 0-.658z"
                        }), (0, n.jsx)("path", {
                            d: "M4 3.375c-1.036 0-1.875.84-1.875 1.875v5.5c0 1.036.84 1.875 1.875 1.875h8c1.036 0 1.875-.84 1.875-1.875v-5.5c0-1.036-.84-1.875-1.875-1.875zM3.375 5.25c0-.345.28-.625.625-.625h8c.345 0 .625.28.625.625v5.5c0 .345-.28.625-.625.625H4a.625.625 0 0 1-.625-.625z"
                        })]
                    })
                },
                s = (0, i(104509).wt)("playButtonSmall", o, "small"),
                l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.97 1.89 12.05 12.21",
                    svg: (0, n.jsx)("path", {
                        d: "M6.92 1.895a.625.625 0 0 0-.625.625v10.96a.625.625 0 1 0 1.25 0V2.52a.625.625 0 0 0-.625-.625m-2.16 1.84a.625.625 0 0 0-.625.625v7.28a.625.625 0 1 0 1.25 0V4.36a.625.625 0 0 0-.625-.625m6.48.4a.625.625 0 0 0-.625.625v6.48a.625.625 0 1 0 1.25 0V4.76a.625.625 0 0 0-.625-.625m-2.16 1.04a.625.625 0 0 0-.625.625v4.4a.625.625 0 1 0 1.25 0V5.8a.625.625 0 0 0-.625-.625M2.6 6.295a.625.625 0 0 0-.625.625v2.16a.625.625 0 1 0 1.25 0V6.92a.625.625 0 0 0-.625-.625m10.8 0a.625.625 0 0 0-.625.625v2.16a.625.625 0 0 0 1.25 0V6.92a.625.625 0 0 0-.625-.625"
                    })
                },
                a = (0, i(104509).wt)("waveformSmall", l, "small"),
                r = (0, i(109939).YK)({
                    filesString: {
                        id: "commentText.filesString",
                        defaultMessage: "{count, plural, one {# file} other {# files}}"
                    }
                }),
                d = {
                    lineTruncationFlex: {
                        display: "flex",
                        flexDirection: "row",
                        width: "100%"
                    },
                    fileIcon: {
                        flexShrink: 0,
                        color: i(632079).Tj.text.tertiary,
                        alignSelf: "center"
                    }
                };

            function c(e) {
                let {
                    discussionStore: t,
                    commentStore: o,
                    location: l,
                    fallbackText: c
                } = e, u = "inbox_notification" === l ? 2 : "unread_discussions_popup" === l ? 1 : void 0, p = (0, i(533992).v3)(), g = (0, i(960253).e)(), m = (0, i(109939).tz)(), h = (0, i(815048).fJ)(i(406921).V), x = (0, i(682985).K8)(() => {
                    let e = i(966980).gp(o).getValue();
                    if (e && (0, i(247438).w9s)(e) && t.isSuggestionDiscussion()) {
                        let e = t.getContext();
                        if (e) return (0, i(353711).l8)({
                            discussionContextData: e,
                            discussionType: "suggestion",
                            discussionId: t.id,
                            intl: m
                        })
                    }
                    return e
                }, [o, t, m]), f = (0, i(682985).K8)(() => o.getSpaceId(), [o]), v = (0, i(682985).K8)(() => {
                    let e = i(966980).dd(o);
                    if (!e || 0 === e.length) return null;
                    let t = e[0],
                        n = function(e) {
                            switch (e.getType()) {
                                case i(955630).xd.image:
                                    return i(447483).R;
                                case i(955630).xd.video:
                                    return s;
                                case i(955630).xd.audio:
                                    return a;
                                default:
                                    return i(785655).x
                            }
                        }(t),
                        l = e.length,
                        r = (0, i(247438).q4_)(t.getNonCollectionProperty("source")),
                        d = (0, i(247438).q4_)(t.getNonCollectionProperty("title")),
                        c = (0, i(728601).SB)({
                            title: d,
                            source: r || ""
                        });
                    if (1 === l && c) return {
                        iconFunction: n,
                        text: c,
                        fileCount: 1
                    };
                    let u = t.getType();
                    return {
                        iconFunction: e.every(e => e.getType() === u) ? n : i(785655).x,
                        fileCount: l,
                        text: void 0
                    }
                }, [o]), S = (0, i(682985).K8)(() => {
                    if (!x || !f) return null;
                    let e = "inbox_notification" === l ? (0, i(605351).Eh)({
                        textValue: x,
                        currentUserId: p.currentUser.id,
                        getRecordModel: t.getRecordModel,
                        highlightStyle: "text_only"
                    }) : x;
                    return (0, i(536614).S5)({
                        environment: p,
                        textValue: {
                            value: e,
                            spaceId: f
                        },
                        parentStore: t,
                        disableStyleAnnotations: !1,
                        disableInsertedDeletedAnnotations: !1,
                        disableDateStyleAnnotations: !1,
                        disableSuggestionAnnotations: !1,
                        disableHover: !0,
                        disabled: !0,
                        theme: i(632079).Tj,
                        themeMode: g,
                        emojiType: (0, i(591404).FN)(p),
                        katex: h.value,
                        formulaValueTypes: []
                    })
                }, [x, f, l, p, t, h.value, g]), w = (0, i(960253).I)(() => ({
                    commentText: {
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        fontSize: function(e) {
                            if ("inbox_notification" === e) return 14
                        }(l),
                        color: i(632079).Tj.text.secondary,
                        lineHeight: "21px",
                        position: "relative",
                        overflow: "hidden"
                    },
                    lineTruncation: {
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: u
                    },
                    singleLineTruncation: {
                        maxWidth: v ? "calc(100% - 96px)" : void 0,
                        ...1 === u && {
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }
                    },
                    fileAttachment: {
                        display: "inline-flex",
                        alignItems: "baseline",
                        gap: 4,
                        maxWidth: 96,
                        marginInlineStart: S ? 4 : -2,
                        color: i(632079).Tj.text.tertiary,
                        verticalAlign: "baseline"
                    },
                    fileText: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: (null == v ? void 0 : v.fileCount) === 1 ? 76 : void 0
                    }
                }), [v, u, l, S]);
                return S || v ? (0, n.jsxs)("span", {
                    style: { ...w.commentText,
                        ...1 === u ? d.lineTruncationFlex : w.lineTruncation
                    },
                    children: [S ? (0, n.jsx)("span", {
                        style: w.singleLineTruncation,
                        children: S
                    }) : void 0, v ? (0, n.jsxs)("span", {
                        style: w.fileAttachment,
                        children: [(0, n.jsx)(i(16275).I, {
                            icon: v.iconFunction,
                            size: "sm",
                            style: d.fileIcon
                        }), (0, n.jsx)("span", {
                            style: w.fileText,
                            children: v.text ? ? (0, n.jsx)(i(109939).sA, { ...r.filesString,
                                values: {
                                    count: v.fileCount
                                }
                            })
                        })]
                    }) : void 0]
                }) : (0, n.jsx)("span", {
                    style: w.commentText,
                    children: c || null
                })
            }
        },
        428602: (e, t, i) => {
            i.d(t, {
                Y: () => s
            }), i(296540);
            var n = i(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 11.25 11.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.053 6.407a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.893 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286M5.159 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M7.053 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M8.947 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M10.84 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286m-5.681 1.894a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286"
                        }), (0, n.jsx)("path", {
                            d: "M4.25 2.375c-1.036 0-1.875.84-1.875 1.875v7.5c0 1.036.84 1.875 1.875 1.875h7.5c1.036 0 1.875-.84 1.875-1.875v-7.5c0-1.036-.84-1.875-1.875-1.875zm-.625 9.375V5.632h8.75v6.118c0 .345-.28.625-.625.625h-7.5a.625.625 0 0 1-.625-.625"
                        })]
                    })
                },
                s = (0, i(104509).wt)("viewCalendarSmall", o, "small")
        },
        431644: (e, t, i) => {
            i.d(t, {
                k: () => o
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.42 2.11 11.16 12.13",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M8 2.115c-.854 0-1.569.554-1.824 1.315a3.96 3.96 0 0 0-2.138 3.518v.895c0 .655-.238 1.287-.669 1.78l-.616.704c-.75.858-.141 2.202 1 2.202H5.89a2.156 2.156 0 0 0 4.218 0h2.139c1.14 0 1.75-1.344.999-2.202l-.616-.704a2.7 2.7 0 0 1-.669-1.78v-.895A3.96 3.96 0 0 0 9.824 3.43 1.92 1.92 0 0 0 8 2.115m-.669 1.839A.68.68 0 0 1 8 3.365c.34 0 .623.253.669.589l.048.353.33.138a2.71 2.71 0 0 1 1.665 2.503v.895c0 .958.348 1.882.978 2.603l.616.704a.078.078 0 0 1-.058.129H3.752a.078.078 0 0 1-.058-.129l.616-.704c.63-.72.978-1.645.978-2.603v-.895c0-1.126.686-2.093 1.665-2.503l.33-.138zM8 13.084c-.394 0-.735-.226-.9-.555h1.8c-.165.33-.506.556-.9.556"
                    })
                },
                o = (0, i(104509).wt)("bellSmall", n, "small")
        },
        444202: (e, t, i) => {
            i.d(t, {
                d: () => s
            }), i(296540);
            var n = i(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 0.26 16.55 16.61",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M11.376 3.125c-.24.374-.336.818-.282 1.25H5.25a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875V8.84a1.87 1.87 0 0 0 1.25-.711v6.621a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125v-9.5c0-1.174.951-2.125 2.125-2.125z"
                        }), (0, n.jsx)("path", {
                            d: "M18.51.57a.625.625 0 0 1 1.073.642l-3.656 6.094a.626.626 0 0 1-1.011.086l-2.437-2.844-.073-.105a.626.626 0 0 1 .93-.796l.092.086L15.3 5.918z"
                        })]
                    })
                },
                s = (0, i(104509).wt)("markRead", o, "default")
        },
        447483: (e, t, i) => {
            i.d(t, {
                R: () => s
            }), i(296540);
            var n = i(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.37 11.75 9.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M6.75 5.073a1.275 1.275 0 1 0 0 2.55 1.275 1.275 0 0 0 0-2.55"
                        }), (0, n.jsx)("path", {
                            d: "M4 3.375c-1.036 0-1.875.84-1.875 1.875v5.5c0 1.036.84 1.875 1.875 1.875h8c1.036 0 1.875-.84 1.875-1.875v-5.5c0-1.036-.84-1.875-1.875-1.875zM3.375 5.25c0-.345.28-.625.625-.625h8c.345 0 .625.28.625.625v2.537l-1.768-1.769a.575.575 0 0 0-.813 0L6.788 9.274l-1.531-1.53a.575.575 0 0 0-.814 0L3.375 8.811zm3.82 5.244 3.255-3.256 2.175 2.175v1.337c0 .345-.28.625-.625.625H4a.625.625 0 0 1-.625-.625v-.312L4.85 8.963l1.531 1.531a.575.575 0 0 0 .813 0"
                        })]
                    })
                },
                s = (0, i(104509).wt)("photoSmall", o, "small")
        },
        714050: (e, t, i) => {
            function n(e, t) {
                let {
                    value: n
                } = (0, i(815048).fJ)(i(656915).commentsDependency);
                return (0, i(682985).K8)(() => e && n ? n.discussionHelpers.getDiscussionsForSidebar({
                    blockStore: e,
                    currentUserId: e.userId,
                    ignoreAfterTime: t ? ? Date.now()
                }).filter(e => e.isDefined() && e.getCommentPointers().length > 0) : [], [n, e, t])
            }

            function o({
                navigableBlockStore: e
            }) {
                let t = n(e);
                return (0, i(682985).K8)(() => t.filter(t => (0, i(47354).s)({
                    discussionStore: t,
                    navigableBlockStore: e
                })), [t, e])
            }
            i.d(t, {
                B: () => o,
                S: () => n
            }), i(898992), i(354520)
        },
        785655: (e, t, i) => {
            i.d(t, {
                x: () => o
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.09 2.55 9.81 10.89",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M11.762 3.338a2.657 2.657 0 0 0-3.758 0L4.172 7.17a3.673 3.673 0 0 0 5.195 5.195l3.353-3.353a.625.625 0 0 0-.884-.884L8.484 11.48a2.423 2.423 0 1 1-3.427-3.427l3.832-3.832a1.407 1.407 0 0 1 1.99 1.99l-3.832 3.832a.391.391 0 0 1-.553-.553L8.41 7.575a.625.625 0 1 0-.884-.884L5.61 8.607a1.641 1.641 0 1 0 2.321 2.32l3.832-3.831a2.657 2.657 0 0 0 0-3.758"
                    })
                },
                o = (0, i(104509).wt)("paperClipSmall", n, "small")
        },
        970475: (e, t, i) => {
            i.d(t, {
                O: () => l
            }), i(898992), i(672577), i(581454);
            var n = i(296540),
                o = i(474848);
            let s = {
                flexGrow: 1
            };

            function l(e) {
                var t;
                let {
                    blockStore: l,
                    from: a,
                    buttonPopupStore: r,
                    renderType: d
                } = e, c = (0, i(533992).v3)(), u = (0, i(682985).K8)(() => l.isPageBlock(), [l]), p = (0, i(682985).K8)(() => l.getFollowSettingsKey(), [l]), g = (0, n.useCallback)(() => {
                    i(142215).zP({
                        environment: c,
                        pageId: l.pointer.id,
                        isCurrentlyFollowing: (0, i(366995).A)(p).following,
                        from: a
                    })
                }, [l.pointer.id, c, p, a]), m = (0, i(682985).K8)(() => i(66637).H8({
                    followSettingsKey: p,
                    environment: c,
                    blockStore: l,
                    from: a
                }), [p, c, l, a]), h = (0, i(67499).S)(), x = (0, i(960253).I)(() => ({
                    buttonContainer: {
                        display: "flex",
                        alignItems: "center",
                        color: i(632079).Tj.text.secondary,
                        borderRadius: 4,
                        marginInlineEnd: 0,
                        fontSize: i(699422).J.UIRegular.desktop,
                        ..."button" === d ? {
                            paddingInlineStart: 2,
                            paddingInlineEnd: 2
                        } : {
                            padding: "4px 10px"
                        }
                    }
                }), [d]), f = null == (t = m.find(e => i(66637).I7({
                    key: e.action.analyticsName,
                    userSelectedKey: p
                }))) ? void 0 : t.title;
                return u ? (0, o.jsx)(i(656252).A, {
                    popupType: i(656252).z.Popup,
                    alignmentToOrigin: "end",
                    placementToOrigin: "bottom",
                    sameWidthAsOrigin: "select" === d,
                    buttonPopupStore: r,
                    content: e => (0, o.jsx)(i(747369).A, {
                        menuType: i(649476).gu.Popup,
                        minWidth: 290,
                        maxHeight: "50vh",
                        children: (0, o.jsx)(i(530500).A, {
                            context: {
                                blocks: [],
                                environment: c,
                                publicEditMode: void 0,
                                pageContext: h
                            },
                            sections: [(0, i(233319).gy)({
                                key: "in-app-notifications-section",
                                render: e => (0, o.jsx)(i(844565).A, { ...e,
                                    title: "button" === d ? (0, o.jsx)(i(109939).sA, {
                                        id: "GetNotifiedDropdown.options.header",
                                        defaultMessage: "Page notification settings"
                                    }) : void 0
                                }),
                                actions: m.map(e => e.action)
                            })],
                            initialFocus: void 0,
                            onAccept: () => e.close()
                        })
                    }),
                    children: e => "select" === d ? (0, o.jsxs)(i(988022).p, { ...(0, i(63390).A)(e, {
                            onClick: g
                        }),
                        style: x.buttonContainer,
                        iconLeading: {
                            icon: i(431644).k,
                            size: "xs"
                        },
                        iconTrailing: {
                            icon: i(595453).arrowChevronSingleDownSmallIcon,
                            size: "xs"
                        },
                        children: [f, (0, o.jsx)("div", {
                            style: s
                        })]
                    }) : (0, o.jsx)(i(51831).m, {
                        placement: "bottom",
                        content: () => (0, o.jsx)(i(109939).sA, {
                            id: "GetNotifiedDropdown.button.tooltip",
                            defaultMessage: "Page notification settings"
                        }),
                        children: t => (0, o.jsx)(i(988022).p, { ...(0, i(63390).A)((0, i(63390).A)(t, {
                                onClick: g
                            }), e),
                            style: x.buttonContainer,
                            size: "sm",
                            iconLeading: {
                                icon: i(931118).r,
                                size: "default"
                            }
                        })
                    })
                }) : null
            }
        }
    }
]);