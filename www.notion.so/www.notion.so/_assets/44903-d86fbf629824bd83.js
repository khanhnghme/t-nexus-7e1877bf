"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [44903], {
        44027: (e, t, n) => {
            function a(e) {
                let {
                    businessTrialOffer: t,
                    billingTime: a,
                    modalLastShownAt: i,
                    modalShownTimes: o
                } = e;
                return !!(0, n(383378).V9)(t, a) && void 0 !== i && void 0 !== o && (!(i > 0) || !(a.diff(n(906745).DateTime.fromMillis(i), "days").days >= n(118999).ls)) && (o ? ? 0) >= n(118999).TY
            }

            function i(e, t = (0, n(192159).DS)(e)) {
                if (!e) return;
                let a = (0, n(192159).i5)(e);
                if (a) return Math.ceil(a.toUTC().diff(t.toUTC(), "days").days)
            }

            function o(e, t) {
                let a = n(906745).DateTime.fromMillis(e.endDateMs).toUTC();
                return (t ? ? n(906745).DateTime.now()).toUTC().hasSame(a, "day")
            }

            function r(e) {
                let t = (0, n(278662).Jd)(e);
                if (t) return (0, n(875472).Vm)(t)
            }

            function s(e) {
                let t = (0, n(278662).Jd)(e);
                if (t) return (0, n(875472).kd)(t)
            }

            function d(e) {
                let t = n(118999).Tu[e];
                if (void 0 === t) throw Error(`Unknown trial length: ${e}`);
                return t
            }

            function l(e) {
                return Math.round(e / 30)
            }

            function _({
                billingData: e
            }) {
                if (!(0, n(192159).TB)(e)) return !1;
                if ((0, n(192159).HY)(e)) {
                    var t;
                    return (null == e ? void 0 : e.type) === "admin" && (null == (t = e.trial) ? void 0 : t.autoConvert) === !0
                }
                return (null == e ? void 0 : e.type) === "admin" && (0, n(722371).O9)(null == e ? void 0 : e.paymentMethod)
            }

            function u(e) {
                return (0, n(192159).oD)(e) && (0, n(717274).pX)()
            }

            function c(e) {
                return (0, n(722371).Xk)(["multi_search_scope_menu", "ai_workspace_settings_connector_cards", "business_trial_ai_connectors_upsell", "ai_corner_chat_connectors_button"], e)
            }

            function m(e) {
                return (0, n(722371).Xk)(n(90416).K_, e)
            }

            function p(e) {
                return (0, n(722371).Xk)([...n(994234).iE, ...n(994234).wW, ...n(994234).Fh], e)
            }

            function f(e) {
                let {
                    openedFrom: t,
                    campaign: n,
                    isCustomAgentsGateEnabled: a
                } = e;
                return a && (m(t) || "deeplink" === t && p(n))
            }
            n.d(t, {
                F$: () => f,
                IU: () => u,
                J: () => r,
                SF: () => m,
                Tr: () => l,
                UP: () => i,
                XF: () => o,
                cn: () => s,
                dt: () => p,
                od: () => a,
                rE: () => d,
                tY: () => c,
                z2: () => _
            }), n(16280)
        },
        95405: (e, t, n) => {
            n.d(t, {
                $S: () => o,
                I4: () => a,
                IQ: () => i
            }), n(898992), n(354520);

            function a(e, t, a) {
                let o = i(t).slice(),
                    r = o.findIndex(t => e.id === t.id); - 1 === r ? o.unshift(e) : o.splice(r, 1, e), (0, n(862759).m)({
                    userSettingsStore: t,
                    transaction: a,
                    data: {
                        favorite_ai_actions: o
                    }
                })
            }

            function i(e) {
                var t;
                return (null == (t = e.getModel()) || null == (t = t.getSettings()) ? void 0 : t.favorite_ai_actions) ? ? []
            }

            function o(e, t, a) {
                let o = i(t).filter(t => t.id !== e.id);
                (0, n(862759).m)({
                    userSettingsStore: t,
                    transaction: a,
                    data: {
                        favorite_ai_actions: o
                    }
                })
            }
        },
        118999: (e, t, n) => {
            n.d(t, {
                Hb: () => p,
                Hu: () => _,
                TY: () => a,
                Tu: () => r,
                U4: () => m,
                U7: () => f,
                WO: () => d,
                XX: () => c,
                c4: () => l,
                ef: () => o,
                ej: () => u,
                hI: () => s,
                ls: () => i
            });
            let a = 2,
                i = 30,
                o = 30,
                r = {
                    365: 5,
                    180: 5,
                    90: 5,
                    30: 5,
                    14: 4
                },
                s = 332,
                d = 852,
                l = 800,
                _ = 407,
                u = 24,
                c = 400,
                m = 450,
                p = 524,
                f = 7
        },
        133121: (e, t, n) => {
            n.d(t, {
                u: () => a
            });
            let a = "return-to-writer-button"
        },
        216736: (e, t, n) => {
            function a(e) {
                let {
                    svgElement: t,
                    padding: n,
                    backgroundColor: a
                } = e, i = t.cloneNode(!0);
                if (!(i instanceof SVGSVGElement)) throw Error("Failed to clone SVG element");
                i.getAttribute("xmlns") || i.setAttribute("xmlns", "http://www.w3.org/2000/svg"), i.getAttribute("xmlns:xlink") || i.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                let o = function(e) {
                        var t;
                        try {
                            let t = e.getBBox();
                            if (t.width > 0 && t.height > 0) return t
                        } catch {}
                        let n = null == (t = e.viewBox) ? void 0 : t.baseVal;
                        if (n && n.width > 0 && n.height > 0) return {
                            x: n.x,
                            y: n.y,
                            width: n.width,
                            height: n.height
                        };
                        let a = e.getBoundingClientRect();
                        return {
                            x: 0,
                            y: 0,
                            width: a.width,
                            height: a.height
                        }
                    }(t),
                    r = o.width,
                    s = o.height,
                    d = r + 2 * n,
                    l = s + 2 * n;
                i.setAttribute("width", d.toString()), i.setAttribute("height", l.toString()), i.setAttribute("viewBox", `${o.x-n} ${o.y-n} ${d} ${l}`);
                let _ = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                return _.setAttribute("x", (o.x - n).toString()), _.setAttribute("y", (o.y - n).toString()), _.setAttribute("width", d.toString()), _.setAttribute("height", l.toString()), _.setAttribute("fill", a), i.insertBefore(_, i.firstChild), {
                    svgText: new XMLSerializer().serializeToString(i),
                    width: d,
                    height: l
                }
            }

            function i(e) {
                let t = encodeURIComponent(e);
                return `data:image/svg+xml;charset=utf-8,${t}`
            }

            function o(e) {
                let t = e;
                return (t = (t = (t = t.replace(/@import[^;]+;/g, "")).replace(/url\(\s*(['"]?)(https?:\/\/|\/\/)[^)"']+\1\s*\)/g, 'url("")')).replace(/<image\b[^>]*(?:href|xlink:href)=["'](?:https?:)?\/\/[^"']+["'][^>]*\/?>/gi, "")).replace(/<use\b[^>]*(?:href|xlink:href)=["'](?:https?:)?\/\/[^"']+["'][^>]*\/?>/gi, "")
            }
            async function r(e) {
                let {
                    svgText: t,
                    width: n,
                    height: a,
                    mimeType: i,
                    quality: o,
                    pixelRatio: r,
                    platform: s
                } = e;
                return await new Promise((e, d) => {
                    if (s) {
                        if (!s.createImage || !s.createCanvas) return void d(Error("RasterizePlatform requires createImage and createCanvas"));
                        let l = s.createImage,
                            _ = s.createCanvas,
                            u = s.createObjectUrl ? ? (e => URL.createObjectURL(e)),
                            c = s.revokeObjectUrl ? ? (e => URL.revokeObjectURL(e)),
                            m = new Blob([t], {
                                type: "image/svg+xml"
                            }),
                            p = l();
                        p.crossOrigin = "anonymous";
                        let f = u(m);
                        return p.onload = () => {
                            c(f);
                            let t = _(),
                                s = t.getContext("2d");
                            if (!s) return void d(Error("Failed to get canvas context"));
                            let l = r ? ? 1;
                            t.width = Math.max(1, Math.floor(n * l)), t.height = Math.max(1, Math.floor(a * l)), s.setTransform(l, 0, 0, l, 0, 0), s.drawImage(p, 0, 0);
                            try {
                                t.toBlob(n => {
                                    t.remove(), n ? e(n) : d(Error("Failed to rasterize SVG"))
                                }, i, "image/jpeg" === i ? o : void 0)
                            } catch (n) {
                                t.remove();
                                let e = n instanceof Error ? n.message : "Unknown rasterization error";
                                d(Error(`Failed to export image: ${e}`))
                            }
                        }, p.onerror = () => {
                            c(f), d(Error("Failed to load SVG for rasterization"))
                        }, void(p.src = f)
                    }
                    let l = new Image;
                    l.crossOrigin = "anonymous", l.onload = () => {
                        let t = document.createElement("canvas"),
                            s = t.getContext("2d");
                        if (!s) return void d(Error("Failed to get canvas context"));
                        let _ = r ? ? 1;
                        t.width = Math.max(1, Math.floor(n * _)), t.height = Math.max(1, Math.floor(a * _)), s.setTransform(_, 0, 0, _, 0, 0), s.drawImage(l, 0, 0);
                        try {
                            t.toBlob(n => {
                                t.remove(), n ? e(n) : d(Error("Failed to rasterize SVG"))
                            }, i, "image/jpeg" === i ? o : void 0)
                        } catch (n) {
                            t.remove();
                            let e = n instanceof Error ? n.message : "Unknown rasterization error";
                            d(Error(`Failed to export image: ${e}`))
                        }
                    }, l.onerror = () => {
                        d(Error("Failed to load SVG for rasterization"))
                    }, l.src = `data:image/svg+xml;charset=utf-8;base64,${btoa(unescape(encodeURIComponent(t)))}`
                })
            }

            function s(e) {
                let {
                    blob: t,
                    filename: n
                } = e, a = URL.createObjectURL(t), i = document.createElement("a");
                i.href = a, i.download = n, i.style.display = "none", document.body.appendChild(i), i.click(), i.remove(), setTimeout(() => URL.revokeObjectURL(a), 0)
            }
            n.d(t, {
                Ep: () => i,
                WN: () => s,
                Zu: () => r,
                l8: () => a,
                r1: () => o
            }), n(16280), n(964979), n(814603), n(147566), n(198721)
        },
        272799: (e, t, n) => {
            function a(e) {
                n(986939).A.isMobile || n(822284).HL.setState({
                    open: !0,
                    ...e
                })
            }

            function i() {
                n(822284).HL.update(e => ({ ...e,
                    open: !1
                }))
            }

            function o(e) {
                n(986939).A.isMobile || n(822284).BusinessTrialEndingModalStore.update(() => ({
                    modalState: "initial",
                    ...e,
                    open: !0
                }))
            }

            function r(e) {
                n(822284).BusinessTrialEndingModalStore.update(t => ({ ...t,
                    modalState: e
                }))
            }

            function s() {
                n(822284).BusinessTrialEndingModalStore.update(e => ({ ...e,
                    open: !1,
                    modalState: "initial"
                }))
            }

            function d(e) {
                n(822284).BS.setState({ ...e,
                    open: !0
                })
            }

            function l() {
                n(822284).BS.update(e => ({ ...e,
                    open: !1
                }))
            }

            function _(e) {
                n(822284).jz.setState({
                    open: !0,
                    ...e
                })
            }

            function u() {
                n(822284).jz.update(e => ({ ...e,
                    open: !1
                }))
            }

            function c(e) {
                n(986939).A.isMobile || n(822284).ZJ.setState({
                    open: !0,
                    ...e
                })
            }

            function m() {
                n(822284).ZJ.update(e => ({ ...e,
                    open: !1
                }))
            }
            async function p(e) {
                var t;
                let {
                    billingData: a,
                    environment: i,
                    spaceStore: o,
                    from: r,
                    memberCount: s,
                    prices: d,
                    offerToApply: l,
                    autoConvert: _,
                    captchaToken: u,
                    sessionId: c
                } = e;
                if (!o || !r || !a || void 0 === s || !l) return {
                    success: !1,
                    error: "Invalid arguments"
                };
                let m = e.nowForTesting ? ? n(906745).DateTime.now(),
                    p = n(653828).H.state.selectedCurrencyCode ? ? "USD",
                    f = (0, n(982473).vk)(d, {
                        product: "business",
                        interval: "month",
                        currency: p
                    }),
                    h = (0, n(982473).vH)({
                        items: (null == (t = a.subscription) ? void 0 : t.items) ? ? [],
                        trialEnd: m.plus({
                            days: (0, n(337592).s1)(l)
                        })
                    }, {
                        price: f,
                        quantity: s
                    }),
                    y = l.campaign;
                try {
                    return await (0, n(129909).n)({
                        environment: i,
                        spaceStore: o,
                        from: r,
                        desiredState: h,
                        trialData: {
                            id: y,
                            from: r,
                            autoConvert: _
                        },
                        captchaToken: u,
                        sessionId: c
                    }), {
                        success: !0,
                        error: void 0
                    }
                } catch (e) {
                    return {
                        success: !1,
                        error: e instanceof Error ? e.message : void 0
                    }
                }
            }
            async function f(e) {
                let {
                    billingData: t,
                    environment: a,
                    spaceStore: i
                } = e, o = i.getSpaceId();
                if (!t || !(0, n(192159).TB)(t) || !i.canAdmin()) return;
                let r = await a.api.callCellCompatibleApi({
                    eventName: "getCustomerOffersReceived",
                    environment: a,
                    data: {
                        spaceId: o
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: o
                    }
                });
                if ("failed" !== r.type) return (0, n(278662).Jd)(r.data)
            }

            function h(e) {
                var t, a;
                let i, {
                    billingData: o,
                    businessTrialOffer: r,
                    modalLastShownAt: s,
                    modalShownTimes: d
                } = e;
                if (!o) return !1;
                let l = (0, n(192159).DS)(o);
                if (t = s, a = l, t && n(906745).DateTime.fromMillis(t).startOf("day").equals(a.startOf("day")) || "business" === (0, n(192159).AW)(o) || "enterprise" === (0, n(192159).AW)(o) || !r || (0, n(44027).od)({
                        businessTrialOffer: r,
                        billingTime: l,
                        modalLastShownAt: s,
                        modalShownTimes: d
                    }) || (0, n(44027).z2)({
                        billingData: o
                    }) || void 0 === r || (0, n(875472).nb)(r)) return !1;
                let _ = r.offer.duration.days;
                if (void 0 === _) return !1;
                try {
                    i = (0, n(44027).rE)(_)
                } catch {
                    i = void 0
                }
                return void 0 !== i && (0, n(383378).tz)(r, i, l) || (0, n(44027).XF)(r, l) || (0, n(383378).V9)(r, l)
            }
            n.r(t), n.d(t, {
                closeBusinessTrialCCUpfrontModal: () => m,
                closeBusinessTrialEndingModal: () => s,
                closeBusinessTrialExplorePlanModal: () => u,
                closeBusinessTrialLossAversionModal: () => l,
                closeBusinessTrialStartModal: () => i,
                createBusinessTrial: () => p,
                determineShouldShowTrialEndingModal: () => h,
                getBusinessTrialUsingOffersReceived: () => f,
                openBusinessTrialCCUpfrontModal: () => c,
                openBusinessTrialEndingModal: () => o,
                openBusinessTrialExplorePlanModal: () => _,
                openBusinessTrialLossAversionModal: () => d,
                openBusinessTrialStartModal: () => a,
                updateBusinessTrialEndingModalState: () => r
            }), n(16280)
        },
        337592: (e, t, n) => {
            n.d(t, {
                Ki: () => i,
                d1: () => o,
                j8: () => d,
                s1: () => s,
                yX: () => r
            }), n(898992), n(737550), n(296540);
            var a = n(474848);

            function i(e) {
                if (!e) return;
                let t = (0, n(875472).b_)(e);
                return (0, a.jsx)(n(109939).sA, {
                    id: "coupon.duration.months",
                    defaultMessage: "{formattedMonths} months",
                    values: {
                        formattedMonths: (0, a.jsx)(n(109939).Gr, {
                            value: t.months
                        })
                    }
                })
            }

            function o(e, t, a, i) {
                return i && (0, n(90119).FV)(i, t) ? i : a && e === t && (0, n(90119).FV)(a.campaign, e) ? a.campaign : void 0
            }

            function r(e, t, a) {
                let i, o;
                if (e && (0, n(875472).rM)(e) && (i = (0, n(90119).MN)(e.offer.campaign, t), o = !!a && (0, n(90119).sZ)(e.offer.campaign, a), i && o)) return (0, n(875472).kd)(e)
            }

            function s(e) {
                return (0, n(875472).b_)(e).days
            }
            async function d({
                billingData: e,
                environment: t,
                sidebarSpaceStore: a,
                offerCampaign: i
            }) {
                return !a.id || !e || !a.getSetting("reach_block_limit_time") || (0, n(192159).Gm)(e) ? Promise.resolve(!1) : Promise.resolve(!!await n(617995).I.awaitData(t, {
                    offerCampaign: i,
                    spaceId: a.id
                }))
            }
        },
        383378: (e, t, n) => {
            n.d(t, {
                $G: () => i,
                Hj: () => o,
                Nh: () => _,
                V9: () => s,
                WL: () => a,
                cv: () => l,
                nS: () => r,
                tz: () => d
            }), n(581454);
            let a = 30,
                i = 5;

            function o(e, t) {
                var n;
                return (null == (n = e.subscription) ? void 0 : n.trialEnd) !== void 0 && "reset_and_invoice" === t.subscription.type
            }

            function r(e, t, a) {
                return e ? (0, n(850640).W_)(e.toMillis(), a ? ? "long", t) : void 0
            }

            function s(e, t) {
                let a = n(906745).DateTime.fromMillis(e.endDateMs);
                return (t ? ? n(906745).DateTime.now()) > a
            }

            function d(e, t, a) {
                let i = n(906745).DateTime.fromMillis(e.endDateMs),
                    o = a ? ? n(906745).DateTime.now();
                return o < i && i.diff(o).as("days") <= t
            }

            function l(e) {
                let {
                    prices: t,
                    products: i,
                    interval: o,
                    memberCount: r,
                    currency: s = "USD",
                    trialLengthDays: d = a,
                    trialStartDate: l = n(906745).DateTime.now()
                } = e;
                return {
                    items: i.map(e => ({
                        price: (0, n(982473).vk)(t, {
                            product: e,
                            interval: o,
                            currency: s
                        }),
                        quantity: r
                    })),
                    trialEnd: l.plus({
                        days: d
                    })
                }
            }

            function _(e) {
                return (0, n(722371).Xk)(e, "plus") && (0, n(722371).Xk)(e, "ai")
            }
        },
        607372: (e, t, n) => {
            n.d(t, {
                Mc: () => i,
                NM: () => a,
                Nf: () => r,
                dx: () => o
            }), n(16280), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(672577), n(737550);
            let a = new Set(["sites_custom_hostnames_add_on_monthly_usd_4", "sites_custom_hostnames_add_on_yearly_usd_36"]),
                i = ["ai_add_on_employee_discount_monthly", "ai_add_on_employee_discount_yearly"],
                o = ["ai_add_on_standard_sales_assisted", "ai_add_on_standard_sales_assisted_eur", "ai_add_on_standard_sales_assisted_gbp", "ai_add_on_standard_sales_assisted_jpy", "ai_add_on_standard_sales_assisted_krw", "ai_add_on_employee_discount_monthly", "ai_add_on_employee_discount_yearly", "ai_add_on_marketing_discount_monthly", "ai_add_on_marketing_discount_yearly", "sites_custom_hostnames_add_on_sales_assisted_gbp", "sites_custom_hostnames_add_on_sales_assisted_usd", "sites_custom_hostnames_add_on_sales_assisted_eur", "sites_custom_hostnames_add_on_sales_assisted_jpy", "sites_custom_hostnames_add_on_sales_assisted_krw", "ai_add_on_standard_trial_monthly_usd", "ai_add_on_standard_trial_yearly_usd", "ai_add_on_standard_trial_monthly_eur", "ai_add_on_standard_trial_yearly_eur", "ai_add_on_standard_trial_monthly_gbp", "ai_add_on_standard_trial_yearly_gbp", "ai_add_on_standard_trial_monthly_jpy", "ai_add_on_standard_trial_yearly_jpy", "ai_add_on_standard_trial_monthly_krw", "ai_add_on_standard_trial_yearly_krw", "free_ai_credit_pack_100_monthly", "ai_add_on_standard_monthly_10", "ai_add_on_standard_monthly_eur", "ai_add_on_standard_monthly_gbp", "ai_add_on_standard_monthly_jpy", "ai_add_on_standard_monthly_krw", "ai_add_on_standard_yearly_96", "ai_add_on_standard_yearly_eur", "ai_add_on_standard_yearly_gbp", "ai_add_on_standard_yearly_jpy", "ai_add_on_standard_yearly_krw", "sites_custom_hostnames_add_on_monthly_usd", "sites_custom_hostnames_add_on_yearly_usd", "sites_custom_hostnames_add_on_monthly_usd_4", "sites_custom_hostnames_add_on_yearly_usd_36", "sites_custom_hostnames_add_on_monthly_eur", "sites_custom_hostnames_add_on_yearly_eur", "sites_custom_hostnames_add_on_monthly_gbp", "sites_custom_hostnames_add_on_yearly_gbp", "sites_custom_hostnames_add_on_monthly_jpy", "sites_custom_hostnames_add_on_yearly_jpy", "sites_custom_hostnames_add_on_monthly_krw", "sites_custom_hostnames_add_on_yearly_krw", "ai_credit_pack_100_monthly_usd_revised", "ai_credit_pack_100_monthly_eur", "ai_credit_pack_100_monthly_gbp", "ai_credit_pack_100_monthly_jpy", "ai_credit_pack_100_monthly_krw"];

            function r(e) {
                return e === n(101787)._D_
            }
        },
        661044: (e, t, n) => {
            function a(e, t = !0) {
                t && function(e, t) {
                    if ((0, n(730994).Ku)(e), ("assistantCompletionPopup" === t.type || "agentCompletionPopup" === t.type) && ("results" === t.stage || "initialPrompt" === t.stage) && ("textSelection" === t.context.type || "cursor" === t.context.type)) {
                        let a = t.context.textSelection;
                        n(374176).default.afterNextFlush(() => {
                            (0, n(726923).setMultiSelection)({
                                multiSelection: a
                            }),
                            function(e) {
                                let {
                                    multiSelection: t,
                                    environment: a
                                } = e;
                                if (void 0 === t.start || void 0 === t.end || !Number.isFinite(t.start.index) || !Number.isFinite(t.end.index)) return;
                                let i = n(521595).n.findNodeFromStore(t.start.store),
                                    o = n(521595).n.findNodeFromStore(t.end.store);
                                if (!i || !o) return;
                                let r = (0, n(536614).vA)(i, t.start.index),
                                    s = (0, n(536614).vA)(o, t.end.index),
                                    d = document.createRange();
                                d.setStart(r.container, r.offset), d.setEnd(s.container, s.offset), n(239134).set(d, a.device)
                            }({
                                multiSelection: a,
                                environment: e
                            })
                        })
                    }
                }(e, n(304636).default.state), n(304636).default.setState({
                    type: "closed"
                })
            }
            async function i(e) {
                let {
                    environment: t,
                    from: a,
                    forceAgentWriter: i
                } = e, {
                    context: o,
                    prefilledValue: r,
                    sessionId: s
                } = e, {
                    assistantDependency: d
                } = await Promise.resolve().then(n.bind(n, 310639)), l = await d.load();
                if (!await l.assistantMenuActions.closeAssistantRightHandSideMenu({
                        environment: t
                    })) return;
                let _ = {
                    type: "closed"
                };
                if ("closed" === n(304636).default.state.type && (o || (o = (0, n(420459).G4)()), o))
                    if (i || (0, n(828294).a)("agent_writer")) _ = {
                        type: "agentCompletionPopup",
                        stage: "initialPrompt",
                        context: o,
                        from: a,
                        prefilledValue: e.prefilledTextValue ? ? (0, n(247438).x9d)(r ? ? ""),
                        pendingSkill: e.agentPrebuiltPromptType,
                        autoSubmit: e.autoSubmit,
                        onAccept: e.onAccept,
                        acceptButtonTooltipOverride: e.acceptButtonTooltipOverride
                    };
                    else {
                        var u;
                        r || (r = ""), s || (s = (0, n(818963).gC)()), _ = {
                            type: "assistantCompletionPopup",
                            stage: "initialPrompt",
                            context: o,
                            from: a,
                            prefilledValue: r,
                            sessionId: s,
                            loading: !1,
                            hasErrored: !1
                        };
                        let e = (0, n(974410).f)(null == (u = o) ? void 0 : u.currentPage);
                        e && t.api.callApi({
                            eventName: "publishAiSession",
                            environment: t,
                            data: {
                                inference_type: "writer",
                                spaceId: e.id,
                                id: s,
                                metadata: {
                                    from: a
                                }
                            }
                        })
                    }
                n(304636).default.setState(_),
                    function(e) {
                        let {
                            environment: t,
                            promptForAnalytics: a
                        } = e, {
                            state: i
                        } = n(304636).default;
                        if ("assistantCompletionPopup" === i.type && "results" !== i.stage) {
                            n(218744).default.checkGate({
                                gateName: "mobile_assistant_prevent_clear_selection"
                            }) || (0, n(525779).clear)({
                                environment: t
                            });
                            let e = i.sessionId,
                                o = n(838448).default.getSessionContext(e);
                            n(942806).trackAICompletionPopupOpen(t, {
                                session_id: i.sessionId,
                                prompt_key: (null == a ? void 0 : a.key) ? ? "unknown",
                                from: i.from,
                                sessionContext: o
                            }), (0, n(259413).V)({
                                dismissed: !1,
                                environment: t,
                                trackCreateBlock: n(549960).vH
                            })
                        }
                    }(e)
            }

            function o(e) {
                let {
                    environment: t,
                    prefilledValue: a,
                    from: o
                } = e, r = (0, n(420459).gu)();
                r && i({
                    environment: t,
                    from: o ? ? "page_menu",
                    sessionId: n(92513).JW(),
                    context: r,
                    prefilledValue: a,
                    promptForAnalytics: void 0
                })
            }
            n.r(t), n.d(t, {
                closeInitialPromptAndEndSession: () => a,
                openHelpMeWriteGenericPopup: () => o,
                toggleInitialPrompt: () => i
            })
        },
        736462: (e, t, n) => {
            n.d(t, {
                Ab: () => s,
                GW: () => S,
                Jx: () => v,
                Kg: () => b,
                RY: () => h,
                S_: () => M,
                UP: () => w,
                UZ: () => f,
                Y_: () => o,
                eI: () => u,
                hh: () => a,
                jI: () => l,
                jp: () => c,
                m7: () => _,
                m8: () => d,
                nW: () => p,
                nn: () => y,
                pj: () => m,
                vd: () => i,
                wl: () => r,
                xw: () => g
            });
            let a = 360,
                i = 800,
                o = 450,
                r = 500,
                s = 15,
                d = 50,
                l = 15,
                _ = .96,
                u = 450,
                c = 300,
                m = 700,
                p = 200,
                f = {
                    duration: 200
                },
                h = 60,
                y = 80,
                g = 10,
                v = .28,
                S = 10,
                w = 600,
                b = {
                    hiddenVariant: {
                        transform: "translateX(calc(var(--direction, 1) * 20%))",
                        opacity: 0
                    },
                    visibleVariant: {
                        transform: "translateX(0%)",
                        opacity: 1
                    }
                },
                M = {
                    duration: .1,
                    ease: "easeOut"
                }
        },
        822284: (e, t, n) => {
            n.d(t, {
                BS: () => o,
                BusinessTrialEndingModalStore: () => i,
                HL: () => a,
                ZJ: () => s,
                jz: () => r
            });
            let a = n(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    potentialCampaigns: []
                }, {
                    name: "BusinessTrialStartModalStore"
                }),
                i = n(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    recentPageStores: [],
                    verifiedPageStores: [],
                    teamStores: [],
                    workspaceUserStores: [],
                    connectedApps: [],
                    workflowStores: [],
                    numAiMeetingMinutes: 0,
                    modalState: "initial"
                }, {
                    name: "BusinessTrialEndingModalStore"
                }),
                o = n(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    connectedApps: [],
                    teamStores: [],
                    pageStores: [],
                    onSecondaryButtonClick: void 0
                }, {
                    name: "BusinessTrialLossAversionModalStore"
                }),
                r = n(546605).Store.createValue({
                    open: !1,
                    connectedApps: [],
                    teamStores: [],
                    pageStores: []
                }, {
                    name: "BusinessTrialExplorePlanModalStore"
                }),
                s = n(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    trialCampaign: void 0,
                    showBillingIntervalSelect: !1
                }, {
                    name: "BusinessTrialCCUpfrontModalStore"
                })
        }
    }
]);