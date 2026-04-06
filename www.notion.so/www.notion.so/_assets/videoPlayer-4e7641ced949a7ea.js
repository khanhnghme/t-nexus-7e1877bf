"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [7043], {
        37869: (e, t, a) => {
            a.r(t), a.d(t, {
                VideoSpotlightRenderer: () => r
            });
            var n = a(296540),
                i = a(474848);

            function l() {}
            let o = {
                zIndex: 0,
                position: "fixed",
                top: 0,
                insetInlineStart: 0,
                insetInlineEnd: 0,
                bottom: 0,
                pointerEvents: "auto",
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer"
            };

            function r() {
                let {
                    isOpen: e,
                    videoRef: t
                } = (0, a(682985).K8)(() => {
                    let {
                        state: e
                    } = a(659447).m;
                    return {
                        isOpen: e.isOpen,
                        videoRef: e.videoRef
                    }
                }, []);
                (0, a(655854).A)({
                    capture: e,
                    preventType: a(644154).A.All
                });
                let r = (0, n.useCallback)(() => {
                        a(218341).yD()
                    }, []),
                    s = (0, n.useCallback)(e => {
                        (0, a(85520).V)(e) || r()
                    }, [r]),
                    d = (0, n.useCallback)(() => {
                        let e = null == t ? void 0 : t.current;
                        e && (e.paused ? e.play() : e.pause())
                    }, [t]);
                return e ? (0, i.jsx)(a(114596).O, {
                    open: e,
                    children: (0, i.jsx)(a(369064).N, {
                        debugName: "VideoSpotlightRenderer",
                        capture: e,
                        onEsc: r,
                        onEnter: l,
                        onSpace: d,
                        onCommandEnter: r,
                        onCommandShiftEnter: l,
                        onCommandSlash: l,
                        onUp: l,
                        onDown: l,
                        onDelete: l,
                        onBackspace: l,
                        onLeft: l,
                        onRight: l,
                        onUntab: l,
                        onTab: l,
                        onSelectAll: l,
                        onRedo: l,
                        onUndo: l,
                        onToggleBold: l,
                        onToggleItalics: l,
                        onToggleStrike: l,
                        onToggleCode: l,
                        onCut: l,
                        onCopy: l,
                        onPaste: l,
                        children: (0, i.jsx)("button", {
                            "aria-label": "Close video spotlight",
                            onClick: s,
                            style: o,
                            type: "button",
                            children: (0, i.jsx)(a(781036).B, {})
                        })
                    })
                }) : null
            }
        },
        149789: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowExpandDiagonalBottomLeftToTopRightSmallIcon: () => i,
                iconDefinition: () => n
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.46 2.46 11.08 11.08",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8.912 2.463a.625.625 0 1 0 0 1.25h2.491L8.358 6.758a.625.625 0 1 0 .884.884l3.045-3.045v2.49a.625.625 0 1 0 1.25 0v-4a.625.625 0 0 0-.625-.624zM7.64 8.36a.625.625 0 0 0-.885 0l-3.042 3.043V8.912a.625.625 0 1 0-1.25 0v4c0 .345.28.625.625.625h4a.625.625 0 0 0 0-1.25H4.597l3.042-3.043a.625.625 0 0 0 0-.883"
                    })
                },
                i = (0, a(104509).wt)("arrowExpandDiagonalBottomLeftToTopRightSmall", n, "small")
        },
        164177: (e, t, a) => {
            a.d(t, {
                j: () => l
            });
            var n = () => a(546605);
            class i extends n().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let l = new i
        },
        218341: (e, t, a) => {
            function n(e) {
                let {
                    videoRef: t,
                    contentAspectRatio: n
                } = e;
                a(659447).m.setState({ ...a(659447).m.state,
                    isOpen: !0,
                    videoRef: t,
                    contentAspectRatio: n
                })
            }

            function i() {
                a(659447).m.setState({ ...a(659447).m.state,
                    isOpen: !1
                })
            }

            function l(e) {
                a(659447).m.state.isOpen && a(659447).m.setState({ ...a(659447).m.state,
                    contentAspectRatio: e
                })
            }

            function o(e) {
                return e < 1020 ? 16 : 32
            }
            a.d(t, {
                AR: () => n,
                K: () => l,
                Qd: () => o,
                yD: () => i
            })
        },
        231123: (e, t, a) => {
            a.d(t, {
                i: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.23 3.23 13.54 13.54",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M7.491 8.375 3.418 4.302a.625.625 0 0 1 .884-.884L8.375 7.49V4a.625.625 0 0 1 1.25 0v5c0 .345-.28.625-.625.625H4a.625.625 0 1 1 0-1.25zm4.137 4.137v3.491a.625.625 0 1 1-1.25 0v-5c0-.345.28-.625.625-.625h5a.625.625 0 1 1 0 1.25h-3.491l4.07 4.07a.625.625 0 0 1-.884.884z"
                    })
                },
                i = (0, a(104509).wt)("arrowCollapse", n, "default")
        },
        502569: (e, t, a) => {
            a.r(t), a.d(t, {
                VideoPlayer: () => P
            });
            var n = a(296540),
                i = a(474848);
            let l = (0, a(109939).YK)({
                    expand: {
                        id: "VideoExpandButton.expand",
                        defaultMessage: "Expand"
                    },
                    collapse: {
                        id: "VideoExpandButton.collapse",
                        defaultMessage: "Close"
                    }
                }),
                o = {
                    minWidth: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                };

            function r(e) {
                let {
                    onClick: t,
                    isSpotlight: n
                } = e, r = (0, a(109939).tz)().formatMessage(n ? l.collapse : l.expand);
                return a(986939).A.isMobile && !n ? null : (0, i.jsx)(a(374533).A, {
                    shape: "pill",
                    icon: n ? a(231123).i : a(149789).arrowExpandDiagonalBottomLeftToTopRightSmallIcon,
                    onClick: t,
                    ariaLabel: r,
                    size: "md",
                    style: o,
                    colorVariant: "primary"
                })
            }
            let s = (0, a(109939).YK)({
                    play: {
                        id: "VideoPlayPauseButton.play",
                        defaultMessage: "Play"
                    },
                    pause: {
                        id: "VideoPlayPauseButton.pause",
                        defaultMessage: "Pause"
                    }
                }),
                d = {
                    width: 40
                };

            function u(e) {
                let {
                    visualState: t,
                    onToggle: n,
                    disabled: l
                } = e, o = (0, a(109939).tz)();
                if ("loading" === t) return (0, i.jsx)(a(4458).fI, {
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 28,
                    inline: !0,
                    role: "status",
                    children: (0, i.jsx)(a(517334).k, {
                        size: "sm",
                        onDarkBackground: !0
                    })
                });
                let r = o.formatMessage("pause" === t ? s.pause : s.play);
                return (0, i.jsx)(a(374533).A, {
                    shape: "pill",
                    icon: "pause" === t ? a(789737).r : a(940723).b,
                    onClick: n,
                    ariaLabel: r,
                    disabled: l,
                    size: "md",
                    style: d,
                    colorVariant: "primary"
                })
            }

            function c(e) {
                let {
                    currentTime: t,
                    duration: l,
                    onSeek: o,
                    onSeekStart: r,
                    onSeekEnd: s,
                    isLoading: d
                } = e, u = (0, n.useRef)(null), c = l > 0 ? t / l * 100 : 0, p = (0, a(960253).I)(() => ({
                    container: {
                        position: "relative",
                        flexGrow: 1,
                        height: 16,
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        touchAction: "none"
                    },
                    track: {
                        position: "relative",
                        width: "100%",
                        height: 4,
                        borderRadius: 2,
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        overflow: "hidden"
                    },
                    filled: {
                        position: "absolute",
                        top: 0,
                        insetInlineStart: 0,
                        height: "100%",
                        borderRadius: 2,
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        width: `${c}%`
                    },
                    loadingShimmer: {
                        position: "absolute",
                        top: 0,
                        insetInlineStart: 0,
                        height: "100%",
                        width: "100%",
                        borderRadius: 2
                    },
                    thumb: {
                        position: "absolute",
                        top: "50%",
                        insetInlineStart: `${c}%`,
                        transform: "translate(calc(var(--direction, 1) * -50%), -50%)",
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        opacity: 0,
                        transition: "opacity 0.15s ease-in-out"
                    }
                }), [c]), m = (0, n.useCallback)(e => {
                    let t = u.current;
                    if (null === t || l <= 0) return;
                    let n = t.getBoundingClientRect(),
                        i = e - n.left;
                    return (0, a(627179).qE)({
                        value: i / n.width,
                        min: 0,
                        max: 1
                    }) * l
                }, [l]), g = (0, n.useCallback)(e => {
                    e.preventDefault(), e.stopPropagation();
                    let t = m(e.clientX);
                    if (void 0 === t) return;
                    null == r || r(), o(t);
                    let a = e => {
                            let t = m(e.clientX);
                            void 0 !== t && o(t)
                        },
                        n = () => {
                            null == s || s(), document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", n)
                        };
                    document.addEventListener("mousemove", a), document.addEventListener("mouseup", n)
                }, [m, o, r, s]), h = (0, n.useCallback)(e => {
                    let t = e.touches[0];
                    if (!t) return;
                    let a = m(t.clientX);
                    if (void 0 === a) return;
                    null == r || r(), o(a);
                    let n = e => {
                            let t = e.touches[0];
                            if (t) {
                                let e = m(t.clientX);
                                void 0 !== e && o(e)
                            }
                        },
                        i = () => {
                            null == s || s(), document.removeEventListener("touchmove", n), document.removeEventListener("touchend", i)
                        };
                    document.addEventListener("touchmove", n), document.addEventListener("touchend", i)
                }, [m, o, r, s]), v = (0, n.useCallback)(e => {
                    e.stopPropagation()
                }, []);
                return (0, i.jsxs)("div", {
                    ref: u,
                    style: p.container,
                    onMouseDown: g,
                    onTouchStart: h,
                    onClick: v,
                    role: "slider",
                    "aria-label": "Video progress",
                    "aria-valuenow": Math.floor(t),
                    "aria-valuemin": 0,
                    "aria-valuemax": Math.floor(l),
                    tabIndex: 0,
                    children: [(0, i.jsxs)("div", {
                        style: p.track,
                        children: [(0, i.jsx)("div", {
                            style: p.filled
                        }), d ? (0, i.jsx)("div", {
                            className: "video-progress-shimmer",
                            style: p.loadingShimmer
                        }) : void 0]
                    }), (0, i.jsx)("div", {
                        style: p.thumb
                    })]
                })
            }
            let p = (0, a(109939).YK)({
                    playbackSpeed: {
                        id: "VideoSpeedControl.playbackSpeed",
                        defaultMessage: "Playback speed"
                    },
                    decrease: {
                        id: "VideoSpeedControl.decrease",
                        defaultMessage: "Decrease speed"
                    },
                    increase: {
                        id: "VideoSpeedControl.increase",
                        defaultMessage: "Increase speed"
                    }
                }),
                m = [.5, 1, 1.5, 2];

            function g(e) {
                let t = Math.round(100 * e) / 100;
                return t === Math.floor(t) ? `${t}x` : 10 * t === Math.floor(10 * t) ? `${t.toFixed(1)}x` : `${t.toFixed(2)}x`
            }
            let h = {
                button: {
                    minWidth: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0,
                    marginInline: -4,
                    fontSize: 12,
                    fontWeight: a(699422).Wy.medium,
                    color: "rgba(255, 255, 255, 0.75)",
                    userSelect: "none"
                },
                currentSpeed: {
                    fontSize: 14,
                    color: a(632079).Tj.text.primary,
                    userSelect: "none"
                }
            };

            function v(e) {
                let {
                    speed: t,
                    onSpeedChange: l,
                    isSpotlight: o
                } = e, r = (0, a(109939).tz)(), s = (0, n.useCallback)(() => {
                    l(Math.round(100 * (0, a(627179).qE)({
                        value: t - .1,
                        min: .25,
                        max: 4
                    })) / 100)
                }, [t, l]), d = (0, n.useCallback)(() => {
                    l(Math.round(100 * (0, a(627179).qE)({
                        value: t + .1,
                        min: .25,
                        max: 4
                    })) / 100)
                }, [t, l]), u = (0, n.useCallback)(e => l(e), [l]), c = t <= .25, v = t >= 4, f = (0, n.useMemo)(() => [{
                    key: "presets",
                    render: e => (0, i.jsx)(a(844565).A, { ...e,
                        topBorder: !0
                    }),
                    items: m.map(e => {
                        let n = .001 > Math.abs(t - e);
                        return {
                            key: e,
                            action: () => u(e),
                            render: t => (0, i.jsx)(a(95582).A, { ...t,
                                title: g(e),
                                isChecked: n
                            })
                        }
                    })
                }], [t, u]);
                return (0, i.jsx)(a(656252).A, {
                    popupType: a(656252).z.Popup,
                    content: () => (0, i.jsxs)(a(747369).A, {
                        menuType: a(649476).gu.Popup,
                        width: 180,
                        children: [(0, i.jsx)(a(844565).A, {
                            title: (0, i.jsx)("span", {
                                style: h.currentSpeed,
                                children: g(t)
                            }),
                            right: (0, i.jsxs)(a(4458).fI, {
                                gap: 4,
                                children: [(0, i.jsx)(a(374533).A, {
                                    variant: "tint",
                                    icon: a(970709).v,
                                    size: "xs",
                                    shape: "pill",
                                    onClick: s,
                                    disabled: c,
                                    ariaLabel: r.formatMessage(p.decrease),
                                    colorVariant: "primary"
                                }), (0, i.jsx)(a(374533).A, {
                                    variant: "tint",
                                    icon: a(638501).plusSmallIcon,
                                    size: "xs",
                                    shape: "pill",
                                    onClick: d,
                                    disabled: v,
                                    ariaLabel: r.formatMessage(p.increase),
                                    colorVariant: "primary"
                                })]
                            })
                        }), (0, i.jsx)(a(558045).A, {
                            type: a(558045).O.Vertical,
                            sections: f,
                            initialFocus: void 0
                        })]
                    }),
                    placementToOrigin: "top",
                    alignmentToOrigin: "end",
                    originGap: 8,
                    overlayContainerZIndex: o ? 1002 : void 0,
                    children: e => (0, i.jsx)(a(988022).p, {
                        shape: "pill",
                        size: "md",
                        style: h.button,
                        "aria-label": r.formatMessage(p.playbackSpeed),
                        ...e,
                        children: g(t)
                    })
                })
            }
            let f = {
                container: {
                    fontVariantNumeric: "tabular-nums",
                    fontSize: 12,
                    fontWeight: a(699422).Wy.medium,
                    color: "rgba(255, 255, 255, 0.75)",
                    whiteSpace: "nowrap",
                    userSelect: "none"
                }
            };

            function b(e) {
                let t, a, n, l, {
                    timeInSeconds: o
                } = e;
                return (0, i.jsx)("span", {
                    style: f.container,
                    children: (a = Math.floor((t = Math.max(0, Math.floor(o))) / 3600), n = Math.floor(t % 3600 / 60), l = t % 60, a > 0 ? `${a}:${String(n).padStart(2,"0")}:${String(l).padStart(2,"0")}` : `${n}:${String(l).padStart(2,"0")}`)
                })
            }
            let S = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.08 2.72 15.83 14.57",
                    svg: (0, i.jsx)("path", {
                        d: "m4.897 3.086-.122-.143a.625.625 0 0 0-.95.814l2.127 2.481-.268.25H2.712a.625.625 0 0 0-.625.626v6c0 .345.28.625.625.625h2.972l3.523 3.29c.619.58 1.63.14 1.63-.707v-4.385l4.389 5.12a.625.625 0 0 0 1.04-.67L4.99 3.228a.6.6 0 0 1-.092-.143m11.715 11.784a9.34 9.34 0 0 0-.389-10.114.625.625 0 0 0-1.024.717 8.1 8.1 0 0 1 .546 8.385zm-2.175-2.537a5.31 5.31 0 0 0-.746-5.619.625.625 0 0 0-.96.8 4.06 4.06 0 0 1 .779 3.737zM10.837 8.13V3.906c0-.847-1.011-1.286-1.63-.708L7.764 4.545z"
                    })
                },
                x = (0, a(104509).wt)("volumeOffFill", S, "fill"),
                y = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.08 2.93 15.83 14.36",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M10.837 3.905c0-.847-1.011-1.286-1.63-.708L5.684 6.49H2.712a.625.625 0 0 0-.625.625v6c0 .345.28.625.625.625h2.972l3.523 3.29c.619.58 1.63.14 1.63-.707zm1.974 2.728a.625.625 0 0 1 .88.08 5.31 5.31 0 0 1 0 6.8.625.625 0 0 1-.96-.8 4.06 4.06 0 0 0 0-5.2.625.625 0 0 1 .08-.88"
                        }), (0, i.jsx)("path", {
                            d: "M16.224 4.755a.625.625 0 0 0-1.024.717 8.09 8.09 0 0 1 0 9.283.625.625 0 0 0 1.024.717 9.34 9.34 0 0 0 0-10.717"
                        })]
                    })
                },
                k = (0, a(104509).wt)("volumeOnFill", y, "fill"),
                C = (0, a(109939).YK)({
                    mute: {
                        id: "VideoVolumeControl.mute",
                        defaultMessage: "Mute"
                    },
                    unmute: {
                        id: "VideoVolumeControl.unmute",
                        defaultMessage: "Unmute"
                    }
                }),
                j = {
                    minWidth: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                };

            function w(e) {
                let {
                    volume: t,
                    isMuted: n,
                    onMuteToggle: l
                } = e, o = (0, a(109939).tz)().formatMessage(n ? C.unmute : C.mute);
                return (0, i.jsx)(a(374533).A, {
                    icon: n || 0 === t ? x : k,
                    onClick: l,
                    ariaLabel: o,
                    size: "md",
                    shape: "pill",
                    style: j,
                    colorVariant: "primary"
                })
            }

            function M(e) {
                let {
                    videoRef: t,
                    controlsStore: l,
                    state: o,
                    isVisible: s,
                    isSpotlight: d,
                    onExpandClick: p,
                    onCollapseClick: m
                } = e, g = s || !o.isPlaying || o.isLoading, h = (0, n.useRef)(null), f = (0, a(729787).wY)(h), S = ((null == f ? void 0 : f.width) ? ? 1 / 0) >= 160, x = (0, a(960253).I)(() => ({
                    container: {
                        position: "absolute",
                        bottom: 0,
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        zIndex: 10,
                        paddingBlock: 2,
                        paddingInline: 2,
                        marginBlockEnd: 8,
                        marginInline: 8,
                        background: "rgba(0, 0, 0, 0.25)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        borderRadius: 17,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        outline: "1px solid rgba(0, 0, 0, 0.18)",
                        opacity: +!!g,
                        transition: "opacity 100ms ease",
                        pointerEvents: g ? "auto" : "none"
                    },
                    time: {
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        minWidth: 0
                    },
                    timeValue: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4
                    },
                    compactModeSpacer: {
                        flexGrow: 1,
                        minWidth: 0
                    },
                    rightControls: {
                        display: "flex",
                        alignItems: "center",
                        marginInlineStart: 4
                    },
                    timeSlash: {
                        color: "rgba(255, 255, 255, 0.75)",
                        fontSize: 12,
                        fontWeight: a(699422).Wy.medium
                    }
                }), [g]), y = (0, n.useCallback)(async e => {
                    l.setState({ ...l.state,
                        isPlaybackPending: !0
                    });
                    try {
                        await e.play()
                    } catch (e) {
                        l.setState({ ...l.state,
                            isPlaybackPending: !1
                        }), (0, a(222024).t)().error({
                            from: "VideoControlsBar",
                            type: "videoPlayRequestFailed",
                            error: e
                        })
                    }
                }, [l]), k = (0, n.useCallback)(() => {
                    let e = t.current;
                    e && (o.isPlaying ? e.pause() : y(e))
                }, [t, o.isPlaying, y]), C = (0, n.useRef)(!1), j = (0, n.useCallback)(e => {
                    let a = t.current;
                    a && (l.setState({ ...l.state,
                        currentTime: e
                    }), a.currentTime = e)
                }, [t, l]), M = (0, n.useCallback)(() => {
                    let e = t.current;
                    e && !e.paused ? (C.current = !0, e.pause()) : C.current = !1, l.setState({ ...l.state,
                        isSeeking: !0,
                        isLoading: !0
                    })
                }, [l, t]), E = (0, n.useCallback)(() => {
                    let e = t.current;
                    l.setState({ ...l.state,
                        isSeeking: !1
                    }), e && C.current && (C.current = !1, y(e))
                }, [l, t, y]), P = (0, n.useCallback)(() => {
                    let e = t.current;
                    e && (e.muted = !e.muted)
                }, [t]), L = (0, n.useCallback)(e => {
                    let a = t.current;
                    a && (a.playbackRate = e)
                }, [t]), I = (0, n.useCallback)(e => {
                    e.stopPropagation()
                }, []), V = (0, n.useCallback)(() => {
                    d ? null == m || m() : null == p || p()
                }, [d, m, p]), T = o.isPlaybackPending || o.isLoading && o.isPlaying ? "loading" : o.isPlaying ? "pause" : "play";
                return (0, i.jsx)(a(172474).BQ, {
                    mode: "dark",
                    children: (0, i.jsxs)("div", {
                        style: x.container,
                        onMouseDown: a(220684).t,
                        onClick: I,
                        role: "toolbar",
                        children: [(0, i.jsx)(u, {
                            visualState: T,
                            onToggle: k
                        }), (0, i.jsxs)("div", {
                            ref: h,
                            style: x.time,
                            children: [(0, i.jsx)("div", {
                                style: x.timeValue,
                                children: (0, i.jsx)(b, {
                                    timeInSeconds: o.currentTime
                                })
                            }), S ? (0, i.jsx)(c, {
                                currentTime: o.currentTime,
                                duration: o.duration,
                                onSeek: j,
                                onSeekStart: M,
                                onSeekEnd: E,
                                isLoading: o.isLoading
                            }) : (0, i.jsx)("div", {
                                style: x.timeSlash,
                                children: "/"
                            }), (0, i.jsx)("div", {
                                style: x.timeValue,
                                children: (0, i.jsx)(b, {
                                    timeInSeconds: o.duration
                                })
                            }), S ? void 0 : (0, i.jsx)("div", {
                                style: x.compactModeSpacer
                            })]
                        }), (0, i.jsxs)("div", {
                            style: x.rightControls,
                            children: [(0, i.jsx)(w, {
                                volume: o.volume,
                                isMuted: o.isMuted,
                                onMuteToggle: P
                            }), (0, i.jsx)(v, {
                                speed: o.playbackSpeed,
                                onSpeedChange: L,
                                isSpotlight: d
                            }), (0, i.jsx)(r, {
                                onClick: V,
                                isSpotlight: d
                            }, d ? "collapse" : "expand")]
                        })]
                    })
                })
            }
            let E = a(546605).Store.createClass({
                isPlaying: !1,
                isPlaybackPending: !1,
                currentTime: 0,
                duration: 0,
                volume: 1,
                isMuted: !1,
                playbackSpeed: 1,
                isSeeking: !1,
                isLoading: !0,
                isSeekLoading: !1
            }, {
                name: "VideoControlsStore"
            });

            function P(e) {
                let {
                    signedUrl: t,
                    source: l,
                    isFullWidth: o,
                    isRootChild: r,
                    preserveScale: s,
                    height: d,
                    contentStyle: u,
                    blockLocation: c,
                    playedStore: p,
                    errorStore: m,
                    videoRef: g,
                    setVideoRef: h,
                    thumbnailSignedUrl: v,
                    isControlsVisible: f,
                    isInView: b,
                    blockAspectRatio: S
                } = e, x = (0, a(533992).v3)(), y = (0, a(682985).uB)(void 0, E), k = (0, a(682985).O$)(y), C = (0, n.useRef)(null), j = (0, n.useContext)(a(425930).A), w = (0, a(682985).K8)(() => a(659447).m.state.isOpen, []), P = (0, a(682985).K8)(() => a(659447).m.state.videoRef, []), L = w && P === g, [I, V] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    if (L) {
                        let e = requestAnimationFrame(() => {
                            V(!0)
                        });
                        return () => cancelAnimationFrame(e)
                    }
                    V(!1)
                }, [L]);
                let T = (0, n.useRef)(null);
                (0, n.useLayoutEffect)(() => {
                    let e = C.current;
                    if (e && j) {
                        if (L) {
                            let t = e.parentNode;
                            if (!t) return;
                            T.current = {
                                parent: t,
                                nextSibling: e.nextSibling
                            }, j.appendChild(e)
                        } else if (T.current) {
                            let {
                                parent: t,
                                nextSibling: a
                            } = T.current;
                            a ? t.insertBefore(e, a) : t.appendChild(e), T.current = null
                        }
                    }
                }, [L, j]);
                let A = (0, n.useCallback)(() => {
                        let e, t = g.current;
                        t && (e = t.videoWidth && t.videoHeight ? t.videoWidth / t.videoHeight : S && S > 0 ? 1 / S : 16 / 9, a(218341).AR({
                            videoRef: g,
                            contentAspectRatio: e
                        }))
                    }, [g, S]),
                    B = (0, n.useCallback)(() => {
                        y.setState({ ...y.state,
                            isPlaybackPending: !0
                        })
                    }, [y]),
                    R = (0, n.useCallback)(() => {
                        y.setState({ ...y.state,
                            isPlaying: !0,
                            isLoading: !1,
                            isSeekLoading: !1
                        })
                    }, [y]),
                    z = (0, n.useCallback)(e => {
                        y.setState({ ...y.state,
                            isPlaybackPending: !1,
                            currentTime: e
                        })
                    }, [y]),
                    W = (0, n.useCallback)(() => {
                        y.setState({ ...y.state,
                            isPlaying: !1,
                            isPlaybackPending: !1
                        })
                    }, [y]),
                    F = (0, n.useCallback)(() => {
                        a(986939).A.isMobile && p.setState(!1), W()
                    }, [p, W]),
                    D = (0, n.useCallback)(() => {
                        p.setState(!0), B()
                    }, [p, B]),
                    O = (0, n.useCallback)(() => {
                        R()
                    }, [R]),
                    H = (0, n.useCallback)(() => {
                        let {
                            device: e
                        } = x;
                        e.isAndroid && document.fullscreenElement && document.exitFullscreen()
                    }, [x]),
                    K = (0, n.useCallback)(() => {
                        let {
                            device: e
                        } = x, t = g.current;
                        e.isIOS && t && t.pause()
                    }, [x, g]),
                    $ = (0, n.useCallback)(e => {
                        let t = (0, a(537032).oq)(e.currentTarget, l);
                        t && m.setState(t)
                    }, [l, m]),
                    N = (0, n.useCallback)(() => {
                        let e = g.current;
                        e && !y.state.isSeeking && z(e.currentTime)
                    }, [g, y, z]);
                (0, n.useEffect)(() => {
                    let e;
                    if (!k.isPlaying || k.isSeeking) return;
                    let t = 1e3 / 24,
                        a = 0,
                        n = i => {
                            if (i - a >= t) {
                                let e = g.current;
                                e && !y.state.isSeeking && y.setState({ ...y.state,
                                    currentTime: e.currentTime
                                }), a = i
                            }
                            e = requestAnimationFrame(n)
                        };
                    return e = requestAnimationFrame(n), () => {
                        cancelAnimationFrame(e)
                    }
                }, [k.isPlaying, k.isSeeking, g, y]);
                let q = (0, n.useCallback)(() => {
                        let e = g.current;
                        if (!e) return;
                        let t = e.duration;
                        Number.isFinite(t) && !(t <= 0) && y.setState({ ...y.state,
                            duration: t
                        })
                    }, [g, y]),
                    U = (0, n.useCallback)(() => {
                        let e = g.current;
                        e && y.setState({ ...y.state,
                            volume: e.volume,
                            isMuted: e.muted
                        })
                    }, [g, y]),
                    _ = (0, n.useCallback)(() => {
                        let e = g.current;
                        e && y.setState({ ...y.state,
                            playbackSpeed: e.playbackRate
                        })
                    }, [g, y]),
                    G = (0, n.useCallback)(() => {
                        y.setState({ ...y.state,
                            isLoading: !0
                        })
                    }, [y]),
                    Y = (0, n.useCallback)(() => {
                        y.setState({ ...y.state,
                            isLoading: !1
                        })
                    }, [y]),
                    X = (0, n.useCallback)(() => {
                        y.setState({ ...y.state,
                            isLoading: !0,
                            isSeekLoading: !0
                        })
                    }, [y]),
                    Q = (0, n.useCallback)(() => {
                        let e = g.current;
                        e && y.setState({ ...y.state,
                            currentTime: e.currentTime
                        })
                    }, [g, y]);
                (0, n.useEffect)(() => {
                    let e = g.current;
                    if (!e) return;
                    let t = () => {
                        let e = g.current;
                        if (!e || y.state.isSeeking) return;
                        let t = e.duration;
                        if (Number.isFinite(t) && t > 0) {
                            let a = e.readyState < HTMLMediaElement.HAVE_CURRENT_DATA;
                            y.setState({ ...y.state,
                                duration: t,
                                currentTime: e.currentTime,
                                volume: e.volume,
                                isMuted: e.muted,
                                playbackSpeed: e.playbackRate,
                                isPlaying: !e.paused && !y.state.isPlaybackPending,
                                isLoading: a,
                                isPlaybackPending: y.state.isPlaybackPending,
                                isSeekLoading: y.state.isSeekLoading && e.paused
                            })
                        }
                    };
                    return e.readyState >= HTMLMediaElement.HAVE_METADATA && t(), e.addEventListener("durationchange", t), e.addEventListener("loadedmetadata", t), () => {
                        e.removeEventListener("durationchange", t), e.removeEventListener("loadedmetadata", t)
                    }
                }, [g, y, t]), (0, n.useEffect)(() => {
                    if (!L) return;
                    let e = g.current;
                    if (!e) return;
                    let t = () => {
                        let e = g.current;
                        if (e && e.videoWidth > 0 && e.videoHeight > 0) {
                            let t = e.videoWidth / e.videoHeight;
                            a(218341).K(t)
                        }
                    };
                    return e.videoWidth > 0 && e.videoHeight > 0 && t(), e.addEventListener("loadedmetadata", t), e.addEventListener("loadeddata", t), () => {
                        e.removeEventListener("loadedmetadata", t), e.removeEventListener("loadeddata", t)
                    }
                }, [L, g]);
                let Z = (0, a(682985).K8)(() => (0, a(227126).Z)({
                        mediaType: "video_file",
                        isFullWidth: o,
                        isRootChild: r,
                        preserveScale: s,
                        height: d,
                        contentStyleOverride: u,
                        blockLocation: c,
                        playedStore: p
                    }), [o, r, s, d, u, c, p]),
                    J = (0, a(682985).K8)(() => {
                        let e = x.WindowSizeStore.state.width;
                        return a(218341).Qd(e)
                    }, [x.WindowSizeStore]),
                    ee = (0, a(682985).K8)(() => ({
                        width: x.WindowSizeStore.state.width,
                        height: x.WindowSizeStore.state.height
                    }), [x.WindowSizeStore]),
                    et = (0, a(682985).K8)(() => a(659447).m.state.contentAspectRatio, []),
                    ea = (0, n.useMemo)(() => {
                        if (!L) return;
                        let e = et ? ? 16 / 9,
                            t = ee.width - 2 * J,
                            a = ee.height - 2 * J,
                            n = t,
                            i = n / e;
                        if (i > a) {
                            let e = i / a;
                            i /= e, n /= e
                        }
                        return {
                            width: n,
                            height: i
                        }
                    }, [L, et, ee, J]),
                    en = (0, a(960253).I)(() => ({
                        container: {
                            position: "relative",
                            width: "100%"
                        },
                        spotlightContainer: {
                            position: "fixed",
                            top: 0,
                            insetInlineStart: 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            zIndex: 1001,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            pointerEvents: "none",
                            opacity: +!!I,
                            transition: "opacity 150ms ease-out"
                        },
                        normalWrapper: {
                            position: "relative"
                        },
                        spotlightWrapper: {
                            position: "relative",
                            width: null == ea ? void 0 : ea.width,
                            height: null == ea ? void 0 : ea.height,
                            maxWidth: "100%",
                            maxHeight: "100%",
                            pointerEvents: "auto"
                        }
                    }), [ea, I]),
                    ei = L ? {
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                    } : Z,
                    el = (0, i.jsx)("video", {
                        ref: h,
                        style: ei,
                        className: "video-hide-default-controls",
                        autoPlay: x.device.isIOS,
                        playsInline: !0,
                        controls: !1,
                        preload: "metadata",
                        poster: v,
                        onPause: F,
                        onPlay: D,
                        onPlaying: O,
                        onEnded: H,
                        onLoadStart: K,
                        onError: $,
                        ...{
                            onTimeUpdate: N,
                            onLoadedMetadata: q,
                            onDurationChange: q,
                            onVolumeChange: U,
                            onRateChange: _,
                            onWaiting: G,
                            onCanPlay: Y,
                            onSeeking: X,
                            onSeeked: Q
                        },
                        src: b ? t : void 0
                    }),
                    eo = (0, n.useCallback)(() => {
                        a(218341).yD()
                    }, []),
                    er = (0, n.useCallback)(() => {
                        let e = g.current;
                        e && (e.paused ? e.play() : e.pause())
                    }, [g]),
                    es = (0, i.jsx)(M, {
                        videoRef: g,
                        controlsStore: y,
                        state: k,
                        isVisible: !!L || f,
                        isSpotlight: L,
                        onExpandClick: L ? void 0 : A,
                        onCollapseClick: L ? eo : void 0
                    });
                return (0, i.jsx)("div", {
                    ref: C,
                    style: L ? en.spotlightContainer : en.container,
                    children: (0, i.jsxs)("div", {
                        style: L ? en.spotlightWrapper : en.normalWrapper,
                        onClick: L ? er : void 0,
                        children: [el, es]
                    })
                })
            }
        },
        511101: (e, t, a) => {
            a.d(t, {
                m: () => n
            });
            let n = "notion-modal-underlay"
        },
        638501: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                plusSmallIcon: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.74 2.74 10.52 10.52",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8 2.74a.66.66 0 0 1 .66.66v3.94h3.94a.66.66 0 0 1 0 1.32H8.66v3.94a.66.66 0 0 1-1.32 0V8.66H3.4a.66.66 0 0 1 0-1.32h3.94V3.4A.66.66 0 0 1 8 2.74"
                    })
                },
                i = (0, a(104509).wt)("plusSmall", n, "small")
        },
        659447: (e, t, a) => {
            a.d(t, {
                m: () => l
            });
            var n = () => a(546605);
            class i extends n().Store {
                getInitialState() {
                    return {
                        isOpen: !1,
                        contentAspectRatio: void 0,
                        videoRef: void 0
                    }
                }
            }
            let l = new i;
            (0, a(202146).exposeDebugValue)("GlobalVideoSpotlightStore", l)
        },
        781036: (e, t, a) => {
            a.d(t, {
                B: () => l
            });
            var n = a(296540),
                i = a(474848);

            function l({
                backgroundStyle: e,
                onDismiss: t
            }) {
                (0, n.useLayoutEffect)(() => {
                    if ((null == e ? void 0 : e.background) !== "transparent") return requestAnimationFrame(() => {
                        (0, a(960831).j)(!0)
                    }), a(164177).j.setState({
                        open: !0
                    }), () => {
                        (0, a(960831).j)(!1), a(164177).j.setState({
                            open: !1
                        })
                    }
                }, [null == e ? void 0 : e.background]);
                let o = (0, a(960253).I)(() => ({
                    underlay: function(e) {
                        let {
                            backgroundStyle: t
                        } = e;
                        return {
                            position: "absolute",
                            top: 0,
                            insetInlineStart: 0,
                            bottom: 0,
                            insetInlineEnd: 0,
                            background: a(632079).Tj.modalUnderlayBackground,
                            ...t
                        }
                    }({
                        backgroundStyle: e
                    })
                }), [e]);
                return (0, i.jsx)("div", {
                    role: "presentation",
                    style: o.underlay,
                    onClick: e => {
                        t && t(e)
                    },
                    className: a(511101).m
                })
            }
        },
        789737: (e, t, a) => {
            a.d(t, {
                r: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.75 3.75 12.5 12.5",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.75 3.75a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1H7.5a1 1 0 0 0 1-1V4.75a1 1 0 0 0-1-1zm7.75 0a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h2.75a1 1 0 0 0 1-1V4.75a1 1 0 0 0-1-1z"
                    })
                },
                i = (0, a(104509).wt)("mediaPauseFill", n, "fill")
        },
        940723: (e, t, a) => {
            a.d(t, {
                b: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.75 3.52 11.53 12.95",
                    svg: (0, a(474848).jsx)("path", {
                        d: "m7.006 16.267 8.523-4.971a1.5 1.5 0 0 0 0-2.592L7.006 3.733A1.5 1.5 0 0 0 4.75 5.028v9.944a1.5 1.5 0 0 0 2.256 1.295"
                    })
                },
                i = (0, a(104509).wt)("mediaPlayFill", n, "fill")
        },
        960831: (e, t, a) => {
            a.d(t, {
                j: () => n
            });

            function n(e) {
                var t;
                return null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (t = a(775657).electronApi.setOverlay) ? void 0 : t.call(a(775657).electronApi, e)
            }
        },
        970709: (e, t, a) => {
            a.d(t, {
                v: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "4.37 7.37 7.25 1.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M5 7.375a.625.625 0 1 0 0 1.25h6a.625.625 0 1 0 0-1.25z"
                    })
                },
                i = (0, a(104509).wt)("dashSmall", n, "small")
        }
    }
]);