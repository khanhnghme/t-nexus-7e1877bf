"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [54215], {
        225929: (e, t, i) => {
            function n(e) {
                if (!i(295180).Vu.includes(e)) throw new(i(101787)).rTV("Rating must be an integer between 1 and 5.", {
                    type: "marketplace_listing_review_invalid_rating"
                });
                return !0
            }

            function r(e) {
                let t = e.trim();
                if (t.length < 3) throw new(i(101787)).rTV("Title too short", {
                    type: "marketplace_listing_review_title_too_short"
                });
                if (t.length > 100) throw new(i(101787)).rTV("Title too long", {
                    type: "marketplace_listing_review_title_too_long"
                })
            }

            function o(e) {
                let t = e.trim();
                if (t.length < 50) throw new(i(101787)).rTV("Description too short", {
                    type: "marketplace_listing_review_description_too_short"
                });
                if (t.length > 1500) throw new(i(101787)).rTV("Title too long", {
                    type: "marketplace_listing_review_description_too_long"
                })
            }

            function a(e) {
                let t = e.trim();
                if (0 === t.length) throw new(i(101787)).rTV("Name is required", {
                    type: "marketplace_listing_review_name_too_short"
                });
                if (t.length > 40) throw new(i(101787)).rTV("Name too long", {
                    type: "marketplace_listing_review_name_too_long"
                })
            }

            function l(e) {
                let t = e.trim();
                if (t.length < 5) throw new(i(101787)).rTV("Creator response too short", {
                    type: "marketplace_listing_review_creator_response_too_short"
                });
                if (t.length > 1500) throw new(i(101787)).rTV("Creator response too long", {
                    type: "marketplace_listing_review_creator_response_too_long"
                })
            }

            function s(e) {
                return void 0 !== e.getTitle() && void 0 !== e.getSerializedContent()
            }

            function d(e, t) {
                return t !== i(94243).J6 && 15 > (0, i(362008).YH)(e)
            }

            function u(e) {
                switch (e) {
                    case "mostRecent":
                        return {
                            columnName: "updated_time",
                            direction: "descending"
                        };
                    case "highestRating":
                        return {
                            columnName: "rating",
                            direction: "descending"
                        };
                    case "lowestRating":
                        return {
                            columnName: "rating",
                            direction: "ascending"
                        };
                    default:
                        (0, i(722371).HB)(e)
                }
            }
            i.d(t, {
                Bl: () => n,
                IH: () => r,
                Lh: () => u,
                Mh: () => s,
                RY: () => a,
                VP: () => d,
                _A: () => o,
                n$: () => l
            })
        },
        369785: (e, t, i) => {
            i.d(t, {
                A: () => a
            });
            var n = () => i(546605);
            let r = {
                reviewIdCache: {},
                isOpen: !1,
                acquisitionId: "",
                productType: void 0,
                stage: "rating",
                rating: 0,
                source: void 0
            };
            class o extends n().Store {
                getInitialState() {
                    return { ...r
                    }
                }
                setReviewId(e, t) {
                    this.setState({ ...this.state,
                        reviewIdCache: { ...this.state.reviewIdCache,
                            [e]: t
                        }
                    })
                }
                getReviewId(e) {
                    return this.state.reviewIdCache[e]
                }
                openModal({
                    stage: e,
                    productType: t,
                    acquisitionId: i,
                    rating: n,
                    source: o
                }) {
                    this.setState({ ...r,
                        reviewIdCache: this.state.reviewIdCache,
                        isOpen: !0,
                        productType: t,
                        acquisitionId: i,
                        stage: e,
                        rating: n || 0,
                        source: o
                    })
                }
                closeModal() {
                    this.setState({ ...r,
                        reviewIdCache: this.state.reviewIdCache
                    })
                }
                updateState(e) {
                    this.setState({ ...this.state,
                        ...e
                    })
                }
            }
            let a = new o
        },
        398271: (e, t, i) => {
            i.r(t), i.d(t, {
                MaybeMarketplaceReviewNudge: () => o
            });
            var n = i(296540),
                r = i(474848);

            function o(e) {
                var t, o, a;
                let l, s, {
                        blockStore: d
                    } = e,
                    u = (0, i(533992).v3)(),
                    {
                        installationPointer: c,
                        version: g,
                        lastEditedById: v,
                        lastEditedTime: h,
                        createdTime: w
                    } = (t = d, (0, i(682985).K8)(() => {
                        var e;
                        if (!t.isDefined()) return {};
                        let i = t.getModel();
                        return {
                            installationPointer: i.getIsImprintableBlock() ? null == (e = i.getFormat().installation_imprint) ? void 0 : e.pointer : void 0,
                            lastEditedById: t.getLastEditedById(),
                            lastEditedTime: t.getLastEditedTime(),
                            createdTime: t.getCreatedTime(),
                            version: i.getVersion()
                        }
                    }, [t])),
                    {
                        acquisitionPointer: _
                    } = (o = c, l = (0, i(533992).v3)(), (0, i(682985).K8)(() => {
                        if (!o) return {};
                        let e = new(i(912977)).f(l, o);
                        return {
                            acquisitionPointer: null == e ? void 0 : e.getAcquisitionPointer()
                        }
                    }, [l, o])),
                    {
                        customerPointer: p,
                        acquisitionStatus: m,
                        listingId: f,
                        acquisitionId: I,
                        succeededTime: y
                    } = (a = _, s = (0, i(533992).v3)(), (0, i(682985).K8)(() => {
                        var e, t;
                        if (!a) return {};
                        let n = new(i(48922)).y(s, a);
                        return {
                            acquisitionStatus: null == n ? void 0 : n.getStatus(),
                            succeededTime: (null == (e = n.getAttributes()) ? void 0 : e.succeeded_time) ? ? n.getCreatedTime(),
                            customerPointer: null == n ? void 0 : n.getCustomerPointer(),
                            listingId: null == n ? void 0 : n.getListingId(),
                            acquisitionId: null == n || null == (t = n.getModel()) ? void 0 : t.id
                        }
                    }, [s, a])),
                    {
                        acquirerId: T,
                        customerId: C
                    } = function(e) {
                        let {
                            customerPointer: t,
                            acquisitionStatus: n,
                            succeededTime: r,
                            listingId: o
                        } = e, a = (0, i(533992).v3)();
                        return (0, i(682985).K8)(() => {
                            var e, l;
                            if (!t || "succeeded" !== n || !o || !r || (0, i(225929).VP)(r, i(832375).XXO)) return {};
                            let s = i(728372).AppStoreCurrentUserSettingsStore.state;
                            if (!(null != s && s.isDefined())) return {};
                            let d = s.getSettingsStore().getKeyStore("marketplace_review_nudge").getValue();
                            if (Object.keys(d || {}).length >= 10 || (null == (e = (d || {})[o]) ? void 0 : e.length) >= 1) return {};
                            let u = new(i(818869)).z(a, t);
                            return {
                                acquirerId: null == u ? void 0 : u.getAcquirerId(),
                                customerId: null == u || null == (l = u.getModel()) ? void 0 : l.id
                            }
                        }, [a, t, n, o, r])
                    }({
                        customerPointer: p,
                        acquisitionStatus: m,
                        succeededTime: y,
                        listingId: f
                    }),
                    k = function(e) {
                        let {
                            currentUserId: t,
                            listingId: i,
                            customerId: r,
                            acquirerId: o,
                            version: a,
                            lastEditedById: l,
                            lastEditedTime: s,
                            createdTime: d
                        } = e, u = (0, n.useRef)(Date.now());
                        return !!r && !!o && !!i && !!a && !!l && !!s && !!d && !(s < u.current) && o === t && l === t && !((s - d) / 6e4 < 15) && !(a < 10)
                    }({
                        currentUserId: u.currentUser.id,
                        listingId: f,
                        customerId: C,
                        acquirerId: T,
                        version: g,
                        lastEditedById: v,
                        lastEditedTime: h,
                        createdTime: w
                    }),
                    {
                        reviewId: R,
                        isReady: S
                    } = function(e) {
                        let {
                            acquisitionId: t,
                            listingId: r,
                            customerId: o,
                            shouldDisplayNudge: a
                        } = e, l = (0, i(533992).v3)(), [s, d] = (0, n.useState)(), [u, c] = (0, i(97668).V$)(async () => {
                            if (r && o && t) {
                                let e = await l.api.callApi({
                                    eventName: "getMarketplaceListingReviewForCustomer",
                                    environment: l,
                                    data: {
                                        listingId: r,
                                        customerId: o
                                    }
                                });
                                if ("success" === e.type && e.data.success) {
                                    let {
                                        reviewId: n
                                    } = e.data;
                                    i(369785).A.setReviewId(t, n), d(n)
                                }
                            }
                        }, [l, r, o, t]), g = !!(a && r && o && t);
                        return (0, n.useEffect)(() => {
                            g && c()
                        }, [g, c]), {
                            reviewId: s,
                            isReady: "resolved" === u.status
                        }
                    }({
                        acquisitionId: I,
                        listingId: f,
                        customerId: C,
                        shouldDisplayNudge: k
                    }),
                    {
                        isReady: V,
                        isComplete: b,
                        rating: M
                    } = (0, i(539991).Z)(R);
                return k && S && V && !b && !M && I && f ? (0, r.jsx)(i(40915).lK, {
                    acquisitionId: I,
                    listingId: f
                }) : null
            }
        },
        539991: (e, t, i) => {
            function n(e) {
                return r((0, i(682985).K8)(() => i(369785).A.getReviewId(e), [e]))
            }

            function r(e) {
                let t = (0, i(533992).v3)();
                return (0, i(682985).K8)(() => {
                    if (e) {
                        let n = new(i(207919)).J(t, {
                                table: i(832375).UNl,
                                id: e
                            }),
                            r = n.isReady(),
                            o = n.getModel();
                        return {
                            isReady: r,
                            isComplete: !!(o && (0, i(225929).Mh)(o)),
                            rating: n.getRating()
                        }
                    }
                    return {
                        isComplete: !1,
                        isReady: !0
                    }
                }, [t, e])
            }
            i.d(t, {
                L: () => n,
                Z: () => r
            })
        }
    }
]);