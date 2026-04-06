"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [67098], {
        567098: (r, e, t) => {
            t.d(e, {
                W: () => Q,
                Z: () => o
            }), t(16280), t(517642), t(658004), t(733853), t(845876), t(432475), t(515024), t(731698), t(898992), t(823215), t(354520), t(430670), t(581454), t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ, t(54353).rQ;
            let l = new Map,
                a = (0, t(109939).YK)({
                    loadingSkills: {
                        id: "defaultSkillPageActions.loadingSkills",
                        defaultMessage: "Loading skills…"
                    }
                });

            function i() {
                var r, e, l;
                let a = null == (r = t(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : r.getSettings(),
                    i = null == a || null == (e = a.ai_prompts) ? void 0 : e.default_skill_pages_locale;
                return i && (0, t(619157).vL)(i) ? i : (null == (l = t(728372).AppStoreCurrentUserSettingsStore.state) || null == (l = l.getSettings()) ? void 0 : l.preferred_locale) ? ? t(599412).q
            }
            async function n(r) {
                let {
                    environment: e,
                    skillType: l,
                    existingContainerPageId: n,
                    silent: Q
                } = r, o = (0, t(328765).S)();
                if (!o) return;
                let s = i();
                Q || t(262058).m({
                    message: a.loadingSkills,
                    targetRecordId: o.id
                });
                try {
                    let r = await e.api.callApi({
                        eventName: "materializeDefaultSkillPages",
                        environment: e,
                        data: {
                            spaceId: o.id,
                            locale: s,
                            existingContainerPageId: n
                        }
                    });
                    if ("failed" === r.type) return void(0, t(222024).t)().error({
                        from: "defaultSkillPageActions",
                        type: "materializeDefaultSkillPageFailed",
                        error: r.error,
                        data: {
                            miscDataToConvertToString: {
                                skillType: l,
                                locale: s
                            }
                        }
                    });
                    let {
                        materializedContainerPageId: a,
                        skillPageIdsByType: i
                    } = r.data;
                    if (!a) return void(0, t(222024).t)().error({
                        from: "defaultSkillPageActions",
                        type: "materializeDefaultSkillPageMissingContainerPageId",
                        error: Error("Missing materialized container page ID from server"),
                        data: {
                            miscDataToConvertToString: {
                                skillType: l,
                                locale: s
                            }
                        }
                    });
                    let Q = i[l];
                    if (!Q) return void(0, t(222024).t)().error({
                        from: "defaultSkillPageActions",
                        type: "materializeDefaultSkillPageMissingMappedSkillPage",
                        error: Error("Missing mapped default skill page from recordIdMap"),
                        data: {
                            miscDataToConvertToString: {
                                skillType: l,
                                locale: s
                            }
                        }
                    });
                    return ! function(r) {
                        var e, l, a, i, n, Q;
                        let {
                            environment: o,
                            skillPageIdsByType: s,
                            containerPageId: d,
                            locale: u
                        } = r, p = t(728372).AppStoreSidebarSpaceViewStore.state;
                        if (!p) return;
                        let _ = p.getSettings(),
                            f = (null == _ || null == (e = _.ai_prompts) ? void 0 : e.default_skill_pages_by_type) ? ? {},
                            c = { ...f,
                                ...s
                            },
                            g = (null == _ || null == (l = _.ai_prompts) ? void 0 : l.rich_text_skills) ? ? [],
                            S = (null == _ || null == (a = _.ai_prompts) ? void 0 : a.disabled_default_rich_text_skills) ? ? [],
                            m = (0, t(13826).AL)({
                                isDailyBriefEnabled: t(218744).default.checkGate({
                                    gateName: "agent_daily_brief"
                                })
                            }),
                            k = m.flatMap(r => {
                                let e = f[r];
                                return e ? [e] : []
                            }),
                            v = m.flatMap(r => {
                                let e = t(13826).r_.includes(r),
                                    l = S.includes(r);
                                if (e ? !l : l) return [];
                                let a = c[r];
                                return a ? [a] : []
                            }),
                            y = g.filter(r => !k.includes(r)),
                            b = [...y, ...v.filter(r => !y.includes(r))],
                            A = null == _ || null == (i = _.ai_prompts) ? void 0 : i.default_skill_pages_locale,
                            P = null == _ || null == (n = _.ai_prompts) ? void 0 : n.skill_container_page_id,
                            D = null == _ || null == (Q = _.ai_prompts) ? void 0 : Q.default_skills_copied_at_ms,
                            w = D ? ? Date.now(),
                            h = g.length === b.length && g.every((r, e) => r === b[e]);
                        A === u && P === d && D === w && h && m.every(r => f[r] === c[r]) || (0, t(377796).createAndCommit)({
                            userAction: "defaultSkillPageActions.setMaterializedDefaultSkillPages",
                            environment: o,
                            canUndo: !0,
                            cellTarget: "main",
                            perform: r => {
                                t(380762).AG(p, r, { ..._,
                                    ai_prompts: { ...(null == _ ? void 0 : _.ai_prompts) ? ? {},
                                        default_skill_pages_by_type : c,
                                        default_skill_pages_locale : A ? ? u,
                                        default_skills_copied_at_ms: w,
                                        skill_container_page_id: d,
                                        rich_text_skills: b
                                    }
                                })
                            }
                        })
                    }({
                        environment: e,
                        skillPageIdsByType: i,
                        containerPageId: a,
                        locale: s
                    }), ! function(r) {
                        var e;
                        let {
                            environment: l,
                            spaceId: a,
                            skillPageIdsByType: i
                        } = r, n = l.currentUser.id, Q = t(771827).x.getPromptsState({
                            userId: n,
                            spaceId: a
                        });
                        if (!Q) return;
                        let o = (null == (e = t(728372).AppStoreSidebarSpaceViewStore.state) || null == (e = e.getSettings()) || null == (e = e.ai_prompts) ? void 0 : e.default_skill_last_used) ? ? {},
                            s = new Map((Q.usage ? ? []).map(r => [r.promptBlockId, r])),
                            d = !1;
                        for (let r of (0, t(13826).AL)({
                                isDailyBriefEnabled: t(218744).default.checkGate({
                                    gateName: "agent_daily_brief"
                                })
                            })) {
                            let e = i[r];
                            if (!e) continue;
                            let t = o[r];
                            if (!t) continue;
                            let l = t.num_usages,
                                a = t.last_used;
                            if (l <= 0 && a <= 0) continue;
                            let n = s.get(e);
                            if (n) {
                                let r = Math.max(n.usageCount, l),
                                    t = Math.max(n.lastUsedTime, a);
                                (r !== n.usageCount || t !== n.lastUsedTime) && (s.set(e, {
                                    promptBlockId: e,
                                    usageCount: r,
                                    lastUsedTime: t
                                }), d = !0);
                                continue
                            }
                            s.set(e, {
                                promptBlockId: e,
                                usageCount: l,
                                lastUsedTime: a
                            }), d = !0
                        }
                        d && t(771827).x.setPromptsState({
                            userId: n,
                            spaceId: a,
                            state: { ...Q,
                                usage: Array.from(s.values())
                            }
                        })
                    }({
                        environment: e,
                        spaceId: o.id,
                        skillPageIdsByType: i
                    }), new(t(970831)).B(e, {
                        table: t(832375).evP,
                        id: Q
                    })
                } finally {
                    Q || t(262058).V()
                }
            }
            async function Q(r) {
                var e, a, Q, o;
                let s, {
                    environment: d,
                    skillType: u,
                    silent: p
                } = r;
                if (!(0, t(722371).Xk)(t(11255).qB, u) && 1) return;
                let _ = function(r) {
                    var e, l;
                    let {
                        skillType: a
                    } = r, i = null == (e = t(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.getSettings();
                    return null == i || null == (l = i.ai_prompts) || null == (l = l.default_skill_pages_by_type) ? void 0 : l[a]
                }({
                    skillType: u
                });
                if (_) {
                    if (function(r) {
                            let {
                                environment: e,
                                blockId: l
                            } = r, a = new(t(970831)).B(e, {
                                table: t(832375).evP,
                                id: l
                            });
                            return a.isDefined() && !a.pathIsDead()
                        }({
                            environment: d,
                            blockId: _
                        })) return new(t(970831)).B(d, {
                        table: t(832375).evP,
                        id: _
                    });
                    (0, t(222024).t)().error({
                        from: "defaultSkillPageActions",
                        type: "defaultSkillPageMappedSkillPageIsStale",
                        error: Error("Mapped default skill page is stale or inaccessible"),
                        data: {
                            miscDataToConvertToString: {
                                skillType: u,
                                existingPageId: _
                            }
                        }
                    })
                }
                let f = null == (s = null == (e = t(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.getSettings()) || null == (a = s.ai_prompts) ? void 0 : a.default_skills_copied_at_ms;
                if ((0, t(13826).BD)({
                        defaultSkillsCopiedAtMs: f
                    })) {
                    if ((0, t(13826).AL)({
                            isDailyBriefEnabled: !1
                        }).includes(u)) return;
                    let r = null == (Q = t(728372).AppStoreSidebarSpaceViewStore.state) || null == (Q = Q.getSettings()) || null == (Q = Q.ai_prompts) ? void 0 : Q.skill_container_page_id;
                    if (!r) return void(0, t(222024).t)().error({
                        from: "defaultSkillPageActions",
                        type: "defaultSkillPageMissingContainerForIncremental",
                        error: Error("Skills materialized but no skill_container_page_id recorded"),
                        data: {
                            miscDataToConvertToString: {
                                skillType: u,
                                copiedAtMs: f
                            }
                        }
                    });
                    let e = `${(null==(o=(0,t(328765).S)())?void 0:o.id)??"unknown"}:${u}:incremental`,
                        a = l.get(e);
                    if (a) return await a;
                    let i = n({
                        environment: d,
                        skillType: u,
                        existingContainerPageId: r,
                        silent: p
                    });
                    l.set(e, i);
                    try {
                        return await i
                    } finally {
                        l.delete(e)
                    }
                }
                let c = (0, t(328765).S)(),
                    g = `${(null==c?void 0:c.id)??"unknown"}:${i()}`,
                    S = l.get(g);
                if (S) return await S;
                let m = n({
                    environment: d,
                    skillType: u,
                    silent: p
                });
                l.set(g, m);
                try {
                    return await m
                } finally {
                    l.delete(g)
                }
            }

            function o(r) {
                let {
                    environment: e
                } = r, l = t(728372).AppStoreSidebarSpaceViewStore.state;
                if (!l) return;
                let a = l.getSettings(),
                    i = null == a ? void 0 : a.ai_prompts,
                    n = (null == i ? void 0 : i.default_skill_pages_by_type) ? ? {},
                    Q = null == i ? void 0 : i.skill_container_page_id,
                    o = new Set;
                for (let r of (Q && o.add(Q), (0, t(13826).AL)({
                        isDailyBriefEnabled: t(218744).default.checkGate({
                            gateName: "agent_daily_brief"
                        })
                    }))) {
                    let e = n[r];
                    e && o.add(e)
                }
                let s = Array.from(o),
                    d = ((null == i ? void 0 : i.rich_text_skills) ? ? []).filter(r => !o.has(r));
                (0, t(377796).createAndCommit)({
                    userAction: "defaultSkillPageActions.resetMaterializedDefaultSkillPages",
                    environment: e,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: r => {
                        t(380762).AG(l, r, { ...a,
                            ai_prompts: { ...i ? ? {},
                                default_skill_pages_by_type : {},
                                default_skill_pages_locale : void 0,
                                default_skills_copied_at_ms: void 0,
                                skill_container_page_id: void 0,
                                disabled_default_rich_text_skills: [],
                                rich_text_skills: d
                            }
                        })
                    }
                });
                let u = (0, t(328765).S)();
                u && 0 !== s.length && e.api.callApi({
                    eventName: "deleteContentRecords",
                    environment: e,
                    data: {
                        records: s.map(r => ({
                            table: t(832375).evP,
                            id: r,
                            spaceId: u.id
                        })),
                        permanentlyDelete: !1
                    }
                }).then(r => {
                    "failed" === r.type && (0, t(222024).t)().error({
                        from: "defaultSkillPageActions",
                        type: "resetMaterializedDefaultSkillPagesDeleteFailed",
                        error: r.error,
                        data: {
                            miscDataToConvertToString: {
                                pageIdsToDelete: s,
                                spaceId: u.id
                            }
                        }
                    })
                })
            }
        }
    }
]);