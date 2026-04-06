! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bdf8fe46-bfd8-4224-abcc-5f85b2f99558", e._sentryDebugIdIdentifier = "sentry-dbid-bdf8fe46-bfd8-4224-abcc-5f85b2f99558")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3547, 50089], {
        224799: function(e, a, o) {
            "use strict";
            o.d(a, {
                U: function() {
                    return F
                }
            });
            var s = o(552322),
                l = o(72779),
                i = o.n(l),
                r = o(505152),
                t = o.n(r),
                n = o(202784),
                d = o(823728),
                c = o(399557),
                h = o(471817),
                g = o(779700),
                m = o(121413);

            function p({
                eyebrow: e,
                logos: a,
                id: o,
                sticky: l = !1
            }) {
                let [r, t] = (0, n.useState)(!1), p = (0, s.jsxs)("div", {
                    className: m.logoWall,
                    children: [(0, s.jsx)(g.Z, {
                        className: m.logoWallEyebrow,
                        variant: "sans-100-regular",
                        color: "text-light",
                        as: "p",
                        children: e
                    }), (0, s.jsx)("div", {
                        className: m.logoWallLogos,
                        children: a.map(e => (0, s.jsx)("div", {
                            className: m.logo,
                            children: e.href ? (0, s.jsx)(d.Q, {
                                href: e.href,
                                variant: "ghost",
                                className: m.logoButton,
                                children: (0, s.jsx)(h.T, {
                                    src: e.src,
                                    height: e.height || 0,
                                    width: e.width || 0,
                                    surfaceArea: 1600,
                                    maxHeight: 24,
                                    loading: "eager"
                                })
                            }) : (0, s.jsx)(h.T, {
                                src: e.src,
                                height: e.height || 0,
                                width: e.width || 0,
                                surfaceArea: 1600,
                                maxHeight: 24,
                                loading: "eager"
                            })
                        }, e.src))
                    })]
                });
                return l ? (0, s.jsx)(c.L, {
                    id: o,
                    edge: "bottom",
                    stickyThreshold: 24,
                    onStickyChange: t,
                    className: i()(m.logoWallStickyWrapper, {
                        [m.stuck]: r
                    }),
                    children: p
                }) : (0, s.jsx)("div", {
                    id: o,
                    children: p
                })
            }
            var u = o(393975),
                b = o(406518),
                f = o(962753),
                _ = o(237853),
                x = o(421543),
                j = o(331714),
                v = o(27297);

            function W({
                forceStaticFallback: e,
                platform: a
            }) {
                let o = b.Z.pages.home.fall.hero.homepageHeroAnimationMaskPng,
                    [l, i] = (0, n.useState)(!0),
                    r = (0, j.T)(),
                    t = (0, x.a)("(max-width: 839px)");
                (0, n.useEffect)(() => {
                    CSS && CSS.supports && i(CSS.supports(`mask-image: url(${o})`))
                }, [o]);
                let d = {
                        id: "entourage-img",
                        src: b.Z.pages.home.fall.hero.homepageHeroAnimationLfPng,
                        width: 2400,
                        height: 560,
                        altText: ""
                    },
                    c = {
                        id: "entourage-poster",
                        src: b.Z.pages.home.fall.hero.homepageHeroAnimationFfPng,
                        width: 2400,
                        height: 560,
                        altText: ""
                    },
                    h = {
                        id: "entourage-video",
                        src: b.Z.pages.home.fall.hero.homepageHeroAnimationMp4,
                        width: 2400,
                        height: 560,
                        altText: ""
                    },
                    g = r || !l || e || "mobile" == (!0 === t || void 0 === t && ("android" === a || "ios" === a) ? "mobile" : "desktop") ? (0, s.jsx)(f.E, { ...d,
                        alt: d.altText ? ? "",
                        className: v.image,
                        priority: !0
                    }) : (0, s.jsx)("div", {
                        style: {
                            maskImage: `url(${o})`,
                            maskSize: "100%"
                        },
                        children: (0, s.jsx)(_.n, {
                            controls: !1,
                            autoPlay: "eager",
                            muted: !0,
                            playsInline: !0,
                            preload: "auto",
                            poster: c.src,
                            src: h.src,
                            width: 2400,
                            height: 560
                        })
                    });
                return (0, s.jsx)("div", {
                    className: v.noseyEntourage,
                    children: g
                })
            }
            var N = o(651066),
                w = o(402024);

            function k({
                heading: e,
                subheading: a,
                ctas: o
            }) {
                return (0, s.jsxs)("header", {
                    className: i()(w.header, w.simpleWrap),
                    children: [(0, s.jsx)("h1", {
                        className: w.heading,
                        children: e
                    }), (0, s.jsx)("h2", {
                        className: w.subheading,
                        children: a
                    }), (0, s.jsx)(N.U, {
                        className: w.buttons,
                        ctas: o
                    })]
                })
            }
            var y = o(258238),
                S = o(540882);

            function H({
                heading: e,
                subheading: a,
                ctas: o,
                poster: l,
                video: i,
                mobilePoster: r,
                mobileVideo: t,
                platform: n,
                forceStaticFallback: d = !1,
                experiments: c
            }) {
                return (0, s.jsxs)("section", {
                    className: S.hero,
                    children: [(0, s.jsx)("div", {
                        className: S.entourageWrapper,
                        children: (0, s.jsx)(W, {
                            forceStaticFallback: d,
                            platform: n
                        })
                    }), (0, s.jsx)("div", {
                        className: S.headerWrapper,
                        children: (0, s.jsx)(k, {
                            heading: e,
                            subheading: a,
                            ctas: o
                        })
                    }), (0, s.jsx)("div", {
                        className: S.mediaWrapper,
                        children: (0, s.jsx)(y.n, {
                            poster: l,
                            video: i,
                            mobilePoster: r,
                            mobileVideo: t,
                            forceStaticFallback: d,
                            platform: n
                        })
                    })]
                })
            }
            var C = o(861210),
                P = o(429056),
                A = o(401607),
                E = o(649801);
            let B = t()(() => Promise.all([o.e(78545), o.e(99546)]).then(o.bind(o, 60385)).then(e => ({
                    default: e.ForbesQuote
                })), {
                    loadableGenerated: {
                        webpack: () => [60385]
                    },
                    ssr: !0
                }),
                G = t()(() => Promise.all([o.e(2761), o.e(83804)]).then(o.bind(o, 883804)).then(e => ({
                    default: e.AiUseCases
                })), {
                    loadableGenerated: {
                        webpack: () => [883804]
                    },
                    ssr: !0
                }),
                T = t()(() => Promise.all([o.e(79644), o.e(77881), o.e(67067), o.e(87396), o.e(15185)]).then(o.bind(o, 968412)).then(e => ({
                    default: e.LessToolsMWN
                })), {
                    loadableGenerated: {
                        webpack: () => [968412]
                    },
                    ssr: !0
                }),
                Z = t()(() => Promise.all([o.e(92182), o.e(67067), o.e(5245), o.e(69104)]).then(o.bind(o, 969104)).then(e => ({
                    default: e.HomepageBentoCarousel
                })), {
                    loadableGenerated: {
                        webpack: () => [969104]
                    },
                    ssr: !0
                }),
                I = t()(() => Promise.all([o.e(67067), o.e(92182), o.e(427)]).then(o.bind(o, 427)).then(e => ({
                    default: e.Bento
                })), {
                    loadableGenerated: {
                        webpack: () => [427]
                    },
                    ssr: !0
                }),
                L = t()(() => Promise.all([o.e(48944), o.e(70334), o.e(67067), o.e(24320), o.e(73454), o.e(60894), o.e(55675)]).then(o.bind(o, 360894)).then(e => ({
                    default: e.DownloadApps
                })), {
                    loadableGenerated: {
                        webpack: () => [360894]
                    },
                    ssr: !0
                }),
                V = t()(() => Promise.all([o.e(48944), o.e(70334), o.e(67067), o.e(24320), o.e(73454), o.e(60894), o.e(55675)]).then(o.bind(o, 360894)).then(e => ({
                    default: e.DownloadAppsRichWebsiteScreens
                })), {
                    loadableGenerated: {
                        webpack: () => [360894]
                    },
                    ssr: !1
                });

            function F({
                metadata: e,
                pageContent: {
                    hero: a,
                    logos: o,
                    quote: l,
                    carousel: r,
                    cards: t,
                    lessTools: d,
                    socialProof: c,
                    aiUseCases: h,
                    downloadApps: g
                },
                platform: m,
                locale: b,
                downloadAppsExperimentVariant: f = "control"
            }) {
                let _ = (0, P.Z)(),
                    x = (0, P.Z)(),
                    j = (0, P.Z)(),
                    v = (0, P.Z)(),
                    W = (0, P.Z)(),
                    N = (0, P.Z)(),
                    [w, k] = (0, n.useState)({
                        mostVisibleCard: null
                    }),
                    y = (0, n.useCallback)(e => {
                        k(a => a.mostVisibleCard !== e.mostVisibleCard ? e : a)
                    }, []),
                    S = 0 === w.mostVisibleCard;
                return (0, A.L)(() => {
                    let e = document.documentElement;
                    return e.classList.add(E.noXScroll), () => {
                        e.classList.remove(E.noXScroll)
                    }
                }, []), (0, s.jsxs)(C.e, {
                    metadata: e,
                    title: e.title,
                    theme: "blue",
                    variant: "fullWidth",
                    children: [(0, s.jsx)("div", {
                        className: i()(E.main, E.heroSection),
                        children: (0, s.jsxs)("div", {
                            className: i()(E.section, E.heroAndLogowall),
                            children: [(0, s.jsx)(H, {
                                heading: a.heading,
                                subheading: a.subheading,
                                ctas: a.ctas,
                                poster: { ...a.poster,
                                    id: "hero-poster",
                                    width: 2560,
                                    height: 1600
                                },
                                video: { ...a.video,
                                    id: "hero-video",
                                    width: 2560,
                                    height: 1600
                                },
                                mobilePoster: { ...a.mobilePoster,
                                    id: "hero-mobile-poster",
                                    width: 1600,
                                    height: 1600
                                },
                                mobileVideo: { ...a.mobileVideo,
                                    id: "hero-mobile-video",
                                    width: 1600,
                                    height: 1600
                                },
                                forceStaticFallback: !["en-US", "en-GB"].includes(b),
                                platform: m,
                                experiments: {}
                            }), (0, s.jsx)(p, {
                                id: _,
                                eyebrow: o.eyebrow,
                                logos: o.logos,
                                sticky: !0
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: i()(E.main, E.lightGrayBg),
                        children: (0, s.jsxs)("div", {
                            className: E.section,
                            children: [(0, s.jsxs)("div", {
                                className: E.bentoContainer,
                                children: [(0, s.jsx)(Z, { ...r,
                                    forceStaticFallback: !["en-US", "en-GB", "de-DE", "fr-FR", "ja-JP", "ko-KR"].includes(b),
                                    isActive: S,
                                    hideNosey: !1,
                                    isNew: !1
                                }), (0, s.jsx)("section", {
                                    id: x,
                                    children: (0, s.jsx)(I, {
                                        boxes: t,
                                        onActiveStateChange: y
                                    })
                                })]
                            }), (0, s.jsx)(B, {
                                id: j,
                                ...l,
                                className: ""
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: E.main,
                        children: (0, s.jsx)("div", {
                            className: i()(E.section, E.sectionNoSpacing),
                            children: (0, s.jsx)(T, {
                                id: W,
                                ...d
                            })
                        })
                    }), (0, s.jsx)("div", {
                        className: i()(E.main, E.lightGrayBg),
                        children: (0, s.jsx)("div", {
                            className: E.section,
                            children: (0, s.jsx)(u.SocialProof, {
                                platform: m,
                                ...c
                            })
                        })
                    }), h ? (0, s.jsx)("div", {
                        className: E.main,
                        children: (0, s.jsx)("div", {
                            className: E.section,
                            children: (0, s.jsx)(G, { ...h,
                                id: N
                            })
                        })
                    }) : void 0, (0, s.jsx)("div", {
                        className: i()(E.main, {
                            [E.lightGrayBg]: g.invertColor
                        }),
                        children: (0, s.jsx)("div", {
                            className: E.section,
                            children: "v1" === f ? (0, s.jsx)(V, {
                                heading: g.heading,
                                id: v,
                                platform: m,
                                ...g.invertColor && {
                                    color: "white"
                                },
                                useAgentCopy: !0
                            }) : (0, s.jsx)(L, {
                                heading: g.heading,
                                id: v,
                                platform: m,
                                ...g.invertColor && {
                                    color: "white"
                                },
                                useAgentCopy: !0
                            })
                        })
                    })]
                })
            }
        },
        27297: function(e) {
            e.exports = {
                image: "HeroEntourage_image__FSBGO",
                noseyEntourage: "HeroEntourage_noseyEntourage__Y9HKS"
            }
        },
        402024: function(e) {
            e.exports = {
                header: "HeroHeader_header__Pzmaq",
                heading: "HeroHeader_heading__aVbWN",
                subheading: "HeroHeader_subheading__W1ni_",
                simpleWrap: "HeroHeader_simpleWrap__4RBEV",
                buttons: "HeroHeader_buttons__MqH1V"
            }
        },
        121413: function(e) {
            e.exports = {
                logoWallStickyWrapper: "logoWall_logoWallStickyWrapper__IITu4",
                stuck: "logoWall_stuck__GbpPt",
                fadeBackground: "logoWall_fadeBackground__szIRg",
                logoWall: "logoWall_logoWall__XoqZX",
                logoWallLogos: "logoWall_logoWallLogos__77aYs",
                logoWallEyebrow: "logoWall_logoWallEyebrow__6qAOi",
                logoButton: "logoWall_logoButton__2kmlM",
                logo: "logoWall_logo__6XxwO"
            }
        },
        540882: function(e) {
            e.exports = {
                hero: "HomepageHeroMWN_hero__F92yv",
                entourageWrapper: "HomepageHeroMWN_entourageWrapper__fF5qJ",
                headerWrapper: "HomepageHeroMWN_headerWrapper__iS62I",
                mediaWrapper: "HomepageHeroMWN_mediaWrapper__cVkAL"
            }
        }
    }
]);