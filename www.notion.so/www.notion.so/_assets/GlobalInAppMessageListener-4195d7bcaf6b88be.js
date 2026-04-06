"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [94869], {
        386856: (e, t, s) => {
            s.r(t), s.d(t, {
                GlobalInAppMessageListener: () => u
            });
            var a = s(296540),
                i = () => s(734389);
            async function n(e) {
                let t = await s(497345).f.load();
                await t.showStartupMessagesImpl(e)
            }
            var l = () => s(292609),
                o = () => s(462391),
                r = () => s(696190);

            function u() {
                let e, t, u, m, c, d, p, f, g;
                return t = (e = (0, s(533992).v3)()).currentUser.id, u = (0, s(723240).r)(), m = (0, s(668745).ZC)(t), c = (0, s(668745).ZC)(u), (0, a.useEffect)(() => {
                    t && u && (m && c && (m !== t || c !== u) && r().default.reset(), n(e))
                }, [t, u, e]), d = (0, s(682985).K8)(() => {
                    var e;
                    return null == (e = s(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettingsStore()) ? void 0 : e.v("callout_dismissal_timestamps")
                }, [], {
                    equalityFn: s(795676).k
                }), (0, a.useEffect)(() => {
                    d && function(e) {
                        for (let t of e ? ? []) {
                            if (!t.name) continue;
                            let e = (0, o().h2)(t.name);
                            e && "once_per_user" === l().lU[e].dismissal_type && r().default.isVisible(e) && !r().default.isForced(e) && r().default.removeMessage(e)
                        }
                    }(d)
                }, [d]), p = (0, s(682985).K8)(() => {
                    var e;
                    return null == (e = s(728372).AppStoreSidebarSpaceViewStore.state) || null == (e = e.getSettingsStore()) ? void 0 : e.v("callout_dismissal_timestamps")
                }, [], {
                    equalityFn: s(795676).k
                }), (0, a.useEffect)(() => {
                    p && function(e) {
                        for (let t of e ? ? []) {
                            if (!t.name) continue;
                            let e = (0, o().h2)(t.name);
                            e && "once_per_space" === l().lU[e].dismissal_type && r().default.isVisible(e) && !r().default.isForced(e) && r().default.removeMessage(e)
                        }
                    }(p)
                }, [p]), f = (0, s(533992).v3)(), g = (0, s(682985).K8)(() => r().default.emptyMessages(), []), (0, a.useEffect)(() => {
                    for (let e of g)(0, i().O)(f, e)
                }, [f, g]), null
            }
        },
        466290: (e, t, s) => {
            s.d(t, {
                K: () => i
            });
            var a = () => s(906745);

            function i(e, t) {
                s(696190).default.isVisible(t.key) && (s(696190).default.removeMessage(t.key), s(986939).A.isAdminMode || (! function(e, t) {
                    let i = s(728372).AppStoreCurrentUserSettingsStore.state,
                        n = null == i ? void 0 : i.getSettings();
                    if (!n || !i) return;
                    let l = new(s(543346)).GO(n.callout_placement_exposures);
                    for (let e of t) l.add(e, a().DateTime.now().toMillis());
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
            function a({
                environment: e,
                message: t,
                overwrite: i = !1
            }) {
                let n = s(728372).AppStoreCurrentUserSettingsStore.state,
                    l = null == n ? void 0 : n.getSettings();
                if (!n || !l) return;
                let o = new Map((l.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                (!o.has(t.key) || i) && o.set(t.key, {
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
                                callout_dismissal_timestamps: Array.from(o.values())
                            }
                        })
                    }
                })
            }

            function i(e, t) {
                let i = (0, s(125542).K0)(t);
                "once_per_user" === i ? a({
                    environment: e,
                    message: t
                }) : "once_per_space" === i && function({
                    environment: e,
                    message: t,
                    overwrite: a = !1
                }) {
                    let i = s(728372).AppStoreSidebarSpaceViewStore.state,
                        n = null == i ? void 0 : i.getSettings();
                    if (!i || !n) return;
                    let l = i.getSpaceId(),
                        o = new Map((n.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                    (!o.has(t.key) || a) && o.set(t.key, {
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
                                callout_dismissal_timestamps: Array.from(o.values())
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
                H: () => a
            }), s(581454)
        },
        734389: (e, t, s) => {
            s.d(t, {
                O: () => a
            });

            function a(e, t) {
                (0, s(466290).K)(e, t)
            }
        }
    }
]);