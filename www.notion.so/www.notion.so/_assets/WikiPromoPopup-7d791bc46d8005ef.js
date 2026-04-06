"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [1042], {
        9586: (e, i, t) => {
            t.d(i, {
                r: () => o
            });
            let o = t(546605).Store.createValue({
                showConvertTooltip: !1,
                forceShow: !1
            }, {
                name: "WikiPromoStore"
            })
        },
        368891: (e, i, t) => {
            t.d(i, {
                g: () => o
            });

            function o() {
                return (0, t(682985).O$)(t(728372).AppStoreCurrentUserSettingsStore)
            }
        },
        442153: (e, i, t) => {
            t.r(i), t.d(i, {
                WikiPromoPopup: () => p
            });
            var o = t(296540);
            let r = new(t(815048)).O2("FeatureIntroPopup", async () => Promise.all([t.e(39726), t.e(53147)]).then(t.bind(t, 257995))),
                s = (0, t(815048)._h)(r, e => e.FeatureIntroPopup);
            var a = t(474848);
            let n = ["wiki", "위키"],
                l = {
                    image: {
                        width: 320,
                        height: 220
                    },
                    style0: {
                        fontWeight: t(699422).Wy.semibold
                    }
                };

            function p() {
                let e = (0, t(533992).v3)(),
                    i = (0, t(960253).e)(),
                    r = (0, t(682985).K8)(() => t(9586).r.state.pendingWikiBlockStore, []),
                    p = (0, t(718012).V)(),
                    u = (0, t(972740).L)(),
                    d = (0, t(345776).T)(),
                    g = (0, t(368891).g)(),
                    m = (0, t(682985).K8)(() => {
                        if (r) return (0, t(297311).U)(r)
                    }, [r]);
                (0, o.useEffect)(() => {
                    (0, t(202146).exposeDebugValue)("resetWikiPromoPopup", () => {
                        let i = t(728372).AppStoreCurrentUserSettingsStore.state;
                        i && (0, t(377796).createAndCommit)({
                            userAction: "WikiPromoPopup.resetWikiPromoPopup",
                            environment: e,
                            canUndo: !0,
                            cellTarget: "main",
                            perform: e => {
                                (0, t(862759).m)({
                                    userSettingsStore: i,
                                    transaction: e,
                                    data: {
                                        seen_targeted_wiki_prompt: !1
                                    }
                                })
                            }
                        })
                    }), (0, t(202146).exposeDebugValue)("resetWikiOnboarding", () => {
                        let i = t(728372).AppStoreCurrentUserSettingsStore.state;
                        i && (0, t(377796).createAndCommit)({
                            userAction: "WikiPromoPopup.resetWikiOnboarding",
                            environment: e,
                            canUndo: !0,
                            cellTarget: "main",
                            perform: e => {
                                (0, t(862759).m)({
                                    userSettingsStore: i,
                                    transaction: e,
                                    data: {
                                        wiki_onboarding_phase: "unseen"
                                    }
                                })
                            }
                        })
                    })
                }, [e]);
                let c = (0, o.useCallback)(() => {
                        g && ((0, t(377796).createAndCommit)({
                            userAction: "WikiPromoPopup.markSeen",
                            environment: e,
                            canUndo: !0,
                            cellTarget: "main",
                            perform: e => {
                                (0, t(862759).m)({
                                    userSettingsStore: g,
                                    transaction: e,
                                    data: {
                                        seen_targeted_wiki_prompt: !0
                                    }
                                })
                            }
                        }), (0, t(104310).u)({
                            event: {
                                eventName: "wiki_promo_dismiss",
                                eventProperties: {}
                            }
                        }), t(9586).r.setState({
                            showConvertTooltip: !0,
                            forceShow: !1,
                            pendingWikiBlockStore: void 0
                        }))
                    }, [g, e]),
                    k = (0, o.useCallback)(() => {
                        if (!r) return;
                        t(9586).r.reset();
                        let i = r.getSpaceId();
                        (0, t(377796).createAndCommit)({
                            userAction: "WikiPromoPopup.turnIntoWiki",
                            environment: e,
                            canUndo: !0,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            perform: i => {
                                t(774086).hJ({
                                    environment: e,
                                    blocks: [r],
                                    transaction: i,
                                    source: "targeted_promo"
                                })
                            }
                        })
                    }, [r, e]),
                    P = (0, t(682985).K8)(() => t(9586).r.state.forceShow, []),
                    f = !!(0, t(794532).b)({
                        environment: e,
                        spaceId: null == u ? void 0 : u.id
                    }),
                    b = (0, t(682985).K8)(() => {
                        if (t(986939).A.isMobile || !g || !u || !r || !d || !(0, t(608962).S)(r) || (0, t(862085).X9)(e, r) || !f) return !1;
                        let i = g.getSettings();
                        if (!i || void 0 !== i.wiki_onboarding_phase && "unseen" !== i.wiki_onboarding_phase || !r.isTopLevel()) return !1;
                        if (r.isTopLevelTeamPage()) {
                            if (!(null == m ? void 0 : m.canAdmin())) return !1
                        } else if (!(0, t(993077).dp)(u, d).canEditMembership()) return !1;
                        return !!n.some(e => (0, t(247438).q4_)(r.getTitleValue()).toLowerCase().includes(e)) || (!p.getCalloutVisibility("wiki_promo").canShow, !1)
                    }, [f, g, u, e, r, m, d, p]),
                    S = "light" === i ? t(896221).A.images.wikiTargetedPromo.lightMode : t(896221).A.images.wikiTargetedPromo.darkMode,
                    w = (0, o.useMemo)(() => [{
                        imageSrc: S.verificationPng,
                        imageStyles: l.image,
                        title: (0, a.jsx)(t(109939).sA, {
                            defaultMessage: "Verify pages",
                            id: "WikiPromoPopup.verification.title"
                        }),
                        subtitle: (0, a.jsx)(t(109939).sA, {
                            defaultMessage: "Assign <bold>owners</bold> to pages. Owners can verify if a page has accurate, reliable information",
                            id: "WikiPromoPopup.verification.subtitle",
                            values: {
                                bold: e => (0, a.jsx)("span", {
                                    style: l.style0,
                                    children: e
                                })
                            }
                        })
                    }, {
                        imageSrc: S.tagsPng,
                        imageStyles: l.image,
                        title: (0, a.jsx)(t(109939).sA, {
                            defaultMessage: "Organize your pages with tags",
                            id: "WikiPromoPopup.tags.title"
                        }),
                        subtitle: (0, a.jsx)(t(109939).sA, {
                            defaultMessage: "Use tags and other database properties to keep your wiki organized",
                            id: "WikiPromoPopup.tags.subtitle"
                        })
                    }, {
                        imageSrc: S.ownerPng,
                        imageStyles: l.image,
                        title: (0, a.jsx)(t(109939).sA, {
                            defaultMessage: "Sort and filter pages",
                            id: "WikiPromoPopup.owner.title"
                        }),
                        subtitle: (0, a.jsx)(t(109939).sA, {
                            defaultMessage: "Easily find all pages you’re responsible for using database sorting and filtering",
                            id: "WikiPromoPopup.owner.subtitle"
                        })
                    }, {
                        imageSrc: S.upgradePng,
                        imageStyles: l.image,
                        title: (0, a.jsx)(t(109939).sA, {
                            defaultMessage: "Ready to upgrade?",
                            id: "WikiPromoPopup.upgrade.title"
                        }),
                        subtitle: (0, a.jsx)(t(109939).sA, {
                            defaultMessage: "Add verification, owners, and tags to this page (you can undo this later)",
                            id: "WikiPromoPopup.upgrade.subtitle"
                        })
                    }], [S.ownerPng, S.tagsPng, S.upgradePng, S.verificationPng]);
                return (0, a.jsx)(s, {
                    calloutId: "wiki_promo",
                    initialPromo: {
                        icon: t(712802).bookIcon,
                        header: (0, a.jsx)(t(109939).sA, {
                            id: "WikiPromoPopup.header",
                            defaultMessage: "Better wikis in Notion"
                        }),
                        description: (0, a.jsx)(t(109939).sA, {
                            id: "WikiPromoPopup.description",
                            defaultMessage: "You can now use <bold>page verification</bold> and <bold>page owners</bold> to keep information{br}up to date",
                            values: {
                                bold: e => (0, a.jsx)("span", {
                                    style: l.style0,
                                    children: e
                                }),
                                br: (0, a.jsx)("br", {})
                            }
                        })
                    },
                    steps: w,
                    seenFeatureUserSetting: "seen_targeted_wiki_prompt",
                    userSettingsStore: g,
                    allowExternalMouseEvents: !0,
                    onDismiss: c,
                    onTryFeatureClick: k,
                    forceShow: P,
                    isUserEligible: b,
                    onPopupSeen: () => {
                        var e;
                        return e = {
                            source: P ? "page_menu" : "targeted_promo"
                        }, void(0, t(104310).u)({
                            event: {
                                eventName: "wiki_promo_show",
                                eventProperties: e
                            }
                        })
                    },
                    onLearnMore: () => void(0, t(104310).u)({
                        event: {
                            eventName: "wiki_promo_click_learn_more",
                            eventProperties: {}
                        }
                    })
                })
            }
        },
        608962: (e, i, t) => {
            t.d(i, {
                S: () => o
            });

            function o(e) {
                return e.isType("page") && !(0, t(444285).S)(e) && !e.isCollectionView() && !e.isInsideCollection() && !e.isAssociatedCollectionAPageTree() && e.canAdmin()
            }
        }
    }
]);