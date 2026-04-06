! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cae74823-fc3e-4fea-bd18-2d563d7289fc", e._sentryDebugIdIdentifier = "sentry-dbid-cae74823-fc3e-4fea-bd18-2d563d7289fc")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [16501, 56150, 77808, 75557], {
        884371: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                LockIcon: function() {
                    return o
                }
            });
            var r = t(552322);
            t(202784);
            var n = t(506221);

            function o(e) {
                return (0, r.jsx)(n.t, { ...e,
                    viewBox: "0 0 20 20",
                    children: (0, r.jsx)("path", {
                        d: "M13.75 8.125V6.25c0-2.312-1.437-3.75-3.75-3.75S6.25 3.938 6.25 6.25v1.875h-2.5V17.5h12.5V8.125zM8.125 6.25c0-1.278.597-1.875 1.875-1.875s1.875.597 1.875 1.875v1.875h-3.75z",
                        fill: "currentColor"
                    })
                })
            }
        },
        277808: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                PlaybackPauseIcon: function() {
                    return o
                }
            });
            var r = t(552322);
            t(202784);
            var n = t(506221);

            function o(e) {
                return (0, r.jsx)(n.t, { ...e,
                    viewBox: "0 0 20 20",
                    children: (0, r.jsx)("path", {
                        d: "M4.375 4.375H8.75v11.25H4.375zm6.875 0v11.25h4.375V4.375z",
                        fill: "currentColor"
                    })
                })
            }
        },
        575557: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                PlaybackPlayIcon: function() {
                    return o
                }
            });
            var r = t(552322);
            t(202784);
            var n = t(506221);

            function o(e) {
                return (0, r.jsx)(n.t, { ...e,
                    viewBox: "0 0 20 20",
                    children: (0, r.jsx)("path", {
                        d: "M15.625 9.375v1.25l-10 5h-1.25V4.375h1.25z",
                        fill: "currentColor"
                    })
                })
            }
        },
        242868: function(e, a, t) {
            "use strict";
            t.d(a, {
                f: function() {
                    return d
                }
            });
            var r = t(552322),
                n = t(678050),
                o = t(72779),
                l = t.n(o),
                s = t(202784),
                i = t(317153),
                u = t(366308),
                c = t(561802);
            let d = (0, s.forwardRef)(function({
                videoId: e,
                autoplay: a,
                loop: t = !1,
                controls: o = !0,
                background: d = !1,
                allowFullScreen: y = !0,
                dnt: f = !0,
                muted: p = !0,
                playsinline: b,
                allow: v = "autoplay; fullscreen; encrypted-media",
                className: m,
                onPlay: h,
                onPause: _,
                onEnded: k,
                ...P
            }, g) {
                let w = (0, s.useRef)(null),
                    I = (0, s.useRef)(null),
                    x = (0, u.q)(I, g),
                    C = (0, s.useMemo)(() => (0, i.av)(e, {
                        autoplay: a,
                        background: d,
                        controls: o,
                        loop: t,
                        muted: p,
                        dnt: f,
                        playsinline: b
                    }), [e, a, d, o, t, p, f, b]);
                return (0, s.useEffect)(() => {
                    if (!w.current) return;
                    let e = w.current;
                    if (!e.src) return;
                    let a = new n.Z(e);
                    x(a), h && a.on("play", h), _ && a.on("pause", _), k && a.on("ended", k)
                }, [a, h, _, k, x]), (0, r.jsx)("iframe", { ...P,
                    className: l()(c.videoIframe, m),
                    src: C,
                    allowFullScreen: y,
                    allow: v,
                    ref: w
                })
            })
        },
        916501: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                VideoPlayer: function() {
                    return C
                }
            });
            var r = t(552322),
                n = t(72779),
                o = t.n(n),
                l = t(811163),
                s = t(202784),
                i = t(198268),
                u = t(884371),
                c = t(277808),
                d = t(575557),
                y = t(786672),
                f = t(323221),
                p = t(716952),
                b = t(914775),
                v = t(719110),
                m = t(406518),
                h = t(962753),
                _ = t(930066),
                k = t(756092),
                P = t(124101),
                g = t(15612),
                w = t(477198),
                I = t(561802),
                x = t(242868);
            let C = (0, s.forwardRef)(function({
                id: e,
                className: a,
                videoId: t,
                customPosterSrc: n,
                host: C = "youtube",
                autoplay: j = !1,
                playsinline: B = !0,
                aspectRatio: S = .5625,
                controls: N = "enabled",
                loop: T = !1,
                muted: M,
                altText: E = "",
                showPoster: V,
                hasShadow: L,
                disableBorderRadius: D,
                thumbnailOnly: R,
                isLocked: A,
                onTimeUpdate: F
            }, q) {
                let {
                    airGapInitialized: z
                } = (0, g.iz)(), Z = (0, l.useRouter)(), H = (0, p.YB)(), X = (0, k.b)(), {
                    setSnackBarMessage: $
                } = (0, P.il)(), [U, Y] = (0, s.useState)(j), [K, O] = (0, s.useState)(null), [W, G] = (0, s.useState)(!1), [J, Q] = (0, s.useState)(!1), [ee, ea] = (0, s.useState)(!1), et = (0, s.useRef)(!1);
                et.current = !!(et.current || U);
                let er = et.current || !V || ee || J,
                    en = !!(M ? ? j),
                    eo = (0, y.D)(t, X),
                    el = (0, s.useMemo)(() => H.formatMessage({
                        id: "VideoPlayer.lockedMessage",
                        defaultMessage: "Please register to unlock this video.",
                        description: "Notice that appears on notion.so/webinars/:slug when clicking on a video that has not been unlocked."
                    }), [H]),
                    es = n ? (0, y.D)(n, X) : void 0,
                    [ei, eu] = (0, s.useState)(null),
                    [ec, ed] = (0, s.useState)(null),
                    ey = (0, s.useCallback)(e => {
                        eu((null == e ? void 0 : e.getInternalPlayer()) ? ? null)
                    }, []),
                    ef = (0, s.useMemo)(() => {
                        if (z) switch (C) {
                            case "youtube":
                                return ei ? {
                                    getCurrentTime: () => ei.getCurrentTime(),
                                    async setCurrentTime(e) {
                                        await ei.seekTo(e, !0)
                                    },
                                    getDuration: () => ei.getDuration(),
                                    async play() {
                                        await ei.playVideo()
                                    },
                                    async pause() {
                                        await ei.pauseVideo()
                                    }
                                } : void 0;
                            case "vimeo":
                                return ec ? {
                                    getCurrentTime: () => ec.getCurrentTime(),
                                    async setCurrentTime(e) {
                                        await ec.setCurrentTime(e)
                                    },
                                    getDuration: () => ec.getDuration(),
                                    async play() {
                                        await ec.play()
                                    },
                                    async pause() {
                                        await ec.pause()
                                    }
                                } : void 0
                        }
                    }, [C, ei, ec, z]),
                    ep = (0, s.useMemo)(() => ef ? function(e, a) {
                        switch (e) {
                            case "youtube":
                                return (0, f.px)(a);
                            case "vimeo":
                                return ""
                        }
                    }(C, eo) : "", [C, eo, ef]);
                (0, s.useEffect)(() => {
                    if (!ef || !F) return;
                    let e = 0,
                        a = 0,
                        t = (0, w.PB)(() => {
                            let t = performance.now();
                            a = t, (async () => {
                                let r = e;
                                try {
                                    r = await ef.getCurrentTime()
                                } catch {}
                                t === a && r !== e && (e = r, F({
                                    seconds: r
                                }))
                            })()
                        }, 100);
                    return () => {
                        t()
                    }
                }, [ef, F]), (0, s.useImperativeHandle)(q, () => ef, [ef]);
                let eb = (0, s.useMemo)(() => {
                        if ("youtube" === C) return `https://www.youtube.com/watch?v=${eo}`
                    }, [C, eo]),
                    ev = (0, s.useMemo)(() => ({
                        playerVars: {
                            autoplay: j ? 1 : 0,
                            playsinline: B ? 1 : 0,
                            modestbranding: 1,
                            controls: "enabled" === N ? 1 : 0,
                            loop: T ? 1 : 0,
                            rel: 0
                        }
                    }), [j, N, T, B]),
                    em = (0, s.useCallback)(() => {
                        Y(!0), O(performance.now()), (0, v.xj)({
                            id: eo
                        })
                    }, [eo]),
                    eh = (0, s.useCallback)(() => {
                        if (W || !K) return;
                        let e = performance.now() - K;
                        (0, v.uI)({
                            id: eo,
                            seconds: Math.round(e / 1e3)
                        }), G(!0)
                    }, [W, K, eo]),
                    e_ = (0, s.useCallback)(() => {
                        Y(!1), eh()
                    }, [eh]);
                (0, s.useEffect)(() => {
                    j && ef && em()
                }, [j, em, ef]), (0, s.useEffect)(() => {
                    let e = () => {
                        eh()
                    };
                    return Z.events.on("routeChangeStart", e), () => {
                        Z.events.off("routeChangeStart", e)
                    }
                }, [Z.events, eo, K, W, G, eh]);
                let ek = (0, s.useCallback)(() => {
                        em()
                    }, [em]),
                    eP = (0, s.useCallback)(() => {
                        e_()
                    }, [e_]),
                    eg = (0, s.useCallback)(() => {
                        eh()
                    }, [eh]),
                    ew = (0, s.useCallback)(() => {
                        if (A) {
                            $(el);
                            return
                        }
                        let e = U ? null == ef ? void 0 : ef.pause : null == ef ? void 0 : ef.play;
                        null == e || e()
                    }, [A, el, $, U, ef]),
                    eI = (0, s.useMemo)(() => A ? "locked" : U ? "playing" : "paused", [A, U]),
                    ex = (0, s.useMemo)(() => "locked" === eI ? el : H.formatMessage({
                        id: "VideoPlayer.playbackButtonLabel",
                        description: "Accessible label for the play/pause button on the video player",
                        defaultMessage: (0, p.Ys)("playbackState", {
                            paused: "Play",
                            playing: "Pause",
                            other: "Play"
                        })
                    }, {
                        playbackState: eI
                    }), [H, eI, el]);
                return (0, r.jsxs)("div", {
                    id: eo,
                    className: o()(I.videoContainer, {
                        [I.controlsEnabled]: "enabled" === N,
                        [I.controlsPause]: "pause" === N,
                        [I.disableBorderRadius]: D,
                        [I.hasShadow]: L
                    }, a),
                    style: {
                        [(0, b.Ay)("--video-player-aspect-ratio")]: `${100*S}%`
                    },
                    children: [z && "youtube" === C ? (0, r.jsx)(i.Z, {
                        id: e,
                        videoId: eo,
                        opts: ev,
                        iframeClassName: I.videoIframe,
                        onPlay: ek,
                        onPause: eP,
                        onEnd: eg,
                        onError: () => ea(!0),
                        ref: ey
                    }) : null, z && "vimeo" === C ? (0, r.jsx)(x.f, {
                        id: e,
                        videoId: eo,
                        autoplay: j,
                        controls: "enabled" === N,
                        loop: T,
                        muted: en,
                        onPlay: ek,
                        onPause: eP,
                        onEnded: eg,
                        ref: ed
                    }) : null, (0, r.jsx)("div", {
                        hidden: er,
                        className: I.videoPoster,
                        children: (0, r.jsx)(h.E, {
                            src: es || ep,
                            className: I.videoPosterImage,
                            alt: E,
                            width: 1920,
                            height: 1080,
                            quality: 100,
                            style: {
                                objectFit: "cover",
                                display: "block",
                                width: "100%",
                                height: "100%"
                            },
                            onError: () => Q(!0)
                        })
                    }), (0, r.jsxs)("button", {
                        type: "button",
                        hidden: ee,
                        disabled: R,
                        className: o()(I.playbackButton, {
                            [I.fullscreen]: !er || "pause" === N,
                            [I.playbackStateLocked]: "locked" === eI,
                            [I.playbackStatePaused]: "paused" === eI,
                            [I.playbackStatePlaying]: "playing" === eI
                        }),
                        onClick: ew,
                        children: [(0, r.jsx)("span", {
                            className: I.playbackButtonAssistiveText,
                            children: ex
                        }), "locked" === eI ? (0, r.jsx)(u.LockIcon, {
                            className: I.playbackButtonIcon
                        }) : null, "paused" === eI ? (0, r.jsx)(d.PlaybackPlayIcon, {
                            className: I.playbackButtonIcon
                        }) : null, "playing" === eI ? (0, r.jsx)(c.PlaybackPauseIcon, {
                            className: I.playbackButtonIcon
                        }) : null]
                    }), (0, r.jsxs)("div", {
                        role: "alert",
                        hidden: !ee,
                        className: I.error,
                        children: [(0, r.jsx)("p", {
                            className: I.errorLine,
                            children: (0, r.jsx)(p._H, {
                                id: "videoPlayer.error.adblocker",
                                description: "Error message when the video player is blocked by an ad blocker",
                                defaultMessage: "Uh-oh! It looks like your ad blocker is preventing the video from playing."
                            })
                        }), "youtube" === C && eb ? (0, r.jsx)("p", {
                            className: I.errorLine,
                            children: (0, r.jsx)(p._H, {
                                id: "videoPlayer.error.youtube",
                                description: "Error message when YouTube is not available which links to the video on youtube.com",
                                defaultMessage: "Please watch it on <a>YouTube</a>",
                                values: {
                                    a: e => (0, r.jsx)(_.u, {
                                        href: eb,
                                        eventData: {
                                            name: "video_player_error"
                                        },
                                        children: e
                                    })
                                }
                            })
                        }) : null, (0, r.jsx)(h.E, {
                            className: I.errorIllustration,
                            src: m.Z.illustratedIcons.catLookingUpPng,
                            width: 154.60000000000002,
                            height: 193,
                            alt: ""
                        })]
                    })]
                })
            })
        },
        477198: function(e, a, t) {
            "use strict";

            function r(e, a = 0, ...t) {
                let n, o = 0,
                    l = r => {
                        o = requestAnimationFrame(l), n ? ? = r, r - n < a || (n = r, e(r, ...t))
                    };
                return o = requestAnimationFrame(l), () => cancelAnimationFrame(o)
            }

            function n(e, a = 0, ...t) {
                if (a <= 0) {
                    let r = setTimeout(e, a, ...t);
                    return () => clearTimeout(r)
                }
                let o = r(() => {
                    o(), e(...t)
                }, a, ...t);
                return o
            }
            t.d(a, {
                K5: function() {
                    return n
                },
                PB: function() {
                    return r
                }
            })
        },
        317153: function(e, a, t) {
            "use strict";
            t.d(a, {
                av: function() {
                    return l
                },
                ql: function() {
                    return s
                }
            });
            var r = t(819126),
                n = t.n(r),
                o = t(798714);

            function l(e, {
                autoplay: a,
                background: t,
                controls: r,
                muted: o,
                loop: l,
                dnt: s,
                playsinline: i
            } = {}) {
                let u = new URL(`https://player.vimeo.com/video/${e}`),
                    c = n().stringify({
                        autoplay: Number(a),
                        background: Number(t),
                        controls: Number(r),
                        loop: Number(l),
                        muted: Number(o),
                        dnt: Number(s ? ? !0),
                        ...void 0 !== i ? {
                            playsinline: Number(i)
                        } : {}
                    });
                return u.search = `${u.search}&${c}`, u.href
            }
            async function s(e) {
                let a = new URL("https://vimeo.com/api/oembed.json");
                return a.search = n().stringify(e), fetch(a.href).then(e => e.json()).catch(a => {
                    o.g9.error("vimeo.getVimeoOEmbed", {
                        params: e,
                        error: a
                    })
                })
            }
        },
        323221: function(e, a, t) {
            "use strict";

            function r(e) {
                return `https://img.youtube.com/vi/${e}/maxresdefault.jpg`
            }
            t.d(a, {
                px: function() {
                    return r
                }
            })
        },
        561802: function(e) {
            e.exports = {
                videoIframe: "videoPlayer_videoIframe__ZNVrQ",
                videoContainer: "videoPlayer_videoContainer__ITseV",
                disableBorderRadius: "videoPlayer_disableBorderRadius__s_EXS",
                hasShadow: "videoPlayer_hasShadow__YlX_M",
                videoPoster: "videoPlayer_videoPoster___Fqq7",
                videoPosterImage: "videoPlayer_videoPosterImage__m0s3G",
                playButtonTriangle: "videoPlayer_playButtonTriangle__SZoVZ",
                playButtonCircle: "videoPlayer_playButtonCircle__T6mnB",
                playButton: "videoPlayer_playButton__HyOn_",
                playbackButton: "videoPlayer_playbackButton__Wj00P",
                fullscreen: "videoPlayer_fullscreen__MFVZX",
                controlsEnabled: "videoPlayer_controlsEnabled___obVh",
                playbackStatePlaying: "videoPlayer_playbackStatePlaying__zUrVd",
                controlsPause: "videoPlayer_controlsPause__Xt9V7",
                playbackStateLocked: "videoPlayer_playbackStateLocked__XNgaJ",
                playbackStatePaused: "videoPlayer_playbackStatePaused__u2Fv_",
                playbackButtonIcon: "videoPlayer_playbackButtonIcon__xWc5b",
                playbackButtonAssistiveText: "videoPlayer_playbackButtonAssistiveText__mECDy",
                error: "videoPlayer_error__mIbKi",
                errorLine: "videoPlayer_errorLine__pR8bX",
                errorIllustration: "videoPlayer_errorIllustration__AITlh"
            }
        }
    }
]);