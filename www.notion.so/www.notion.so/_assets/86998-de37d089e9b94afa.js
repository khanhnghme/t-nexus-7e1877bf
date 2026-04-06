"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [72181, 73686, 86998], {
        11395: (e, t, i) => {
            i.d(t, {
                $: () => r,
                N: () => n
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(430670), i(581454);
            var o = () => i(388507),
                a = () => i(932292);

            function n(e, t) {
                let n, r = (0, i(717673).Xg)(e, t),
                    l = new Set(null != (n = t.getParentBlockStore()) && n.isDefined() ? (null == n ? void 0 : n.getCollectionViewStores().map(e => e.getName()).filter(i(722371).O9)) ? ? [] : []);
                return (function(e) {
                    let t = new Set(e.map(e => e.templateId)),
                        i = [];
                    for (let r of e) {
                        var n;
                        i.push(...("compound" === (n = r).type || "collection" === n.type ? n.value.templateItems.filter(e => "optionalDefaultOn" === e.optionality || "optionalDefaultOff" === e.optionality).map(e => e.pointer) : []).filter(e => !t.has(e)).map(e => a().globalWorkflowTemplates.fromId(e)).filter(o().bz).filter(e => !(0, o().Sz)(e)))
                    }
                    return i
                })(r).filter(e => !(0, o().Sz)(e) && ("collection_view" !== e.type || !l.has(e.value.name ? ? "")))
            }

            function r({
                persona: e,
                parentStore: t
            }) {
                let o = e ? (0, i(582881).Qf)({
                        persona: e
                    }) : [],
                    n = a().globalWorkflowTemplates.allOfType({
                        templateIds: o ? ? [],
                        type: "collection"
                    });
                return i(381453).hS(function({
                    collectionTemplates: e,
                    parentStore: t
                }) {
                    if (!t || (0, i(966980).Yu)(t)) return e;
                    let o = (0, i(966980).$R)(t) ? t.getTeamPageStores() : t.getContentStores(),
                        a = new Set((0, i(381453).oE)(o.flatMap(e => e.getOwnedAndLinkedCollectionStores().map(e => e.getWorkflowTemplateId()) ? ? []))),
                        n = [],
                        r = [];
                    for (let t of e) a.has(t.templateId) ? n.push(t) : r.push(t);
                    return [...r, ...n]
                }({
                    collectionTemplates: [...n, ...a().globalWorkflowTemplates.allOfType({
                        templateIds: (0, i(582881).dj)(),
                        type: "collection"
                    })],
                    parentStore: t
                }), e => e.templateId)
            }
        },
        265035: (e, t, i) => {
            i.r(t), i.d(t, {
                SCROLLING_SQUIGGLE_DEFAULTS: () => n,
                ScrollingSquiggle: () => r
            });
            var o = i(296540),
                a = i(474848);
            let n = {
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

            function r(e) {
                let {
                    style: t,
                    width: r = n.width,
                    height: l = n.height,
                    tempo: s = n.tempo,
                    minLoopSize: d = n.minLoopSize,
                    maxLoopSize: p = n.maxLoopSize,
                    acceleration: c = n.acceleration,
                    tailLength: u = n.tailLength,
                    strokeWidth: g = n.strokeWidth,
                    strokeColor: m,
                    loopSpacing: y = n.loopSpacing,
                    modulationSpeed: f = n.modulationSpeed,
                    modulationPhaseOffset: h = n.modulationPhaseOffset,
                    tempoModulation: b = n.tempoModulation,
                    accelerationModulation: S = n.accelerationModulation
                } = e, v = (0, o.useRef)(null), w = (0, o.useRef)(), T = (0, o.useRef)(!0), x = (0, i(960253).e)(), _ = (0, i(632079).O4)({
                    theme: x
                }), k = (0, o.useMemo)(() => {
                    let e = l / 2,
                        t = r / 200 * 8 * y,
                        i = Math.min(d / 100 * l, .45 * l),
                        o = Math.min(p / 100 * l, .45 * l),
                        a = Math.max(3, u * Math.min(1, r / 200)),
                        n = .95 * r - o;
                    return {
                        W: r,
                        H: l,
                        BASE_Y: e,
                        FRAMES_PER_RAD: s,
                        SUB_STEPS: 3,
                        DX_PER_RAD: t,
                        ACC_FACTOR: c,
                        MIN_R: i,
                        MAX_R: o,
                        R_BASE: (i + o) / 2,
                        R_VAR: (o - i) / 2,
                        R_FREQ1: .2,
                        R_FREQ2: .1,
                        TAIL_RADS: a,
                        PURGE_PAD_R: 5,
                        START_OFFSET: n,
                        D_THETA_PER_SECOND: Math.PI / s * 60
                    }
                }, [r, l, s, d, p, c, u, y]), M = (0, o.useMemo)(() => ({
                    modulationSpeed: f,
                    modulationPhaseOffset: h,
                    tempoModulation: b,
                    accelerationModulation: S
                }), [f, h, b, S]);
                return (0, o.useEffect)(() => {
                    let e = () => {
                        T.current = !document.hidden
                    };
                    return document.addEventListener("visibilitychange", e), () => {
                        document.removeEventListener("visibilitychange", e)
                    }
                }, []), (0, o.useEffect)(() => {
                    let e = v.current;
                    if (!e) return;
                    let t = e.getContext("2d", {
                        willReadFrequently: !1,
                        alpha: !0,
                        desynchronized: !0
                    });
                    if (!t) return;
                    e.width = 2 * r, e.height = 2 * l, t.scale(2, 2), t.imageSmoothingEnabled = !1;
                    let {
                        W: i,
                        H: o,
                        BASE_Y: a,
                        SUB_STEPS: n,
                        DX_PER_RAD: d,
                        ACC_FACTOR: p,
                        MIN_R: c,
                        R_BASE: u,
                        R_VAR: y,
                        R_FREQ1: f,
                        R_FREQ2: h,
                        TAIL_RADS: b,
                        PURGE_PAD_R: S,
                        START_OFFSET: x
                    } = k;
                    t.lineCap = "round", t.lineJoin = "round", t.strokeStyle = m || _.text.primary, t.lineWidth = g;
                    let A = 0,
                        I = performance.now(),
                        P = performance.now(),
                        C = Array(1e3),
                        j = 0,
                        E = 0,
                        D = 0,
                        N = 0,
                        R = 0;
                    return w.current = requestAnimationFrame(() => (function e(t) {
                        let r, l = performance.now(),
                            g = Math.min((l - I) / 1e3, .1);
                        I = l;
                        let m = Math.sin(2 * Math.PI * M.modulationSpeed * ((l - P) / 1e3) + M.modulationPhaseOffset),
                            v = s + M.tempoModulation * m,
                            _ = p + M.accelerationModulation * m,
                            k = N > 5 ? Math.max(1, Math.floor(n / 2)) : n,
                            O = Math.PI / Math.max(1, v) * 60 * g * (1 + -(_ * Math.sin(A))) / k;
                        for (let e = 0; e < k; e++) A += O, C[E] = function(e) {
                            let t = Math.max(c, u + y * (.6 * Math.sin(f * e) + .4 * Math.sin(h * e + 1.1)));
                            return {
                                x: e * d + t * Math.cos(e),
                                y: a - t * Math.sin(e),
                                t: e
                            }
                        }(A), E = (E + 1) % 1e3, D < 1e3 ? D++ : j = (j + 1) % 1e3;
                        let W = A - b;
                        for (; D > 0 && C[j].t < W - S;) j = (j + 1) % 1e3, D--;
                        let L = A * d - x,
                            K = L - R;
                        R = L, Math.abs(K) < i && (K > 0 ? t.clearRect(0, 0, Math.ceil(K) + 10, o) : K < 0 && t.clearRect(i + Math.floor(K) - 10, 0, -K + 10, o)), t.clearRect(0, 0, i, o), t.save(), t.translate(-L, 0);
                        let F = j,
                            z = 0;
                        for (; z < D && C[F].t < W;) F = (F + 1) % 1e3, z++;
                        if (0 === z || 0 === D) r = C[j];
                        else if (z < D) {
                            let e = C[(F - 1 + 1e3) % 1e3],
                                t = C[F],
                                i = (W - e.t) / (t.t - e.t);
                            r = {
                                x: e.x + (t.x - e.x) * i,
                                y: e.y + (t.y - e.y) * i
                            }
                        }
                        if (r && D > 0) {
                            t.beginPath(), t.moveTo(r.x, r.y);
                            let e = F;
                            for (let i = z; i < D; i++) t.lineTo(C[e].x, C[e].y), e = (e + 1) % 1e3;
                            t.stroke()
                        }
                        t.restore(), performance.now() - l > 16 ? N++ : N > 0 && (N = Math.max(0, N - .1)), T.current ? w.current = requestAnimationFrame(() => e(t)) : setTimeout(() => {
                            T.current && (w.current = requestAnimationFrame(() => e(t)))
                        }, 100)
                    })(t)), () => {
                        w.current && cancelAnimationFrame(w.current)
                    }
                }, [k, M, r, l, g, m, _.text.primary, s]), (0, a.jsx)("canvas", {
                    ref: v,
                    style: {
                        width: r,
                        height: l,
                        display: "block",
                        ...t
                    }
                })
            }
        },
        271957: (e, t, i) => {
            i.d(t, {
                showDatabaseAgentSetupModal: () => a
            });
            var o = i(296540);
            async function a(e) {
                let {
                    collectionId: t,
                    collectionContextStore: a,
                    propertyId: n,
                    workflowId: r,
                    isLite: l
                } = e, {
                    DatabaseAgentSetupModalFlow: s
                } = await Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(26361), i.e(16471), i.e(37353), i.e(62475), i.e(3151), i.e(18965), i.e(98629), i.e(11082), i.e(37571), i.e(29151), i.e(51383), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(17250), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(55940), i.e(12560), i.e(88268), i.e(12001), i.e(40198), i.e(39726), i.e(31243), i.e(42534), i.e(86662), i.e(14886), i.e(39225), i.e(87971), i.e(6212), i.e(2626), i.e(64453), i.e(4779), i.e(29663), i.e(28482), i.e(76361), i.e(14369), i.e(74145), i.e(56308), i.e(48860), i.e(75136), i.e(98175), i.e(18682), i.e(55067), i.e(83490), i.e(58360), i.e(33162), i.e(63793), i.e(18881), i.e(12690), i.e(62731), i.e(68583), i.e(41049), i.e(60262), i.e(72805), i.e(18416), i.e(35602), i.e(90735), i.e(12024), i.e(30532), i.e(69684), i.e(81603), i.e(49297), i.e(3723), i.e(91100), i.e(78288), i.e(68719), i.e(40716), i.e(4287), i.e(55755), i.e(19812), i.e(18378), i.e(95969), i.e(65594), i.e(38814), i.e(48328), i.e(91636), i.e(56703), i.e(63821), i.e(72933), i.e(5406), i.e(28372), i.e(29087), i.e(85129), i.e(7912), i.e(64476), i.e(48617), i.e(2832), i.e(77575), i.e(74063), i.e(14401), i.e(64748), i.e(37461), i.e(35635), i.e(86730)]).then(i.bind(i, 181510));
                return await i(280996).T.showAsyncModal(e => o.createElement(i(713311).RI, {
                    value: a
                }, o.createElement(s, {
                    collectionId: t,
                    collectionContextStore: a,
                    propertyId: n,
                    workflowId: r,
                    initialIsLite: l,
                    onClose: e.onDismiss
                })))
            }
        },
        386998: (e, t, i) => {
            i.d(t, {
                il: () => u,
                DZ: () => U,
                xv: () => B,
                Re: () => f,
                bj: () => A,
                D1: () => k,
                b9: () => M,
                f1: () => I,
                p1: () => w,
                bi: () => x,
                Dm: () => _,
                D9: () => y,
                ds: () => m
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(823215), i(354520), i(672577), i(430670), i(803949), i(581454), i(737550);
            var o = i(296540),
                a = () => i(425985);
            let n = "end_to_end",
                r = [{
                    skill: i(288268).c4,
                    isLite: !0,
                    getDefaultInstructions: () => {
                        let e = i(288268).c4.getInstructions({
                            parameterValues: {},
                            selection: void 0,
                            namespace: n
                        });
                        return "string" == typeof e ? e : void 0
                    },
                    propertyNameHints: "Summary, Abstract, Overview, TLDR, Notes, Description, Digest, Synopsis, Key Takeaways"
                }, {
                    skill: i(288268).dO,
                    isLite: !0,
                    getDefaultInstructions: () => {
                        let e = i(288268).dO.getInstructions({
                            parameterValues: {
                                language: "english"
                            },
                            selection: void 0,
                            namespace: n
                        });
                        return "string" == typeof e ? e : void 0
                    },
                    propertyNameHints: "Translation, Translated Text, French Version, Spanish Summary, Japanese Translation"
                }];
            var l = () => i(49361);

            function s(e) {
                return "variants" in e && (0, i(8148).ec)(e.collectionUri)
            }
            var d = () => i(607689);
            let p = [l().ob, l().Hd, l().e1, l().io, l().k0, l().zG];
            i(16280);
            var c = i(474848);
            let u = 4,
                g = {
                    aiIconStyle: {
                        fill: i(632079).Tj.purple.icon.accentPrimary
                    },
                    defaultIconStyle: {
                        fill: i(632079).Tj.icon.primary
                    }
                };

            function m({
                collectionContextStore: e,
                propertySchema: t,
                disableSuggestions: a,
                hasAiEnabled: n,
                showAiSuggestions: l,
                getFilteredSuggestedItemKeys: d,
                onAccept: p,
                iconStyle: u,
                buttonStyle: y,
                onAfterAccept: f,
                nameInput: h
            }) {
                let b, S = (0, i(533992).v3)(),
                    v = (0, i(960253).e)(),
                    w = (0, i(109939).tz)(),
                    T = (0, i(682985).K8)(() => {
                        var t;
                        let o = null == (t = e.collectionStore()) || null == (t = t.getFormat()) ? void 0 : t.app_config_uri;
                        return o ? (0, i(765629).l)((0, i(402276).appConfigs)(), o) : void 0
                    }, [e]),
                    x = (0, i(682985).K8)(() => e.collectionStore(), [e]);
                (0, i(874309).b)(x);
                let _ = (b = (0, i(533992).v3)(), (0, i(874309).b)(x), (0, i(682985).K8)(() => x ? (0, i(11395).N)(b, x) : [], [b, x])),
                    {
                        canCreateLiteDatabaseAgents: k,
                        canCreateBigDatabaseAgents: M
                    } = (0, i(482270).Y)(),
                    A = function({
                        collectionContextStore: e,
                        showAiSuggestions: t,
                        includeDbAgentSkills: a
                    }) {
                        let n = (0, i(533992).v3)(),
                            r = (0, i(682985).K8)(() => {
                                var t;
                                let o = null == (t = e.collectionStore()) ? void 0 : t.getSchema();
                                return o ? i(381453).oE(Object.values(o).map(e => null == e ? void 0 : e.name.toLocaleLowerCase())) : []
                            }, [e]),
                            l = (0, o.useCallback)(e => e.filter(e => !r.includes(e.name.toLocaleLowerCase())), [r]),
                            s = (0, i(682985).K8)(() => {
                                let t = e.collectionStore(),
                                    i = null == t ? void 0 : t.getFormat();
                                if (null != i && i.ai_suggested_properties && (null == i ? void 0 : i.ai_suggested_properties.length) > 0) return l(null == i ? void 0 : i.ai_suggested_properties)
                            }, [e, l]),
                            [d, p] = (0, o.useState)(s || "loading"),
                            c = (0, o.useRef)(!1);
                        return (0, o.useEffect)(() => {
                            c.current || s || ((async () => {
                                let t = e.collectionStore(),
                                    o = null == t ? void 0 : t.getSpaceId(),
                                    s = null == t ? void 0 : t.id,
                                    d = [];
                                if (o && s && t.getName()) {
                                    let e = await n.api.callCellCompatibleApi({
                                        eventName: "getAiSuggestedProperties",
                                        environment: n,
                                        data: {
                                            spaceId: null == t ? void 0 : t.getSpaceId(),
                                            collectionId: null == t ? void 0 : t.id,
                                            schema: i(381453).oE(Object.values(t.getSchema())),
                                            collectionName: (0, i(536614).r4)(t.getName(), t),
                                            numSuggestion: 4,
                                            includeDbAgentSkills: a || void 0
                                        },
                                        cellNavigation: {
                                            spaceId: o
                                        }
                                    });
                                    if ("success" === e.type) {
                                        let a = e.data.properties.filter(e => !r.includes(e.name.toLocaleLowerCase()));
                                        d.push(...a), (0, i(377796).createAndCommit)({
                                            environment: n,
                                            perform: e => {
                                                (0, i(715144).z)({
                                                    stores: [t],
                                                    update: {
                                                        ai_suggested_properties: a
                                                    },
                                                    transaction: e
                                                })
                                            },
                                            canUndo: !0,
                                            userAction: "propertyType.generateAiSuggestion",
                                            cellTarget: {
                                                spaceWithId: o
                                            }
                                        })
                                    }
                                }
                                p(l(d))
                            })(), c.current = !0)
                        }, [e, n, d, t, a, s, r, l]), d
                    }({
                        collectionContextStore: e,
                        showAiSuggestions: l,
                        includeDbAgentSkills: k
                    }),
                    I = (0, i(682985).K8)(() => (0, i(576348).QV)(x), [x]),
                    j = !(0, i(682985).O$)(i(205885).e),
                    E = (0, i(682985).K8)(() => {
                        var o, r;
                        let d;
                        if (t || a || j) return [];
                        let p = _.filter(e => (0, i(932292).shouldShowInSuggestedProperties)(e)),
                            c = null == x ? void 0 : x.getSchema(),
                            u = null == x ? void 0 : x.getFormat();
                        if (T) {
                            let e = function({
                                appConfig: e,
                                collectionFormat: t,
                                collectionSchema: o,
                                hasAiEnabled: a
                            }) {
                                if (!t || !o) return [];
                                let n = e => {
                                        let n = t.app_config_uri,
                                            r = i(333042).u9.derivePropertyUris(o ? ? {}, t.app_uri_map);
                                        if (e.collectionUri !== n) return !1;
                                        let l = !0;
                                        return e.uri === (0, i(355940).Jb)().uri && r.has(i(11448).yx.GithubPrsRelation) && (l = !1), e.dependencies.some(e => "property" === e.type && e.collectionUri === n && (0, i(8148).LE)(e.uri) && !r.has(e.uri)) && (!e.isAi || a) && l
                                    },
                                    r = {};
                                e.allFeatures.forEach(t => {
                                    s(t) && t.variants.every(t => !!e.allFeatures.find(e => e.uri === t && (0, i(778949).l)(e) && n(e))) && (r[t.uri] = t.variants)
                                });
                                let l = Object.values(r).flat();
                                return e.allFeatures.filter(e => (0, i(778949).l)(e) && !l.find(t => t === e.uri) ? n(e) : !!s(e) && !!r[e.uri]).sort((e, t) => s(e) ? -1 : s(t) ? 1 : e.dependencies.length - t.dependencies.length)
                            }({
                                appConfig: T,
                                collectionFormat: u,
                                collectionSchema: c,
                                hasAiEnabled: n
                            });
                            return (I ? e.filter(e => "notion://tasks/task_summary_feature" !== e.uri) : e).map(e => ({
                                type: "typed",
                                appConfigFeature: e
                            }))
                        }
                        if (p.length > 0) return p.map(e => ({
                            type: "workflow",
                            template: e
                        }));
                        if (l) return "loading" === A ? "loading" : A.map(e => ({
                            type: "ai_suggestion",
                            propertySchema: e
                        }));
                        return I ? [] : (o = (0, i(799514).lO)({
                            environment: S,
                            collectionContextStore: e
                        }), d = (r = c) ? function(e) {
                            let t = new Set;
                            for (let o in e) {
                                let a = e[o];
                                if (a && "ai_inference" in a) {
                                    var i;
                                    let e = null == (i = a.ai_inference) ? void 0 : i.type;
                                    if (e) switch (e) {
                                        case "custom":
                                            t.add("ai_custom_prompt");
                                            break;
                                        case "summarize":
                                            t.add("ai_summary");
                                            break;
                                        case "extract":
                                            t.add("ai_extract");
                                            break;
                                        case "translate":
                                            t.add("ai_translate")
                                    }
                                } else a && "select_ai_inference" in a && t.add("ai_keywords")
                            }
                            return t
                        }(r) : new Set, o.map(e => ({
                            type: "derived_ai_property",
                            propertyType: e
                        })).filter(e => !z.includes(e.propertyType) || !d.has(e.propertyType)))
                    }, [t, a, _, T, l, I, n, A, S, e, x, j], {
                        equalityFn: i(381453).n4
                    }),
                    D = (0, o.useMemo)(() => "loading" === E ? [] : d(E.filter(e => "workflow" === e.type).map(e => {
                        var t;
                        return t = e.template.templateId, `${P}${t}`
                    })).map(C), [E, d]);
                ! function({
                    collectionStore: e,
                    shownTemplateIds: t,
                    origin: a
                }) {
                    let n = (0, i(682985).K8)(() => null == e ? void 0 : e.getWorkflowTemplateId(), [e]),
                        r = (0, o.useRef)(!1);
                    (0, o.useEffect)(() => {
                        !r.current && t.length > 0 && ((0, i(104310).u)({
                            event: {
                                eventName: "suggested_feature_templates_shown",
                                eventProperties: {
                                    origin: a,
                                    collection_template_id: n,
                                    template_ids_shown: t
                                }
                            }
                        }), r.current = !0)
                    })
                }({
                    collectionStore: x,
                    origin: "suggested_properties",
                    shownTemplateIds: D
                });
                let N = (0, i(551408).A)();
                return (0, i(682985).K8)(() => "loading" === E ? "loading" : Object.fromEntries(E.map((t, o) => {
                    switch (t.type) {
                        case "ai_suggestion":
                            {
                                let o = t.propertySchema.skill,
                                    a = void 0 !== o ? r.find(e => e.skill.type === o) : void 0,
                                    n = (null == a ? void 0 : a.isLite) ? ? !0 ? k : M;
                                if (void 0 !== a && n) return [t.propertySchema.name.toLowerCase(), function(e) {
                                    let {
                                        collectionContextStore: t,
                                        environment: o,
                                        intl: a,
                                        isOffline: n,
                                        onAfterAccept: l,
                                        propertySchema: s
                                    } = e, d = F({
                                        intl: a,
                                        collectionContextStore: t,
                                        propertyType: s.type,
                                        isOffline: n
                                    }), p = void 0 !== d, u = r.find(e => e.skill.type === s.skill), g = (null == u ? void 0 : u.isLite) ? ? !0;
                                    return {
                                        key: s.name,
                                        searchKeys: [s.name, ..."en" !== a.locale ? [i(799514).Hp[s.type]] : []],
                                        render: e => (0, c.jsx)(L, {
                                            buttonMenuItemProps: e,
                                            propertyName: s.name,
                                            propertyType: s.type,
                                            isDisabled: p,
                                            tooltip: d || a.formatMessage(g ? U.dbAutofillTooltipLite : U.dbAutofillTooltipCustomAgent),
                                            badge: g ? (0, c.jsx)(i(746434).E, {
                                                color: "gray",
                                                content: (0, c.jsx)(i(109939).sA, { ...U.dbAutofillBasicBadge
                                                })
                                            }) : (0, c.jsx)(i(746434).E, {
                                                color: "blue",
                                                content: (0, c.jsx)(i(109939).sA, { ...U.dbAutofillCustomAgentBadge
                                                })
                                            })
                                        }),
                                        action: () => {
                                            var e, n;
                                            null == l || l();
                                            let d = t.collectionStore();
                                            if (!d) return;
                                            let p = i(987303).nZ({
                                                environment: o,
                                                collectionContextStore: t,
                                                propertyType: s.type,
                                                isSuggestedProperty: !0,
                                                propertyName: s.name,
                                                from: "view_settings",
                                                shouldOpenEditMenu: !1
                                            });
                                            if (!p) return;
                                            let c = d.getSchema()[p];
                                            if (!c) return;
                                            let u = (e = s.skill ? ? "", null == (n = r.find(t => t.skill.type === e)) ? void 0 : n.getDefaultInstructions());
                                            (0, i(572473).e)({
                                                environment: o,
                                                collectionContextStore: t,
                                                collectionStore: d,
                                                intl: a,
                                                propertyId: p,
                                                propertySchema: c,
                                                isLite: g,
                                                model: g ? void 0 : {
                                                    type: "openai-gpt-5-mini"
                                                },
                                                customInstructionText: u,
                                                shouldPublishAgent: !0
                                            }).then(({
                                                workflowId: e
                                            }) => {
                                                (0, i(271957).showDatabaseAgentSetupModal)({
                                                    collectionId: d.id,
                                                    collectionContextStore: t,
                                                    propertyId: p,
                                                    workflowId: e
                                                })
                                            })
                                        }
                                    }
                                }({
                                    collectionContextStore: e,
                                    environment: S,
                                    intl: w,
                                    isOffline: j,
                                    onAfterAccept: f,
                                    propertySchema: t.propertySchema
                                })];
                                return [t.propertySchema.name.toLowerCase(), O({
                                    collectionContextStore: e,
                                    propertyType: t.propertySchema.type,
                                    propertyName: t.propertySchema.name,
                                    disablePropertyTooltip: !0,
                                    intl: w,
                                    onAccept: p,
                                    isSuggestedProperty: !0,
                                    iconStyle: u,
                                    isOffline: j,
                                    buttonStyle: y
                                })]
                            }
                        case "typed":
                            return [t.appConfigFeature.name.toLowerCase(), function({
                                appConfig: e,
                                suggestedProperty: t,
                                isDisabled: o,
                                propertyDisabledTooltip: a,
                                environment: n,
                                collectionContextStore: r,
                                theme: l,
                                themeMode: s,
                                iconStyle: d,
                                buttonStyle: p,
                                onAfterAccept: u,
                                nameInput: g,
                                isDatabaseAgentsEnabled: m
                            }) {
                                var y;
                                let f = r.collectionStore(),
                                    h = i(333042).u9.derivePropertyUris((null == f ? void 0 : f.getSchema()) ? ? {}, null == f ? void 0 : f.getPropertyMapping()),
                                    b = null == f || null == (y = f.getFormat()) ? void 0 : y.app_config_uri,
                                    S = (e, t, a, n) => {
                                        let r = a.dependencies.find(e => "property" === e.type && e.collectionUri === b && (0, i(8148).LE)(e.uri) && !h.has(e.uri)),
                                            u = a.dependencies.find(e => {
                                                if ("property" !== e.type) return !1;
                                                let t = (0, i(9247).YE)(e.propertySchema),
                                                    {
                                                        shouldShowLegacyAutofill: o
                                                    } = (0, i(251955).a)({
                                                        isDatabaseAgentsEnabled: m,
                                                        aiInference: t
                                                    });
                                                return (0, i(9247).$M)(e.propertySchema) && (0, i(9247).om)(e.propertySchema) && o
                                            });
                                        if (r) return (0, c.jsx)(i(95582).A, { ...e,
                                            disabled: o,
                                            disabledFeedback: o,
                                            title: (0, c.jsxs)(i(4458).fI, {
                                                alignItems: "center",
                                                inline: !0,
                                                children: [t, u ? (0, c.jsx)(i(350450).A, {}) : null, a.isNew ? "notion://projects/tasks_with_sprints_feature" === a.uri && (0, c.jsx)(i(18274).A, {}) : null]
                                            }),
                                            icon: (0, c.jsx)(i(221535).zB, {
                                                type: r.propertySchema.type,
                                                theme: l,
                                                themeMode: s,
                                                icon: n,
                                                size: i(104509).Ev.sm,
                                                style: d
                                            }),
                                            style: p
                                        })
                                    },
                                    v = new(i(510969)).A;
                                return {
                                    key: t.name,
                                    searchKeys: [t.name],
                                    render: o => (0, c.jsx)(i(519027).d, {
                                        showImage: !a,
                                        caption: a ? ? t.description,
                                        render: a => {
                                            if ((0, i(778949).l)(t)) return S({ ...(0, i(63390).A)(o, a)
                                            }, t.name, t, t.icon); {
                                                let l = i(381453).oE(t.variants.map(t => {
                                                    let o = null == e ? void 0 : e.allFeatures.find(e => e.uri === t);
                                                    if (o && (0, i(778949).l)(o)) return o
                                                }));
                                                return (0, c.jsx)(i(691509).A, {
                                                    buttonPopupStore: v,
                                                    items: l,
                                                    getKey: e => e.name,
                                                    onSelect: async e => {
                                                        await i(987303).h3({
                                                            environment: n,
                                                            feature: e,
                                                            collectionContextStore: r,
                                                            addFeatureFrom: "new_property",
                                                            customPropertyName: g
                                                        }), (0, i(72762).o)({
                                                            collectionSettingsStore: r.settingsStore
                                                        }), null == u || u()
                                                    },
                                                    selectedItem: void 0,
                                                    renderItem: e => (0, c.jsx)(i(95582).A, { ...e,
                                                        title: e.value.name,
                                                        shouldWrapCaption: !0,
                                                        shouldWrapTitle: !0,
                                                        style: p
                                                    }),
                                                    children: e => S({ ...(0, i(63390).A)(i(381453).cJ(o, "onClick", "focused"), (0, i(63390).A)(a, e)),
                                                        focused: !!o.focused
                                                    }, t.name, l[0], t.icon)
                                                })
                                            }
                                        }
                                    }),
                                    action: async () => {
                                        (0, i(778949).l)(t) ? (await i(987303).h3({
                                            environment: n,
                                            feature: t,
                                            collectionContextStore: r,
                                            addFeatureFrom: "new_property",
                                            customPropertyName: g
                                        }), (0, i(72762).o)({
                                            collectionSettingsStore: r.settingsStore
                                        })) : v.setState({
                                            open: !0
                                        }), null == u || u()
                                    }
                                }
                            }({
                                appConfig: T,
                                suggestedProperty: t.appConfigFeature,
                                isDisabled: !1,
                                environment: S,
                                collectionContextStore: e,
                                theme: i(632079).Tj,
                                themeMode: v,
                                iconStyle: u ? ? g.defaultIconStyle,
                                buttonStyle: y,
                                onAfterAccept: f,
                                nameInput: h,
                                isDatabaseAgentsEnabled: N
                            })];
                        case "workflow":
                            return [(0, i(932292).getWorkflowTemplateName)(t.template).toLowerCase(), R({
                                environment: S,
                                template: t.template,
                                collectionContextStore: e,
                                iconStyle: u ? ? g.defaultIconStyle,
                                suggestedFeatureAnalytics: {
                                    origin: "suggested_properties",
                                    selectedIndex: D.indexOf(t.template.templateId),
                                    shownTemplateIds: D
                                },
                                buttonStyle: y,
                                onAccept: f
                            })];
                        case "derived_ai_property":
                            return [i(799514).dC[t.propertyType].toLowerCase(), O({
                                collectionContextStore: e,
                                propertyType: t.propertyType,
                                propertyName: i(799514).dC[t.propertyType],
                                disablePropertyTooltip: !0,
                                intl: w,
                                iconStyle: g.aiIconStyle,
                                onAccept: p,
                                isSuggestedProperty: !0,
                                isOffline: j,
                                buttonStyle: y
                            })]
                    }
                })), [T, M, k, e, S, w, N, E, v, p, D, u, j, y, f, h])
            }

            function y(e) {
                let {
                    filteredSuggestedPropertyItems: t,
                    showAiSuggestions: a,
                    hasSearchInput: n,
                    disableSuggestions: r,
                    isLoading: l,
                    title: s,
                    from: d,
                    isListLayout: p = !1
                } = e, g = (0, i(960253).I)(() => ({
                    loadingTitleStyle: {
                        marginTop: 8,
                        marginBottom: 0,
                        paddingInlineStart: "tableHeader" === d ? 14 : 10
                    },
                    titleContainer: {
                        display: "flex",
                        alignItems: "center"
                    },
                    aiIcon: {
                        display: "inline-flex",
                        marginInlineEnd: 6
                    },
                    desktopTitleStyleTableHeader: {
                        fontSize: 12,
                        fontWeight: i(699422).Wy.medium,
                        color: i(632079).Tj.text.secondary,
                        marginInlineStart: 3
                    },
                    desktopStyleTableHeader: p ? {
                        padding: "0 4px 6px",
                        gap: 2,
                        display: "flex",
                        flexDirection: "column"
                    } : {
                        padding: 8,
                        gap: 2,
                        display: "flex",
                        flexDirection: "column",
                        margin: 0
                    },
                    shimmerContainer: {
                        display: "flex",
                        alignItems: "center",
                        paddingInlineStart: 12,
                        paddingInlineEnd: 8,
                        gap: 8,
                        minHeight: "tableHeader" === d ? 35 : 27,
                        maxWidth: 192,
                        minWidth: 192
                    },
                    shimmerIcon: {
                        width: 16,
                        height: 16,
                        borderRadius: 3,
                        flexShrink: 0
                    },
                    shimmerText: {
                        height: 12,
                        borderRadius: 3
                    }
                }), [d, p]), m = (0, o.useMemo)(() => ({
                    key: "suggested",
                    render: e => (0, c.jsx)(i(844565).A, { ...e,
                        title: (0, c.jsxs)("span", {
                            style: g.titleContainer,
                            children: [(0, c.jsx)(i(16275).I, {
                                icon: i(652134).aiFaceSmallIcon,
                                size: "sm",
                                colorVariant: "secondary",
                                style: g.aiIcon
                            }), (0, c.jsx)(i(473686).c, {
                                styleKey: "captionMedium"
                            })]
                        }),
                        disableMobileBorders: !0,
                        desktopTitleStyle: g.loadingTitleStyle,
                        mobileTitleStyle: g.loadingTitleStyle
                    }),
                    items: Array.from({
                        length: u
                    }, (e, t) => {
                        let o = ["35%", "42%", "28%", "48%"],
                            a = o[t % o.length];
                        return {
                            key: `property-shimmer-${t}`,
                            action: () => {},
                            render: () => (0, c.jsxs)("div", {
                                style: g.shimmerContainer,
                                children: [(0, c.jsx)(i(795830).P, {
                                    style: g.shimmerIcon
                                }), (0, c.jsx)(i(795830).P, {
                                    style: { ...g.shimmerText,
                                        width: a
                                    }
                                })]
                            })
                        }
                    })
                }), [g.titleContainer, g.aiIcon, g.loadingTitleStyle, g.shimmerContainer, g.shimmerIcon, g.shimmerText]);
                return (0, o.useMemo)(() => r ? {
                    key: "suggested",
                    render: () => null,
                    items: []
                } : t.length ? {
                    key: "suggested",
                    render: e => (0, c.jsx)(i(844565).A, { ...e,
                        title: s,
                        desktopTitleStyle: "tableHeader" === d ? g.desktopTitleStyleTableHeader : {},
                        desktopStyle: "tableHeader" === d ? g.desktopStyleTableHeader : {}
                    }),
                    items: t
                } : l && a && !n ? m : {
                    key: "suggested",
                    render: () => null,
                    items: []
                }, [r, t, n, l, a, m, s, d, g.desktopStyleTableHeader, g.desktopTitleStyleTableHeader])
            }

            function f({
                environment: e,
                collectionContextStore: t,
                propertySchema: a,
                onAccept: n,
                section: r,
                iconStyle: l,
                buttonStyle: s
            }) {
                let d = (0, i(109939).tz)(),
                    p = (0, i(682985).K8)(() => (0, i(799514).xm)({
                        collectionContextStore: t,
                        environment: e
                    }), [t, e]),
                    c = (0, o.useMemo)(() => "all" === r ? p : r.flatMap(e => {
                        switch (e) {
                            case "basic":
                                return h;
                            case "advanced":
                                return b;
                            case "metadata":
                                return S;
                            default:
                                (0, i(722371).HB)(e)
                        }
                    }).filter(e => p.includes(e)), [r, p]),
                    u = !(0, i(682985).O$)(i(205885).e);
                return (0, i(682985).K8)(() => Object.fromEntries(c.map(e => {
                    let o = (0, i(799514).GN)(d, e);
                    return [o.toLowerCase(), O({
                        propertyType: e,
                        propertyName: o,
                        collectionContextStore: t,
                        disablePropertyTooltip: !1,
                        onAccept: n,
                        intl: d,
                        propertySchema: a,
                        isSuggestedProperty: !1,
                        iconStyle: l,
                        isOffline: u,
                        buttonStyle: s
                    })]
                })), [t, d, n, a, c, l, u, s])
            }
            let h = ["text", "number", "select", "multi_select", "status", "date", "person", "file", "checkbox", "url", "phone_number", "email"],
                b = ["relation", "rollup", "formula", "button", "auto_increment_id", "place"],
                S = ["created_time", "last_edited_time", "created_by", "last_edited_by"],
                v = {
                    defaultIconStyle: {
                        fill: i(632079).Tj.icon.primary
                    }
                };

            function w({
                iconStyle: e,
                buttonStyle: t,
                onAfterAccept: o
            }) {
                let a = (0, i(109939).tz)(),
                    n = (0, i(533992).v3)(),
                    r = (0, i(713311).ET)(),
                    l = (0, i(682985).K8)(() => r.collectionStore(), [r]),
                    s = (0, i(682985).K8)(() => (0, i(974410).f)(l), [l]),
                    d = (0, i(217844)._)({
                        name: "verified_pages",
                        spaceId: null == s ? void 0 : s.id,
                        userId: n.currentUser.id
                    }),
                    p = "verification_upsell_item_collection_entrypoint",
                    {
                        handleClick: u
                    } = (0, i(79268).C)({
                        upsell: null == d ? void 0 : d.upsell,
                        source: p,
                        postUpgradeCallback: o,
                        spaceStore: s
                    }),
                    g = (0, i(682985).K8)(() => (0, i(843641).$3)({
                        environment: n,
                        collectionStore: l
                    }), [n, l]);
                return (0, i(682985).K8)(() => {
                    if (! function({
                            environment: e,
                            collectionContextStore: t,
                            spaceStore: o
                        }) {
                            var a;
                            let n = null == o ? void 0 : o.getModel();
                            if (!n || !(0, i(764498).X)(n) || (null == (a = t.collectionViewBlockStore()) ? void 0 : a.isCollectionViewPageWithContent())) return !1;
                            let r = t.collectionStore();
                            return !(!r || r.isExternallyImportedAndSyncedCollection() || (0, i(717673).NU)({
                                environment: e,
                                collectionStore: r,
                                templateId: i(582881).z$
                            }) || (0, i(717673).NU)({
                                environment: e,
                                collectionStore: r,
                                templateId: i(582881).qz
                            }))
                        }({
                            environment: n,
                            collectionContextStore: r,
                            spaceStore: null == l ? void 0 : l.getSpaceStore()
                        }) && !g) return {};
                    let m = i(582881).z$,
                        y = i(774086).Gl.verificationPropertyName,
                        f = i(932292).globalWorkflowTemplates.fromId(m),
                        h = a.formatMessage(y);
                    if (!(0, i(388507).bz)(f)) return {};
                    let b = g && (null == d ? void 0 : d.upsell) !== void 0 ? (0, c.jsx)(i(754951).UpgradeButton, {
                        display: "icon",
                        upsell: d.upsell,
                        source: p,
                        spaceStore: s
                    }) : void 0;
                    return {
                        [f.templateId]: R({
                            environment: n,
                            template: f,
                            collectionContextStore: r,
                            suggestedFeatureAnalytics: void 0,
                            titleBadge: b,
                            disabled: g,
                            onAccept: () => {
                                if (g) u();
                                else {
                                    var e, t;
                                    (0, i(104310).u)({
                                        event: {
                                            eventName: "page_verification_property_added",
                                            eventProperties: {
                                                space_id: null == (e = i(728372).AppStoreSidebarSpaceStore.state) ? void 0 : e.id,
                                                collection_id: null == (t = r.collectionStore()) ? void 0 : t.id
                                            }
                                        }
                                    }), null == o || o()
                                }
                            },
                            titleOverride: h,
                            isUpsell: g,
                            tooltip: a.formatMessage(G.verification),
                            iconStyle: e ? ? v.defaultIconStyle,
                            buttonStyle: t
                        })
                    }
                }, [o, a, r, n, e, t, l, d, g, u, s])
            }
            let T = {
                titleContainer: {
                    display: "flex",
                    alignItems: "center"
                },
                icon: {
                    width: i(104509).Ev.xs,
                    height: i(104509).Ev.xs
                },
                button: {
                    width: 20,
                    height: 20,
                    margin: 4
                }
            };

            function x({
                searchProperties: e,
                titleText: t,
                desktopTitleStyle: a,
                desktopStyle: n,
                topBorder: r,
                inputStyle: l
            }) {
                let {
                    searchInput: s,
                    showSearchInput: d,
                    handleSearchInputChange: p,
                    handleToggleSearchInput: u
                } = e, g = (0, i(109939).tz)(), m = (0, o.useCallback)(e => {
                    e && i(986939).A.isMobile && e.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest"
                    })
                }, []), y = (0, o.useMemo)(() => (0, c.jsxs)("span", {
                    style: T.titleContainer,
                    children: [(0, c.jsx)("span", {
                        children: t
                    }), (0, c.jsx)(i(51831).m, {
                        placement: "top",
                        content: () => (0, c.jsx)(i(109939).sA, {
                            id: "tableHeaderPropertyCreationMenu.searchTooltip",
                            defaultMessage: "Search types"
                        }),
                        children: e => (0, c.jsx)(i(374533).A, {
                            ariaLabel: g.formatMessage(U.newSearchPlaceholder),
                            icon: i(921048).magnifyingGlassSmallIcon,
                            iconStyle: T.icon,
                            style: T.button,
                            onClick: u,
                            ...e
                        })
                    })]
                }), [u, t, g]), f = (0, o.useCallback)(e => {
                    ("ArrowLeft" === e.key || "ArrowRight" === e.key) && e.stopPropagation(), ("ArrowDown" === e.key || "ArrowUp" === e.key) && e.currentTarget.blur()
                }, []), h = (0, o.useMemo)(() => ({
                    key: "search-input",
                    render: e => (0, c.jsx)(i(310324).Ay, { ...e,
                        ref: m,
                        placeholder: g.formatMessage(U.newSearchPlaceholder),
                        value: s,
                        onChange: p,
                        autoFocus: !0,
                        focusInitial: !0,
                        style: l,
                        preventCaptureArrowShortcuts: !0,
                        onKeyDown: f
                    }),
                    action: () => {}
                }), [m, p, s, l, g, f]);
                return (0, o.useMemo)(() => ({
                    key: "search-input",
                    render: e => (0, c.jsx)(i(844565).A, { ...e,
                        topBorder: r,
                        title: y,
                        desktopStyle: n,
                        desktopTitleStyle: a
                    }),
                    items: d ? [h] : []
                }), [n, a, y, h, d, r])
            }

            function _({
                title: e,
                filteredStandardPropertyItems: t,
                key: a,
                desktopStyle: n,
                topBorder: r
            }) {
                return (0, o.useMemo)(() => t.length ? {
                    key: a,
                    render: t => (0, c.jsx)(i(844565).A, { ...t,
                        topBorder: r,
                        desktopStyle: n,
                        title: e
                    }),
                    items: t
                } : {
                    key: a,
                    render: () => null,
                    items: []
                }, [t, r, n, a, e])
            }

            function k({
                collectionContextStore: e,
                propertySchema: t,
                propertyGroupId: a,
                buttonStyle: n,
                propertyName: r,
                onAfterAccept: s
            }) {
                let u = (0, i(533992).v3)(),
                    g = (0, i(109939).tz)(),
                    m = (0, i(682985).K8)(() => i(610463).A.bots.state, []),
                    y = (0, i(682985).K8)(() => e.collectionStore(), [e]),
                    f = (0, i(682985).K8)(() => (null == y ? void 0 : y.getSchema()) ? ? {}, [y]),
                    h = (0, i(682985).K8)(() => !!(null == y ? void 0 : y.isPageTreeCollection()), [y]),
                    b = (0, i(682985).K8)(() => e.databaseTypeFromStoreState, [e]),
                    S = (0, i(682985).K8)(() => (0, i(974410).f)(e.collectionStore()), [e]),
                    {
                        canEditSpace: v,
                        isSpaceAdmin: w
                    } = (0, i(682985).K8)(() => S ? {
                        canEditSpace: null == S ? void 0 : S.canEdit(),
                        isSpaceAdmin: null == S ? void 0 : S.canAdmin()
                    } : {
                        canEditSpace: !1,
                        isSpaceAdmin: !1
                    }, [S]),
                    T = (0, i(682985).K8)(() => {
                        if (void 0 !== t) return;
                        let e = function(e, t) {
                                var o, a;
                                if (!e) return [];
                                let n = i(218744).default.checkGate({
                                        gateName: "connected_relation"
                                    }),
                                    r = i(218744).default.checkGate({
                                        gateName: "slack_connected_relation"
                                    }),
                                    s = e.getDatabaseType() === i(11448).dC,
                                    c = i(610463).A.state;
                                if (!c.loaded) return [];
                                let u = c.integrations,
                                    g = {};
                                if (!s) {
                                    let e = u.find(e => e.id === l().ob),
                                        t = (0, i(355940).Jb)();
                                    e && (g[t.name] = {
                                        name: t.name,
                                        pattern: i(188326).Y,
                                        integration: e,
                                        tooltipImage: {
                                            img: i(896221).A.images.tooltips.properties.githubSyncPullStatusPng,
                                            scale: .5
                                        },
                                        description: t.description,
                                        canOnlyAdminAuth: {
                                            disabledPropertyTooltipMessage: null == (o = t.canOnlyAdminAuth) ? void 0 : o.disabledPropertyTooltipMessage
                                        }
                                    })
                                }
                                let m = [];
                                if (t && (m.push(l().Hd, l().e1, l().k0), r && m.push(l().zG)), m.forEach(e => {
                                        let t = u.find(t => t.id === e);
                                        if (null != t && t.info.original_url_patterns)
                                            for (let e of t.info.original_url_patterns) {
                                                var i;
                                                null != (i = e.additional_types) && i.connectedRelation && (g[e.name] || (g[e.name] = {
                                                    name: (0, d().Fe)({
                                                        pattern: e,
                                                        integration: t
                                                    }),
                                                    pattern: e,
                                                    integration: t
                                                }))
                                            }
                                    }), !n) return Object.values(g);
                                for (let e of u)
                                    if (e.info.original_url_patterns && t && ![...p, l().F6].includes(e.id))
                                        for (let t of e.info.original_url_patterns) null != (a = t.additional_types) && a.connectedRelation && (g[t.name] || (e.id === l().mn ? g[e.name] = {
                                            name: "Salesforce Object",
                                            pattern: t,
                                            integration: e
                                        } : g[t.name] = {
                                            name: (0, d().Fe)({
                                                pattern: t,
                                                integration: e
                                            }),
                                            pattern: t,
                                            integration: e
                                        }));
                                return Object.values(g)
                            }(y, v),
                            o = (0, i(634189).Yn)(w);
                        return e.sort((e, t) => o[e.integration.id] - o[t.integration.id]), e
                    }, [y, t, v, w]),
                    x = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = e.collectionStore()) ? void 0 : t.getSpaceId()
                    }, [e]),
                    _ = (0, i(345776).T)(),
                    M = (0, i(801643).Ld)({
                        spaceId: x,
                        userId: _
                    }),
                    A = (0, i(682985).K8)(() => !!(null == y ? void 0 : y.isSyncedCollection()), [y]),
                    I = (0, i(226142).a)(),
                    P = !(0, i(682985).O$)(i(205885).e);
                return (0, o.useMemo)(() => {
                    if (null != T && T.length && !I && !P) return Object.fromEntries(T.map(t => {
                        let {
                            isDisabled: o,
                            featureAvailability: d,
                            propertyDisabledTooltip: p
                        } = function({
                            propertyConfig: e,
                            databaseType: t,
                            bots: o,
                            isSpaceAdmin: a,
                            isMobile: n,
                            isWikiCollection: r,
                            isSyncedCollection: s,
                            schema: d,
                            intl: p,
                            featureAvailabilities: c
                        }) {
                            let u = "integration" in e ? e.integration.id : e.integrationId;
                            if (!u) return {
                                isDisabled: !1
                            };
                            let g = c[u];
                            if (g && !(0, i(94418).e2)(g)) return {
                                isDisabled: !1,
                                featureAvailability: g
                            };
                            if ((0, i(561872).iY)({
                                    isAuthed: !!o.find(e => e.integration_id === u),
                                    isSpaceAdmin: a,
                                    isPropertyAdminAuthOnly: !!e.canOnlyAdminAuth,
                                    isMobile: n
                                })) {
                                var m;
                                return {
                                    isDisabled: !0,
                                    propertyDisabledTooltip: null == (m = e.canOnlyAdminAuth) ? void 0 : m.disabledPropertyTooltipMessage
                                }
                            }
                            if (u === l().ob) {
                                if (K(d, l().ob)) return {
                                    isDisabled: !0,
                                    propertyDisabledTooltip: p.formatMessage(U.duplicateGithubPropertyTooltip)
                                };
                                else if (r) return {
                                    isDisabled: !0,
                                    propertyDisabledTooltip: p.formatMessage(U.wikiGithubPropertyTooltip)
                                };
                                else if (s) return {
                                    isDisabled: !0,
                                    propertyDisabledTooltip: p.formatMessage(U.syncedDatabaseGithubPropertyTooltip)
                                }
                            } else if (u === l().io) {
                                if (K(d, l().io), t !== i(11448).TC) return {
                                    isDisabled: !0,
                                    propertyDisabledTooltip: p.formatMessage(U.nonMeetingsCronPropertyTooltip)
                                };
                                if (K(d, l().io)) return {
                                    isDisabled: !0,
                                    propertyDisabledTooltip: p.formatMessage(U.duplicateCronEventPropertyTooltip)
                                }
                            }
                            return {
                                isDisabled: !1
                            }
                        }({
                            propertyConfig: t,
                            bots: m,
                            isSpaceAdmin: w,
                            environment: u,
                            isWikiCollection: h,
                            databaseType: b,
                            isSyncedCollection: A,
                            schema: f,
                            intl: g,
                            isMobile: i(986939).A.isMobile,
                            featureAvailabilities: M
                        });
                        return [t.name.toLowerCase(), function({
                            connectedRelationProperty: e,
                            isDisabled: t,
                            propertyDisabledTooltip: o,
                            environment: a,
                            collectionContextStore: n,
                            intl: r,
                            propertyGroupId: s,
                            featureAvailability: d,
                            buttonStyle: p,
                            propertyName: u,
                            onAfterAccept: g,
                            spaceStore: m
                        }) {
                            let y = d && !(0, i(94418).e2)(d),
                                f = y ? (0, c.jsx)(i(754951).UpgradeButton, {
                                    display: "icon",
                                    featureName: "collection_connected_property_github",
                                    source: "collection_connected_property",
                                    upsell: d.upsell,
                                    spaceStore: m
                                }) : e.integration.id === l().mn && (0, c.jsx)(i(18274).A, {});
                            return {
                                key: e.name,
                                searchKeys: [e.name],
                                render: i => (0, c.jsx)(L, {
                                    buttonMenuItemProps: i,
                                    propertyName: e.name,
                                    propertyType: "relation",
                                    isDisabled: t,
                                    tooltip: o,
                                    icon: e.integration.info.icon,
                                    buttonStyle: p,
                                    badge: f
                                }),
                                action: async () => {
                                    if (y) return void(0, i(907063).K)(a, {
                                        from: "collection_connected_property",
                                        upsell: d.upsell,
                                        spaceStore: (0, i(974410).f)(n.collectionStore())
                                    });
                                    if (e.integration.id === l().mn) {
                                        let t = n.collectionStore();
                                        (0, i(104310).u)({
                                            event: {
                                                eventName: "salesforce_actions",
                                                eventProperties: {
                                                    actionType: "navigate_to_object_selection",
                                                    integrationId: e.integration.id,
                                                    collectionId: null == t ? void 0 : t.id
                                                }
                                            }
                                        }), (0, i(76790).a)({
                                            collectionSettingsStore: n.settingsStore,
                                            item: {
                                                type: "connectedRelationDatabaseActions",
                                                source: "ConnectedRelationObjectSelection",
                                                integrationId: e.integration.id
                                            }
                                        })
                                    } else await i(987303).XO({
                                        environment: a,
                                        connectedRelationProperty: e,
                                        collectionContextStore: n,
                                        intl: r,
                                        from: "new_property",
                                        propertyGroupId: s,
                                        propertyName: u
                                    });
                                    null == g || g()
                                }
                            }
                        }({
                            connectedRelationProperty: t,
                            isDisabled: o,
                            propertyDisabledTooltip: p,
                            environment: u,
                            intl: g,
                            collectionContextStore: e,
                            propertyGroupId: a,
                            featureAvailability: d,
                            buttonStyle: n,
                            propertyName: r,
                            onAfterAccept: s,
                            spaceStore: S
                        })]
                    }).filter(i(722371).O9))
                }, [T, I, P, m, w, u, h, b, A, f, g, M, e, a, n, r, s, S])
            }

            function M(e) {
                let {
                    collectionContextStore: t,
                    buttonStyle: n,
                    onAfterAccept: r
                } = e, s = (0, i(109939).tz)(), d = (0, i(682985).K8)(() => {
                    var e;
                    return (null == (e = t.collectionStore()) ? void 0 : e.getSchema()) ? ? {}
                }, [t]), p = (0, i(83208).X)("connected_relations_database_actions_enabled"), u = !(0, i(682985).O$)(i(205885).e), [g, m] = (0, o.useMemo)(() => {
                    if (!p) return [{},
                        []
                    ];
                    let e = {};
                    for (let [o, p] of Object.entries(d)) {
                        if (!p || !(0, a().U)(p)) continue;
                        let d = p.connectedRelation.integration_id;
                        if (!d || !(0, l().KB)(d)) continue;
                        let g = function(e) {
                            let {
                                propertySchema: t,
                                intl: o,
                                collectionContextStore: a,
                                propertyId: n,
                                integrationId: r,
                                isOffline: l,
                                buttonStyle: s,
                                onAfterAccept: d
                            } = e;
                            return {
                                key: n,
                                searchKeys: [n],
                                render: e => (0, c.jsx)(L, {
                                    buttonMenuItemProps: e,
                                    propertyName: t.name,
                                    propertyType: "relation",
                                    icon: t.icon,
                                    isDisabled: l,
                                    tooltip: l ? o.formatMessage(i(233319).AY.unavailableOfflineTooltip) : void 0,
                                    buttonStyle: s
                                }),
                                action: () => {
                                    (0, i(76790).a)({
                                        collectionSettingsStore: a.settingsStore,
                                        item: {
                                            type: "connectedRelationDatabaseActions",
                                            source: "connectedRelationAddProperties",
                                            rootPropertyId: n,
                                            integrationId: r,
                                            rootPropertySchema: t,
                                            eventSource: "new_property_menu"
                                        }
                                    });
                                    let e = a.collectionStore();
                                    (0, i(104310).u)({
                                        event: {
                                            eventName: "salesforce_actions",
                                            eventProperties: {
                                                actionType: "add_properties_clicked",
                                                details: {
                                                    source: "new_property_menu"
                                                },
                                                integrationId: r,
                                                collectionId: null == e ? void 0 : e.id
                                            }
                                        }
                                    }), null == d || d()
                                }
                            }
                        }({
                            propertySchema: p,
                            intl: s,
                            collectionContextStore: t,
                            propertyId: o,
                            integrationId: d,
                            isOffline: u,
                            buttonStyle: n,
                            onAfterAccept: r
                        });
                        e[d] || (e[d] = {}), e[d][p.name.toLowerCase()] = g
                    }
                    let o = Object.values(e).flat();
                    return [e, o]
                }, [s, d, p, t, u, n, r]);
                return [g, m]
            }

            function A({
                filteredConnectedPropertyItems: e,
                hideTitle: t,
                desktopStyle: a
            }) {
                let n = (0, i(109939).tz)();
                return (0, o.useMemo)(() => e.length ? {
                    key: "connected",
                    render: e => (0, c.jsx)(i(844565).A, { ...e,
                        title: n.formatMessage(U.connectedRelationSectionTitle),
                        hideTitle: t,
                        topBorder: t,
                        desktopStyle: a
                    }),
                    items: e
                } : {
                    key: "connected",
                    render: () => null,
                    items: []
                }, [e, t, a, n])
            }

            function I({
                filteredConnectedPropertyItemsPerIntegration: e
            }) {
                let t = (0, i(109939).tz)();
                return (0, o.useMemo)(() => 0 === Object.keys(e).length ? [{
                    key: "existingConnectedRelations",
                    render: () => null,
                    items: []
                }] : Object.entries(e).map(([e, o]) => 0 === o.length ? {
                    key: e,
                    render: () => null,
                    items: []
                } : {
                    key: e,
                    render: o => (0, c.jsx)(i(4458).VP, {
                        padding: 4,
                        gap: 2,
                        margin: 0,
                        children: (0, c.jsx)(i(844565).A, { ...o,
                            title: t.formatMessage(U.existingConnectedRelationSectionTitle, {
                                integrationName: (0, l().mi)(e)
                            })
                        })
                    }),
                    items: o
                }), [e, t])
            }
            let P = "workflow.";

            function C(e) {
                return e.replace(P, "")
            }
            let j = {
                    width: "100%"
                },
                E = {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    maxWidth: "100%",
                    width: "100%",
                    overflow: "hidden"
                },
                D = {
                    display: "inline-flex",
                    flex: 1,
                    alignItems: "center",
                    overflow: "hidden"
                },
                N = o.memo(function({
                    buttonMenuItemProps: e,
                    title: t,
                    titleBadge: a,
                    tooltip: n,
                    isDisabled: r,
                    icon: l
                }) {
                    let [s, d] = (0, o.useState)(!1), p = (0, o.useCallback)(() => {
                        d(!0)
                    }, []), u = (0, o.useCallback)(() => {
                        d(!1)
                    }, []), g = (0, i(960253).I)(() => ({
                        titleText: {
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            marginInlineEnd: 4,
                            opacity: r ? .3 : 1
                        },
                        questionIcon: {
                            opacity: +!!s,
                            transition: "opacity 200ms ease-in-out",
                            cursor: "pointer",
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center"
                        },
                        iconWrapper: {
                            opacity: r ? .3 : 1
                        }
                    }), [s, r]);
                    return (0, c.jsx)("div", {
                        onMouseEnter: p,
                        onMouseLeave: u,
                        style: j,
                        children: (0, c.jsx)(i(95582).A, { ...e,
                            disabled: r,
                            disabledFeedback: !1,
                            title: (0, c.jsxs)("div", {
                                style: E,
                                children: [(0, c.jsxs)("div", {
                                    style: D,
                                    children: [(0, c.jsx)(i(324489).V, {
                                        style: g.titleText,
                                        children: t
                                    }), a]
                                }), n ? (0, c.jsx)(i(519027).d, {
                                    showImage: !r,
                                    caption: n,
                                    render: e => (0, c.jsx)("div", {
                                        role: "button",
                                        tabIndex: 0,
                                        style: g.questionIcon,
                                        onClick: e => e.stopPropagation(),
                                        onKeyDown: e => {
                                            ("Enter" === e.key || " " === e.key) && e.stopPropagation()
                                        },
                                        ...e,
                                        children: (0, c.jsx)(i(16275).I, {
                                            icon: i(211052).questionMarkCircleSmallIcon,
                                            size: "xs",
                                            colorVariant: "secondary",
                                            style: g.questionIcon
                                        })
                                    })
                                }) : void 0]
                            }),
                            icon: (0, c.jsx)("div", {
                                style: g.iconWrapper,
                                children: l
                            })
                        })
                    })
                });

            function R({
                environment: e,
                template: t,
                collectionContextStore: o,
                suggestedFeatureAnalytics: a,
                titleBadge: n,
                titleOverride: r,
                isUpsell: l,
                onAccept: s,
                tooltip: d,
                iconStyle: p,
                buttonStyle: u,
                disabled: g
            }) {
                var m;
                let y = r || (0, i(932292).getWorkflowTemplateName)(t);
                return {
                    key: (m = t.templateId, `${P}${m}`),
                    searchKeys: [y],
                    action: () => {
                        l || function({
                            environment: e,
                            collectionContextStore: t,
                            template: o,
                            suggestedFeatureAnalytics: a
                        }) {
                            let n = t.collectionStore();
                            if (!n) throw Error("collectionStore not found");
                            let r = n.getWorkflowTemplateId();
                            a && (0, i(104310).u)({
                                event: {
                                    eventName: "suggested_feature_template_clicked",
                                    eventProperties: {
                                        origin: a.origin,
                                        selected_index: a.selectedIndex,
                                        template_ids_shown: a.shownTemplateIds,
                                        template_id_clicked: o.templateId,
                                        collection_template_id: r
                                    }
                                }
                            });
                            let l = t.settingsStore;
                            (0, i(726790).isWorkflowTemplateWithConfirmStep)(o) ? (0, i(76790).a)({
                                collectionSettingsStore: l,
                                item: {
                                    type: "confirmAddTemplate",
                                    template: o
                                }
                            }) : (0, i(388507).Sz)(o) || (0, i(377796).createAndCommit)({
                                userAction: "FeatureTemplateMenuItem.addFeatureTemplateToTarget",
                                environment: e,
                                canUndo: !0,
                                cellTarget: n.pointer.spaceId ? {
                                    spaceWithId: n.pointer.spaceId
                                } : void 0,
                                perform: s => {
                                    i(526131).ai({
                                        environment: e,
                                        transaction: s,
                                        collectionStore: n,
                                        template: o,
                                        logger: new(i(932292)).WorkflowTemplateLogger,
                                        origin: "suggested_feature"
                                    }), a && (0, i(104310).u)({
                                        event: {
                                            eventName: "suggested_feature_template_added",
                                            eventProperties: {
                                                origin: a.origin,
                                                template_id_added: o.templateId,
                                                collection_template_id: r
                                            }
                                        }
                                    });
                                    let d = t.collectionViewStore();
                                    d && i(868411).UD({
                                        template: o,
                                        environment: e,
                                        collectionStore: n,
                                        collectionViewStore: d,
                                        collectionSettingsStore: l,
                                        collectionContextStore: t
                                    })
                                }
                            })
                        }({
                            environment: e,
                            template: t,
                            collectionContextStore: o,
                            suggestedFeatureAnalytics: a
                        }), null == s || s()
                    },
                    render: e => (0, c.jsx)(N, {
                        buttonMenuItemProps: { ...e,
                            buttonStyle: u
                        },
                        title: y,
                        titleBadge: n,
                        tooltip: d ? ? void 0,
                        isDisabled: g,
                        icon: (0, c.jsx)(i(107048).z, {
                            template: t,
                            size: 16,
                            iconStyle: p
                        })
                    })
                }
            }

            function O(e) {
                let {
                    collectionContextStore: t,
                    propertySchema: o,
                    propertyName: a,
                    propertyType: n,
                    disablePropertyTooltip: r,
                    intl: l,
                    onAccept: s,
                    iconStyle: d,
                    isSuggestedProperty: p,
                    isOffline: u,
                    buttonStyle: g
                } = e, m = F({
                    intl: l,
                    collectionContextStore: t,
                    propertyType: n,
                    propertySchema: o,
                    isOffline: u
                }), y = void 0 !== m;
                return {
                    key: a,
                    searchKeys: [a, ..."en" !== l.locale ? [i(799514).Hp[n]] : []],
                    render: e => {
                        let t = o && (null == o ? void 0 : o.type) === n,
                            i = !r && G.hasOwnProperty(n) ? l.formatMessage(G[n]) : void 0;
                        return (0, c.jsx)(L, {
                            isChecked: t,
                            buttonMenuItemProps: e,
                            propertyName: a,
                            propertyType: n,
                            isDisabled: y,
                            tooltip: m ? ? i,
                            iconStyle: d,
                            buttonStyle: g
                        })
                    },
                    action: () => {
                        s({
                            propertyType: n,
                            isSuggestedProperty: p,
                            propertyName: a
                        })
                    }
                }
            }
            let W = {
                    wrapper: {
                        width: "100%"
                    },
                    container: {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        maxWidth: "100%",
                        width: "100%",
                        overflow: "hidden"
                    },
                    titleSection: {
                        display: "inline-flex",
                        flex: 1,
                        alignItems: "center",
                        overflow: "hidden"
                    },
                    span: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        marginInlineEnd: 4
                    },
                    defaultIconStyle: {
                        fill: i(632079).Tj.icon.primary
                    }
                },
                L = o.memo(function(e) {
                    let {
                        badge: t,
                        buttonMenuItemProps: a,
                        buttonStyle: n,
                        icon: r,
                        iconStyle: l,
                        isChecked: s,
                        isDisabled: d,
                        propertyName: p,
                        propertyType: u,
                        tooltip: g,
                        tooltipImage: m,
                        tooltipImageScale: y
                    } = e, [f, h] = (0, o.useState)(!1), b = (0, o.useCallback)(() => {
                        h(!0)
                    }, []), S = (0, o.useCallback)(() => {
                        h(!1)
                    }, []), v = (0, i(960253).e)(), w = (0, i(960253).I)(() => ({
                        questionIcon: {
                            opacity: +!!f,
                            transition: "opacity 200ms ease-in-out",
                            cursor: "pointer",
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center"
                        }
                    }), [f]);
                    return (0, c.jsx)("div", {
                        onMouseEnter: b,
                        onMouseLeave: S,
                        style: W.wrapper,
                        children: (0, c.jsx)(i(95582).A, { ...a,
                            disabled: d,
                            disabledFeedback: d,
                            title: (0, c.jsxs)("div", {
                                style: W.container,
                                children: [(0, c.jsxs)("div", {
                                    style: W.titleSection,
                                    children: [(0, c.jsx)("span", {
                                        style: W.span,
                                        children: p
                                    }), t]
                                }), g ? (0, c.jsx)(i(519027).d, {
                                    showImage: !d,
                                    caption: g,
                                    tooltipImage: d ? void 0 : m,
                                    tooltipImageScale: y,
                                    placement: "right",
                                    render: e => (0, c.jsx)("div", {
                                        role: "button",
                                        tabIndex: 0,
                                        style: w.questionIcon,
                                        onClick: e => e.stopPropagation(),
                                        onKeyDown: e => {
                                            ("Enter" === e.key || " " === e.key) && e.stopPropagation()
                                        },
                                        ...e,
                                        children: (0, c.jsx)(i(16275).I, {
                                            icon: i(211052).questionMarkCircleSmallIcon,
                                            size: "xs",
                                            colorVariant: "secondary",
                                            style: w.questionIcon
                                        })
                                    })
                                }) : void 0]
                            }),
                            isChecked: s,
                            icon: (0, c.jsx)(i(221535).zB, {
                                type: u,
                                theme: i(632079).Tj,
                                themeMode: v,
                                icon: r,
                                size: i(104509).Ev.sm,
                                style: l ? ? W.defaultIconStyle
                            }),
                            buttonStyle: n
                        })
                    })
                });

            function K(e, t) {
                for (let o in e) {
                    var i;
                    let a = e[o];
                    if (a && "connectedRelation" in a && (null == (i = a.connectedRelation) ? void 0 : i.integration_id) === t) return !0
                }
                return !1
            }

            function F({
                intl: e,
                collectionContextStore: t,
                propertyType: o,
                propertySchema: a,
                isOffline: n
            }) {
                if (n && (0, i(260682).$)({
                        propertyType: o,
                        propertySchema: a,
                        allowAIProperty: !1
                    })) return e.formatMessage(i(233319).AY.unavailableOfflineTooltip);
                if ("auto_increment_id" === o) {
                    var r;
                    if (null != a && a.type) return e.formatMessage(i(426356).q.convert_to_auto_increment_id_property);
                    let o = t.collectionStore();
                    if (null == o ? void 0 : o.isPageTreeCollection()) return e.formatMessage(i(426356).q.wiki_forbidden_auto_increment_id_property);
                    if (null == o ? void 0 : o.isSyncedCollection()) return e.formatMessage(i(426356).q.synced_database_forbidden_auto_increment_id_property);
                    let n = o && o.id,
                        l = o && o.getFormat(),
                        s = o && (null == (r = o.getSpaceStore()) ? void 0 : r.id),
                        d = o && o.getSchema(),
                        p = o && o.getDeletedSchema();
                    if (!n || !l || !s || !d || !p) return;
                    let c = o.getModel();
                    if (c && (0, i(154326).N_)(c, o.getRecordModel)) return e.formatMessage(i(426356).q.duplicate_auto_increment_id_property)
                }
            }
            let z = ["ai_summary"],
                U = (0, i(109939).YK)({
                    propertyNameLabel: {
                        defaultMessage: "Name",
                        id: "database.viewSettings.propertyTypeSelect.propertyNameLabel"
                    },
                    searchPlaceholder: {
                        defaultMessage: "Search or add new property",
                        id: "database.viewSettings.propertyTypeSelect.searchPlaceholder"
                    },
                    newSearchPlaceholder: {
                        defaultMessage: "Search types…",
                        id: "database.viewSettings.propertyTypeSelect.newSearchPlaceholder"
                    },
                    searchToChangePlaceholder: {
                        defaultMessage: "Search for property type",
                        id: "database.viewSettings.propertyTypeSelect.searchToChangePlaceholder"
                    },
                    propertyNameInputPlaceholder: {
                        defaultMessage: "Property name",
                        id: "database.viewSettings.propertyTypeSelect.propertyNameInputPlaceholder"
                    },
                    suggestedSectionTitle: {
                        defaultMessage: "Suggested",
                        id: "database.viewSettings.propertyTypeSection.suggested"
                    },
                    loadingSuggestedSectionTitle: {
                        defaultMessage: "Thinking…",
                        id: "database.viewSettings.propertyTypeSection.loadingSuggested"
                    },
                    connectedRelationSectionTitle: {
                        defaultMessage: "Connections",
                        id: "database.viewSettings.propertyTypeSection.connected"
                    },
                    existingConnectedRelationSectionTitle: {
                        defaultMessage: "{integrationName}",
                        id: "database.viewSettings.propertyTypeSection.existingConnectedIntegrationTitle"
                    },
                    typesSectionTitle: {
                        defaultMessage: "Type",
                        id: "database.viewSettings.propertyTab.propertyType"
                    },
                    autofillSectionTitle: {
                        defaultMessage: "AI autofill",
                        id: "database.viewSettings.propertyTab.autofillProperties"
                    },
                    newProperty: {
                        defaultMessage: "New property",
                        id: "database.viewSettings.newProperty"
                    },
                    newPropertyWithDatabaseName: {
                        defaultMessage: "New property on {databaseName}",
                        id: "database.viewSettings.newPropertyOnDatabase"
                    },
                    changePropertyType: {
                        defaultMessage: "Change property type",
                        id: "database.viewSettings.changePropertyType"
                    },
                    selectToAddNewProperty: {
                        defaultMessage: "Select to add",
                        id: "database.viewSettings.selectToAdd"
                    },
                    newPill: {
                        defaultMessage: "New",
                        id: "database.viewSettings.newHighlightedFeature"
                    },
                    duplicateGithubPropertyTooltip: {
                        defaultMessage: "A database can only have one GitHub Pull Requests property",
                        id: "database.viewSettings.propertyTab.duplicateGithubProperty.tooltip"
                    },
                    wikiGithubPropertyTooltip: {
                        defaultMessage: "A wiki cannot have a GitHub Pull Requests property",
                        id: "database.viewSettings.propertyTab.wikiGithubProperty.tooltip"
                    },
                    syncedDatabaseGithubPropertyTooltip: {
                        defaultMessage: "A synced database cannot have a GitHub Pull Requests property",
                        id: "database.viewSettings.propertyTab.syncedDatabaseGithubProperty.tooltip"
                    },
                    nonMeetingsCronPropertyTooltip: {
                        defaultMessage: "The Cron Calendar property can only be added to a Meetings database",
                        id: "database.viewSettings.propertyTab.nonMeetingsCronProperty.tooltip"
                    },
                    duplicateCronEventPropertyTooltip: {
                        defaultMessage: "A database can only have one Cron Calendar event property",
                        id: "database.viewSettings.propertyTab.duplicateCronEventProperty.tooltip"
                    },
                    upgradeRequired: {
                        defaultMessage: "Please upgrade to use this property",
                        id: "database.viewSettings.propertyTab.upgradeRequired"
                    },
                    selectType: {
                        defaultMessage: "Select type",
                        id: "database.viewSettings.propertyTabGrid.selectType"
                    },
                    dbAutofillTooltipLite: {
                        id: "collectionSettingsPropertyType.dbAutofillTooltipLite",
                        defaultMessage: "This property can be automatically filled by AI Autofill"
                    },
                    dbAutofillTooltipCustomAgent: {
                        id: "collectionSettingsPropertyType.dbAutofillTooltip",
                        defaultMessage: "This property can be automatically filled by a Custom Agent"
                    },
                    dbAutofillBasicBadge: {
                        id: "collectionSettingsPropertyType.basicBadge",
                        defaultMessage: "Basic"
                    },
                    dbAutofillCustomAgentBadge: {
                        id: "collectionSettingsPropertyType.customAgentBadge",
                        defaultMessage: "Custom Agent"
                    }
                }),
                G = (0, i(109939).YK)({
                    text: {
                        defaultMessage: "Add text that can be formatted. Great for summaries, notes, or descriptions.",
                        id: "database.viewSettings.propertyTab.textProperty.tooltip"
                    },
                    number: {
                        defaultMessage: "Accepts numbers. These can also be formatted as currency or progress bars. Useful for tracking counts, prices, and completion.",
                        id: "database.viewSettings.propertyTab.numberProperty.tooltip"
                    },
                    select: {
                        defaultMessage: "Select one option from a list of tags. Useful for categorization.",
                        id: "database.viewSettings.propertyTab.selectProperty.tooltip"
                    },
                    multi_select: {
                        defaultMessage: "Select one or more options from a list of tags. Useful for tagging items across multiple categories.",
                        id: "database.viewSettings.propertyTab.multiSelectProperty.tooltip"
                    },
                    date: {
                        defaultMessage: "Accepts a date or a date range (time optional). Useful for deadlines, especially with calendar and timeline views.",
                        id: "database.viewSettings.propertyTab.dateProperty.tooltip"
                    },
                    formula: {
                        defaultMessage: "Perform calculations based on other properties using Notion’s formula language.",
                        id: "database.viewSettings.propertyTab.formulaProperty.tooltip"
                    },
                    relation: {
                        defaultMessage: "Connect databases and mention database pages. Useful for connecting items across your workspace.",
                        id: "database.viewSettings.propertyTab.relationProperty.tooltip"
                    },
                    rollup: {
                        defaultMessage: "View and aggregate information about properties from relation properties. Useful for summarizing interconnected data.",
                        id: "database.viewSettings.propertyTab.rollupProperty.tooltip"
                    },
                    person: {
                        defaultMessage: "Tag anyone in your Notion workspace. Useful for assigning tasks or referencing relevant team members.",
                        id: "database.viewSettings.propertyTab.personProperty.tooltip"
                    },
                    file: {
                        defaultMessage: "Upload files and images for easy retrieval. Useful for storing documents and photos.",
                        id: "database.viewSettings.propertyTab.filesProperty.tooltip"
                    },
                    checkbox: {
                        defaultMessage: "Use a checkbox to indicate whether a condition is true or false. Useful for lightweight task tracking.",
                        id: "database.viewSettings.propertyTab.checkboxProperty.tooltip"
                    },
                    url: {
                        defaultMessage: "Accepts a link to a website and opens the link in a new tab when clicked.",
                        id: "database.viewSettings.propertyTab.urlProperty.tooltip"
                    },
                    email: {
                        defaultMessage: "Accepts an email address and launches your mail client when clicked.",
                        id: "database.viewSettings.propertyTab.emailProperty.tooltip"
                    },
                    phone_number: {
                        defaultMessage: "Accepts a phone number and prompts your device to call it when clicked.",
                        id: "database.viewSettings.propertyTab.phoneNumberProperty.tooltip"
                    },
                    created_time: {
                        defaultMessage: "Records the timestamp of an item’s creation. Auto-generated and not editable.",
                        id: "database.viewSettings.propertyTab.createdTimeProperty.tooltip"
                    },
                    created_by: {
                        defaultMessage: "Automatically records the person who created the item. Auto-generated and not editable.",
                        id: "database.viewSettings.propertyTab.createdByProperty.tooltip"
                    },
                    last_edited_time: {
                        defaultMessage: "Records the timestamp of an item’s last edit. Auto-updated and not editable.",
                        id: "database.viewSettings.propertyTab.lastEditedTimeProperty.tooltip"
                    },
                    last_edited_by: {
                        defaultMessage: "Records the person who edited the item last. Auto-updated and not editable.",
                        id: "database.viewSettings.propertyTab.lastEditedByProperty.tooltip"
                    },
                    auto_increment_id: {
                        defaultMessage: "Automatically creates a numerical ID for each item. IDs are unique and cannot be manually changed.",
                        id: "database.viewSettings.propertyTab.uniqueIdProperty.tooltip"
                    },
                    status: {
                        defaultMessage: "Track this item’s progress using status tags categorized by To-do, In progress, and Complete.",
                        id: "database.viewSettings.propertyTab.statusProperty.tooltip"
                    },
                    verification: {
                        defaultMessage: "Indicate whether a page has been verified by the page owner, with the option to set an expiration date.",
                        id: "database.viewSettings.propertyTab.verificationProperty.tooltip"
                    },
                    button: {
                        defaultMessage: "Trigger actions based on the item properties.",
                        id: "database.viewSettings.propertyTab.buttonProperty.tooltip"
                    },
                    ai_summary: {
                        defaultMessage: "Text property with AI summary set up for you. Generates a summary based on page content and properties.",
                        id: "database.viewSettings.propertyTab.aiSummaryProperty.tooltip"
                    },
                    ai_translate: {
                        defaultMessage: "Text property with AI translate set up for you. Translate a property to another language using AI. ",
                        id: "database.viewSettings.propertyTab.aiTranslateProperty.tooltip"
                    },
                    ai_category: {
                        defaultMessage: "Select property that automatically adds tags based on the page content and properties.",
                        id: "database.viewSettings.propertyTab.aiCategoryProperty.tooltip"
                    },
                    ai_keywords: {
                        defaultMessage: "Multi-select property that automatically adds tags based on the page content and properties.",
                        id: "database.viewSettings.propertyTab.aiKeywordsProperty.tooltip"
                    },
                    ai_custom_prompt: {
                        defaultMessage: "Text property with a custom AI prompt. Generate content based on the page content and properties.",
                        id: "database.viewSettings.propertyTab.aiCustomPromptProperty.tooltip"
                    },
                    ai_extract: {
                        defaultMessage: "Text property with a custom AI prompt. Extract key info based on the page content and properties.",
                        id: "database.viewSettings.propertyTab.aiExtractProperty.tooltip"
                    },
                    title: {
                        defaultMessage: "Add a title for your database item. This determines the page’s title.",
                        id: "database.viewSettings.propertyTab.titleProperty.tooltip"
                    },
                    location: {
                        defaultMessage: "Display the location of which database this item belongs to.",
                        id: "database.viewSettings.propertyTab.locationProperty.tooltip"
                    },
                    last_visited_time: {
                        defaultMessage: "Records the timestamp of the last time you visited this page. Auto-updated and not editable.",
                        id: "database.viewSettings.propertyTab.lastVisitedTimeProperty.tooltip"
                    },
                    place: {
                        defaultMessage: "Display a physical location on a map.",
                        id: "database.viewSettings.propertyTab.placeProperty.tooltip"
                    }
                });

            function B({
                environment: e,
                collectionContextStore: t,
                appConfig: o
            }) {
                let a = (0, i(682985).K8)(() => {
                        let o = t.collectionStore();
                        return !!(o && (0, i(576348).jq)(i(827482).A.getMode(e, o, o.getSpaceStore()), o))
                    }, [e, t]),
                    n = (0, i(682985).K8)(() => {
                        var e, n;
                        if (!a || void 0 !== o || !(null != (e = t.collectionStore()) && e.getName())) return !1;
                        let r = null == (n = t.collectionStore()) ? void 0 : n.getSchema();
                        return (!r || !((0, i(722371).objectKeys)(r).length > i(9247).Hm)) && (0, i(576348).QV)(t.collectionStore())
                    }, [a, o, t]);
                return {
                    hasAiEnabled: a,
                    showAiSuggestions: n
                }
            }
        },
        473686: (e, t, i) => {
            i.d(t, {
                U: () => d,
                c: () => c
            });
            var o = i(296540),
                a = i(474848);
            let n = (0, i(109939).YK)({
                    brewing: {
                        id: "AgentThinkingStep.brewing",
                        defaultMessage: "Brewing"
                    },
                    pondering: {
                        id: "AgentThinkingStep.pondering",
                        defaultMessage: "Pondering"
                    },
                    crafting: {
                        id: "AgentThinkingStep.crafting",
                        defaultMessage: "Crafting"
                    },
                    processing: {
                        id: "AgentThinkingStep.processing",
                        defaultMessage: "Processing"
                    },
                    computing: {
                        id: "AgentThinkingStep.computing",
                        defaultMessage: "Computing"
                    },
                    generating: {
                        id: "AgentThinkingStep.generating",
                        defaultMessage: "Generating"
                    },
                    working: {
                        id: "AgentThinkingStep.working",
                        defaultMessage: "Working"
                    },
                    exploring: {
                        id: "AgentThinkingStep.exploring",
                        defaultMessage: "Exploring"
                    },
                    organizing: {
                        id: "AgentThinkingStep.organizing",
                        defaultMessage: "Organizing"
                    },
                    preparing: {
                        id: "AgentThinkingStep.preparing",
                        defaultMessage: "Preparing"
                    },
                    focusing: {
                        id: "AgentThinkingStep.focusing",
                        defaultMessage: "Focusing"
                    },
                    discovering: {
                        id: "AgentThinkingStep.discovering",
                        defaultMessage: "Discovering"
                    },
                    noodling: {
                        id: "AgentThinkingStep.noodling",
                        defaultMessage: "Noodling"
                    },
                    vibing: {
                        id: "AgentThinkingStep.vibing",
                        defaultMessage: "Vibing"
                    },
                    cooking: {
                        id: "AgentThinkingStep.cooking",
                        defaultMessage: "Cooking"
                    }
                }),
                r = Object.freeze((0, i(722371).objectKeys)(n)),
                l = "AgentThinkingStep.";

            function s(e) {
                let t = 0;
                for (let i = 0; i < e.length; i++) t = (t << 5) - t + e.charCodeAt(i), t &= t;
                return Math.abs(t)
            }

            function d(e) {
                if (void 0 === e) return n.crafting;
                let t = s(String(e)) % r.length;
                return n[r[t]]
            }
            let p = {
                messageWrapInner: {
                    display: "flex",
                    whiteSpace: "pre",
                    alignItems: "center",
                    gap: 4,
                    minWidth: 0
                },
                loadingDotsContainer: {
                    width: 24,
                    height: 24
                },
                scrollingSquiggleContainer: {
                    opacity: .3,
                    width: i(265035).SCROLLING_SQUIGGLE_DEFAULTS.width,
                    height: i(265035).SCROLLING_SQUIGGLE_DEFAULTS.height,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            };

            function c(e) {
                let {
                    styleKey: t,
                    message: d = n.crafting,
                    animationType: c = "loading-dots",
                    children: u,
                    cycleVerbs: g = !1,
                    cycleIntervalMs: m = 1e3,
                    seed: y,
                    contentGapPx: f = 8
                } = e, {
                    bodyStyleKey: h
                } = (0, i(765846).yq)(), b = (0, i(765846).Cd)(h), [S, v] = o.useState(0), w = o.useMemo(() => {
                    if (!g) return "string" == typeof d ? {
                        kind: "string",
                        value: d
                    } : {
                        kind: "descriptor",
                        value: d
                    };
                    let e = function(e) {
                            if ("string" == typeof e || !e.id.startsWith(l)) return;
                            let t = e.id.slice(l.length);
                            if ((0, i(722371).Xk)(r, t)) return t
                        }(d),
                        t = ((void 0 === e ? 0 : r.indexOf(e)) + (void 0 === y ? 0 : s(String(y)) % r.length) + S) % r.length;
                    return {
                        kind: "descriptor",
                        value: n[r[t]]
                    }
                }, [S, g, d, y]);
                o.useEffect(() => {
                    if (!g) return;
                    let e = window.setInterval(() => {
                        v(e => e + 1)
                    }, m);
                    return () => {
                        window.clearInterval(e)
                    }
                }, [m, g]);
                let T = (0, i(960253).I)(() => ({
                    messageContent: { ...b,
                        fontWeight: i(699422).Wy.medium,
                        color: i(632079).Tj.text.secondary,
                        display: "flex",
                        alignItems: "center",
                        gap: f,
                        minWidth: 0
                    }
                }), [b, f]);
                return (0, a.jsxs)("div", {
                    style: T.messageContent,
                    children: [(0, a.jsx)("div", {
                        role: "status",
                        "aria-live": "polite",
                        style: i(69916).Qg,
                        children: "string" === w.kind ? w.value : (0, a.jsx)(i(109939).sA, { ...w.value
                        })
                    }), function() {
                        switch (c) {
                            case "scrolling-squiggle":
                                return (0, a.jsx)("div", {
                                    style: p.scrollingSquiggleContainer,
                                    children: (0, a.jsx)(i(265035).ScrollingSquiggle, {})
                                });
                            case "loading-dots":
                                return (0, a.jsx)(i(118845).A, {
                                    isTriColored: !0,
                                    styleParentContainer: p.loadingDotsContainer
                                });
                            case "none":
                                return null
                        }
                    }(), (0, a.jsxs)("div", {
                        style: p.messageWrapInner,
                        children: [(0, a.jsx)(i(861510).N, {
                            styleKey: t || h,
                            animate: !0,
                            colorVariant: "secondary",
                            text: "string" === w.kind ? w.value : (0, a.jsx)(i(109939).sA, { ...w.value
                            })
                        }), u]
                    })]
                })
            }
        },
        519027: (e, t, i) => {
            i.d(t, {
                d: () => r
            });
            var o = i(296540),
                a = i(474848);
            let n = {
                    tooltip: {
                        whiteSpace: "break-spaces",
                        width: "max-content",
                        maxWidth: 300
                    },
                    description: {
                        fontWeight: i(699422).Wy.regular,
                        color: i(632079).oZ.uiLightGray
                    }
                },
                r = o.memo(function(e) {
                    let {
                        caption: t,
                        description: r,
                        hideTooltipBeforeImageLoaded: l,
                        imageContainerStyle: s,
                        placement: d,
                        render: p,
                        showImage: c,
                        tooltipDelayThreshold: u,
                        tooltipImage: g,
                        tooltipImageScale: m = 1
                    } = e, [y, f] = (0, o.useState)(!1), [h, b] = (0, o.useState)({
                        width: 0,
                        height: 0
                    });
                    (0, o.useEffect)(() => {
                        if (!g) return;
                        let e = new Image;
                        e.src = g, e.onload = () => {
                            b({
                                width: "number" == typeof m ? e.width * m : m.widthPx,
                                height: "number" == typeof m ? e.width * m : m.heightPx
                            }), f(!0)
                        }
                    }, [g, m]);
                    let S = (0, o.useCallback)(() => {
                        let e = (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("div", {
                                children: t
                            }), r ? (0, a.jsx)("div", {
                                style: n.description,
                                children: r
                            }) : void 0]
                        });
                        return g && y && c ? (0, a.jsx)(i(916612).A, {
                            caption: e,
                            imageURL: g,
                            imageWidth: h.width,
                            imageHeight: h.height,
                            imageContainerStyle: s
                        }) : e
                    }, [t, r, s, h.height, h.width, y, c, g]);
                    return (0, a.jsx)(i(51831).m, {
                        placement: d ? ? "left",
                        disableTooltip: void 0 === t || !y && l,
                        delayThreshold: u,
                        style: n.tooltip,
                        content: S,
                        children: p
                    })
                })
        },
        726790: (e, t, i) => {
            i.r(t), i.d(t, {
                WorkflowSettingsConfirmAddTemplate: () => d,
                isWorkflowTemplateWithConfirmStep: () => m
            }), i(16280);
            var o = i(296540);
            i(581454);
            var a = i(474848);

            function n({
                template: e,
                style: t
            }) {
                let o = (0, i(960253).I)(() => ({
                        container: { ...t,
                            padding: 12,
                            border: `1px solid ${i(632079).Tj.border.secondaryTranslucent}`,
                            borderRadius: 6
                        }
                    }), [t]),
                    l = function(e) {
                        if ((0, i(388507).Xq)(e, "property") && (0, i(388507).Io)(e)) {
                            let {
                                options: t = []
                            } = e.value;
                            if (0 !== t.length) return (0, a.jsx)(r, {
                                options: t
                            })
                        }
                    }(e);
                return l ? (0, a.jsx)("div", {
                    style: o.container,
                    children: l
                }) : null
            }

            function r({
                options: e
            }) {
                return (0, a.jsx)(i(4458).VP, {
                    gap: 8,
                    children: e.map(e => (0, a.jsx)("div", {
                        children: (0, a.jsx)(i(593100).O, {
                            format: i(696654).NY.Medium,
                            isSingle: !0,
                            value: e.value,
                            color: e.color,
                            showRemoveButton: !1
                        })
                    }, e.id))
                })
            }
            let l = {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 0
                },
                s = {
                    shrinkableHeight: l,
                    noShrink: {
                        flexShrink: 0
                    },
                    featurePreviewWrapper: { ...l,
                        width: "-webkit-fill-available"
                    },
                    featurePreviewBody: { ...l,
                        gap: 16,
                        ...i(986939).A.isMobile ? {
                            margin: "16px 0"
                        } : {
                            margin: 0
                        }
                    },
                    featurePreview: { ...l,
                        overflow: "auto"
                    },
                    addButtonContainer: { ...i(986939).A.isMobile ? {
                            margin: "12px 0"
                        } : {
                            marginBottom: 6
                        }
                    }
                };

            function d({
                template: e,
                collectionSettingsStore: t
            }) {
                let [r, l] = (0, o.useState)("sample" === e.propertyOptionsType), p = (0, i(932292).getWorkflowTemplateName)(e);
                return (0, a.jsxs)(i(669).A, {
                    collectionSettingsStore: t,
                    title: (0, a.jsx)(i(109939).sA, {
                        id: "workflowTemplateSettings.confirmAddTemplate.title",
                        defaultMessage: "Turn on {templateName}",
                        values: {
                            templateName: p
                        }
                    }),
                    disableScroller: !0,
                    menuScrollerStyle: s.shrinkableHeight,
                    innerContentWrapperStyle: s.shrinkableHeight,
                    children: [(0, a.jsx)(i(844565).A, {
                        style: s.shrinkableHeight,
                        children: (0, a.jsx)(i(636518).Ay, {
                            style: s.shrinkableHeight,
                            textWrapperStyle: s.featurePreviewWrapper,
                            bodyStyle: s.featurePreviewBody,
                            body: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(c, {
                                    template: e,
                                    style: s.noShrink
                                }), (0, a.jsx)(n, {
                                    template: e,
                                    style: s.featurePreview
                                })]
                            })
                        })
                    }), (0, a.jsx)(i(844565).A, {
                        style: s.noShrink,
                        children: e.value.options && e.value.options.length > 0 ? (0, a.jsx)(i(76761).A, {
                            title: (0, a.jsx)(i(109939).sA, {
                                id: "workflowTemplateSettings.confirmAddTemplate.propertyOptionsToggle",
                                defaultMessage: "Set my own options"
                            }),
                            switcherProps: {
                                on: r,
                                disallowTabbing: !0
                            },
                            onClick: () => {
                                l(!r)
                            }
                        }) : void 0
                    }), (0, a.jsx)(i(844565).A, {
                        style: s.noShrink,
                        children: (0, a.jsx)(i(636518).Ay, {
                            body: (0, a.jsx)(g, {
                                template: e,
                                startEmpty: r
                            }),
                            bodyStyle: s.addButtonContainer
                        })
                    })]
                })
            }
            let p = {
                textWrapper: {
                    lineHeight: i(986939).A.isMobile ? "20px" : "18px"
                },
                title: {
                    fontSize: i(986939).A.isMobile ? 16 : 13
                },
                caption: {
                    fontSize: i(986939).A.isMobile ? 14 : 12,
                    overflow: "hidden",
                    color: "gray",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis"
                }
            };

            function c({
                template: e,
                style: t
            }) {
                let o = (0, i(960253).I)(() => ({
                        container: { ...t,
                            display: "flex",
                            alignItems: "center",
                            gap: 12
                        }
                    }), [t]),
                    n = (0, i(932292).getWorkflowTemplateName)(e),
                    r = (0, i(388507).Uy)(e);
                return (0, a.jsxs)("div", {
                    style: o.container,
                    children: [(0, a.jsx)(i(107048).n, {
                        template: e,
                        backgroundSize: 32
                    }), (0, a.jsxs)("div", {
                        style: p.textWrapper,
                        children: [(0, a.jsx)("div", {
                            style: p.title,
                            children: n
                        }), r ? (0, a.jsx)("div", {
                            style: p.caption,
                            children: r
                        }) : void 0]
                    })]
                })
            }
            let u = {
                width: "100%"
            };

            function g({
                template: e,
                startEmpty: t
            }) {
                let o = (0, i(533992).v3)(),
                    n = (0, i(713311).ET)(),
                    r = (0, i(932292).getWorkflowTemplateName)(e),
                    l = i(381453).mg(e);
                return t && delete l.value.options, (0, a.jsx)(i(912946).A, {
                    colorPalette: "blue",
                    style: u,
                    size: "lg",
                    onClick: () => {
                        let t = n.collectionStore();
                        if (!t) throw Error("collectionStore not found");
                        (0, i(377796).createAndCommit)({
                            userAction: "WorkflowSettingsConfirmAddTemplate.addFeatureTemplateToTarget",
                            environment: o,
                            canUndo: !0,
                            cellTarget: t.pointer.spaceId ? {
                                spaceWithId: t.pointer.spaceId
                            } : void 0,
                            perform: a => {
                                i(526131).ai({
                                    environment: o,
                                    transaction: a,
                                    collectionStore: t,
                                    template: l,
                                    logger: new(i(932292)).WorkflowTemplateLogger,
                                    origin: "suggested_feature"
                                });
                                let r = n.settingsStore;
                                (0, i(465370).y)({
                                    collectionSettingsStore: r
                                });
                                let s = t.getWorkflowTemplateId();
                                (0, i(104310).u)({
                                    event: {
                                        eventName: "suggested_feature_template_added",
                                        eventProperties: {
                                            origin: "suggested_properties",
                                            template_id_added: e.templateId,
                                            collection_template_id: s
                                        }
                                    }
                                });
                                let d = n.collectionViewStore();
                                d && (0, i(868411).UD)({
                                    template: e,
                                    environment: o,
                                    collectionStore: t,
                                    collectionViewStore: d,
                                    collectionSettingsStore: r,
                                    collectionContextStore: n
                                })
                            }
                        })
                    },
                    children: (0, a.jsx)(i(109939).sA, {
                        id: "workflowTemplateSettings.confirmAddTemplate.button",
                        defaultMessage: "Add {templateName}",
                        values: {
                            templateName: r
                        }
                    })
                })
            }

            function m(e) {
                return "property" === e.type && ("select" === e.value.type || "multi_select" === e.value.type)
            }
        },
        765846: (e, t, i) => {
            i.d(t, {
                Cd: () => r,
                Wd: () => s,
                yq: () => d
            });
            var o = i(296540),
                a = i(474848);
            let n = "bodyRegular";

            function r(e) {
                let {
                    fontSize: t,
                    lineHeight: o
                } = i(649316).U[e];
                return {
                    fontSize: t,
                    lineHeight: o
                }
            }
            let l = (0, o.createContext)(void 0);

            function s({
                children: e,
                isFullPage: t
            }) {
                let r = (0, i(316258).jw)(),
                    d = (0, o.useMemo)(() => ({
                        bodyStyleKey: t ? ? r.isType("fullPage", "inferenceTranscriptChatView") ? "bodyLgRegular" : n
                    }), [r, t]);
                return (0, a.jsx)(l.Provider, {
                    value: d,
                    children: e
                })
            }

            function d() {
                let e = (0, o.useContext)(l);
                return e || {
                    bodyStyleKey: n
                }
            }
            l.displayName = "AgentFontContext"
        },
        868411: (e, t, i) => {
            i.d(t, {
                UD: () => a
            }), i(16280);
            let o = {
                property: function({
                    template: e,
                    collectionStore: t,
                    collectionViewStore: o,
                    collectionSettingsStore: a
                }) {
                    let n = (0, i(717673).S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    if (!n) throw Error(`No property instance found for property template ${e.templateId}`);
                    let r = o.getType();
                    (0, i(76790).a)({
                        collectionSettingsStore: a,
                        item: {
                            type: "property",
                            property: n.id,
                            formatKey: r ? i(565546).u9(r) : void 0
                        }
                    })
                },
                collection_view: function({
                    template: e,
                    environment: t,
                    collectionStore: o,
                    collectionContextStore: a
                }) {
                    let n = (0, i(717673).S1)({
                        collectionStore: o,
                        templateId: e.templateId,
                        instancePointerType: "collection_view"
                    });
                    if (!n) throw Error(`No collection view instance found for property template ${e.templateId}`);
                    ! function({
                        environment: e,
                        collectionContextStore: t,
                        collectionViewId: o
                    }) {
                        var a;
                        (null == (a = t.collectionViewStore()) ? void 0 : a.id) !== o && (0, i(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: o,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        }), (0, i(76790).a)({
                            collectionSettingsStore: t.settingsStore,
                            item: {
                                type: "main"
                            }
                        })
                    }({
                        environment: t,
                        collectionContextStore: a,
                        collectionViewId: n.id
                    })
                },
                compound: function(e) {}
            };

            function a(e) {
                o[e.template.type](e)
            }
        }
    }
]);