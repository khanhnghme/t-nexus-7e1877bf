"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [332], {
        403: (e, t, s) => {
            s.d(t, {
                J: () => n
            }), s(581454), s(296540);
            var o = s(474848);
            let i = {
                skeletonCircle: {
                    display: "flex",
                    width: 28,
                    height: 28,
                    marginInlineEnd: 8,
                    backgroundColor: s(632079).Tj.background.tertiaryTranslucent,
                    borderRadius: 20
                },
                style0: {
                    width: "80%"
                },
                style1: {
                    width: "80%"
                },
                style2: {
                    marginTop: 0
                },
                style3: {
                    width: "50%"
                },
                style4: {
                    width: "60%"
                }
            };

            function n(e) {
                let t = e.isSlipperySlope ? 12 : 20,
                    n = Math.floor(e.areaHeight / (84 + 2 * t));
                0 === n && (n = 1);
                let l = (0, s(960253).I)(() => ({
                        skeletonRect: {
                            height: 8,
                            borderRadius: 4,
                            margin: 10,
                            backgroundColor: s(632079).Tj.background.tertiaryTranslucent
                        },
                        skeletonSection: {
                            display: "flex",
                            width: "100%",
                            margin: t,
                            flexDirection: "row"
                        }
                    }), [8, 10, t]),
                    r = [...Array(n)].map((e, t) => (0, o.jsxs)("div", {
                        style: l.skeletonSection,
                        children: [(0, o.jsx)(s(795830).P, {
                            style: i.skeletonCircle
                        }), (0, o.jsxs)("div", {
                            style: i.style0,
                            children: [(0, o.jsx)(s(795830).P, {
                                style: { ...i.style1,
                                    ...l.skeletonRect,
                                    ...i.style2
                                }
                            }), (0, o.jsx)(s(795830).P, {
                                style: { ...i.style3,
                                    ...l.skeletonRect
                                }
                            }), (0, o.jsx)(s(795830).P, {
                                style: { ...i.style4,
                                    ...l.skeletonRect
                                }
                            }), (0, o.jsx)(s(795830).P, {
                                style: { ...i.style3,
                                    ...l.skeletonRect
                                }
                            })]
                        })]
                    }, t));
                return (0, o.jsx)("div", {
                    children: r
                })
            }
        },
        59579: (e, t, s) => {
            s.d(t, {
                a: () => o
            });

            function o(e, t) {
                let o = {
                    id: "",
                    key: t,
                    type: "static",
                    category: s(292609).lU[t].category,
                    props: {}
                };
                (0, s(466290).K)(e, o)
            }
        },
        211571: (e, t, s) => {
            s.d(t, {
                A: () => l
            });
            var o = s(296540),
                i = s(474848);
            let n = {
                menuDiscussionItem: {
                    marginInlineStart: -14,
                    marginInlineEnd: -14,
                    width: "calc(100% + 28px)"
                },
                comment: {
                    position: "relative",
                    fontSize: s(986939).A.isMobile ? 16 : 14
                },
                commentElementsBelowUserRow: {
                    paddingInlineStart: s(42615).FB
                },
                avatar: {
                    marginTop: 0,
                    marginInlineEnd: s(986939).A.isMobile ? 4 : 8,
                    userSelect: "none",
                    WebkitUserSelect: "none"
                },
                userRow: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    userSelect: "none",
                    WebkitUserSelect: "none"
                },
                placeholder: {
                    height: 8,
                    width: 81,
                    borderRadius: 6,
                    background: s(632079).Tj.background.tertiaryTranslucent
                },
                draftLabel: {
                    margin: "0 6px",
                    flexBasis: 140,
                    whiteSpace: "normal",
                    flexGrow: void 0,
                    display: "inline",
                    color: s(632079).Tj.text.tertiary
                },
                container: {
                    paddingTop: s(42615).e4,
                    paddingInlineEnd: 16,
                    paddingBottom: s(42615).Wv,
                    paddingInlineStart: 16
                },
                noOverflow: {
                    overflow: "hidden"
                },
                commentContext: {
                    display: "flex",
                    width: "100%",
                    marginTop: 6,
                    marginBottom: 22,
                    fontSize: 13,
                    color: s(632079).Tj.text.secondary
                },
                displayName: {
                    fontWeight: s(699422).Wy.medium,
                    whiteSpace: "normal"
                },
                smallTopPadding: {
                    marginTop: 1
                }
            };

            function l(e) {
                let t = (0, s(109939).tz)(),
                    {
                        environment: l,
                        menuListItemProps: r,
                        shouldShowTopDividerLine: a,
                        shouldShowBottomDividerLine: d,
                        shouldExpandDiscussionWidth: c,
                        noBackgroundColors: u,
                        onMouseEnter: m,
                        onMouseLeave: p,
                        onFocus: g,
                        onBlur: y,
                        onMobileClose: x
                    } = e,
                    f = (0, s(682985).O$)(s(728372).AppStoreMainEditorCurrentBlockStore),
                    h = (0, s(682985).K8)(() => (0, s(427846)._)(l), [l]),
                    b = s(42615).eQ,
                    v = (0, s(682985).K8)(() => s(827862).A.state.isActivelyComposing, []),
                    k = (0, s(682985).K8)(() => s(827862).A.state.isHovered, []),
                    S = (0, o.useCallback)(() => {
                        null == m || m()
                    }, [m]),
                    j = (0, o.useCallback)(() => {
                        null == p || p()
                    }, [p]),
                    A = (0, o.useCallback)(() => {
                        null == g || g()
                    }, [g]),
                    C = (0, o.useCallback)(() => {
                        s(332190).A.hasContent() ? s(827862).A.resetAllActiveSources() : (s(332190).A.reset(), s(827862).A.reset()), null == y || y()
                    }, [y]),
                    M = (0, o.useRef)(null);
                (0, s(336494).b)(s(804943).A, () => ({
                    getNode: () => M.current
                }), []);
                let T = (0, s(960253).I)(() => ({
                        discussionContainer: {
                            paddingTop: s(986939).A.isMobile ? 4 : 6,
                            borderTop: !s(986939).A.isMobile && a ? `1px solid ${s(632079).Tj.border.secondaryTranslucent}` : void 0,
                            borderBottom: !s(986939).A.isMobile && d ? `1px solid ${s(632079).Tj.border.secondaryTranslucent}` : void 0,
                            transition: "background 300ms ease",
                            background: u ? void 0 : v ? s(632079).Tj.yellow.background.primaryTranslucent : k ? s(632079).Tj.hoveredDiscussionBackground : void 0
                        }
                    }), [k, v, u, d, a]),
                    w = (0, o.useCallback)(async () => {
                        let e = await s(864850).T.formulas.load();
                        s(22229).i5({
                            environment: l,
                            allowActionsWhileCommenting: !0,
                            formulasModule: e
                        });
                        let o = s(449473).B8.state.hasActiveDraftComment;
                        s(986939).A.isMobile && o && (s(436555).D6({
                            label: t.formatMessage({
                                id: "draftComment.submitted.snackbar",
                                defaultMessage: "Comment added"
                            }),
                            position: "bottom",
                            style: {
                                justifyContent: "center",
                                textAlign: "center"
                            }
                        }), null == x || x())
                    }, [l, t, x]),
                    _ = (0, s(682985).K8)(() => !s(332190).A.state.open || "reaction" === s(332190).A.state.content, []),
                    I = (0, s(682985).K8)(() => {
                        var e;
                        return s(332190).A.getBlockStore() ? ? (null == (e = s(332190).A.getClosestBlockStore()) ? void 0 : e.parentBlockStore)
                    }, []),
                    D = (0, s(682985).K8)(() => s(332190).A.getPropertyId(), []),
                    B = (0, s(682985).K8)(() => {
                        if (D) {
                            var e;
                            let t = null == (e = s(332190).A.getBlockStore()) ? void 0 : e.getAssociatedCollectionStore();
                            if (!t || "collection" !== t.table) return;
                            let o = t.getSchema();
                            return (0, s(561872)._g)({
                                schema: o,
                                property: D
                            })
                        }
                    }, [D]),
                    F = (0, s(682985).K8)(() => (0, s(511791).RX)(t).title, [t]),
                    P = (0, s(682985).O$)(s(332190).f),
                    R = (0, s(682985).K8)(() => null == h ? void 0 : h.getDisplayName(t), [h, t]),
                    K = (0, s(682985).K8)(() => null == I ? void 0 : I.getSpaceId(), [I]),
                    E = (0, s(682985).K8)(() => s(22229).Ek({
                        environment: l
                    }), [l]),
                    z = (0, s(682985).K8)(() => s(332190).A.getType(), []),
                    O = (0, s(682985).K8)(() => null == I ? void 0 : I.getValue(), [I]);
                if (_ || !F || !h || !I || !f || !P || !K || !O && "block" === z || !E && "inline" === z) return null;
                let V = "block" === z && !D,
                    L = "inline" === z || D,
                    N = V ? (0, i.jsx)(s(877634).Ay, {
                        blockValue: O,
                        rootStore: I,
                        blockPreviewLocation: "comments_sidebar"
                    }) : L ? (0, i.jsx)(s(877634).vY, {
                        value: {
                            value: (null == E ? void 0 : E.context) ? ? [],
                            spaceId: K
                        },
                        propertySchema: F,
                        labeled: !1,
                        rootStore: I,
                        disableStyleAnnotations: !0,
                        disableInsertedDeletedAnnotations: !0,
                        disableDateStyleAnnotations: !0
                    }) : null;
                return (0, i.jsx)("div", {
                    style: T.discussionContainer,
                    ref: M,
                    onClick: null == r ? void 0 : r.onClick,
                    onMouseEnter: S,
                    onMouseLeave: j,
                    children: (0, i.jsx)(s(636518).Ay, {
                        allowTextSelection: !0,
                        style: n.menuDiscussionItem,
                        title: (0, i.jsx)("div", {
                            style: n.container,
                            children: (0, i.jsxs)("div", {
                                style: n.comment,
                                children: [(0, i.jsxs)("div", {
                                    style: n.userRow,
                                    children: [(0, i.jsx)(s(10097).E, {
                                        authorStore: h,
                                        avatarSize: b,
                                        avatarStyle: n.avatar
                                    }), (0, i.jsxs)("div", {
                                        style: n.noOverflow,
                                        children: [(0, i.jsx)("span", {
                                            style: n.displayName,
                                            children: R || (0, i.jsx)("span", {
                                                style: n.placeholder
                                            })
                                        }), (0, i.jsx)(s(324489).V, {
                                            isSmall: !s(986939).A.isMobile,
                                            isSecondaryColor: !0,
                                            isMultiline: !0,
                                            style: n.draftLabel,
                                            children: (0, i.jsx)(s(109939).sA, {
                                                defaultMessage: "Draft",
                                                id: "DraftCommentInputWithContext.draftLabel"
                                            })
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    style: n.commentElementsBelowUserRow,
                                    children: [(0, i.jsx)("div", {
                                        style: n.commentContext,
                                        children: (0, i.jsxs)(s(4458).fI, {
                                            width: "100%",
                                            children: [(0, i.jsx)(s(222121).T, {}), B ? (0, i.jsx)(s(384943).A, {
                                                propertySchema: B
                                            }) : void 0, (0, i.jsx)("div", {
                                                style: n.smallTopPadding,
                                                children: N
                                            })]
                                        })
                                    }), (0, i.jsx)(s(305215).V, {
                                        showAvatar: !1,
                                        parentStore: f,
                                        blockStore: I,
                                        onSubmit: w,
                                        discussionInputStore: P,
                                        isNewComment: !0,
                                        isEditingExistingComment: !1,
                                        isMobileSlideUpMenu: !0,
                                        shouldSaveUnsentComments: !1,
                                        discussionFormat: s(241838).DiscussionFormat.Sidebar,
                                        canDrop: !0,
                                        disableFocusRing: !0,
                                        adjustWidthForDraftDiscussions: c,
                                        dontMoveCursorToInputEndOnFocus: !0,
                                        onBlur: C,
                                        onFocus: A
                                    }, "draft-comment-sidebar")]
                                })]
                            })
                        })
                    })
                }, "draft-comment-discussion-updates")
            }
        },
        227830: (e, t, s) => {
            s.d(t, {
                P: () => S
            }), s(581454), s(296540);
            var o = s(474848);
            let i = {
                    kzqmXN: "xh8yej3",
                    kZKoxP: "x5yr21d",
                    krdFHd: "xvs2etk",
                    kfmiAY: "xg3wpu6",
                    kT0f0o: "x1jwbhkm",
                    kVL7Gh: "xgg4q86",
                    k1xSpc: "x78zum5",
                    kjj79g: "xl56j7k",
                    kGNEyG: "x6s0dn4",
                    kC7eKd: "x1md70p1",
                    $$css: !0
                },
                n = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                l = {
                    hovered: {
                        background: s(632079).Tj.buttonHoveredBackground
                    },
                    pressed: {
                        background: s(632079).Tj.buttonPressedBackground
                    }
                };

            function r(e) {
                return (0, o.jsx)("div", { ...{
                        className: "x10l6tqk xfr5jun x11dcrhx xvy4d1p xxk0z11 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 xcxejci"
                    },
                    children: (0, o.jsx)(s(64960).Ay, {
                        onClick: e.onClick,
                        style: i,
                        hoveredStyle: l.hovered,
                        pressedStyle: l.pressed,
                        children: (0, o.jsx)(s(16275).I, {
                            icon: s(25094).xMarkSmallIcon,
                            size: "sm",
                            colorVariant: "primary"
                        })
                    })
                })
            }
            let a = {
                kZKoxP: "x1fgtraw",
                kLKAdn: "xexx8yu",
                kwRFfy: "xf159sx",
                kGO01o: "x18d9i69",
                kZCmMZ: "xmzvs34",
                krdFHd: "x1i5p2am",
                kfmiAY: "x1whfx0g",
                kT0f0o: "xr2y4jy",
                kVL7Gh: "x1ihp6rs",
                kEafiO: "x178xt8z",
                ke9TFa: "x1lun4ml",
                kt9PQ7: "xso031l",
                k2ei4v: "xpilrb4",
                kLZC3w: "xl4im7t",
                kBCPoo: "xpbub5a",
                kL6WhQ: "x1rwl2r7",
                kGJrpR: "x1kdg6ob",
                kPef9Z: "x13fuv20",
                k8ry5P: "x18b5jzi",
                kfdmCh: "x1q0q8m5",
                kVhnKS: "x1t7ytsu",
                $$css: !0
            };

            function d(e) {
                let {
                    text: t,
                    onClick: i
                } = e;
                return (0, o.jsx)(s(548436).A, {
                    size: "lg",
                    onClick: i,
                    style: a,
                    children: (0, o.jsx)(s(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "primary",
                        children: t
                    })
                })
            }

            function c(e) {
                let {
                    text: t,
                    onClick: i
                } = e;
                return (0, o.jsx)(s(988022).p, {
                    onClick: i,
                    children: (0, o.jsx)(s(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "secondary",
                        children: t
                    })
                })
            }
            let u = {
                kZKoxP: "x1fgtraw",
                kLKAdn: "x1iorvi4",
                kwRFfy: "xf159sx",
                kGO01o: "xjkvuk6",
                kZCmMZ: "xmzvs34",
                $$css: !0
            };

            function m(e) {
                let {
                    text: t,
                    onClick: i
                } = e;
                return (0, o.jsx)(s(548436).A, {
                    size: "lg",
                    onClick: i,
                    style: u,
                    children: (0, o.jsx)(s(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "primary",
                        children: t
                    })
                })
            }

            function p(e) {
                let {
                    button: t
                } = e;
                return (0, o.jsx)(m, { ...t
                })
            }

            function g(e) {
                let {
                    primary: t,
                    secondary: i
                } = e;
                return (0, o.jsxs)(s(4458).fI, {
                    gap: 8,
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: n,
                    children: [(0, o.jsx)(d, { ...t
                    }), i ? (0, o.jsx)(c, { ...i
                    }) : void 0]
                })
            }

            function y(e) {
                let {
                    primary: t
                } = e;
                return (0, o.jsx)(s(4458).fI, {
                    gap: 8,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    className: "autolayout-fill-width",
                    style: n,
                    children: (0, o.jsx)(d, { ...t
                    })
                })
            }

            function x(e) {
                let {
                    numDots: t,
                    activeDot: i
                } = e, l = Array(t).fill(0).map((e, t) => (0, o.jsx)("div", { ...{
                        0: {
                            className: "x1v4s8kt xols6we xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x1h9a47h"
                        },
                        1: {
                            className: "x1v4s8kt xols6we xvs2etk xg3wpu6 x1jwbhkm xgg4q86 xqzso53"
                        }
                    }[t === i | 0]
                }, t));
                return (0, o.jsx)(s(4458).fI, {
                    gap: 8,
                    flex: "1 1 0",
                    style: n,
                    children: l
                })
            }

            function f(e) {
                let {
                    button: t,
                    numStages: i,
                    stage: l
                } = e;
                return (0, o.jsxs)(s(4458).fI, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    className: "autolayout-fill-width",
                    style: n,
                    children: [(0, o.jsx)(x, {
                        numDots: i,
                        activeDot: l
                    }), (0, o.jsx)(d, { ...t
                    })]
                })
            }

            function h(e) {
                let {
                    alt: t,
                    src: s,
                    type: i
                } = e;
                return "image" === i ? (0, o.jsx)("img", {
                    src: s,
                    className: "xh8yej3 xt7dq6l xr9e8f9 x1e4oeot x1ui04y5 x6en5u8",
                    alt: t
                }) : (0, o.jsx)("video", {
                    title: t,
                    src: s,
                    className: "xh8yej3 xt7dq6l xr9e8f9 x1e4oeot x1ui04y5 x6en5u8",
                    autoPlay: !0,
                    playsInline: !0,
                    muted: !0,
                    loop: !0,
                    controls: !1
                })
            }
            let b = {
                    kVAEAm: "x1n2onr6",
                    kEafiO: "x178xt8z",
                    ke9TFa: "x1lun4ml",
                    kt9PQ7: "xso031l",
                    k2ei4v: "xpilrb4",
                    kLZC3w: "x1s9lsuh",
                    kBCPoo: "x1nje0gb",
                    kL6WhQ: "x5u934f",
                    kGJrpR: "x9uclvw",
                    kPef9Z: "x13fuv20",
                    k8ry5P: "x18b5jzi",
                    kfdmCh: "x1q0q8m5",
                    kVhnKS: "x1t7ytsu",
                    kC7eKd: "xcxejci",
                    k6WDB: "xktjril",
                    keRtuK: "x7c8izy",
                    krdFHd: "x1obq294",
                    kfmiAY: "x5a5i1n",
                    kT0f0o: "xde0f50",
                    kVL7Gh: "x15x8krk",
                    $$css: !0
                },
                v = {
                    kGO01o: "x1120s5i",
                    $$css: !0
                };

            function k(e) {
                let t, i, l, a, d, {
                    onDismiss: c,
                    buttonsProps: u,
                    icon: m,
                    title: x,
                    media: k,
                    body: S,
                    badge: j
                } = e;
                if (u) switch (u.type) {
                    case "carousel":
                        t = (0, o.jsx)(f, { ...u
                        });
                        break;
                    case "full-width":
                        t = (0, o.jsx)(p, { ...u
                        });
                        break;
                    case "left-aligned":
                        t = (0, o.jsx)(g, { ...u
                        });
                        break;
                    case "right-aligned":
                        t = (0, o.jsx)(y, { ...u
                        })
                }
                return m && (i = (0, o.jsx)(s(16275).I, {
                    icon: m,
                    size: "sm",
                    colorVariant: "primary",
                    style: v
                })), x && (l = (0, o.jsx)("div", { ...{
                        className: "x64bnmy"
                    },
                    children: (0, o.jsxs)(s(111010).D, {
                        styleKey: "captionSemibold",
                        colorVariant: "inversePrimary",
                        children: [x, j]
                    })
                })), S && (a = (0, o.jsx)(s(111010).D, {
                    styleKey: "captionRegular",
                    colorVariant: "primary",
                    children: S
                })), k && (d = (0, o.jsx)(h, { ...k
                })), (0, o.jsxs)(s(4458).VP, {
                    style: b,
                    gap: 8,
                    padding: 12,
                    width: 280,
                    className: "autolayout-fill-width",
                    children: [(0, o.jsxs)(s(4458).VP, {
                        gap: 2,
                        style: n,
                        children: [i, l, a]
                    }), d, t, (0, o.jsx)(r, {
                        onClick: c
                    })]
                })
            }

            function S(e) {
                return (0, o.jsx)(s(172474).BQ, {
                    mode: "dark",
                    children: (0, o.jsx)(k, { ...e
                    })
                })
            }
        },
        310573: (e, t, s) => {
            s.d(t, {
                l: () => i
            }), s(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.49 1.94 12.79 12.12",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M12.324 1.944c-.361 0-.715.1-1.023.289l-2.167 1.33c-.96.589-2.063.9-3.189.9H3.381A1.885 1.885 0 0 0 1.496 6.35v1.706c0 1.033.83 1.872 1.86 1.885l.926 3.074a1.465 1.465 0 0 0 1.403 1.042h.799c.809 0 1.465-.656 1.465-1.465V10.28c.412.143.81.331 1.185.562l2.167 1.33a1.955 1.955 0 0 0 2.978-1.667V3.9c0-1.08-.875-1.955-1.955-1.955M6.699 9.987v2.604a.215.215 0 0 1-.215.215h-.799a.215.215 0 0 1-.206-.153L4.662 9.94h1.283q.38 0 .754.047m5.57-6.791.055-.002c.39 0 .705.315.705.705v6.605a.706.706 0 0 1-.76.704zm-1 .523v6.965l-1.481-.909a7.4 7.4 0 0 0-1.933-.832V5.46a7.4 7.4 0 0 0 1.933-.833zM5.944 8.69H3.381a.635.635 0 0 1-.635-.634V6.349c0-.351.284-.635.635-.635h2.564q.459 0 .91-.057v3.09a7 7 0 0 0-.91-.057"
                    })
                },
                i = (0, s(104509).wt)("megaphoneSmall", o, "small")
        },
        357709: (e, t, s) => {
            function o(e, t) {
                let o = (0, s(462391).h2)(t.callout_key);
                o && (t.placement_key = (0, s(462391).t9)(o)), (0, s(104310).u)({
                    event: {
                        eventName: "callout_show",
                        eventProperties: { ...t,
                            callout_src: o ? "static" : "cio"
                        }
                    }
                })
            }

            function i(e, t) {
                let o = (0, s(462391).h2)(t.callout_key);
                o && (t.placement_key = (0, s(462391).t9)(o)), (0, s(104310).u)({
                    event: {
                        eventName: "callout_click",
                        eventProperties: { ...t,
                            callout_src: o ? "static" : "cio"
                        }
                    }
                }), t.callout_key && s(409725).l.trackEvent("callout_click", {
                    callout_key: t.callout_key,
                    click_type: t.click_type,
                    placement_key: t.placement_key
                })
            }

            function n(e, t) {
                let o = (0, s(462391).h2)(t.callout_key);
                o && (t.placement_key = (0, s(462391).t9)(o)), (0, s(104310).u)({
                    event: {
                        eventName: "callout_dismiss",
                        eventProperties: { ...t,
                            callout_src: o ? "static" : "cio"
                        }
                    }
                })
            }

            function l(e, t) {
                let o = (0, s(462391).h2)(t.callout_key);
                o && (t.placement_key = (0, s(462391).t9)(o)), (0, s(104310).u)({
                    event: {
                        eventName: "callout_engagement",
                        eventProperties: { ...t,
                            callout_src: o ? "static" : "cio"
                        }
                    }
                })
            }

            function r(e, t) {
                let {
                    eligible_callouts: o,
                    required_arg_timeout: i,
                    required_args_run_duration: n,
                    eligibility_timeouts: l,
                    blocklist: r
                } = t;
                (0, s(104310).u)({
                    event: {
                        eventName: "callout_coordinator_resolved",
                        eventProperties: {
                            eligible_callouts: o,
                            required_arg_timeout: i,
                            required_args_run_duration: n,
                            eligibility_timeouts: l,
                            blocklist: r
                        }
                    }
                })
            }

            function a(e, t) {
                (0, s(104310).u)({
                    event: {
                        eventName: "callout_feature_interaction",
                        eventProperties: t
                    }
                })
            }

            function d(e, t) {
                (0, s(104310).u)({
                    event: {
                        eventName: "callout_skipped",
                        eventProperties: t
                    }
                })
            }

            function c(e, t) {
                let o = (0, s(462391).h2)(t.callout_key);
                o && (t.placement_key = (0, s(462391).t9)(o)), (0, s(104310).u)({
                    event: {
                        eventName: "callout_not_shown",
                        eventProperties: { ...t,
                            callout_src: o ? "static" : "cio"
                        }
                    }
                })
            }
            s.d(t, {
                Ak: () => c,
                Cu: () => d,
                DL: () => o,
                Jb: () => l,
                Sq: () => n,
                Y5: () => i,
                gc: () => a,
                wo: () => r
            })
        },
        400332: (e, t, s) => {
            s.d(t, {
                R: () => E
            }), s(944114), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(898992), s(354520), s(430670), s(581454), s(737550);
            var o = s(296540);

            function i(e) {
                s(449473).B8.setState({ ...s(449473).B8.state,
                    commentsTypeMode: e
                })
            }
            s(672577);
            var n = s(474848);
            let l = ["comments", "suggestions"],
                r = ["unresolved", "unread", "read", "resolved"],
                a = (0, s(109939).YK)({
                    unresolved: {
                        id: "updateSidebar.comments.mode.unresolvedOption",
                        defaultMessage: "Open"
                    },
                    resolved: {
                        id: "updateSidebar.comments.mode.resolvedOption",
                        defaultMessage: "Resolved"
                    },
                    commentsAndSuggestions: {
                        id: "updateSidebar.comments.typeMode.commentsAndSuggestions",
                        defaultMessage: "Any"
                    },
                    comments: {
                        id: "updateSidebar.comments.typeMode.comments",
                        defaultMessage: "Comments only"
                    },
                    suggestions: {
                        id: "updateSidebar.comments.typeMode.suggestions",
                        defaultMessage: "Suggestions only"
                    },
                    read: {
                        id: "updateSidebar.comments.readFilter.read",
                        defaultMessage: "Read"
                    },
                    unread: {
                        id: "updateSidebar.comments.readFilter.unread",
                        defaultMessage: "Unread"
                    },
                    none: {
                        id: "updateSidebar.comments.mode.none",
                        defaultMessage: "Apply filters to see discussions"
                    }
                }),
                d = (0, s(109939).YK)({
                    commentsAndSuggestions: {
                        id: "updateSidebar.comments.typeMode.commentsAndSuggestionsCheckbox",
                        defaultMessage: "Any"
                    },
                    comments: {
                        id: "updateSidebar.comments.typeMode.commentsCheckbox",
                        defaultMessage: "Comments"
                    },
                    suggestions: {
                        id: "updateSidebar.comments.typeMode.suggestionsCheckbox",
                        defaultMessage: "Suggestions"
                    }
                }),
                c = (0, s(109939).YK)({
                    filterLabel: {
                        id: "updateSidebar.comments.filter.label",
                        defaultMessage: "Filter"
                    }
                }),
                u = {
                    anyoneMenuItemMobileIconStyles: {
                        width: s(636518).nd
                    },
                    showMoreResultsButton: {
                        fill: s(632079).Tj.text.secondary
                    },
                    showMoreResultsButtonTitle: {
                        color: s(632079).Tj.text.secondary
                    },
                    menuList: {
                        minWidth: s(986939).A.isMobile ? void 0 : 272
                    },
                    left: {
                        marginInlineEnd: 12 * !!s(986939).A.isMobile
                    },
                    checkbox: {
                        pointerEvents: "none"
                    },
                    closeButton: {
                        position: "absolute",
                        insetInlineEnd: 12,
                        borderRadius: "50%",
                        background: s(632079).Tj.background.tertiaryTranslucent
                    },
                    style0: {
                        paddingBottom: 0
                    }
                };

            function m(e) {
                let {
                    numCommenters: t,
                    userActorsForDisplay: o,
                    actorsForFilter: c,
                    setActorsForFilter: m,
                    onMobileClose: p,
                    currentTypeMode: g,
                    currentDiscussionStatusFilters: y,
                    popupOpen: x,
                    setPopupOpen: f,
                    peopleFilterExpanded: h,
                    setPeopleFilterExpanded: b
                } = e, v = (0, s(109939).tz)(), k = (0, s(533992).v3)(), S = l.map(e => ({
                    key: e,
                    render: t => (0, n.jsx)(s(95582).A, { ...t,
                        left: (0, n.jsx)(s(349050).S, {
                            checked: g === e || "commentsAndSuggestions" === g,
                            size: 14,
                            style: u.checkbox
                        }),
                        leftStyle: u.left,
                        title: (0, n.jsx)(s(324489).V, {
                            children: (0, n.jsx)(s(109939).sA, { ...d[e]
                            })
                        })
                    }),
                    action: () => {
                        "commentsAndSuggestions" === g ? i("comments" === e ? "suggestions" : "comments") : "none" === g ? i(e) : g === e ? i("none") : i("commentsAndSuggestions");
                        let t = s(449473).B8.state.discussionStatusFilters,
                            o = s(449473).B8.state.commentsTypeMode;
                        (0, s(118306).Fx)(k, {
                            new_status_filters_state: t,
                            existing_status_filters_state: t,
                            old_type_filter: g,
                            new_type_filter: o
                        })
                    }
                })), j = r.map(e => ({
                    key: e,
                    render: t => {
                        let {
                            read: o,
                            unread: i
                        } = y, l = "unread" === e || "read" === e, r = "unresolved" === e, d = y[e];
                        return (0, n.jsx)(s(95582).A, { ...t,
                            title: (0, n.jsx)(s(324489).V, {
                                children: v.formatMessage(a[e])
                            }),
                            left: (0, n.jsx)(s(349050).S, {
                                checked: r && o !== i ? "partial" : d,
                                size: 14,
                                style: u.checkbox
                            }),
                            leftStyle: { ...u.left,
                                paddingInlineStart: 8 * !!l
                            }
                        })
                    },
                    action: () => {
                        y[e] ? s(449473).B8.removeDiscussionFilter(e) : s(449473).B8.addDiscussionFilter(e);
                        let t = s(449473).B8.state.discussionStatusFilters,
                            o = s(449473).B8.state.commentsTypeMode;
                        (0, s(118306).Fx)(k, {
                            new_status_filters_state: t,
                            existing_status_filters_state: y,
                            old_type_filter: o,
                            new_type_filter: o
                        })
                    }
                })), A = {
                    key: "anyone",
                    render: e => (0, n.jsx)(s(95582).A, { ...e,
                        title: (0, n.jsx)(s(324489).V, {
                            children: (0, n.jsx)(s(109939).sA, {
                                defaultMessage: "Anyone",
                                id: "commentFilterMenu.anyoneItem.title"
                            })
                        }),
                        left: (0, n.jsx)(s(349050).S, {
                            checked: 0 === c.length,
                            size: 14,
                            style: u.checkbox
                        }),
                        icon: (0, n.jsx)("div", {
                            style: u.anyoneMenuItemMobileIconStyles,
                            children: (0, n.jsx)(s(16275).I, {
                                icon: s(825012).peopleIcon,
                                colorVariant: "secondary"
                            })
                        })
                    }),
                    action: () => {
                        m([])
                    }
                }, C = o.map(e => {
                    let t = e.getActorUserId(),
                        o = c.some(e => e.getActorUserId() === t);
                    if (t) return {
                        key: t,
                        render: t => (0, n.jsx)(s(920224).A, { ...t,
                            actor: e,
                            useEmailAsTooltip: !0,
                            left: (0, n.jsx)(s(349050).S, {
                                checked: o,
                                size: 14,
                                style: u.checkbox
                            })
                        }),
                        action: () => {
                            o ? m(c.filter(e => e.getActorUserId() !== t)) : m([...c, e])
                        }
                    }
                }).filter(s(722371).O9), M = {
                    key: "personFilter",
                    render: e => (0, n.jsx)(s(844565).A, {
                        topBorder: !0,
                        ...e,
                        title: (0, n.jsx)(s(109939).sA, {
                            defaultMessage: "Person",
                            id: "commentFilterMenu.personFilterSection.header"
                        })
                    }),
                    items: s(986939).A.isMobile ? [A, ...C] : 1 === t ? C : [A, ...C]
                }, T = (0, n.jsx)(s(558045).A, {
                    style: u.menuList,
                    type: s(558045).O.Vertical,
                    initialFocus: void 0,
                    sections: [{
                        key: "typeMode",
                        render: e => (0, n.jsx)(s(844565).A, { ...e,
                            title: (0, n.jsx)(s(109939).sA, {
                                defaultMessage: "Type",
                                id: "commentFilterMenu.typeSection.heading"
                            })
                        }),
                        items: S
                    }, {
                        key: "commentFilter",
                        render: e => (0, n.jsx)(s(844565).A, { ...e,
                            topBorder: !0,
                            title: (0, n.jsx)(s(109939).sA, {
                                defaultMessage: "Status",
                                id: "commentFilterMenu.statusSection.heading"
                            })
                        }),
                        items: j
                    }, s(986939).A.isMobile ? M : function(e, t, o, i) {
                        if (t) return e;
                        let {
                            items: l
                        } = e;
                        if (l.length <= 6) return e;
                        let r = [...l.slice(0, 5), {
                            key: "show more",
                            render: e => (0, n.jsx)(s(95582).A, { ...e,
                                icon: (0, n.jsx)(s(16275).I, {
                                    icon: s(397900).ellipsisIcon,
                                    size: "sm",
                                    style: i.showMoreResultsButton
                                }),
                                title: (0, n.jsx)("span", {
                                    style: i.showMoreResultsButtonTitle,
                                    children: (0, n.jsx)(s(109939).sA, {
                                        defaultMessage: "{numberMore} more results",
                                        id: "updateSidebar.comments.filter.byPerson.showMoreResultsButton.title",
                                        values: {
                                            numberMore: l.length - 5
                                        }
                                    })
                                })
                            }),
                            action: () => {
                                o(!0)
                            }
                        }];
                        return { ...e,
                            items: r
                        }
                    }(M, h, b, u)]
                });
                return s(986939).A.isMobile ? (0, n.jsx)(s(747369).A, {
                    menuType: s(649476).gu.Modal,
                    scrollerStyle: u.style0,
                    title: (0, n.jsx)(s(109939).sA, {
                        defaultMessage: "Filter",
                        id: "commentFilterMenu.title"
                    }),
                    right: (0, n.jsx)(s(374533).A, {
                        icon: s(766970).xMarkFillIcon,
                        onClick: () => {
                            p(), f(!1)
                        },
                        style: u.closeButton,
                        ariaLabel: v.formatMessage({
                            id: "updateSidebar.header.closeLabel",
                            defaultMessage: "Close"
                        })
                    }),
                    onClickRight: () => {
                        p(), f(!1)
                    },
                    children: T
                }) : T
            }
            let p = {
                toggleButton: {
                    justifyContent: "center",
                    display: "flex",
                    color: s(632079).Tj.text.secondary,
                    margin: 0
                }
            };

            function g({
                userActors: e,
                actorsForFilter: t,
                setActorsForFilter: i
            }) {
                let l = (0, s(533992).Y0)(),
                    r = (0, s(109939).tz)(),
                    a = (0, s(682985).K8)(() => s(449473).B8.state.expanded, []),
                    d = (0, s(682985).K8)(() => s(718106).W.state.open, []),
                    u = (0, s(682985).K8)(() => {
                        let o = [...e];
                        return t.length > 0 && !o.find(e => t.some(t => t.getActorUserId() === e.getActorUserId())) && (s(986939).A.isMobile ? i([]) : o = [...t, ...o]), o.sort((e, t) => {
                            let o = (0, s(197018).lR)(r, e),
                                i = (0, s(197018).lR)(r, t);
                            return o && i ? o.localeCompare(i) : 0
                        }), o
                    }, [r, t, e, i]),
                    [y, x] = (0, o.useState)(!1),
                    [f, h] = (0, o.useState)(!1),
                    {
                        currentTypeMode: b,
                        discussionStatusFilters: v
                    } = (0, s(682985).K8)(() => ({
                        currentTypeMode: s(449473).B8.state.commentsTypeMode,
                        discussionStatusFilters: s(449473).B8.state.discussionStatusFilters
                    }), []),
                    k = (0, n.jsx)(s(109939).sA, { ...c.filterLabel
                    });
                return (0, o.useEffect)(() => {
                    s(986939).A.isMobile || a ? s(986939).A.isMobile && !d && ((0, s(697405).P)("unresolved"), i([])) : ((0, s(697405).P)("unresolved"), i([]), h(!1))
                }, [d, i, a]), (0, n.jsx)(s(656252).A, {
                    open: y,
                    originGap: 0,
                    popupType: s(986939).A.isMobile ? s(656252).z.BottomSheet : s(656252).z.Popup,
                    bottomSheetInitialState: l.isTablet ? "half" : "full",
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "center",
                    content: s => (0, n.jsx)(m, {
                        userActorsForDisplay: u,
                        actorsForFilter: t,
                        setActorsForFilter: i,
                        onMobileClose: () => s.close(),
                        currentTypeMode: b,
                        currentDiscussionStatusFilters: v,
                        popupOpen: y,
                        setPopupOpen: x,
                        peopleFilterExpanded: f,
                        setPeopleFilterExpanded: h,
                        numCommenters: e.length
                    }),
                    onClose: () => {
                        x(!1)
                    },
                    children: e => (0, n.jsx)(s(51831).m, { ...e,
                        placement: "bottom",
                        content: () => k,
                        children: e => (0, n.jsx)(s(4458).fI, {
                            paddingInlineEnd: 0,
                            className: s(828432).kJD,
                            children: (0, n.jsx)(s(988022).p, { ...e,
                                style: p.toggleButton,
                                onClick: () => {
                                    x(!0)
                                },
                                size: "sm",
                                iconLeading: {
                                    icon: s(454433).filterFillIcon,
                                    size: s(986939).A.isMobile ? 18 : "default",
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary"
                                }
                            })
                        })
                    })
                })
            }
            let y = (0, s(109939).YK)({
                    title: {
                        defaultMessage: "Updated comments & suggestions",
                        id: "GetNotifiedOnboardingTooltip.title"
                    },
                    body: {
                        defaultMessage: "Better filters and notification settings to help you get through feedback",
                        id: "GetNotifiedOnboardingTooltip.body"
                    },
                    button: {
                        defaultMessage: "Got it",
                        id: "GetNotifiedOnboardingTooltip.button"
                    }
                }),
                x = {
                    position: "relative"
                },
                f = {
                    position: "absolute",
                    top: -1,
                    insetInlineStart: 1
                };

            function h({
                children: e
            }) {
                let t = (0, s(533992).v3)(),
                    i = (0, s(109939).tz)(),
                    l = (0, o.useRef)(null),
                    r = (0, s(647624).r)({
                        getElement: () => l.current
                    }),
                    a = (0, s(682985).K8)(() => s(696190).default.isVisible("get_notified_onboarding_tooltip"), []),
                    d = (0, o.useCallback)(() => {
                        (0, s(357709).Sq)(t, {
                            callout_key: "get_notified_onboarding_tooltip",
                            placement_key: "Tooltip",
                            dismiss_type: "tooltip_dismiss"
                        }), (0, s(59579).a)(t, "get_notified_onboarding_tooltip")
                    }, [t]),
                    c = (0, o.useCallback)(() => {
                        (0, s(357709).Y5)(t, {
                            callout_key: "get_notified_onboarding_tooltip",
                            placement_key: "Tooltip",
                            click_type: "primary_cta"
                        }), d()
                    }, [t, d]),
                    u = (0, s(960253).I)(() => ({
                        buttonHaloPlaceholder: r ? {
                            width: r.width,
                            height: r.height + 2
                        } : {}
                    }), [r]);
                (0, o.useEffect)(() => {
                    a && r && (0, s(357709).DL)(t, {
                        callout_key: "get_notified_onboarding_tooltip",
                        placement_key: "Tooltip"
                    })
                }, [a, r, t]);
                let m = !!r && a;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        style: x,
                        children: [(0, n.jsx)("div", {
                            style: f,
                            children: (0, n.jsx)(s(315384).u, {
                                shape: "square",
                                borderRadius: 6,
                                children: (0, n.jsx)("div", {
                                    style: u.buttonHaloPlaceholder
                                })
                            })
                        }), (0, n.jsx)("div", {
                            ref: l,
                            children: e
                        })]
                    }), (0, n.jsx)(s(182718).zD, {
                        popupType: s(182718).nl.Popup,
                        open: m,
                        originRect: r,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "end",
                        originGap: 6,
                        preventCaptureEsc: !0,
                        preventPointerEvents: !1,
                        enableOutsideClickDismiss: !1,
                        trapFocus: !1,
                        disableContentScroll: !1,
                        disableMouseCapture: !0,
                        content: () => (0, n.jsx)(s(227830).P, {
                            title: i.formatMessage(y.title),
                            body: i.formatMessage(y.body),
                            icon: s(310573).l,
                            buttonsProps: {
                                type: "full-width",
                                button: {
                                    text: i.formatMessage(y.button),
                                    onClick: c
                                }
                            },
                            onDismiss: d
                        })
                    })]
                })
            }
            let b = {
                container: {
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: `1px solid ${s(632079).Tj.border.secondaryTranslucent}`
                },
                commentsHeader: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pointerEvents: "auto"
                },
                label: {
                    lineHeight: "inherit",
                    fontSize: 14,
                    color: s(632079).Tj.text.primary,
                    fontWeight: s(699422).Wy.medium,
                    display: "flex",
                    alignItems: "center",
                    margin: 0,
                    paddingTop: 12,
                    paddingInlineEnd: 12,
                    paddingBottom: 12,
                    paddingInlineStart: 16
                },
                actionButtonsContainer: {
                    paddingInlineEnd: 16
                }
            };

            function v({
                userActors: e,
                actorsForFilter: t,
                setActorsForFilter: o
            }) {
                let i = (0, s(682985).O$)(s(728372).AppStoreMainEditorCurrentBlockStore),
                    l = (0, s(682985).uB)(void 0, s(510969).A),
                    r = (0, s(682985).K8)(() => s(696190).default.isVisible("get_notified_onboarding_tooltip"), []);
                return (0, n.jsx)("div", {
                    style: b.container,
                    children: (0, n.jsxs)("div", {
                        style: b.commentsHeader,
                        className: s(828432).S4C,
                        children: [(0, n.jsx)("h2", {
                            style: b.label,
                            children: (0, n.jsx)(s(109939).sA, {
                                id: "topbarCommentsDesktop.header.discussionsLabel",
                                defaultMessage: "All discussions"
                            })
                        }), (0, n.jsx)("div", {
                            style: b.actionButtonsContainer,
                            children: r && i ? (0, n.jsx)(h, {
                                children: (0, n.jsx)(k, {
                                    buttonPopupStore: l,
                                    userActors: e,
                                    actorsForFilter: t,
                                    setActorsForFilter: o
                                })
                            }) : (0, n.jsx)(k, {
                                buttonPopupStore: l,
                                userActors: e,
                                actorsForFilter: t,
                                setActorsForFilter: o
                            })
                        })]
                    })
                })
            }

            function k({
                buttonPopupStore: e,
                userActors: t,
                actorsForFilter: o,
                setActorsForFilter: i
            }) {
                let l = (0, s(682985).O$)(s(728372).AppStoreMainEditorCurrentBlockStore);
                return (0, n.jsxs)(s(4458).fI, {
                    alignItems: "center",
                    gap: 4,
                    children: [(0, n.jsx)(g, {
                        userActors: t,
                        actorsForFilter: o,
                        setActorsForFilter: i
                    }), l ? (0, n.jsx)(s(970475).O, {
                        blockStore: l,
                        from: "comments_sidebar",
                        buttonPopupStore: e,
                        renderType: "button"
                    }) : null]
                })
            }
            let S = {
                borderRadius: 6
            };

            function j(e) {
                let {
                    hasOpenDiscussions: t,
                    hasResolvedDiscussions: l
                } = e, r = (0, o.useCallback)(() => {
                    i("commentsAndSuggestions"), s(449473).B8.setToOpenDiscussionsFilters()
                }, []), a = (0, o.useCallback)(() => {
                    i("commentsAndSuggestions"), s(449473).B8.setToResolvedDiscussionsFilters()
                }, []);
                return t ? (0, n.jsx)(s(548436).A, {
                    size: "lg",
                    onClick: r,
                    style: S,
                    children: (0, n.jsx)(s(109939).sA, {
                        id: "updateSidebar.commentContainer.emptyCommentsShowOpenButton",
                        defaultMessage: "Show all open"
                    })
                }) : l ? (0, n.jsx)(s(548436).A, {
                    size: "lg",
                    onClick: a,
                    style: S,
                    children: (0, n.jsx)(s(109939).sA, {
                        id: "updateSidebar.commentContainer.emptyCommentsShowResolvedButton",
                        defaultMessage: "Show all resolved"
                    })
                }) : null
            }
            let A = {
                commentsContainerMessage: {
                    fontWeight: s(699422).Wy.semibold,
                    color: s(632079).Tj.text.secondary,
                    marginTop: 4
                },
                commentsContainerSecondaryMessage: {
                    fontWeight: s(699422).Wy.regular,
                    color: s(632079).Tj.text.secondary,
                    marginBottom: 14
                },
                commentsContentStyle: {
                    position: "relative",
                    minHeight: 0,
                    display: "flex",
                    flexDirection: "column",
                    background: s(632079).Tj.background.primary,
                    marginInlineEnd: 0,
                    pointerEvents: "auto",
                    height: "100%"
                }
            };

            function C(e) {
                let {
                    environment: t,
                    device: o,
                    navigableBlockStore: i,
                    hasOpenDiscussions: l,
                    hasResolvedDiscussions: r
                } = e, a = l || r, d = (0, s(682985).K8)(() => {
                    let e;
                    if (s(986939).A.isMobile || !t.currentUser.isLoggedIn() || !(null != i && i.canComment())) return !1;
                    let o = (e = s(358377).default.hasSelection() && s(358377).default.state.multiSelection && (0, s(746473).Y2)(s(358377).default.state.multiSelection.start.store)) && "block" === e.table ? e : void 0;
                    return !!o && "page" !== o.getType() || "section_hide" !== (0, s(613968).Rn)()
                }, [t.currentUser, i]), c = (0, s(960253).I)(() => ({
                    commentsEmptyStyle: {
                        flex: 1,
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        textAlign: "center",
                        fontSize: 14,
                        position: "relative",
                        background: s(632079).Tj.background.primary,
                        marginInlineEnd: 0,
                        pointerEvents: "auto",
                        paddingTop: 10,
                        marginTop: o.isPhone ? 80 : void 0
                    }
                }), [o.isPhone]);
                return (0, n.jsx)("div", {
                    style: A.commentsContentStyle,
                    children: (0, n.jsxs)("div", {
                        style: c.commentsEmptyStyle,
                        children: [a ? (0, n.jsx)(s(16275).I, {
                            icon: s(895105).filterIcon,
                            size: "xl",
                            colorVariant: "secondary"
                        }) : (0, n.jsx)(s(16275).I, {
                            icon: s(552697).chatIcon,
                            size: "xl",
                            colorVariant: "secondary"
                        }), (0, n.jsx)("div", {
                            style: A.commentsContainerMessage,
                            children: (0, n.jsx)(T, {
                                hasOpenDiscussions: l,
                                hasResolvedDiscussions: r
                            })
                        }), (0, n.jsx)("div", {
                            style: A.commentsContainerSecondaryMessage,
                            children: (0, n.jsx)(M, {
                                hasOpenDiscussions: l ? ? !1,
                                hasResolvedDiscussions: r ? ? !1
                            })
                        }), d ? (0, n.jsx)(j, {
                            hasOpenDiscussions: l,
                            hasResolvedDiscussions: r
                        }) : null]
                    })
                })
            }

            function M({
                hasOpenDiscussions: e,
                hasResolvedDiscussions: t
            }) {
                return e ? (0, n.jsx)(s(109939).sA, {
                    id: "updateSidebar.commentContainer.emptyButHasOpenComments",
                    defaultMessage: "There are open threads on this page"
                }) : t ? (0, n.jsx)(s(109939).sA, {
                    id: "updateSidebar.commentContainer.emptyButHaResolvedComments",
                    defaultMessage: "There are resolved threads on this page"
                }) : null
            }

            function T({
                hasOpenDiscussions: e,
                hasResolvedDiscussions: t
            }) {
                return e || t ? (0, n.jsx)(s(109939).sA, {
                    id: "updateSidebar.commentContainer.emptyDiscussionsFromFilters",
                    defaultMessage: "Apply filters to see discussions"
                }) : (0, n.jsx)(s(109939).sA, {
                    id: "updateSidebar.commentContainer.emptyNoDiscussions",
                    defaultMessage: "No discussions"
                })
            }
            let w = {
                    marginInlineStart: -12,
                    marginInlineEnd: -12,
                    width: "calc(100% + 28px)",
                    lineHeight: void 0,
                    cursor: "pointer"
                },
                _ = o.forwardRef(function(e, t) {
                    let {
                        currentBlockStore: i,
                        discussionStore: l,
                        showAllRepliesAfterTimestamp: r,
                        focused: a,
                        isLast: d,
                        location: c
                    } = e, u = (0, s(682985).K8)(() => s(575125).A.state.open && s(575125).A.state.discussionIds || [], []);
                    (0, o.useEffect)(() => {
                        var e;
                        if (a) {
                            s(350175).A.setState({
                                source: "update_sidebar",
                                discussionIds: [l.id]
                            });
                            let e = setTimeout(() => {
                                var e;
                                (null == (e = s(350175).A.state) || null == (e = e.discussionIds) ? void 0 : e[0]) === l.id && s(490817).A.markDiscussionsInteractedWith([l.id])
                            }, 1500);
                            return () => {
                                clearTimeout(e)
                            }
                        }(null == (e = s(350175).A.state) || null == (e = e.discussionIds) ? void 0 : e[0]) === l.id && s(350175).A.setState({
                            discussionIds: []
                        })
                    }, [a, l]);
                    let m = (0, s(682985).K8)(() => {
                            var e;
                            return (null == (e = s(350175).A.state) ? void 0 : e.discussionIds) || []
                        }, []),
                        p = l.id,
                        {
                            parentId: g,
                            currentSpaceId: y
                        } = (0, s(682985).K8)(() => ({
                            parentId: l.getParentId(),
                            currentSpaceId: l.getSpaceId()
                        }), [l]),
                        x = g ? s(970831).B.createChildStore(l, {
                            table: s(832375).evP,
                            id: g
                        }) : void 0,
                        f = u.includes(p),
                        h = m.includes(p),
                        b = (0, s(960253).I)(() => ({
                            discussionContainer: {
                                paddingTop: s(986939).A.isMobile ? 4 : 6,
                                borderBottom: d || s(986939).A.isMobile ? void 0 : `1px solid ${s(632079).Tj.border.secondaryTranslucent}`,
                                transition: "background 300ms ease"
                            },
                            hoveredStyle: {
                                background: "sidebar" === c ? s(632079).Tj.hoveredDiscussionBackground : void 0
                            },
                            pressedStyle: {
                                background: "sidebar" === c ? s(632079).Tj.yellow.background.primaryTranslucent : void 0
                            }
                        }), [d, c]),
                        {
                            value: v
                        } = (0, s(815048).fJ)(s(656915).commentsDependency);
                    if (!v || !x || !y) return null;
                    let k = (0, n.jsx)("div", {
                        className: `sidebar-discussion-${p} ${s(828432)._57}`,
                        onClick: e.onClick,
                        onMouseEnter: e.onMouseEnter,
                        ref: t,
                        style: { ...b.discussionContainer,
                            ...h ? b.hoveredStyle : {},
                            ...f ? b.pressedStyle : {}
                        },
                        children: (0, n.jsx)(s(656915).PW, {
                            store: l,
                            blockStore: i,
                            format: v.discussionHelpers.DiscussionFormat.Sidebar,
                            isFirst: !1,
                            isOnly: !1,
                            showResolveButtonByDefaultIfPossible: !1,
                            discussionLocation: "updates_sidebar",
                            showAllRepliesAfterTimestamp: r
                        })
                    });
                    return (0, n.jsx)(s(636518).Ay, {
                        allowTextSelection: !0,
                        title: k,
                        style: w
                    })
                }),
                I = {
                    paddingInlineStart: 16,
                    paddingTop: 16,
                    marginBottom: 0,
                    marginTop: 0,
                    fontSize: 12,
                    transition: "background 300ms ease"
                };

            function D(e) {
                let {
                    firstItemId: t,
                    ignoreFirstItemState: o
                } = e, i = (0, s(533992).Y0)(), l = (0, s(682985).K8)(() => {
                    var e;
                    return !o && !!t && (null == (e = s(350175).A.state) ? void 0 : e.discussionIds.some(e => e === t))
                }, [t, o]), r = (0, s(682985).K8)(() => !o && s(575125).A.state.open && s(575125).A.state.discussionIds && s(575125).A.state.discussionIds.some(e => e === t), [t, o]), a = (0, s(960253).I)(() => ({
                    hoveredStyle: {
                        background: "sidebar" === e.location ? s(632079).Tj.hoveredDiscussionBackground : void 0
                    },
                    pressedStyle: {
                        background: "sidebar" === e.location ? s(632079).Tj.yellow.background.primaryTranslucent : void 0
                    },
                    mobileTitleStyle: {
                        fontSize: 13,
                        fontWeight: s(699422).Wy.medium,
                        paddingBottom: 0,
                        textTransform: "unset",
                        marginTop: i.isPhone ? 0 : -12
                    }
                }), [e.location, i.isPhone]);
                return (0, n.jsx)(s(844565).A, {
                    desktopTitleStyle: { ...I,
                        ...l ? a.hoveredStyle : {},
                        ...r ? a.pressedStyle : {}
                    },
                    mobileTitleStyle: a.mobileTitleStyle,
                    disableDesktopPadding: !0,
                    disableMobileBorders: !0,
                    ...e
                })
            }
            let B = {
                hoveredStyle: {
                    background: s(632079).Tj.hoveredDiscussionBackground
                },
                pressedStyle: {
                    background: s(632079).Tj.yellow.background.primaryTranslucent
                },
                basicDesktopTitleStyle: {
                    paddingInlineStart: 16,
                    paddingTop: 16,
                    marginBottom: 0,
                    marginTop: 0,
                    fontSize: 12,
                    transition: "background 300ms ease"
                },
                mobileTitleStyle: {
                    fontSize: 13,
                    fontWeight: s(699422).Wy.medium,
                    paddingBottom: 0,
                    textTransform: "unset",
                    marginTop: -12
                }
            };

            function F(e) {
                let t = (0, s(682985).K8)(() => s(827862).A.state.isHovered, []),
                    o = (0, s(682985).K8)(() => s(827862).A.state.isActivelyComposing, []);
                return (0, n.jsx)(s(844565).A, {
                    desktopTitleStyle: { ...B.basicDesktopTitleStyle,
                        ...t ? B.hoveredStyle : {},
                        ...o ? B.pressedStyle : {}
                    },
                    mobileTitleStyle: B.mobileTitleStyle,
                    disableDesktopPadding: !0,
                    disableMobileBorders: !0,
                    ...e
                })
            }
            let P = new(s(419110)).$;

            function R(e) {
                s(862921).A.UpdateSidebarCommentScroller = e
            }
            let K = {
                commentsContentStyle: {
                    position: "relative",
                    minHeight: 0,
                    display: "flex",
                    flexDirection: "column",
                    background: s(632079).Tj.background.primary,
                    marginInlineEnd: 0,
                    pointerEvents: "auto",
                    height: "100%"
                },
                menuList: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10
                }
            };

            function E(e) {
                let {
                    timeViewed: t,
                    location: i
                } = e, l = (0, s(533992).v3)(), r = (0, s(533992).Y0)(), a = (0, s(109939).tz)(), [d, c] = (0, o.useState)(!1), [u, m] = (0, o.useState)([]), p = (0, s(682985).O$)(s(728372).AppStoreMainEditorCurrentBlockStore), y = l.currentUser.id, {
                    value: x
                } = (0, s(815048).fJ)(s(656915).commentsDependency), f = (0, s(714050).S)(p, t), {
                    currentCommentsMode: h,
                    currentCommentsType: b,
                    activeDiscussionStore: k,
                    hasActiveDraftComment: S
                } = (0, s(682985).K8)(() => ({
                    currentCommentsMode: s(449473).B8.state.commentsMode,
                    currentCommentsType: s(449473).B8.state.commentsTypeMode,
                    activeDiscussionStore: s(449473).B8.state.activeDiscussionStore,
                    hasActiveDraftComment: s(449473).B8.state.hasActiveDraftComment
                }), []), j = (0, s(682985).K8)(() => (0, s(832122).m)(l), [l]), {
                    isNativeCommentsViewer: A,
                    hasSpecificDiscussionId: M
                } = (0, s(682985).K8)(() => {
                    let e = (0, s(500880).Xz)(l.TabbedRouterStore.state);
                    if ("web" === e.type) {
                        var t;
                        let s = (null == (t = e.redirectedTo) ? void 0 : t.route) ? ? e.route,
                            o = "nativeTab" === s.name && "comments" === s.tab;
                        return {
                            isNativeCommentsViewer: o,
                            hasSpecificDiscussionId: o && "discussionId" in s && void 0 !== s.discussionId
                        }
                    }
                    return {
                        isNativeCommentsViewer: !1,
                        hasSpecificDiscussionId: !1
                    }
                }, [l]), T = r.isIOS && A, w = (0, s(682985).K8)(() => {
                    let e = ("comments" === b || "commentsAndSuggestions" === b) && ("unresolved" === h || "anyResolution" === h),
                        t = (s(332190).A.hasContent() || s(827862).A.state.isActivelyComposing) && s(332190).A.isDraftCommentOnValidSelection();
                    return (j || s(986939).A.isMobile) && t && e && s(332190).A.ifPropertyCommentShouldDisplay()
                }, [h, b, j]), I = (0, s(682985).K8)(() => s(575125).A.getOpenDiscussionIds(), []), {
                    discussionStoresFilteredByTypeAndModeAndReadStatus: B,
                    hasOpenDiscussions: E,
                    hasResolvedDiscussions: z
                } = (0, s(682985).K8)(() => {
                    let e = "commentsAndSuggestions" === b ? f : "none" === b ? [] : f.filter(e => e.getType() === s(449473).zX[b]),
                        t = s(449473).B8.state.discussionStatusFilters,
                        o = f.some(e => !e.getResolved());
                    return {
                        hasOpenDiscussions: o,
                        hasResolvedDiscussions: f.some(e => e.getResolved()),
                        discussionStoresFilteredByTypeAndModeAndReadStatus: e.filter(e => {
                            let {
                                read: o,
                                unread: i,
                                resolved: n
                            } = t, l = (0, s(47354).s)({
                                discussionStore: e,
                                navigableBlockStore: p
                            });
                            return o && !l && !e.getResolved() || i && l || n && e.getResolved()
                        })
                    }
                }, [f, b, p]), O = B.map(e => e.id), V = (0, s(682985).K8)(() => {
                    if (u.length > 0) {
                        let e = new Set(u.map(e => e.getActorUserId()));
                        return B.filter(t => t.getCommentStoresSortedByCreatedTime().flatMap(e => {
                            let t = e.getCreatedByPointer();
                            return (null == t ? void 0 : t.table) === s(832375).oo9 ? [t.id] : []
                        }).some(t => e.has(t)))
                    }
                    return B
                }, [B, u]), L = (0, s(682985).K8)(() => (0, s(241838).getSetOfUsersInDiscussions)(B), [B]);
                (0, o.useEffect)(() => {
                    if ("popup" === i && d) return () => {
                        s(490817).A.markDiscussionsInteractedWith(O)
                    }
                }, [i, O, d]);
                let N = (0, s(960253).I)(() => ({
                        scrollerStyle: {
                            flexGrow: 1,
                            minHeight: 0,
                            transform: "translateZ(0px)",
                            zIndex: 1,
                            overflow: "hidden auto",
                            marginBottom: 0,
                            paddingBottom: 0
                        },
                        closeButton: {
                            position: "absolute",
                            insetInlineEnd: T ? 24 : 12,
                            borderRadius: "50%",
                            background: s(632079).Tj.background.tertiaryTranslucent
                        },
                        topbar: {
                            marginBottom: r.isPhone && k ? 4 : -3,
                            ...T ? {
                                paddingTop: 12
                            } : {}
                        }
                    }), [k, r.isPhone, T]),
                    W = (0, o.useRef)(null),
                    H = (0, s(682985).K8)(() => {
                        if (!x) return {};
                        let e = s(381453).$z(V, e => {
                            let o = x.discussionHelpers.getLatestRelevantComment({
                                recordStore: e,
                                currentUserId: y,
                                timestamp: t
                            });
                            return o ? (0, s(850640).aD)(o.getCreatedTime()) : ""
                        });
                        return delete e[""], e
                    }, [x, V, t, y]),
                    U = (0, s(682985).K8)(() => !x || x.discussionHelpers.anyDiscussionCommentsLoading(V), [x, V]);
                (0, o.useEffect)(() => {
                    d || U || c(!0)
                }, [d, U]);
                let $ = (0, o.useCallback)(() => {
                        s(827862).A.setHoverWithSource("comments_pane"), s(350175).A.reset()
                    }, []),
                    q = (0, o.useCallback)(() => {
                        s(827862).A.resetHoverSource("comments_pane")
                    }, []),
                    G = (0, s(682985).K8)(() => s(827862).A.state.isActivelyComposing, []),
                    Z = (0, s(682985).K8)(() => s(718106).W.state.source, []),
                    [Y, J] = (0, s(682985).K8)(() => s(381453).jB(V, e => (0, s(47354).s)({
                        discussionStore: e,
                        navigableBlockStore: p
                    })), [V, p]);
                if (!p || !H || !d) return (0, n.jsx)(s(403).J, {
                    areaHeight: window.innerHeight
                });
                let Q = (0, s(850640).aD)(Date.now()),
                    X = Object.keys(H).sort().reverse();
                w && (0 === X.length || !X.includes(Q)) && X.unshift(Q);
                let ee = X.map((e, o) => {
                        let r = (0, s(850640).ZF)({
                                value: {
                                    type: "date",
                                    start_date: e
                                },
                                date_format: "relative",
                                userTimeZone: (0, s(714350).P)(),
                                intl: a,
                                allowRelativeDates: !0
                            }),
                            d = H[e],
                            c = w && e === Q,
                            u = [];
                        return c && u.push({
                            key: "draft-discussion-in-comments-pane",
                            render: e => (0, n.jsx)(s(211571).A, {
                                environment: l,
                                shouldShowBottomDividerLine: 1 !== X.length || (null == d ? void 0 : d.length) !== 0,
                                menuListItemProps: e,
                                shouldExpandDiscussionWidth: !0,
                                onMouseEnter: $,
                                onMouseLeave: q
                            }),
                            action: () => {
                                let e = s(332190).A.getDiscussionInputStore();
                                e && (s(827862).A.setActiveWithSource("comments_pane"), s(575125).A.reset(), (0, s(758275).x)({
                                    currentBlockStore: p,
                                    discussionInputStore: e,
                                    environment: l,
                                    dontAffectCursor: G,
                                    animateScroll: !0
                                }))
                            }
                        }), u.push(...d ? d.map((e, r) => {
                            let a = e.getRecordStoreUIParent() ? ? p;
                            return {
                                key: e.id,
                                render: s => (0, n.jsx)(_, { ...s,
                                    currentBlockStore: a,
                                    discussionStore: e,
                                    isFirstInSection: 0 === r && !c,
                                    location: i,
                                    isLast: r === d.length - 1 && o === X.length - 1,
                                    showAllRepliesAfterTimestamp: t
                                }),
                                action: () => {
                                    var t;
                                    G && s(827862).A.resetAllActiveSources(), s(554067).DZ({
                                        discussionStore: e,
                                        currentBlockStore: p,
                                        environment: l,
                                        analyticsFrom: "updates_sidebar",
                                        currentEl: W.current,
                                        animateScroll: !0,
                                        discussionReadStatus: (0, s(47354).g)({
                                            discussionStore: e,
                                            navigableBlockStore: null == (t = e.getParentStore()) ? void 0 : t.getNavigableBlockStore()
                                        })
                                    })
                                }
                            }
                        }) : []), {
                            key: e,
                            render: e => c ? (0, n.jsx)(F, {
                                title: r,
                                ...e
                            }) : (0, n.jsx)(D, {
                                title: r,
                                firstItemId: d[0].id,
                                location: i,
                                ignoreFirstItemState: c,
                                ...e
                            }),
                            items: u
                        }
                    }),
                    et = ee.flatMap(e => e.items).findIndex(e => I.includes(e.key.toString())),
                    es = 0 !== V.length || w ? (0, n.jsx)(s(126767).H, {
                        type: s(644154).A.Y,
                        style: N.scrollerStyle,
                        className: s(828432).bzV,
                        ref: R,
                        children: (0, n.jsx)(s(558045).A, {
                            disableKeyboard: !0,
                            store: P,
                            type: s(558045).O.Vertical,
                            initialFocus: et >= 0 ? et : void 0,
                            scrollElementIntoView: e => {
                                let t = e.getBoundingClientRect(),
                                    o = s(801113).ek(l.device.isElectronMac),
                                    i = window.innerHeight,
                                    n = o + 50;
                                if (t.height >= i - n) return;
                                let r = t.top >= n && t.top <= i,
                                    a = r && t.bottom >= i,
                                    d = t.bottom >= n && t.bottom <= i,
                                    c = d && t.top - n < 0,
                                    u = .4 * t.height;
                                a && Math.abs(t.top - i) < u ? (0, s(931511).v)(e, {
                                    edgeDist: i - t.height - n,
                                    animate: !0
                                }) : c && Math.abs(t.bottom - n) < u ? (0, s(931511).v)(e, {
                                    edgeDist: 0,
                                    animate: !0
                                }) : r || d || (0, s(931511).v)(e, {
                                    edgeDist: 0,
                                    animate: !0
                                })
                            },
                            sections: ee
                        })
                    }) : (0, n.jsx)(C, {
                        environment: l,
                        device: r,
                        navigableBlockStore: p,
                        actorsForFilter: u,
                        hasOpenDiscussions: E,
                        hasResolvedDiscussions: z
                    });
                if (!s(986939).A.isMobile) return (0, n.jsxs)("div", {
                    style: K.commentsContentStyle,
                    ref: W,
                    children: [(0, n.jsx)(v, {
                        userActors: L,
                        actorsForFilter: u,
                        setActorsForFilter: m
                    }), es]
                }); {
                    let t = async e => {
                            await s(554067).JO({
                                environment: l,
                                discussionStore: e,
                                currentBlockStore: p,
                                topOffset: 160,
                                animate: !0
                            }), s(449473).B8.update(t => ({ ...t,
                                activeDiscussionStore: e
                            }))
                        },
                        o = (0, s(78172).s)({
                            unreadDiscussions: Y,
                            readDiscussions: J,
                            handleDiscussionClick: t,
                            handleDraftDiscussionClick: () => {
                                let e = s(332190).A.getDiscussionInputStore();
                                (0, s(758275).x)({
                                    currentBlockStore: p,
                                    discussionInputStore: e,
                                    environment: l,
                                    animateScroll: !0,
                                    onlyScroll: !0
                                }), s(449473).B8.update(e => ({ ...e,
                                    hasActiveDraftComment: !0
                                }))
                            },
                            isMobile: !0,
                            hasDraftComment: !!w
                        });
                    return (0, n.jsx)(s(747369).A, {
                        menuType: s(649476).gu.Modal,
                        title: k ? (0, n.jsx)(s(109939).sA, {
                            defaultMessage: "Discussion",
                            id: "discussionSheet.activeDiscussion.title"
                        }) : S ? (0, n.jsx)(s(109939).sA, {
                            defaultMessage: "Draft comment",
                            id: "draftCommentSheet.title"
                        }) : (0, n.jsx)(s(109939).sA, {
                            defaultMessage: "All discussions",
                            id: "discussionsSheet.header.title"
                        }),
                        whiteBackground: !0,
                        onClickLeft: () => {
                            s(449473).B8.update(e => ({ ...e,
                                activeDiscussionStore: void 0,
                                hasActiveDraftComment: !1
                            })), (0, s(104310).u)({
                                event: {
                                    eventName: "tap_back_to_new_discussions_sheet",
                                    eventProperties: {
                                        landed_on_sheet_from: Z
                                    }
                                }
                            })
                        },
                        left: k || S ? A && M ? void 0 : (0, n.jsx)(s(16275).I, {
                            icon: s(746204).w,
                            colorVariant: "secondary"
                        }) : (0, n.jsx)(g, {
                            userActors: L,
                            actorsForFilter: u,
                            setActorsForFilter: m
                        }),
                        right: (0, n.jsx)(s(374533).A, {
                            icon: s(766970).xMarkFillIcon,
                            onClick: e.onMobileClose,
                            style: N.closeButton,
                            ariaLabel: a.formatMessage({
                                id: "updateSidebar.header.closeLabel",
                                defaultMessage: "Close"
                            })
                        }),
                        shouldRenderRightDirectly: !0,
                        topbarStyle: N.topbar,
                        scrollerStyle: r.isPhone ? {
                            height: "var(--full-viewport-height)"
                        } : void 0,
                        children: k && x ? (0, n.jsx)(s(656915).PW, {
                            store: k,
                            blockStore: p,
                            format: x.discussionHelpers.DiscussionFormat.Sidebar,
                            isFirst: !0,
                            isOnly: !0,
                            discussionLocation: "updates_sidebar",
                            showResolveButtonByDefaultIfPossible: !0,
                            onDismiss: () => {
                                s(449473).B8.update(e => ({ ...e,
                                    activeDiscussionStore: void 0,
                                    hasActiveDraftComment: !1
                                }))
                            }
                        }) : S ? (0, n.jsx)(s(211571).A, {
                            environment: l,
                            shouldShowBottomDividerLine: !1,
                            shouldExpandDiscussionWidth: !0,
                            onMouseEnter: $,
                            onMouseLeave: q,
                            onMobileClose: e.onMobileClose
                        }) : 0 === o.length ? (0, n.jsx)(C, {
                            environment: l,
                            device: r,
                            navigableBlockStore: p,
                            actorsForFilter: u,
                            hasOpenDiscussions: E,
                            hasResolvedDiscussions: z
                        }) : (0, n.jsx)(s(558045).A, {
                            type: s(558045).O.Vertical,
                            sections: o,
                            initialFocus: void 0,
                            style: K.menuList
                        })
                    })
                }
            }
        },
        454433: (e, t, s) => {
            s.r(t), s.d(t, {
                filterFillIcon: () => i,
                iconDefinition: () => o
            }), s(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 4.62 15.76 10.75",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M3 4.625a.875.875 0 1 0 0 1.75h14a.875.875 0 0 0 0-1.75zm2.125 6.242h9.75a.875.875 0 0 0 0-1.75h-9.75a.875.875 0 1 0 0 1.75m1.25 3.633c0-.483.392-.875.875-.875h5.5a.875.875 0 0 1 0 1.75h-5.5a.875.875 0 0 1-.875-.875"
                    })
                },
                i = (0, s(104509).wt)("filterFill", o, "fill")
        },
        466290: (e, t, s) => {
            s.d(t, {
                K: () => i
            });
            var o = () => s(906745);

            function i(e, t) {
                s(696190).default.isVisible(t.key) && (s(696190).default.removeMessage(t.key), s(986939).A.isAdminMode || (! function(e, t) {
                    let i = s(728372).AppStoreCurrentUserSettingsStore.state,
                        n = null == i ? void 0 : i.getSettings();
                    if (!n || !i) return;
                    let l = new(s(543346)).GO(n.callout_placement_exposures);
                    for (let e of t) l.add(e, o().DateTime.now().toMillis());
                    (0, s(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addPlacementExposures",
                        cellTarget: "main",
                        canUndo: !0,
                        perform: e => {
                            (0, s(862759).m)({
                                userSettingsStore: i,
                                transaction: e,
                                data: {
                                    callout_placement_exposures: l.exportUserSetting()
                                }
                            })
                        }
                    })
                }(e, [(0, s(125542).Q3)(t)]), (0, s(476114).q)(e, t), s(728372).AppStoreInAppCalloutStore.state.updateCalloutStatus({
                    calloutId: t.key,
                    visible: !1
                }), (0, s(819416).Z)(e, t.key)), s(696190).default.isPendingDynamicMessage(t.key) && (0, s(740063).G)(t.key))
            }
        },
        476114: (e, t, s) => {
            function o({
                environment: e,
                message: t,
                overwrite: i = !1
            }) {
                let n = s(728372).AppStoreCurrentUserSettingsStore.state,
                    l = null == n ? void 0 : n.getSettings();
                if (!n || !l) return;
                let r = new Map((l.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                (!r.has(t.key) || i) && r.set(t.key, {
                    name: t.key,
                    timestamp: s(906745).DateTime.now().toMillis()
                }), (0, s(377796).createAndCommit)({
                    environment: e,
                    userAction: "messageActions.addUserSettingsDismissal",
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        (0, s(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                callout_dismissal_timestamps: Array.from(r.values())
                            }
                        })
                    }
                })
            }

            function i(e, t) {
                let i = (0, s(125542).K0)(t);
                "once_per_user" === i ? o({
                    environment: e,
                    message: t
                }) : "once_per_space" === i && function({
                    environment: e,
                    message: t,
                    overwrite: o = !1
                }) {
                    let i = s(728372).AppStoreSidebarSpaceViewStore.state,
                        n = null == i ? void 0 : i.getSettings();
                    if (!i || !n) return;
                    let l = i.getSpaceId(),
                        r = new Map((n.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                    (!r.has(t.key) || o) && r.set(t.key, {
                        name: t.key,
                        timestamp: s(906745).DateTime.now().toMillis()
                    }), (0, s(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addSpaceViewDismissal",
                        canUndo: !0,
                        cellTarget: l ? {
                            spaceWithId: l
                        } : void 0,
                        perform: e => {
                            s(380762).AG(i, e, {
                                callout_dismissal_timestamps: Array.from(r.values())
                            })
                        }
                    })
                }({
                    environment: e,
                    message: t
                })
            }
            s.d(t, {
                q: () => i,
                H: () => o
            }), s(581454)
        }
    }
]);