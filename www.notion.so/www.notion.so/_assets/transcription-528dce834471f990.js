"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [3101, 16922, 32626, 56809], {
        1249: (e, t, i) => {
            i.d(t, {
                g: () => a
            });

            function a(e) {
                return "drag" in e && e.drag ? {
                    WebkitAppRegion: "drag"
                } : "noDrag" in e && e.noDrag ? {
                    WebkitAppRegion: "no-drag"
                } : {}
            }
        },
        20479: (e, t, i) => {
            i.d(t, {
                C: () => n
            }), i(296540);
            var a = i(474848);
            let n = (0, i(839697).p)("arrowInCircleUpAnimated", {
                viewBox: "2.37 2.37 15.25 15.26",
                svg: e => {
                    let t = (0, i(4962).lZ)(),
                        n = `all 0.548s linear(
    						0, 0.006, 0.022 2%, 0.091 4.3%, 0.52 14%, 0.624, 0.71 19.3%, 0.784,
    						0.846 24.9%, 0.895 27.9%, 0.934, 0.961 34.4%, 0.98 37.9%, 0.993 42%,
    						1.001 46.8%, 1.004 55.3%, 1
  						)`;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("defs", {
                            children: (0, a.jsx)("clipPath", {
                                id: t,
                                children: (0, a.jsx)("rect", {
                                    x: "2.5",
                                    y: "2.5",
                                    width: "15",
                                    height: "15",
                                    rx: "7.5"
                                })
                            })
                        }), (0, a.jsx)("rect", {
                            x: "2.5",
                            y: "2.5",
                            width: "15",
                            height: "15",
                            rx: "7.5"
                        }), (0, a.jsx)("g", {
                            clipPath: `url(#${t})`,
                            children: (0, a.jsx)("path", {
                                style: {
                                    transformOrigin: "bottom center",
                                    transition: n,
                                    ..."animate" === e ? {
                                        translate: "0 -14px",
                                        scale: "70%",
                                        opacity: 0
                                    } : {}
                                },
                                d: "M13.0419 9.55439C12.7978 9.79847 12.4021 9.79847 12.158 9.55439L10.625 8.02136L10.625 13.4874C10.625 13.8326 10.3452 14.1124 10 14.1124C9.65482 14.1124 9.375 13.8326 9.375 13.4874L9.375 8.02131L7.84192 9.5544C7.59784 9.79847 7.20211 9.79847 6.95804 9.5544C6.71396 9.31032 6.71396 8.91459 6.95803 8.67051L9.55803 6.07051C9.67524 5.9533 9.83421 5.88745 9.99997 5.88745C10.1657 5.88745 10.3247 5.9533 10.4419 6.07051L13.0419 8.67051C13.286 8.91459 13.286 9.31032 13.0419 9.55439Z",
                                fill: "white"
                            })
                        }), (0, a.jsx)("g", {
                            clipPath: `url(#${t})`,
                            children: (0, a.jsx)("path", {
                                style: {
                                    translate: "0 10px",
                                    scale: "70%",
                                    opacity: 0,
                                    transformOrigin: "top center",
                                    transition: n,
                                    ..."animate" === e ? {
                                        translate: "0 0",
                                        scale: "100%",
                                        opacity: 1
                                    } : {}
                                },
                                d: "M13.0419 9.55439C12.7978 9.79847 12.4021 9.79847 12.158 9.55439L10.625 8.02136L10.625 13.4874C10.625 13.8326 10.3452 14.1124 10 14.1124C9.65482 14.1124 9.375 13.8326 9.375 13.4874L9.375 8.02131L7.84192 9.5544C7.59784 9.79847 7.20211 9.79847 6.95804 9.5544C6.71396 9.31032 6.71396 8.91459 6.95803 8.67051L9.55803 6.07051C9.67524 5.9533 9.83421 5.88745 9.99997 5.88745C10.1657 5.88745 10.3247 5.9533 10.4419 6.07051L13.0419 8.67051C13.286 8.91459 13.286 9.31032 13.0419 9.55439Z",
                                fill: "white"
                            })
                        })]
                    })
                }
            })
        },
        48419: (e, t, i) => {
            i.r(t), i.d(t, {
                TranscriptionBlockSharingButtonPopup: () => r
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(430670), i(581454), i(737550);
            var a = i(296540),
                n = i(474848);

            function r(e) {
                let {
                    users: t,
                    children: r,
                    rolesMap: o,
                    externalAttendees: s
                } = e, d = (0, a.useMemo)(() => new(i(510969)).A, []), c = (0, i(682985).K8)(() => 0 === s.length ? [] : "on" === i(218744).default.getEligibleGroup({
                    experimentId: "share_meeting_notes_with_external_invitees",
                    defaultGroup: "control"
                }) ? s : [], [s]);
                return (0, n.jsx)(i(656252).A, {
                    buttonPopupStore: d,
                    popupType: i(656252).z.Popup,
                    originGap: 4,
                    alignmentToOrigin: "start",
                    onClick: e => {
                        e.stopPropagation(), e.preventDefault()
                    },
                    content: () => (0, n.jsx)(l, {
                        users: t,
                        rolesMap: o,
                        buttonPopupStore: d,
                        externalAttendees: c
                    }),
                    children: r
                })
            }
            let o = {
                you: {
                    color: i(632079).Tj.gray.text.accentPrimary
                },
                style0: {
                    marginInlineEnd: 8
                }
            };

            function s({
                menuItemProps: e,
                userStore: t,
                rolesMap: a,
                currentUserId: r,
                hasInaccessiblePermissions: l,
                selectedUserStores: d,
                onClickUser: u
            }) {
                let g = (0, i(109939).tz)(),
                    p = (0, i(682985).K8)(() => ({
                        displayName: t.getDisplayName(g),
                        email: t.getEmail()
                    }), [t, g]),
                    f = a[t.id],
                    m = t.id === r;
                return (0, n.jsx)(i(95582).A, { ...e,
                    focused: !1,
                    left: (0, n.jsx)(i(321753).A, {
                        userStore: t,
                        size: 24,
                        avatarShouldShowShadow: !0
                    }),
                    disabled: m,
                    title: m ? (0, n.jsx)(i(109939).sA, {
                        id: "transcriptionBlock.calendarAttendeeList.shareMenu.you",
                        defaultMessage: "{name} <gray>(You)</gray>",
                        values: {
                            name: p.displayName,
                            gray: e => (0, n.jsx)("span", {
                                style: o.you,
                                children: e
                            })
                        }
                    }) : p.displayName,
                    caption: p.email,
                    body: (0, n.jsx)(c, {
                        role: f,
                        hasInaccessiblePermissions: l
                    }),
                    right: m ? null : (0, n.jsx)(i(349050).S, {
                        size: 16,
                        checked: d.includes(t),
                        style: o.style0,
                        onClick: () => {
                            u(t)
                        }
                    }),
                    onClick: () => {
                        u(t)
                    }
                })
            }

            function l(e) {
                let {
                    users: t,
                    rolesMap: r,
                    buttonPopupStore: l,
                    externalAttendees: u
                } = e, {
                    store: g
                } = (0, i(308240).s)(), p = (0, i(533992).v3)(), f = (0, i(109939).tz)(), [m, h] = (0, a.useState)("editor"), [b, v] = (0, a.useState)(t.filter(e => e.id !== p.currentUser.id && (r[e.id] ? ? "none") === "none")), [y, x] = (0, a.useState)([]), S = (0, i(682985).K8)(() => !(0, i(865768).Aj)({
                    store: g
                }), [g]), M = (0, i(682985).K8)(() => {
                    let e = g.getNavigableBlockStore();
                    return !!(null != e && e.isDefined()) && e.canEditMembership()
                }, [g]), k = (0, i(682985).K8)(() => t.filter(e => e.isDefined()), [t]), w = (0, a.useCallback)(e => {
                    b.includes(e) ? v(b.filter(t => t.id !== e.id)) : v([...b, e])
                }, [b]), C = (0, a.useCallback)(e => {
                    y.some(t => t.email === e.email) ? x(y.filter(t => t.email !== e.email)) : x([...y, e])
                }, [y]), P = (0, a.useCallback)(e => {
                    (0, i(642157).PW)(e) && h(e)
                }, [h]), I = (0, a.useCallback)(async () => {
                    let e = g.getNavigableBlockStore();
                    if (!e) return;
                    let t = b.map(e => {
                            let t = e.getModel();
                            if (t) return {
                                type: "existingUser",
                                value: t
                            }
                        }).filter(i(722371).O9),
                        a = y.map(e => ({
                            type: "newUser",
                            value: {
                                email: e.email
                            },
                            source: "email"
                        })),
                        n = new Set(y.map(e => e.email)),
                        r = await (0, i(179349).e)({
                            environment: p,
                            store: e,
                            inviteTargets: [...t, ...a],
                            inviteRole: m,
                            isOnboarding: !1,
                            invite: {
                                inviteOrigin: "transcription_block"
                            }
                        });
                    if (r.success) {
                        let e = new Map(Object.entries(r.invitedUsers).filter(([e]) => n.has(e)));
                        (0, i(3553).b1)({
                            environment: p,
                            store: g,
                            emailToUserId: e
                        })
                    }
                    v([]), x([]), l.setState({
                        open: !1
                    }), (0, i(3553).FP)({
                        environment: p,
                        store: g
                    })
                }, [p, g, b, y, m, l]), j = (0, a.useCallback)(async () => {
                    let e = [...k.map(e => e.getEmail()).filter(i(722371).O9), ...u.map(e => e.email)].join(", ");
                    (await (0, i(969899).jd)())({
                        environment: p,
                        stringValue: e,
                        copiedMessage: d.copiedAttendeeEmails
                    })
                }, [k, u, p]), A = (0, a.useCallback)(() => {
                    j()
                }, [j]), T = (0, i(682985).K8)(() => (0, i(974410).f)(g), [g]), B = (0, i(682985).K8)(() => T ? u.flatMap(e => {
                    let {
                        userId: t
                    } = e;
                    return void 0 === t ? [] : [{
                        email: e.email,
                        userStore: i(807825).L.createChildStore(T, {
                            table: i(832375).oo9,
                            id: t
                        })
                    }]
                }) : [], [u, T]), _ = (0, a.useMemo)(() => B.map(({
                    userStore: e
                }) => e.id), [B]), D = (0, i(201910).G)(_), R = (0, a.useMemo)(() => Object.fromEntries(B.map(({
                    email: e,
                    userStore: t
                }) => [e, D[t.id]])), [B, D]), N = (0, n.jsx)(i(844565).A, {
                    topBorder: !0,
                    extraPadding: !0,
                    children: (0, n.jsx)(i(636518).Ay, {
                        left: (0, n.jsx)(i(761163).Ay, {
                            table: "block",
                            type: "user_permission",
                            availableRoleItems: i(357194).X5,
                            role: m,
                            onChange: P,
                            upgradeButtonName: "user_permission_item",
                            spaceStore: T
                        }),
                        right: (0, n.jsx)(i(912946).A, {
                            colorPalette: "blue",
                            onClick: I,
                            disabled: 0 === b.length && 0 === y.length || !M,
                            children: (0, n.jsx)(i(109939).sA, {
                                id: "transcriptionBlock.calendarAttendeesList.shareButton",
                                defaultMessage: "Share page"
                            })
                        })
                    })
                }), V = (0, a.useCallback)(() => [{
                    key: "users",
                    render: e => (0, n.jsx)(i(844565).A, { ...e,
                        title: (0, n.jsx)(i(109939).sA, {
                            id: "transcriptionBlock.attendeeList.eventParticipants.title",
                            defaultMessage: "Event participants"
                        }),
                        right: (0, n.jsx)(i(51831).m, {
                            allowHover: !1,
                            content: () => (0, n.jsx)(i(109939).sA, { ...d.copyAttendeeEmails
                            }),
                            children: e => (0, n.jsx)("div", { ...e,
                                children: (0, n.jsx)(i(374533).A, {
                                    ariaLabel: f.formatMessage(d.copyAttendeeEmails),
                                    icon: i(703696).V,
                                    size: "xs",
                                    onClick: A
                                })
                            })
                        })
                    }),
                    items: [...k.map(e => ({
                        key: e.id,
                        action: () => {},
                        render: t => (0, n.jsx)(s, {
                            menuItemProps: t,
                            userStore: e,
                            rolesMap: r,
                            currentUserId: p.currentUser.id,
                            hasInaccessiblePermissions: S,
                            selectedUserStores: b,
                            onClickUser: w
                        })
                    })), ...u.map(e => ({
                        key: e.email,
                        action: () => {},
                        render: t => (0, n.jsx)(i(95582).A, { ...t,
                            focused: !1,
                            left: (0, n.jsx)(i(321753).A, {
                                avatar: {
                                    email: e.email
                                },
                                size: 24
                            }),
                            title: e.displayName || e.email,
                            badge: (0, n.jsx)(i(51831).m, {
                                content: () => (0, n.jsx)(i(109939).sA, { ...d.externalBadgeTooltip
                                }),
                                children: e => (0, n.jsx)("div", { ...e,
                                    children: (0, n.jsx)(i(746434).E, {
                                        color: "yellow",
                                        content: (0, n.jsx)(i(109939).sA, { ...d.externalBadge
                                        })
                                    })
                                })
                            }),
                            caption: e.displayName ? e.email : void 0,
                            body: (0, n.jsx)(c, {
                                role: R[e.email] ? ? "none",
                                hasInaccessiblePermissions: S
                            }),
                            right: (0, n.jsx)(i(349050).S, {
                                size: 16,
                                checked: y.some(t => t.email === e.email),
                                style: o.style0,
                                onClick: () => {
                                    C(e)
                                }
                            }),
                            onClick: () => {
                                C(e)
                            }
                        })
                    }))]
                }], [k, u, f, r, b, y, R, p.currentUser.id, w, C, A, S]);
                return (0, n.jsx)(i(747369).A, {
                    menuType: i(649476).gu.Popup,
                    maxHeight: "min(448px, 40vh)",
                    footer: N,
                    children: (0, n.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        sections: V(),
                        initialFocus: void 0,
                        resetFocusOnMouseOut: !0
                    })
                })
            }
            let d = (0, i(109939).YK)({
                mayHaveAccess: {
                    id: "transcriptionBlock.sharingButtonPopup.mayHaveAccess",
                    defaultMessage: "May have access"
                },
                copyAttendeeEmails: {
                    id: "transcriptionBlock.sharingButtonPopup.copyAttendeeEmails",
                    defaultMessage: "Copy attendee emails"
                },
                copiedAttendeeEmails: {
                    id: "transcriptionBlock.sharingButtonPopup.copiedAttendeeEmails",
                    defaultMessage: "Copied emails to clipboard"
                },
                externalBadge: {
                    id: "transcriptionBlock.sharingButtonPopup.externalBadge",
                    defaultMessage: "External"
                },
                externalBadgeTooltip: {
                    id: "transcriptionBlock.sharingButtonPopup.externalBadgeTooltip",
                    defaultMessage: "This person isn’t a member of your workspace"
                }
            });

            function c(e) {
                let {
                    role: t,
                    hasInaccessiblePermissions: a
                } = e, r = (0, i(109939).tz)(), o = t ? (0, i(862085).qZ)(t) : a ? r.formatMessage(d.mayHaveAccess) : (0, i(862085).qZ)("none"), s = (0, i(960253).I)(() => ({
                    row: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: "none" === t ? i(632079).Tj.red.text.secondary : i(632079).Tj.gray.text.secondary
                    }
                }), [t]);
                return (0, n.jsxs)("div", {
                    style: s.row,
                    children: ["none" === t ? (0, n.jsx)(i(16275).I, {
                        icon: i(319681).e,
                        size: "xxs"
                    }) : (0, n.jsx)(i(16275).I, {
                        icon: i(152208).eyeIcon,
                        size: "xxs"
                    }), (0, n.jsx)("div", {
                        children: o
                    })]
                })
            }
        },
        57631: (e, t, i) => {
            i.r(t), i.d(t, {
                StopDictationButtonMobile: () => r,
                StopDictationMobileBar: () => d
            });
            var a = i(296540),
                n = i(474848);

            function r() {
                let e, t, r, o, s, l, c, u = (0, i(533992).v3)(),
                    {
                        isMobileNative: g,
                        isPhone: p
                    } = (0, i(533992).Y0)(),
                    f = (0, i(682985).K8)(() => {
                        let e = i(831779).A.isOnboarding(),
                            t = i(83470).A.state.open;
                        return e || t
                    }, []),
                    m = (0, i(682985).K8)(() => {
                        var e;
                        return !f && i(585823).Ay.getState().enabled && !i(585823).Ay.getState().loading && !(null != (e = i(585823).Ay.getState().rootBlock) && e.isTranscriptionBlock())
                    }, [f]),
                    h = (0, a.useCallback)(() => (0, i(336328).stopDictation)({
                        environment: u,
                        from: "mobile_bar_button"
                    }), [u]);
                return (0, a.useEffect)(() => {
                    f && h()
                }, [f, h]), e = (0, i(682985).O$)(i(234269).A), (0, a.useEffect)(() => {
                    e && (h(), i(234269).A.reset())
                }, [e, h]), t = (0, i(533992).v3)(), r = (0, i(682985).K8)(() => {
                    let e = i(585823).kj.state;
                    if (e) return !e.isDictatableBlock() || e.pathIsDead()
                }, []), o = (0, i(682985).K8)(() => !i(585823).Y$.state && i(585823).gZ.state, []), s = (0, i(682985).O$)(i(585823).ei), l = (0, a.useRef)(!0), c = (0, i(682985).K8)(() => (0, i(500880).Xz)(t.TabbedRouterStore.state), [t]), (0, a.useEffect)(() => {
                    (0, i(722371).O9)(r) && r && h()
                }, [r, h]), (0, a.useEffect)(() => {
                    if (o && (0, i(722371).O9)(s) && !s.isTranscriptionBlock()) {
                        let e = setTimeout(() => {
                            h()
                        }, 250);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }, [o, h, s]), (0, a.useEffect)(() => {
                    t.device.isMobileNative && c && (l.current ? l.current = !1 : h())
                }, [t, c, l, h]), m && g && p ? (0, n.jsx)(d, {
                    handleClick: h
                }) : null
            }
            let o = {
                    display: "flex",
                    justifyContent: "space-between",
                    verticalAlign: "center",
                    cursor: "pointer",
                    gridAutoFlow: "column",
                    placeItems: "center",
                    gap: 10,
                    alignItems: "center"
                },
                s = {
                    zIndex: 1e7
                },
                l = {
                    maxWidth: 480,
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                    verticalAlign: "middle"
                };

            function d(e) {
                let {
                    handleClick: t
                } = e, r = (0, i(533992).v3)(), d = (0, i(109939).tz)(), c = (0, i(336995).A)(!0);
                ! function() {
                    let {
                        mobileNative: e
                    } = (0, i(533992).v3)();
                    (0, a.useEffect)(() => (null == e || e.requestKeepScreenOn(!0), () => {
                        null == e || e.requestKeepScreenOn(!1)
                    }), [e])
                }();
                let u = (0, i(905189).o)(),
                    [g, p] = (0, i(682985).K8)(() => [r.WindowSizeStore.getSafePaddingLeftPx(16), r.WindowSizeStore.getSafePaddingRightPx(16)], [r.WindowSizeStore]),
                    f = (0, i(960253).I)(() => ({
                        container: {
                            position: "absolute",
                            width: "100%",
                            bottom: u,
                            minHeight: 50,
                            paddingTop: "6px",
                            paddingBottom: "6px",
                            paddingInlineEnd: p,
                            paddingInlineStart: g,
                            border: `1px solid ${i(632079).Tj.border.secondary}`,
                            background: i(632079).Tj.background.primary
                        }
                    }), [u, g, p]),
                    m = (0, i(682985).O$)(i(585823).Di);
                return (0, n.jsx)("div", {
                    style: { ...f.container,
                        ...s
                    },
                    ...c,
                    children: (0, n.jsxs)("div", {
                        className: "notion-dictation-button",
                        style: o,
                        children: [(0, n.jsx)("div", {
                            style: l,
                            children: m ? (0, n.jsx)(i(650354).t, {
                                fillWidth: !0,
                                rootBlockId: m
                            }) : void 0
                        }), (0, n.jsx)(i(374533).A, {
                            variant: "tint",
                            colorPalette: "red",
                            shape: "pill",
                            size: "xl",
                            icon: i(386137).P,
                            onClick: t,
                            ariaLabel: d.formatMessage({
                                id: "stopDictationButtonMobile.ariaLabel",
                                defaultMessage: "Stop dictation"
                            })
                        })]
                    })
                })
            }
        },
        58931: (e, t, i) => {
            i.d(t, {
                HR: () => n,
                _y: () => r
            });
            let a = (0, i(109939).YK)({
                discardCommentConfirmationPrompt: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.prompt",
                    defaultMessage: "Do you want to discard the comment?"
                },
                discardCommentButtonLabel: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.discardButton.label",
                    defaultMessage: "Discard"
                },
                draftCommentConfirmationPromptTitle: {
                    id: "newDiscussionMenu.draftCommentConfirmationDialogTitle.prompt",
                    defaultMessage: "Finish your draft comment?"
                },
                draftCommentConfirmationStartingNewDescription: {
                    id: "newDiscussionMenu.draftCommentConfirmationStartingNewDescription.prompt",
                    defaultMessage: "You have a draft comment that will be lost if you start a new one"
                },
                draftCommentConfirmationNavigateAwayPromptDescription: {
                    id: "newDiscussionMenu.draftCommentConfirmationNavigateAwayPromptDescription.prompt",
                    defaultMessage: "You have a draft comment that will be lost if you leave the page"
                },
                returnToPageButtonLabel: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.returnToPage.label",
                    defaultMessage: "Return to draft"
                }
            });

            function n(e) {
                let {
                    discussionInputStore: t,
                    environment: n,
                    discussionHelpers: o,
                    reason: s
                } = e;
                i(332190).A.isComposingNewDiscussion() ? r({
                    environment: n,
                    reason: s ? ? "navigating_away"
                }) : o.hasCommentChanged(t) ? (i(65255).yO(n), i(647095).ui({
                    message: i(962299).A.formatMessage(a.discardCommentConfirmationPrompt),
                    showCancel: !0,
                    handleCancel: () => i(65255).Ie(n),
                    keepFocus: !0,
                    items: [{
                        label: i(962299).A.formatMessage(a.discardCommentButtonLabel),
                        color: "red",
                        onAccept: () => {
                            i(65255).QP(n), (0, i(585356).c)()
                        }
                    }]
                })) : (0, i(585356).c)()
            }

            function r(e) {
                let {
                    environment: t
                } = e;
                if (!i(332190).A.isDraftCommentOnValidSelection()) return;
                let n = i(332190).A.getDiscussionInputStore();
                i(65255).yO(t), i(647095).ui({
                    message: i(962299).A.formatMessage(a.draftCommentConfirmationPromptTitle),
                    description: (() => {
                        switch (e.reason) {
                            case "starting_new":
                                return i(962299).A.formatMessage(a.draftCommentConfirmationStartingNewDescription);
                            case "navigating_away":
                                return i(962299).A.formatMessage(a.draftCommentConfirmationNavigateAwayPromptDescription);
                            default:
                                (0, i(722371).HB)(e.reason)
                        }
                    })(),
                    keepFocus: !0,
                    innerStyle: {
                        textAlign: "center"
                    },
                    showCancel: !1,
                    shouldRenderDraftCommentIcon: !0,
                    items: [{
                        label: i(962299).A.formatMessage(a.returnToPageButtonLabel),
                        buttonType: "solid",
                        color: "blue",
                        onAccept: () => {
                            (0, i(758275).x)({
                                currentBlockStore: i(728372).AppStoreMainEditorCurrentBlockStore.state,
                                discussionInputStore: n,
                                environment: t
                            }), i(65255).Ie(t)
                        }
                    }, {
                        label: i(962299).A.formatMessage(a.discardCommentButtonLabel),
                        color: "red",
                        buttonType: "outline",
                        onAccept: () => {
                            i(65255).QP(t), (0, i(585356).c)()
                        }
                    }]
                })
            }
        },
        72762: (e, t, i) => {
            i.d(t, {
                o: () => a
            });

            function a(e) {
                let {
                    collectionSettingsStore: t
                } = e;
                t.setState({ ...t.state,
                    open: !1,
                    hideSettingsPopup: void 0,
                    hideSettingsHeader: void 0,
                    stack: [],
                    ref: void 0,
                    hideDuplicatePropertyOption: void 0,
                    closeOnEscape: void 0
                }), i(639675).Ay.setState({ ...i(639675).Ay.state,
                    flowId: void 0
                })
            }
        },
        93042: (e, t, i) => {
            i.r(t), i.d(t, {
                checkmarkCircleFillIcon: () => n,
                iconDefinition: () => a
            }), i(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0m10.5-2.018a.625.625 0 1 0-1.071-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                    })
                },
                n = (0, i(104509).wt)("checkmarkCircleFill", a, "fill")
        },
        96583: (e, t, i) => {
            function a(e) {
                return "Arabic" === e || "Hebrew" === e
            }
            i.d(t, {
                Ik: () => o,
                NJ: () => l,
                _w: () => s,
                yW: () => a
            });
            let n = {
                    English: "en-US",
                    Simplified_Chinese: "zh-CN",
                    Traditional_Chinese: "zh-TW",
                    Spanish: "es-ES",
                    French: "fr-FR",
                    German: "de-DE",
                    Japanese: "ja-JP",
                    Korean: "ko-KR",
                    Portuguese: "pt-BR",
                    Thai: "th-TH",
                    Vietnamese: "vi-VN",
                    Indonesian: "id-ID",
                    Danish: "da-DK",
                    Finnish: "fi-FI",
                    Norwegian: "nb-NO",
                    Dutch: "nl-NL",
                    Swedish: "sv-SE",
                    Arabic: "ar-SA",
                    Hebrew: "he-IL"
                },
                r = {
                    Russian: "Русский",
                    Italian: "Italiano",
                    Polish: "Polski"
                };

            function o(e) {
                let t = n[e];
                return t ? i(601587).vC[t] : r[e] ? ? e
            }

            function s(e, t) {
                let a = n[e];
                return a ? t.formatMessage(i(601587).tr[a]) : t.formatMessage(l[e])
            }
            let l = (0, i(109939).YK)({
                Auto: {
                    id: "transcriptionBlockSettings.language.auto.title",
                    defaultMessage: "Auto detect"
                },
                English: {
                    id: "transcriptionBlockSettings.language.english.title",
                    defaultMessage: "English"
                },
                Simplified_Chinese: {
                    id: "transcriptionBlockSettings.language.simplified_chinese.title",
                    defaultMessage: "Chinese (Simplified)"
                },
                Traditional_Chinese: {
                    id: "transcriptionBlockSettings.language.traditional_chinese.title",
                    defaultMessage: "Chinese (Traditional)"
                },
                Spanish: {
                    id: "transcriptionBlockSettings.language.spanish.title",
                    defaultMessage: "Spanish"
                },
                French: {
                    id: "transcriptionBlockSettings.language.french.title",
                    defaultMessage: "French"
                },
                German: {
                    id: "transcriptionBlockSettings.language.german.title",
                    defaultMessage: "German"
                },
                Japanese: {
                    id: "transcriptionBlockSettings.language.japanese.title",
                    defaultMessage: "Japanese"
                },
                Korean: {
                    id: "transcriptionBlockSettings.language.korean.title",
                    defaultMessage: "Korean"
                },
                Portuguese: {
                    id: "transcriptionBlockSettings.language.portuguese.title",
                    defaultMessage: "Portuguese"
                },
                Russian: {
                    id: "transcriptionBlockSettings.language.russian.title",
                    defaultMessage: "Russian"
                },
                Thai: {
                    id: "transcriptionBlockSettings.language.thai.title",
                    defaultMessage: "Thai"
                },
                Vietnamese: {
                    id: "transcriptionBlockSettings.language.vietnamese.title",
                    defaultMessage: "Vietnamese"
                },
                Indonesian: {
                    id: "transcriptionBlockSettings.language.indonesian.title",
                    defaultMessage: "Indonesian"
                },
                Danish: {
                    id: "transcriptionBlockSettings.language.danish.title",
                    defaultMessage: "Danish"
                },
                Finnish: {
                    id: "transcriptionBlockSettings.language.finnish.title",
                    defaultMessage: "Finnish"
                },
                Norwegian: {
                    id: "transcriptionBlockSettings.language.norwegian.title",
                    defaultMessage: "Norwegian"
                },
                Dutch: {
                    id: "transcriptionBlockSettings.language.dutch.title",
                    defaultMessage: "Dutch"
                },
                Swedish: {
                    id: "transcriptionBlockSettings.language.swedish.title",
                    defaultMessage: "Swedish"
                },
                Italian: {
                    id: "transcriptionBlockSettings.language.italian.title",
                    defaultMessage: "Italian"
                },
                Arabic: {
                    id: "transcriptionBlockSettings.language.arabic.title",
                    defaultMessage: "Arabic"
                },
                Hebrew: {
                    id: "transcriptionBlockSettings.language.hebrew.title",
                    defaultMessage: "Hebrew"
                },
                Polish: {
                    id: "transcriptionBlockSettings.language.polish.title",
                    defaultMessage: "Polish"
                }
            })
        },
        104361: (e, t, i) => {
            i.d(t, {
                d: () => n
            });
            let a = {
                orange: "orange",
                purple: "purple",
                pink: "pink"
            };

            function n({
                disableExposureLogging: e
            }) {
                return a[(0, i(604306).r)("nus_trial_button_color", {
                    disableExposureLogging: e
                })]
            }
        },
        133121: (e, t, i) => {
            i.d(t, {
                u: () => a
            });
            let a = "return-to-writer-button"
        },
        152208: (e, t, i) => {
            i.r(t), i.d(t, {
                eyeIcon: () => r,
                iconDefinition: () => n
            }), i(296540);
            var a = i(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.96 4.19 18.07 11.62",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M10.17 6.694a3.307 3.307 0 0 1 3.135 3.303l-.005.17a3.305 3.305 0 0 1-3.3 3.137l-.17-.004a3.307 3.307 0 0 1-3.132-3.133l-.004-.17A3.307 3.307 0 0 1 10 6.69zm-.17 2.2a1.104 1.104 0 0 0 0 2.207 1.103 1.103 0 0 0 0-2.207"
                        }), (0, a.jsx)("path", {
                            d: "M10 4.194c3.878 0 7.26 2.075 8.862 5.127l.073.163c.126.333.126.7 0 1.033l-.073.163c-1.602 3.052-4.984 5.126-8.862 5.126-3.757 0-7.049-1.946-8.707-4.843l-.156-.283a1.46 1.46 0 0 1 0-1.359l.156-.283C2.95 6.141 6.243 4.194 10 4.194m0 1.251c-3.33 0-6.196 1.724-7.622 4.214l-.134.243a.21.21 0 0 0 0 .197l.134.243c1.426 2.49 4.292 4.214 7.622 4.214 3.437 0 6.38-1.837 7.756-4.457l.018-.048a.2.2 0 0 0 0-.1l-.018-.049C16.38 7.282 13.437 5.445 10 5.445"
                        })]
                    })
                },
                r = (0, i(104509).wt)("eye", n, "default")
        },
        156139: (e, t, i) => {
            i.d(t, {
                e: () => d
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            var a = i(296540),
                n = i(474848);
            let r = {
                loading: {
                    icon: () => ({
                        type: "animated",
                        iconFn: i(20479).C,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    }),
                    highlightText: {
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: () => (0, n.jsx)(i(517334).k, {}),
                        text: () => (0, n.jsx)(i(517334).k, {}),
                        icon: () => (0, n.jsx)(i(517334).k, {})
                    }
                },
                eligible_to_purchase: {
                    icon: ({
                        upsell: e
                    }) => o(e) ? {
                        type: "static",
                        iconFn: i(930887).q,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    } : {
                        type: "animated",
                        iconFn: i(20479).C,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    },
                    highlightText: {
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e,
                            upsell: t
                        }) => o(t) ? e.formatMessage({
                            id: "upgrade.addCreditsButton",
                            defaultMessage: "Add credits"
                        }) : e.formatMessage({
                            id: "upgrade.outlineButton",
                            defaultMessage: "Upgrade now"
                        }),
                        text: ({
                            intl: e,
                            upsell: t,
                            featureName: a,
                            renderTextHighlight: n
                        }) => {
                            let r = (0, i(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: a
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.addCreditsText",
                                defaultMessage: "<highlight>Add credits</highlight>"
                            }, {
                                highlight: (...e) => n ? n(e) : e
                            }) : e.formatMessage({
                                id: "upgrade.text",
                                defaultMessage: "<highlight>Upgrade</highlight> {hasProductDisplayName, select, true {to {productName}} other {for access}}"
                            }, {
                                highlight: (...e) => n ? n(e) : e,
                                hasProductDisplayName: !!r,
                                productName: r
                            })
                        },
                        icon: ({
                            intl: e,
                            upsell: t,
                            featureName: a
                        }) => {
                            let n = (0, i(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: a
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.addCreditsIconTooltip",
                                defaultMessage: "Add credits to restore AI access"
                            }) : e.formatMessage({
                                id: "upgrade.iconTooltip",
                                defaultMessage: "Upgrade {hasProductDisplayName, select, true {to {productName}} other {}} for access"
                            }, {
                                hasProductDisplayName: !!n,
                                productName: n
                            })
                        }
                    }
                },
                eligible_for_trial: {
                    icon: () => ({
                        type: "animated",
                        iconFn: i(824843).P,
                        colorPalette: "orange",
                        colorVariant: "accentPrimary"
                    }),
                    highlightText: {
                        colorPalette: "orange",
                        colorVariant: "secondary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.trial.button",
                            defaultMessage: "Try for free"
                        }),
                        text: ({
                            intl: e,
                            renderTextHighlight: t
                        }) => e.formatMessage({
                            id: "upgrade.trial.text",
                            defaultMessage: "<highlight>Try</highlight> for free"
                        }, {
                            highlight: (...e) => t ? t(e) : e
                        }),
                        icon: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.trial.iconTooltip",
                            defaultMessage: "Try for free"
                        })
                    }
                },
                sales_eligible: {
                    icon: () => ({
                        type: "static",
                        iconFn: i(714719).paperPlaneFillIcon,
                        colorVariant: "secondary"
                    }),
                    highlightText: {
                        colorVariant: "secondary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.sales.button",
                            defaultMessage: "Contact sales"
                        }),
                        text: ({
                            intl: e,
                            renderTextHighlight: t
                        }) => e.formatMessage({
                            id: "upgrade.sales.text",
                            defaultMessage: "<highlight>Contact sales</highlight> to learn more"
                        }, {
                            highlight: (...e) => t ? t(e) : e
                        }),
                        icon: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.sales.iconTooltip",
                            defaultMessage: "Contact sales to learn more"
                        })
                    }
                },
                sales_assisted: {
                    icon: () => ({
                        type: "static",
                        iconFn: i(714719).paperPlaneFillIcon,
                        colorVariant: "secondary"
                    }),
                    highlightText: {
                        colorVariant: "secondary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.sales.button",
                            defaultMessage: "Contact sales"
                        }),
                        text: ({
                            intl: e,
                            renderTextHighlight: t
                        }) => e.formatMessage({
                            id: "upgrade.sales.text",
                            defaultMessage: "<highlight>Contact sales</highlight> to learn more"
                        }, {
                            highlight: (...e) => t ? t(e) : e
                        }),
                        icon: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.sales.iconTooltip",
                            defaultMessage: "Contact sales to learn more"
                        })
                    }
                },
                eligible_to_request: {
                    icon: ({
                        upsell: e
                    }) => o(e) ? {
                        type: "static",
                        iconFn: i(930887).q,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    } : {
                        type: "animated",
                        iconFn: i(20479).C,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    },
                    highlightText: {
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.request.button",
                            defaultMessage: "Request"
                        }),
                        text: ({
                            intl: e,
                            upsell: t,
                            featureName: a,
                            renderTextHighlight: n
                        }) => {
                            let r = (0, i(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: a
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.requestCredits.text",
                                defaultMessage: "<highlight>Request credits</highlight>"
                            }, {
                                highlight: (...e) => n ? n(e) : e
                            }) : e.formatMessage({
                                id: "upgrade.request.text",
                                defaultMessage: "<highlight>Request</highlight> {hasProductDisplayName, select, true {access to {productName}} other {access}}"
                            }, {
                                highlight: (...e) => n ? n(e) : e,
                                hasProductDisplayName: !!r,
                                productName: r
                            })
                        },
                        icon: ({
                            intl: e,
                            upsell: t,
                            featureName: a
                        }) => {
                            let n = (0, i(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: a
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.addCredits.iconTooltip",
                                defaultMessage: "Request credits to restore AI access"
                            }) : e.formatMessage({
                                id: "upgrade.request.iconTooltip",
                                defaultMessage: "Request {hasProductDisplayName, select, true {access to {productName}} other {access}}"
                            }, {
                                hasProductDisplayName: !!n,
                                productName: n
                            })
                        }
                    }
                },
                not_eligible: {
                    icon: ({
                        upsell: e
                    }) => o(e) ? {
                        type: "static",
                        iconFn: i(930887).q,
                        colorPalette: "gray",
                        colorVariant: "primary"
                    } : {
                        type: "static",
                        iconFn: i(682612).arrowInCircleUpFillIcon,
                        colorPalette: "gray",
                        colorVariant: "primary"
                    },
                    highlightText: {
                        colorPalette: "gray",
                        colorVariant: "primary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e,
                            upsell: t
                        }) => o(t) ? e.formatMessage({
                            id: "upgrade.addCreditsButton",
                            defaultMessage: "Add credits"
                        }) : e.formatMessage({
                            id: "upgrade.outlineButton",
                            defaultMessage: "Upgrade now"
                        }),
                        text: ({
                            intl: e,
                            upsell: t,
                            featureName: a,
                            renderTextHighlight: n
                        }) => {
                            let r = (0, i(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: a
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.not.eligible.credits.text",
                                defaultMessage: "<highlight>Add credits</highlight>"
                            }, {
                                highlight: (...e) => n ? n(e) : e
                            }) : e.formatMessage({
                                id: "upgrade.text",
                                defaultMessage: "<highlight>Upgrade</highlight> {hasProductDisplayName, select, true {to {productName}} other {for access}}"
                            }, {
                                highlight: (...e) => n ? n(e) : e,
                                hasProductDisplayName: !!r,
                                productName: r
                            })
                        },
                        icon: ({
                            intl: e,
                            upsell: t,
                            featureName: a
                        }) => {
                            let n = (0, i(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: a
                            });
                            return e.formatMessage({
                                id: "upgrade.iconTooltip",
                                defaultMessage: "Upgrade {hasProductDisplayName, select, true {to {productName}} other {}} for access"
                            }, {
                                hasProductDisplayName: !!n,
                                productName: n
                            })
                        }
                    },
                    disabledTooltip: ({
                        intl: e,
                        upsell: t
                    }) => o(t) ? e.formatMessage({
                        id: "upgrade.not.eligible.credits.disabledTooltip",
                        defaultMessage: "You're not eligible to purchase credits"
                    }) : e.formatMessage({
                        id: "upgrade.not.eligible.disabledTooltip",
                        defaultMessage: "You're not eligible to upgrade"
                    })
                },
                request_pending: {
                    icon: ({
                        upsell: e
                    }) => o(e) ? {
                        type: "static",
                        iconFn: i(930887).q,
                        colorPalette: "gray",
                        colorVariant: "primary"
                    } : {
                        type: "static",
                        iconFn: i(682612).arrowInCircleUpFillIcon,
                        colorPalette: "gray",
                        colorVariant: "primary"
                    },
                    highlightText: {
                        colorPalette: "gray",
                        colorVariant: "primary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.requestPending.button",
                            defaultMessage: "Pending"
                        }),
                        text: ({
                            intl: e,
                            upsell: t,
                            featureName: a,
                            renderTextHighlight: r
                        }) => {
                            let s = (0, i(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: a
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.requestPending.credits.text",
                                defaultMessage: "<highlight>Credits requested</highlight>"
                            }, {
                                highlight: (...e) => r ? r(e) : e
                            }) : e.formatMessage({
                                id: "upgrade.requestPending.text",
                                defaultMessage: "<highlight>Requested</highlight>{space}{hasProductDisplayName, select, true {access to {productName}} other {access}}{space}is{space}<highlight>pending</highlight>"
                            }, {
                                highlight: (...e) => r ? r(e) : e,
                                space: (0, n.jsx)(n.Fragment, {
                                    children: " "
                                }),
                                hasProductDisplayName: !!s,
                                productName: s
                            })
                        },
                        icon: ({
                            intl: e,
                            upsell: t,
                            featureName: a
                        }) => {
                            let n = (0, i(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: a
                            });
                            return e.formatMessage({
                                id: "upgrade.requestPending.iconTooltip",
                                defaultMessage: "Requested {hasProductDisplayName, select, true {access to {productName}} other {access}} is pending"
                            }, {
                                hasProductDisplayName: !!n,
                                productName: n
                            })
                        }
                    },
                    disabledTooltip: ({
                        intl: e,
                        upsell: t,
                        featureName: a
                    }) => {
                        let n = (0, i(327506).T)({
                            upsell: t,
                            intl: e,
                            featureName: a
                        });
                        return o(t) ? e.formatMessage({
                            id: "upgrade.requestPending.credits.disabledTooltip",
                            defaultMessage: "Request for credits is pending"
                        }) : e.formatMessage({
                            id: "upgrade.requestPending.disabledTooltip",
                            defaultMessage: "Requested {hasProductDisplayName, select, true {access to {productName}} other {access}} is pending"
                        }, {
                            hasProductDisplayName: !!n,
                            productName: n
                        })
                    }
                }
            };

            function o(e) {
                return "product" === e.type && "ai_credit_pack" === e.product
            }

            function s(e, t) {
                return { ...e,
                    icon: i => ({ ...e.icon(i),
                        colorPalette: t
                    }),
                    highlightText: { ...e.highlightText,
                        colorPalette: t
                    },
                    buttonColorPalette: t
                }
            }
            let l = new Set(["eligible_to_purchase", "eligible_to_request"]);

            function d(e) {
                let t = l.has(e),
                    n = (0, i(214665).r)({
                        disableExposureLogging: !t
                    }),
                    o = "eligible_for_trial" === e,
                    d = (0, i(104361).d)({
                        disableExposureLogging: !o
                    });
                return a.useMemo(() => {
                    let i = r[e];
                    return t ? s(i, n) : o && void 0 !== d ? s(i, d) : i
                }, [e, n, d, t, o])
            }
        },
        164177: (e, t, i) => {
            i.d(t, {
                j: () => r
            });
            var a = () => i(546605);
            class n extends a().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let r = new n
        },
        183999: (e, t, i) => {
            i.d(t, {
                e4: () => r,
                lP: () => o,
                y8: () => n
            });
            var a = i(296540);
            let n = {
                minHeight: "fit-content",
                textWrap: "pretty"
            };

            function r({
                icon: e,
                animationState: t
            }) {
                return "animated" === e.type ? {
                    type: "animated",
                    icon: e.iconFn,
                    colorPalette: e.colorPalette,
                    colorVariant: e.colorVariant ? ? "primary",
                    animationState: t
                } : {
                    type: "static",
                    icon: e.iconFn,
                    colorPalette: e.colorPalette,
                    colorVariant: e.colorVariant ? ? "primary"
                }
            }

            function o(e) {
                let [t, i] = a.useState("initial");
                return a.useEffect(() => {
                    null != e && e.current && (e.current.addEventListener("mouseenter", () => i("animate")), e.current.addEventListener("mouseleave", () => i("initial")))
                }, [e]), {
                    animationState: t,
                    animationTriggers: {
                        onMouseEnter: () => i("animate"),
                        onMouseLeave: () => i("initial")
                    }
                }
            }
        },
        184681: (e, t, i) => {
            i.r(t), i.d(t, {
                DictationBubble: () => g
            }), i(581454);
            var a = i(296540);
            i(944114), i(898992), i(803949);
            var n = i(474848);
            let r = {
                display: "block",
                position: "absolute",
                top: 0,
                insetInlineStart: 3,
                width: 0,
                height: 0,
                zIndex: 112
            };

            function o({
                scrollerStore: e,
                blockId: t,
                isRtlLanguage: s,
                children: l,
                framerMotion: d
            }) {
                let c = (0, i(682985).K8)(() => e.state.elementRef ? ? {
                        current: null
                    }, [e]),
                    u = (0, i(239160).yE)(c),
                    [g, p] = (0, a.useState)(),
                    [f, m] = (0, a.useState)(),
                    h = (0, i(835043).lB)(e),
                    b = (0, i(835043).ht)(e),
                    v = null == h ? void 0 : h.getNode(),
                    y = null == v ? void 0 : v.querySelector(".notion-page-content"),
                    x = null == y ? void 0 : y.querySelector(`[data-block-id="${t}"]`);
                (0, a.useEffect)(() => {
                    if (y) {
                        let e, t = new MutationObserver(t => {
                            (0, i(722371).O9)(e) && cancelAnimationFrame(e), e = requestAnimationFrame(() => p(Date.now()))
                        });
                        return t.observe(y, {
                            subtree: !0,
                            characterData: !0,
                            childList: !0
                        }), () => {
                            t.disconnect(), (0, i(722371).O9)(e) && cancelAnimationFrame(e)
                        }
                    }
                }, [y]), (0, a.useEffect)(() => {
                    if (v) {
                        let e, t = new ResizeObserver(() => {
                            (0, i(722371).O9)(e) && cancelAnimationFrame(e), e = requestAnimationFrame(() => p(Date.now()))
                        });
                        return t.observe(v), () => {
                            t.disconnect(), (0, i(722371).O9)(e) && cancelAnimationFrame(e)
                        }
                    }
                }, [v]), (0, a.useLayoutEffect)(() => {
                    if (x && v) {
                        let e = document.createRange(),
                            t = x.querySelector('[data-content-editable-leaf="true"]') ? ? x,
                            a = function e(t) {
                                let i = [];
                                return t.nodeType === Node.TEXT_NODE ? i.push(t) : t.childNodes.forEach(t => {
                                    i = i.concat(e(t))
                                }), i
                            }(t),
                            n = v.getBoundingClientRect();
                        if (a.length > 0) {
                            let t = a[a.length - 1];
                            e.selectNodeContents(t), e.collapse(!1);
                            let r = e.getBoundingClientRect(),
                                o = r.top + u - n.top,
                                l = (0, i(619157).A1)(),
                                d = s ? r.left : r.right,
                                c = s ? (0, i(619157).A1)() ? -3 : -8 : (0, i(619157).A1)() ? 8 : 5;
                            m({
                                top: o,
                                left: l ? n.right - d - c : d - n.left + c
                            })
                        } else {
                            let e = t.getBoundingClientRect(),
                                a = window.getComputedStyle(t),
                                r = parseInt(a.paddingTop, 10),
                                o = isNaN(r) ? 0 : r,
                                l = parseInt(a.paddingBottom, 10),
                                d = isNaN(l) ? 0 : l,
                                c = parseInt(a.paddingLeft, 10),
                                g = isNaN(c) ? 0 : c,
                                p = parseInt(a.paddingRight, 10),
                                f = isNaN(p) ? 0 : p;
                            m({
                                top: e.top + o + d + u - n.top,
                                left: (0, i(619157).A1)() ? s ? n.right - e.right + f : n.right - e.left - g : s ? e.right - n.left - f : e.left - n.left + g
                            })
                        }
                    } else {
                        let e = setTimeout(() => {
                            m(void 0)
                        }, 200);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }, [x, v, g, u, s]);
                let S = (0, i(722371).O9)(f);
                (0, a.useEffect)(() => {
                    if (b && S) switch (b) {
                        case "Page":
                            return i(585823).Ay.setState({ ...i(585823).Ay.state,
                                blockRenderedInPage: !0
                            }), () => {
                                i(585823).Ay.setState({ ...i(585823).Ay.state,
                                    blockRenderedInPage: !1
                                })
                            };
                        case "PeekView":
                            return i(585823).Ay.setState({ ...i(585823).Ay.state,
                                blockRenderedInPeekView: !0
                            }), () => {
                                i(585823).Ay.setState({ ...i(585823).Ay.state,
                                    blockRenderedInPeekView: !1
                                })
                            }
                    }
                }, [b, S]);
                let M = (0, a.useRef)(null),
                    {
                        motion: k
                    } = d;
                return f ? (0, n.jsx)(k.div, {
                    ref: M,
                    initial: {
                        transform: `translate(${((0,i(619157).A1)()?-1:1)*f.left}px, ${f.top}px)`
                    },
                    animate: {
                        transform: `translate(${((0,i(619157).A1)()?-1:1)*f.left}px, ${f.top}px)`
                    },
                    transition: {
                        duration: .2
                    },
                    style: r,
                    children: l
                }) : null
            }

            function s(e) {
                let {
                    value: t
                } = (0, i(815048).fJ)(i(448988).fM);
                return t ? (0, n.jsx)(o, { ...e,
                    framerMotion: t
                }) : null
            }
            let l = {
                dotStyle: {
                    width: 6,
                    height: 6,
                    flexShrink: 0,
                    backgroundColor: i(632079).Tj.icon.disabled,
                    borderRadius: "50%"
                },
                style0: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 3
                }
            };

            function d(e) {
                let {
                    framerMotion: t
                } = e, {
                    motion: r
                } = t, o = (0, i(448988).sM)(t);
                return (0, a.useEffect)(() => {
                    (async () => {
                        await o.start(e => ({
                            y: [0, -7, 0],
                            transition: {
                                duration: .6,
                                delay: .15 * e,
                                repeat: 1 / 0,
                                repeatDelay: 1,
                                ease: "easeInOut"
                            }
                        }))
                    })()
                }, [o]), (0, n.jsx)(r.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    transition: {
                        duration: .3
                    },
                    style: l.style0,
                    children: [void 0, void 0, void 0].map((e, t) => (0, n.jsx)(r.div, {
                        custom: t,
                        animate: o,
                        style: l.dotStyle
                    }, t))
                })
            }

            function c() {
                let {
                    value: e
                } = (0, i(815048).fJ)(i(448988).fM);
                return e ? (0, n.jsx)(d, {
                    framerMotion: e
                }) : null
            }
            let u = {
                transform: "translateY(3px)"
            };

            function g({
                scrollerStore: e
            }) {
                let t = (0, i(533992).v3)(),
                    a = (0, i(682985).K8)(() => (0, i(533096).getPreferredDictationLanguage)(t.currentUser.id), [t.currentUser.id]),
                    r = (0, i(96583).yW)(a),
                    o = (0, i(682985).K8)(() => {
                        let e = i(585823).Ay.state.block && i(585823).Ay.state.rootBlock ? [{
                                type: "active",
                                rootBlockId: i(585823).Ay.state.rootBlock.id,
                                id: i(585823).Ay.state.block.id
                            }] : [],
                            t = Object.values(i(585823).Ay.state.passiveBlockMap).map(({
                                dictatingBlockStore: e,
                                rootBlockStore: t
                            }) => ({
                                type: "passive",
                                rootBlockId: t.id,
                                id: e.id
                            }));
                        return i(381453).hS([...e, ...t], "id")
                    }, [], {
                        equalityFn: i(381453).n4
                    }),
                    l = (0, i(682985).O$)(i(585823).Gq),
                    d = (0, i(682985).O$)(i(585823).Mq),
                    p = (0, i(682985).K8)(() => {
                        let e = i(585823).Ay.state.rootBlock;
                        return !!e && (0, i(723261).kc)(t, e)
                    }, [t]),
                    {
                        value: f
                    } = (0, i(815048).fJ)(i(448988).fM);
                if (!f || p) return null;
                let {
                    AnimatePresence: m
                } = f;
                return (0, n.jsx)(n.Fragment, {
                    children: o.map(t => (0, n.jsx)(s, {
                        blockId: t.id,
                        scrollerStore: e,
                        isRtlLanguage: r,
                        children: (0, n.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                direction: r ? "rtl" : "ltr"
                            },
                            children: [(0, n.jsx)(i(405957).DictationAvatar, {
                                noMarginRight: !0,
                                noOutline: !0,
                                noTooltip: !0
                            }), (0, n.jsx)(m, {
                                children: l || d ? (0, n.jsx)("div", {
                                    style: u,
                                    children: (0, n.jsx)(c, {})
                                }) : void 0
                            })]
                        })
                    }, t.rootBlockId))
                })
            }
        },
        186931: (e, t, i) => {
            i.r(t), i.d(t, {
                showIdleTranscriptionToast: () => a
            });

            function a(e, t) {
                var a;
                let {
                    pointer: n
                } = t, r = i(728372).AppStoreSidebarSpaceStore.state;
                if (!r) return;
                let o = i(970831).B.createChildStore(r, n);
                if (!(null != o && o.isTranscriptionBlock()) || "transcribing" !== (0, i(869708).by)(o).state) return;
                let s = (0, i(869708).RW)(null == (a = o.getFormat()) ? void 0 : a.transcription_model);
                (0, i(104310).u)({
                    event: {
                        eventName: "idle_transcription_toast_shown",
                        eventProperties: {
                            block_id: o.id,
                            transcription_model: s
                        }
                    }
                }), i(819652).Iz({
                    id: "transcription_idle",
                    icon: i(120757).h,
                    iconColorPalette: "gray",
                    iconColorVariant: "inversePrimary",
                    presentationType: "persistent",
                    title: i(962299).A.getIntl().formatMessage({
                        id: "idleTranscriptionToast.title",
                        defaultMessage: "Still there?"
                    }),
                    message: i(962299).A.getIntl().formatMessage({
                        id: "idleTranscriptionToast.message",
                        defaultMessage: "Notion AI is recording your audio but hasn't heard from you in a while."
                    }),
                    onDismiss: () => {
                        (0, i(104310).u)({
                            event: {
                                eventName: "idle_transcription_toast_dismissed",
                                eventProperties: {
                                    block_id: o.id,
                                    transcription_model: s
                                }
                            }
                        })
                    },
                    actions: {
                        primary: {
                            title: i(962299).A.getIntl().formatMessage({
                                id: "idleTranscriptionToast.action.stop",
                                defaultMessage: "Stop"
                            }),
                            onAction: () => {
                                (0, i(887584).K)({
                                    environment: e,
                                    blockStore: o
                                }), (0, i(338227).stopTranscription)({
                                    environment: e,
                                    blockStore: o,
                                    from: "transcription_idle_notification"
                                }), (0, i(617350).i)({
                                    id: "transcription_idle"
                                }), (0, i(104310).u)({
                                    event: {
                                        eventName: "idle_transcription_toast_stop_button_clicked",
                                        eventProperties: {
                                            block_id: o.id,
                                            transcription_model: s
                                        }
                                    }
                                })
                            }
                        },
                        secondary: {
                            title: i(962299).A.getIntl().formatMessage({
                                id: "idleTranscriptionToast.action.goToBlock",
                                defaultMessage: "Go to meeting note"
                            }),
                            onAction: () => {
                                (0, i(617350).i)({
                                    id: "transcription_idle"
                                }), (0, i(887584).K)({
                                    environment: e,
                                    blockStore: o
                                }), (0, i(104310).u)({
                                    event: {
                                        eventName: "idle_transcription_toast_navigation_button_clicked",
                                        eventProperties: {
                                            block_id: o.id,
                                            transcription_model: s
                                        }
                                    }
                                })
                            }
                        }
                    }
                })
            }
        },
        200424: (e, t, i) => {
            e.exports = i.p + "9ade71d75a1c0e93.png"
        },
        214665: (e, t, i) => {
            i.d(t, {
                r: () => n
            });
            let a = {
                control: "blue",
                green: "green",
                teal: "teal",
                red: "red"
            };

            function n({
                disableExposureLogging: e
            }) {
                return a[(0, i(604306).r)("nus_upgrade_button_color", {
                    disableExposureLogging: e
                })] ? ? "blue"
            }
        },
        225476: (e, t, i) => {
            function a(e) {
                if (null != e && e.blockId) return e.blockId
            }

            function n(e, t) {
                let i = e.currentUser.id;
                return t.userId === i || t.present
            }

            function r(e) {
                var t;
                return (null == (t = e.state.rootStore) ? void 0 : t.canEdit()) ? ? !1
            }

            function o(e) {
                let {
                    pageVisitStore: t,
                    presenceStore: a
                } = e, {
                    remotePresenceData: n
                } = a.state, r = [];
                n && (0, i(763230).uk)(n, e => {
                    null != e && e.userId && r.push(e)
                });
                let {
                    pageId: o,
                    lastViewTime: s,
                    lastExitTime: l,
                    totalCount: d,
                    hasMore: c,
                    ...u
                } = t.state;
                return (0, i(763230).uk)(u, e => {
                    e.isDefined() && r.push({
                        userId: e.getUserId(),
                        activityTimestampNearestMinuteMs: (0, i(627179).WY)(e.getVisitedAt()),
                        present: !1
                    })
                }), r = (0, i(381453).hS)(r, e => e.userId), (0, i(381453).Ul)(r, ({
                    activityTimestampNearestMinuteMs: e
                }) => e ? -e : 0)
            }

            function s(e) {
                let {
                    userId: t,
                    theme: a
                } = e;
                return (0, i(514214).MF)(t) ? i(632079).Tj.icon.secondary : (0, i(632079).Nq)(t, a)
            }
            i.d(t, {
                $L: () => s,
                EV: () => a,
                PZ: () => o,
                dp: () => n,
                xm: () => r
            }), i(944114)
        },
        226512: (e, t, i) => {
            i.d(t, {
                R: () => r
            });
            var a = i(296540),
                n = i(474848);

            function r(e) {
                var t, r;
                let s, l = (0, i(109939).tz)(),
                    {
                        onClick: d,
                        onDismiss: c,
                        style: u,
                        hoveredStyle: g,
                        showBackground: p = !0
                    } = e,
                    f = (t = u, r = p, s = (0, i(781889).o)(), (0, i(960253).I)(() => ({
                        button: {
                            alignItems: "center",
                            background: r ? i(632079).Tj.buttonHoveredBackground : "none",
                            borderRadius: "100%",
                            display: "flex",
                            height: i(104509).Ev.lg,
                            width: i(104509).Ev.lg,
                            justifyContent: "center",
                            position: "absolute",
                            insetInlineEnd: 10 + s,
                            top: 10,
                            zIndex: 10,
                            ...t
                        },
                        buttonHovered: {
                            background: r ? i(632079).Tj.buttonPressedBackground : i(632079).Tj.buttonHoveredBackground
                        }
                    }), [r, t, s])),
                    m = (0, a.useContext)(i(19187).e),
                    h = function(e) {
                        let {
                            onClick: t,
                            onDismiss: i
                        } = e, n = (0, a.useCallback)(e => {
                            null == t || t(e), null == i || i()
                        }, [t, i]);
                        return t || i ? n : void 0
                    }({
                        onClick: d,
                        onDismiss: c ? ? m
                    });
                return h ? (0, n.jsx)(i(374533).A, {
                    ariaLabel: l.formatMessage(o.dismissModalAriaLabel),
                    icon: i(766970).xMarkFillIcon,
                    onClick: h,
                    style: f.button,
                    hoveredStyle: { ...f.buttonHovered,
                        ...g
                    }
                }) : null
            }
            let o = (0, i(109939).YK)({
                dismissModalAriaLabel: {
                    id: "dismiss.dismissButton.label",
                    defaultMessage: "Dismiss"
                }
            })
        },
        233305: (e, t, i) => {
            i.d(t, {
                N: () => r
            });
            var a = i(296540),
                n = i(474848);

            function r({
                source: e,
                upsell: t,
                isDisabled: o,
                title: s,
                onClickBeforeUpgradeAction: l,
                postUpgradeCallback: d,
                hoverRef: c,
                tooltipMessage: u,
                tooltipPlacement: g,
                buttonMenuItemProps: p,
                display: f = "icon",
                customMessages: m,
                featureName: h,
                spaceStore: b
            }) {
                var v;
                let y = (0, i(109939).tz)(),
                    {
                        onClick: x,
                        focused: S,
                        ...M
                    } = p ? ? {},
                    k = t && "none" !== t.type,
                    {
                        upgradeEligibility: w,
                        handleClick: C
                    } = (0, i(79268).C)({
                        upsell: t,
                        source: e,
                        onClickBeforeUpgradeAction: l,
                        postUpgradeCallback: d,
                        spaceStore: b
                    }),
                    P = (0, i(156139).e)(w.status),
                    I = (0, a.useMemo)(() => k ? "text" === f ? (0, n.jsx)(i(268627).c, {
                        upgradeStatus: w.status,
                        handleClick: C,
                        upsell: t,
                        hoverRef: c,
                        customMessages: m,
                        featureName: h
                    }) : (0, n.jsx)(i(740957).c, {
                        upgradeStatus: w.status,
                        handleClick: C,
                        upsell: t,
                        hoverRef: c,
                        showPlanName: !0,
                        customMessages: m,
                        featureName: h
                    }) : null, [k, f, w.status, C, t, c, m, h]),
                    j = (0, a.useCallback)(e => {
                        if (!o) {
                            if (!t || "none" === t.type) {
                                null == x || x(e);
                                return
                            }
                            C()
                        }
                    }, [o, t, C, x]);
                return (0, n.jsx)(i(551942).T, {
                    tooltipMessage: o && t ? null == (v = P.disabledTooltip) ? void 0 : v.call(P, {
                        intl: y,
                        upsell: t
                    }) : u,
                    placement: g,
                    children: (0, n.jsx)(i(95582).A, { ...M,
                        focused: !!S,
                        title: s({
                            upgradeLabel: I
                        }),
                        onClick: j
                    })
                })
            }
        },
        268627: (e, t, i) => {
            i.d(t, {
                c: () => r
            });
            var a = i(296540),
                n = i(474848);

            function r(e) {
                let {
                    upsell: t,
                    upgradeStatus: r,
                    handleClick: o,
                    customMessages: s,
                    size: l = "default",
                    width: d = "hug",
                    onMouseDown: c,
                    hoverRef: u,
                    hideIcon: g,
                    featureName: p
                } = e, f = (0, i(109939).tz)(), m = (0, i(156139).e)(r), h = a.useRef(null), b = (0, i(729787).wY)(h), v = e.textColor ? ? ("small" === l ? "secondary" : "primary"), y = { ...i(183999).y8,
                    ..."small" === l ? {
                        paddingInlineStart: 4,
                        paddingInlineEnd: 4,
                        gap: 4
                    } : {
                        gap: 6
                    }
                }, x = e => (0, n.jsx)(i(725187).W, { ...m.highlightText,
                    size: l,
                    children: e
                }), {
                    productName: S,
                    upgradePhrase: M
                } = (0, i(327506).n)({
                    upsell: t,
                    intl: f,
                    featureName: p,
                    upgradeStatus: r
                }), k = null != s && s[r] ? f.formatMessage(s[r], { ...(0, i(426458).I)(x),
                    productName: S,
                    upgradePhrase: M,
                    ...s[r].interpolatedValues
                }) : m.label.text({
                    intl: f,
                    upsell: t,
                    featureName: p,
                    renderTextHighlight: x
                }), w = !!m.disabledTooltip, {
                    animationState: C,
                    animationTriggers: P
                } = (0, i(183999).lP)(u);
                return (0, n.jsx)(i(988022).p, { ...u ? {} : P,
                    ref: h,
                    disabled: w && !u,
                    hoveredStyle: u ? {
                        background: "unset"
                    } : void 0,
                    size: i(799236).kD[l],
                    width: d,
                    onMouseDown: c,
                    iconLeading: g ? void 0 : { ...(0, i(183999).e4)({
                            icon: m.icon({
                                upsell: t
                            }),
                            animationState: C
                        }),
                        size: i(799236).D6[l],
                        style: { ...null != b && b.height && b.height > i(399411).RO[i(799236).kD[l]] ? {
                                alignSelf: "flex-start",
                                marginTop: 2
                            } : {}
                        }
                    },
                    style: y,
                    onClick: o,
                    children: (0, n.jsx)(i(111010).D, {
                        colorVariant: v,
                        children: k
                    })
                })
            }
        },
        314331: (e, t, i) => {
            i.d(t, {
                n: () => a
            });

            function a(e) {
                return (0, i(682985).K8)(() => i(585823).gZ.state && (null == e ? void 0 : e.id) === i(585823).Di.state, [e])
            }
        },
        315144: (e, t, i) => {
            i.d(t, {
                a: () => n
            });
            let a = new(i(815048)).O2("StopDictationButton", async () => await Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(5410), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(12354), i.e(5721), i.e(57688), i.e(17250), i.e(64696), i.e(39726), i.e(87971), i.e(29663), i.e(74145), i.e(55067), i.e(79349), i.e(90735), i.e(50354), i.e(71136), i.e(86102), i.e(30671), i.e(3101)]).then(i.bind(i, 985993))),
                n = (0, i(815048)._h)(a, e => e.StopDictationButton)
        },
        319681: (e, t, i) => {
            i.d(t, {
                e: () => r
            }), i(296540);
            var a = i(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.97 2.72 18.06 14.56",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M3.893 2.875a.626.626 0 0 1 .79-.02l.092.088.126.146.016.035.072.105 11.273 13.15a.624.624 0 0 1-1.036.678l-1.615-1.884c-1.12.408-2.339.633-3.611.633-3.757 0-7.049-1.946-8.707-4.843l-.155-.283a1.46 1.46 0 0 1 0-1.359l.155-.283c.89-1.554 2.249-2.835 3.898-3.688L3.826 3.757l-.072-.105a.626.626 0 0 1 .14-.777M6.031 6.33c-1.564.744-2.842 1.913-3.653 3.33l-.134.243a.21.21 0 0 0 0 .197l.134.243c1.426 2.49 4.292 4.214 7.622 4.214.958 0 1.877-.144 2.734-.406l-1.1-1.284a3.3 3.3 0 0 1-1.634.438l-.17-.004a3.307 3.307 0 0 1-3.132-3.133l-.004-.17c0-.777.269-1.492.718-2.056zm2.904 3.387q-.037.135-.038.281a1.104 1.104 0 0 0 1.218 1.097zM10 4.194c3.878 0 7.26 2.075 8.862 5.127l.074.164c.125.332.125.7 0 1.032l-.074.163a9.3 9.3 0 0 1-2.987 3.327l-.82-.955c1.15-.764 2.084-1.779 2.7-2.953l.02-.048a.2.2 0 0 0 0-.1l-.02-.049C16.382 7.282 13.438 5.445 10 5.445q-.705 0-1.378.1l-.94-1.098A10.7 10.7 0 0 1 10 4.194"
                        }), (0, a.jsx)("path", {
                            d: "M10.17 6.694a3.307 3.307 0 0 1 3.136 3.303l-.005.17a3.3 3.3 0 0 1-.116.702L9.624 6.713A3 3 0 0 1 10 6.691z"
                        })]
                    })
                },
                r = (0, i(104509).wt)("eyeSlash", n, "default")
        },
        322095: (e, t, i) => {
            function a(e, t) {
                return e.map(e => n(e, t))
            }

            function n(e, t) {
                var a, n;
                let r, {
                        nameMessage: o,
                        descriptionMessage: s,
                        ...l
                    } = e,
                    {
                        rootId: d,
                        previewRootId: c,
                        spaceId: u
                    } = (a = e, n = t, r = (0, i(599412).H)(n), a.sources[r] || a.sources[i(599412).q]);
                return { ...l,
                    id: o.id,
                    rootId: d,
                    spaceId: u,
                    previewRootId: c,
                    name: t.formatMessage(o),
                    description: s ? t.formatMessage(s) : void 0
                }
            }
            i.d(t, {
                B: () => n,
                o: () => a
            }), i(581454)
        },
        327506: (e, t, i) => {
            i.d(t, {
                T: () => n,
                n: () => r
            });
            let a = (0, i(109939).YK)({
                loading: {
                    id: "upgradeAction.loading",
                    defaultMessage: "Loading…"
                },
                upgradeToWithProduct: {
                    id: "upgradeAction.upgradeToWithProduct",
                    defaultMessage: "Upgrade to {productName}"
                },
                upgradeWithProduct: {
                    id: "upgradeAction.upgradeWithProduct",
                    defaultMessage: "Upgrade {productName}"
                },
                addWithProduct: {
                    id: "upgradeAction.addWithProduct",
                    defaultMessage: "Add {productName}"
                },
                tryWithProduct: {
                    id: "upgradeAction.tryWithProduct",
                    defaultMessage: "Try {productName} for free"
                },
                requestAccessToWithProduct: {
                    id: "upgradeAction.requestAccessToWithProduct",
                    defaultMessage: "Request access to {productName}"
                },
                pendingRequestedAccessToWithProduct: {
                    id: "upgradeAction.pendingRequestedAccessToWithProduct",
                    defaultMessage: "Requested access to {productName} is pending"
                },
                contactSales: {
                    id: "upgradeAction.contactSales",
                    defaultMessage: "Contact sales to learn more"
                },
                requestWithProduct: {
                    id: "upgradeAction.requestWithProduct",
                    defaultMessage: "Request {productName}"
                },
                pendingRequestWithProduct: {
                    id: "upgradeAction.pendingRequestWithProduct",
                    defaultMessage: "Your request for {productName} is pending"
                },
                credits: {
                    id: "upgradeAction.credits",
                    defaultMessage: "credits"
                }
            });

            function n({
                upsell: e,
                intl: t,
                featureName: a
            }) {
                let r = "product" === e.type ? e.product : void 0;
                if (r) return a && (0, i(149957).QO)(a) && "business" === r ? t.formatMessage(i(262166).v0.notionAi) : (0, i(262166).u2)({
                    product: r,
                    intl: t
                })
            }

            function r({
                upsell: e,
                intl: t,
                featureName: o,
                upgradeStatus: s
            }) {
                let l, d = "product" === e.type && "ai_credit_pack" === e.product,
                    c = n({
                        upsell: e,
                        intl: t,
                        featureName: o
                    }),
                    u = c === t.formatMessage(i(262166).v0.notionAi),
                    g = t.formatMessage(a.credits);
                if (d) {
                    switch (s) {
                        case "loading":
                            l = t.formatMessage(a.loading);
                            break;
                        case "eligible_to_purchase":
                        case "not_eligible":
                            l = t.formatMessage(a.addWithProduct, {
                                productName: g
                            });
                            break;
                        case "eligible_for_trial":
                            l = t.formatMessage(a.tryWithProduct, {
                                productName: g
                            });
                            break;
                        case "eligible_to_request":
                            l = t.formatMessage(a.requestWithProduct, {
                                productName: g
                            });
                            break;
                        case "request_pending":
                            l = t.formatMessage(a.pendingRequestWithProduct, {
                                productName: g
                            });
                            break;
                        case "sales_assisted":
                        case "sales_eligible":
                            l = t.formatMessage(a.contactSales);
                            break;
                        default:
                            (0, i(722371).HB)(s)
                    }
                    return {
                        productName: c,
                        upgradePhrase: l
                    }
                }
                if (u) {
                    switch (s) {
                        case "loading":
                            l = t.formatMessage(a.loading);
                            break;
                        case "eligible_to_purchase":
                        case "not_eligible":
                            l = t.formatMessage(a.upgradeWithProduct, {
                                productName: c
                            });
                            break;
                        case "eligible_for_trial":
                            l = t.formatMessage(a.tryWithProduct, {
                                productName: c
                            });
                            break;
                        case "eligible_to_request":
                            l = t.formatMessage(a.requestAccessToWithProduct, {
                                productName: c
                            });
                            break;
                        case "request_pending":
                            l = t.formatMessage(a.pendingRequestedAccessToWithProduct, {
                                productName: c
                            });
                            break;
                        case "sales_assisted":
                        case "sales_eligible":
                            l = t.formatMessage(a.contactSales, {
                                productName: c
                            });
                            break;
                        default:
                            (0, i(722371).HB)(s)
                    }
                    return {
                        productName: c,
                        upgradePhrase: l
                    }
                }
                switch (s) {
                    case "loading":
                        l = t.formatMessage(a.loading);
                        break;
                    case "eligible_to_purchase":
                    case "not_eligible":
                        l = t.formatMessage(a.upgradeToWithProduct, {
                            productName: c
                        });
                        break;
                    case "eligible_for_trial":
                        l = t.formatMessage(a.tryWithProduct, {
                            productName: c
                        });
                        break;
                    case "eligible_to_request":
                        l = t.formatMessage(a.requestAccessToWithProduct, {
                            productName: c
                        });
                        break;
                    case "request_pending":
                        l = t.formatMessage(a.pendingRequestedAccessToWithProduct, {
                            productName: c
                        });
                        break;
                    case "sales_assisted":
                    case "sales_eligible":
                        l = t.formatMessage(a.contactSales, {
                            productName: c
                        });
                        break;
                    default:
                        (0, i(722371).HB)(s)
                }
                return {
                    productName: c,
                    upgradePhrase: l
                }
            }
        },
        334659: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowStraightUpFillIcon: () => n,
                iconDefinition: () => a
            }), i(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.72 2.12 12.56 15.76",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10.619 2.381a.875.875 0 0 0-1.238 0l-5.4 5.4A.875.875 0 1 0 5.22 9.02l3.906-3.907V17.05c0 .456.392.826.875.826s.875-.37.875-.826V5.112l3.906 3.907A.875.875 0 1 0 16.02 7.78z"
                    })
                },
                n = (0, i(104509).wt)("arrowStraightUpFill", a, "fill")
        },
        346899: (e, t, i) => {
            i.d(t, {
                h: () => n
            });
            let a = new(i(815048)).O2("DictationAvatar", async () => await Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(5410), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(12354), i.e(5721), i.e(57688), i.e(17250), i.e(64696), i.e(39726), i.e(87971), i.e(29663), i.e(74145), i.e(55067), i.e(79349), i.e(90735), i.e(50354), i.e(71136), i.e(86102), i.e(30671), i.e(3101)]).then(i.bind(i, 405957))),
                n = (0, i(815048)._h)(a, e => e.DictationAvatar)
        },
        364494: (e, t, i) => {
            i.d(t, {
                X: () => a
            });

            function a(e, t) {
                (0, i(141802).K_)(e, {
                    from_language: (0, i(533096).getPreferredDictationLanguage)(e.currentUser.id),
                    to_language: t,
                    dictation_session_id: (0, i(216735).qY)()
                });
                let a = i(728372).AppStoreCurrentUserSettingsStore.state;
                if (!a) return;
                let {
                    serverCommitResult: n
                } = (0, i(377796).createAndCommit)({
                    userAction: "setPreferredDictationLanguage",
                    environment: e,
                    cellTarget: "main",
                    canUndo: !1,
                    perform: e => {
                        (0, i(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                preferred_meeting_notes_language: t
                            }
                        })
                    }
                });
                n.then(() => {
                    (0, i(774094).p)({
                        userId: e.currentUser.id,
                        from: "setPreferredDictationLanguage",
                        additionalLogData: {
                            language: t
                        }
                    })
                }).catch(a => {
                    i(773352).log({
                        level: "error",
                        from: "setPreferredDictationLanguage",
                        type: "userSettingsTransactionFailed",
                        error: (0, i(416607).convertErrorToLog)(a),
                        data: {
                            miscDataToConvertToString: {
                                userId: e.currentUser.id,
                                attemptedLanguage: t
                            }
                        }
                    })
                })
            }
        },
        386137: (e, t, i) => {
            i.d(t, {
                P: () => n
            }), i(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.75 3.75 12.51 12.51",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M14.75 3.75h-9.5a1.5 1.5 0 0 0-1.5 1.5v9.5a1.5 1.5 0 0 0 1.5 1.5h9.5a1.5 1.5 0 0 0 1.5-1.5v-9.5a1.5 1.5 0 0 0-1.5-1.5"
                    })
                },
                n = (0, i(104509).wt)("mediaStopFill", a, "fill")
        },
        405957: (e, t, i) => {
            i.r(t), i.d(t, {
                DictationAvatar: () => o
            });
            var a = i(296540),
                n = i(474848);
            let r = {
                tooltip: {
                    color: i(632079).Tj.text.inverseSecondary,
                    minWidth: 150,
                    paddingTop: 2,
                    paddingBottom: 2,
                    lineHeight: 1.3
                },
                avatarContainer: {
                    backgroundColor: i(632079).Tj.assistantCornerButtonBackground,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                style0: {
                    cursor: "default"
                },
                style1: {
                    outline: "none"
                },
                style2: {
                    marginInlineEnd: 0
                },
                style3: {
                    width: 18,
                    height: 18
                }
            };

            function o({
                enableClickToScroll: e = !1,
                rootStore: t,
                noMarginRight: s = !1,
                noOutline: l = !1,
                noTooltip: d = !1
            }) {
                let c = (0, i(314331).n)(t),
                    u = (0, i(533992).v3)(),
                    g = (0, a.useCallback)(e => e.border.accentPrimary, []),
                    p = (0, i(616922).XE)(g, !0),
                    f = (0, i(682985).O$)(i(585823).b);
                return !c && t ? null : (0, n.jsx)(i(51831).m, {
                    textWrap: !0,
                    disableTooltip: d,
                    content: () => (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("div", {
                            children: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Transcribing your words",
                                id: "topbar.presenceIndicator.dictation.tooltip.description"
                            })
                        }), (0, n.jsx)("div", {
                            style: r.tooltip,
                            children: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Click to see where",
                                id: "topbar.presenceIndicator.dictation.tooltip.action"
                            })
                        })]
                    }),
                    children: t => {
                        let a = (0, n.jsx)("div", {
                            style: { ...p.avatarOuterOutline,
                                ...l ? r.style1 : {},
                                ...s ? r.style2 : {},
                                ...r.style3
                            },
                            children: (0, n.jsx)("div", {
                                style: { ...p.avatarBorder,
                                    ...r.avatarContainer
                                },
                                children: (0, n.jsx)(i(971375).x, {
                                    variant: "avatar",
                                    shadowVariant: "none"
                                })
                            })
                        });
                        return e && f ? (0, n.jsx)(i(64960).Ay, { ...t,
                            onClick: () => (0, i(250717).B)([f], !0, u),
                            style: p.button,
                            hoveredStyle: p.buttonHovered,
                            pressedStyle: p.buttonPressed,
                            children: a
                        }) : (0, n.jsx)("div", { ...t,
                            style: r.style0,
                            children: a
                        })
                    }
                })
            }
        },
        407103: (e, t, i) => {
            i.r(t), i.d(t, {
                TranscriptionSetupModal: () => o
            }), i(898992), i(354520), i(581454);
            var a = i(296540),
                n = i(474848);
            let r = (0, i(109939).YK)({
                transcriptionSetupModal: {
                    id: "transcriptionBlock.transcriptionSetupModal.ariaLabel",
                    defaultMessage: "AI Meeting Notes Setup"
                },
                getStarted: {
                    id: "transcriptionBlock.transcriptionSetupModal.getStarted",
                    defaultMessage: "AI Meeting Notes Setup"
                },
                setupDescription: {
                    id: "transcriptionBlock.transcriptionSetupModal.setupDescription",
                    defaultMessage: "One-time setup to capture notes effortlessly."
                },
                imageAlt: {
                    id: "transcriptionBlock.transcriptionSetupModal.imageAlt",
                    defaultMessage: "AI Meeting Notes setup image"
                },
                troubleshootingText: {
                    id: "transcriptionBlock.transcriptionSetupModal.troubleshootingText",
                    defaultMessage: "If you’ve already completed setup but still see this, try these <link>troubleshooting steps</link>"
                }
            });

            function o() {
                let e = (0, i(109939).tz)(),
                    t = (0, i(533992).Y0)(),
                    a = (0, i(682985).K8)(() => i(769719).c.state.transcriptionSetupModalOpen && t.isElectron, [t]);
                return (0, n.jsx)(i(556809).a, {
                    ariaLabel: e.formatMessage(r.transcriptionSetupModal),
                    open: a,
                    transitionAppearance: "none",
                    onDismiss: () => {
                        i(769719).c.closeTranscriptionSetupModal()
                    },
                    children: (0, n.jsx)(l, {})
                })
            }
            let s = {
                wrapper: {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: 480,
                    border: `1px solid ${i(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 12
                },
                header: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    padding: "20px 25px 5px",
                    backgroundColor: i(632079).Tj.background.secondaryTranslucent
                },
                title: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: 24,
                    fontWeight: i(699422).Wy.semibold,
                    color: i(632079).Tj.text.primary
                },
                description: {
                    marginBottom: 15,
                    fontSize: 17,
                    lineHeight: "24px",
                    color: i(632079).Tj.text.secondary
                },
                troubleshooting: {
                    marginBottom: 15,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: i(632079).Tj.text.secondary
                },
                troubleshootingLink: {
                    color: i(632079).Tj.blue.text.accentPrimary,
                    textDecoration: "none",
                    cursor: "pointer"
                },
                body: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    padding: "25px 25px 20px",
                    borderRadius: 12,
                    position: "relative"
                },
                controlRowContainerInvertedBorder: {
                    backgroundColor: i(632079).Tj.background.secondaryTranslucent
                },
                style0: {
                    width: "16px",
                    height: "16px",
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0,
                    clipPath: "path('M16 0C7.16344 0 0 7.16344 0 16V0H16Z')"
                },
                style1: {
                    width: "16px",
                    height: "16px",
                    position: "absolute",
                    top: 0,
                    insetInlineEnd: 0,
                    clipPath: "path('M0 0C8.83656 0 16 7.16344 16 16V0H0Z')"
                }
            };

            function l() {
                let e = (0, i(533992).v3)(),
                    [t] = (0, a.useState)((0, i(689589).xw)()),
                    [o, l] = (0, a.useState)([]),
                    [d, u] = (0, a.useState)(!1),
                    [g] = (0, i(97668).Yb)(async () => {
                        let i, a = o;
                        for (let n of t.filter(e => !o.includes(e.id))) {
                            let t = await n.hasCompleted({
                                environment: e,
                                isConfirmation: !1
                            });
                            t && !o.includes(n.id) && (a = [...a, n.id]), t || i || (i = n)
                        }
                        return l(a), i
                    }, [e, t, o]);
                return (0, a.useEffect)(() => {
                    if (g.value && d) {
                        let t = setInterval(async () => {
                            let i = g.value;
                            i ? await i.hasCompleted({
                                environment: e,
                                isConfirmation: !0
                            }) && (l([...o, i.id]), clearInterval(t)) : clearInterval(t)
                        }, 3e3);
                        return () => {
                            clearInterval(t)
                        }
                    }
                }, [g, e, d, o]), (0, n.jsx)(i(790124).A, {
                    capture: !0,
                    allowUndo: !1,
                    allowEsc: !0,
                    allowTabUntab: !1,
                    children: a => (0, n.jsxs)("div", { ...a,
                        style: s.wrapper,
                        children: [(0, n.jsxs)("div", {
                            style: s.header,
                            children: [(0, n.jsx)("div", {
                                style: s.title,
                                children: (0, n.jsx)(i(109939).sA, { ...r.getStarted
                                })
                            }), (0, n.jsx)("div", {
                                style: s.description,
                                children: (0, n.jsx)(i(109939).sA, { ...r.setupDescription
                                })
                            }), (0, n.jsx)("div", {
                                style: s.troubleshooting,
                                children: (0, n.jsx)(i(109939).sA, { ...r.troubleshootingText,
                                    values: {
                                        link: e => (0, n.jsx)("a", {
                                            href: (0, i(442564).x)("guides.meetingNotes.troubleshootCommonIssues"),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: s.troubleshootingLink,
                                            children: e
                                        })
                                    }
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            style: s.body,
                            children: [(0, n.jsx)("div", {
                                style: { ...s.controlRowContainerInvertedBorder,
                                    ...s.style0
                                }
                            }), (0, n.jsx)("div", {
                                style: { ...s.controlRowContainerInvertedBorder,
                                    ...s.style1
                                }
                            }), t.map(t => {
                                var a, r;
                                return (0, n.jsx)(c, {
                                    step: t,
                                    isCompleted: o.includes(t.id),
                                    isFirstIncompleteStep: (null == (r = g.value) ? void 0 : r.id) === t.id,
                                    onAction: () => {
                                        t.action({
                                            environment: e,
                                            isConfirmation: !1
                                        }), (0, i(104310).u)({
                                            event: {
                                                eventName: "transcription_block_setup_modal_action_clicked",
                                                eventProperties: {
                                                    step: t.id
                                                }
                                            }
                                        }), u(!0)
                                    }
                                }, `${t.id}-${null==(a=g.value)?void 0:a.id}`)
                            })]
                        })]
                    })
                })
            }
            let d = {
                content: {
                    flex: 1
                },
                container: {
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "flex-start",
                    alignItems: "flex-start",
                    width: "100%",
                    gap: 20
                },
                image: {
                    width: "135px",
                    marginTop: 8,
                    flexShrink: 0,
                    borderRadius: 4
                },
                description: {
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 5,
                    marginTop: 5,
                    color: i(632079).Tj.text.secondary
                },
                actionButton: {
                    marginTop: 12,
                    alignSelf: "flex-start"
                },
                style0: {
                    width: "auto"
                }
            };

            function c(e) {
                let t = (0, i(109939).tz)(),
                    {
                        step: a,
                        isFirstIncompleteStep: o,
                        onAction: s,
                        isCompleted: l
                    } = e,
                    c = (0, i(960253).I)(() => ({
                        checkIcon: {
                            marginInlineEnd: 12,
                            marginTop: 3,
                            fill: l ? i(632079).Tj.blue.icon.accentPrimary : i(632079).Tj.icon.tertiary
                        },
                        stepTitle: {
                            display: "flex",
                            alignItems: "center",
                            fontSize: 19,
                            fontWeight: i(699422).Wy.semibold,
                            marginBottom: 4,
                            color: l ? i(632079).Tj.blue.text.accentPrimary : i(632079).Tj.text.primary
                        }
                    }), [l, o]);
                return (0, n.jsxs)(i(4458).fI, {
                    children: [(0, n.jsx)(i(16275).I, {
                        icon: i(93042).checkmarkCircleFillIcon,
                        size: 24,
                        style: c.checkIcon
                    }), (0, n.jsxs)("div", {
                        style: d.content,
                        children: [(0, n.jsx)("div", {
                            style: c.stepTitle,
                            children: (0, n.jsx)(i(109939).sA, { ...a.title
                            })
                        }), o ? (0, n.jsxs)("div", {
                            style: d.container,
                            children: ["microphone" === a.id || "system-audio" === a.id ? (0, n.jsx)(i(989059).A, {
                                src: i(896221).A.images.aiMeetingNotes.setupPng,
                                alt: t.formatMessage(r.imageAlt),
                                style: d.image,
                                placeholderLoadedStyle: d.style0
                            }) : null, (0, n.jsxs)("div", {
                                style: d.description,
                                children: [(0, n.jsx)(i(109939).sA, { ...a.description
                                }), (0, n.jsx)(i(912946).A, {
                                    colorPalette: "blue",
                                    style: d.actionButton,
                                    onClick: s,
                                    children: (0, n.jsx)(i(109939).sA, { ...a.actionText
                                    })
                                })]
                            })]
                        }) : null]
                    })]
                })
            }
        },
        413440: (e, t, i) => {
            i.r(t), i.d(t, {
                StopDictationListener: () => r
            });
            var a = i(296540);
            let n = (0, i(109939).YK)({
                title: {
                    id: "stopDictationListener.notification.title",
                    defaultMessage: "Meeting note stopped due to inactivity"
                },
                body: {
                    id: "stopDictationListener.notification.body",
                    defaultMessage: "Notion AI could not detect your audio for a while"
                }
            });

            function r() {
                let e, t, r, o, s, l = (0, i(533992).v3)(),
                    d = (0, i(109939).tz)(),
                    c = (0, i(682985).K8)(() => i(585823).Ay.state.tabId, []),
                    u = (0, i(682985).O$)(i(585823).ei),
                    g = (0, i(682985).K8)(() => (0, i(722371).O9)(u) && u.isTranscriptionBlock(), [u]),
                    p = (0, i(682985).K8)(() => {
                        let e = i(585823).kj.state;
                        if (e && e.isDefined()) return !e.isDictatableBlock() || e.pathIsDead()
                    }, []),
                    f = !(0, i(682985).O$)(i(585823).Y$);
                (0, a.useEffect)(() => {
                    if ((0, i(722371).O9)(p) && p) {
                        var e, t, a, n;
                        i(773352).log({
                            level: "info",
                            from: "stopDictationListener",
                            type: "block_not_dictatable",
                            data: {
                                miscDataToConvertToString: {
                                    rootBlockId: null == (e = i(585823).ei.state) ? void 0 : e.id,
                                    dictationBlockId: null == (t = i(585823).kj.state) ? void 0 : t.id,
                                    isDictatableBlock: (null == (a = i(585823).kj.state) ? void 0 : a.isDictatableBlock()) ? ? "undefined",
                                    isDictationBlockPathDead: (null == (n = i(585823).kj.state) ? void 0 : n.pathIsDead()) ? ? "undefined"
                                }
                            }
                        }), (0, i(336328).stopDictation)({
                            environment: l,
                            from: "block_not_dictatable"
                        })
                    }
                }, [p, l]), (0, a.useEffect)(() => {
                    if (f && !g) {
                        let e = setTimeout(() => {
                            f || (0, i(336328).stopDictation)({
                                environment: l,
                                from: "block_not_visible"
                            })
                        }, 350);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }, [f, g, l]);
                let m = function() {
                    let e = (0, i(839362).W)(),
                        t = (0, i(682985).O$)(i(585823).ei),
                        n = (0, i(682985).O$)(i(585823).gZ),
                        [r, o] = (0, a.useState)(void 0),
                        s = (0, i(682985).K8)(() => i(218744).default.getConfig({
                            configName: "client_stop_transcription_on_idle_configs"
                        }), []),
                        l = (0, a.useCallback)(() => {
                            if (!s.enabled || !s.stop_transcription_threshold_min || s.stop_transcription_threshold_min <= 0 || !s.notify_threshold_min || s.notify_threshold_min <= 0 || !(null != t && t.isTranscriptionBlock())) return;
                            let e = i(585823).Ay.state.lastReceivedTranscriptionAt;
                            if (!e) return;
                            let a = Date.now() - e;
                            a >= s.stop_transcription_threshold_min * i(695216).Xb ? o("should_stop") : a >= s.notify_threshold_min * i(695216).Xb ? o("should_notify") : o(void 0)
                        }, [t, s]);
                    return (0, a.useEffect)(() => {
                        n || o(void 0)
                    }, [n]), (0, i(216266).n)(l, 20 * i(695216).TD, !!(e && t)), r
                }();
                return e = (0, i(345776).T)(), t = (0, i(723240).r)(), r = (0, i(682985).O$)(i(585823).gZ), o = (0, i(682985).O$)(i(585823).Di), s = (0, a.useCallback)(() => {
                    if (!r || !o) return;
                    let a = i(585823).Ay.state.transcriptionLastSentAt;
                    if (!a) return;
                    let n = Date.now() - a;
                    n >= 5 * i(695216).TD && i(773352).log({
                        level: "warning",
                        from: "dictationIdleDetection",
                        type: "idleAudioSending",
                        data: {
                            miscDataToConvertToString: {
                                rootBlockId: o,
                                currentUserId: e,
                                sidebarSpaceId: t,
                                timeSinceLastSentMs: n,
                                isDictationEnabled: r
                            }
                        }
                    })
                }, [r, o, e, t]), (0, i(216266).n)(s, 10 * i(695216).TD, !!r), (0, a.useEffect)(() => {
                    m && null != u && u.isTranscriptionBlock() ? ("should_notify" === m && (0, i(512985).B)(l, {
                        toastId: "transcription_idle",
                        pointer: u.pointer
                    }), "should_stop" === m && ((0, i(338227).stopTranscription)({
                        environment: l,
                        blockStore: u,
                        from: "transcription_idle"
                    }), new Notification(d.formatMessage(n.title), {
                        body: d.formatMessage(n.body),
                        silent: !1
                    }).addEventListener("click", () => {
                        (0, i(887584).N)({
                            environment: l,
                            blockStore: u,
                            tabId: c
                        })
                    }))) : (0, i(617350).i)({
                        id: "transcription_idle"
                    })
                }, [m, l, c, u, d]), null
            }
        },
        418001: (e, t, i) => {
            i.d(t, {
                j: () => a
            });

            function a(e) {
                let {
                    environment: t,
                    blockStore: a,
                    tabToOpen: n,
                    from: r
                } = e, o = i(475097).default.state.open, {
                    currentTab: s
                } = i(449473).B8.state, l = s !== n || s === n && !(0, i(953099).N)(t), d = n === i(449473).tF.Comments && (s !== n || !(0, i(953099).N)(t));
                (0, i(34953).f)(n), d && i(449473).B8.update(e => ({ ...e,
                    timeOpenedComments: Date.now()
                })), o ? ((0, i(545586).navigateToBlock)({
                    environment: t,
                    store: a,
                    pageVisitSource: i(254656).y8.Expand
                }), (0, i(911046).u)({
                    environment: t,
                    isExpanded: !0,
                    from: r,
                    saveDetailsSidebarPreference: !0
                })) : (0, i(911046).u)({
                    environment: t,
                    isExpanded: l,
                    from: r,
                    saveDetailsSidebarPreference: !0
                })
            }
        },
        420459: (e, t, i) => {
            i.d(t, {
                G4: () => o,
                gu: () => n,
                rs: () => r
            }), i(18107), i(967357);
            var a = () => i(970831);

            function n(e) {
                let t = e ? ? ("editing" === i(358377).default.state.mode ? i(358377).default.state.multiSelection : void 0);
                if (!t) return;
                let n = t.start.store,
                    r = n.getRecordStoreUIRoot(),
                    o = i(521595).n.findNodeFromStore(n),
                    s = (0, i(534012).T)(n),
                    l = null == s ? void 0 : s.getRecordStoreUIParent(),
                    d = (0, i(730994).K3)(r),
                    c = s && s instanceof a().B && s !== r ? s : void 0,
                    u = c ? ? o;
                if (r && r instanceof a().B && u) return {
                    type: "cursor",
                    textSelection: t,
                    currentPage: r,
                    currentBlock: c,
                    origin: u,
                    currentParent: l,
                    scrollerStore: d,
                    isPageTitle: r.id === n.id
                }
            }

            function r() {
                let {
                    stores: e
                } = i(584265).default.state, t = i(358377).default.state, n = "empty" !== t.mode ? t.multiSelection : void 0, r = "empty" !== t.mode ? t.multiSelection.start.store : void 0, o = r ? r.getRecordStoreUIRoot() : void 0;
                if (!(o instanceof a().B)) {
                    let e, t = null == r ? void 0 : r.getRecordStoreUIParent();
                    for (; null != t;) t instanceof a().B && (e = t), t = t.getRecordStoreUIParent();
                    e && (o = e)
                }
                if (n && o && o instanceof a().B) {
                    let t = (0, i(534012).T)(n.end.store),
                        a = null == t ? void 0 : t.getRecordStoreUIParent(),
                        r = (0, i(730994).K3)(o);
                    if (t && a) return {
                        type: "textSelection",
                        stores: e,
                        textSelection: n,
                        currentPage: o,
                        origin: t,
                        endBlock: t,
                        endBlockParent: a,
                        scrollerStore: r
                    }
                }
            }

            function o() {
                if (i(584265).default.state.stores.length > 0) {
                    let e = i(358377).default.state;
                    if ("empty" === e.mode) {
                        let e = function() {
                            if (1 !== i(584265).default.state.stores.length) return;
                            let e = i(584265).default.state.stores[0];
                            if (!(e instanceof a().B)) return;
                            let t = e.getTitleStore();
                            if (t) return {
                                start: {
                                    store: t,
                                    index: 0
                                },
                                end: {
                                    store: t,
                                    index: 0
                                }
                            }
                        }();
                        return e ? n(e) : function() {
                            let {
                                stores: e
                            } = i(584265).default.state, t = e[0], n = e.at(-1), r = t ? t.getRecordStoreUIRoot() : void 0;
                            if (r && r instanceof a().B && n) {
                                let t = (0, i(730994).K3)(r);
                                return {
                                    type: "blockSelection",
                                    stores: e,
                                    currentPage: r,
                                    origin: n,
                                    scrollerStore: t
                                }
                            }
                        }()
                    }
                    return (0, i(971541).k)(e.multiSelection) ? n() : r()
                }
            }
        },
        426458: (e, t, i) => {
            i.d(t, {
                I: () => a
            });

            function a(e) {
                return {
                    highlight: e,
                    bold: e
                }
            }
        },
        432376: (e, t, i) => {
            i.d(t, {
                A: () => r
            });
            var a = () => i(546605);
            class n extends a().Store {
                getInitialState() {
                    return {
                        open: !1,
                        openAnimationCompleted: !0,
                        closeAnimationCompleted: !0
                    }
                }
            }
            let r = n
        },
        445283: (e, t, i) => {
            i.d(t, {
                N: () => a
            });

            function a(e) {
                if ("avatar" === e) return i(616922).eQ;
                if ("xsmall" === e) return 18;
                if ("xsmall_plus" === e) return 24;
                if ("small" === e) return 28;
                if ("small_plus" === e) return 32;
                else if ("medium" === e) return 36;
                else if ("medium_sidebar_button" === e) return 40;
                else if ("medium_plus" === e) return 44;
                else if ("medium_large" === e) return 48;
                else if ("large" === e) return 50;
                else if ("large_plus" === e) return 64;
                else if ("xlarge" === e) return 94;
                else if ("plans" === e) return 20;
                else if ("deep_dive" === e) return 16;
                else if ("upsell_banner" === e) return 74;
                else if ("personalization_modal" === e) return 96;
                else return (0, i(722371).HB)(e)
            }
        },
        448988: (e, t, i) => {
            i.d(t, {
                Wx: () => r,
                fM: () => a,
                sM: () => n
            });
            let a = new(i(815048)).O2("framer-motion", async () => await Promise.all([i.e(49806), i.e(79974), i.e(45414), i.e(37043)]).then(i.bind(i, 301716)));

            function n(e) {
                return e.useAnimation()
            }

            function r(e, ...t) {
                return e.useInView(...t)
            }
        },
        469589: (e, t, i) => {
            i.r(t), i.d(t, {
                STORE_MAX_LIMIT: () => o,
                initializePageVisit: () => s,
                updatePageVisits: () => l
            }), i(898992), i(354520), i(581454);
            var a = () => i(726570),
                n = () => i(226221),
                r = () => i(832375);
            let o = 100;
            async function s(e, t) {
                await i(728372).default.waitUntilRendered();
                let {
                    fromPageRefresh: a,
                    blockStore: o,
                    pageVisitStore: s,
                    timestamp: l,
                    type: u
                } = t, g = e.currentUser.id;
                if (void 0 === g || a) return;
                t.blockStore.id !== s.state.pageId && s.setState({ ...s.getInitialState(),
                    pageId: t.blockStore.id
                });
                let p = (0, i(517013).v3)(o, {
                        table: r().F9f,
                        id: (0, i(665619).$5)({
                            parent_id: o.id,
                            user_id: g
                        }),
                        spaceId: (0, n().e)(o.pointer.spaceId)
                    }),
                    f = (0, i(517013).v3)(o, {
                        table: r().ouC,
                        id: (0, i(665619).$5)({
                            parent_id: o.id,
                            user_id: g
                        }),
                        spaceId: (0, n().e)(o.pointer.spaceId)
                    });
                if (await i(941701).transactionQueue.awaitRecordTransaction({
                        table: r().evP,
                        id: o.id
                    }), await (0, i(966980).hS)(o), !o.canRead() || (0, i(142484).q)(e, o, o.getSpaceStore())) return;
                await p.load(), await f.load();
                let m = p.getKeyStore("visited_at").getValue(),
                    h = f.getKeyStore("exited_at").getValue(),
                    b = await c({
                        environment: e,
                        blockStore: o,
                        spaceId: (0, n().e)(o.pointer.spaceId),
                        timestamp: l,
                        type: u
                    });
                if ("skipped" === b.type || "failed" === b.type) return;
                let v = d({
                    pageVisits: b.data.pageVisits,
                    currentState: s.state,
                    blockStore: o,
                    totalCount: s.state.totalCount,
                    hasMore: void 0
                });
                s.state.pageId === o.id && s.setState({ ...v,
                    lastViewTime: m,
                    lastExitTime: h
                })
            }
            async function l(e, t) {
                let a, r;
                await i(728372).default.waitUntilRendered();
                let s = e.currentUser.id;
                if (void 0 === s) return;
                let {
                    blockStore: l,
                    pageVisitStore: c,
                    incremental: u
                } = t, g = t.limit || 32;
                if (u) {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: n,
                        totalCount: r,
                        hasMore: o,
                        ...l
                    } = c.state, d = Object.entries(l).map(([e, t]) => {
                        if (s === e) return;
                        let i = t.getVisitedAt();
                        if (void 0 !== i) return i + 1
                    });
                    a = (0, i(763230).T9)(d.filter(i(722371).O9))
                }
                let p = await e.api.callApi({
                    eventName: "getPageVisitors",
                    environment: e,
                    data: {
                        block: {
                            id: l.id,
                            spaceId: (0, n().e)(l.pointer.spaceId)
                        },
                        sinceTimestamp: a,
                        limit: g,
                        includeTotalCount: t.includeTotalCount
                    },
                    headers: {
                        recordId: l.id,
                        spaceId: (0, n().e)(l.pointer.spaceId)
                    }
                });
                if ("failed" === p.type) return;
                let f = d({
                    pageVisits: p.data.pageVisits,
                    blockStore: l,
                    currentState: c.state,
                    totalCount: p.data.totalCount,
                    hasMore: p.data.hasMore
                });
                if (Object.keys(f).length <= o) r = f;
                else {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: a,
                        totalCount: n,
                        hasMore: s,
                        ...l
                    } = f, d = (0, i(722371).WP)(l).map(([e, t]) => [e, t.getVisitedAt() ? ? 0]);
                    for (let [t] of (r = {
                            pageId: e,
                            lastViewTime: void 0,
                            lastExitTime: void 0,
                            totalCount: n,
                            hasMore: s
                        }, i(381453).Ul(d, ([, e]) => -e).slice(0, o))) r[t] = f[t]
                }
                c.state.pageId === f.pageId && c.setState(r)
            }

            function d(e) {
                let {
                    blockStore: t,
                    pageVisits: i,
                    currentState: o,
                    totalCount: s,
                    hasMore: l
                } = e, d = { ...o,
                    pageId: t.id,
                    totalCount: s,
                    hasMore: l
                };
                for (let e of i) {
                    let {
                        id: i,
                        user_id: o
                    } = e;
                    o in d || (d[o] = a()._.createChildStore(t, {
                        table: r().F9f,
                        id: i,
                        spaceId: (0, n().e)(t.pointer.spaceId)
                    }))
                }
                return d
            }
            async function c(e) {
                let {
                    environment: t,
                    blockStore: a,
                    spaceId: n,
                    timestamp: o,
                    type: s
                } = e, {
                    id: l
                } = t.currentUser, d = a.id, c = a.getSystemBlockTypeStore().getValue();
                if ((0, i(512845).kR)(c) || a.getParentTable() === r().C0E) return {
                    type: "skipped"
                };
                if (l && "passive" !== s) {
                    var u;
                    null == t || null == (u = t.mobileNative) || u.recordPageVisit(l, {
                        blockId: d,
                        spaceId: n,
                        visitedAt: o
                    }), i(715265).A.recordVisit({
                        id: d,
                        systemBlockType: c,
                        type: i(981324).ig.Default,
                        currentUserId: l
                    })
                }
                return await t.api.callApi({
                    eventName: "recordPageVisit",
                    environment: t,
                    data: {
                        block: {
                            id: d,
                            spaceId: n
                        },
                        timestamp: o,
                        type: s
                    },
                    headers: {
                        recordId: d,
                        spaceId: n
                    }
                })
            }
        },
        476081: (e, t, i) => {
            i.d(t, {
                l: () => a
            });
            async function a(e) {
                var t;
                let {
                    environment: a,
                    blockStore: n,
                    rect: r,
                    property_id: o,
                    from: s
                } = e;
                if (i(332190).A.hasContent()) return void(0, i(58931)._y)({
                    environment: a,
                    reason: "starting_new"
                });
                let l = i(496704).K.getRect(n);
                if (!l) return;
                let d = new(i(478597)).A(a, (0, i(226221).e)(n.pointer.spaceId)),
                    c = l.width,
                    u = l.height,
                    g = l.right - c;
                i(332190).A.setState({
                    open: !0,
                    rect: r || new DOMRect(g, l.top, c, u),
                    type: "block",
                    content: "comment",
                    blockStore: n,
                    blockId: n.id,
                    discussionInputStore: d,
                    property_id: o,
                    lastKnownBlockStore: n,
                    from: s
                }), (0, i(661767).V)({
                    element: null == (t = i(862921).A.UpdateSidebarCommentScroller) ? void 0 : t.getNode(),
                    environment: a,
                    options: {
                        top: 0,
                        behavior: "smooth"
                    }
                }), i(827862).A.setActiveWithSource("text_annotation"), await (0, i(745990).M)({
                    discussionInputStore: d,
                    environment: a
                }), i(65255).j4(a, {
                    from: s
                })
            }
        },
        478597: (e, t, i) => {
            i.d(t, {
                A: () => r
            });
            var a = () => i(546605);
            class n extends a().Store {
                environment;
                spaceId;
                constructor(e, t) {
                    super(), this.environment = e, this.spaceId = t, this.reset()
                }
                getInitialState() {
                    if (!this.environment) return;
                    let e = new(i(870941)).A({
                        name: "DiscussionInputStore",
                        isTemporaryData: !0
                    });
                    return {
                        textStore: new(i(517013)).pm({
                            environment: this.environment,
                            pointer: (0, i(295447).zP)({
                                environment: this.environment,
                                table: i(832375).SNf,
                                spaceId: this.spaceId
                            }),
                            path: ["text"],
                            recordStoreOptions: {
                                inMemoryRecordCache: e
                            }
                        }),
                        localRecordCache: e,
                        files: [],
                        showAttachFileIntro: !1,
                        renderFileAttachIntro: !1
                    }
                }
                isEmpty() {
                    let e = this.state.textStore.getValue();
                    return !e || 0 === e.length
                }
                hasNewLineCharacter() {
                    let e = this.state.textStore.getValue();
                    return i(247438).q4_(e).includes("\n")
                }
            }
            let r = n
        },
        487016: (e, t, i) => {
            i.d(t, {
                Bi: () => s,
                My: () => o,
                ZM: () => d,
                _M: () => l,
                navigateToWorkflowTemplateOnboardingModal: () => c
            }), i(16280), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(672577), i(581454);
            var a = () => i(388507),
                n = () => i(715144),
                r = () => i(717673);

            function o({
                transaction: e,
                collectionStore: t,
                propertyTemplates: i
            }) {
                var s, l;
                let d = (null == (s = t.getParentBlockStore()) ? void 0 : s.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === d.length) return;
                let c = [];
                for (let e of i) {
                    let i = (0, r().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    i && c.push({
                        property: i.id,
                        visible: !(0, a().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== c.length)
                    for (let t of d) {
                        let i = (null == (l = t.getPropertyFormatsStore("table_properties")) ? void 0 : l.getValue()) ? ? [],
                            a = new Set(i.map(e => e.property)),
                            r = c.filter(e => !a.has(e.property));
                        0 !== r.length && (0, n().z)({
                            stores: [t],
                            update: {
                                table_properties: [...i, ...r]
                            },
                            transaction: e
                        })
                    }
            }

            function s({
                transaction: e,
                collectionStore: t,
                propertyTemplates: i
            }) {
                let a = [];
                for (let e of i) {
                    let i = (0, r().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    i && a.push({
                        property: i.id,
                        visible: !0
                    })
                }
                let o = t.getFormat().collection_page_properties ? ? [],
                    l = new Set(o.map(e => e.property)),
                    d = a.filter(e => !l.has(e.property));
                d.length && (0, n().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...o, ...d]
                    },
                    transaction: e
                })
            }

            function l({
                environment: e,
                newPageStore: t,
                result: a
            }) {
                if ("accepted_template" === a.type || "accepted_empty_collection" === a.type) {
                    let n = t.getSpaceId();
                    (0, i(377796).createAndCommit)({
                        environment: e,
                        canUndo: !1,
                        cellTarget: n ? {
                            spaceWithId: n
                        } : void 0,
                        perform: n => {
                            let r = t.getTitleValue();
                            if ((0, i(173157).z)({
                                    store: t,
                                    transaction: n,
                                    data: {
                                        alive: !1
                                    }
                                }), "accepted_empty_collection" === a.type && !(0, i(247438).w9s)(r)) {
                                let o = i(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: a.blockId
                                }).getTitleStore();
                                o && i(41403).yr({
                                    environment: e,
                                    transaction: n,
                                    tokens: r,
                                    index: 0,
                                    store: o
                                })
                            }
                            let o = t.getParentStore();
                            if ((null == o ? void 0 : o.table) === i(682956).ev) {
                                let e = o.getContentIds();
                                (0, i(173157).z)({
                                    store: o,
                                    transaction: n,
                                    data: {
                                        content: e.filter(e => e !== t.id)
                                    }
                                })
                            }
                        },
                        userAction: "clean_up_empty_new_page"
                    })
                }
            }

            function d({
                environment: e,
                userAction: t,
                result: a,
                existingCollectionViewBlockStore: n,
                existingCollectionStore: r
            }) {
                if ("canceled" !== a.type) {
                    if ("accepted_empty_collection" === a.type && r) {
                        let n = r.getKeyStore("name"),
                            o = (0, i(247438).x9d)(a.newCollectionTitle);
                        if (n) {
                            let a = r.getSpaceId();
                            (0, i(377796).createAndCommit)({
                                userAction: t,
                                environment: e,
                                canUndo: !0,
                                cellTarget: a ? {
                                    spaceWithId: a
                                } : void 0,
                                perform: t => i(41403).R9({
                                    environment: e,
                                    store: n,
                                    transaction: t,
                                    value: o
                                })
                            })
                        }
                    }
                    if (n) {
                        var o;
                        let e = null == (o = (0, i(444610).U)(n)) ? void 0 : o.settingsStore;
                        e && (0, i(72762).o)({
                            collectionSettingsStore: e
                        })
                    }
                    if ("accepted_template" === a.type && null != n && n.isCollectionView() && !(null != n && n.hasSingleSourceAndNoLinkedCollections())) {
                        let t = (0, i(444610).U)(n),
                            r = n.getCollectionViewStores().find(e => {
                                var t;
                                return (null == (t = e.getCollectionStore()) ? void 0 : t.id) === a.collectionId
                            });
                        if (!t || !r) return;
                        (0, i(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: r.id,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        })
                    }
                }
            }
            async function c({
                environment: e,
                collectionViewBlockStore: t
            }) {
                let a = t.id;
                if (!t.isDefined()) {
                    let n = await (0, i(389323).$)({
                        environment: e,
                        blockId: a
                    });
                    if (!n) return;
                    e = await i(274662).T({
                        environment: e,
                        newCurrentUserId: n
                    }), t = new(i(970831)).B(e, {
                        table: i(682956).ev,
                        id: a
                    }), await t.load()
                }
                let n = t.getSpaceId();
                if (!n) throw Error("Space ID not found for collection block");
                let r = (0, i(593303).k)(n);
                if (!r) throw Error(`Space view not found for space ID: ${n}`);
                let o = i(728372).AppStoreSidebarSpaceStore.state;
                (null == o ? void 0 : o.id) !== n && await (0, i(269948).y)({
                    environment: e,
                    spaceViewStore: r
                });
                let s = t.getFormat();
                if ((null == s ? void 0 : s.collection_view_sub_type) === "workflow_template_placeholder" && null != s && s.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: a
                    } = await i(708370).t.load(), n = a(s.placeholder_workflow_template_id);
                    if (!n) throw Error(`Collection template "${s.placeholder_workflow_template_id}" not found`);
                    let {
                        onNavigateToPlaceholderWorkflowTemplateBlock: r
                    } = await i(903673).O.load();
                    r({
                        environment: e,
                        collectionTemplate: n,
                        collectionViewBlockStore: t
                    })
                } else(0, i(545586).navigateToBlock)({
                    environment: e,
                    store: t,
                    pageVisitSource: i(254656).y8.WorkflowTemplatesDeeplink
                })
            }
        },
        511101: (e, t, i) => {
            i.d(t, {
                m: () => a
            });
            let a = "notion-modal-underlay"
        },
        512342: (e, t, i) => {
            i.d(t, {
                LB: () => r,
                VT: () => a,
                vr: () => n
            });
            let a = (0, i(109939).YK)({
                    askAI: {
                        defaultMessage: "Ask AI",
                        id: "id.completions.askAI"
                    },
                    genericHelpMeWrite: {
                        defaultMessage: "{filter}",
                        id: "id.completions.genericHelpMeWrite"
                    },
                    summarize: {
                        defaultMessage: "Summarize",
                        id: "id.completions.summarize"
                    },
                    findActionItems: {
                        defaultMessage: "Find action items",
                        id: "id.completions.findActionItems"
                    },
                    autofillSummary: {
                        defaultMessage: "Summary",
                        id: "id.completions.autofillSummary"
                    },
                    autofillTranslate: {
                        defaultMessage: "Translate",
                        id: "id.completions.autofillTranslate"
                    },
                    autofillExtract: {
                        defaultMessage: "Key info",
                        id: "id.completions.autofillExtract"
                    },
                    autofillCustom: {
                        defaultMessage: "Custom autofill",
                        id: "id.completions.autofillCustom"
                    }
                }),
                n = {
                    text: {
                        summarize: {
                            name: a.autofillSummary,
                            svg: i(636434).P
                        },
                        translate: {
                            name: a.autofillTranslate,
                            svg: i(740902).textTranslateIcon
                        },
                        extract: {
                            name: a.autofillExtract,
                            svg: i(774458).n
                        },
                        custom: {
                            name: a.autofillCustom,
                            svg: i(312528).x
                        }
                    },
                    select: {
                        select: {
                            name: a.autofillCustom,
                            svg: i(312528).x
                        }
                    },
                    multi_select: {
                        select: {
                            name: a.autofillCustom,
                            svg: i(312528).x
                        }
                    }
                };

            function r(e) {
                let {
                    origin: t
                } = e;
                if (t instanceof i(970831).B) {
                    let e = i(240414).T.findNodeFromStore(t);
                    return e ? ("table" === t.getType() && (e = e.querySelector(`.${i(962817).rb}.notion-table-block`) ? ? e), e.getBoundingClientRect()) : void 0
                }
                return t instanceof HTMLElement ? t.getBoundingClientRect() : t
            }
        },
        519529: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => a,
                xMarkFillSmallIcon: () => n
            }), i(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.03 3.03 9.94 9.94",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M12.73 4.33a.75.75 0 1 0-1.06-1.06L8 6.94 4.33 3.27a.75.75 0 1 0-1.06 1.06L6.94 8l-3.67 3.67a.75.75 0 1 0 1.06 1.06L8 9.06l3.67 3.67a.75.75 0 0 0 1.06-1.06L9.06 8z"
                    })
                },
                n = (0, i(104509).wt)("xMarkFillSmall", a, "fillSmall")
        },
        551942: (e, t, i) => {
            i.d(t, {
                T: () => r
            });
            var a = i(296540),
                n = i(474848);

            function r({
                tooltipMessage: e,
                children: t,
                placement: o = "bottom"
            }) {
                return e ? (0, n.jsx)(i(51831).m, {
                    placement: o,
                    style: {
                        maxWidth: 240,
                        minWidth: 174
                    },
                    content: () => (0, n.jsx)(i(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "inversePrimary",
                        children: e
                    }),
                    textWrap: !0,
                    children: e => a.cloneElement(t, (0, i(63390).A)(e, t.props))
                }) : t
            }
        },
        556809: (e, t, i) => {
            i.d(t, {
                a: () => o
            });
            var a = i(296540);

            function n(e) {
                i(561599).A.state.openModals.has(e) && (i(561599).A.state.openModals.delete(e), i(561599).A.emit())
            }
            var r = i(474848);

            function o(e) {
                let {
                    open: t,
                    onOpen: o,
                    transitionAppearance: s = "modal"
                } = e, l = (0, a.useRef)();
                void 0 === l.current && (l.current = i(92513).JW());
                let c = l.current,
                    u = (0, i(682985).uB)(e.store, i(432376).A),
                    g = (0, i(682985).K8)(() => u.state.open, [u]),
                    p = (0, a.useRef)(!1),
                    f = function({
                        disableAnimationFromProps: e,
                        isShowingTabBar: t
                    }) {
                        return !!t || e
                    }({
                        disableAnimationFromProps: "none" === s,
                        isShowingTabBar: (0, i(682985).O$)(i(584257).b)
                    }),
                    m = (0, a.useCallback)(() => {
                        if (!p.current && t) u.setState({
                            open: !0,
                            openAnimationCompleted: !1,
                            closeAnimationCompleted: !0
                        }), i(561599).A.state.openModals.has(c) || (i(561599).A.state.openModals.add(c), i(561599).A.emit()), o && o();
                        else p.current && !t && (u.setState({
                            open: !0,
                            openAnimationCompleted: !0,
                            closeAnimationCompleted: !1
                        }), n(c));
                        p.current = t
                    }, [c, u, o, t]);
                return (0, a.useEffect)(() => {
                    m()
                }, [m]), (0, i(637030).X)(() => {
                    n(c)
                }), (0, r.jsx)(i(114596).O, {
                    open: g,
                    zIndex: e.overlayZIndex,
                    origin: e.origin,
                    trapFocus: !0,
                    children: (0, r.jsx)(i(369064).N, {
                        debugName: "Modal",
                        capture: e.open,
                        onEsc: t => {
                            e.onDismiss && e.onDismiss(t)
                        },
                        children: (0, r.jsx)(i(654979).A, {
                            tag: d,
                            visible: e.open,
                            animate: {
                                opacity: 1
                            },
                            initial: {
                                opacity: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            forceCompositeLayer: !0,
                            config: {
                                duration: f ? 0 : void 0
                            },
                            onAnimationEnd: () => {
                                var i, a, n;
                                return i = t, a = u, n = e.onClosed, void(i ? a.setState({
                                    open: !0,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }) : (a.setState({
                                    open: !1,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }), null == n || n()))
                            },
                            open: e.open,
                            keepFocus: e.keepFocus,
                            disableAnimation: f,
                            showCloseIcon: e.showCloseIcon,
                            onDismiss: e.onDismiss,
                            isWaxPaper: e.isWaxPaper,
                            ariaLabel: e.ariaLabel,
                            ariaLabelledBy: e.ariaLabelledBy,
                            ariaDescribedBy: e.ariaDescribedBy,
                            innerStyle: e.innerStyle,
                            children: e.children,
                            preventHideChildrenWhileOpening: e.preventHideChildrenWhileOpening,
                            style: e.style,
                            className: e.className,
                            backgroundStyle: e.backgroundStyle,
                            store: u,
                            isWash: e.isWash,
                            transitionAppearance: s
                        })
                    })
                })
            }

            function s({
                children: e,
                disableAnimation: t,
                preventHideChildrenWhileOpening: a,
                store: n
            }) {
                let o = (0, i(682985).uB)(n, i(432376).A),
                    l = (0, i(682985).K8)(() => o.state.openAnimationCompleted, [o]);
                return t || l || a ? (0, r.jsx)(r.Fragment, {
                    children: e
                }) : null
            }
            let l = a.forwardRef(function({
                    showCloseIcon: e,
                    onDismiss: t,
                    isWaxPaper: a,
                    isWash: n,
                    ariaLabel: o,
                    ariaLabelledBy: l,
                    ariaDescribedBy: d,
                    style: c,
                    children: u,
                    disableAnimation: g,
                    preventHideChildrenWhileOpening: p,
                    store: f
                }, m) {
                    let h = (0, i(682985).uB)(f, i(432376).A),
                        b = (0, i(960253).I)(() => ({
                            dialog: {
                                position: "relative",
                                zIndex: 1,
                                maxHeight: "100%",
                                boxShadow: i(632079).Tj.shadow.outline.scrim,
                                borderRadius: 12,
                                overflow: "hidden",
                                ...c,
                                background: a ? i(632079).Tj.popoverWaxPaperBackground : n ? i(632079).Tj.background.secondary : i(632079).Tj.background.elevated,
                                backdropFilter: a ? "blur(40px)" : "none",
                                WebkitBackdropFilter: a ? "blur(40px)" : "none"
                            }
                        }), [c, a, n]);
                    return (0, r.jsxs)("div", {
                        "aria-modal": !0,
                        role: "dialog",
                        className: "notion-dialog",
                        tabIndex: -1,
                        "aria-label": o,
                        "aria-labelledby": l,
                        "aria-describedby": d,
                        style: b.dialog,
                        ref: m,
                        children: [e ? (0, r.jsx)(i(226512).R, {
                            onClick: t
                        }) : void 0, (0, r.jsx)(s, {
                            children: u,
                            disableAnimation: g,
                            preventHideChildrenWhileOpening: p,
                            store: h
                        })]
                    })
                }),
                d = a.forwardRef(function({
                    open: e,
                    keepFocus: t = !1,
                    disableAnimation: a,
                    showCloseIcon: n,
                    onDismiss: o,
                    isWaxPaper: s,
                    isWash: d,
                    ariaLabel: c,
                    ariaLabelledBy: u,
                    ariaDescribedBy: g,
                    innerStyle: p,
                    children: f,
                    preventHideChildrenWhileOpening: m,
                    style: h,
                    className: b,
                    backgroundStyle: v,
                    transitionAppearance: y,
                    store: x
                }, S) {
                    let M = (0, i(336995).A)(t),
                        k = function(e) {
                            switch (e) {
                                case "none":
                                    return {
                                        animate: {},
                                        initial: {},
                                        exit: {}
                                    };
                                case "modal":
                                    return {
                                        animate: {
                                            scale: 1
                                        },
                                        initial: {
                                            scale: .97
                                        },
                                        exit: {
                                            scale: .97
                                        }
                                    };
                                case "full-screen":
                                    return {
                                        initial: {
                                            translateY: 5,
                                            opacity: 0
                                        },
                                        animate: {
                                            translateY: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        config: {
                                            duration: 650,
                                            timingFunction: "ease-in-out"
                                        }
                                    };
                                default:
                                    (0, i(722371).HB)(e)
                            }
                        }(y),
                        {
                            mobileTopPadding: w,
                            mobileBottomPadding: C
                        } = function() {
                            let {
                                WindowSizeStore: e
                            } = (0, i(533992).v3)();
                            return {
                                mobileTopPadding: (0, i(682985).K8)(() => e.getSafePaddingTopPx(0), [e]),
                                mobileBottomPadding: (0, i(571354).n)()
                            }
                        }();
                    return (0, r.jsxs)("div", {
                        style: {
                            paddingTop: w,
                            paddingBottom: C,
                            width: "100vw",
                            height: "100vh",
                            position: "fixed",
                            top: 0,
                            insetInlineStart: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: e ? "auto" : "none",
                            ...h
                        },
                        ...M,
                        className: b,
                        ref: S,
                        children: [(0, r.jsx)(i(781036).B, {
                            backgroundStyle: v,
                            onDismiss: o
                        }), (0, r.jsx)(i(654979).A, {
                            tag: l,
                            skip: a,
                            visible: e,
                            ...k,
                            forceCompositeLayer: !0,
                            showCloseIcon: n,
                            onDismiss: o,
                            isWaxPaper: s,
                            isWash: d,
                            ariaLabel: c,
                            ariaLabelledBy: u,
                            ariaDescribedBy: g,
                            style: p,
                            children: f,
                            disableAnimation: a,
                            preventHideChildrenWhileOpening: m,
                            store: x
                        })]
                    })
                })
        },
        561599: (e, t, i) => {
            i.d(t, {
                A: () => o
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            var a = () => i(546605);
            class n extends a().Store {
                getInitialState() {
                    return {
                        openModals: new Set
                    }
                }
            }
            let r = new n,
                o = r;
            (0, i(202146).exposeDebugValue)("GlobalModalStore", r)
        },
        588222: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowChevronSingleRightFillSmallIcon: () => n,
                iconDefinition: () => a
            }), i(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "5.54 2.94 5.81 10.11",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M11.13 8.53a.75.75 0 0 0 0-1.06L6.81 3.15a.75.75 0 0 0-1.06 1.06L9.54 8l-3.79 3.79a.75.75 0 0 0 1.06 1.06z"
                    })
                },
                n = (0, i(104509).wt)("arrowChevronSingleRightFillSmall", a, "fillSmall")
        },
        601587: (e, t, i) => {
            function a(e, t) {
                let a = o(t);
                return (0, i(722371).objectKeys)(a).filter(t => e.includes(t)).sort((e, i) => a[e].languageNameInCurrentLanguage.localeCompare(a[i].languageNameInCurrentLanguage, t.locale))
            }
            i.d(t, {
                O8: () => a,
                Vn: () => o,
                W$: () => s,
                tr: () => n,
                vC: () => r
            }), i(898992), i(354520);
            let n = (0, i(109939).YK)({
                    "en-US": {
                        defaultMessage: "English (US)",
                        id: "languagePicker.captions.englishUS"
                    },
                    "de-DE": {
                        defaultMessage: "German",
                        id: "languagePicker.captions.germanDE"
                    },
                    "ko-KR": {
                        defaultMessage: "Korean",
                        id: "languagePicker.captions.koreanKo"
                    },
                    "zh-CN": {
                        defaultMessage: "Simplified Chinese",
                        id: "languagePicker.captions.chineseS"
                    },
                    "zh-TW": {
                        defaultMessage: "Traditional Chinese",
                        id: "languagePicker.captions.chineseT"
                    },
                    "ja-JP": {
                        defaultMessage: "Japanese",
                        id: "languagePicker.captions.japaneseJa"
                    },
                    "es-ES": {
                        defaultMessage: "Spanish (Spain)",
                        id: "languagePicker.captions.spanishEs"
                    },
                    "es-LA": {
                        defaultMessage: "Spanish (Latin America)",
                        id: "languagePicker.captions.spanishLatam"
                    },
                    "pt-BR": {
                        defaultMessage: "Portuguese (Brazil)",
                        id: "languagePicker.captions.portugueseBr"
                    },
                    "fr-FR": {
                        defaultMessage: "French (France)",
                        id: "languagePicker.captions.frenchFr"
                    },
                    "da-DK": {
                        defaultMessage: "Danish",
                        id: "languagePicker.captions.danishDk"
                    },
                    "fi-FI": {
                        defaultMessage: "Finnish",
                        id: "languagePicker.captions.finnishFi"
                    },
                    "nb-NO": {
                        defaultMessage: "Norwegian",
                        id: "languagePicker.captions.norwegianNo"
                    },
                    "nl-NL": {
                        defaultMessage: "Dutch",
                        id: "languagePicker.captions.dutchNl"
                    },
                    "sv-SE": {
                        defaultMessage: "Swedish",
                        id: "languagePicker.captions.swedishSe"
                    },
                    "en-GB": {
                        defaultMessage: "English (UK)",
                        id: "languagePicker.captions.englishGB"
                    },
                    "th-TH": {
                        defaultMessage: "Thai",
                        id: "languagePicker.captions.thaiTh"
                    },
                    "id-ID": {
                        defaultMessage: "Indonesian",
                        id: "languagePicker.captions.indonesianId"
                    },
                    "vi-VN": {
                        defaultMessage: "Vietnamese",
                        id: "languagePicker.captions.vietnameseVn"
                    },
                    "he-IL": {
                        defaultMessage: "Hebrew",
                        id: "languagePicker.captions.hebrewIl"
                    },
                    "ar-SA": {
                        defaultMessage: "Arabic",
                        id: "languagePicker.captions.arabicSa"
                    },
                    pseudo: {
                        defaultMessage: "Pseudolocale",
                        id: "languagePicker.captions.pseudolocale"
                    }
                }),
                r = {
                    "en-US": "English (US)",
                    "de-DE": "Deutsch",
                    "ko-KR": "한국어",
                    "zh-CN": "简体中文",
                    "zh-TW": "繁體中文",
                    "ja-JP": "日本語",
                    "es-ES": "Español (España)",
                    "es-LA": "Español (Latinoamérica)",
                    "pt-BR": "Português (Brasil)",
                    "fr-FR": "Français (France)",
                    "da-DK": "Dansk",
                    "fi-FI": "Suomi",
                    "nb-NO": "Norsk",
                    "nl-NL": "Nederlands",
                    "sv-SE": "Svenska",
                    "en-GB": "English (UK)",
                    "th-TH": "ภาษาไทย",
                    "id-ID": "Bahasa Indonesia",
                    "vi-VN": "Tiếng Việt",
                    "he-IL": "עברית",
                    "ar-SA": "العربية",
                    pseudo: "🤡Pseudolocale🤡"
                };

            function o(e) {
                let t = {};
                for (let a of (0, i(722371).objectKeys)(r)) t[a] = {
                    languageNameInThatLanguage: r[a],
                    languageNameInCurrentLanguage: e.formatMessage(n[a])
                };
                return t
            }

            function s(e) {
                return {
                    en: {
                        name: e.formatMessage({
                            defaultMessage: "English",
                            id: "languagePicker.name.english"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "EN",
                            id: "languagePicker.abbreviation.english"
                        })
                    },
                    de: {
                        name: e.formatMessage({
                            defaultMessage: "German",
                            id: "languagePicker.name.german"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "DE",
                            id: "languagePicker.abbreviation.german"
                        })
                    },
                    ko: {
                        name: e.formatMessage({
                            defaultMessage: "Korean",
                            id: "languagePicker.name.korean"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "KO",
                            id: "languagePicker.abbreviation.korean"
                        })
                    },
                    zh: {
                        name: e.formatMessage({
                            defaultMessage: "Chinese",
                            id: "languagePicker.name.chinese"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "ZH",
                            id: "languagePicker.abbreviation.chinese"
                        })
                    },
                    ja: {
                        name: e.formatMessage({
                            defaultMessage: "Japanese",
                            id: "languagePicker.name.japanese"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "JA",
                            id: "languagePicker.abbreviation.japanese"
                        })
                    },
                    es: {
                        name: e.formatMessage({
                            defaultMessage: "Spanish",
                            id: "languagePicker.name.spanish"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "ES",
                            id: "languagePicker.abbreviation.spanish"
                        })
                    },
                    pt: {
                        name: e.formatMessage({
                            defaultMessage: "Portuguese",
                            id: "languagePicker.name.portuguese"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "PT",
                            id: "languagePicker.abbreviation.portuguese"
                        })
                    },
                    fr: {
                        name: e.formatMessage({
                            defaultMessage: "French",
                            id: "languagePicker.name.french"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "FR",
                            id: "languagePicker.abbreviation.french"
                        })
                    },
                    da: {
                        name: e.formatMessage({
                            defaultMessage: "Danish",
                            id: "languagePicker.name.danish"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "DA",
                            id: "languagePicker.abbreviation.danish"
                        })
                    },
                    fi: {
                        name: e.formatMessage({
                            defaultMessage: "Finnish",
                            id: "languagePicker.name.finnish"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "FI",
                            id: "languagePicker.abbreviation.finnish"
                        })
                    },
                    nb: {
                        name: e.formatMessage({
                            defaultMessage: "Norwegian",
                            id: "languagePicker.name.norwegian"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "NB",
                            id: "languagePicker.abbreviation.norwegian"
                        })
                    },
                    nl: {
                        name: e.formatMessage({
                            defaultMessage: "Dutch",
                            id: "languagePicker.name.dutch"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "NL",
                            id: "languagePicker.abbreviation.dutch"
                        })
                    },
                    sv: {
                        name: e.formatMessage({
                            defaultMessage: "Swedish",
                            id: "languagePicker.name.swedish"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "SV",
                            id: "languagePicker.abbreviation.swedish"
                        })
                    },
                    th: {
                        name: e.formatMessage({
                            defaultMessage: "Thai",
                            id: "languagePicker.name.thai"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "TH",
                            id: "languagePicker.abbreviation.thai"
                        })
                    },
                    vi: {
                        name: e.formatMessage({
                            defaultMessage: "Vietnamese",
                            id: "languagePicker.name.vietnamese"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "VI",
                            id: "languagePicker.abbreviation.vietnamese"
                        })
                    },
                    id: {
                        name: e.formatMessage({
                            defaultMessage: "Indonesian",
                            id: "languagePicker.name.indonesian"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "ID",
                            id: "languagePicker.abbreviation.indonesian"
                        })
                    },
                    he: {
                        name: e.formatMessage({
                            defaultMessage: "Hebrew",
                            id: "languagePicker.name.hebrew"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "HE",
                            id: "languagePicker.abbreviation.hebrew"
                        })
                    },
                    ar: {
                        name: e.formatMessage({
                            defaultMessage: "Arabic",
                            id: "languagePicker.name.arabic"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "AR",
                            id: "languagePicker.abbreviation.arabic"
                        })
                    }
                }
            }
        },
        616922: (e, t, i) => {
            i.d(t, {
                eQ: () => p,
                hJ: () => k,
                Ay: () => f,
                Uo: () => b,
                XE: () => S
            }), i(944114), i(898992), i(823215), i(581454);
            var a = i(296540);
            let n = new(i(815048)).O2("AIMNLiveCollabCallout", async () => await i.e(35920).then(i.bind(i, 966085))),
                r = (0, i(815048)._h)(n, e => e.AIMNLiveCollabCallout);
            var o = () => i(225476);
            let s = function(e) {
                    let t = (0, i(533992).v3)(),
                        n = (0, a.useRef)(),
                        r = (0, i(396805).T)(),
                        o = (0, a.useCallback)(async () => {
                            if (await i(941701).transactionQueue.awaitRecordTransaction(e.blockStore.pointer), !r.current) return;
                            let a = (0, i(568479).Ws)(e.blockStore.id);
                            n.current = i(48091).Ay.addListener({
                                key: a,
                                authorizationToken: void 0,
                                listener: i(381453).nF(() => i(469589).updatePageVisits(t, {
                                    blockStore: e.blockStore,
                                    pageVisitStore: e.pageVisitStore,
                                    incremental: !0,
                                    limit: e.limit
                                }), 1e3),
                                subscriptionId: void 0
                            })
                        }, [t, r, e.blockStore, e.limit, e.pageVisitStore]),
                        s = (0, a.useCallback)(() => {
                            n.current && (i(48091).Ay.removeListener(n.current), n.current = void 0)
                        }, []);
                    return (0, a.useEffect)(() => (o(), s), [o, s]), null
                },
                l = new(i(815048)).O2("AvatarHoverCard", async () => await Promise.all([i.e(21969), i.e(47414), i.e(98821), i.e(77470), i.e(6608)]).then(i.bind(i, 691631))),
                d = (0, i(815048)._h)(l, e => e.AvatarHoverCard),
                c = new(i(815048)).O2("MoreViewersHoverCard", async () => await i.e(46118).then(i.bind(i, 479676))),
                u = (0, i(815048)._h)(c, e => e.MoreViewersHoverCard);
            var g = i(474848);
            let p = 22,
                f = function({
                    pageVisitStore: e,
                    presenceStore: t,
                    rootStore: a,
                    maxUsers: n
                }) {
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(i(315144).a, {
                            rootStore: a
                        }), (0, g.jsx)(k, {
                            rootStore: a,
                            pageVisitStore: e,
                            presenceStore: t,
                            maxUsers: n,
                            isShowingInFeed: !1
                        }), (0, g.jsx)(s, {
                            blockStore: a,
                            pageVisitStore: e,
                            limit: 1 + (n ? ? 5) + 25
                        })]
                    })
                };

            function m(e) {
                return i(381453).Ul(e, e => e.activityTimestampNearestMinuteMs)
            }

            function h(e, t) {
                return i(807825).L.createChildStore(t, {
                    table: i(832375).oo9,
                    id: e
                })
            }

            function b(e) {
                let {
                    environment: t,
                    isShowingTabBar: a,
                    isShowingInFeed: n
                } = e;
                return { ...(0, i(1249).g)({
                        noDrag: t.device.isElectron && !a
                    }),
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    flexDirection: "row-reverse",
                    marginInlineStart: 8,
                    paddingInlineEnd: 6,
                    transform: "translateZ(0)",
                    ...n && {
                        maxHeight: 54,
                        paddingBottom: 12
                    }
                }
            }

            function v({
                hiddenUsers: e,
                hiddenUsersCount: t,
                hasMore: i,
                rootStore: a,
                environment: n
            }) {
                return (0, g.jsx)(u, {
                    trigger: (0, g.jsx)(x, {
                        hiddenUsersCount: t,
                        environment: n,
                        rootStore: a
                    }),
                    viewers: e,
                    totalCount: t,
                    rootStore: a
                })
            }
            let y = {
                paddingInline: 8,
                marginInlineStart: 4,
                marginInlineEnd: -10
            };

            function x({
                hiddenUsersCount: e,
                environment: t,
                rootStore: n
            }) {
                let r = (0, a.useCallback)(() => {
                    (0, i(418001).j)({
                        environment: t,
                        blockStore: n,
                        tabToOpen: i(449473).tF.Updates,
                        from: "more_menu"
                    }), i(449473).B8.setState({ ...i(449473).B8.state,
                        updatesSubTab: i(449473).VE.Analytics
                    })
                }, [t, n]);
                return (0, g.jsx)(i(988022).p, {
                    style: y,
                    size: "sm",
                    shape: "pill",
                    colorPalette: "gray",
                    onClick: r,
                    children: (0, g.jsx)(i(109939).sA, {
                        defaultMessage: "{hiddenUsersCount, plural, one {+{hiddenUsersCount}} other {+{hiddenUsersCount}}}",
                        id: "topbar.presenceIndicator.hiddenUsers.otherCount.message",
                        values: {
                            hiddenUsersCount: e
                        }
                    })
                })
            }

            function S(e, t) {
                return (0, i(960253).I)(() => {
                    let a = {
                            width: p,
                            height: p,
                            borderRadius: p
                        },
                        n = e(i(632079).Tj);
                    return {
                        button: {
                            transition: "all 0.2s ease",
                            transform: "scale(1)"
                        },
                        buttonHovered: {
                            transform: "scale(1.15)",
                            background: "none"
                        },
                        buttonPressed: {
                            transform: "scale(0.9)",
                            background: "none"
                        },
                        uiUserAvatarStyles: { ...a
                        },
                        avatarInnerOutline: { ...a,
                            outlineStyle: "solid",
                            outlineColor: i(632079).Tj.UIUserAvatarInnerOutline,
                            outlineWidth: .5,
                            outlineOffset: -.5
                        },
                        avatarBorder: t ? { ...a,
                            outlineStyle: "solid",
                            outlineColor: n,
                            outlineWidth: 1.5,
                            outlineOffset: -.5
                        } : {},
                        avatarOuterOutline: { ...a,
                            outlineStyle: "solid",
                            outlineColor: t ? i(632079).Tj.background.primary : i(632079).Tj.UIUserAvatarIdleOutline,
                            outlineWidth: .5,
                            outlineOffset: +!!t,
                            backgroundColor: i(632079).Tj.background.primary,
                            marginInlineEnd: -6,
                            position: "relative"
                        },
                        initialColor: {
                            color: t ? n : i(632079).Tj.icon.secondary
                        }
                    }
                }, [e, t])
            }

            function M(e) {
                let {
                    userData: t,
                    rootStore: n,
                    isShowingInFeed: r = !1
                } = e, s = (0, i(533992).v3)(), {
                    userId: l
                } = t, c = (0, o().dp)(s, t), u = (0, i(514214).MF)(l), {
                    userStore: f,
                    showAvatar: m
                } = (0, i(682985).K8)(() => {
                    let e = h(l, n);
                    return {
                        userStore: e,
                        showAvatar: (e.isDefined() || u) && !e.getIsSuspended()
                    }
                }, [l, n, u]), b = (0, i(682985).K8)(() => n.getSpaceStore(), [n]), v = S((0, a.useCallback)(e => (0, i(514214).MF)(l) ? i(632079).Tj.icon.secondary : l === s.currentUser.id ? i(632079).Tj.border.accentPrimary : (0, i(632079).Nq)(l, e), [s.currentUser.id, l]), c);
                if (!m) return null;
                let y = (0, g.jsx)("div", {
                        style: v.avatarOuterOutline,
                        children: (0, g.jsx)("div", {
                            style: v.avatarBorder,
                            children: (0, g.jsx)(i(321753).A, {
                                iconStyle: v.avatarInnerOutline,
                                userStore: u ? i(268033).px : f,
                                style: v.uiUserAvatarStyles,
                                isOffline: !c,
                                size: p,
                                avatarShouldShowShadow: !r,
                                initialOverrideStyle: v.initialColor
                            })
                        })
                    }),
                    x = c && t.blockId ? (0, g.jsx)(i(64960).Ay, {
                        onClick: () => (0, i(250717).B)([t.blockId ? ? ""], !0, s),
                        style: v.button,
                        hoveredStyle: v.buttonHovered,
                        pressedStyle: v.buttonPressed,
                        children: y
                    }) : y;
                if (r || !s.currentUser.id) return x;
                let M = function({
                    userData: e,
                    isPresent: t,
                    currentUserId: a,
                    userId: n,
                    isShowingInFeed: r
                }) {
                    if (a !== n) {
                        if (t) return e.blockId && !r ? (0, g.jsx)(i(109939).sA, {
                            defaultMessage: "Viewing now. Click to see where they are.",
                            id: "topbar.presenceIndicator.viewingNowWithLocation.tooltip"
                        }) : (0, g.jsx)(i(109939).sA, {
                            defaultMessage: "Viewing now",
                            id: "topbar.presenceIndicator.viewingNow.tooltip"
                        });
                        if (e.activityTimestampNearestMinuteMs) return (0, g.jsx)(i(109939).sA, {
                            defaultMessage: "Last viewed {timeFromNow}",
                            id: "topbar.presenceIndicator.lastViewedTime.tooltip",
                            values: {
                                timeFromNow: (0, i(850640).v9)(Math.min(e.activityTimestampNearestMinuteMs, Date.now()), i(849917).locale)
                            }
                        })
                    }
                }({
                    userData: t,
                    isPresent: c,
                    currentUserId: s.currentUser.id,
                    userId: l,
                    isShowingInFeed: r
                });
                return (0, g.jsx)(d, {
                    trigger: x,
                    userStore: f,
                    header: M,
                    spaceStore: b
                })
            }

            function k(e) {
                let {
                    rootStore: t,
                    pageVisitStore: n,
                    presenceStore: s,
                    maxUsers: l,
                    isShowingInFeed: d
                } = e, c = (0, i(533992).v3)(), u = c.currentUser.id, p = (0, i(682985).K8)(() => {
                    let e = c.currentUser.id;
                    if (!e) return;
                    let t = d || (0, o().xm)(s) ? (0, o().PZ)({
                            pageVisitStore: n,
                            presenceStore: s
                        }) : [],
                        i = (null == n ? void 0 : n.state.totalCount) ? ? t.length,
                        a = [],
                        r = [];
                    for (let n of t)
                        if (n.userId === e) {
                            i--;
                            continue
                        } else(0, o().dp)(c, n) ? a.push(n) : r.push(n);
                    let u = [...m(a).reverse(), ...m(r).reverse()],
                        g = (l ? ? 5) - 1;
                    return {
                        visibleUsers: u.slice(0, g),
                        hiddenUsers: u.slice(g),
                        totalCount: i,
                        hasMore: !!(null == n ? void 0 : n.state.hasMore)
                    }
                }, [n, s, c, d, l], {
                    equalityFn: i(381453).n4
                }), {
                    visibleUsers: f,
                    hiddenUsers: y,
                    hiddenUsersCount: x,
                    hasMoreHiddenUsers: S,
                    isEveryUserStoreReady: k
                } = (0, i(682985).K8)(() => {
                    if (!u) return {};
                    let {
                        visibleUsers: e = [],
                        hiddenUsers: a = []
                    } = p ? ? {}, n = [u, ...e.map(e => e.userId), ...a.map(e => e.userId)].map(e => h(e, t));
                    return {
                        visibleUsers: e,
                        hiddenUsers: a,
                        hiddenUsersCount: Number(null == p ? void 0 : p.totalCount) - e.length,
                        hasMoreHiddenUsers: !!(null == p ? void 0 : p.hasMore),
                        isEveryUserStoreReady: n.every(e => e.isReady() || (0, i(514214).MF)(e.id))
                    }
                }, [u, p, t]), w = (0, a.useRef)(null), C = (0, i(682985).K8)(() => i(218744).default.getEligibleGroup({
                    experimentId: "adoption_aimn_live_collab_discovery_nudge_video",
                    disableExposureLogging: !0
                }), []), P = (0, i(682985).O$)(i(584257).b), I = (0, i(314331).n)(t), j = !(0, i(682985).O$)(i(205885).e);
                if (!u || !p || !k || j || u !== t.userId) return null;
                if (0 === f.length && 0 === y.length) return I ? (0, g.jsx)("div", {
                    style: b({
                        environment: c,
                        isShowingTabBar: P,
                        isShowingInFeed: d
                    }),
                    children: (0, g.jsx)(i(346899).h, {
                        enableClickToScroll: !0,
                        rootStore: t
                    })
                }) : null; {
                    let e = [...f];
                    return e.reverse(), (0, g.jsxs)("div", {
                        ref: w,
                        style: b({
                            environment: c,
                            isShowingTabBar: P,
                            isShowingInFeed: d
                        }),
                        children: [x > 0 ? (0, g.jsx)(v, {
                            rootStore: t,
                            hiddenUsers: y,
                            hiddenUsersCount: x,
                            hasMore: S,
                            environment: c
                        }) : void 0, e.map(e => (0, g.jsx)(M, {
                            userData: e,
                            rootStore: t
                        }, e.userId)), d ? void 0 : (0, g.jsxs)(g.Fragment, {
                            children: [(0, g.jsx)(M, {
                                rootStore: t,
                                userData: {
                                    userId: u,
                                    present: !0
                                }
                            }), (0, g.jsx)(i(346899).h, {
                                enableClickToScroll: !0,
                                rootStore: t
                            }), void 0 !== C ? (0, g.jsx)(r, {
                                origin: w
                            }) : void 0]
                        })]
                    })
                }
            }
        },
        617350: (e, t, i) => {
            i.d(t, {
                i: () => a
            });

            function a(e) {
                if (i(775657).electronApi) {
                    var t;
                    null == (t = i(775657).electronApi.dismissToastInAllTabs) || t.call(i(775657).electronApi, e)
                } else i(819652).UW({
                    id: e.id
                })
            }
        },
        669251: (e, t, i) => {
            i.r(t), i.d(t, {
                TranscriptionBlockTitle: () => o
            });
            var a = i(296540),
                n = i(474848);
            let r = (0, i(109939).YK)({
                    loadingPlaceholder: {
                        defaultMessage: "Generating title",
                        id: "TranscriptionBlockTitle.loading.placeholder"
                    }
                }),
                o = a.memo(function() {
                    let {
                        state: e,
                        disabled: t
                    } = (0, i(308240).s)(), o = e.state, s = (0, i(109939).tz)(), l = (0, i(233639).f)(), {
                        announce: d
                    } = (0, i(813367).U)(), c = (0, a.useRef)(l.type);
                    return ((0, a.useEffect)(() => {
                        "summarizing" === l.type && "summarizing" !== c.current && d(s.formatMessage(r.loadingPlaceholder)), c.current = l.type
                    }, [l.type, d, s]), "calendar-event" === l.type) ? (0, n.jsx)(i(392642).o, {
                        calendarEvent: l.event
                    }) : "title" === l.type ? (0, n.jsx)(i(445899).C, {
                        disabled: t || "summarizing" === o
                    }) : "summarizing" === l.type ? (0, n.jsx)(i(861510).N, {
                        animate: !0,
                        styleKey: "titleLgSemibold",
                        text: s.formatMessage(r.loadingPlaceholder)
                    }) : void(0, i(722371).HB)(l)
                })
        },
        682612: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowInCircleUpFillIcon: () => n,
                iconDefinition: () => a
            }), i(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10 17.625a7.625 7.625 0 1 0 0-15.25 7.625 7.625 0 0 0 0 15.25m3.042-8.07a.625.625 0 0 1-.884 0L10.625 8.02v5.466a.625.625 0 1 1-1.25 0V8.021L7.842 9.554a.625.625 0 1 1-.884-.883l2.6-2.6a.625.625 0 0 1 .884 0l2.6 2.6a.625.625 0 0 1 0 .883"
                    })
                },
                n = (0, i(104509).wt)("arrowInCircleUpFill", a, "fill")
        },
        714719: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => a,
                paperPlaneFillIcon: () => n
            }), i(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.07 2.9 15.08 15.08",
                    svg: (0, i(474848).jsx)("path", {
                        d: "m16.37 2.901-.053.019L2.474 8.277A.625.625 0 0 0 2.4 9.408l4.826 2.638zm-8.366 9.922 2.638 4.827a.625.625 0 0 0 1.13-.074L17.13 3.733l.019-.054z"
                    })
                },
                n = (0, i(104509).wt)("paperPlaneFill", a, "fill")
        },
        725187: (e, t, i) => {
            i.d(t, {
                W: () => n
            }), i(296540);
            var a = i(474848);

            function n({
                colorPalette: e,
                colorVariant: t,
                size: o,
                children: s
            }) {
                return (0, a.jsx)(i(111010).D, {
                    style: {
                        display: "contents"
                    },
                    colorPalette: e,
                    colorVariant: t,
                    styleKey: r[o],
                    children: s
                })
            }
            let r = {
                small: "captionMedium",
                default: "bodyMedium",
                large: "bodyMedium"
            }
        },
        726342: (e, t, i) => {
            i.d(t, {
                u: () => a
            });

            function a(e) {
                return e instanceof i(681735).h || e instanceof i(695906).SpaceStore || e instanceof i(970831).B
            }
        },
        740957: (e, t, i) => {
            i.d(t, {
                c: () => r
            }), i(296540);
            var a = i(474848);
            let n = {
                padding: 1
            };

            function r(e) {
                var t;
                let {
                    upsell: r,
                    upgradeStatus: s,
                    handleClick: l,
                    customMessages: d,
                    showPlanName: c,
                    onMouseDown: u,
                    hoverRef: g,
                    featureName: p
                } = e, f = (0, i(109939).tz)(), m = (0, i(156139).e)(s), {
                    productName: h,
                    upgradePhrase: b
                } = (0, i(327506).n)({
                    upsell: r,
                    intl: f,
                    featureName: p,
                    upgradeStatus: s
                }), v = null != d && d[s] ? f.formatMessage(d[s], { ...(0, i(426458).I)(e => (0, a.jsx)(i(725187).W, { ...m.highlightText,
                        size: "small",
                        children: e
                    })),
                    productName: h,
                    upgradePhrase: b,
                    ...d[s].interpolatedValues
                }) : m.label.icon({
                    intl: f,
                    upsell: r,
                    featureName: p
                }), y = c ? e.iconAlignment ? ? "left" : "left", {
                    animationState: x,
                    animationTriggers: S
                } = (0, i(183999).lP)(g);
                return (0, a.jsx)(i(551942).T, {
                    tooltipMessage: g ? void 0 : (null == (t = m.disabledTooltip) ? void 0 : t.call(m, {
                        intl: f,
                        upsell: r,
                        featureName: p
                    })) ? ? v,
                    children: (0, a.jsx)(i(988022).p, { ...g ? {} : S,
                        disabled: !!m.disabledTooltip,
                        hoveredStyle: g ? {
                            background: "unset"
                        } : void 0,
                        size: "xs",
                        style: {
                            gap: 4 * !!c
                        },
                        iconLeading: "left" === y ? { ...(0, i(183999).e4)({
                                icon: m.icon({
                                    upsell: r
                                }),
                                animationState: x
                            }),
                            size: "xs"
                        } : void 0,
                        iconTrailing: "right" === y ? { ...(0, i(183999).e4)({
                                icon: m.icon({
                                    upsell: r
                                }),
                                animationState: x
                            }),
                            size: "xs"
                        } : void 0,
                        onClick: l,
                        onMouseDown: u,
                        children: c && h ? (0, a.jsx)("span", {
                            style: n,
                            children: (0, a.jsx)(i(725187).W, { ...m.highlightText,
                                size: "small",
                                children: "product" === r.type && "ai_credit_pack" === r.product ? f.formatMessage(o.credits) : h
                            })
                        }) : null
                    })
                })
            }
            let o = (0, i(109939).YK)({
                credits: {
                    id: "upgradeIconButton.credits",
                    defaultMessage: "Credits"
                }
            })
        },
        774094: (e, t, i) => {
            i.d(t, {
                p: () => a
            });

            function a(e) {
                let {
                    userId: t,
                    from: a,
                    additionalLogData: n
                } = e, r = i(255482).K.get({
                    userId: t,
                    key: i(347971).XK
                });
                if (r) return i(255482).K.remove({
                    userId: t,
                    key: i(347971).XK
                }), i(773352).log({
                    level: "info",
                    from: a,
                    type: "localStorageMigrationSuccess",
                    data: {
                        miscDataToConvertToString: {
                            userId: t,
                            previousLocalStorageValue: r,
                            ...n
                        }
                    }
                }), r
            }
        },
        781036: (e, t, i) => {
            i.d(t, {
                B: () => r
            });
            var a = i(296540),
                n = i(474848);

            function r({
                backgroundStyle: e,
                onDismiss: t
            }) {
                (0, a.useLayoutEffect)(() => {
                    if ((null == e ? void 0 : e.background) !== "transparent") return requestAnimationFrame(() => {
                        (0, i(960831).j)(!0)
                    }), i(164177).j.setState({
                        open: !0
                    }), () => {
                        (0, i(960831).j)(!1), i(164177).j.setState({
                            open: !1
                        })
                    }
                }, [null == e ? void 0 : e.background]);
                let o = (0, i(960253).I)(() => ({
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
                            background: i(632079).Tj.modalUnderlayBackground,
                            ...t
                        }
                    }({
                        backgroundStyle: e
                    })
                }), [e]);
                return (0, n.jsx)("div", {
                    role: "presentation",
                    style: o.underlay,
                    onClick: e => {
                        t && t(e)
                    },
                    className: i(511101).m
                })
            }
        },
        799236: (e, t, i) => {
            i.d(t, {
                D6: () => o,
                Ud: () => n,
                kD: () => r,
                lR: () => a
            });
            let a = {
                    small: "md",
                    default: "lg",
                    large: "xl"
                },
                n = {
                    small: "xs",
                    default: "sm",
                    large: "sm"
                },
                r = {
                    small: "xs",
                    default: "sm"
                },
                o = {
                    small: "xxs",
                    default: "sm"
                }
        },
        803254: (e, t, i) => {
            i.d(t, {
                F: () => a
            });

            function a() {
                return i(986939).A.isMobile
            }
        },
        824843: (e, t, i) => {
            i.d(t, {
                P: () => n
            }), i(296540);
            var a = i(474848);
            let n = (0, i(839697).p)("presentFillAnimated", {
                viewBox: "2.72 1.1 15.56 16.51",
                svg: e => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("path", {
                        d: "M7.93132 1.82416C6.22047 1.48199 4.62427 2.79056 4.62427 4.5353C4.62427 5.09457 4.79032 5.61505 5.07582 6.05014H4.29912C3.42927 6.05014 2.72412 6.75529 2.72412 7.62514V9.52514C2.72412 10.1359 3.07175 10.6654 3.57994 10.9267H9.37427V6.05643H10.6243V10.9267H16.4183C16.9265 10.6654 17.2741 10.1359 17.2741 9.52514V7.62514C17.2741 6.75529 16.569 6.05014 15.6991 6.05014H14.9228C15.2082 5.61507 15.3743 5.09461 15.3743 4.53538C15.3743 2.78566 13.7613 1.48542 12.0554 1.82661C11.2118 1.99533 10.4924 2.47592 10.0119 3.13467C9.54306 2.48204 8.83618 2.00513 8.00124 1.83815L7.93132 1.82416ZM9.37427 5.03772V6.05013H7.3891C6.55248 6.05013 5.87427 5.37192 5.87427 4.5353C5.87427 3.57937 6.74882 2.86241 7.68618 3.04989L7.7561 3.06387C8.69699 3.25205 9.37427 4.07819 9.37427 5.03772ZM14.1243 4.53538C14.1243 5.36715 13.4539 6.04235 12.624 6.05014H10.6243V5.08677C10.6243 4.10164 11.3289 3.24667 12.3005 3.05234C13.2428 2.86389 14.1243 3.58444 14.1243 4.53538Z",
                        style: {
                            rotate: "animate" === e ? "14deg" : "0deg",
                            transformOrigin: "75% center",
                            transition: `rotate 0.548s linear(
    				0, 0.007, 0.028 1.8%, 0.113 3.9%, 0.613 12.1%, 0.817 16.2%, 0.894,
   					0.954 20.4%, 1, 1.031 25.1%, 1.043 26.4%, 1.051, 1.055, 1.056 31.2%,
    				1.049 34.9%, 1.012 46.3%, 0.999 54.2%, 0.997 61.9%, 1
  				)`
                        }
                    }), (0, a.jsx)("path", {
                        d: "M10.6243 12.1768H16.4133V15.7002C16.4133 16.5701 15.7082 17.2752 14.8383 17.2752H10.6243V12.1768Z"
                    }), (0, a.jsx)("path", {
                        d: "M3.58521 12.1768H9.37427V17.2752H5.1602C4.29036 17.2752 3.58521 16.5701 3.58521 15.7002V12.1768Z"
                    })]
                })
            })
        },
        835043: (e, t, i) => {
            i.d(t, {
                Uj: () => u,
                X_: () => c,
                ht: () => y,
                jS: () => f,
                lB: () => v,
                x0: () => s
            }), i(16280), i(18107), i(967357);
            var a = i(296540),
                n = i(474848);

            function r(e) {
                return new DOMRect(e.left, e.top, e.width, e.height)
            }
            let o = {
                visibility: "hidden"
            };

            function s(e) {
                let {
                    scrollerStore: t,
                    openState: s,
                    children: l,
                    freezePosition: d = !1,
                    positionAbove: c = !1,
                    anchorBlockId: u
                } = e, v = (0, a.useRef)(null), x = (0, a.useRef)(null), [S, M] = (0, a.useState)(void 0), k = (0, a.useRef)(!1), w = (0, a.useRef)(void 0), {
                    scrollerRef: C,
                    scrollerClientRect: P
                } = (0, i(682985).K8)(() => ({
                    scrollerRef: t.state.elementRef,
                    scrollerClientRect: t.state.clientRect
                }), [t]), I = (0, a.useRef)(void 0), j = (0, a.useRef)(void 0), A = (0, a.useRef)(t), T = (0, a.useRef)(!1);
                A.current !== t && (w.current = void 0, j.current = void 0, I.current = void 0, T.current = !0, A.current = t);
                let B = (0, i(682985).K8)(() => "agentCompletionPopup" === s.type && s.didTransitionFromPeekToFullPage, [s]);
                (0, a.useEffect)(() => {
                    if (B) {
                        let e = setTimeout(() => {
                            i(304636).default.setDidTransitionFromPeekToFullPage(!1), T.current = !0
                        }, 300);
                        return () => clearTimeout(e)
                    }
                }, [B]);
                let _ = (0, i(682985).K8)(() => {
                        let e;
                        if (d && !c && w.current && !T.current) return w.current;
                        T.current = !1;
                        let t = "agentCompletionPopup" === s.type;
                        if (B && t && C.current) {
                            let e = s.context.origin;
                            if (e instanceof i(970831).B) {
                                let t = c && u ? u : e.id,
                                    a = C.current.querySelector(`[data-block-id="${t}"]`);
                                if (a) {
                                    let t, n = a.getBoundingClientRect(),
                                        r = C.current.getBoundingClientRect(),
                                        o = C.current.scrollTop;
                                    if (c) {
                                        let e = (null == S ? void 0 : S.height) ? ? 200;
                                        t = Math.max(t = n.top - r.top + o - e - f.bottom, f.top)
                                    } else t = n.bottom - r.top + o + 8;
                                    let s = (0, i(955630).iq)(e.getType() ? ? "text"),
                                        l = r.width > h + f.left + f.right && (s || n.width < b),
                                        d = {
                                            top: t,
                                            left: n.left - r.left,
                                            width: Math.min(Math.max(l ? h : n.width, m), h, r.width - f.left - f.right)
                                        };
                                    return w.current = d, d
                                }
                            }
                            return w.current
                        }
                        let {
                            originRect: a,
                            correspondingOpenState: n
                        } = (() => {
                            let e = (0, i(730994).Q9)(s),
                                t = e ? (0, i(512342).LB)(e) : void 0;
                            if (!t && I.current) {
                                let e = (0, i(730994).Q9)(I.current),
                                    t = e ? (0, i(512342).LB)(e) : void 0;
                                return t || (t = j.current ? r(j.current) : void 0), {
                                    originRect: t,
                                    correspondingOpenState: I.current
                                }
                            }
                            if (!t && j.current && (t = r(j.current)), !t && C.current) {
                                let e = s.context.origin;
                                if (e instanceof i(970831).B) {
                                    let i = C.current.querySelector(`[data-block-id="${e.id}"]`);
                                    i && (t = i.getBoundingClientRect())
                                }
                            }
                            return t && (j.current = r(t)), {
                                originRect: t,
                                correspondingOpenState: s
                            }
                        })();
                        if (!a || !P || !C.current) return w.current;
                        let o = a;
                        if (c && u && C.current) {
                            let e = C.current.querySelector(`[data-block-id="${u}"]`);
                            e && (o = e.getBoundingClientRect())
                        }
                        I.current || (I.current = n), (e => {
                            let {
                                origin: t,
                                type: a
                            } = e.context;
                            switch (a) {
                                case "cursor":
                                    return t instanceof i(970831).B && t.isEmptyEditableBlock();
                                case "blockSelection":
                                case "textSelection":
                                    return !1;
                                default:
                                    (0, i(722371).HB)(a)
                            }
                        })(n) && !c && (o = new DOMRect(o.left, o.top, o.width, 0));
                        let l = C.current.getBoundingClientRect(),
                            g = n.context.origin,
                            p = g instanceof i(970831).B && (0, i(955630).iq)(g.getType() ? ? "text");
                        if (p) {
                            let t = (0, i(512342).LB)({
                                origin: n.context.origin
                            });
                            t && (e = t.left - l.left)
                        }
                        let v = function(e) {
                            let t, {
                                    originRect: a,
                                    scrollerRect: n,
                                    scrollerScrollTop: r,
                                    popupRect: o,
                                    positionAbove: s = !1,
                                    isTableOrigin: l = !1,
                                    tableBlockLeft: d
                                } = e,
                                c = (null == o ? void 0 : o.width) ? ? 0,
                                u = (null == o ? void 0 : o.height) ? ? 0,
                                g = Math.min(Math.max(n.width > h + f.left + f.right && (l || a.width < b) ? h : a.width, m), h, n.width - f.left - f.right);
                            return {
                                top: t = s ? Math.max(t = a.top - n.top + r - (u || 200) - f.bottom, f.top) : a.bottom - n.top + r + f.top,
                                left: c + f.left + f.right > n.width ? f.left : l && void 0 !== d ? d + g > n.width - f.right ? Math.max(f.left, n.width - g - f.right) : d : a.left + c > n.right ? n.width - c - f.right : (0, i(619157).A1)() ? n.right - a.left - c : a.left - n.left,
                                width: g
                            }
                        }({
                            originRect: o,
                            scrollerRect: l,
                            scrollerScrollTop: C.current.scrollTop,
                            popupRect: S,
                            positionAbove: c,
                            isTableOrigin: p,
                            tableBlockLeft: e
                        });
                        return w.current = v, v
                    }, [P, C, S, s, d, c, u, B]),
                    D = y(t),
                    R = (0, i(722371).O9)(_);
                (0, a.useEffect)(() => {
                    if (D && R && v.current) switch (D) {
                        case "Page":
                            {
                                let e = new IntersectionObserver(e => {
                                    let [t] = e;
                                    t.isIntersecting ? i(984583).ZJ.setState({ ...i(984583).ZJ.state,
                                        popupRenderedInPage: !0
                                    }) : i(984583).ZJ.setState({ ...i(984583).ZJ.state,
                                        popupRenderedInPage: {
                                            direction: t.boundingClientRect.top < 0 ? "above" : "below",
                                            writerRef: v
                                        }
                                    })
                                }, {
                                    root: C.current,
                                    threshold: 0
                                });
                                return e.observe(v.current),
                                () => {
                                    e.disconnect(), i(984583).ZJ.setState({ ...i(984583).ZJ.state,
                                        popupRenderedInPage: !1
                                    })
                                }
                            }
                        case "PeekView":
                            {
                                let e = new IntersectionObserver(e => {
                                    let [t] = e;
                                    t.isIntersecting ? i(984583).ZJ.setState({ ...i(984583).ZJ.state,
                                        popupRenderedInPeekView: !0
                                    }) : i(984583).ZJ.setState({ ...i(984583).ZJ.state,
                                        popupRenderedInPeekView: {
                                            direction: t.boundingClientRect.top < 0 ? "above" : "below",
                                            writerRef: v
                                        }
                                    })
                                }, {
                                    root: C.current,
                                    threshold: 0
                                });
                                return e.observe(v.current),
                                () => {
                                    e.disconnect(), i(984583).ZJ.setState({ ...i(984583).ZJ.state,
                                        popupRenderedInPeekView: !1
                                    })
                                }
                            }
                    }
                }, [D, R, C]), (0, a.useEffect)(() => {
                    let e;
                    if (!v.current) throw Error("ref.current is null");
                    let t = new(i(864844)).E;
                    return t.rect.addListener(t => {
                        (0, i(722371).O9)(e) && cancelAnimationFrame(e), e = requestAnimationFrame(() => M(t.state))
                    }), t.observe(v.current), () => {
                        (0, i(722371).O9)(e) && cancelAnimationFrame(e), t.destroy()
                    }
                }, []);
                let N = (0, a.useMemo)(() => "assistantCompletionPopup" === s.type ? "results" === s.stage && s.loading : "agentCompletionPopup" === s.type ? "executing" === s.stage : void(0, i(722371).HB)(s), [s]),
                    {
                        isPhone: V
                    } = (0, i(533992).Y0)(),
                    E = (0, i(533992).v3)(),
                    F = (0, i(682985).K8)(() => !V && i(886556).z.disableWriterAutoFollow(), [V]),
                    L = (0, i(730994).B2)({
                        scrollerRef: C,
                        areWeLoading: N,
                        unpauseAfterMs: 5e3
                    });
                (0, a.useEffect)(() => {
                    null != _ && _.top && !N && v.current && !F && g(v.current, E, {
                        behavior: "smooth",
                        block: "nearest"
                    })
                }, [null == _ ? void 0 : _.top, N, F, E]), (0, a.useEffect)(() => {
                    if (!x.current || !C.current || !N || L || F) return;
                    let e = new IntersectionObserver(e => {
                        var t;
                        (null == (t = e.at(0)) ? void 0 : t.isIntersecting) || !v.current || (0, i(567957).R)({
                            element: v.current,
                            environment: E,
                            options: {
                                behavior: "smooth",
                                block: "end"
                            }
                        })
                    }, {
                        root: C.current,
                        threshold: 1
                    });
                    return e.observe(x.current), () => {
                        e.disconnect()
                    }
                }, [C, N, L, F, E]);
                let O = (0, a.useMemo)(() => "assistantCompletionPopup" === s.type ? "results" === s.stage && !s.loading : "agentCompletionPopup" === s.type ? "results" === s.stage : void(0, i(722371).HB)(s), [s]);
                (0, a.useEffect)(() => {
                    if (O && !F) {
                        g.cancel();
                        let e = setTimeout(() => {
                            v.current && (0, i(567957).R)({
                                element: v.current,
                                environment: E,
                                options: {
                                    behavior: "smooth",
                                    block: v.current.getBoundingClientRect().height > window.innerHeight ? "end" : "nearest"
                                }
                            })
                        }, 150);
                        return () => clearTimeout(e)
                    }
                }, [O, F, E]), (0, a.useEffect)(() => {
                    L && g.cancel()
                }, [L]), (0, a.useEffect)(() => {
                    c && !k.current && v.current && (k.current = !0, p(v.current, E, {
                        behavior: "smooth",
                        block: "nearest"
                    }))
                }, [c, E]);
                let W = (0, i(960253).I)(() => ({
                        wrap: {
                            position: "absolute",
                            width: null == _ ? void 0 : _.width,
                            zIndex: 113,
                            top: 0,
                            insetInlineStart: 0,
                            transform: `translate(${((0,i(619157).A1)()?-1:1)*((null==_?void 0:_.left)??0)}px, ${(null==_?void 0:_.top)??0}px)`,
                            transition: "transform 0.1s",
                            scrollMarginTop: N && !F ? .33 * window.innerHeight : 50,
                            scrollMarginBottom: N ? .33 * window.innerHeight : 50
                        }
                    }), [_, N, F]),
                    U = (0, i(463846).A)(!0);
                return (0, n.jsx)(i(519451).A, {
                    debugName: "PopupPositioner",
                    capture: !0,
                    allowMenuList: !0,
                    allowEsc: !0,
                    children: (0, n.jsxs)("div", {
                        style: W.wrap,
                        ref: v,
                        ...U,
                        children: [_ ? l : void 0, (0, n.jsx)("div", {
                            ref: x,
                            style: o
                        })]
                    })
                })
            }
            let l = {
                button: {
                    cursor: "pointer",
                    backgroundColor: "black",
                    background: i(632079).Tj.background.accentPrimary,
                    color: i(632079).Tj.text.inversePrimary,
                    borderRadius: 36,
                    height: 36,
                    padding: 4,
                    paddingInlineEnd: 10,
                    boxShadow: i(632079).Tj.shadow.outline.lg,
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 6
                }
            };

            function d(e) {
                let {
                    returnToWriterDetails: t
                } = e, r = (0, i(739726).L)(), o = (0, i(533992).v3)(), s = (0, a.useCallback)(e => {
                    t.writerRef.current && (e.stopPropagation(), e.preventDefault(), p(t.writerRef.current, o, {
                        behavior: "smooth",
                        block: "nearest"
                    }))
                }, [t.writerRef, o]), d = (0, a.useCallback)(e => {
                    e.stopPropagation(), e.preventDefault()
                }, []), c = (0, i(960253).I)(() => ({
                    container: {
                        position: "absolute",
                        display: "grid",
                        placeItems: "center",
                        insetInlineStart: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1e6,
                        bottom: r
                    }
                }), [r]), u = (0, a.useMemo)(() => {
                    switch (t.direction) {
                        case "above":
                            return (0, n.jsx)(i(16275).I, {
                                icon: i(334659).arrowStraightUpFillIcon
                            });
                        case "below":
                            return (0, n.jsx)(i(16275).I, {
                                icon: i(996696).arrowStraightDownFillIcon
                            });
                        default:
                            (0, i(722371).HB)(t.direction)
                    }
                }, [t.direction]), g = (0, a.useMemo)(() => {
                    switch (t.direction) {
                        case "above":
                        case "below":
                            return {
                                transition: {
                                    duration: .2,
                                    ease: "easeOut"
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                initial: {
                                    opacity: 0
                                }
                            };
                        default:
                            (0, i(722371).HB)(t.direction)
                    }
                }, [t.direction]), {
                    value: f
                } = (0, i(815048).fJ)(i(448988).fM);
                if (!f) return null;
                let {
                    motion: m
                } = f;
                return (0, n.jsx)("div", {
                    style: c.container,
                    children: (0, n.jsxs)(m.div, {
                        className: i(133121).u,
                        "aria-live": "polite",
                        style: l.button,
                        onClick: s,
                        onMouseDown: d,
                        ...g,
                        children: [(0, n.jsx)(i(971375).x, {
                            variant: "small"
                        }), u]
                    })
                })
            }

            function c(e) {
                let {
                    scrollerKey: t
                } = e, {
                    isPhone: a
                } = (0, i(533992).Y0)(), r = (0, i(682985).K8)(() => !a && i(886556).z.disableWriterAutoFollow(), [a]), o = (0, i(682985).K8)(() => {
                    if (!r || !t) return !1;
                    let e = i(304636).default.state;
                    if ("agentCompletionPopup" === e.type && e.didTransitionFromPeekToFullPage) return !1;
                    switch (t) {
                        case "Page":
                            return i(984583).ZJ.state.popupRenderedInPage;
                        case "PeekView":
                            return i(984583).ZJ.state.popupRenderedInPeekView;
                        default:
                            (0, i(722371).HB)(t)
                    }
                }, [t, r]), {
                    value: s
                } = (0, i(815048).fJ)(i(448988).fM);
                if (!s) return null;
                let {
                    AnimatePresence: l
                } = s;
                return (0, n.jsx)(l, {
                    children: "object" == typeof o ? (0, n.jsx)(d, {
                        returnToWriterDetails: o
                    }) : null
                })
            }
            let u = i(381453).sg((e, t, a) => {
                    if ((0, i(284247).H)({
                            element: t,
                            environment: a,
                            options: {
                                top: e,
                                left: 0,
                                behavior: "smooth"
                            }
                        }), i(862921).A.MenuScroller) {
                        var n;
                        null == (n = i(862921).A.MenuScroller.getNode()) || n.scrollTo({
                            top: 0
                        })
                    }
                }, 60),
                g = i(381453).nF((e, t, a) => {
                    (0, i(567957).R)({
                        element: e,
                        environment: t,
                        options: a
                    })
                }, 200, {
                    leading: !1
                }),
                p = i(381453).sg((e, t, a) => {
                    (0, i(567957).R)({
                        element: e,
                        environment: t,
                        options: a
                    })
                }, 100),
                f = {
                    top: 4,
                    bottom: 6,
                    left: 6,
                    right: 16
                },
                m = 500,
                h = 730,
                b = 600;

            function v(e) {
                var t, a;
                return e === (null == (t = i(862921).A.PageScroller) ? void 0 : t.getStore()) ? i(862921).A.PageScroller : e === (null == (a = i(862921).A.PeekViewScroller) ? void 0 : a.getStore()) ? i(862921).A.PeekViewScroller : void 0
            }

            function y(e) {
                var t, a;
                return e === (null == (t = i(862921).A.PageScroller) ? void 0 : t.getStore()) ? "Page" : e === (null == (a = i(862921).A.PeekViewScroller) ? void 0 : a.getStore()) ? "PeekView" : void 0
            }
        },
        839697: (e, t, i) => {
            i.d(t, {
                p: () => n
            }), i(296540);
            var a = i(474848);

            function n(e, t) {
                let {
                    viewBox: n,
                    svg: r
                } = t, o = n ? ? `0 0 ${i(104509).Ev.default} ${i(104509).Ev.default}`;
                return Object.assign(({
                    style: t,
                    className: n,
                    label: s,
                    animationState: l,
                    skipBaseStyles: d
                }) => {
                    let c = n ? `${e} ${n}` : e;
                    return (0, a.jsx)(i(670375).A, {
                        viewBox: o,
                        className: c,
                        style: t,
                        label: s,
                        skipBaseStyles: d,
                        children: r(l)
                    })
                }, {
                    __iconDefinition: {
                        viewBox: o,
                        svg: r("initial")
                    }
                })
            }
        },
        916612: (e, t, i) => {
            i.d(t, {
                A: () => n
            }), i(296540);
            var a = i(474848);
            let n = function({
                    imageURL: e,
                    imageWidth: t,
                    imageHeight: n,
                    caption: r,
                    title: s,
                    imageContainerStyle: l
                }) {
                    if (!e) return (0, a.jsx)(o, {
                        caption: r,
                        title: s,
                        style: {
                            width: t
                        }
                    }); {
                        let d = (0, i(703003).L)(e);
                        return (0, a.jsxs)("div", {
                            style: {
                                width: t || 200,
                                marginTop: 4,
                                marginBottom: 4
                            },
                            children: [(0, a.jsx)("div", {
                                style: {
                                    width: "100%",
                                    height: n || 100,
                                    borderRadius: 4,
                                    backgroundImage: `url(${d})`,
                                    backgroundSize: "cover",
                                    marginBottom: 6,
                                    ...l
                                }
                            }), (0, a.jsx)(o, {
                                caption: r,
                                title: s
                            })]
                        })
                    }
                },
                r = {
                    style0: {
                        fontWeight: i(699422).Wy.bold,
                        marginBottom: 4
                    },
                    style1: {
                        whiteSpace: "normal",
                        lineHeight: 1.4
                    }
                };

            function o({
                style: e,
                caption: t,
                title: i
            }) {
                return (0, a.jsxs)("div", {
                    style: { ...r.style1,
                        ...e
                    },
                    children: [i ? (0, a.jsx)("header", {
                        style: r.style0,
                        children: i
                    }) : void 0, t]
                })
            }
        },
        930887: (e, t, i) => {
            i.d(t, {
                q: () => n
            }), i(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25m0 4c.345 0 .625.28.625.625v2.375H13a.625.625 0 1 1 0 1.25h-2.375V13a.625.625 0 1 1-1.25 0v-2.375H7a.625.625 0 1 1 0-1.25h2.375V7c0-.345.28-.625.625-.625"
                    })
                },
                n = (0, i(104509).wt)("plusCircleFill", a, "fill")
        },
        960831: (e, t, i) => {
            i.d(t, {
                j: () => a
            });

            function a(e) {
                var t;
                return null === i(775657).electronApi || void 0 === i(775657).electronApi || null == (t = i(775657).electronApi.setOverlay) ? void 0 : t.call(i(775657).electronApi, e)
            }
        },
        971375: (e, t, i) => {
            i.d(t, {
                o: () => r,
                x: () => n
            }), i(296540);
            var a = i(474848);

            function n(e) {
                let {
                    variant: t,
                    imgSource: n,
                    tintColor: o,
                    faceStyle: s,
                    shadowVariant: l = "strong",
                    style: d,
                    ...c
                } = e, u = (0, i(960253).I)(() => {
                    let e = (0, i(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: i(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === l && {
                                boxShadow: e >= 90 ? i(632079).Tj.shadowMDThickerOutline : i(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === l && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? i(632079).Tj.shadowSMThickerOutline : i(632079).Tj.shadow.outline.md
                            },
                            overflow: "hidden",
                            ...d
                        }
                    }
                }, [t, l, d]);
                return (0, a.jsx)("div", { ...c,
                    children: (0, a.jsx)("div", {
                        style: u.faceImgWrap,
                        children: (0, a.jsx)(r, {
                            imgSource: n,
                            variant: t,
                            tintColor: o,
                            style: s
                        })
                    })
                })
            }

            function r(e) {
                let {
                    imgSource: t,
                    variant: n,
                    tintColor: r,
                    style: o,
                    alt: s,
                    ...l
                } = e, d = (0, i(445283).N)(n), c = t ? ? i(200424), u = s ? ? "Notion AI face", g = (0, i(960253).I)(() => ({
                    faceImg: {
                        height: d,
                        width: d,
                        transform: "scaleX(var(--direction, 1))",
                        ...o
                    },
                    tintedFace: {
                        height: d,
                        width: d,
                        transform: "scaleX(var(--direction, 1))",
                        backgroundColor: r,
                        WebkitMaskImage: `url(${c})`,
                        maskImage: `url(${c})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        ...o
                    }
                }), [d, o, r, c]);
                return void 0 !== r ? (0, a.jsx)("div", {
                    style: g.tintedFace,
                    role: "img",
                    "aria-label": u
                }) : (0, a.jsx)("img", { ...l,
                    style: g.faceImg,
                    src: c,
                    alt: u
                })
            }
        },
        984583: (e, t, i) => {
            i.d(t, {
                VY: () => s,
                ZJ: () => r,
                u3: () => o
            });
            var a = () => i(546605);
            class n extends a().Store {
                getInitialState() {
                    return {
                        popupRenderedInPage: !1,
                        popupRenderedInPeekView: !1
                    }
                }
            }
            let r = new n,
                o = new(i(345426)).ComputedStore(() => !1 !== r.state.popupRenderedInPage, {
                    debugName: "AssistantWriterRenderedInPageStore"
                }),
                s = new(i(345426)).ComputedStore(() => !1 !== r.state.popupRenderedInPeekView, {
                    debugName: "AssistantWriterRenderedInPeekViewStore"
                })
        },
        985993: (e, t, i) => {
            i.r(t), i.d(t, {
                StopDictationButton: () => m
            });
            var a = i(296540),
                n = i(440961);
            i(581454);
            var r = i(474848);

            function o(e) {
                let t = (0, i(533992).v3)(),
                    {
                        parent: a
                    } = e,
                    n = (0, i(682985).K8)(() => {
                        let e = (0, i(400986).getDictationLanguageEntries)(),
                            a = (0, i(533096).getPreferredDictationLanguage)(t.currentUser.id);
                        return e.findIndex(([e]) => e === a)
                    }, [t.currentUser.id]),
                    o = [{
                        key: "languages",
                        render: e => (0, r.jsx)(i(844565).A, { ...e,
                            topBorder: 0 !== e.index
                        }),
                        items: (0, i(682985).K8)(() => (0, i(400986).getDictationLanguageEntries)(), []).map(([e, [n]]) => ({
                            key: e,
                            render: e => (0, r.jsx)(i(95582).A, { ...e,
                                title: n
                            }),
                            action: () => {
                                (0, i(364494).X)(t, e), a.close()
                            }
                        }))
                    }];
                return (0, r.jsx)(i(4458).VP, {
                    className: i(828432).OLz,
                    minWidth: 150,
                    maxWidth: "max-content",
                    children: (0, r.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        initialFocus: n,
                        sections: o
                    })
                })
            }
            let s = {
                microphoneText: {
                    marginInlineStart: 12,
                    fontSize: 12,
                    fontWeight: i(699422).Wy.medium,
                    color: i(632079).Tj.text.secondary
                },
                languageText: {
                    fontSize: 14,
                    color: i(632079).Tj.text.primary
                },
                languageSection: {
                    padding: "0px 14px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between"
                },
                line: {
                    width: "100%",
                    height: 1,
                    backgroundColor: i(632079).Tj.icon.tertiary,
                    opacity: .3
                },
                languageButtonStyle: {
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: i(632079).Tj.text.secondary
                },
                helpSection: {
                    padding: "5px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 4,
                    cursor: "pointer"
                },
                helpText: {
                    fontSize: 12,
                    color: i(632079).Tj.text.tertiary
                }
            };

            function l(e) {
                let {
                    languagePopupStore: t
                } = e, n = (0, i(533992).v3)(), l = (0, i(682985).K8)(() => (0, i(533096).getPreferredDictationLanguage)(n.currentUser.id), [n.currentUser.id]);
                (0, a.useEffect)(() => {
                    i(607825).Ay.updateMediaDevices()
                }, []);
                let {
                    value: c
                } = (0, i(815048).fJ)(i(448988).fM);
                if (!c) return null;
                let {
                    motion: u
                } = c;
                return (0, r.jsxs)(i(4458).VP, {
                    paddingBlock: 8,
                    alignItems: "flex-start",
                    width: 300,
                    gap: 8,
                    children: [(0, r.jsxs)(i(4458).VP, {
                        width: "100%",
                        children: [(0, r.jsx)("div", {
                            style: s.microphoneText,
                            children: "Microphone"
                        }), (0, r.jsx)(d, {})]
                    }), (0, r.jsx)("div", {
                        style: s.line
                    }), (0, r.jsxs)("div", {
                        style: s.languageSection,
                        children: [(0, r.jsx)("div", {
                            style: s.languageText,
                            children: "Language"
                        }), (0, r.jsx)(i(656252).A, {
                            buttonPopupStore: t,
                            stopClickPropagation: !0,
                            popupType: i(656252).z.Popup,
                            content: e => (0, r.jsx)(o, {
                                parent: e
                            }),
                            children: e => (0, r.jsxs)(i(988022).p, {
                                style: s.languageButtonStyle,
                                ...e,
                                children: [l, (0, r.jsx)(i(16275).I, {
                                    icon: i(588222).arrowChevronSingleRightFillSmallIcon,
                                    size: "xs",
                                    colorVariant: "tertiary"
                                })]
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        style: s.line
                    }), (0, r.jsxs)(u.div, {
                        style: s.helpSection,
                        onClick: () => window.open("https://www.notion.so/help/audio-dictation", "_blank"),
                        variants: {
                            hover: {
                                opacity: .6
                            },
                            tap: {
                                opacity: 1
                            }
                        },
                        whileHover: "hover",
                        whileTap: "tap",
                        transition: {
                            duration: .2
                        },
                        children: [(0, r.jsx)(i(16275).I, {
                            icon: i(211052).questionMarkCircleSmallIcon,
                            size: "sm",
                            colorVariant: "tertiary"
                        }), (0, r.jsx)("div", {
                            style: s.helpText,
                            children: "Learn about Dictation"
                        })]
                    })]
                })
            }

            function d() {
                let e = (0, i(682985).O$)(i(607825).X8),
                    t = (0, i(682985).K8)(() => i(607825).dc.state.deviceId, []),
                    a = e.findIndex(e => e.deviceId === t),
                    n = [{
                        key: "devices",
                        render: e => (0, r.jsx)(i(844565).A, { ...e,
                            topBorder: 0 !== e.index
                        }),
                        items: e.map(e => ({
                            key: e.deviceId,
                            render: a => (0, r.jsx)(i(95582).A, { ...a,
                                title: e.label,
                                isChecked: e.deviceId === t
                            }),
                            action: () => {
                                i(844561).d.setState(e)
                            }
                        }))
                    }];
                return (0, r.jsx)(i(4458).VP, {
                    width: "100%",
                    children: (0, r.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        initialFocus: a,
                        sections: n
                    })
                })
            }
            let c = document.body,
                u = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 20,
                    width: 20,
                    borderRadius: 20
                },
                g = {
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                p = {
                    top: 6
                };

            function f({
                rootStore: e,
                framerMotion: t
            }) {
                let o = (0, i(533992).WS)(),
                    s = (0, i(314331).n)(e),
                    d = (0, i(533992).v3)(),
                    m = (0, i(682985).K8)(() => i(585823).Ay.state.audioRecorder, []),
                    h = (0, i(682985).uB)(void 0, i(510969).A),
                    b = (0, i(682985).uB)(void 0, i(510969).A),
                    v = (0, i(682985).O$)(i(584257).b),
                    y = (0, a.useCallback)(() => {
                        (0, i(336328).stopDictation)({
                            environment: d,
                            from: "button"
                        })
                    }, [d]),
                    x = (0, a.useCallback)(e => {
                        null == e || e.stopPropagation(), e && (0, i(85520).V)(e) || (b.state.open ? b.reset() : h.state.open ? h.reset() : h.setState({ ...h.state,
                            open: !0
                        }))
                    }, [h, b]),
                    [S, M] = (0, a.useState)(!1),
                    k = (0, a.useCallback)(() => {
                        M(!0)
                    }, []),
                    w = (0, a.useCallback)(() => {
                        M(!1)
                    }, []),
                    [C, P] = (0, a.useState)(!1),
                    I = (0, a.useCallback)(() => {
                        P(!0)
                    }, []),
                    j = (0, a.useCallback)(() => {
                        P(!1)
                    }, []),
                    A = (0, i(960253).e)(),
                    T = (0, i(960253).I)(() => ({
                        dictationButtonStyle: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 25,
                            gap: 2,
                            height: 24,
                            cursor: "pointer",
                            paddingTop: 6,
                            paddingInlineEnd: 2,
                            paddingBottom: 6,
                            paddingInlineStart: 2,
                            backgroundColor: "dark" === A ? "#2D2D2D" : "#F1F0EF",
                            ...(0, i(1249).g)({
                                noDrag: d.device.isElectron && !v
                            })
                        },
                        redSquare: {
                            width: 10,
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: S ? "dark" === A ? i(632079).Tj.palette.red[500] : "rgba(191, 67, 64, 1)" : "dark" === A ? i(632079).Tj.palette.red[700] : i(632079).Tj.palette.red[500]
                        }
                    }), [d.device.isElectron, v, S, A]),
                    B = (0, a.useMemo)(() => (0, r.jsx)(i(16275).I, {
                        icon: i(469102).arrowChevronSingleDownFillSmallIcon,
                        size: "xs",
                        colorVariant: C ? "secondary" : "tertiary"
                    }), [C]),
                    _ = (0, i(682985).K8)(() => {
                        var t;
                        return i(475097).default.isCenterPeekOpen() && (null == (t = i(475097).default.peekTargetStore.state) ? void 0 : t.id) !== (null == e ? void 0 : e.id)
                    }, [null == e ? void 0 : e.id]),
                    D = (0, a.useRef)(null),
                    [R, N] = (0, a.useState)(null);
                (0, a.useEffect)(() => {
                    if (!D.current) return void N(null);
                    let e = D.current.getBoundingClientRect();
                    N({
                        top: e.top + window.scrollY,
                        left: e.left + window.scrollX
                    })
                }, [_]);
                let V = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(i(64960).Ay, {
                            style: g,
                            onClick: y,
                            onMouseEnter: k,
                            onMouseLeave: w,
                            children: (0, r.jsx)("div", {
                                style: T.redSquare
                            })
                        }), e ? (0, r.jsx)(i(650354).t, {
                            rootBlockId: null == e ? void 0 : e.id
                        }) : void 0, (0, r.jsx)(i(64960).Ay, {
                            className: "notion-dictation-button-up-chevron",
                            style: u,
                            onClick: x,
                            onMouseEnter: I,
                            onMouseLeave: j,
                            children: B
                        })]
                    }),
                    E = (0, i(616922).Uo)({
                        environment: d,
                        isShowingTabBar: v,
                        isShowingInFeed: !1
                    }),
                    {
                        motion: F
                    } = t;
                return s && m && !o ? (0, r.jsx)("div", {
                    style: {
                        marginInlineStart: E.marginInlineStart,
                        marginTop: E.marginTop,
                        marginInlineEnd: -1 * (.5 * Number(E.marginInlineStart))
                    },
                    children: (0, r.jsx)(i(656252).A, {
                        buttonPopupStore: h,
                        stopClickPropagation: !0,
                        popupType: i(986939).A.isMobile ? i(656252).z.SlideUp : i(656252).z.Popup,
                        popupWrapStyle: p,
                        content: () => (0, r.jsx)(l, {
                            languagePopupStore: b
                        }),
                        children: () => (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(F.div, {
                                ref: D,
                                className: "notion-dictation-button",
                                style: T.dictationButtonStyle,
                                onClick: y,
                                initial: {
                                    opacity: 0,
                                    x: 15
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: .4
                                },
                                children: V
                            }), _ ? (0, n.createPortal)((0, r.jsx)("div", {
                                className: "notion-dictation-button-duplicate",
                                style: { ...T.dictationButtonStyle,
                                    position: "fixed",
                                    top: (null == R ? void 0 : R.top) || 0,
                                    insetInlineStart: (null == R ? void 0 : R.left) || 0,
                                    zIndex: 1e7
                                },
                                onClick: y,
                                children: V
                            }), c) : void 0]
                        })
                    })
                }) : null
            }

            function m(e) {
                let {
                    value: t
                } = (0, i(815048).fJ)(i(448988).fM);
                return t ? (0, r.jsx)(f, { ...e,
                    framerMotion: t
                }) : null
            }
        },
        996696: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowStraightDownFillIcon: () => n,
                iconDefinition: () => a
            }), i(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.72 2.12 12.56 15.76",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10.875 2.924c0-.441-.392-.799-.875-.799s-.875.358-.875.799v11.964L5.219 10.98a.875.875 0 0 0-1.239 1.24l5.4 5.4a.875.875 0 0 0 1.238 0l5.4-5.4a.875.875 0 1 0-1.238-1.238l-3.906 3.907z"
                    })
                },
                n = (0, i(104509).wt)("arrowStraightDownFill", a, "fill")
        }
    }
]);