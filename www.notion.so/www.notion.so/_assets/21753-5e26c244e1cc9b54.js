"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [21753], {
        67207: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => l,
                personSlashIcon: () => n
            }), r(296540);
            let l = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.31 2.31 14.13 16.25",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M3.53 2.463a.626.626 0 0 1 .882.067l.032.038q.008.013.018.025l12.687 14.875q.089.101.203.156a.625.625 0 0 1-1.014.72l-.928-1.08a2.4 2.4 0 0 1-1.26.362h-8.3c-.68 0-1.328-.288-1.74-.768-.43-.501-.591-1.217-.23-1.923C4.899 12.945 7.3 11.63 10 11.63q.3 0 .593.021l-1.001-1.166a3.28 3.28 0 0 1-2.267-1.22c-.536-.669-.825-1.532-.886-2.453L3.463 3.345a.626.626 0 0 1 .067-.882M10 12.88c-2.335 0-4.245 1.138-5.007 2.625-.104.203-.071.379.066.54.157.182.449.33.79.33h8.301c.155 0 .3-.032.426-.082l-2.707-3.154a6.8 6.8 0 0 0-1.87-.26M10 2.375c1.137 0 2.055.469 2.675 1.241.607.757.899 1.766.9 2.824 0 1.058-.292 2.067-.9 2.825q-.213.263-.472.477l-.811-.951q.168-.138.307-.309c.392-.487.625-1.2.625-2.042S12.09 4.887 11.7 4.4c-.38-.473-.936-.775-1.7-.775-.762 0-1.32.302-1.7.774a2.4 2.4 0 0 0-.278.44l-.857-1.004q.076-.113.161-.219c.62-.772 1.538-1.241 2.675-1.241"
                    })
                },
                n = (0, r(104509).wt)("personSlash", l, "default")
        },
        262401: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => l,
                personSlashSmallIcon: () => n
            }), r(296540);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.81 1.85 11.03 12.84",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M3.033 2.206a.625.625 0 0 1 .88.066l.1.116q.018.03.04.058l9.61 11.175.03.034a.625.625 0 0 1-.948.815l-.483-.562c-.28.155-.607.242-.942.242H4.68c-.557 0-1.09-.236-1.43-.631a1.405 1.405 0 0 1-.19-1.593C3.883 10.313 5.824 9.254 8 9.254q.135.001.27.008l-.72-.84a2.66 2.66 0 0 1-1.728-.979c-.41-.511-.64-1.162-.708-1.856l-2.148-2.5a.625.625 0 0 1 .067-.881M8 10.354c-1.854 0-3.363.903-3.961 2.073-.073.143-.052.262.046.377a.8.8 0 0 0 .595.247h6.64a1 1 0 0 0 .187-.022l-2.153-2.506A5.4 5.4 0 0 0 8 10.353M8 1.85c.925 0 1.674.383 2.18 1.012.494.617.73 1.436.73 2.291s-.236 1.674-.73 2.29l-.09.105-.73-.848c.28-.377.45-.913.45-1.547 0-.664-.185-1.223-.49-1.602-.293-.366-.724-.6-1.32-.6-.595 0-1.027.233-1.32.6l-.014.017-.726-.843c.5-.548 1.205-.874 2.06-.874"
                    })
                },
                n = (0, r(104509).wt)("personSlashSmall", l, "small")
        },
        321753: (e, t, r) => {
            r.d(t, {
                A: () => o,
                n: () => i
            });
            var l = r(296540),
                n = r(474848);

            function i(e) {
                return (0, r(960253).I)(() => ({
                    tooltipTextStyle: {
                        color: r(632079).Tj.text.inverseSecondary
                    },
                    tooltipAvatarContainer: {
                        display: "flex",
                        alignItems: "center",
                        marginInlineEnd: 8
                    },
                    tooltipContainer: {
                        display: "flex",
                        flexDirection: "row",
                        padding: "4px 6px",
                        alignItems: "center",
                        ...e
                    },
                    tooltipUserInfoContainer: {
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                }), [e])
            }
            let o = function(e) {
                let {
                    hasTooltip: t,
                    showAvatarInTooltip: o,
                    tooltipHeader: a,
                    style: s,
                    iconStyle: d,
                    isOffline: c,
                    borderStyle: u,
                    avatarShouldShowShadow: h,
                    initialOverrideStyle: v,
                    tooltipOverrideStyle: x,
                    userValue: f,
                    userStore: p,
                    avatar: m,
                    type: y = "avatar",
                    delayThreshold: S,
                    hasPersonHoverCard: g,
                    personHoverCardEntrypoint: j = "avatar",
                    avatarOutlineOffset: b
                } = e, w = (0, r(109939).tz)(), I = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore), C = (0, r(67499).S)(), U = (0, r(682985).K8)(() => (0, r(888).$)(C) ? ? I, [C, I]), k = e.size ? ? 18, {
                    initialStyle: P,
                    avatarWrapStyle: T,
                    avatarStyle: A,
                    proxiedImageStyle: B,
                    suspendedUserStyle: M,
                    deletedUserStyle: E
                } = (0, r(960253).I)(() => ({
                    initialStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        lineHeight: `${k}px`,
                        width: k,
                        height: k,
                        overflow: "hidden",
                        textAlign: "center",
                        fontSize: Math.max(.4375 * k, 11),
                        background: r(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: r(632079).Tj.icon.secondary,
                        opacity: c ? .3 : 1,
                        isolation: "auto",
                        ...d,
                        ...v
                    },
                    avatarWrapStyle: {
                        background: r(632079).Tj.background.primary,
                        borderRadius: "100%",
                        boxShadow: h ? r(632079).Tj.avatarBoxShadow : "none",
                        outlineWidth: 1,
                        outlineStyle: u ? ? "solid",
                        outlineColor: r(632079).Tj.border.secondaryTranslucent,
                        outlineOffset: b ? ? -1,
                        ...d
                    },
                    avatarStyle: {
                        borderRadius: "100%",
                        width: k,
                        height: k,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        opacity: c ? .3 : 1,
                        ...d
                    },
                    proxiedImageStyle: {
                        width: k,
                        height: k,
                        ...d
                    },
                    suspendedUserStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        width: k - 2,
                        height: k - 2,
                        overflow: "hidden",
                        background: r(632079).Tj.suspendedUIUserAvatarBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: r(632079).Tj.text.primary,
                        opacity: c ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        ...d
                    },
                    deletedUserStyle: {
                        boxSizing: "border-box",
                        borderRadius: "100%",
                        width: k,
                        height: k,
                        overflow: "hidden",
                        background: r(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: r(632079).Tj.icon.secondary,
                        opacity: c ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: `1px solid ${r(632079).Tj.border.secondary}`,
                        ...d
                    }
                }), [v, h, u, c, k, d, b]), {
                    tooltipTextStyle: R,
                    tooltipAvatarContainer: _,
                    tooltipContainer: z,
                    tooltipUserInfoContainer: K
                } = i(x), V = (0, l.useMemo)(() => p ? ? (f ? r(993189).Bj6.fromValue(r(832375).oo9, f) : void 0), [p, f]), q = (0, l.useMemo)(() => V instanceof r(807825).L ? V : U && V ? r(807825).L.createChildStore(U, {
                    id: V.id,
                    table: r(832375).oo9
                }) : void 0, [V, U]), D = (0, r(682985).K8)(() => null == V ? void 0 : V.getFullName(w), [V, w]), F = (0, r(682985).K8)(() => null == V ? void 0 : V.getDisplayName(w), [V, w]), W = (0, r(682985).K8)(() => null == V ? void 0 : V.getEmail(), [V]), L = (0, r(682985).K8)(() => null == V ? void 0 : V.getProfilePhoto(), [V]), O = (0, r(682985).K8)(() => null == V ? void 0 : V.getIsSuspended(), [V]), H = (0, r(682985).K8)(() => null == V ? void 0 : V.getIsDeleted(), [V]), $ = (0, r(525272).E)({
                    spaceStore: U,
                    viewedUserId: null == V ? void 0 : V.id
                }) && g, G = () => e.defaultAvatar ? ? (0, n.jsx)(r(16275).I, {
                    icon: r(476719).personFillSmallIcon,
                    size: "sm",
                    colorVariant: "primary"
                }), N = (e, t, l) => {
                    if (!e) return G();
                    let i = {
                        width: "100%",
                        height: "100%",
                        borderRadius: "100%",
                        ...l
                    };
                    return (0, n.jsx)(r(989059).A, {
                        alt: t,
                        src: e,
                        enableLoadingShimmer: !0,
                        style: i,
                        placeholderStyle: i
                    })
                }, J = e => (0, n.jsxs)("div", {
                    style: z,
                    children: [(0, n.jsx)("div", {
                        style: _,
                        children: X()
                    }), (0, n.jsxs)("div", {
                        style: K,
                        children: [V ? F : null == m ? void 0 : m.name, e ? void 0 : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("br", {}), V ? (0, n.jsx)("span", {
                                style: R,
                                children: W
                            }) : null != m && m.email ? (0, n.jsx)("span", {
                                style: R,
                                children: null == m ? void 0 : m.email
                            }) : null]
                        })]
                    })]
                }), Q = e => {
                    let t = r(871871).PE(e)[0].toUpperCase();
                    return (0, n.jsx)("div", {
                        style: T,
                        children: (0, n.jsx)("div", {
                            style: P,
                            children: (0, n.jsx)("div", {
                                children: t
                            })
                        })
                    })
                }, X = () => {
                    if (O && V) return (0, n.jsx)("div", {
                        style: T,
                        children: (0, n.jsx)("div", {
                            style: M,
                            children: (0, n.jsx)(r(16275).I, {
                                icon: r(67207).personSlashIcon,
                                size: k - 2,
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if (H) return (0, n.jsx)("div", {
                        style: T,
                        children: (0, n.jsx)("div", {
                            style: E,
                            children: (0, n.jsx)(r(16275).I, {
                                icon: r(262401).personSlashSmallIcon,
                                size: "sm",
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if (V) {
                        if (L) return (0, n.jsx)("div", {
                            style: A,
                            children: (0, n.jsx)(r(738251).A, {
                                stripGoogleIconQuery: !0,
                                url: L,
                                isAuthenticated: !1,
                                width: Math.max(Number(B.width), 120),
                                render: (e, t) => N(t, D, T)
                            })
                        });
                        else if (D) return Q(D);
                        else if (W) return Q(W)
                    } else if (m) {
                        if (!m.type && m.avatarUrl) return (0, n.jsx)("div", {
                            style: T,
                            children: (0, n.jsx)("div", {
                                style: A,
                                children: N(m.avatarUrl, m.name)
                            })
                        });
                        else if (m.name) return Q(m.name);
                        else if (m.email) return Q(m.email)
                    }
                    return G()
                };
                switch (y) {
                    case "avatar":
                        {
                            let e = (0, n.jsx)("div", {
                                style: s,
                                children: X()
                            });
                            if ($ && q && U) return (0, n.jsx)(r(532755).D, {
                                userStore: q,
                                spaceStore: U,
                                from: j,
                                children: e
                            });
                            if (t) return (0, n.jsx)(r(51831).m, {
                                content: () => o ? J() : (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)("div", {
                                        children: a
                                    }), F, (0, n.jsx)("br", {}), V ? (0, n.jsx)("span", {
                                        style: R,
                                        children: W
                                    }) : void 0]
                                }),
                                placement: "bottom",
                                alignment: "start",
                                delayThreshold: S,
                                children: t => (0, n.jsx)("div", {
                                    style: s,
                                    "aria-label": F,
                                    ...t,
                                    children: e
                                })
                            });
                            return e
                        }
                    case "avatar-name":
                    case "avatar-name-email":
                        return J("avatar-name" === y);
                    default:
                        (0, r(722371).HB)(y)
                }
            }
        },
        476719: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => l,
                personFillSmallIcon: () => n
            }), r(296540);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.85 10.22 12.3",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M8 1.85c-.925 0-1.673.382-2.179 1.012-.495.617-.73 1.435-.73 2.29 0 .856.235 1.674.73 2.291.506.63 1.255 1.012 2.18 1.012.924 0 1.672-.382 2.178-1.012.495-.617.73-1.435.73-2.29 0-.856-.235-1.674-.73-2.291C9.673 2.232 8.925 1.85 8 1.85m0 7.403c-2.175 0-4.115 1.06-4.94 2.672-.3.585-.165 1.179.19 1.594.34.396.873.63 1.43.63h6.64c.557 0 1.09-.234 1.43-.63.355-.415.49-1.01.19-1.594-.825-1.612-2.765-2.672-4.94-2.672"
                    })
                },
                n = (0, r(104509).wt)("personFillSmall", l, "fillSmall")
        },
        525272: (e, t, r) => {
            r.d(t, {
                E: () => l
            });

            function l(e) {
                let {
                    spaceStore: t,
                    viewedUserId: l
                } = e, n = (0, r(533992).v3)(), i = (0, r(993077).nB)(t), o = (0, r(993077).V_)({
                    spaceStore: t,
                    userId: l
                }), a = (0, r(682985).K8)(() => {
                    let e = null == t ? void 0 : t.id;
                    return !(0, r(455221).e)(n, e) && "control" !== r(218744).default.getEligibleGroup({
                        experimentId: "show_comment_guest_badge",
                        defaultGroup: "control"
                    })
                }, [n, t]);
                return (0, r(682985).K8)(() => (0, r(62694).V)({
                    spaceStore: t,
                    actorRole: i,
                    viewedRole: o,
                    shouldShowForExternalUsers: a
                }), [t, i, o, a])
            }
        },
        532755: (e, t, r) => {
            r.d(t, {
                D: () => i
            });
            var l = r(296540),
                n = r(474848);

            function i({
                userStore: e,
                suppressMouse: t,
                children: o,
                spaceStore: a,
                width: s,
                from: d = "unknown"
            }) {
                let c = (0, l.useRef)(null),
                    u = (0, r(525272).E)({
                        spaceStore: a,
                        viewedUserId: null == e ? void 0 : e.id
                    }),
                    h = (0, r(83208).X)("prefetch_extended_user_profiles"),
                    v = u && h,
                    x = (0, r(815048).fJ)(r(554666).u.extendedUserProfileActions, {
                        disabled: !v
                    }),
                    f = (0, r(533992).v3)();
                (0, l.useEffect)(() => {
                    v && "resolved" === x.status && null != e && e.id && a && null != a && a.userId && x.value.prefetchExtendedUserProfiles({
                        spaceStore: a,
                        actorUserId: a.userId,
                        viewedUserIds: [e.id]
                    }, f)
                }, [v, null == e ? void 0 : e.id, a, u, f, x]);
                let p = (0, l.useCallback)(() => {
                        c.current && e && a && !t && r(84300).A.setState({
                            type: "user",
                            store: e,
                            domRect: c.current.getBoundingClientRect(),
                            spaceStore: a,
                            from: d
                        })
                    }, [e, a, t, d]),
                    m = (0, l.useCallback)(() => {
                        r(84300).A.setState(void 0)
                    }, []);
                return e && u ? (0, n.jsx)("div", {
                    ref: c,
                    onMouseEnter: u ? p : void 0,
                    onMouseLeave: u ? m : void 0,
                    style: s ? {
                        width: s
                    } : void 0,
                    children: o
                }) : o
            }
        },
        554666: (e, t, r) => {
            r.d(t, {
                i: () => n,
                u: () => l
            });
            let l = {
                    PersonProfileContainer: new(r(815048)).O2("PersonProfileContainer", () => Promise.all([r.e(75134), r.e(21969), r.e(29663), r.e(75136), r.e(98175), r.e(47414), r.e(16922), r.e(65594), r.e(15021), r.e(98821), r.e(77470), r.e(80068), r.e(44632)]).then(r.bind(r, 587386))),
                    extendedUserProfileActions: new(r(815048)).O2("extendedUserProfileActions", () => r.e(63717).then(r.bind(r, 433562)))
                },
                n = (0, r(815048)._h)(l.PersonProfileContainer, e => e.PersonProfileContainer)
        }
    }
]);