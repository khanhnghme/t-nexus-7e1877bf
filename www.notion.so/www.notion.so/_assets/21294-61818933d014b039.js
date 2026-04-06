"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [21294, 72181], {
        137683: (e, t, a) => {
            a.d(t, {
                m: () => n
            });
            var i = () => a(546605);
            class r extends i().Store {
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
            let o = null;

            function n() {
                return o || (o = new r), o
            }
        },
        265035: (e, t, a) => {
            a.r(t), a.d(t, {
                SCROLLING_SQUIGGLE_DEFAULTS: () => o,
                ScrollingSquiggle: () => n
            });
            var i = a(296540),
                r = a(474848);
            let o = {
                width: 24,
                height: 16,
                tempo: 18,
                minLoopSize: 24,
                maxLoopSize: 32,
                acceleration: .3,
                tailLength: 72,
                strokeWidth: 1.5,
                loopSpacing: 1.3,
                modulationSpeed: .4,
                modulationPhaseOffset: 2,
                tempoModulation: 10,
                accelerationModulation: .12
            };

            function n(e) {
                let {
                    style: t,
                    width: n = o.width,
                    height: l = o.height,
                    tempo: s = o.tempo,
                    minLoopSize: d = o.minLoopSize,
                    maxLoopSize: c = o.maxLoopSize,
                    acceleration: u = o.acceleration,
                    tailLength: m = o.tailLength,
                    strokeWidth: h = o.strokeWidth,
                    strokeColor: g,
                    loopSpacing: p = o.loopSpacing,
                    modulationSpeed: f = o.modulationSpeed,
                    modulationPhaseOffset: x = o.modulationPhaseOffset,
                    tempoModulation: v = o.tempoModulation,
                    accelerationModulation: y = o.accelerationModulation
                } = e, b = (0, i.useRef)(null), S = (0, i.useRef)(), j = (0, i.useRef)(!0), w = (0, a(960253).e)(), M = (0, a(632079).O4)({
                    theme: w
                }), T = (0, i.useMemo)(() => {
                    let e = l / 2,
                        t = n / 200 * 8 * p,
                        a = Math.min(d / 100 * l, .45 * l),
                        i = Math.min(c / 100 * l, .45 * l),
                        r = Math.max(3, m * Math.min(1, n / 200)),
                        o = .95 * n - i;
                    return {
                        W: n,
                        H: l,
                        BASE_Y: e,
                        FRAMES_PER_RAD: s,
                        SUB_STEPS: 3,
                        DX_PER_RAD: t,
                        ACC_FACTOR: u,
                        MIN_R: a,
                        MAX_R: i,
                        R_BASE: (a + i) / 2,
                        R_VAR: (i - a) / 2,
                        R_FREQ1: .2,
                        R_FREQ2: .1,
                        TAIL_RADS: r,
                        PURGE_PAD_R: 5,
                        START_OFFSET: o,
                        D_THETA_PER_SECOND: Math.PI / s * 60
                    }
                }, [n, l, s, d, c, u, m, p]), _ = (0, i.useMemo)(() => ({
                    modulationSpeed: f,
                    modulationPhaseOffset: x,
                    tempoModulation: v,
                    accelerationModulation: y
                }), [f, x, v, y]);
                return (0, i.useEffect)(() => {
                    let e = () => {
                        j.current = !document.hidden
                    };
                    return document.addEventListener("visibilitychange", e), () => {
                        document.removeEventListener("visibilitychange", e)
                    }
                }, []), (0, i.useEffect)(() => {
                    let e = b.current;
                    if (!e) return;
                    let t = e.getContext("2d", {
                        willReadFrequently: !1,
                        alpha: !0,
                        desynchronized: !0
                    });
                    if (!t) return;
                    e.width = 2 * n, e.height = 2 * l, t.scale(2, 2), t.imageSmoothingEnabled = !1;
                    let {
                        W: a,
                        H: i,
                        BASE_Y: r,
                        SUB_STEPS: o,
                        DX_PER_RAD: d,
                        ACC_FACTOR: c,
                        MIN_R: u,
                        R_BASE: m,
                        R_VAR: p,
                        R_FREQ1: f,
                        R_FREQ2: x,
                        TAIL_RADS: v,
                        PURGE_PAD_R: y,
                        START_OFFSET: w
                    } = T;
                    t.lineCap = "round", t.lineJoin = "round", t.strokeStyle = g || M.text.primary, t.lineWidth = h;
                    let I = 0,
                        A = performance.now(),
                        R = performance.now(),
                        k = Array(1e3),
                        C = 0,
                        B = 0,
                        E = 0,
                        z = 0,
                        F = 0;
                    return S.current = requestAnimationFrame(() => (function e(t) {
                        let n, l = performance.now(),
                            h = Math.min((l - A) / 1e3, .1);
                        A = l;
                        let g = Math.sin(2 * Math.PI * _.modulationSpeed * ((l - R) / 1e3) + _.modulationPhaseOffset),
                            b = s + _.tempoModulation * g,
                            M = c + _.accelerationModulation * g,
                            T = z > 5 ? Math.max(1, Math.floor(o / 2)) : o,
                            L = Math.PI / Math.max(1, b) * 60 * h * (1 + -(M * Math.sin(I))) / T;
                        for (let e = 0; e < T; e++) I += L, k[B] = function(e) {
                            let t = Math.max(u, m + p * (.6 * Math.sin(f * e) + .4 * Math.sin(x * e + 1.1)));
                            return {
                                x: e * d + t * Math.cos(e),
                                y: r - t * Math.sin(e),
                                t: e
                            }
                        }(I), B = (B + 1) % 1e3, E < 1e3 ? E++ : C = (C + 1) % 1e3;
                        let P = I - v;
                        for (; E > 0 && k[C].t < P - y;) C = (C + 1) % 1e3, E--;
                        let V = I * d - w,
                            D = V - F;
                        F = V, Math.abs(D) < a && (D > 0 ? t.clearRect(0, 0, Math.ceil(D) + 10, i) : D < 0 && t.clearRect(a + Math.floor(D) - 10, 0, -D + 10, i)), t.clearRect(0, 0, a, i), t.save(), t.translate(-V, 0);
                        let U = C,
                            W = 0;
                        for (; W < E && k[U].t < P;) U = (U + 1) % 1e3, W++;
                        if (0 === W || 0 === E) n = k[C];
                        else if (W < E) {
                            let e = k[(U - 1 + 1e3) % 1e3],
                                t = k[U],
                                a = (P - e.t) / (t.t - e.t);
                            n = {
                                x: e.x + (t.x - e.x) * a,
                                y: e.y + (t.y - e.y) * a
                            }
                        }
                        if (n && E > 0) {
                            t.beginPath(), t.moveTo(n.x, n.y);
                            let e = U;
                            for (let a = W; a < E; a++) t.lineTo(k[e].x, k[e].y), e = (e + 1) % 1e3;
                            t.stroke()
                        }
                        t.restore(), performance.now() - l > 16 ? z++ : z > 0 && (z = Math.max(0, z - .1)), j.current ? S.current = requestAnimationFrame(() => e(t)) : setTimeout(() => {
                            j.current && (S.current = requestAnimationFrame(() => e(t)))
                        }, 100)
                    })(t)), () => {
                        S.current && cancelAnimationFrame(S.current)
                    }
                }, [T, _, n, l, h, g, M.text.primary, s]), (0, r.jsx)("canvas", {
                    ref: b,
                    style: {
                        width: n,
                        height: l,
                        display: "block",
                        ...t
                    }
                })
            }
        },
        476919: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowUpRightSquareFillSmallIcon: () => r,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.45 2.45 11.11 11.11",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.25 2.45a1.8 1.8 0 0 0-1.8 1.8v7.5a1.8 1.8 0 0 0 1.8 1.8h7.5a1.8 1.8 0 0 0 1.8-1.8v-7.5a1.8 1.8 0 0 0-1.8-1.8zM6.4 5.6a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 1 1-1 0V6.807l-4.097 4.096a.5.5 0 1 1-.707-.707L9.193 6.1H6.9a.5.5 0 0 1-.5-.5"
                    })
                },
                r = (0, a(104509).wt)("arrowUpRightSquareFillSmall", i, "fillSmall")
        },
        501148: (e, t, a) => {
            a.d(t, {
                Z: () => r
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.49 2.37 15.01 15.25",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M7.154 3.625h1.23a.625.625 0 1 0 0-1.25h-1.23A2.625 2.625 0 0 0 4.529 5v2.069c0 .9-.508 1.722-1.313 2.124l-.317.159a.725.725 0 0 0 0 1.297l.317.158a2.38 2.38 0 0 1 1.313 2.124V15a2.625 2.625 0 0 0 2.625 2.625h1.23a.625.625 0 1 0 0-1.25h-1.23c-.76 0-1.375-.616-1.375-1.375v-2.069c0-1.17-.564-2.256-1.492-2.931a3.63 3.63 0 0 0 1.492-2.931V5c0-.76.615-1.375 1.375-1.375m5.692 12.75h-1.23a.625.625 0 1 0 0 1.25h1.23A2.625 2.625 0 0 0 15.471 15v-2.069c0-.9.508-1.722 1.313-2.124l.317-.159a.725.725 0 0 0 0-1.296l-.317-.159a2.38 2.38 0 0 1-1.313-2.124V5a2.625 2.625 0 0 0-2.625-2.625h-1.23a.625.625 0 1 0 0 1.25h1.23c.76 0 1.375.616 1.375 1.375v2.069c0 1.17.564 2.256 1.492 2.931a3.63 3.63 0 0 0-1.492 2.931V15c0 .76-.615 1.375-1.375 1.375"
                    })
                },
                r = (0, a(104509).wt)("curlyBraces", i, "default")
        },
        596955: (e, t, a) => {
            a.d(t, {
                A: () => o
            }), a(296540);
            var i = a(474848);
            let r = {
                icon: {
                    height: "1em",
                    width: "1em",
                    marginInlineEnd: "0.25em",
                    fill: a(632079).Tj.icon.secondary,
                    marginBottom: "0.1em"
                },
                tooltip: {
                    background: a(632079).Tj.background.primary,
                    boxShadow: a(632079).Tj.shadow.outline.md
                },
                container: {
                    display: "flex",
                    alignItems: "center",
                    fontWeight: a(699422).Wy.regular,
                    color: a(632079).Tj.text.secondary,
                    fontSize: a(699422).J.UISmall.desktop,
                    textAlign: "center"
                },
                text: {
                    display: "inline"
                }
            };

            function o({
                text: e,
                tooltipText: t,
                icon: n
            }) {
                return (0, i.jsx)(a(51831).m, {
                    style: r.tooltip,
                    content: () => (0, i.jsxs)("div", {
                        style: r.container,
                        children: [n(r.icon), (0, i.jsx)("div", {
                            children: t
                        })]
                    }),
                    alignment: "start",
                    placement: "bottom",
                    children: t => (0, i.jsx)("div", {
                        style: r.text,
                        ...t,
                        children: e
                    })
                })
            }
        },
        652743: (e, t, a) => {
            a.d(t, {
                $: () => i
            });

            function i(e) {
                let {
                    spaceStore: t,
                    viewedUserId: i
                } = e, r = (0, a(993077).nB)(t), o = (0, a(993077).V_)({
                    spaceStore: t,
                    userId: i
                });
                return (0, a(682985).K8)(() => (0, a(805697).WG)({
                    spaceStore: t,
                    actorRole: r,
                    viewedRole: o
                }), [t, r, o])
            }
        },
        790022: (e, t, a) => {
            a.d(t, {
                H: () => o
            }), a(296540);
            var i = a(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.12 2.37 11.75 15.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M9.134 5.001c-.236-.667-1.18-.667-1.415 0L6.28 9.084a.5.5 0 1 0 .943.332l.276-.784h1.857l.276.784a.5.5 0 0 0 .944-.332zm-.708 1.001.576 1.63h-1.15zM10.75 5a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1zm.313 3a.5.5 0 0 1 .5-.5h1.687a.5.5 0 0 1 0 1h-1.687a.5.5 0 0 1-.5-.5M6.75 10.708a.5.5 0 0 0-.5.5v3.715a.5.5 0 0 0 .845.362l1.101-1.05a.25.25 0 0 1 .347.003l.675.657a.5.5 0 0 0 .734-.038l1.189-1.435a.25.25 0 0 1 .375-.01l1.368 1.467a.5.5 0 0 0 .866-.341v-3.33a.5.5 0 0 0-.5-.5zm2.554 2.435a.696.696 0 1 1 0-1.393.696.696 0 0 1 0 1.393"
                        }), (0, i.jsx)("path", {
                            d: "M6.25 2.375A2.125 2.125 0 0 0 4.125 4.5v11c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125v-11a2.125 2.125 0 0 0-2.125-2.125zM5.375 4.5c0-.483.392-.875.875-.875h7.5c.483 0 .875.392.875.875v11a.875.875 0 0 1-.875.875h-7.5a.875.875 0 0 1-.875-.875z"
                        })]
                    })
                },
                o = (0, a(104509).wt)("docRichText", r, "default")
        },
        917563: (e, t, a) => {
            a.d(t, {
                Y: () => y,
                e: () => v
            });
            var i = a(296540);

            function r(e, t) {
                return (0, a(682985).K8)(() => {
                    if (!e || !(e instanceof a(807825).L) || !t) return;
                    let i = t.getParentBlockStore(),
                        r = t.getSpaceStore();
                    if (!i || !r) return;
                    let o = a(229903).V.createChildStore(r, a(729052).i1({
                        userId: e.id,
                        spaceId: r.id
                    }));
                    if (o.isReady()) {
                        if (o.isPageGuest()) return "page_guest";
                        if (!o.isMember()) return "external"
                    }
                }, [e, t])
            }

            function o(e) {
                let {
                    maybeAuthorGuestRole: t,
                    spaceStore: i
                } = e, r = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => {
                    var e, o;
                    if (!t) return !1;
                    let n = null == (e = r.currentUser) ? void 0 : e.id;
                    if (!n || !i || (0, a(455221).e)(r, i.id)) return !1;
                    let l = null == (o = (0, a(993077).dp)(i, n)) ? void 0 : o.getMembershipType();
                    return !!l && "page_guest" !== l && "none" !== l && "control" !== a(218744).default.getEligibleGroup({
                        experimentId: "show_comment_guest_badge",
                        defaultGroup: "control"
                    })
                }, [t, i, r])
            }
            var n = a(474848);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.83 1.85 12.58 12.31",
                    svg: (0, n.jsx)("path", {
                        d: "M6.939 9.254c2.175 0 4.115 1.06 4.94 2.672a1.4 1.4 0 0 1-.191 1.593c-.34.395-.872.631-1.429.631H3.62c-.556 0-1.09-.236-1.43-.631A1.405 1.405 0 0 1 2 11.926c.825-1.613 2.765-2.672 4.94-2.672m5.442.146a.54.54 0 1 1 0 1.08.54.54 0 0 1 0-1.08m.092-4.53c.95 0 1.936.635 1.937 1.66 0 .592-.354 1.066-.802 1.348l-.509.348h.001a.42.42 0 0 0-.195.34.55.55 0 1 1-1.1 0c0-.505.264-.964.67-1.245h.002l.512-.35.011-.008.013-.008c.219-.133.296-.3.296-.425 0-.203-.253-.561-.836-.561-.489 0-.774.276-.824.478a.55.55 0 0 1-1.067-.266c.206-.82 1.043-1.312 1.891-1.312M6.939 1.85c.924 0 1.673.382 2.179 1.012.495.617.73 1.436.73 2.291s-.236 1.674-.73 2.29c-.506.63-1.255 1.012-2.18 1.012-.924 0-1.672-.382-2.178-1.012-.495-.616-.73-1.435-.73-2.29s.235-1.674.73-2.29c.506-.63 1.254-1.012 2.179-1.012"
                    })
                },
                s = {
                    page_guest: (0, a(104509).wt)("personQuestionFillSmall", l, "fillSmall"),
                    external: a(476919).arrowUpRightSquareFillSmallIcon
                },
                d = {
                    card: {
                        background: a(632079).Tj.background.elevated,
                        padding: 16,
                        borderRadius: 8,
                        boxShadow: a(632079).Tj.shadow.outline.md,
                        width: 300
                    },
                    iconContainer: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: a(632079).Tj.background.secondary,
                        flexShrink: 0
                    },
                    upgradeButtonBlueText: {
                        color: a(632079).Tj.blue.text.accentPrimary
                    }
                };

            function c({
                badgeType: e,
                userStore: t,
                spaceStore: r,
                children: o
            }) {
                let l = (0, a(533992).v3)(),
                    u = (0, a(109939).tz)(),
                    m = (0, a(205954).k4)({
                        spaceStore: r
                    }),
                    h = (0, a(133565).E)({
                        spaceId: r.id
                    }),
                    [g, p] = (0, i.useState)(!1),
                    f = (0, a(682985).K8)(() => t.getDisplayName(u) || t.getEmail() || "", [t, u]),
                    x = (0, i.useCallback)(async () => {
                        if (m)
                            if ("page_guest" === e) try {
                                await (0, a(81930).P)({
                                    environment: l,
                                    guestUserStore: t,
                                    membershipType: h ? "member" : "owner",
                                    spaceStore: r,
                                    origin: "comment_badge_tooltip"
                                }), a(436555).D6({
                                    label: (0, n.jsx)(a(109939).sA, {
                                        id: "personHoverCard.upgradeToMember.success",
                                        defaultMessage: "Successfully upgraded {nameOrEmail} to member",
                                        values: {
                                            nameOrEmail: f
                                        }
                                    })
                                })
                            } catch (e) {
                                (0, a(222024).t)().error({
                                    from: "BadgeInfoTooltip",
                                    type: "upgradeToMemberFailed",
                                    error: e
                                }), a(436555).D6({
                                    label: (0, n.jsx)(a(109939).sA, {
                                        id: "personHoverCard.upgradeToMember.error",
                                        defaultMessage: "Failed to upgrade {nameOrEmail} to member",
                                        values: {
                                            nameOrEmail: f
                                        }
                                    })
                                })
                            } else try {
                                await (0, a(400308).$)({
                                    environment: l,
                                    spaceStore: r,
                                    userIds: [t.id],
                                    invite: {
                                        inviteFlowId: void 0,
                                        inviteMessage: "",
                                        inviteOrigin: "comment_badge_tooltip",
                                        disable_invite_email: !1
                                    },
                                    membershipType: h ? "member" : "owner"
                                }), a(436555).D6({
                                    label: (0, n.jsx)(a(109939).sA, {
                                        id: "personHoverCard.upgradeToMember.success",
                                        defaultMessage: "Successfully upgraded {nameOrEmail} to member",
                                        values: {
                                            nameOrEmail: f
                                        }
                                    })
                                })
                            } catch (e) {
                                (0, a(222024).t)().error({
                                    from: "BadgeInfoTooltip",
                                    type: "inviteToWorkspaceFailed",
                                    error: e
                                }), a(436555).D6({
                                    label: (0, n.jsx)(a(109939).sA, {
                                        id: "personHoverCard.inviteToWorkspace.error",
                                        defaultMessage: "Failed to invite to workspace"
                                    })
                                })
                            } else {
                                a(179701).RH({
                                    invite_flow_id: void 0,
                                    user_count: 1,
                                    new_user_count: 1,
                                    is_bot: !1,
                                    space_role: "read_and_write",
                                    invite_message_length: 0,
                                    invite_space_role_selection: a(758972).NJ.request_workspace_member,
                                    from: "comment_badge_tooltip"
                                });
                                try {
                                    await l.api.callApi({
                                        eventName: "requestAccess",
                                        environment: l,
                                        data: {
                                            type: "actor-to-space",
                                            forActorId: t.id,
                                            spaceId: r.id,
                                            message: "",
                                            attributes: {
                                                origin_id: r.id,
                                                origin_type: "comment_badge_tooltip",
                                                origin_table: "space",
                                                add_permissions_on_approval: !1
                                            }
                                        }
                                    }), p(!0), a(436555).D6({
                                        label: (0, n.jsx)(a(109939).sA, {
                                            id: "personHoverCard.requestToAdd.sent",
                                            defaultMessage: "Request sent"
                                        })
                                    })
                                } catch (e) {
                                    (0, a(222024).t)().error({
                                        from: "BadgeInfoTooltip",
                                        type: "requestGuestUpgradeFailed",
                                        error: e
                                    }), a(436555).D6({
                                        label: (0, n.jsx)(a(109939).sA, {
                                            id: "personHoverCard.requestToAdd.error",
                                            defaultMessage: "Failed to send request"
                                        })
                                    })
                                }
                            }
                    }, [m, e, l, t, h, r, f]);
                return (0, n.jsx)(a(51831).m, {
                    content: t => (0, n.jsx)("div", {
                        style: d.card,
                        ...t,
                        children: (0, n.jsxs)(a(4458).VP, {
                            gap: 12,
                            children: [(0, n.jsxs)(a(4458).fI, {
                                gap: 8,
                                alignItems: "flex-start",
                                children: [(0, n.jsx)("div", {
                                    style: d.iconContainer,
                                    children: (0, n.jsx)(a(16275).I, {
                                        icon: s[e],
                                        colorPalette: "gray",
                                        colorVariant: "primary"
                                    })
                                }), (0, n.jsxs)(a(4458).VP, {
                                    gap: 2,
                                    children: [(0, n.jsx)(a(111010).D, {
                                        styleKey: "bodyMedium",
                                        children: "page_guest" === e ? (0, n.jsx)(a(109939).sA, {
                                            id: "badgeInfoTooltip.guest.title",
                                            defaultMessage: "This user is a guest"
                                        }) : (0, n.jsx)(a(109939).sA, {
                                            id: "badgeInfoTooltip.external.title",
                                            defaultMessage: "This user is external"
                                        })
                                    }), (0, n.jsx)(a(111010).D, {
                                        styleKey: "captionRegular",
                                        colorVariant: "secondary",
                                        children: (0, n.jsx)(a(109939).sA, {
                                            id: "badgeInfoTooltip.description",
                                            defaultMessage: "They can edit this page, but they need to be a member to access all workspace content."
                                        })
                                    })]
                                })]
                            }), (0, n.jsx)(a(548436).A, {
                                size: "sm",
                                width: "fill",
                                iconLeading: {
                                    icon: a(96699).arrowInCircleUpFillSmallIcon,
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary"
                                },
                                onClick: x,
                                disabled: g,
                                children: (0, n.jsx)(a(109939).sA, {
                                    id: "personHoverCard.upgradeToMember.label",
                                    defaultMessage: "<blue>Upgrade</blue> to member",
                                    values: {
                                        blue: e => (0, n.jsx)("span", {
                                            style: d.upgradeButtonBlueText,
                                            children: e
                                        })
                                    }
                                })
                            })]
                        })
                    }),
                    noStyle: !0,
                    allowHover: !0,
                    textWrap: !0,
                    placement: "bottom",
                    alignment: "start",
                    children: e => (0, n.jsx)("div", { ...e,
                        children: o
                    })
                })
            }
            let u = (0, a(109939).YK)({
                    viewChat: {
                        id: "comments.seeThreadLink.viewRun",
                        defaultMessage: "View chat"
                    },
                    noAccess: {
                        id: "comments.seeThreadLink.noAccess",
                        defaultMessage: "You do not have access to view this chat."
                    }
                }),
                m = {
                    width: 14,
                    height: 9,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginInlineStart: 4
                },
                h = {
                    opacity: "0.55"
                };

            function g(e) {
                let {
                    commentStore: t
                } = e, r = (0, a(533992).v3)(), o = (0, a(109939).tz)(), l = (0, a(682985).K8)(() => {
                    let e = t.getDisplayName();
                    if ((null == e ? void 0 : e.type) === "agent") return e.agent
                }, [t]), s = (0, a(682985).K8)(() => t.getSpaceStore(), [t]), d = s && l ? a(174148).E.createChildStore(s, {
                    table: a(832375).Toz,
                    id: l.threadId,
                    spaceId: s.id
                }) : void 0, c = (0, a(682985).K8)(() => (null == d ? void 0 : d.canRead()) ? ? !1, [d]), g = (0, a(682985).K8)(() => {
                    var e;
                    return null == (e = t.getSpaceStore()) ? void 0 : e.id
                }, [t]), p = (0, a(682985).K8)(() => (0, a(187353).Ft)({
                    clientStore: a(57168).defaultClientAIChatStore,
                    threadStore: d
                }), [d]), f = (0, i.useCallback)(async e => {
                    if (!l || !c) return;
                    let [{
                        createInferenceTranscriptChatRoute: t
                    }, {
                        navigate: i
                    }] = await Promise.all([Promise.all([a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(57688), a.e(43444), a.e(23979), a.e(64696), a.e(48486), a.e(76135), a.e(83786)]).then(a.bind(a, 862451)), Promise.resolve().then(a.bind(a, 79266))]), o = t({
                        environment: r,
                        threadId: l.threadId,
                        spaceId: g,
                        forceRouteToChat: !0
                    });
                    i({
                        environment: r,
                        url: o,
                        openInNew: (0, a(7029).V)(e)
                    })
                }, [r, l, c, g]);
                if (!l || a(986939).A.isMobile) return null;
                let x = o.formatMessage(u.viewChat);
                return c ? (0, n.jsxs)(a(988022).p, {
                    size: "xs",
                    colorVariant: "tertiary",
                    onClick: f,
                    children: [x, p ? (0, n.jsx)("span", {
                        "aria-hidden": !0,
                        style: m,
                        children: (0, n.jsx)(a(265035).ScrollingSquiggle, {
                            width: 14,
                            height: 9,
                            style: h
                        })
                    }) : null]
                }) : (0, n.jsx)(a(51831).m, {
                    content: () => o.formatMessage(u.noAccess),
                    children: e => (0, n.jsx)(a(988022).p, {
                        size: "xs",
                        colorVariant: "tertiary",
                        disabled: !0,
                        "aria-label": x,
                        ...e,
                        children: x
                    })
                })
            }
            let p = {
                avatarSuggestionBadgeWrapper: {
                    position: "absolute",
                    insetInlineEnd: -2,
                    bottom: -4
                },
                avatarSuggestionBadgeBacking: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: 100,
                    background: a(632079).Tj.palette.uiBlue[100]
                },
                user: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6
                },
                placeholder: {
                    height: 8,
                    width: 81,
                    borderRadius: 6,
                    background: a(632079).Tj.background.tertiaryTranslucent
                },
                author: {
                    fontWeight: a(699422).Wy.medium,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    minWidth: 0
                },
                mobileUserAvatar: {
                    marginInlineEnd: 10
                },
                style0: {
                    position: "relative",
                    minWidth: 0
                }
            };

            function f(e) {
                let {
                    authorStore: t,
                    displayName: i,
                    suppressMouse: r,
                    shouldShowPersonHoverCards: o
                } = e, l = (0, a(533992).v3)(), s = (0, a(67499).S)(), d = (0, a(682985).K8)(() => (0, a(888).$)(s), [s]), c = t instanceof a(807825).L ? t.id : void 0, u = "show" === (0, a(652743).$)({
                    spaceStore: d,
                    viewedUserId: c
                }), m = (0, a(682985).K8)(() => {
                    let e = t.id;
                    if (!d) return;
                    let i = l.idCreator.getSpaceIdCreatorSync(d.id);
                    return (0, a(805697).o4)({
                        userId: e,
                        spaceIdCreator: i,
                        pageVisitSource: a(254656).y8.CommentAuthor
                    })
                }, [t, l, d]), h = (0, a(682985).K8)(() => {
                    if (!(t instanceof a(447003).v)) return;
                    let e = t.getModel();
                    if (!(null != e && e.isWorkflowBot())) return;
                    let i = e.getWorkflowId();
                    if (i) return (0, a(453573).Lm)({
                        workflowId: i,
                        params: {
                            workflowViewType: "settings"
                        },
                        pageVisitSource: a(254656).y8.CommentAuthor
                    })
                }, [t]), g = e => (0, n.jsx)("div", {
                    style: p.author,
                    ...e,
                    children: i || (0, n.jsx)("span", {
                        style: p.placeholder
                    })
                }), f = e => h && !r ? (0, n.jsx)(a(68774).N, {
                    href: h,
                    children: e
                }) : u && !r ? (0, n.jsx)(a(68774).N, {
                    href: m,
                    children: e
                }) : e;
                return f(i && !o ? (0, n.jsx)(a(51831).m, {
                    content: () => i,
                    placement: "bottom",
                    alignment: "start",
                    children: e => g(e)
                }) : g())
            }

            function x({
                createdTime: e,
                lastEditedTime: t,
                style: i,
                authorRowLocation: r
            }) {
                let o = t && t > e + 5e3,
                    l = (0, a(682985).K8)(() => (0, a(799843).nl)(e, {
                        useUltraCompactFormat: !0,
                        nowOverrideMs: (0, a(137683).m)().state.timeNow
                    }), [e]);
                return (0, n.jsxs)(a(324489).V, {
                    isSmall: !0,
                    isSecondaryColor: !0,
                    isMultiline: !0,
                    style: i,
                    children: [(0, n.jsx)(a(596955).A, {
                        text: l,
                        tooltipText: (0, n.jsx)(a(109939).sA, {
                            defaultMessage: "Created {absoluteCreatedTime}",
                            id: "comment.createdAtTime.label",
                            values: {
                                absoluteCreatedTime: (0, a(799843).x$)(e)
                            }
                        }),
                        icon: a(428602).Y
                    }), o ? (0, n.jsxs)(n.Fragment, {
                        children: [" ", (0, n.jsx)(a(596955).A, {
                            text: (0, n.jsx)(a(109939).sA, {
                                defaultMessage: "(edited)",
                                id: "comment.editedAtIndicator"
                            }),
                            tooltipText: (0, n.jsx)(a(109939).sA, {
                                defaultMessage: "Last edited {absoluteLastEditedTime}",
                                id: "comment.editedAtTime.label",
                                values: {
                                    absoluteLastEditedTime: (0, a(799843).x$)(t)
                                }
                            }),
                            icon: a(428602).Y
                        })]
                    }) : null]
                })
            }

            function v({
                lastEditedTime: e,
                createdTime: t,
                location: l,
                authorStore: s,
                isSuggested: d,
                commentStore: c
            }) {
                let u = (0, a(109939).tz)(),
                    m = (0, i.useRef)(null),
                    h = (0, a(682985).K8)(() => {
                        let e = s.getDisplayName(u);
                        return c ? c.resolveAuthorDisplayName({
                            intl: u,
                            defaultDisplayName: e
                        }) : e
                    }, [c, u, s]),
                    g = b({
                        location: l,
                        authorFontSize: 15,
                        enableTeamNameUnderline: !1
                    }),
                    y = (0, a(682985).K8)(() => null == c ? void 0 : c.getSpaceStore(), [c]),
                    S = r(s, c),
                    w = o({
                        maybeAuthorGuestRole: S,
                        spaceStore: y
                    });
                return t ? (0, n.jsxs)(a(4458).fI, {
                    children: [(0, n.jsx)("div", {
                        style: { ...p.user,
                            ...p.mobileUserAvatar
                        },
                        children: (0, n.jsx)(a(10097).E, {
                            authorStore: s,
                            avatarSize: 35,
                            avatarStyle: g.avatar
                        })
                    }), (0, n.jsx)(a(4458).VP, {
                        gap: 0,
                        children: (0, n.jsx)("div", {
                            style: g.userRow,
                            children: (0, n.jsxs)(a(4458).fI, {
                                ref: m,
                                alignItems: "center",
                                gap: 6,
                                children: [(0, n.jsx)(f, {
                                    authorStore: s,
                                    displayName: h,
                                    suppressMouse: !1,
                                    shouldShowPersonHoverCards: !1
                                }), (0, n.jsx)(x, {
                                    createdTime: t,
                                    lastEditedTime: e,
                                    style: g.timestamp,
                                    authorRowLocation: l
                                }), d ? (0, n.jsx)(j, {}) : null, w && S ? (0, n.jsx)("div", {
                                    style: g.guestBadge,
                                    children: (0, n.jsx)(a(577280).w, {
                                        labelType: S
                                    })
                                }) : null]
                            })
                        })
                    })]
                }) : null
            }

            function y({
                lastEditedTime: e,
                createdTime: t,
                location: i,
                isResolved: l,
                isSuggestionComment: s,
                authorStore: d,
                isSuggested: u,
                commentStore: m,
                suppressMouse: h,
                shouldOmitTimestamp: v,
                authorFontSizeOverride: S
            }) {
                let w = (0, a(109939).tz)(),
                    M = (0, a(233633).C)({
                        type: "discussionLocation",
                        location: i
                    }),
                    T = (0, a(682985).K8)(() => null == m ? void 0 : m.getSpaceStore(), [m]),
                    _ = (0, a(83208).X)("agent_link_thread_from_comment"),
                    I = (0, a(682985).K8)(() => {
                        let e = d.getDisplayName(w);
                        return m ? m.resolveAuthorDisplayName({
                            intl: w,
                            defaultDisplayName: e
                        }) : e
                    }, [m, w, d]),
                    A = a(42615).eQ,
                    R = b({
                        location: i,
                        authorFontSize: S ? ? (M ? a(699422).J.UIRegular.mobile : a(699422).J.UIRegular.desktop),
                        enableTeamNameUnderline: !1
                    }),
                    k = (0, a(533992).v3)(),
                    C = d instanceof a(807825).L ? d : void 0,
                    B = (0, a(525272).E)({
                        spaceStore: T,
                        viewedUserId: null == C ? void 0 : C.id
                    }),
                    E = r(d, m),
                    z = o({
                        maybeAuthorGuestRole: E,
                        spaceStore: T
                    }),
                    F = (e => {
                        if (!C || !T) return !1;
                        let t = null == (e = k.currentUser) ? void 0 : e.id;
                        return !!t && C.id !== t
                    })();
                return t ? (0, n.jsxs)("div", {
                    style: R.userRow,
                    children: [(0, n.jsx)("div", {
                        style: R.authorWrapper,
                        children: (0, n.jsx)(a(532755).D, {
                            spaceStore: T,
                            userStore: C,
                            suppressMouse: h,
                            from: "page_comment",
                            children: (0, n.jsxs)(a(4458).fI, {
                                alignItems: "center",
                                gap: 6,
                                minWidth: 0,
                                children: [s ? (0, n.jsxs)("div", {
                                    style: p.style0,
                                    children: [(0, n.jsx)(a(10097).E, {
                                        authorStore: d,
                                        avatarSize: A,
                                        avatarStyle: R.avatar
                                    }), (0, n.jsx)("div", {
                                        style: p.avatarSuggestionBadgeWrapper,
                                        children: (0, n.jsxs)("div", {
                                            style: R.avatarSuggestionBadge,
                                            children: [(0, n.jsx)(a(16275).I, {
                                                icon: a(154295).f,
                                                size: 10
                                            }), (0, n.jsx)("div", {
                                                style: p.avatarSuggestionBadgeBacking
                                            })]
                                        })
                                    })]
                                }) : (0, n.jsx)(a(10097).E, {
                                    authorStore: d,
                                    avatarSize: A,
                                    avatarStyle: R.avatar
                                }), (0, n.jsx)(f, {
                                    authorStore: d,
                                    displayName: I,
                                    suppressMouse: h,
                                    shouldShowPersonHoverCards: B
                                })]
                            })
                        })
                    }), u ? (0, n.jsx)(j, {}) : void 0, z && ("page_guest" === E || "external" === E) ? (0, n.jsx)("div", {
                        style: R.guestBadge,
                        children: F && C && T ? (0, n.jsx)(c, {
                            badgeType: E,
                            userStore: C,
                            spaceStore: T,
                            children: (0, n.jsx)(a(577280).w, {
                                labelType: E
                            })
                        }) : (0, n.jsx)(a(577280).w, {
                            labelType: E
                        })
                    }) : void 0, v ? void 0 : (0, n.jsx)(x, {
                        createdTime: t,
                        lastEditedTime: e,
                        style: R.timestamp,
                        authorRowLocation: i
                    }), m && _ ? (0, n.jsx)(g, {
                        commentStore: m
                    }) : void 0, "comment_unfurl" === i && l ? (0, n.jsx)(a(4458).fI, {
                        inline: !0,
                        children: (0, n.jsx)(a(731512).A, {
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "comment.unfurl.resolvedStatus",
                                defaultMessage: "Resolved"
                            })
                        })
                    }) : void 0]
                }) : null
            }

            function b({
                location: e,
                authorFontSize: t,
                enableTeamNameUnderline: i
            }) {
                let r = (0, a(960253).e)();
                return (0, a(960253).I)(() => ({
                    avatar: {
                        marginTop: 0,
                        marginInlineEnd: a(986939).A.isMobile ? 1 : 2,
                        userSelect: "none",
                        alignSelf: "center"
                    },
                    avatarSuggestionBadge: {
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 100,
                        background: "light" === r ? "#fff" : "#000",
                        width: 16,
                        height: 16,
                        border: `1px solid ${a(632079).Tj.palette.uiBlue[200]}`,
                        fill: a(632079).Tj.palette.uiBlue[600]
                    },
                    timestamp: {
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        flexGrow: "updates_sidebar" === e || "comment_unfurl" === e ? void 0 : 1,
                        display: "inline",
                        color: a(632079).Tj.text.tertiary
                    },
                    userRow: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        userSelect: "none",
                        fontSize: t,
                        gap: 6,
                        overflow: "hidden"
                    },
                    authorWrapper: {
                        minWidth: 0,
                        overflow: "hidden"
                    },
                    teamName: {
                        lineHeight: 1.3,
                        ...i ? {
                            borderBottom: `1px solid ${a(632079).Tj.border.primaryTranslucent}`
                        } : {}
                    },
                    mobileTeamLink: {
                        marginTop: -4,
                        fontSize: t
                    },
                    suggestionBadgeOverlay: {
                        position: "absolute",
                        insetInlineStart: 2,
                        top: 0,
                        bottom: 0,
                        width: a(42615).eQ,
                        pointerEvents: "none"
                    },
                    guestBadge: {
                        flexShrink: 0
                    }
                }), [e, i, t, r])
            }
            let S = {
                marginInlineStart: 0
            };

            function j() {
                return (0, n.jsx)(a(746434).E, {
                    style: S,
                    color: "blue",
                    content: (0, n.jsx)(a(109939).sA, {
                        defaultMessage: "Suggested",
                        id: "AuthorRow.suggested.badge"
                    })
                })
            }
        },
        931118: (e, t, a) => {
            a.d(t, {
                r: () => r
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.79 2.35 14.41 15.68",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M10 2.355a2.35 2.35 0 0 0-2.253 1.686 5.06 5.06 0 0 0-2.803 4.527v1.189c0 .919-.334 1.806-.939 2.498l-.818.935c-.881 1.007-.166 2.583 1.173 2.583h3.02a2.65 2.65 0 0 0 5.24 0h3.02c1.339 0 2.054-1.576 1.173-2.583l-.818-.935a3.8 3.8 0 0 1-.939-2.498v-1.19a5.06 5.06 0 0 0-2.803-4.526A2.35 2.35 0 0 0 10 2.355m1.5 13.418a1.55 1.55 0 0 1-2.998 0zM8.909 4.564A1.104 1.104 0 0 1 10 3.605c.556 0 1.017.415 1.091.96l.049.353.329.138a3.81 3.81 0 0 1 2.337 3.512v1.189c0 1.221.444 2.401 1.248 3.32l.818.936a.307.307 0 0 1-.232.51H4.36a.308.308 0 0 1-.232-.51l.818-.935a5.04 5.04 0 0 0 1.248-3.321v-1.19c0-1.58.963-2.936 2.337-3.511l.33-.138z"
                    })
                },
                r = (0, a(104509).wt)("bell", i, "default")
        }
    }
]);