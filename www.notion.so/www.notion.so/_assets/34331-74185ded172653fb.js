"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [34331], {
        22148: (e, t, i) => {
            i.d(t, {
                J: () => n
            });

            function n(e) {
                return "form_editor" === e || "form_viewer" === e
            }
        },
        58011: (e, t, i) => {
            i.d(t, {
                O: () => a
            });
            var n = i(296540),
                o = i(474848);
            let r = {
                buttonStyle: {
                    color: i(632079).Tj.red.text.accentPrimary,
                    fontSize: i(418676).vQ
                },
                style0: {
                    marginInlineStart: 0
                }
            };

            function a(e) {
                let t, {
                        verificationState: a,
                        onChange: l,
                        blockId: s,
                        entrypoint: d
                    } = e,
                    c = (0, i(533992).v3)(),
                    u = (0, i(109939).tz)();
                switch (a.type) {
                    case "none":
                        break;
                    case "verified":
                    case "expired":
                        t = u.formatMessage(i(855126).n.removeVerificationProperty);
                        break;
                    case "archived":
                        t = u.formatMessage(i(855126).n.removeArchivedStatus);
                        break;
                    default:
                        (0, i(722371).HB)(a)
                }
                let p = (0, n.useCallback)(() => {
                    if ("none" === a.type) return;
                    let e = (0, i(435137).Ep)(a);
                    (0, i(787690).u)(c, {
                        action: "remove",
                        verification_type: e,
                        verification_page_id: s
                    }), l({
                        value: void 0,
                        metadata: {
                            action: "remove",
                            verification_type: e,
                            entrypoint: d
                        }
                    })
                }, [c, l, d, s, a]);
                return "none" === a.type ? null : (0, o.jsx)(i(844565).A, {
                    topBorder: !0,
                    children: (0, o.jsx)(i(95582).A, {
                        focused: !1,
                        icon: (0, o.jsx)(i(16275).I, {
                            icon: i(25094).xMarkSmallIcon,
                            size: "xs",
                            style: r.style0
                        }),
                        title: t,
                        onClick: p,
                        style: r.buttonStyle
                    })
                })
            }
        },
        65068: (e, t, i) => {
            i.d(t, {
                Z: () => r
            }), i(296540);
            var n = i(474848);
            let o = {
                headerStyle: {
                    padding: i(986939).A.isMobile ? 10 : 7,
                    paddingInlineStart: i(986939).A.isMobile ? 20 : 7,
                    background: i(986939).A.isMobile ? i(632079).Tj.popoverBackground : i(632079).Tj.tokenInputMenuItemBackground,
                    display: "flex",
                    alignItems: "center",
                    borderBottom: `1px solid ${i(632079).Tj.border.secondaryTranslucent}`
                }
            };

            function r({
                verificationState: e
            }) {
                return "none" === e.type ? null : (0, n.jsx)("div", {
                    style: o.headerStyle,
                    children: (0, n.jsx)(i(106142).r, {
                        verificationState: e,
                        fontSize: i(986939).A.isMobile ? i(699422).J.UIRegular.mobile : void 0
                    })
                })
            }
        },
        80362: (e, t, i) => {
            i.d(t, {
                E: () => o
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M3.125 4.25c0-.621.504-1.125 1.125-1.125h11.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H4.25A1.125 1.125 0 0 1 3.125 5.75zm1 3.875h11.75v7.625c0 .621-.504 1.125-1.125 1.125h-9.5a1.125 1.125 0 0 1-1.125-1.125zM8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                    })
                },
                o = (0, i(104509).wt)("archiveBoxFill", n, "fill")
        },
        82002: (e, t, i) => {
            i.d(t, {
                h: () => s
            });
            var n = i(296540),
                o = i(474848);
            let r = {
                    "search-modal": {
                        maxNumberOfShimmers: 8,
                        hideBorders: !1,
                        hidePathText: !1,
                        size: "md"
                    },
                    "search-modal-minimal": {
                        maxNumberOfShimmers: 8,
                        hideBorders: !0,
                        hidePathText: !1,
                        size: "md"
                    },
                    "mention-menu-page": {
                        maxNumberOfShimmers: 3,
                        hideBorders: !0,
                        hidePathText: !1,
                        size: "sm"
                    },
                    "mention-menu-people": {
                        maxNumberOfShimmers: 3,
                        hideBorders: !0,
                        hidePathText: !0,
                        size: "sm"
                    }
                },
                a = {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 5
                };

            function l(e) {
                let {
                    isLastShimmer: t,
                    variant: l
                } = e, {
                    hideBorders: s,
                    hidePathText: d,
                    size: c
                } = r[l], u = (0, n.useMemo)(() => (0, i(381453).XM)(["30%", "45%", "55%", "60%", "70%", "75%", "80%", "90%"]), []), p = (0, n.useMemo)(() => (0, i(381453).XM)(["10%", "15%", "20%", "25%", "30%", "35%", "55%", "70%"]), []), f = (0, i(960253).I)(() => {
                    let {
                        titleHeight: e,
                        pathHeight: n,
                        iconSize: o,
                        iconMarginInlineStart: r,
                        containerMarginBottom: a
                    } = "md" === c ? {
                        titleHeight: 18,
                        pathHeight: 12,
                        iconSize: i(104509).Ev.default,
                        iconMarginInlineStart: 6,
                        containerMarginBottom: 10
                    } : {
                        titleHeight: 14,
                        pathHeight: 10,
                        iconMarginInlineStart: 4,
                        iconSize: 18,
                        containerMarginBottom: 8
                    };
                    return {
                        resultContainer: {
                            display: "flex",
                            gap: 10,
                            boxShadow: s || t ? void 0 : `0 1px 0 ${i(632079).Tj.border.secondaryTranslucent}`,
                            marginTop: 8,
                            marginInlineEnd: 8,
                            marginBottom: a,
                            marginInlineStart: 6,
                            paddingBottom: 10 * !s
                        },
                        icon: {
                            width: o,
                            height: o,
                            borderRadius: 5,
                            marginInlineStart: r
                        },
                        title: {
                            height: e,
                            borderRadius: 5,
                            width: u
                        },
                        path: {
                            height: n,
                            borderRadius: 5,
                            width: p
                        }
                    }
                }, [s, t, u, p, c]);
                return (0, o.jsxs)("div", {
                    style: f.resultContainer,
                    children: [(0, o.jsx)(i(795830).P, {
                        style: f.icon
                    }), (0, o.jsxs)("div", {
                        style: a,
                        children: [(0, o.jsx)(i(795830).P, {
                            style: f.title
                        }), d ? void 0 : (0, o.jsx)(i(795830).P, {
                            style: f.path
                        })]
                    })]
                })
            }

            function s(e) {
                let {
                    resultsCount: t,
                    shouldShow: i,
                    variant: a
                } = e, {
                    maxNumberOfShimmers: s
                } = r[a], d = i ? Math.max(0, s - t) : 0;
                return (0, n.useMemo)(() => Array.from({
                    length: d
                }, (e, t) => ({
                    key: `shimmer-item-${t}`,
                    action: () => {},
                    render: () => (0, o.jsx)(l, {
                        isLastShimmer: t === d - 1,
                        variant: a
                    })
                })), [d, a])
            }
        },
        84697: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowSquarePathUpDownIcon: () => o,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.64 3.12 18.71 13.76",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M6.475 3.125a.625.625 0 1 0 0 1.25h7.975c.65 0 1.175.526 1.175 1.175v6.057l-1.408-1.408a.625.625 0 1 0-.884.884l2.475 2.475a.625.625 0 0 0 .884 0l2.475-2.475a.625.625 0 0 0-.884-.884l-1.408 1.408V5.55a2.425 2.425 0 0 0-2.425-2.425zM3.308 6.442a.625.625 0 0 1 .884 0l2.475 2.475a.625.625 0 1 1-.884.884L4.375 8.393v6.057c0 .649.526 1.175 1.175 1.175h7.975a.625.625 0 0 1 0 1.25H5.55a2.425 2.425 0 0 1-2.425-2.425V8.393L1.717 9.801a.625.625 0 1 1-.884-.884z"
                    })
                },
                o = (0, i(104509).wt)("arrowSquarePathUpDown", n, "default")
        },
        96443: (e, t, i) => {
            function n(e) {
                let {
                    environment: t,
                    blockStore: n,
                    verificationValue: o
                } = e, a = n.getPropertyStore(i(435137)._e.Verification), l = (0, i(561872).j2)(o), s = n.getPropertyStore(i(435137)._e.Owner), d = t.currentUser.id, c = d ? {
                    table: i(832375).oo9,
                    id: d
                } : void 0, u = n.pointer.spaceId;
                (0, i(377796).createAndCommit)({
                    userAction: "PageAddVerificationButton.verifyPage",
                    environment: t,
                    canUndo: !0,
                    cellTarget: u ? {
                        spaceWithId: u
                    } : void 0,
                    perform: e => {
                        i(41403).R9({
                            environment: t,
                            store: a,
                            value: l,
                            transaction: e
                        }), c && (0, i(421439).y4)({
                            transaction: e,
                            store: s,
                            operation: {
                                path: s.path,
                                pointer: s.pointer,
                                command: "addPersonAfter",
                                args: {
                                    pointer: c
                                }
                            }
                        }), r({
                            blockStore: n,
                            verificationValue: o,
                            transaction: e
                        })
                    }
                })
            }

            function o(e) {
                let {
                    environment: t,
                    blockStore: n,
                    verificationValue: o
                } = e, a = n.getPropertyStore(i(435137)._e.Verification), l = (0, i(561872).j2)(o), s = n.pointer.spaceId;
                (0, i(377796).createAndCommit)({
                    userAction: "PageVerificationBadge.updatePageVerification",
                    environment: t,
                    canUndo: !0,
                    cellTarget: s ? {
                        spaceWithId: s
                    } : void 0,
                    perform: e => {
                        i(41403).R9({
                            environment: t,
                            store: a,
                            value: l,
                            transaction: e
                        }), r({
                            blockStore: n,
                            verificationValue: o,
                            transaction: e
                        })
                    }
                })
            }

            function r(e) {
                let {
                    blockStore: t,
                    verificationValue: n,
                    transaction: o
                } = e, r = (0, i(435137).I7)(n);
                "archived" === r.type ? (0, i(421439).y4)({
                    store: t,
                    transaction: o,
                    operation: i(488307).op.update({
                        pointer: t.pointer,
                        path: [],
                        args: {
                            archived_by_id: r.actorPointer.id,
                            archived_by_table: r.actorPointer.table,
                            archived_time: Date.now()
                        }
                    })
                }) : void 0 !== t.getArchivedByIdWithoutTakingParentsIntoAccount() && (0, i(421439).y4)({
                    store: t,
                    transaction: o,
                    operation: i(488307).op.update({
                        pointer: t.pointer,
                        path: [],
                        args: {
                            archived_by_id: void 0,
                            archived_by_table: void 0,
                            archived_time: void 0
                        }
                    })
                })
            }
            i.d(t, {
                b: () => n,
                h: () => o
            })
        },
        106142: (e, t, i) => {
            i.d(t, {
                r: () => a
            }), i(296540);
            var n = i(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.26",
                    svg: (0, n.jsx)("path", {
                        d: "M10.833 16.321a.626.626 0 0 1 .162 1.24 7.7 7.7 0 0 1-1.99 0 .625.625 0 1 1 .162-1.24 6.4 6.4 0 0 0 1.666 0m-6.768-2.555a.625.625 0 0 1 .876.115c.34.442.736.838 1.178 1.178a.625.625 0 1 1-.762.99 7.7 7.7 0 0 1-1.407-1.406.626.626 0 0 1 .115-.877m10.994.114a.625.625 0 1 1 .99.763 7.7 7.7 0 0 1-1.406 1.407.626.626 0 0 1-.762-.991 6.4 6.4 0 0 0 1.178-1.178m-3.255-6.542a.625.625 0 0 1 1.072.642l-3 5a.626.626 0 0 1-1.01.086l-2-2.334a.625.625 0 0 1 .948-.813l1.436 1.674zM3.14 8.466a.626.626 0 0 1 .539.701 6.4 6.4 0 0 0 0 1.666.626.626 0 0 1-1.24.162 7.7 7.7 0 0 1 0-1.99.625.625 0 0 1 .7-.54m13.721.001a.625.625 0 0 1 .7.539 7.7 7.7 0 0 1 0 1.99.625.625 0 1 1-1.239-.162 6.4 6.4 0 0 0 0-1.666.626.626 0 0 1 .54-.701M5.357 3.95a.626.626 0 0 1 .762.991 6.4 6.4 0 0 0-1.178 1.178.625.625 0 1 1-.99-.762A7.7 7.7 0 0 1 5.356 3.95m8.41.115a.626.626 0 0 1 .877-.115c.528.406 1.001.88 1.407 1.407a.626.626 0 0 1-.991.762 6.4 6.4 0 0 0-1.178-1.178.625.625 0 0 1-.115-.876M10 2.375q.506 0 .995.064a.625.625 0 1 1-.162 1.24 6.4 6.4 0 0 0-1.666 0 .626.626 0 0 1-.162-1.24q.49-.063.995-.064"
                    })
                },
                r = (0, i(104509).wt)("checkmarkCircleDash", o, "default");

            function a(e) {
                let {
                    verificationState: t,
                    fontSize: o = i(642065).Mi
                } = e, a = (0, i(109939).tz)(), l = t.type, s = (0, i(960253).I)(() => ({
                    caption: {
                        fontVariantNumeric: "normal",
                        fontWeight: i(699422).Wy.regular,
                        color: i(632079).Tj.text.primary,
                        textTransform: "none",
                        letterSpacing: 0,
                        marginInlineStart: 6,
                        marginInlineEnd: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontSize: o,
                        lineHeight: i(642065).$g
                    }
                }), [o]);
                if ("none" === l) return null;
                let d = null,
                    c = null,
                    u = s.caption;
                switch (l) {
                    case "verified":
                        d = (0, n.jsx)(i(16275).I, {
                            icon: i(97956).badgeCheckFillIcon,
                            colorPalette: "blue",
                            colorVariant: "accentPrimary",
                            fitToViewBox: "horizontal"
                        }), c = t.isIndefinite ? (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Verified",
                            id: "VerificationPropertyButton.verifiedIndefinitely"
                        }) : (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Until {date}",
                            id: "VerificationPropertyButton.verifiedUntil",
                            values: {
                                date: i(931990).OH({
                                    dateTime: t.dateTimeRange.end,
                                    intl: a
                                })
                            }
                        });
                        break;
                    case "expired":
                        d = (0, n.jsx)(i(16275).I, {
                            icon: r,
                            colorVariant: "secondary",
                            fitToViewBox: "horizontal"
                        }), c = (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Expired {timeFromMoment}",
                            id: "VerificationPropertyButton.expired.text",
                            values: {
                                timeFromMoment: i(435137).F7(t.dateTimeRange.end.setLocale(a.locale))
                            }
                        });
                        break;
                    case "archived":
                        d = (0, n.jsx)(i(16275).I, {
                            icon: i(80362).E,
                            colorVariant: "tertiary",
                            fitToViewBox: "horizontal"
                        }), c = (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Archived",
                            id: "VerificationPropertyButton.archived.text"
                        });
                        break;
                    default:
                        (0, i(722371).HB)(l)
                }
                return (0, n.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    width: "100%",
                    children: [d, (0, n.jsx)("div", {
                        style: u,
                        children: c
                    })]
                })
            }
        },
        167834: (e, t, i) => {
            i.d(t, {
                W: () => l,
                e: () => a
            }), i(296540);
            var n = i(474848);
            let o = (0, i(109939).YK)({
                    me: {
                        id: "templateVariablePropertyValueComponent.templateVariables.text.me",
                        defaultMessage: "Person who duplicated page"
                    },
                    now: i(632754).H.nowText,
                    today: i(632754).H.todayText
                }),
                r = {
                    lineHeight: "20px"
                };

            function a(e) {
                return (0, n.jsx)(i(361724).C, {
                    fontColor: "light",
                    style: r,
                    children: (0, n.jsx)(l, {
                        templateVariableType: e.templateVariableType
                    })
                })
            }

            function l(e) {
                var t, r;
                let a, {
                        templateVariableType: l,
                        showRemoveButton: s,
                        onRemove: d,
                        style: c
                    } = e,
                    u = (0, i(109939).tz)(),
                    p = (0, i(960253).I)(() => ({
                        uiToken: {
                            background: i(632079).Tj.blue.background.secondaryTranslucent,
                            color: i(632079).Tj.blue.text.accentPrimary,
                            padding: "2px 4px",
                            width: "max-content",
                            ...c || {}
                        }
                    }), [c]);
                return (0, n.jsx)(i(376921).Ay, {
                    format: i(696654).NY.Medium,
                    isSingle: !0,
                    title: (t = l, r = u, "me" === t ? a = r.formatMessage(o.me) : "now" === t ? a = r.formatMessage(o.now) : "today" === t ? a = r.formatMessage(o.today) : (0, i(722371).HB)(t), a),
                    renderAvatar: () => {
                        var e;
                        let t;
                        return (e = l, (0, i(247438).pbt)(e) ? t = i(476719).personFillSmallIcon : (0, i(247438).UKc)(e) ? t = i(428602).Y : (0, i(722371).HB)(e), t)({
                            width: i(104509).Ev.xs,
                            height: i(104509).Ev.xs,
                            marginInlineEnd: 4
                        })
                    },
                    shouldShrink: !0,
                    onClickRemove: d,
                    showRemoveButton: !!s,
                    style: p.uiToken
                })
            }
        },
        176349: (e, t, i) => {
            function n(e) {
                let {
                    blockStore: t,
                    update: n
                } = e, o = function(e) {
                    switch (e) {
                        case "add":
                            return "page_verification_enabled";
                        case "update":
                            return "page_verification_edited";
                        case "remove":
                            return "page_verification_disabled";
                        default:
                            (0, i(722371).HB)(e)
                    }
                }(n.metadata.action), r = t.id, a = t.getAssociatedCollectionId(), l = t.getSpaceId(), s = n.metadata.entrypoint, d = a ? "db" : "non_db";
                if (a) {
                    let e = t.getAssociatedCollectionStore();
                    null != e && e.isPageTreeCollection() && (d = "wiki")
                }
                switch (o) {
                    case "page_verification_enabled":
                    case "page_verification_edited":
                        (0, i(104310).u)({
                            event: {
                                eventName: o,
                                eventProperties: {
                                    entrypoint: s,
                                    page_type: d,
                                    verification_type: n.metadata.verification_type,
                                    page_id: r,
                                    collection_id: a,
                                    space_id: l,
                                    expiration: n.metadata.expiration ? ? void 0,
                                    expiration_date: n.metadata.expiration_date ? ? void 0
                                }
                            }
                        });
                        break;
                    case "page_verification_disabled":
                        (0, i(104310).u)({
                            event: {
                                eventName: o,
                                eventProperties: {
                                    entrypoint: s,
                                    page_type: d,
                                    verification_type: n.metadata.verification_type,
                                    page_id: r,
                                    collection_id: a,
                                    space_id: l
                                }
                            }
                        });
                        break;
                    default:
                        (0, i(722371).HB)(o)
                }
            }

            function o(e) {
                let {
                    blockStore: t,
                    entrypoint: n,
                    action: o
                } = e, r = t.id, a = t.getAssociatedCollectionId(), l = t.getSpaceId(), s = a ? "db" : "non_db";
                if (a) {
                    let e = t.getAssociatedCollectionStore();
                    null != e && e.isPageTreeCollection() && (s = "wiki")
                }
                let d = (0, i(843641).i1)(t),
                    c = "none" === d.type ? void 0 : (0, i(435137).Ep)(d);
                (0, i(104310).u)({
                    event: {
                        eventName: "page_verification_owner_edited",
                        eventProperties: {
                            entrypoint: n,
                            page_type: s,
                            action: o,
                            verification_type: c,
                            page_id: r,
                            collection_id: a,
                            space_id: l
                        }
                    }
                })
            }
            i.d(t, {
                q: () => n,
                y: () => o
            })
        },
        179917: (e, t, i) => {
            i.d(t, {
                o: () => r
            }), i(296540);
            var n = i(474848);
            let o = {
                backButton: {
                    width: 24,
                    height: 24
                },
                closeButton: {
                    position: "absolute",
                    insetInlineEnd: 0,
                    marginInlineEnd: 8,
                    borderRadius: "100%"
                },
                menuTitle: {
                    flexGrow: 1,
                    fontWeight: i(699422).Wy.semibold,
                    fontSize: i(418676).vQ
                }
            };

            function r(e) {
                let {
                    label: t,
                    onClickBackButton: r,
                    onClose: a,
                    width: l,
                    showBottomBorder: s
                } = e, d = (0, i(109939).tz)(), c = (0, i(960253).I)(() => ({
                    container: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        height: 40,
                        width: l ? ? 320,
                        paddingInlineStart: 8,
                        paddingInlineEnd: 8,
                        borderBottom: s ? `1px solid ${i(632079).Tj.border.secondaryTranslucent}` : void 0
                    }
                }), [s, l]);
                return (0, n.jsxs)("div", {
                    style: c.container,
                    children: [(0, n.jsx)(i(374533).A, {
                        icon: i(374241).arrowStraightLeftSmallIcon,
                        ariaLabel: d.formatMessage({
                            id: "verificationMenuHeader.backButton.ariaLabel",
                            defaultMessage: "Back"
                        }),
                        onClick: () => r(),
                        style: o.backButton
                    }), (0, n.jsx)("div", {
                        style: o.menuTitle,
                        children: t
                    }), (0, n.jsx)(i(314566).A, {
                        onClose: () => a(),
                        style: o.closeButton
                    })]
                })
            }
        },
        314566: (e, t, i) => {
            i.d(t, {
                A: () => a
            });
            var n = i(296540),
                o = i(474848);
            let r = {
                    closeButtonIconStyle: i(986939).A.isMobile ? {
                        width: 18,
                        height: 18
                    } : {}
                },
                a = n.memo(function({
                    onClose: e,
                    style: t
                }) {
                    let n = (0, i(109939).tz)(),
                        a = (0, i(960253).I)(() => ({
                            closeButton: {
                                borderRadius: "100%",
                                width: i(986939).A.isMobile ? 28 : 22,
                                height: i(986939).A.isMobile ? 28 : 22,
                                ...t
                            }
                        }), [t]);
                    return (0, o.jsx)(i(374533).A, {
                        iconStyle: r.closeButtonIconStyle,
                        style: a.closeButton,
                        hovered: !0,
                        icon: i(519529).xMarkFillSmallIcon,
                        onClick: e,
                        ariaLabel: n.formatMessage({
                            id: "circleCloseButton.ariaLabel",
                            defaultMessage: "Close"
                        })
                    })
                })
        },
        345076: (e, t, i) => {
            i.d(t, {
                UZ: () => f,
                Yo: () => s,
                gf: () => a,
                sL: () => p,
                zC: () => c
            });
            var n = i(296540),
                o = i(474848);
            let r = {
                width: "1em",
                height: "1em",
                display: "inline-block",
                verticalAlign: "-0.15em",
                marginInlineEnd: "0.2em"
            };

            function a(e) {
                return "+" === e.insertionType ? (0, o.jsx)(s, {}) : (0, o.jsx)("span", {
                    style: r,
                    children: (0, o.jsx)(m, {
                        svg: i(330274).magnifyingGlassIcon.__iconDefinition.svg,
                        viewBox: i(330274).magnifyingGlassIcon.__iconDefinition.viewBox
                    })
                })
            }
            let l = {
                width: "1em",
                height: "1em",
                display: "inline-block",
                verticalAlign: "-0.15em",
                marginInlineEnd: "0.2em"
            };

            function s() {
                return (0, o.jsx)("span", {
                    style: l,
                    children: (0, o.jsx)(m, {
                        svg: i(581923).plusIcon.__iconDefinition.svg,
                        viewBox: i(581923).plusIcon.__iconDefinition.viewBox
                    })
                })
            }
            let d = {
                width: "1em",
                height: "1em",
                display: "inline-block",
                verticalAlign: "-0.15em",
                marginInlineEnd: "0.2em"
            };

            function c() {
                return (0, o.jsx)("span", {
                    style: d,
                    children: (0, o.jsx)(m, {
                        svg: i(919847).I.__iconDefinition.svg,
                        viewBox: i(919847).I.__iconDefinition.viewBox
                    })
                })
            }
            let u = {
                width: "1em",
                height: "1em",
                display: "inline-block",
                verticalAlign: "-0.15em",
                marginInlineEnd: "0.2em"
            };

            function p() {
                return (0, o.jsx)("span", {
                    style: u,
                    children: (0, o.jsx)(m, {
                        svg: i(584578).b.__iconDefinition.svg,
                        viewBox: i(584578).b.__iconDefinition.viewBox
                    })
                })
            }

            function f(e) {
                let {
                    store: t,
                    theme: n,
                    themeMode: o,
                    isSafariOrIOS: r,
                    emojiType: a,
                    currentUserId: l
                } = e;
                if (t instanceof i(970831).B) return (0, i(605351).h6)({
                    pageModel: t.getModel(),
                    pageRole: t.getRole(),
                    emojiType: a,
                    baseUrl: i(986939).A.domainBaseUrl,
                    getRecordModel: t.getRecordModel,
                    isClient: !0,
                    isSafariOrIOS: r,
                    currentUserId: l,
                    theme: n,
                    themeMode: o,
                    emojiData: i(753281).A.state
                });
                if (t instanceof i(356912).m) {
                    var s;
                    return (0, i(116825).e)({
                        collectionPointer: null == (s = t.getModel()) ? void 0 : s.pointer,
                        emojiType: a,
                        baseUrl: i(986939).A.domainBaseUrl,
                        getRecordModel: t.getRecordModel,
                        getRecordRole: t.inMemoryRecordCache.makeGetRecordRoleFn(l),
                        isSafariOrIOS: r,
                        isClient: !0,
                        currentUserId: l,
                        themeMode: o,
                        emojiData: i(753281).A.state
                    })
                }(0, i(722371).HB)(t)
            }

            function m(e) {
                let {
                    svg: t,
                    viewBox: r
                } = e, a = (0, n.useMemo)(() => {
                    let e = i(595290).A.renderToString((0, o.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: r,
                            children: t
                        })),
                        n = `data:image/svg+xml,${encodeURIComponent(e)}`;
                    return `url("${n}")`
                }, [t, r]), l = (0, i(960253).I)(() => ({
                    container: {
                        width: "100%",
                        height: "100%",
                        backgroundColor: i(632079).Tj.icon.secondary,
                        WebkitMaskImage: a,
                        maskImage: a,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat"
                    }
                }), [a]);
                return (0, o.jsx)("div", {
                    style: l.container
                })
            }
        },
        361724: (e, t, i) => {
            i.d(t, {
                C: () => r
            });
            var n = i(296540),
                o = i(474848);
            let r = n.forwardRef(function({
                children: e,
                fontColor: t,
                style: r,
                isRightAligned: a,
                isEmpty: l
            }, s) {
                let {
                    baseStyles: d
                } = (0, n.useContext)(i(422575).L8), c = (0, i(960253).I)(() => ({
                    textStyle: { ...l ? d.emptyTextStyle ? ? d.textStyle : d.textStyle,
                        ...r,
                        ...a ? {
                            justifyContent: "right",
                            textAlign: "end"
                        } : {},
                        ..."light" === t ? {
                            color: i(632079).Tj.text.tertiary
                        } : {}
                    }
                }), [l, d.emptyTextStyle, d.textStyle, r, a, t]);
                return (0, o.jsx)("div", {
                    ref: s,
                    style: c.textStyle,
                    children: e
                })
            })
        },
        391374: (e, t, i) => {
            i.d(t, {
                o: () => r
            });
            var n = i(296540),
                o = i(474848);
            let r = n.forwardRef(function({
                color: e = "primary",
                ...t
            }, n) {
                let r = (0, i(960253).I)(() => {
                        let n = "blue" === e ? i(632079).Tj.blue.text.accentPrimary : "secondary" === e ? i(632079).Tj.text.secondary : i(632079).Tj.text.primary;
                        return {
                            title: {
                                color: n,
                                fill: n
                            },
                            icon: {
                                fill: "blue" === e ? i(632079).Tj.blue.text.accentPrimary : void 0
                            },
                            buttonMenuItem: { ...t.style,
                                ...t.disabled ? {
                                    cursor: "not-allowed"
                                } : {}
                            }
                        }
                    }, [t.disabled, e, t.style]),
                    a = "blue" !== e ? e : void 0;
                return (0, o.jsx)(i(95582).A, {
                    ref: n,
                    ...t,
                    title: (0, o.jsx)("div", {
                        style: r.title,
                        children: t.title
                    }),
                    icon: (0, o.jsx)(i(16275).I, {
                        icon: i(581923).plusIcon,
                        style: r.icon,
                        colorVariant: a
                    }),
                    style: r.buttonMenuItem
                })
            })
        },
        422575: (e, t, i) => {
            i.d(t, {
                L8: () => r,
                O2: () => d,
                dm: () => s,
                qN: () => a
            });
            var n = i(296540),
                o = i(474848);
            let r = (0, n.createContext)({
                collectionContextStore: void 0,
                propertySchema: void 0,
                property: void 0,
                propertyFormat: void 0,
                isEmptyStore: i(546605).Store.createValue(!1),
                canEdit: !1,
                disabled: !0,
                shouldRenderTooltip: !1,
                shouldWrap: !1,
                baseStyles: {},
                surface: "table",
                containerRef: null,
                store: void 0,
                shouldShowMultiSelectCheckbox: void 0,
                propertyIndex: void 0,
                collectionSchemaStore: i(546605).Store.createValue(void 0)
            });
            r.displayName = "BlockPropertyValueContext";
            let a = n.memo(function(e) {
                var t, a;
                let {
                    children: s,
                    unmappedProperty: c,
                    property: u,
                    propertySchema: p,
                    containerRef: f
                } = e, {
                    surface: m,
                    disabled: v,
                    store: g,
                    tableWrap: y,
                    collectionStore: h,
                    shouldSetCellHeight: x,
                    isLast: b,
                    locked: M,
                    showIfEmpty: S,
                    shouldShowMultiSelectCheckbox: j,
                    propertyIndex: w,
                    propertyModule: T,
                    formQuestionStore: C,
                    formDataStore: A,
                    onClose: I,
                    collectionViewStore: _
                } = e.innerProps, k = (0, i(533992).v3)(), {
                    value: V
                } = (0, i(815048).fJ)(i(864850).T.formulas), B = (0, i(713311).Ks)(), [P, R] = (0, i(682985).K8)(() => {
                    let e = null == B ? void 0 : B.getPropertyFormat(c ? ? u),
                        t = !1;
                    return A && C && (t = !!A.getQuestionError(C.id)), [e, t]
                }, [B, A, C, u, c], {
                    equalityFn: i(381453).n4
                }), D = (0, n.useMemo)(() => new(i(345426)).ComputedStore(() => {
                    var e;
                    return (null == A || null == (e = A.getFormState()) ? void 0 : e.collectionSchema) || h.getSchema()
                }, {
                    debugName: "BlockPropertyValueContext.collectionSchemaStore"
                }), [h, A]), E = (0, i(366318).S)(g), H = d({
                    store: g,
                    collectionStore: h,
                    property: u,
                    disabled: v,
                    surface: m,
                    propertySchema: p,
                    collectionContextStore: B,
                    writeStateType: "edit"
                }), O = (t = m, a = y, "page" === t || "table" === t && a || "board" === t && a || "gallery" === t && a || "feed" === t && a || "form_viewer" === t), z = T && "style" in T && "large" === T.style, U = (0, i(916769).x7)({
                    shouldSetCellHeight: x,
                    surface: m,
                    shouldWrap: O,
                    isLast: b,
                    locked: M,
                    disabled: v,
                    showIfEmpty: S,
                    isInvalidFormAnswer: R,
                    isLargeModule: z,
                    collectionViewStore: _
                }), F = function(e) {
                    let {
                        store: t,
                        collectionSchemaStore: n,
                        property: o,
                        propertySchema: r,
                        surface: a,
                        isExternallyImportedAndSyncedPage: s,
                        environment: d,
                        formulasModule: c
                    } = e;
                    return (0, i(682985).K8)(() => "board" === a || "gallery" === a || "list" === a || "relation" === a || "relation_section" === a || "feed" === a || ("mini" === a ? !l({
                        store: t,
                        collectionSchema: n.state,
                        property: o,
                        propertySchemaType: null == r ? void 0 : r.type,
                        formulasModule: c,
                        environment: d
                    }) : ("page" === a || "compact_page" === a || "table" === a || "form_viewer" === a || "form_editor" === a || "property_module" === a || "calendar" === a || "timeline" === a) && s), [n, d, a, c, s, o, null == r ? void 0 : r.type, t])
                }({
                    store: g,
                    collectionSchemaStore: D,
                    property: u,
                    propertySchema: p,
                    surface: m,
                    isExternallyImportedAndSyncedPage: E,
                    environment: k,
                    formulasModule: V
                }), N = (0, n.useMemo)(() => {
                    let e;
                    return {
                        store: g,
                        collectionContextStore: B,
                        property: u,
                        propertySchema: p,
                        propertyFormat: P,
                        isEmpty: !1,
                        canEdit: H,
                        disabled: v,
                        shouldRenderTooltip: F,
                        shouldWrap: O,
                        baseStyles: U,
                        surface: m,
                        containerRef: f,
                        shouldShowMultiSelectCheckbox: j,
                        propertyIndex: w,
                        isExternallyImportedAndSyncedPage: E,
                        propertyModule: T,
                        onClose: I,
                        collectionSchemaStore: D,
                        get isEmptyStore() {
                            return e || (e = new(i(345426)).ComputedStore(() => l({
                                store: g,
                                collectionSchema: D.state,
                                property: u,
                                propertySchemaType: null == p ? void 0 : p.type,
                                formulasModule: V,
                                environment: k
                            }), {
                                debugName: "BlockPropertyValueContext.isEmptyStore"
                            })), e
                        }
                    }
                }, [g, B, u, p, P, H, v, F, O, U, m, f, j, w, E, T, I, D, k, V]);
                return (0, o.jsx)(r.Provider, {
                    value: N,
                    children: s
                })
            });

            function l(e) {
                let {
                    store: t,
                    collectionSchema: n,
                    property: o,
                    propertySchemaType: r,
                    formulasModule: a,
                    environment: l
                } = e;
                return !!o && !!t && !!t.isDefined() && !!n && "checkbox" !== r && "button" !== r && "created_time" !== r && "created_by" !== r && "last_edited_time" !== r && "last_edited_by" !== r && "formula" !== r && "rollup" !== r && "auto_increment_id" !== r && (0, i(175567).r)({
                    block: t.getModel(),
                    property: o,
                    schema: n,
                    getRecordModel: t.getRecordModel,
                    userTimeZone: (0, i(714350).P)(),
                    intl: i(962299).A.getIntl(),
                    userId: l.currentUser.id,
                    experimentService: i(218744).default,
                    collectionFeatureGates: (0, i(457103).i)(),
                    formulasModule: a,
                    spaceIdCreator: l.idCreator.getSpaceIdCreatorSync(t.getSpaceId()),
                    getRelationEdgeList: (0, i(323082).Y)({
                        environment: l,
                        spaceId: t.getSpaceId()
                    })
                })
            }

            function s(e) {
                let {
                    store: t,
                    collectionSchema: n,
                    property: o,
                    propertySchema: r,
                    environment: a
                } = e, {
                    value: s
                } = (0, i(815048).fJ)(i(864850).T.formulas);
                return (0, i(682985).K8)(() => l({
                    store: t,
                    collectionSchema: n,
                    property: o,
                    propertySchemaType: null == r ? void 0 : r.type,
                    formulasModule: s,
                    environment: a
                }), [n, a, o, null == r ? void 0 : r.type, t, s], {
                    debugName: "BlockPropertyValueContext.useIsBPVEmpty"
                })
            }

            function d(e) {
                let {
                    store: t,
                    collectionStore: n,
                    property: o,
                    disabled: r,
                    surface: a,
                    propertySchema: l,
                    collectionContextStore: s,
                    writeStateType: d
                } = e;
                return (0, i(682985).K8)(() => {
                    var e, c;
                    if (!t || !n || !o || "calendar" === a || "timeline" === a || (0, i(235089).u)(o) || (0, i(9247).z3)(l) || (0, i(973681).Lp)({
                            collectionStore: n,
                            property: o,
                            propertySchema: l
                        }) || null != s && s.isUnlistedViewStore.state || o === i(511791).hx || "comment" === d && !(0, i(512845).SF)(t.getSystemBlockTypeStore().getValue())) return !1;
                    if (r || !t.canEdit() || (0, i(444285).B)(t).state) return "edit" !== d && t.canComment() && !(0, i(88527).O)(t);
                    let u = (0, i(23803).JD)(n);
                    if ((0, i(973681).ni)({
                            store: t,
                            collectionStore: n,
                            collectionContextStore: s,
                            propertySchema: l,
                            property: o,
                            isJiraTwoWaySyncEnabled: u
                        }) || !n.isExternallyImportedAndSyncedCollection() && (0, i(561872).VF)(t.getModel(), o, t.getRecordModel)) return !1;
                    if (null != l && l.synced_permissions) switch (l.synced_permissions) {
                        case "read_only":
                            return !1;
                        case "read_write":
                            break;
                        default:
                            (0, i(722371).HB)(l.synced_permissions)
                    }
                    return !(t.isType("transcription") && (0, i(247438).w9s)(null == (e = t.getTitleStore()) ? void 0 : e.getValue()) || t.isType("transcription") && (null == (c = t.getFormat()) ? void 0 : c.transcription_calendar_event) !== void 0 && "title" === o)
                }, [a, o, l, n, s, r, t, d], {
                    debugName: `BlockPropertyValueContext.useWriteState|${d}`
                })
            }
        },
        571314: (e, t, i) => {
            i.d(t, {
                C: () => d
            });
            var n = i(296540);
            i(944114), i(898992), i(737550);
            var o = i(474848);
            let r = {
                disabledButton: {
                    opacity: .7
                },
                redStyling: {
                    color: i(632079).Tj.red.text.accentPrimary
                },
                buttonRightContainer: {
                    display: "flex",
                    alignItems: "center",
                    maxWidth: 150,
                    gap: 2,
                    color: i(632079).Tj.icon.secondary
                },
                buttonRightText: {
                    color: i(632079).Tj.icon.secondary,
                    fontSize: i(986939).A.isMobile ? i(699422).J.UIRegular.mobile : i(699422).J.UISmall.desktop
                },
                footer: {
                    color: i(632079).Tj.text.secondary,
                    fontSize: i(699422).J.UISmall.desktop,
                    borderTop: i(986939).A.isMobile ? `1px solid ${i(632079).Tj.border.secondaryTranslucent}` : void 0
                }
            };

            function a(e) {
                let t, {
                        onClose: n,
                        blockStore: a,
                        setVerificationMenuDisplay: l
                    } = e,
                    s = (0, i(533992).v3)(),
                    d = (0, i(533992).Y0)(),
                    c = (0, i(109939).tz)(),
                    u = (0, i(682985).K8)(() => (0, i(843641).i1)(a), [a]),
                    p = "verified" === u.type || "expired" === u.type || "none" === u.type,
                    f = "verified" === u.type || "expired" === u.type,
                    m = (0, i(682985).K8)(() => a.isArchived() ? ? !1, [a]),
                    v = (0, i(682985).K8)(() => {
                        let {
                            verificationOwners: e
                        } = (0, i(843641).h4)({
                            blockStore: a
                        }), t = e.length;
                        if (t <= 0) return c.formatMessage(i(855126).n.noOwners);
                        let n = e[0],
                            o = (0, i(197018).xC)({
                                pointer: n,
                                getRecordModel: a.getRecordModel
                            }),
                            r = null == o ? void 0 : o.asActor,
                            l = null == r ? void 0 : r.getDisplayName(c);
                        return l ? c.formatMessage(i(855126).n.ownersAttribution, {
                            actorName: l,
                            numOtherActors: t - 1
                        }) : c.formatMessage(i(855126).n.noOwners)
                    }, [a, c]),
                    g = (0, i(682985).K8)(() => a.canEdit(), [a]),
                    y = (0, i(682985).K8)(() => {
                        let {
                            verificationOwners: e
                        } = (0, i(843641).h4)({
                            blockStore: a
                        }), t = s.currentUser.id;
                        return e.some(e => e.id === t)
                    }, [a, s.currentUser]),
                    h = "none" !== u.type && (0, o.jsx)("div", {
                        style: r.footer,
                        children: (0, o.jsx)(i(782268).d, {
                            verificationState: u,
                            getRecordModel: a.getRecordModel,
                            actorPointer: u.actorPointer
                        })
                    }),
                    x = p ? i(855126).n.verificationMenuTitle : i(855126).n.verificationMenuTitleArchived;
                t = i(986939).A.isMobile ? {
                    menuType: i(649476).gu.Modal,
                    title: c.formatMessage(x),
                    right: (0, o.jsx)(i(109939).sA, { ...i(789722).W.done
                    }),
                    onClickRight: n,
                    footer: h,
                    enableMobileRefresh: d.isTablet
                } : {
                    menuType: i(649476).gu.Popup,
                    width: 320,
                    footer: h
                };
                let b = [];
                return p && !m && b.push({
                    key: "Expiration",
                    render: e => {
                        let t = c.formatMessage(i(855126).n.noExpiration);
                        "verified" !== u.type || u.isIndefinite ? "expired" === u.type && (t = i(931990).OH({
                            dateTime: u.dateTimeRange.end,
                            intl: c,
                            shortenDateAndRange: !0
                        })) : t = i(931990).OH({
                            dateTime: u.dateTimeRange.end,
                            intl: c,
                            shortenDateAndRange: !0
                        });
                        let n = !y,
                            a = (0, o.jsxs)("div", {
                                style: r.buttonRightContainer,
                                children: [(0, o.jsx)(i(324489).V, {
                                    style: r.buttonRightText,
                                    showTooltipWhenTruncated: !0,
                                    children: t
                                }), y ? (0, o.jsx)(i(16275).I, {
                                    icon: i(491469).arrowChevronSingleRightSmallIcon,
                                    size: "sm"
                                }) : void 0]
                            });
                        return (0, o.jsx)(i(51831).m, {
                            placement: "right",
                            content: () => c.formatMessage(i(855126).n.nonOwnersCannotEditVerification),
                            disableTooltip: !n,
                            children: t => (0, o.jsx)(i(95582).A, { ...e,
                                ...t,
                                title: c.formatMessage(i(855126).n.expirationProperty),
                                icon: (0, o.jsx)(i(16275).I, {
                                    icon: i(998172).D
                                }),
                                right: a,
                                disabled: n,
                                buttonStyle: n ? r.disabledButton : void 0
                            })
                        })
                    },
                    action: () => {
                        l("expiration")
                    }
                }), m || b.push({
                    key: "Verifier",
                    render: e => (0, o.jsx)(i(95582).A, { ...e,
                        title: c.formatMessage(i(855126).n.verifierProperty),
                        icon: (0, o.jsx)(i(16275).I, {
                            icon: i(465128).personFillIcon
                        }),
                        right: (0, o.jsxs)("div", {
                            style: r.buttonRightContainer,
                            children: [(0, o.jsx)(i(324489).V, {
                                style: r.buttonRightText,
                                showTooltipWhenTruncated: !0,
                                children: v
                            }), (0, o.jsx)(i(16275).I, {
                                icon: i(491469).arrowChevronSingleRightSmallIcon,
                                size: "sm"
                            })]
                        }),
                        disabled: !g
                    }),
                    action: () => {
                        l("owner")
                    }
                }), b.push({
                    key: "Remove",
                    render: e => {
                        let t = !y || !f;
                        return (0, o.jsx)(i(51831).m, {
                            placement: "right",
                            content: () => c.formatMessage(p ? i(855126).n.nonOwnerCannotRemoveVerification : i(855126).n.nonOwnerCannotRemoveArchival),
                            disableTooltip: !t,
                            children: n => (0, o.jsx)(i(95582).A, { ...e,
                                ...n,
                                title: c.formatMessage(p ? i(855126).n.removeVerificationProperty : i(855126).n.removeArchivedStatus),
                                icon: (0, o.jsx)(i(16275).I, {
                                    icon: i(117152).xMarkIcon
                                }),
                                style: r.redStyling,
                                disabled: t,
                                buttonStyle: t ? r.disabledButton : void 0
                            })
                        })
                    },
                    action: () => {
                        if ("none" !== u.type) {
                            var e;
                            e = {
                                value: void 0,
                                metadata: {
                                    action: "remove",
                                    verification_type: (0, i(435137).Ep)(u),
                                    entrypoint: "page_menu"
                                }
                            }, i(96443).h({
                                environment: s,
                                blockStore: a,
                                verificationValue: e.value
                            }), (0, i(176349).q)({
                                environment: s,
                                blockStore: a,
                                update: e
                            }), n()
                        }
                    }
                }), (0, o.jsx)(i(747369).A, { ...t,
                    children: (0, o.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        initialFocus: 0,
                        sections: [{
                            key: "Verification Configuration",
                            render: e => (0, o.jsx)(i(844565).A, { ...e,
                                hideTitle: i(986939).A.isMobile,
                                title: c.formatMessage(x),
                                disableMobilePadding: !0,
                                disableMobileBorders: !0
                            }),
                            items: b
                        }]
                    })
                })
            }
            var l = () => i(421439);

            function s(e) {
                let {
                    blockStore: t,
                    onClose: n
                } = e, r = (0, i(533992).v3)(), a = (0, i(109939).tz)(), {
                    verifierValue: s,
                    isDefaultUnpersistedValue: d
                } = (0, i(682985).K8)(() => {
                    let {
                        verificationOwners: e,
                        isCreatedByDefault: n
                    } = (0, i(843641).h4)({
                        blockStore: t
                    });
                    return {
                        verifierValue: e,
                        isDefaultUnpersistedValue: !!n
                    }
                }, [t]);
                return (0, o.jsx)(i(893242).gw, {
                    value: s,
                    surface: "page",
                    valueIsUnpersistedDefaultValue: d,
                    propertySchema: {
                        name: a.formatMessage(i(855126).n.verifierProperty),
                        type: "person",
                        limit: void 0,
                        default: "created_by"
                    },
                    schema: {},
                    insertChar: void 0,
                    disabled: !1,
                    onChange: e => {
                        let n, a;
                        n = t.getPropertyStore(i(435137)._e.Owner), a = t.pointer.spaceId, "personPropertyMenuUpdateAddPerson" === e.type ? ((0, i(377796).createAndCommit)({
                            userAction: "PageVerificationBadge.addVerifier",
                            environment: r,
                            canUndo: !0,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            perform: t => {
                                for (let i of e.newValues)(0, l().y4)({
                                    transaction: t,
                                    store: n,
                                    operation: {
                                        path: n.path,
                                        pointer: n.pointer,
                                        command: "addPersonAfter",
                                        args: {
                                            pointer: i
                                        }
                                    }
                                })
                            }
                        }), (0, i(176349).y)({
                            environment: r,
                            blockStore: t,
                            entrypoint: "breadcrumbs",
                            action: "add"
                        })) : "personPropertyMenuUpdateRemovePerson" === e.type ? 1 === s.length ? i(436555).D6({
                            label: (0, o.jsx)(i(109939).sA, {
                                id: "pageVerification.removeLastVerifier.error",
                                defaultMessage: "At least one owner is required for verification."
                            })
                        }) : ((0, i(377796).createAndCommit)({
                            userAction: "PageVerificationBadge.removeVerifier",
                            environment: r,
                            canUndo: !0,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            perform: t => {
                                (0, l().y4)({
                                    transaction: t,
                                    store: n,
                                    operation: {
                                        path: n.path,
                                        pointer: n.pointer,
                                        command: "removePerson",
                                        args: {
                                            pointer: e.removedValue
                                        }
                                    }
                                })
                            }
                        }), (0, i(176349).y)({
                            environment: r,
                            blockStore: t,
                            entrypoint: "breadcrumbs",
                            action: "remove"
                        })) : "personPropertyMenuUpdateReplacePerson" === e.type ? ((0, i(377796).createAndCommit)({
                            userAction: "PageVerificationBadge.replaceVerifier",
                            environment: r,
                            canUndo: !0,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            perform: t => {
                                (0, l().y4)({
                                    transaction: t,
                                    store: n,
                                    operation: {
                                        path: n.path,
                                        pointer: n.pointer,
                                        command: "addPersonAfter",
                                        args: {
                                            pointer: e.newValue
                                        }
                                    }
                                })
                            }
                        }), (0, i(176349).y)({
                            environment: r,
                            blockStore: t,
                            entrypoint: "breadcrumbs",
                            action: "replace"
                        })) : (0, i(722371).HB)(e)
                    },
                    onDismiss: n,
                    parentStore: t,
                    isTemplatePage: !1,
                    formQuestionStore: void 0,
                    showDoneButton: !0,
                    excludeGuests: !0
                })
            }

            function d(e) {
                let {
                    onClose: t,
                    blockStore: r,
                    entrypoint: l
                } = e, [s, d] = (0, n.useState)("mainVerificationMenu");
                return "mainVerificationMenu" === s ? (0, o.jsx)(a, {
                    onClose: t,
                    blockStore: r,
                    setVerificationMenuDisplay: d
                }) : "owner" === s ? (0, o.jsx)(c, {
                    blockStore: r,
                    onClose: i(986939).A.isMobile ? () => d("mainVerificationMenu") : t,
                    setVerificationMenuDisplay: d
                }) : "expiration" === s ? (0, o.jsx)(u, {
                    blockStore: r,
                    onClose: i(986939).A.isMobile ? () => d("mainVerificationMenu") : t,
                    setVerificationMenuDisplay: d,
                    entrypoint: l
                }) : void(0, i(722371).HB)(s)
            }

            function c(e) {
                let {
                    onClose: t,
                    blockStore: n,
                    setVerificationMenuDisplay: r
                } = e, a = (0, i(109939).tz)();
                return (0, o.jsxs)(o.Fragment, {
                    children: [i(986939).A.isMobile ? void 0 : (0, o.jsx)(i(179917).o, {
                        label: p(a, "owner"),
                        onClickBackButton: () => r("mainVerificationMenu"),
                        onClose: t,
                        showBottomBorder: !0,
                        width: 350
                    }), (0, o.jsx)(s, {
                        blockStore: n,
                        onClose: t
                    })]
                })
            }

            function u(e) {
                let {
                    onClose: t,
                    blockStore: n,
                    setVerificationMenuDisplay: r,
                    entrypoint: a
                } = e, l = (0, i(533992).v3)(), s = (0, i(109939).tz)(), d = (0, i(682985).K8)(() => n.getPropertyStore(i(435137)._e.Verification).getValue(), [n]);
                return (0, o.jsx)(i(787690).y, {
                    propertyName: "Verification Status",
                    onChange: e => {
                        i(96443).h({
                            environment: l,
                            blockStore: n,
                            verificationValue: e.value
                        }), (0, i(176349).q)({
                            environment: l,
                            blockStore: n,
                            update: e
                        })
                    },
                    verificationValue: (0, i(435137).U1)(d),
                    getRecordModel: n.getRecordModel,
                    blockId: n.id,
                    onClose: t,
                    showTitle: i(986939).A.isMobile,
                    showRemoveVerificationButton: i(986939).A.isMobile,
                    showVerificationFooter: i(986939).A.isMobile,
                    showCurrentStatusHeader: i(986939).A.isMobile,
                    showCustomHeader: !i(986939).A.isMobile,
                    customHeader: !i(986939).A.isMobile && (0, o.jsx)(i(179917).o, {
                        label: p(s, "expiration"),
                        onClickBackButton: () => r("mainVerificationMenu"),
                        onClose: t,
                        showBottomBorder: !0,
                        width: 320
                    }),
                    entrypoint: a
                })
            }

            function p(e, t) {
                return "expiration" === t ? e.formatMessage(i(855126).n.expirationProperty) : "owner" === t ? e.formatMessage(i(855126).n.verifierProperty) : "mainVerificationMenu" === t ? null : void(0, i(722371).HB)(t)
            }
        },
        782268: (e, t, i) => {
            i.d(t, {
                d: () => a
            }), i(296540);
            var n = i(474848);
            let o = {
                    padding: "8px 14px"
                },
                r = {
                    marginBottom: 4
                };

            function a(e) {
                let t, {
                        getRecordModel: a,
                        actorPointer: l,
                        verificationState: s
                    } = e,
                    d = (0, i(109939).tz)(),
                    c = (0, i(682985).K8)(() => (0, i(197018).lR)(d, (0, i(197018).xC)({
                        pointer: l,
                        getRecordModel: a
                    })), [a, d, l]);
                switch (s.type) {
                    case "none":
                        return null;
                    case "verified":
                    case "expired":
                        t = (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Last verified by {user}",
                            id: "VerificationMetadata.lastVerified",
                            values: {
                                user: c
                            }
                        });
                        break;
                    case "archived":
                        t = (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Archived by {user}",
                            id: "VerificationMetadata.archived",
                            values: {
                                user: c
                            }
                        });
                        break;
                    default:
                        (0, i(722371).HB)(s)
                }
                let u = (0, i(435137).gi)(s);
                return (0, n.jsxs)("div", {
                    style: o,
                    children: [(0, n.jsx)(i(324489).V, {
                        isSmall: !0,
                        isSecondaryColor: !0,
                        isMultiline: !0,
                        style: r,
                        children: t
                    }), (0, n.jsx)(i(324489).V, {
                        isSmall: !0,
                        isSecondaryColor: !0,
                        children: (0, i(931990).OH)({
                            dateTime: u,
                            intl: d
                        })
                    })]
                })
            }
        },
        785267: (e, t, i) => {
            i.d(t, {
                A: () => r
            });
            var n = i(296540),
                o = i(474848);
            let r = n.forwardRef(function(e, t) {
                let {
                    onClose: r,
                    persistOnClose: s,
                    content: d,
                    stopClickPropagation: c,
                    onClick: u,
                    disablePopup: p,
                    disabled: f,
                    forceInitialInbound: m,
                    children: v,
                    originGap: g,
                    borderRadius: y,
                    popupWrapStyle: h
                } = e, x = (0, i(682985).uB)(e.buttonPopupStore, i(510969).A);
                (0, n.useEffect)(() => () => {
                    x.setState({
                        open: !1
                    })
                }, [x]);
                let b = (0, n.useCallback)(() => a(r, s, x), [r, s, x]),
                    M = (0, n.useCallback)(() => (0, o.jsx)(l, {
                        onClose: r,
                        persistOnClose: s,
                        content: d,
                        buttonPopupStore: x
                    }), [r, s, d, x]),
                    S = (0, n.useCallback)(e => {
                        var t, n, o, r, a;
                        return t = e, n = c, o = u, r = p, a = x, void(n && (null == t || t.stopPropagation()), !(t && (0, i(85520).V)(t)) && (o && o(t), r || a.setState({ ...a.state,
                            open: !0
                        })))
                    }, [c, u, p, x]),
                    j = v ? v({ ...e,
                        onClick: f ? i(763230).D_ : S
                    }) : null,
                    w = (0, i(682985).K8)(() => x.state.open, [x]);
                return (0, o.jsx)(i(182718).zD, {
                    ref: t,
                    ...e,
                    forceInitialInbound: !!m,
                    content: M,
                    open: w,
                    onDismiss: b,
                    originGap: g,
                    borderRadius: y,
                    popupWrapStyle: h,
                    trapFocus: !0,
                    children: j
                })
            });

            function a(e, t, i) {
                e && e(), t || i.reset()
            }

            function l({
                onClose: e,
                persistOnClose: t,
                content: r,
                buttonPopupStore: s
            }) {
                let d = (0, n.useCallback)(() => a(e, t, s), [e, t, s]),
                    c = (0, i(682985).K8)(() => r({
                        close: d
                    }), [r, d], {
                        silenceRerenderDefender: !0
                    });
                return (0, o.jsx)(o.Fragment, {
                    children: c
                })
            }
        },
        787690: (e, t, i) => {
            i.d(t, {
                y: () => c,
                u: () => u
            });
            var n = i(296540),
                o = i(474848);
            let r = (0, i(109939).YK)({
                    placeholder: {
                        id: "VerificationExpiryMenu.pickSpecificDate.placeholder",
                        defaultMessage: "Pick a date"
                    }
                }),
                a = {
                    mobileContainerStyle: {
                        paddingBottom: 10
                    },
                    calendar: i(986939).A.isMobile ? {
                        padding: "16px 14px 16px",
                        borderBottom: `1px solid ${i(632079).Tj.border.secondaryTranslucent}`,
                        background: i(632079).Tj.popoverBackground,
                        marginTop: 27,
                        boxShadow: `0 -1px 0 ${i(632079).Tj.border.secondaryTranslucent}`
                    } : {},
                    input: i(986939).A.isMobile ? {
                        padding: "16px 0",
                        marginTop: 0
                    } : {}
                };

            function l(e) {
                let t = (0, i(109939).tz)(),
                    {
                        onChange: l,
                        clearCustomDatePicker: s,
                        verificationState: d,
                        addExtraTopPadding: c
                    } = e,
                    u = (0, n.useRef)(e.today),
                    p = (0, n.useRef)(e.today.plus({
                        days: 1
                    })),
                    [f, m] = (0, n.useState)(!1),
                    v = (0, i(682985).O$)(i(97892).X),
                    g = "verified" !== d.type || d.isIndefinite ? void 0 : d.dateTimeRange.end,
                    y = (0, i(960253).I)(() => ({
                        containerStyle: {
                            paddingTop: c ? 12 : 4,
                            paddingBottom: 12
                        }
                    }), [c]);
                return (0, o.jsxs)(i(844565).A, {
                    mobileStyle: a.mobileContainerStyle,
                    style: y.containerStyle,
                    disableMobilePadding: !0,
                    children: [(0, o.jsx)(i(695760).A, {
                        placeholder: t.formatMessage(r.placeholder),
                        focused: f,
                        value: "verified" !== e.verificationState.type || e.verificationState.isIndefinite ? void 0 : i(25825).lN(e.verificationState.dateTimeRange.end),
                        onUpdate: e => {
                            if (e.error) return;
                            let t = e.value && i(25825).Dz(e.value);
                            t ? l({
                                range: {
                                    start: u.current,
                                    end: t.start
                                }
                            }) : s()
                        },
                        onFocus: () => m(!0),
                        onBlur: () => m(!1),
                        onClearButtonClick: s,
                        hideClearButton: !0,
                        style: a.input
                    }), (0, o.jsx)("div", {
                        style: a.calendar,
                        children: (0, o.jsx)(i(151012).A, {
                            firstDayOfWeek: v,
                            value: (null == g ? void 0 : g.toMillis()) || p.current.toMillis(),
                            selectValue: !!g,
                            onChange: e => {
                                l({
                                    range: {
                                        start: u.current,
                                        end: i(906745).DateTime.fromMillis(e)
                                    },
                                    option: "custom"
                                })
                            },
                            disabledDays: {
                                before: new Date(p.current.toMillis())
                            },
                            className: "notion-date-property-menu"
                        })
                    })]
                })
            }
            i(581454);
            let s = {
                title: {
                    fontSize: i(418676).vQ,
                    color: i(632079).Tj.text.primary
                },
                disabledTitle: {
                    color: i(632079).Tj.text.secondary
                },
                disabledCaption: {
                    color: i(632079).Tj.text.tertiary
                },
                disabledButton: {
                    color: i(632079).Tj.text.tertiary
                },
                upsellContainer: {
                    paddingTop: 12,
                    paddingInlineEnd: 12,
                    paddingBottom: 0,
                    paddingInlineStart: 12
                }
            };

            function d(e) {
                let {
                    verificationState: t,
                    onChange: r,
                    onCustomDateClick: a,
                    showTitle: l,
                    showUpsell: d
                } = e, c = (0, i(533992).v3)(), u = (0, i(109939).tz)(), p = (0, i(67499).S)(), f = (0, n.useRef)(e.today), m = "expired" === t.type || "none" === t.type ? (0, o.jsx)(i(109939).sA, {
                    defaultMessage: "Verify page",
                    id: "VerificationExpiryPicker.verify.header"
                }) : (0, o.jsx)(i(109939).sA, {
                    defaultMessage: "Reverify page",
                    id: "VerificationExpiryPicker.reverify.header"
                }), v = "verified" === t.type && t.isIndefinite, g = "verified" === t.type && !t.isIndefinite && t.dateTimeRange.end, y = !!d, h = (0, i(682985).K8)(() => (0, i(888).$)(p), [p]), x = null == h ? void 0 : h.id, b = (0, i(217844)._)({
                    name: "verified_pages",
                    spaceId: x,
                    userId: c.currentUser.id
                });
                return (0, o.jsxs)("div", {
                    children: [d && null != b && b.upsell ? (0, o.jsx)("div", {
                        style: s.upsellContainer,
                        children: (0, o.jsx)(i(754951).UpgradeButton, {
                            display: "button",
                            upsell: null == b ? void 0 : b.upsell,
                            source: "verification_upsell_item_page_entrypoint",
                            spaceStore: h
                        })
                    }) : void 0, (0, o.jsxs)(i(844565).A, {
                        title: l && m,
                        children: [i(435137).yj.map(e => {
                            let t = g && i(435137).gj({
                                start: f.current,
                                end: g
                            }) === e;
                            return (0, o.jsx)(i(95582).A, {
                                buttonStyle: y ? s.disabledButton : void 0,
                                disabled: y,
                                focused: !1,
                                icon: (0, o.jsx)(i(16275).I, {
                                    icon: i(253092).alarmIcon
                                }),
                                inline: !1,
                                title: (0, o.jsx)("span", {
                                    style: y ? s.disabledTitle : s.title,
                                    children: (0, o.jsx)(i(109939).sA, {
                                        defaultMessage: "For {numDays} days",
                                        id: "VerificationExpiryMenu.preset.title",
                                        values: {
                                            numDays: e
                                        }
                                    })
                                }),
                                caption: u.formatMessage({
                                    defaultMessage: "Until {date}",
                                    id: "VerificationExpiryMenu.preset.subtitle"
                                }, {
                                    date: i(931990).OH({
                                        dateTime: i(435137).RD(e, f.current).end,
                                        intl: u,
                                        shortenDateAndRange: !0
                                    })
                                }),
                                captionStyle: y ? s.disabledCaption : void 0,
                                isChecked: !!t,
                                onClick: () => {
                                    r({
                                        range: {
                                            start: f.current,
                                            end: f.current.plus({
                                                days: e
                                            })
                                        },
                                        option: `${e}d`
                                    })
                                }
                            }, e)
                        }), (0, o.jsx)(i(95582).A, {
                            buttonStyle: y ? s.disabledButton : void 0,
                            disabled: y,
                            focused: !1,
                            icon: (0, o.jsx)(i(16275).I, {
                                icon: i(870143).Q
                            }),
                            inline: !1,
                            title: (0, o.jsx)("span", {
                                style: y ? s.disabledTitle : s.title,
                                children: (0, o.jsx)(i(109939).sA, {
                                    defaultMessage: "Indefinitely",
                                    id: "VerificationExpiryPicker.option.indefinitely"
                                })
                            }),
                            onClick: () => r({
                                option: "indefinite"
                            }),
                            isChecked: v
                        }, "indefinite"), (0, o.jsx)(i(95582).A, {
                            buttonStyle: y ? s.disabledButton : void 0,
                            disabled: y,
                            focused: !1,
                            icon: (0, o.jsx)(i(16275).I, {
                                icon: i(998172).D
                            }),
                            title: (0, o.jsx)("span", {
                                style: y ? s.disabledTitle : s.title,
                                children: (0, o.jsx)(i(109939).sA, {
                                    defaultMessage: "Pick a date",
                                    id: "VerificationExpiryPicker.option.customDate"
                                })
                            }),
                            onClick: a
                        }, "custom")]
                    })]
                })
            }

            function c(e) {
                let {
                    verificationValue: t,
                    getRecordModel: r,
                    onChange: a,
                    blockId: s,
                    propertyName: c,
                    onClose: p,
                    showTitle: f,
                    showRemoveVerificationButton: m,
                    showVerificationFooter: v,
                    showCurrentStatusHeader: g,
                    showCustomHeader: y,
                    customHeader: h,
                    showUpsell: x,
                    entrypoint: b,
                    isPageArchived: M
                } = e, S = (0, i(533992).v3)(), j = (0, i(345776).T)(), w = (0, i(109939).tz)(), [T, C] = (0, n.useState)(!1), A = (0, n.useMemo)(() => i(435137).B2(t), [t]), I = (0, n.useRef)(i(25825).ah((0, i(714350).P)())), _ = (0, n.useRef)(i(25825).ah((0, i(714350).P)()).plus({
                    days: 1
                })), k = e => {
                    let {
                        range: t,
                        option: n
                    } = e;
                    if (!j || null != t && t.end && t.end.toMillis() < _.current.toMillis()) return;
                    let o = {
                            table: i(514214).oo,
                            id: j
                        },
                        r = t ? i(25825).C6.toPersistedDateTimeRange(t) : i(25825).C6.toPersistedDateTime(I.current.toMillis()),
                        l = "none" === A.type ? "add" : "update";
                    u(S, {
                        action: l,
                        verification_type: "verified",
                        verification_page_id: s,
                        verification_expiry: t ? t.end.toMillis() : void 0
                    }), a({
                        value: [o, r],
                        metadata: {
                            action: l,
                            verification_type: "verified",
                            entrypoint: b,
                            expiration: n,
                            expiration_date: t ? t.end.toMillis() : void 0
                        }
                    })
                }, V = {
                    menuType: i(649476).gu.Popup,
                    footer: v && !T && (0, o.jsx)(i(804296).n, {
                        verificationState: A,
                        getRecordModel: r
                    })
                };
                return i(986939).A.isMobile && (V = { ...V,
                    title: c,
                    menuType: i(649476).gu.Modal,
                    right: (0, o.jsx)(i(109939).sA, { ...i(789722).W.done
                    }),
                    onClickRight: T ? () => C(!1) : p
                }), (0, o.jsxs)(o.Fragment, {
                    children: [y && h && !T ? h : y && T ? (0, o.jsx)(i(179917).o, {
                        label: w.formatMessage({
                            id: "verificationPropertyOverlay.verificationMenuHeader.pickDate",
                            defaultMessage: "Pick a date"
                        }),
                        onClickBackButton: () => C(!1),
                        onClose: () => p(),
                        width: 265,
                        showBottomBorder: !1
                    }) : null, (0, o.jsx)(i(747369).A, { ...V,
                        header: !T && g && (0, o.jsx)(i(65068).Z, {
                            verificationState: A
                        }),
                        children: T ? (0, o.jsx)(l, {
                            today: I.current,
                            verificationState: A,
                            onChange: e => k(e),
                            clearCustomDatePicker: () => C(!1),
                            addExtraTopPadding: !y
                        }) : (0, o.jsxs)(o.Fragment, {
                            children: [M ? void 0 : (0, o.jsx)(d, {
                                today: I.current,
                                verificationState: A,
                                onChange: e => k(e),
                                onCustomDateClick: () => C(!0),
                                showTitle: f,
                                showUpsell: x
                            }), m ? (0, o.jsx)(i(58011).O, {
                                verificationState: A,
                                onChange: a,
                                blockId: s,
                                entrypoint: b
                            }) : void 0]
                        })
                    })]
                })
            }

            function u(e, t) {
                (0, i(195857).DO_NOT_USE_trackLegacy)("verification_update", t)
            }
        },
        804296: (e, t, i) => {
            i.d(t, {
                n: () => r
            }), i(296540);
            var n = i(474848);
            let o = {
                footerStyle: {
                    borderTop: `1px solid ${i(632079).Tj.border.secondaryTranslucent}`
                }
            };

            function r({
                verificationState: e,
                getRecordModel: t
            }) {
                return "none" === e.type ? null : (0, n.jsx)("div", {
                    style: o.footerStyle,
                    children: (0, n.jsx)(i(782268).d, {
                        verificationState: e,
                        getRecordModel: t,
                        actorPointer: e.actorPointer
                    })
                })
            }
        },
        855126: (e, t, i) => {
            i.d(t, {
                n: () => n
            });
            let n = (0, i(109939).YK)({
                expirationProperty: {
                    defaultMessage: "Expiration",
                    id: "verificationHelpers.menuTitle.Expiration"
                },
                noExpiration: {
                    defaultMessage: "None",
                    id: "verificationHelpers.noExpiration"
                },
                verifierProperty: {
                    defaultMessage: "Owner",
                    id: "verificationHelpers.menuTitle.Owner"
                },
                noOwners: {
                    defaultMessage: "No owners",
                    id: "verificationHelpers.noOwners.placeholder"
                },
                removeVerificationProperty: {
                    defaultMessage: "Remove verification",
                    id: "verificationHelpers.removeVerification"
                },
                removeArchivedStatus: {
                    defaultMessage: "Remove archived status",
                    id: "verificationHelpers.removeArchivedStatus"
                },
                nonOwnerCannotRemoveVerification: {
                    defaultMessage: "Only owners can remove verification",
                    id: "verificationHelpers.nonOwnerCannotRemoveVerification"
                },
                nonOwnerCannotRemoveArchival: {
                    defaultMessage: "Only owners can remove archived status",
                    id: "verificationHelpers.nonOwnerCannotRemoveArchival"
                },
                nonOwnersCannotEditVerification: {
                    defaultMessage: "Only owners can edit verification",
                    id: "verificationHelpers.nonOwnersCannotEditVerification"
                },
                ownersAttribution: {
                    defaultMessage: "{numOtherActors, plural, =0 {{actorName}} one {{actorName} and {numOtherActors} other} other {{actorName} and {numOtherActors} others}}",
                    id: "verificationHelpers.displayPageOwners"
                },
                verificationMenuTitle: {
                    defaultMessage: "Configure Verification",
                    id: "verificationHelpers.verificationMenu.menuTitle.configureVerification"
                },
                verificationMenuTitleArchived: {
                    defaultMessage: "Configure archived status",
                    id: "verificationHelpers.verificationMenu.menuTitle.configureArchival"
                },
                addVerificationMenuTitle: {
                    defaultMessage: "Verification Status",
                    id: "verificationHelpers.verificationMenu.menuTitle.addVerification"
                }
            })
        },
        973681: (e, t, i) => {
            i.d(t, {
                DZ: () => c,
                FH: () => u,
                Lp: () => s,
                QK: () => d,
                YX: () => p,
                ni: () => r
            });
            var n = i(296540),
                o = () => i(41403);

            function r(e) {
                var t, n, o;
                let r, {
                    collectionStore: a,
                    propertySchema: l,
                    collectionContextStore: s,
                    store: d,
                    property: c,
                    isJiraTwoWaySyncEnabled: u
                } = e;
                if ((0, i(23803).RL)({
                        isExternallyImportedAndSyncedCollection: a.isExternallyImportedAndSyncedCollection(),
                        propertyId: c,
                        collectionStore: a,
                        propertySchema: l
                    })) return !1;
                if (!u) return !0;
                let p = !!((null == (t = a.getFormat()) || null == (t = t.sync_state) ? void 0 : t.syncing) || (null == (n = a.getFormat()) ? void 0 : n.error));
                if ((null == l ? void 0 : l.synced_permissions) !== "read_write" || !(null != (o = a.getFormat().sync_state) && o.enable_two_way_sync) && (!(r = a.getSpaceStore()) || (0, i(262166).OX)(r.getSubscriptionTier())) || (0, i(260585).r)(a) || p || !i(205885).A.state.online) return !0;
                let f = null == s ? void 0 : s.externalSyncStore.state;
                return !(null != f && f.shouldAllowUserToEditSyncedCollection()) && (0, i(561872).VF)(d.getModel(), c, d.getRecordModel)
            }
            i(11448).Hx.Dates;
            let a = {
                    [i(11448).Hx.Dates]: {
                        propertyId: i(11448).Hx.Dates,
                        validationCheck: e => {
                            let {
                                collectionStore: t
                            } = e, n = t.getPropertyMapping();
                            return !!(null == n ? void 0 : n[i(11448).Hx.StatusV2])
                        }
                    }
                },
                l = {
                    date: [i(11448).Hx.Dates]
                };

            function s(e) {
                let {
                    collectionStore: t,
                    property: i,
                    propertySchema: n
                } = e;
                if (!n) return !0;
                let o = t.getPropertyMapping();
                if (!o) return !1;
                for (let e of l[n.type] ? ? []) {
                    let n = a[e];
                    if (!n.validationCheck({
                            collectionStore: t
                        })) continue;
                    let r = null == o ? void 0 : o[n.propertyId];
                    if (i === n.propertyId || i === r) return !0
                }
                return !1
            }

            function d({
                store: e,
                property: t,
                surface: i,
                onClick: o,
                collectionStore: r,
                blockPropertyValueOverlayStore: a,
                disableHorizontalEdgeScroll: l,
                focusButtonAfterClose: s
            }, c) {
                return (0, n.useMemo)(() => ({
                    store: e,
                    property: t,
                    surface: i,
                    onClick: o,
                    collectionStore: r,
                    blockPropertyValueOverlayStore: a,
                    disableHorizontalEdgeScroll: l,
                    isStatusCheckbox: null == c ? void 0 : c.isStatusCheckbox,
                    focusButtonAfterClose: s
                }), [a, r, l, i, null == c ? void 0 : c.isStatusCheckbox, o, t, e, s])
            }

            function c(e, t, n) {
                return (0, i(682985).K8)(() => {
                    if (!e.isDefined() || !e.isTemplate()) return;
                    let o = null == n ? void 0 : n.type;
                    if (!(0, i(9247).mF)(o)) return;
                    let r = e.getPropertyValue(t);
                    if (!r) return;
                    let a = null == r ? void 0 : r[0];
                    if (a && i(247438).qXl(a)) {
                        let e = i(247438).PVS(i(247438).wQU(a)),
                            t = e && i(247438).y0Y(e);
                        return t && {
                            templateVariable: t.type
                        }
                    }
                }, [t, n, e], {
                    debugName: "useTemplateVariableContext"
                })
            }

            function u(e) {
                var t;
                let {
                    collectionStore: n,
                    propertySchema: o,
                    isJiraTwoWaySyncEnabled: r,
                    surface: a,
                    propertyId: l
                } = e;
                return !(!n || !n.isExternallyImportedAndSyncedCollection() || !r || "page" !== a || !(null != (t = n.getFormat().sync_state) && t.enable_two_way_sync) || (null == o ? void 0 : o.synced_permissions) === "read_write" || l && (0, i(23803).sc)({
                    propertyId: l,
                    collectionStore: n,
                    propertySchema: o,
                    isExternallyImportedAndSyncedCollection: n.isExternallyImportedAndSyncedCollection()
                })) && !0
            }

            function p(e) {
                let {
                    newNumberValue: t,
                    environment: n,
                    stores: r,
                    spaceId: a
                } = e, l = i(272139).h(t);
                (0, i(377796).createAndCommit)({
                    userAction: "BlockPropertyValueOverlay.handleNumberValueChange",
                    environment: n,
                    cellTarget: a ? {
                        spaceWithId: a
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        for (let t of r) o().R9({
                            environment: n,
                            store: t,
                            value: l,
                            transaction: e
                        })
                    }
                })
            }
        }
    }
]);