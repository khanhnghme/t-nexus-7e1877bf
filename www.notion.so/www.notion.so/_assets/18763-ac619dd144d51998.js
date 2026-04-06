"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
[18763], {
    718763: (e, t, n) => {
        let r, i, s, o, a, l, u, c, d, p, h, f, m, g, _, y, v, b, S, w, k, E, x, C, I, T, M, A, R, O, L, P;
        n.r(t), n.d(t, {
            BrowserClient: () => lz,
            MULTIPLEXED_TRANSPORT_EXTRA_KEY: () => i0,
            OpenFeatureIntegrationHook: () => mb,
            SDK_VERSION: () => t2,
            SEMANTIC_ATTRIBUTE_SENTRY_OP: () => rv,
            SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => rb,
            SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => r_,
            SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => rg,
            Scope: () => n2,
            WINDOW: () => iP,
            addBreadcrumb: () => i3,
            addEventProcessor: () => iM,
            addIntegration: () => i8,
            breadcrumbsIntegration: () => uT,
            browserApiErrorsIntegration: () => uA,
            browserProfilingIntegration: () => mm,
            browserSessionIntegration: () => uP,
            browserTracingIntegration: () => fz,
            buildLaunchDarklyFlagUsedHandler: () => my,
            captureConsoleIntegration: () => so,
            captureEvent: () => ig,
            captureException: () => ih,
            captureFeedback: () => sa,
            captureMessage: () => im,
            captureSession: () => iL,
            chromeStackLineParser: () => l5,
            close: () => iC,
            consoleLoggingIntegration: () => sw,
            contextLinesIntegration: () => u6,
            continueTrace: () => sN,
            createConsolaReporter: () => sV,
            createLangChainCallbackHandler: () => oG,
            createTransport: () => o1,
            createUserFeedbackEnvelope: () => ua,
            cultureContextIntegration: () => uN,
            dedupeIntegration: () => o2,
            defaultRequestInstrumentationOptions: () => fT,
            defaultStackLineParsers: () => ui,
            defaultStackParser: () => us,
            diagnoseSdkConnectivity: () => mC,
            elementTimingIntegration: () => fX,
            endSession: () => iR,
            eventFiltersIntegration: () => o8,
            eventFromException: () => lB,
            eventFromMessage: () => lW,
            exceptionFromError: () => lD,
            extraErrorDataIntegration: () => at,
            featureFlagsIntegration: () => ao,
            feedbackAsyncIntegration: () => iB,
            feedbackIntegration: () => iW,
            feedbackSyncIntegration: () => iW,
            flush: () => ix,
            forceLoad: () => uJ,
            functionToStringIntegration: () => al,
            geckoStackLineParser: () => l8,
            getActiveSpan: () => r9,
            getClient: () => rl,
            getCurrentScope: () => rr,
            getDefaultIntegrations: () => uz,
            getFeedback: () => eJ,
            getGlobalScope: () => rs,
            getIsolationScope: () => ri,
            getReplay: () => hG,
            getRootSpan: () => r7,
            getSpanDescendants: () => r8,
            getSpanStatusFromHttpCode: () => rF,
            getTraceData: () => au,
            globalHandlersIntegration: () => uD,
            graphqlClientIntegration: () => cl,
            growthbookIntegration: () => mE,
            httpClientIntegration: () => u0,
            httpContextIntegration: () => uU,
            inboundFiltersIntegration: () => o7,
            init: () => uV,
            instrumentAnthropicAiClient: () => a_,
            instrumentGoogleGenAIClient: () => ax,
            instrumentLangGraph: () => aI,
            instrumentOpenAiClient: () => aP,
            instrumentOutgoingRequests: () => fM,
            instrumentSupabaseClient: () => aW,
            isEnabled: () => iT,
            isInitialized: () => iI,
            lastEventId: () => iE,
            launchDarklyIntegration: () => m_,
            lazyLoadIntegration: () => iU,
            linkedErrorsIntegration: () => uH,
            logger: () => J,
            makeBrowserOfflineTransport: () => f3,
            makeFetchTransport: () => lX,
            makeMultiplexedTransport: () => i2,
            metrics: () => G,
            moduleMetadataIntegration: () => lt,
            onLoad: () => uG,
            openFeatureIntegration: () => mv,
            opera10StackLineParser: () => ut,
            opera11StackLineParser: () => ur,
            parameterize: () => aH,
            registerSpanErrorInstrumentation: () => lu,
            registerWebWorker: () => mM,
            replayCanvasIntegration: () => fp,
            replayIntegration: () => hz,
            reportPageLoaded: () => fZ,
            reportingObserverIntegration: () => uX,
            rewriteFramesIntegration: () => lh,
            sendFeedback: () => ej,
            setActiveSpanInBrowser: () => fQ,
            setContext: () => i_,
            setConversationId: () => ik,
            setCurrentClient: () => lf,
            setExtra: () => iv,
            setExtras: () => iy,
            setHttpStatus: () => rU,
            setMeasurement: () => sC,
            setTag: () => iS,
            setTags: () => ib,
            setUser: () => iw,
            showReportDialog: () => uK,
            spanToBaggageHeader: () => ia,
            spanToJSON: () => r1,
            spanToTraceHeader: () => rX,
            spotlightBrowserIntegration: () => mg,
            startBrowserTracingNavigationSpan: () => fJ,
            startBrowserTracingPageLoadSpan: () => fV,
            startInactiveSpan: () => sP,
            startNewTrace: () => sj,
            startSession: () => iA,
            startSpan: () => sO,
            startSpanManual: () => sL,
            statsigIntegration: () => mx,
            supabaseIntegration: () => aq,
            suppressTracing: () => s$,
            thirdPartyErrorFilterIntegration: () => lm,
            uiProfiler: () => lZ,
            unleashIntegration: () => mS,
            updateSpanName: () => it,
            webWorkerIntegration: () => mI,
            winjsStackLineParser: () => l9,
            withActiveSpan: () => sD,
            withIsolationScope: () => ra,
            withScope: () => ro,
            zodErrorsIntegration: () => lb
        });
        var N, D, $, j, F, U, B, W, q, H, z, V, J = {};
        n.r(J), n.d(J, {
            debug: () => aG,
            error: () => aX,
            fatal: () => aZ,
            fmt: () => az,
            info: () => aK,
            trace: () => aJ,
            warn: () => aY
        });
        var G = {};
        n.r(G), n.d(G, {
            count: () => a5,
            distribution: () => a6,
            gauge: () => a4
        });
        let K = globalThis,
            Y = "10.47.0";

        function X(e) {
            let t = e.__SENTRY__ = e.__SENTRY__ || {};
            return t.version = t.version || Y, t[Y] = t[Y] || {}
        }

        function Z(e, t, n = K) {
            let r = n.__SENTRY__ = n.__SENTRY__ || {},
                i = r[Y] = r[Y] || {};
            return i[e] || (i[e] = t())
        }

        function Q(e) {
            if (void 0 !== r) return r ? r(e) : e();
            let t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
            return t in K && "function" == typeof K[t] ? (r = K[t])(e) : (r = null, e())
        }

        function ee() {
            return Q(() => Math.random())
        }

        function et(e = K.crypto || K.msCrypto) {
            try {
                if (e ? .randomUUID) return Q(() => e.randomUUID()).replace(/-/g, "")
            } catch {}
            return i || (i = "10000000100040008000100000000000"), i.replace(/[018]/g, e => (e ^ (15 & 16 * ee()) >> e / 4).toString(16))
        }

        function en() {
            return Q(() => Date.now()) / 1e3
        }
        let er = Object.prototype.toString,
            ei = "_sentrySpan";

        function es(e, t) {
            if (t) try {
                Object.defineProperty(e, ei, {
                    value: t,
                    writable: !0,
                    configurable: !0
                })
            } catch {} else delete e[ei]
        }
        class eo {
            constructor() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
                    traceId: et(),
                    sampleRand: ee()
                }
            }
            clone() {
                let e = new eo;
                return e._breadcrumbs = [...this._breadcrumbs], e._tags = { ...this._tags
                }, e._attributes = { ...this._attributes
                }, e._extra = { ...this._extra
                }, e._contexts = { ...this._contexts
                }, this._contexts.flags && (e._contexts.flags = {
                    values: [...this._contexts.flags.values]
                }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._attachments = [...this._attachments], e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata
                }, e._propagationContext = { ...this._propagationContext
                }, e._client = this._client, e._lastEventId = this._lastEventId, e._conversationId = this._conversationId, es(e, this[ei]), e
            }
            setClient(e) {
                this._client = e
            }
            setLastEventId(e) {
                this._lastEventId = e
            }
            getClient() {
                return this._client
            }
            lastEventId() {
                return this._lastEventId
            }
            addScopeListener(e) {
                this._scopeListeners.push(e)
            }
            addEventProcessor(e) {
                return this._eventProcessors.push(e), this
            }
            setUser(e) {
                return this._user = e || {
                    email: void 0,
                    id: void 0,
                    ip_address: void 0,
                    username: void 0
                }, this._session && function(e, t = {}) {
                    if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || (s ? ? (s = function() {
                            let {
                                performance: e
                            } = K;
                            if (!e ? .now || !e.timeOrigin) return en;
                            let t = e.timeOrigin;
                            return () => (t + Q(() => e.now())) / 1e3
                        }()))(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : et()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
                    else if ("number" == typeof t.duration) e.duration = t.duration;
                    else {
                        let t = e.timestamp - e.started;
                        e.duration = t >= 0 ? t : 0
                    }
                    t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
                }(this._session, {
                    user: e
                }), this._notifyScopeListeners(), this
            }
            getUser() {
                return this._user
            }
            setConversationId(e) {
                return this._conversationId = e || void 0, this._notifyScopeListeners(), this
            }
            setTags(e) {
                return this._tags = { ...this._tags,
                    ...e
                }, this._notifyScopeListeners(), this
            }
            setTag(e, t) {
                return this.setTags({
                    [e]: t
                })
            }
            setAttributes(e) {
                return this._attributes = { ...this._attributes,
                    ...e
                }, this._notifyScopeListeners(), this
            }
            setAttribute(e, t) {
                return this.setAttributes({
                    [e]: t
                })
            }
            removeAttribute(e) {
                return e in this._attributes && (delete this._attributes[e], this._notifyScopeListeners()), this
            }
            setExtras(e) {
                return this._extra = { ...this._extra,
                    ...e
                }, this._notifyScopeListeners(), this
            }
            setExtra(e, t) {
                return this._extra = { ...this._extra,
                    [e]: t
                }, this._notifyScopeListeners(), this
            }
            setFingerprint(e) {
                return this._fingerprint = e, this._notifyScopeListeners(), this
            }
            setLevel(e) {
                return this._level = e, this._notifyScopeListeners(), this
            }
            setTransactionName(e) {
                return this._transactionName = e, this._notifyScopeListeners(), this
            }
            setContext(e, t) {
                return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
            }
            setSession(e) {
                return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
            }
            getSession() {
                return this._session
            }
            update(e) {
                if (!e) return this;
                let t = "function" == typeof e ? e(this) : e,
                    {
                        tags: n,
                        attributes: r,
                        extra: i,
                        user: s,
                        contexts: o,
                        level: a,
                        fingerprint: l = [],
                        propagationContext: u,
                        conversationId: c
                    } = (t instanceof eo ? t.getScopeData() : "[object Object]" === er.call(t) ? e : void 0) || {};
                return this._tags = { ...this._tags,
                    ...n
                }, this._attributes = { ...this._attributes,
                    ...r
                }, this._extra = { ...this._extra,
                    ...i
                }, this._contexts = { ...this._contexts,
                    ...o
                }, s && Object.keys(s).length && (this._user = s), a && (this._level = a), l.length && (this._fingerprint = l), u && (this._propagationContext = u), c && (this._conversationId = c), this
            }
            clear() {
                return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, es(this, void 0), this._attachments = [], this.setPropagationContext({
                    traceId: et(),
                    sampleRand: ee()
                }), this._notifyScopeListeners(), this
            }
            addBreadcrumb(e, t) {
                let n = "number" == typeof t ? t : 100;
                if (n <= 0) return this;
                let r = {
                    timestamp: en(),
                    ...e,
                    message: e.message ? function(e, t = 0) {
                        return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0,t)}...`
                    }(e.message, 2048) : e.message
                };
                return this._breadcrumbs.push(r), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), this._client ? .recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
            }
            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1]
            }
            clearBreadcrumbs() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this
            }
            addAttachment(e) {
                return this._attachments.push(e), this
            }
            clearAttachments() {
                return this._attachments = [], this
            }
            getScopeData() {
                return {
                    breadcrumbs: this._breadcrumbs,
                    attachments: this._attachments,
                    contexts: this._contexts,
                    tags: this._tags,
                    attributes: this._attributes,
                    extra: this._extra,
                    user: this._user,
                    level: this._level,
                    fingerprint: this._fingerprint || [],
                    eventProcessors: this._eventProcessors,
                    propagationContext: this._propagationContext,
                    sdkProcessingMetadata: this._sdkProcessingMetadata,
                    transactionName: this._transactionName,
                    span: this[ei],
                    conversationId: this._conversationId
                }
            }
            setSDKProcessingMetadata(e) {
                return this._sdkProcessingMetadata = function e(t, n, r = 2) {
                    if (!n || "object" != typeof n || r <= 0) return n;
                    if (t && 0 === Object.keys(n).length) return t;
                    let i = { ...t
                    };
                    for (let t in n) Object.prototype.hasOwnProperty.call(n, t) && (i[t] = e(i[t], n[t], r - 1));
                    return i
                }(this._sdkProcessingMetadata, e, 2), this
            }
            setPropagationContext(e) {
                return this._propagationContext = e, this
            }
            getPropagationContext() {
                return this._propagationContext
            }
            captureException(e, t) {
                let n = t ? .event_id || et();
                if (!this._client) return n;
                let r = Error("Sentry syntheticException");
                return this._client.captureException(e, {
                    originalException: e,
                    syntheticException: r,
                    ...t,
                    event_id: n
                }, this), n
            }
            captureMessage(e, t, n) {
                let r = n ? .event_id || et();
                if (!this._client) return r;
                let i = n ? .syntheticException ? ? Error(e);
                return this._client.captureMessage(e, t, {
                    originalException: e,
                    syntheticException: i,
                    ...n,
                    event_id: r
                }, this), r
            }
            captureEvent(e, t) {
                let n = e.event_id || t ? .event_id || et();
                return this._client && this._client.captureEvent(e, { ...t,
                    event_id: n
                }, this), n
            }
            _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                    e(this)
                }), this._notifyingListeners = !1)
            }
        }
        let ea = e => e instanceof Promise && !e[el],
            el = Symbol("chained PromiseLike");
        class eu {
            constructor(e, t) {
                let n, r;
                n = e || new eo, r = t || new eo, this._stack = [{
                    scope: n
                }], this._isolationScope = r
            }
            withScope(e) {
                var t, n, r, i;
                let s, o = this._pushScope();
                try {
                    s = e(o)
                } catch (e) {
                    throw this._popScope(), e
                }
                if (t = s, t ? .then && "function" == typeof t.then) {
                    let e;
                    return n = s, r = () => this._popScope(), i = () => this._popScope(), ea(e = n.then(e => (r(e), e), e => {
                        throw i(e), e
                    })) && ea(n) ? e : ((e, t) => {
                        let n = !1;
                        for (let r in e) {
                            if (r in t) continue;
                            n = !0;
                            let i = e[r];
                            "function" == typeof i ? Object.defineProperty(t, r, {
                                value: (...t) => i.apply(e, t),
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[r] = i
                        }
                        return n && Object.assign(t, {
                            [el]: !0
                        }), t
                    })(n, e)
                }
                return this._popScope(), s
            }
            getClient() {
                return this.getStackTop().client
            }
            getScope() {
                return this.getStackTop().scope
            }
            getIsolationScope() {
                return this._isolationScope
            }
            getStackTop() {
                return this._stack[this._stack.length - 1]
            }
            _pushScope() {
                let e = this.getScope().clone();
                return this._stack.push({
                    client: this.getClient(),
                    scope: e
                }), e
            }
            _popScope() {
                return !(this._stack.length <= 1) && !!this._stack.pop()
            }
        }

        function ec() {
            let e = (X(K), K),
                t = X(e);
            return t.stack = t.stack || new eu(Z("defaultCurrentScope", () => new eo), Z("defaultIsolationScope", () => new eo))
        }

        function ed(e) {
            return ec().withScope(e)
        }

        function ep(e, t) {
            let n = ec();
            return n.withScope(() => (n.getStackTop().scope = e, t(e)))
        }

        function eh(e) {
            return ec().withScope(() => e(ec().getIsolationScope()))
        }

        function ef(e) {
            let t = X(e);
            return t.acs ? t.acs : {
                withIsolationScope: eh,
                withScope: ed,
                withSetScope: ep,
                withSetIsolationScope: (e, t) => eh(t),
                getCurrentScope: () => ec().getScope(),
                getIsolationScope: () => ec().getIsolationScope()
            }
        }

        function em() {
            return ef((X(K), K)).getCurrentScope()
        }

        function eg() {
            return em().getClient()
        }

        function e_(e) {
            let t = eg();
            t && t.addIntegration(e)
        }
        let ey = K.document,
            ev = K.navigator,
            eb = "Report a Bug",
            eS = "Cancel",
            ew = "Send Bug Report",
            ek = "Confirm",
            eE = "Report a Bug",
            ex = "your.email@example.org",
            eC = "Email",
            eI = "What's the bug? What did you expect?",
            eT = "Description",
            eM = "Your Name",
            eA = "Name",
            eR = "Thank you for your report!",
            eO = "(required)",
            eL = "Add a screenshot",
            eP = "Remove screenshot",
            eN = "Highlight",
            eD = "Hide",
            e$ = "Remove",
            ej = (e, t = {
                includeReplay: !0
            }) => {
                if (!e.message) throw Error("Unable to submit feedback with empty message");
                let n = eg();
                if (!n) throw Error("No client setup, cannot send feedback.");
                e.tags && Object.keys(e.tags).length && em().setTags(e.tags);
                let r = function(e, t = {}, n = em()) {
                    let {
                        message: r,
                        name: i,
                        email: s,
                        url: o,
                        source: a,
                        associatedEventId: l,
                        tags: u
                    } = e, c = {
                        contexts: {
                            feedback: {
                                contact_email: s,
                                name: i,
                                message: r,
                                url: o,
                                source: a,
                                associated_event_id: l
                            }
                        },
                        type: "feedback",
                        level: "info",
                        tags: u
                    }, d = n ? .getClient() || eg();
                    return d && d.emit("beforeSendFeedback", c, t), n.captureEvent(c, t)
                }({
                    source: "api",
                    url: function() {
                        try {
                            return K.document.location.href
                        } catch {
                            return ""
                        }
                    }(),
                    ...e
                }, t);
                return new Promise((e, t) => {
                    let i = setTimeout(() => t("Unable to determine if Feedback was correctly sent."), 3e4),
                        s = n.on("afterSendEvent", (n, o) => {
                            if (n.event_id === r) return (clearTimeout(i), s(), o ? .statusCode && o.statusCode >= 200 && o.statusCode < 300) ? e(r) : o ? .statusCode === 403 ? t("Unable to send feedback. This could be because this domain is not in your list of allowed domains.") : t("Unable to send feedback. This could be because of network issues, or because you are using an ad-blocker.")
                        })
                })
            };

        function eF(e, t) {
            return { ...e,
                ...t,
                tags: { ...e.tags,
                    ...t.tags
                },
                onFormOpen: () => {
                    t.onFormOpen ? .(), e.onFormOpen ? .()
                },
                onFormClose: () => {
                    t.onFormClose ? .(), e.onFormClose ? .()
                },
                onSubmitSuccess: (n, r) => {
                    t.onSubmitSuccess ? .(n, r), e.onSubmitSuccess ? .(n, r)
                },
                onSubmitError: n => {
                    t.onSubmitError ? .(n), e.onSubmitError ? .(n)
                },
                onFormSubmitted: () => {
                    t.onFormSubmitted ? .(), e.onFormSubmitted ? .()
                },
                themeDark: { ...e.themeDark,
                    ...t.themeDark
                },
                themeLight: { ...e.themeLight,
                    ...t.themeLight
                }
            }
        }

        function eU(e, t) {
            return Object.entries(t).forEach(([t, n]) => {
                e.setAttributeNS(null, t, n)
            }), e
        }
        let eB = "rgba(88, 74, 192, 1)",
            eW = {
                foreground: "#2b2233",
                background: "#ffffff",
                accentForeground: "white",
                accentBackground: eB,
                successColor: "#268d75",
                errorColor: "#df3338",
                border: "1.5px solid rgba(41, 35, 47, 0.13)",
                boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
                outline: "1px auto var(--accent-background)",
                interactiveFilter: "brightness(95%)"
            },
            eq = {
                foreground: "#ebe6ef",
                background: "#29232f",
                accentForeground: "white",
                accentBackground: eB,
                successColor: "#2da98c",
                errorColor: "#f55459",
                border: "1.5px solid rgba(235, 230, 239, 0.15)",
                boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
                outline: "1px auto var(--accent-background)",
                interactiveFilter: "brightness(150%)"
            };

        function eH(e) {
            return `
  --foreground: ${e.foreground};
  --background: ${e.background};
  --accent-foreground: ${e.accentForeground};
  --accent-background: ${e.accentBackground};
  --success-color: ${e.successColor};
  --error-color: ${e.errorColor};
  --border: ${e.border};
  --box-shadow: ${e.boxShadow};
  --outline: ${e.outline};
  --interactive-filter: ${e.interactiveFilter};
  `
        }

        function ez({
            colorScheme: e,
            themeDark: t,
            themeLight: n,
            styleNonce: r
        }) {
            let i = ey.createElement("style");
            return i.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${"system"!==e?`color-scheme: only ${e};`:""}

  ${eH("dark"===e?{...eq,...t}:{...eW,...n})}
}

${"system"===e?`
@media (prefers-color-scheme: dark) {
  :host {
    color-scheme: only dark;

    ${eH({...eq,...t})}
  }
}`:""}
`, r && i.setAttribute("nonce", r), i
        }
        let eV = ({
            lazyLoadIntegration: e,
            getModalIntegration: t,
            getScreenshotIntegration: n
        }) => ({
            id: r = "sentry-feedback",
            autoInject: i = !0,
            showBranding: s = !0,
            isEmailRequired: o = !1,
            isNameRequired: a = !1,
            showEmail: l = !0,
            showName: u = !0,
            enableScreenshot: c = !0,
            useSentryUser: d = {
                email: "email",
                name: "username"
            },
            tags: p,
            styleNonce: h,
            scriptNonce: f,
            colorScheme: m = "system",
            themeLight: g = {},
            themeDark: _ = {},
            addScreenshotButtonLabel: y = eL,
            cancelButtonLabel: v = eS,
            confirmButtonLabel: b = ek,
            emailLabel: S = eC,
            emailPlaceholder: w = ex,
            formTitle: k = eE,
            isRequiredLabel: E = eO,
            messageLabel: x = eT,
            messagePlaceholder: C = eI,
            nameLabel: I = eA,
            namePlaceholder: T = eM,
            removeScreenshotButtonLabel: M = eP,
            submitButtonLabel: A = ew,
            successMessageText: R = eR,
            triggerLabel: O = eb,
            triggerAriaLabel: L = "",
            highlightToolText: P = eN,
            hideToolText: N = eD,
            removeHighlightText: D = e$,
            onFormOpen: $,
            onFormClose: j,
            onSubmitSuccess: F,
            onSubmitError: U,
            onFormSubmitted: B
        } = {}) => {
            let W = {
                    id: r,
                    autoInject: i,
                    showBranding: s,
                    isEmailRequired: o,
                    isNameRequired: a,
                    showEmail: l,
                    showName: u,
                    enableScreenshot: c,
                    useSentryUser: d,
                    tags: p,
                    styleNonce: h,
                    scriptNonce: f,
                    colorScheme: m,
                    themeDark: _,
                    themeLight: g,
                    triggerLabel: O,
                    triggerAriaLabel: L,
                    cancelButtonLabel: v,
                    submitButtonLabel: A,
                    confirmButtonLabel: b,
                    formTitle: k,
                    emailLabel: S,
                    emailPlaceholder: w,
                    messageLabel: x,
                    messagePlaceholder: C,
                    nameLabel: I,
                    namePlaceholder: T,
                    successMessageText: R,
                    isRequiredLabel: E,
                    addScreenshotButtonLabel: y,
                    removeScreenshotButtonLabel: M,
                    highlightToolText: P,
                    hideToolText: N,
                    removeHighlightText: D,
                    onFormClose: j,
                    onFormOpen: $,
                    onSubmitError: U,
                    onSubmitSuccess: F,
                    onFormSubmitted: B
                },
                q = null,
                H = null,
                z = [],
                V = e => {
                    if (!q) {
                        let t = ey.createElement("div");
                        t.id = String(e.id), ey.body.appendChild(t), q = t.attachShadow({
                            mode: "open"
                        }), H = ez(e), q.appendChild(H)
                    }
                    return q
                },
                J = async r => {
                    let i, s, o = r.enableScreenshot && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ev.userAgent) || /Macintosh/i.test(ev.userAgent) && ev.maxTouchPoints && ev.maxTouchPoints > 1) && !!isSecureContext;
                    try {
                        i = (t ? t() : await e("feedbackModalIntegration", f))(), e_(i)
                    } catch {
                        throw Error("[Feedback] Missing feedback modal integration!")
                    }
                    try {
                        let t = o ? n ? n() : await e("feedbackScreenshotIntegration", f) : void 0;
                        t && (s = t(), e_(s))
                    } catch {}
                    let a = i.createDialog({
                        options: { ...r,
                            onFormClose: () => {
                                a ? .close(), r.onFormClose ? .()
                            },
                            onFormSubmitted: () => {
                                a ? .close(), r.onFormSubmitted ? .()
                            }
                        },
                        screenshotIntegration: s,
                        sendFeedback: ej,
                        shadow: V(r)
                    });
                    return a
                },
                G = (e, t = {}) => {
                    let n = eF(W, t),
                        r = "string" == typeof e ? ey.querySelector(e) : "function" == typeof e.addEventListener ? e : null;
                    if (!r) throw Error("Unable to attach to target element");
                    let i = null,
                        s = async () => {
                            i || (i = await J({ ...n,
                                onFormSubmitted: () => {
                                    i ? .removeFromDom(), n.onFormSubmitted ? .()
                                }
                            })), i.appendToDom(), i.open()
                        };
                    r.addEventListener("click", s);
                    let o = () => {
                        z = z.filter(e => e !== o), i ? .removeFromDom(), i = null, r.removeEventListener("click", s)
                    };
                    return z.push(o), o
                },
                Y = (e = {}) => {
                    let t = eF(W, e),
                        n = V(t),
                        r = function({
                            triggerLabel: e,
                            triggerAriaLabel: t,
                            shadow: n,
                            styleNonce: r
                        }) {
                            let i, s, o, a, l, u, c, d, p = ey.createElement("button");
                            if (p.type = "button", p.className = "widget__actor", p.ariaHidden = "false", p.ariaLabel = t || e || eb, p.appendChild((s = eU((i = e => K.document.createElementNS("http://www.w3.org/2000/svg", e))("svg"), {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "var(--actor-color, var(--foreground))"
                                }), o = eU(i("g"), {
                                    clipPath: "url(#clip0_57_80)"
                                }), a = eU(i("path"), {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
                                }), s.appendChild(o).appendChild(a), l = i("defs"), u = eU(i("clipPath"), {
                                    id: "clip0_57_80"
                                }), c = eU(i("rect"), {
                                    width: "20",
                                    height: "20",
                                    fill: "white"
                                }), u.appendChild(c), l.appendChild(u), s.appendChild(l).appendChild(u).appendChild(c), s)), e) {
                                let t = ey.createElement("span");
                                t.appendChild(ey.createTextNode(e)), p.appendChild(t)
                            }
                            let h = ((d = ey.createElement("style")).textContent = `
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`, r && d.setAttribute("nonce", r), d);
                            return {
                                el: p,
                                appendToDom() {
                                    n.appendChild(h), n.appendChild(p)
                                },
                                removeFromDom() {
                                    p.remove(), h.remove()
                                },
                                show() {
                                    p.ariaHidden = "false"
                                },
                                hide() {
                                    p.ariaHidden = "true"
                                }
                            }
                        }({
                            triggerLabel: t.triggerLabel,
                            triggerAriaLabel: t.triggerAriaLabel,
                            shadow: n,
                            styleNonce: h
                        });
                    return G(r.el, { ...t,
                        onFormOpen() {
                            r.hide()
                        },
                        onFormClose() {
                            r.show()
                        },
                        onFormSubmitted() {
                            r.show()
                        }
                    }), r
                };
            return {
                name: "Feedback",
                setupOnce() {
                    let e;
                    "u" > typeof window && (!(!("u" > typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call("u" > typeof process ? process : 0)) || (e = K.process, e ? .type === "renderer")) && W.autoInject && ("loading" === ey.readyState ? ey.addEventListener("DOMContentLoaded", () => Y().appendToDom()) : Y().appendToDom())
                },
                attachTo: G,
                createWidget(e = {}) {
                    let t = Y(eF(W, e));
                    return t.appendToDom(), t
                },
                createForm: async (e = {}) => J(eF(W, e)),
                setTheme(e) {
                    if (W.colorScheme = e, q) {
                        let e = ez(W);
                        H ? q.replaceChild(e, H) : q.prepend(e), H = e
                    }
                },
                remove() {
                    q && (q.parentElement ? .remove(), q = null, H = null), z.forEach(e => e()), z = []
                }
            }
        };

        function eJ() {
            let e = eg();
            return e ? .getIntegrationByName("Feedback")
        }
        var eG, eK, eY, eX, eZ, eQ, e0, e1 = {},
            e2 = [],
            e3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
            e5 = Array.isArray;

        function e4(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function e6(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function e8(e, t, n) {
            var r, i, s, o = {};
            for (s in t) "key" == s ? r = t[s] : "ref" == s ? i = t[s] : o[s] = t[s];
            if (arguments.length > 2 && (o.children = arguments.length > 3 ? eG.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
                for (s in e.defaultProps) void 0 === o[s] && (o[s] = e.defaultProps[s]);
            return e7(e, o, r, i, null)
        }

        function e7(e, t, n, r, i) {
            var s = {
                type: e,
                props: t,
                key: n,
                ref: r,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                constructor: void 0,
                __v: null == i ? ++eY : i,
                __i: -1,
                __u: 0
            };
            return null == i && null != eK.vnode && eK.vnode(s), s
        }

        function e9(e) {
            return e.children
        }

        function te(e, t) {
            this.props = e, this.context = t
        }

        function tt(e, t) {
            if (null == t) return e.__ ? tt(e.__, e.__i + 1) : null;
            for (var n; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
            return "function" == typeof e.type ? tt(e) : null
        }

        function tn(e) {
            (!e.__d && (e.__d = !0) && eX.push(e) && !tr.__r++ || eZ !== eK.debounceRendering) && ((eZ = eK.debounceRendering) || eQ)(tr)
        }

        function tr() {
            var e, t, n, r = [],
                i = [];
            for (eX.sort(e0); e = eX.shift();) e.__d && (n = eX.length, t = function(e, t, n) {
                var r, i = e.__v,
                    s = i.__e,
                    o = e.__P;
                if (o) return (r = e4({}, i)).__v = i.__v + 1, eK.vnode && eK.vnode(r), tu(o, r, i, e.__n, void 0 !== o.ownerSVGElement, 32 & i.__u ? [s] : null, t, null == s ? tt(i) : s, !!(32 & i.__u), n), r.__.__k[r.__i] = r, r.__d = void 0, r.__e != s && function e(t) {
                    var n, r;
                    if (null != (t = t.__) && null != t.__c) {
                        for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                            if (null != (r = t.__k[n]) && null != r.__e) {
                                t.__e = t.__c.base = r.__e;
                                break
                            }
                        return e(t)
                    }
                }(r), r
            }(e, r, i) || t, 0 === n || eX.length > n ? (tc(r, t, i), i.length = r.length = 0, t = void 0, eX.sort(e0)) : t && eK.__c && eK.__c(t, e2));
            t && tc(r, t, i), tr.__r = 0
        }

        function ti(e, t, n, r, i, s, o, a, l, u, c) {
            var d, p, h, f, m, g = r && r.__k || e2,
                _ = t.length;
            for (n.__d = l, function(e, t, n) {
                    var r, i, s, o, a, l = t.length,
                        u = n.length,
                        c = u,
                        d = 0;
                    for (e.__k = [], r = 0; r < l; r++) null != (i = e.__k[r] = null == (i = t[r]) || "boolean" == typeof i || "function" == typeof i ? null : "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? e7(null, i, null, null, i) : e5(i) ? e7(e9, {
                        children: i
                    }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? e7(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) ? (i.__ = e, i.__b = e.__b + 1, a = function(e, t, n, r) {
                        var i = e.key,
                            s = e.type,
                            o = n - 1,
                            a = n + 1,
                            l = t[n];
                        if (null === l || l && i == l.key && s === l.type) return n;
                        if (r > +(null != l && 0 == (131072 & l.__u)))
                            for (; o >= 0 || a < t.length;) {
                                if (o >= 0) {
                                    if ((l = t[o]) && 0 == (131072 & l.__u) && i == l.key && s === l.type) return o;
                                    o--
                                }
                                if (a < t.length) {
                                    if ((l = t[a]) && 0 == (131072 & l.__u) && i == l.key && s === l.type) return a;
                                    a++
                                }
                            }
                        return -1
                    }(i, n, o = r + d, c), i.__i = a, s = null, -1 !== a && (c--, (s = n[a]) && (s.__u |= 131072)), null == s || null === s.__v ? (-1 == a && d--, "function" != typeof i.type && (i.__u |= 65536)) : a !== o && (a === o + 1 ? d++ : a > o ? c > l - o ? d += a - o : d-- : d = a < o && a == o - 1 ? a - o : 0, a !== r + d && (i.__u |= 65536))) : (s = n[r]) && null == s.key && s.__e && (s.__e == e.__d && (e.__d = tt(s)), tp(s, s, !1), n[r] = null, c--);
                    if (c)
                        for (r = 0; r < u; r++) null != (s = n[r]) && 0 == (131072 & s.__u) && (s.__e == e.__d && (e.__d = tt(s)), tp(s, s))
                }(n, t, g), l = n.__d, d = 0; d < _; d++) null != (h = n.__k[d]) && "boolean" != typeof h && "function" != typeof h && (p = -1 === h.__i ? e1 : g[h.__i] || e1, h.__i = d, tu(e, h, p, i, s, o, a, l, u, c), f = h.__e, h.ref && p.ref != h.ref && (p.ref && td(p.ref, null, h), c.push(h.ref, h.__c || f, h)), null == m && null != f && (m = f), 65536 & h.__u || p.__k === h.__k ? l = function e(t, n, r) {
                var i, s;
                if ("function" == typeof t.type) {
                    for (i = t.__k, s = 0; i && s < i.length; s++) i[s] && (i[s].__ = t, n = e(i[s], n, r));
                    return n
                }
                t.__e != n && (r.insertBefore(t.__e, n || null), n = t.__e);
                do n = n && n.nextSibling; while (null != n && 8 === n.nodeType) return n
            }(h, l, e) : "function" == typeof h.type && void 0 !== h.__d ? l = h.__d : f && (l = f.nextSibling), h.__d = void 0, h.__u &= -196609);
            n.__d = l, n.__e = m
        }

        function ts(e, t, n) {
            "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || e3.test(t) ? n : n + "px"
        }

        function to(e, t, n, r, i) {
            var s;
            e: if ("style" === t)
                if ("string" == typeof n) e.style.cssText = n;
                else {
                    if ("string" == typeof r && (e.style.cssText = r = ""), r)
                        for (t in r) n && t in n || ts(e.style, t, "");
                    if (n)
                        for (t in n) r && n[t] === r[t] || ts(e.style, t, n[t])
                }
            else if ("o" === t[0] && "n" === t[1]) s = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, s ? tl : ta, s)) : e.removeEventListener(t, s ? tl : ta, s);
            else {
                if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
                    e[t] = null == n ? "" : n;
                    break e
                } catch (e) {}
                "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n))
            }
        }

        function ta(e) {
            if (this.l) {
                var t = this.l[e.type + !1];
                if (e.t) {
                    if (e.t <= t.u) return
                } else e.t = Date.now();
                return t(eK.event ? eK.event(e) : e)
            }
        }

        function tl(e) {
            if (this.l) return this.l[e.type + !0](eK.event ? eK.event(e) : e)
        }

        function tu(e, t, n, r, i, s, o, a, l, u) {
            var c, d, p, h, f, m, g, _, y, v, b, S, w, k, E, x = t.type;
            if (void 0 !== t.constructor) return null;
            128 & n.__u && (l = !!(32 & n.__u), s = [a = t.__e = n.__e]), (c = eK.__b) && c(t);
            e: if ("function" == typeof x) try {
                if (_ = t.props, y = (c = x.contextType) && r[c.__c], v = c ? y ? y.props.value : c.__ : r, n.__c ? g = (d = t.__c = n.__c).__ = d.__E : ("prototype" in x && x.prototype.render ? t.__c = d = new x(_, v) : (t.__c = d = new te(_, v), d.constructor = x, d.render = th), y && y.sub(d), d.props = _, d.state || (d.state = {}), d.context = v, d.__n = r, p = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), null != x.getDerivedStateFromProps && (d.__s == d.state && (d.__s = e4({}, d.__s)), e4(d.__s, x.getDerivedStateFromProps(_, d.__s))), h = d.props, f = d.state, d.__v = t, p) null == x.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
                else {
                    if (null == x.getDerivedStateFromProps && _ !== h && null != d.componentWillReceiveProps && d.componentWillReceiveProps(_, v), !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(_, d.__s, v) || t.__v === n.__v)) {
                        for (t.__v !== n.__v && (d.props = _, d.state = d.__s, d.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(e) {
                                e && (e.__ = t)
                            }), b = 0; b < d._sb.length; b++) d.__h.push(d._sb[b]);
                        d._sb = [], d.__h.length && o.push(d);
                        break e
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(_, d.__s, v), null != d.componentDidUpdate && d.__h.push(function() {
                        d.componentDidUpdate(h, f, m)
                    })
                }
                if (d.context = v, d.props = _, d.__P = e, d.__e = !1, S = eK.__r, w = 0, "prototype" in x && x.prototype.render) {
                    for (d.state = d.__s, d.__d = !1, S && S(t), c = d.render(d.props, d.state, d.context), k = 0; k < d._sb.length; k++) d.__h.push(d._sb[k]);
                    d._sb = []
                } else
                    do d.__d = !1, S && S(t), c = d.render(d.props, d.state, d.context), d.state = d.__s; while (d.__d && ++w < 25) d.state = d.__s, null != d.getChildContext && (r = e4(e4({}, r), d.getChildContext())), p || null == d.getSnapshotBeforeUpdate || (m = d.getSnapshotBeforeUpdate(h, f)), ti(e, e5(E = null != c && c.type === e9 && null == c.key ? c.props.children : c) ? E : [E], t, n, r, i, s, o, a, l, u), d.base = t.__e, t.__u &= -161, d.__h.length && o.push(d), g && (d.__E = d.__ = null)
            } catch (e) {
                t.__v = null, l || null != s ? (t.__e = a, t.__u |= l ? 160 : 32, s[s.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), eK.__e(e, t, n)
            } else null == s && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = function(e, t, n, r, i, s, o, a, l) {
                var u, c, d, p, h, f, m, g = n.props,
                    _ = t.props,
                    y = t.type;
                if ("svg" === y && (i = !0), null != s) {
                    for (u = 0; u < s.length; u++)
                        if ((h = s[u]) && "setAttribute" in h == !!y && (y ? h.localName === y : 3 === h.nodeType)) {
                            e = h, s[u] = null;
                            break
                        }
                }
                if (null == e) {
                    if (null === y) return document.createTextNode(_);
                    e = i ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, _.is && _), s = null, a = !1
                }
                if (null === y) g === _ || a && e.data === _ || (e.data = _);
                else {
                    if (s = s && eG.call(e.childNodes), g = n.props || e1, !a && null != s)
                        for (g = {}, u = 0; u < e.attributes.length; u++) g[(h = e.attributes[u]).name] = h.value;
                    for (u in g) h = g[u], "children" == u || ("dangerouslySetInnerHTML" == u ? d = h : "key" === u || u in _ || to(e, u, null, h, i));
                    for (u in _) h = _[u], "children" == u ? p = h : "dangerouslySetInnerHTML" == u ? c = h : "value" == u ? f = h : "checked" == u ? m = h : "key" === u || a && "function" != typeof h || g[u] === h || to(e, u, h, g[u], i);
                    if (c) a || d && (c.__html === d.__html || c.__html === e.innerHTML) || (e.innerHTML = c.__html), t.__k = [];
                    else if (d && (e.innerHTML = ""), ti(e, e5(p) ? p : [p], t, n, r, i && "foreignObject" !== y, s, o, s ? s[0] : n.__k && tt(n, 0), a, l), null != s)
                        for (u = s.length; u--;) null != s[u] && e6(s[u]);
                    a || (u = "value", void 0 === f || f === e[u] && ("progress" !== y || f) && ("option" !== y || f === g[u]) || to(e, u, f, g[u], !1), u = "checked", void 0 !== m && m !== e[u] && to(e, u, m, g[u], !1))
                }
                return e
            }(n.__e, t, n, r, i, s, o, l, u);
            (c = eK.diffed) && c(t)
        }

        function tc(e, t, n) {
            for (var r = 0; r < n.length; r++) td(n[r], n[++r], n[++r]);
            eK.__c && eK.__c(t, e), e.some(function(t) {
                try {
                    e = t.__h, t.__h = [], e.some(function(e) {
                        e.call(t)
                    })
                } catch (e) {
                    eK.__e(e, t.__v)
                }
            })
        }

        function td(e, t, n) {
            try {
                "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
                eK.__e(e, n)
            }
        }

        function tp(e, t, n) {
            var r, i;
            if (eK.unmount && eK.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || td(r, null, t)), null != (r = e.__c)) {
                if (r.componentWillUnmount) try {
                    r.componentWillUnmount()
                } catch (e) {
                    eK.__e(e, t)
                }
                r.base = r.__P = null, e.__c = void 0
            }
            if (r = e.__k)
                for (i = 0; i < r.length; i++) r[i] && tp(r[i], t, n || "function" != typeof e.type);
            n || null == e.__e || e6(e.__e), e.__ = e.__e = e.__d = void 0
        }

        function th(e, t, n) {
            return this.constructor(e, n)
        }
        eG = e2.slice, eK = {
            __e: function(e, t, n, r) {
                for (var i, s, o; t = t.__;)
                    if ((i = t.__c) && !i.__) try {
                        if ((s = i.constructor) && null != s.getDerivedStateFromError && (i.setState(s.getDerivedStateFromError(e)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i
                    } catch (t) {
                        e = t
                    }
                throw e
            }
        }, eY = 0, te.prototype.setState = function(e, t) {
            var n;
            n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = e4({}, this.state), "function" == typeof e && (e = e(e4({}, n), this.props)), e && e4(n, e), null != e && this.__v && (t && this._sb.push(t), tn(this))
        }, te.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0, e && this.__h.push(e), tn(this))
        }, te.prototype.render = e9, eX = [], eQ = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e0 = function(e, t) {
            return e.__v.__b - t.__v.__b
        }, tr.__r = 0;
        var tf, tm, tg, t_, ty = 0,
            tv = [],
            tb = [],
            tS = eK,
            tw = tS.__b,
            tk = tS.__r,
            tE = tS.diffed,
            tx = tS.__c,
            tC = tS.unmount,
            tI = tS.__;

        function tT(e, t) {
            tS.__h && tS.__h(tm, e, ty || t), ty = 0;
            var n = tm.__H || (tm.__H = {
                __: [],
                __h: []
            });
            return e >= n.__.length && n.__.push({
                __V: tb
            }), n.__[e]
        }

        function tM(e) {
            return ty = 1, tA(tF, e)
        }

        function tA(e, t, n) {
            var r = tT(tf++, 2);
            if (r.t = e, !r.__c && (r.__ = [n ? n(t) : tF(void 0, t), function(e) {
                    var t = r.__N ? r.__N[0] : r.__[0],
                        n = r.t(t, e);
                    t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}))
                }], r.__c = tm, !tm.u)) {
                var i = function(e, t, n) {
                    if (!r.__c.__H) return !0;
                    var i = r.__c.__H.__.filter(function(e) {
                        return !!e.__c
                    });
                    if (i.every(function(e) {
                            return !e.__N
                        })) return !s || s.call(this, e, t, n);
                    var o = !1;
                    return i.forEach(function(e) {
                        if (e.__N) {
                            var t = e.__[0];
                            e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (o = !0)
                        }
                    }), !(!o && r.__c.props === e) && (!s || s.call(this, e, t, n))
                };
                tm.u = !0;
                var s = tm.shouldComponentUpdate,
                    o = tm.componentWillUpdate;
                tm.componentWillUpdate = function(e, t, n) {
                    if (this.__e) {
                        var r = s;
                        s = void 0, i(e, t, n), s = r
                    }
                    o && o.call(this, e, t, n)
                }, tm.shouldComponentUpdate = i
            }
            return r.__N || r.__
        }

        function tR(e, t) {
            var n = tT(tf++, 4);
            !tS.__s && tj(n.__H, t) && (n.__ = e, n.i = t, tm.__h.push(n))
        }

        function tO(e, t) {
            var n = tT(tf++, 7);
            return tj(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
        }

        function tL(e, t) {
            return ty = 8, tO(function() {
                return e
            }, t)
        }

        function tP() {
            for (var e; e = tv.shift();)
                if (e.__P && e.__H) try {
                    e.__H.__h.forEach(tD), e.__H.__h.forEach(t$), e.__H.__h = []
                } catch (t) {
                    e.__H.__h = [], tS.__e(t, e.__v)
                }
        }
        tS.__b = function(e) {
            tm = null, tw && tw(e)
        }, tS.__ = function(e, t) {
            t.__k && t.__k.__m && (e.__m = t.__k.__m), tI && tI(e, t)
        }, tS.__r = function(e) {
            tk && tk(e), tf = 0;
            var t = (tm = e.__c).__H;
            t && (tg === tm ? (t.__h = [], tm.__h = [], t.__.forEach(function(e) {
                e.__N && (e.__ = e.__N), e.__V = tb, e.__N = e.i = void 0
            })) : (t.__h.forEach(tD), t.__h.forEach(t$), t.__h = [], tf = 0)), tg = tm
        }, tS.diffed = function(e) {
            tE && tE(e);
            var t = e.__c;
            t && t.__H && (t.__H.__h.length && (1 !== tv.push(t) && t_ === tS.requestAnimationFrame || ((t_ = tS.requestAnimationFrame) || function(e) {
                var t, n = function() {
                        clearTimeout(r), tN && cancelAnimationFrame(t), setTimeout(e)
                    },
                    r = setTimeout(n, 100);
                tN && (t = requestAnimationFrame(n))
            })(tP)), t.__H.__.forEach(function(e) {
                e.i && (e.__H = e.i), e.__V !== tb && (e.__ = e.__V), e.i = void 0, e.__V = tb
            })), tg = tm = null
        }, tS.__c = function(e, t) {
            t.some(function(e) {
                try {
                    e.__h.forEach(tD), e.__h = e.__h.filter(function(e) {
                        return !e.__ || t$(e)
                    })
                } catch (n) {
                    t.some(function(e) {
                        e.__h && (e.__h = [])
                    }), t = [], tS.__e(n, e.__v)
                }
            }), tx && tx(e, t)
        }, tS.unmount = function(e) {
            tC && tC(e);
            var t, n = e.__c;
            n && n.__H && (n.__H.__.forEach(function(e) {
                try {
                    tD(e)
                } catch (e) {
                    t = e
                }
            }), n.__H = void 0, t && tS.__e(t, n.__v))
        };
        var tN = "function" == typeof requestAnimationFrame;

        function tD(e) {
            var t = tm,
                n = e.__c;
            "function" == typeof n && (e.__c = void 0, n()), tm = t
        }

        function t$(e) {
            var t = tm;
            e.__c = e.__(), tm = t
        }

        function tj(e, t) {
            return !e || e.length !== t.length || t.some(function(t, n) {
                return t !== e[n]
            })
        }

        function tF(e, t) {
            return "function" == typeof t ? t(e) : t
        }
        let tU = Object.defineProperty({
            __proto__: null,
            useCallback: tL,
            useContext: function(e) {
                var t = tm.context[e.__c],
                    n = tT(tf++, 9);
                return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(tm)), t.props.value) : e.__
            },
            useDebugValue: function(e, t) {
                tS.useDebugValue && tS.useDebugValue(t ? t(e) : e)
            },
            useEffect: function(e, t) {
                var n = tT(tf++, 3);
                !tS.__s && tj(n.__H, t) && (n.__ = e, n.i = t, tm.__H.__h.push(n))
            },
            useErrorBoundary: function(e) {
                var t = tT(tf++, 10),
                    n = tM();
                return t.__ = e, tm.componentDidCatch || (tm.componentDidCatch = function(e, r) {
                    t.__ && t.__(e, r), n[1](e)
                }), [n[0], function() {
                    n[1](void 0)
                }]
            },
            useId: function() {
                var e = tT(tf++, 11);
                if (!e.__) {
                    for (var t = tm.__v; null !== t && !t.__m && null !== t.__;) t = t.__;
                    var n = t.__m || (t.__m = [0, 0]);
                    e.__ = "P" + n[0] + "-" + n[1]++
                }
                return e.__
            },
            useImperativeHandle: function(e, t, n) {
                ty = 6, tR(function() {
                    return "function" == typeof e ? (e(t()), function() {
                        return e(null)
                    }) : e ? (e.current = t(), function() {
                        return e.current = null
                    }) : void 0
                }, null == n ? n : n.concat(e))
            },
            useLayoutEffect: tR,
            useMemo: tO,
            useReducer: tA,
            useRef: function(e) {
                return ty = 5, tO(function() {
                    return {
                        current: e
                    }
                }, [])
            },
            useState: tM
        }, Symbol.toStringTag, {
            value: "Module"
        });

        function tB({
            options: e
        }) {
            let t = tO(() => {
                let e, t;
                return {
                    __html: (e = eU(ey.createElementNS("http://www.w3.org/2000/svg", "svg"), {
                        width: "32",
                        height: "30",
                        viewBox: "0 0 72 66",
                        fill: "inherit"
                    }), t = eU(ey.createElementNS("http://www.w3.org/2000/svg", "path"), {
                        transform: "translate(11, 11)",
                        d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
                    }), e.appendChild(t), e).outerHTML
                }
            }, []);
            return e8("h2", {
                class: "dialog__header"
            }, e8("span", {
                class: "dialog__title"
            }, e.formTitle), e.showBranding ? e8("a", {
                class: "brand-link",
                target: "_blank",
                href: "https://sentry.io/welcome/",
                title: "Powered by Sentry",
                rel: "noopener noreferrer",
                dangerouslySetInnerHTML: t
            }) : null)
        }

        function tW(e, t) {
            let n = e.get(t);
            return "string" == typeof n ? n.trim() : ""
        }

        function tq({
            options: e,
            defaultEmail: t,
            defaultName: n,
            onFormClose: r,
            onSubmit: i,
            onSubmitSuccess: s,
            onSubmitError: o,
            showEmail: a,
            showName: l,
            screenshotInput: u
        }) {
            let {
                tags: c,
                addScreenshotButtonLabel: d,
                removeScreenshotButtonLabel: p,
                cancelButtonLabel: h,
                emailLabel: f,
                emailPlaceholder: m,
                isEmailRequired: g,
                isNameRequired: _,
                messageLabel: y,
                messagePlaceholder: v,
                nameLabel: b,
                namePlaceholder: S,
                submitButtonLabel: w,
                isRequiredLabel: k
            } = e, [E, x] = tM(!1), [C, I] = tM(null), [T, M] = tM(!1), A = u ? .input, [R, O] = tM(null), L = tL(e => {
                O(e), M(!1)
            }, []), P = tL(e => {
                var t;
                let n, r = (n = [], (t = {
                    emailLabel: f,
                    isEmailRequired: g,
                    isNameRequired: _,
                    messageLabel: y,
                    nameLabel: b
                }).isNameRequired && !e.name && n.push(t.nameLabel), t.isEmailRequired && !e.email && n.push(t.emailLabel), e.message || n.push(t.messageLabel), n);
                return r.length > 0 ? I(`Please enter in the following required fields: ${r.join(", ")}`) : I(null), 0 === r.length
            }, [f, g, _, y, b]);
            return e8("form", {
                class: "form",
                onSubmit: tL(async e => {
                    x(!0);
                    try {
                        if (e.preventDefault(), !(e.target instanceof HTMLFormElement)) return;
                        let t = new FormData(e.target),
                            n = await (u && T ? u.value() : void 0),
                            r = {
                                name: tW(t, "name"),
                                email: tW(t, "email"),
                                message: tW(t, "message"),
                                attachments: n ? [n] : void 0
                            };
                        if (!P(r)) return;
                        try {
                            let e = await i({
                                name: r.name,
                                email: r.email,
                                message: r.message,
                                source: "widget",
                                tags: c
                            }, {
                                attachments: r.attachments
                            });
                            s(r, e)
                        } catch (e) {
                            I(e), o(e)
                        }
                    } finally {
                        x(!1)
                    }
                }, [u && T, s, o])
            }, A && T ? e8(A, {
                onError: L
            }) : null, e8("fieldset", {
                class: "form__right",
                "data-sentry-feedback": !0,
                disabled: E
            }, e8("div", {
                class: "form__top"
            }, C ? e8("div", {
                class: "form__error-container"
            }, C) : null, l ? e8("label", {
                for: "name",
                class: "form__label"
            }, e8(tH, {
                label: b,
                isRequiredLabel: k,
                isRequired: _
            }), e8("input", {
                class: "form__input",
                defaultValue: n,
                id: "name",
                name: "name",
                placeholder: S,
                required: _,
                type: "text"
            })) : e8("input", {
                "aria-hidden": !0,
                value: n,
                name: "name",
                type: "hidden"
            }), a ? e8("label", {
                for: "email",
                class: "form__label"
            }, e8(tH, {
                label: f,
                isRequiredLabel: k,
                isRequired: g
            }), e8("input", {
                class: "form__input",
                defaultValue: t,
                id: "email",
                name: "email",
                placeholder: m,
                required: g,
                type: "email"
            })) : e8("input", {
                "aria-hidden": !0,
                value: t,
                name: "email",
                type: "hidden"
            }), e8("label", {
                for: "message",
                class: "form__label"
            }, e8(tH, {
                label: y,
                isRequiredLabel: k,
                isRequired: !0
            }), e8("textarea", {
                autoFocus: !0,
                class: "form__input form__input--textarea",
                id: "message",
                name: "message",
                placeholder: v,
                required: !0,
                rows: 5
            })), A ? e8("label", {
                for: "screenshot",
                class: "form__label"
            }, e8("button", {
                class: "btn btn--default",
                disabled: E,
                type: "button",
                onClick: () => {
                    O(null), M(e => !e)
                }
            }, T ? p : d), R ? e8("div", {
                class: "form__error-container"
            }, R.message) : null) : null), e8("div", {
                class: "btn-group"
            }, e8("button", {
                class: "btn btn--primary",
                disabled: E,
                type: "submit"
            }, w), e8("button", {
                class: "btn btn--default",
                disabled: E,
                type: "button",
                onClick: r
            }, h))))
        }

        function tH({
            label: e,
            isRequired: t,
            isRequiredLabel: n
        }) {
            return e8("span", {
                class: "form__label__text"
            }, e, t && e8("span", {
                class: "form__label__text--required"
            }, n))
        }

        function tz({
            open: e,
            onFormSubmitted: t,
            ...n
        }) {
            let r = n.options,
                i = tO(() => {
                    let e, t, n, r, i, s, o, a;
                    return {
                        __html: (t = eU((e = e => K.document.createElementNS("http://www.w3.org/2000/svg", e))("svg"), {
                            width: "16",
                            height: "17",
                            viewBox: "0 0 16 17",
                            fill: "inherit"
                        }), n = eU(e("g"), {
                            clipPath: "url(#clip0_57_156)"
                        }), r = eU(e("path"), {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
                        }), i = eU(e("path"), {
                            d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
                        }), t.appendChild(n).append(i, r), s = e("defs"), o = eU(e("clipPath"), {
                            id: "clip0_57_156"
                        }), a = eU(e("rect"), {
                            width: "16",
                            height: "16",
                            fill: "white",
                            transform: "translate(0 0.5)"
                        }), o.appendChild(a), s.appendChild(o), t.appendChild(s).appendChild(o).appendChild(a), t).outerHTML
                    }
                }, []),
                [s, o] = tM(null),
                a = tL(() => {
                    s && (clearTimeout(s), o(null)), t()
                }, [s]),
                l = tL((e, r) => {
                    n.onSubmitSuccess(e, r), o(setTimeout(() => {
                        t(), o(null)
                    }, 5e3))
                }, [t]);
            return e8(e9, null, s ? e8("div", {
                class: "success__position",
                onClick: a
            }, e8("div", {
                class: "success__content"
            }, r.successMessageText, e8("span", {
                class: "success__icon",
                dangerouslySetInnerHTML: i
            }))) : e8("dialog", {
                class: "dialog",
                onClick: r.onFormClose,
                open: e
            }, e8("div", {
                class: "dialog__position"
            }, e8("div", {
                class: "dialog__content",
                onClick: e => {
                    e.stopPropagation()
                }
            }, e8(tB, {
                options: r
            }), e8(tq, { ...n,
                onSubmitSuccess: l
            })))))
        }
        let tV = `
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}

`,
            tJ = `
.dialog__header {
  display: flex;
  gap: 4px;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}
.dialog__title {
  align-self: center;
  width: var(--form-width, 272px);
}

@media (max-width: 600px) {
  .dialog__title {
    width: auto;
  }
}

.dialog__position:has(.editor) .dialog__title {
  width: auto;
}


.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`,
            tG = `
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

.form__right {
  flex: 0 0 auto;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: var(--form-width, 100%);
}

.dialog__position:has(.editor) .form__right {
  width: var(--form-width, 272px);
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`,
            tK = `
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`,
            tY = `
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`,
            tX = () => ({
                name: "FeedbackModal",
                setupOnce() {},
                createDialog: ({
                    options: e,
                    screenshotIntegration: t,
                    sendFeedback: n,
                    shadow: r
                }) => {
                    var i;
                    let s, o, a, l, u = e.useSentryUser,
                        c = (s = em().getUser(), o = ef((X(K), K)).getIsolationScope().getUser(), a = Z("globalScope", () => new eo).getUser(), s && Object.keys(s).length ? s : o && Object.keys(o).length ? o : a),
                        d = ey.createElement("div"),
                        p = (i = e.styleNonce, (l = ey.createElement("style")).textContent = `
:host {
  --dialog-inset: var(--inset);
}

${tV}
${tJ}
${tG}
${tK}
${tY}
`, i && l.setAttribute("nonce", i), l),
                        h = "",
                        f = {
                            get el() {
                                return d
                            },
                            appendToDom() {
                                r.contains(p) || r.contains(d) || (r.appendChild(p), r.appendChild(d))
                            },
                            removeFromDom() {
                                d.remove(), p.remove(), ey.body.style.overflow = h
                            },
                            open() {
                                g(!0), e.onFormOpen ? .(), eg() ? .emit("openFeedbackWidget"), h = ey.body.style.overflow, ey.body.style.overflow = "hidden"
                            },
                            close() {
                                g(!1), ey.body.style.overflow = h
                            }
                        },
                        m = t ? .createInput({
                            h: e8,
                            hooks: tU,
                            dialog: f,
                            options: e
                        }),
                        g = t => {
                            var r, i, s, o;
                            r = e8(tz, {
                                options: e,
                                screenshotInput: m,
                                showName: e.showName || e.isNameRequired,
                                showEmail: e.showEmail || e.isEmailRequired,
                                defaultName: String(u && c ? .[u.name] || ""),
                                defaultEmail: String(u && c ? .[u.email] || ""),
                                onFormClose: () => {
                                    g(!1), e.onFormClose ? .()
                                },
                                onSubmit: n,
                                onSubmitSuccess: (t, n) => {
                                    g(!1), e.onSubmitSuccess ? .(t, n)
                                },
                                onSubmitError: t => {
                                    e.onSubmitError ? .(t)
                                },
                                onFormSubmitted: () => {
                                    e.onFormSubmitted ? .()
                                },
                                open: t
                            }), eK.__ && eK.__(r, d), i = d.__k, s = [], o = [], tu(d, r = d.__k = e8(e9, null, [r]), i || e1, e1, void 0 !== d.ownerSVGElement, i ? null : d.firstChild ? eG.call(d.childNodes) : null, s, i ? i.__e : d.firstChild, !1, o), r.__d = void 0, tc(s, r, o)
                        };
                    return f
                }
            });

        function tZ(e, t, n) {
            if (!e) return;
            let r = e.getContext("2d", t);
            r && n(e, r)
        }

        function tQ(e, t) {
            tZ(e, {
                alpha: !0
            }, (e, n) => {
                n.drawImage(t, 0, 0, t.width, t.height, 0, 0, e.width, e.height)
            })
        }

        function t0(e, t, n) {
            tZ(e, {
                alpha: !0
            }, (e, r) => {
                n.length && (r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e.width, e.height)), n.forEach(e => {
                    switch (e.type) {
                        case "highlight":
                            r.shadowColor = "rgba(0, 0, 0, 0.7)", r.shadowBlur = 50, r.fillStyle = t, r.fillRect(e.x - 1, e.y - 1, e.w + 2, e.h + 2), r.clearRect(e.x, e.y, e.w, e.h);
                            break;
                        case "hide":
                            r.fillStyle = "rgb(0, 0, 0)", r.fillRect(e.x, e.y, e.w, e.h)
                    }
                })
            })
        }
        let t1 = () => ({
                name: "FeedbackScreenshot",
                setupOnce() {},
                createInput: ({
                    h: e,
                    hooks: t,
                    dialog: n,
                    options: r
                }) => {
                    let i = ey.createElement("canvas");
                    return {
                        input: function({
                            h: e,
                            hooks: t,
                            outputBuffer: n,
                            dialog: r,
                            options: i
                        }) {
                            var s;
                            let o, a, l, u = function({
                                    hooks: e
                                }) {
                                    return function({
                                        onBeforeScreenshot: t,
                                        onScreenshot: n,
                                        onAfterScreenshot: r,
                                        onError: i
                                    }) {
                                        let s = function() {
                                            let [t, n] = e.useState(K.devicePixelRatio ? ? 1);
                                            return e.useEffect(() => {
                                                let e = () => {
                                                        n(K.devicePixelRatio)
                                                    },
                                                    t = matchMedia(`(resolution: ${K.devicePixelRatio}dppx)`);
                                                return t.addEventListener("change", e), () => {
                                                    t.removeEventListener("change", e)
                                                }
                                            }, []), t
                                        }();
                                        e.useEffect(() => {
                                            (async () => {
                                                t();
                                                let e = await ev.mediaDevices.getDisplayMedia({
                                                        video: {
                                                            width: K.innerWidth * s,
                                                            height: K.innerHeight * s
                                                        },
                                                        audio: !1,
                                                        monitorTypeSurfaces: "exclude",
                                                        preferCurrentTab: !0,
                                                        selfBrowserSurface: "include",
                                                        surfaceSwitching: "exclude"
                                                    }),
                                                    i = ey.createElement("video");
                                                await new Promise((t, r) => {
                                                    i.srcObject = e, i.onloadedmetadata = () => {
                                                        n(i, s), e.getTracks().forEach(e => e.stop()), t()
                                                    }, i.play().catch(r)
                                                }), r()
                                            })().catch(i)
                                        }, [])
                                    }
                                }({
                                    hooks: t
                                }),
                                c = function({
                                    h: e
                                }) {
                                    return function({
                                        action: t,
                                        setAction: n,
                                        options: r
                                    }) {
                                        return e("div", {
                                            class: "editor__tool-container"
                                        }, e("div", {
                                            class: "editor__tool-bar"
                                        }, e("button", {
                                            type: "button",
                                            class: `editor__tool ${"highlight"===t?"editor__tool--active":""}`,
                                            onClick: () => {
                                                n("highlight" === t ? "" : "highlight")
                                            }
                                        }, r.highlightToolText), e("button", {
                                            type: "button",
                                            class: `editor__tool ${"hide"===t?"editor__tool--active":""}`,
                                            onClick: () => {
                                                n("hide" === t ? "" : "hide")
                                            }
                                        }, r.hideToolText)))
                                    }
                                }({
                                    h: e
                                }),
                                d = function({
                                    h: e
                                }) {
                                    return function() {
                                        return e("svg", {
                                            "data-test-id": "icon-close",
                                            viewBox: "0 0 16 16",
                                            fill: "#2B2233",
                                            height: "25px",
                                            width: "25px"
                                        }, e("circle", {
                                            r: "7",
                                            cx: "8",
                                            cy: "8",
                                            fill: "white"
                                        }), e("path", {
                                            strokeWidth: "1.5",
                                            d: "M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z"
                                        }), e("path", {
                                            strokeWidth: "1.5",
                                            d: "M5.34,11.41a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06l5.32-5.32a.75.75,0,0,1,1.06,1.06L5.87,11.19A.74.74,0,0,1,5.34,11.41Z"
                                        }), e("path", {
                                            strokeWidth: "1.5",
                                            d: "M10.66,11.41a.74.74,0,0,1-.53-.22L4.81,5.87A.75.75,0,0,1,5.87,4.81l5.32,5.32a.74.74,0,0,1,0,1.06A.71.71,0,0,1,10.66,11.41Z"
                                        }))
                                    }
                                }({
                                    h: e
                                }),
                                p = {
                                    __html: (s = i.styleNonce, o = ey.createElement("style"), a = "#1A141F", l = "#302735", o.textContent = `
.editor {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.editor__image-container {
  justify-items: center;
  padding: 15px;
  position: relative;
  height: 100%;
  border-radius: var(--menu-border-radius, 6px);

  background-color: ${a};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${a} 8px,
      ${a} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${l} 15px,
      ${l} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container > * {
  object-fit: contain;
  position: absolute;
}

.editor__tool-container {
  padding-top: 8px;
  display: flex;
  justify-content: center;
}

.editor__tool-bar {
  display: flex;
  gap: 8px;
}

.editor__tool {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  background: var(--button-background, var(--background));
  color: var(--button-color, var(--foreground));
}

.editor__tool--active {
  background: var(--button-primary-background, var(--accent-background));
  color: var(--button-primary-color, var(--accent-foreground));
}

.editor__rect {
  position: absolute;
  z-index: 2;
}

.editor__rect button {
  opacity: 0;
  position: absolute;
  top: -12px;
  right: -12px;
  cursor: pointer;
  padding: 0;
  z-index: 3;
  border: none;
  background: none;
}

.editor__rect:hover button {
  opacity: 1;
}
`, s && o.setAttribute("nonce", s), o).innerText
                                },
                                h = r.el.style,
                                f = ({
                                    screenshot: r
                                }) => {
                                    let [s, o] = t.useState("highlight"), [a, l] = t.useState([]), u = t.useRef(null), h = t.useRef(null), f = t.useRef(null), m = t.useRef(null), [g, _] = t.useState(1), y = t.useMemo(() => {
                                        let e = ey.getElementById(i.id);
                                        if (!e) return "white";
                                        let t = getComputedStyle(e);
                                        return t.getPropertyValue("--button-primary-background") || t.getPropertyValue("--accent-background")
                                    }, [i.id]);
                                    t.useLayoutEffect(() => {
                                        let e = () => {
                                            let t = u.current;
                                            t && (tZ(r.canvas, {
                                                alpha: !1
                                            }, e => {
                                                _(Math.min(t.clientWidth / e.width, t.clientHeight / e.height))
                                            }), (0 === t.clientHeight || 0 === t.clientWidth) && setTimeout(e, 0))
                                        };
                                        return e(), K.addEventListener("resize", e), () => {
                                            K.removeEventListener("resize", e)
                                        }
                                    }, [r]);
                                    let v = t.useCallback((e, t) => {
                                        tZ(e, {
                                            alpha: !0
                                        }, (e, n) => {
                                            n.scale(t, t), e.width = r.canvas.width, e.height = r.canvas.height
                                        })
                                    }, [r]);
                                    t.useEffect(() => {
                                        v(h.current, r.dpi), tQ(h.current, r.canvas)
                                    }, [r]), t.useEffect(() => {
                                        v(f.current, r.dpi), tZ(f.current, {
                                            alpha: !0
                                        }, (e, t) => {
                                            t.clearRect(0, 0, e.width, e.height)
                                        }), t0(f.current, y, a)
                                    }, [a, y]), t.useEffect(() => {
                                        v(n, r.dpi), tQ(n, r.canvas), tZ(ey.createElement("canvas"), {
                                            alpha: !0
                                        }, (e, t) => {
                                            t.scale(r.dpi, r.dpi), e.width = r.canvas.width, e.height = r.canvas.height, t0(e, y, a), tQ(n, e)
                                        })
                                    }, [a, r, y]);
                                    let b = t.useCallback(e => t => {
                                            t.preventDefault(), t.stopPropagation(), l(t => {
                                                let n = [...t];
                                                return n.splice(e, 1), n
                                            })
                                        }, []),
                                        S = {
                                            width: `${r.canvas.width*g}px`,
                                            height: `${r.canvas.height*g}px`
                                        },
                                        w = e => {
                                            e.stopPropagation()
                                        };
                                    return e("div", {
                                        class: "editor"
                                    }, e("style", {
                                        nonce: i.styleNonce,
                                        dangerouslySetInnerHTML: p
                                    }), e("div", {
                                        class: "editor__image-container"
                                    }, e("div", {
                                        class: "editor__canvas-container",
                                        ref: u
                                    }, e("canvas", {
                                        ref: h,
                                        id: "background",
                                        style: S
                                    }), e("canvas", {
                                        ref: f,
                                        id: "foreground",
                                        style: S
                                    }), e("div", {
                                        ref: m,
                                        onMouseDown: e => {
                                            if (!s || !m.current) return;
                                            let t = m.current.getBoundingClientRect(),
                                                n = {
                                                    type: s,
                                                    x: e.offsetX / g,
                                                    y: e.offsetY / g
                                                },
                                                r = (e, n) => {
                                                    let r = (n.clientX - t.x) / g,
                                                        i = (n.clientY - t.y) / g;
                                                    return {
                                                        type: e.type,
                                                        x: Math.min(e.x, r),
                                                        y: Math.min(e.y, i),
                                                        w: Math.abs(r - e.x),
                                                        h: Math.abs(i - e.y)
                                                    }
                                                },
                                                i = e => {
                                                    tZ(f.current, {
                                                        alpha: !0
                                                    }, (e, t) => {
                                                        t.clearRect(0, 0, e.width, e.height)
                                                    }), t0(f.current, y, [...a, r(n, e)])
                                                },
                                                o = e => {
                                                    let t = r(n, e);
                                                    t.w * g >= 1 && t.h * g >= 1 && l(e => [...e, t]), ey.removeEventListener("mousemove", i), ey.removeEventListener("mouseup", o)
                                                };
                                            ey.addEventListener("mousemove", i), ey.addEventListener("mouseup", o)
                                        },
                                        style: S
                                    }, a.map((t, n) => e("div", {
                                        key: n,
                                        class: "editor__rect",
                                        style: {
                                            top: `${t.y*g}px`,
                                            left: `${t.x*g}px`,
                                            width: `${t.w*g}px`,
                                            height: `${t.h*g}px`
                                        }
                                    }, e("button", {
                                        "aria-label": i.removeHighlightText,
                                        onClick: b(n),
                                        onMouseDown: w,
                                        onMouseUp: w,
                                        type: "button"
                                    }, e(d, null))))))), e(c, {
                                        options: i,
                                        action: s,
                                        setAction: o
                                    }))
                                };
                            return function({
                                onError: r
                            }) {
                                let [i, s] = t.useState();
                                return (u({
                                    onBeforeScreenshot: t.useCallback(() => {
                                        h.display = "none"
                                    }, []),
                                    onScreenshot: t.useCallback((e, t) => {
                                        tZ(ey.createElement("canvas"), {
                                            alpha: !1
                                        }, (n, r) => {
                                            r.scale(t, t), n.width = e.videoWidth, n.height = e.videoHeight, r.drawImage(e, 0, 0, n.width, n.height), s({
                                                canvas: n,
                                                dpi: t
                                            })
                                        }), n.width = e.videoWidth, n.height = e.videoHeight
                                    }, []),
                                    onAfterScreenshot: t.useCallback(() => {
                                        h.display = "block"
                                    }, []),
                                    onError: t.useCallback(e => {
                                        h.display = "block", r(e)
                                    }, [])
                                }), i) ? e(f, {
                                    screenshot: i
                                }) : e("div", null)
                            }
                        }({
                            h: e,
                            hooks: t,
                            outputBuffer: i,
                            dialog: n,
                            options: r
                        }),
                        value: async () => {
                            let e = await new Promise(e => {
                                i.toBlob(e, "image/png")
                            });
                            if (e) return {
                                data: new Uint8Array(await e.arrayBuffer()),
                                filename: "screenshot.png",
                                contentType: "application/png"
                            }
                        }
                    }
                }
            }),
            t2 = "10.47.0",
            t3 = globalThis;

        function t5() {
            return t4(t3), t3
        }

        function t4(e) {
            let t = e.__SENTRY__ = e.__SENTRY__ || {};
            return t.version = t.version || t2, t[t2] = t[t2] || {}
        }

        function t6(e, t, n = t3) {
            let r = n.__SENTRY__ = n.__SENTRY__ || {},
                i = r[t2] = r[t2] || {};
            return i[e] || (i[e] = t())
        }
        let t8 = Object.prototype.toString;

        function t7(e) {
            switch (t8.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                case "[object WebAssembly.Exception]":
                    return !0;
                default:
                    return nl(e, Error)
            }
        }

        function t9(e, t) {
            return t8.call(e) === `[object ${t}]`
        }

        function ne(e) {
            return t9(e, "ErrorEvent")
        }

        function nt(e) {
            return t9(e, "DOMError")
        }

        function nn(e) {
            return t9(e, "String")
        }

        function nr(e) {
            return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e
        }

        function ni(e) {
            return null === e || nr(e) || "object" != typeof e && "function" != typeof e
        }

        function ns(e) {
            return t9(e, "Object")
        }

        function no(e) {
            return "u" > typeof Event && nl(e, Event)
        }

        function na(e) {
            return !!(e ? .then && "function" == typeof e.then)
        }

        function nl(e, t) {
            try {
                return e instanceof t
            } catch {
                return !1
            }
        }

        function nu(e) {
            return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue || e.__v_isVNode))
        }

        function nc(e) {
            return "u" > typeof Request && nl(e, Request)
        }

        function nd(e, t = {}) {
            if (!e) return "<unknown>";
            try {
                let n, r = e,
                    i = [],
                    s = 0,
                    o = 0,
                    a = Array.isArray(t) ? t : t.keyAttrs,
                    l = !Array.isArray(t) && t.maxStringLength || 80;
                for (; r && s++ < 5 && (n = function(e, t) {
                        let n = [];
                        if (!e ? .tagName) return "";
                        if (t3.HTMLElement && e instanceof HTMLElement && e.dataset) {
                            if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
                            if (e.dataset.sentryElement) return e.dataset.sentryElement
                        }
                        n.push(e.tagName.toLowerCase());
                        let r = t ? .length ? t.filter(t => e.getAttribute(t)).map(t => [t, e.getAttribute(t)]) : null;
                        if (r ? .length) r.forEach(e => {
                            n.push(`[${e[0]}="${e[1]}"]`)
                        });
                        else {
                            e.id && n.push(`#${e.id}`);
                            let t = e.className;
                            if (t && nn(t))
                                for (let e of t.split(/\s+/)) n.push(`.${e}`)
                        }
                        for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                            let r = e.getAttribute(t);
                            r && n.push(`[${t}="${r}"]`)
                        }
                        return n.join("")
                    }(r, a), "html" !== n && (!(s > 1) || !(o + 3 * i.length + n.length >= l)));) i.push(n), o += n.length, r = r.parentNode;
                return i.reverse().join(" > ")
            } catch {
                return "<unknown>"
            }
        }

        function np() {
            try {
                return t3.document.location.href
            } catch {
                return ""
            }
        }

        function nh(e) {
            if (!t3.HTMLElement) return null;
            let t = e;
            for (let e = 0; e < 5 && t; e++) {
                if (t instanceof HTMLElement) {
                    if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
                    if (t.dataset.sentryElement) return t.dataset.sentryElement
                }
                t = t.parentNode
            }
            return null
        }
        let nf = ["debug", "info", "warn", "error", "log", "assert", "trace"],
            nm = {};

        function ng(e) {
            if (!("console" in t3)) return e();
            let t = t3.console,
                n = {},
                r = Object.keys(nm);
            r.forEach(e => {
                let r = nm[e];
                n[e] = t[e], t[e] = r
            });
            try {
                return e()
            } finally {
                r.forEach(e => {
                    t[e] = n[e]
                })
            }
        }

        function n_() {
            return {
                enabled: !1
            }
        }
        let ny = {
            enable: function() {
                n_().enabled = !0
            },
            disable: function() {
                n_().enabled = !1
            },
            isEnabled: function() {
                return n_().enabled
            },
            log: function(...e) {
                [...e]
            },
            warn: function(...e) {
                [...e]
            },
            error: function(...e) {
                [...e]
            }
        };

        function nv(e, t, n) {
            if (!(t in e)) return;
            let r = e[t];
            if ("function" != typeof r) return;
            let i = n(r);
            "function" == typeof i && nS(i, r);
            try {
                e[t] = i
            } catch {}
        }

        function nb(e, t, n) {
            try {
                Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            } catch {}
        }

        function nS(e, t) {
            try {
                let n = t.prototype || {};
                e.prototype = t.prototype = n, nb(e, "__sentry_original__", t)
            } catch {}
        }

        function nw(e) {
            return e.__sentry_original__
        }

        function nk(e) {
            if (t7(e)) return {
                message: e.message,
                name: e.name,
                stack: e.stack,
                ...nx(e)
            };
            if (!no(e)) return e; {
                let t = {
                    type: e.type,
                    target: nE(e.target),
                    currentTarget: nE(e.currentTarget),
                    ...nx(e)
                };
                return "u" > typeof CustomEvent && nl(e, CustomEvent) && (t.detail = e.detail), t
            }
        }

        function nE(e) {
            try {
                return "u" > typeof Element && nl(e, Element) ? nd(e) : Object.prototype.toString.call(e)
            } catch {
                return "<unknown>"
            }
        }

        function nx(e) {
            return "object" == typeof e && null !== e ? Object.fromEntries(Object.entries(e)) : {}
        }

        function nC(e) {
            if (void 0 !== o) return o ? o(e) : e();
            let t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
            return t in t3 && "function" == typeof t3[t] ? (o = t3[t])(e) : (o = null, e())
        }

        function nI() {
            return nC(() => Math.random())
        }

        function nT() {
            return nC(() => Date.now())
        }
        let nM = /\(error: (.*)\)/,
            nA = /captureMessage|captureException/;

        function nR(...e) {
            let t = e.sort((e, t) => e[0] - t[0]).map(e => e[1]);
            return (e, n = 0, r = 0) => {
                let i = [],
                    s = e.split("\n");
                for (let e = n; e < s.length; e++) {
                    let n = s[e];
                    n.length > 1024 && (n = n.slice(0, 1024));
                    let o = nM.test(n) ? n.replace(nM, "$1") : n;
                    if (!o.match(/\S*Error: /)) {
                        for (let e of t) {
                            let t = e(o);
                            if (t) {
                                i.push(t);
                                break
                            }
                        }
                        if (i.length >= 50 + r) break
                    }
                }
                var o = i.slice(r);
                if (!o.length) return [];
                let a = Array.from(o);
                return /sentryWrapped/.test(nO(a).function || "") && a.pop(), a.reverse(), nA.test(nO(a).function || "") && (a.pop(), nA.test(nO(a).function || "") && a.pop()), a.slice(0, 50).map(e => ({ ...e,
                    filename: e.filename || nO(a).filename,
                    function: e.function || "?"
                }))
            }
        }

        function nO(e) {
            return e[e.length - 1] || {}
        }
        let nL = "<anonymous>";

        function nP(e) {
            try {
                if (!e || "function" != typeof e) return nL;
                return e.name || nL
            } catch {
                return nL
            }
        }

        function nN(e) {
            let t = e.exception;
            if (t) {
                let e = [];
                try {
                    return t.values.forEach(t => {
                        t.stacktrace.frames && e.push(...t.stacktrace.frames)
                    }), e
                } catch {}
            }
        }

        function nD(e) {
            return "__v_isVNode" in e && e.__v_isVNode ? "[VueVNode]" : "[VueViewModel]"
        }

        function n$(e, t = 0) {
            return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0,t)}...`
        }

        function nj(e, t) {
            let n = e,
                r = n.length;
            if (r <= 150) return n;
            t > r && (t = r);
            let i = Math.max(t - 60, 0);
            i < 5 && (i = 0);
            let s = Math.min(i + 140, r);
            return s > r - 5 && (s = r), s === r && (i = Math.max(s - 140, 0)), n = n.slice(i, s), i > 0 && (n = `'{snip} ${n}`), s < r && (n += " {snip}"), n
        }

        function nF(e, t) {
            if (!Array.isArray(e)) return "";
            let n = [];
            for (let t = 0; t < e.length; t++) {
                let r = e[t];
                try {
                    nu(r) ? n.push(nD(r)) : n.push(String(r))
                } catch {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(t)
        }

        function nU(e, t, n = !1) {
            return !!nn(e) && (t9(t, "RegExp") ? t.test(e) : !!nn(t) && (n ? e === t : e.includes(t)))
        }

        function nB(e, t = [], n = !1) {
            return t.some(t => nU(e, t, n))
        }

        function nW(e = t3.crypto || t3.msCrypto) {
            try {
                if (e ? .randomUUID) return nC(() => e.randomUUID()).replace(/-/g, "")
            } catch {}
            return a || (a = "10000000100040008000100000000000"), a.replace(/[018]/g, e => (e ^ (15 & 16 * nI()) >> e / 4).toString(16))
        }

        function nq(e) {
            return e.exception ? .values ? .[0]
        }

        function nH(e, t, n) {
            let r = e.exception = e.exception || {},
                i = r.values = r.values || [],
                s = i[0] = i[0] || {};
            s.value || (s.value = t || ""), s.type || (s.type = n || "Error")
        }

        function nz(e, t) {
            let n = nq(e);
            if (!n) return;
            let r = n.mechanism;
            if (n.mechanism = {
                    type: "generic",
                    handled: !0,
                    ...r,
                    ...t
                }, t && "data" in t) {
                let e = { ...r ? .data,
                    ...t.data
                };
                n.mechanism.data = e
            }
        }

        function nV(e) {
            if (function(e) {
                    try {
                        return e.__sentry_captured__
                    } catch {}
                }(e)) return !0;
            try {
                nb(e, "__sentry_captured__", !0)
            } catch {}
            return !1
        }

        function nJ() {
            return nT() / 1e3
        }

        function nG() {
            return (l ? ? (l = function() {
                let {
                    performance: e
                } = t3;
                if (!e ? .now || !e.timeOrigin) return nJ;
                let t = e.timeOrigin;
                return () => (t + nC(() => e.now())) / 1e3
            }()))()
        }
        let nK = null;

        function nY() {
            return null === nK && (nK = function() {
                let {
                    performance: e
                } = t3;
                if (!e ? .now) return;
                let t = nC(() => e.now()),
                    n = nT(),
                    r = e.timeOrigin;
                if ("number" == typeof r && 3e5 > Math.abs(r + t - n)) return r;
                let i = e.timing ? .navigationStart;
                return "number" == typeof i && 3e5 > Math.abs(i + t - n) ? i : n - t
            }()), nK
        }

        function nX(e, t = {}) {
            if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || nG(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : nW()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
            else if ("number" == typeof t.duration) e.duration = t.duration;
            else {
                let t = e.timestamp - e.started;
                e.duration = t >= 0 ? t : 0
            }
            t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
        }

        function nZ(e, t, n = 2) {
            if (!t || "object" != typeof t || n <= 0) return t;
            if (e && 0 === Object.keys(t).length) return e;
            let r = { ...e
            };
            for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = nZ(r[e], t[e], n - 1));
            return r
        }

        function nQ() {
            return nW().substring(16)
        }
        let n0 = "_sentrySpan";

        function n1(e, t) {
            t ? nb(e, n0, t) : delete e[n0]
        }
        class n2 {
            constructor() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
                    traceId: nW(),
                    sampleRand: nI()
                }
            }
            clone() {
                let e = new n2;
                return e._breadcrumbs = [...this._breadcrumbs], e._tags = { ...this._tags
                }, e._attributes = { ...this._attributes
                }, e._extra = { ...this._extra
                }, e._contexts = { ...this._contexts
                }, this._contexts.flags && (e._contexts.flags = {
                    values: [...this._contexts.flags.values]
                }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._attachments = [...this._attachments], e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata
                }, e._propagationContext = { ...this._propagationContext
                }, e._client = this._client, e._lastEventId = this._lastEventId, e._conversationId = this._conversationId, n1(e, this[n0]), e
            }
            setClient(e) {
                this._client = e
            }
            setLastEventId(e) {
                this._lastEventId = e
            }
            getClient() {
                return this._client
            }
            lastEventId() {
                return this._lastEventId
            }
            addScopeListener(e) {
                this._scopeListeners.push(e)
            }
            addEventProcessor(e) {
                return this._eventProcessors.push(e), this
            }
            setUser(e) {
                return this._user = e || {
                    email: void 0,
                    id: void 0,
                    ip_address: void 0,
                    username: void 0
                }, this._session && nX(this._session, {
                    user: e
                }), this._notifyScopeListeners(), this
            }
            getUser() {
                return this._user
            }
            setConversationId(e) {
                return this._conversationId = e || void 0, this._notifyScopeListeners(), this
            }
            setTags(e) {
                return this._tags = { ...this._tags,
                    ...e
                }, this._notifyScopeListeners(), this
            }
            setTag(e, t) {
                return this.setTags({
                    [e]: t
                })
            }
            setAttributes(e) {
                return this._attributes = { ...this._attributes,
                    ...e
                }, this._notifyScopeListeners(), this
            }
            setAttribute(e, t) {
                return this.setAttributes({
                    [e]: t
                })
            }
            removeAttribute(e) {
                return e in this._attributes && (delete this._attributes[e], this._notifyScopeListeners()), this
            }
            setExtras(e) {
                return this._extra = { ...this._extra,
                    ...e
                }, this._notifyScopeListeners(), this
            }
            setExtra(e, t) {
                return this._extra = { ...this._extra,
                    [e]: t
                }, this._notifyScopeListeners(), this
            }
            setFingerprint(e) {
                return this._fingerprint = e, this._notifyScopeListeners(), this
            }
            setLevel(e) {
                return this._level = e, this._notifyScopeListeners(), this
            }
            setTransactionName(e) {
                return this._transactionName = e, this._notifyScopeListeners(), this
            }
            setContext(e, t) {
                return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
            }
            setSession(e) {
                return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
            }
            getSession() {
                return this._session
            }
            update(e) {
                if (!e) return this;
                let t = "function" == typeof e ? e(this) : e,
                    {
                        tags: n,
                        attributes: r,
                        extra: i,
                        user: s,
                        contexts: o,
                        level: a,
                        fingerprint: l = [],
                        propagationContext: u,
                        conversationId: c
                    } = (t instanceof n2 ? t.getScopeData() : ns(t) ? e : void 0) || {};
                return this._tags = { ...this._tags,
                    ...n
                }, this._attributes = { ...this._attributes,
                    ...r
                }, this._extra = { ...this._extra,
                    ...i
                }, this._contexts = { ...this._contexts,
                    ...o
                }, s && Object.keys(s).length && (this._user = s), a && (this._level = a), l.length && (this._fingerprint = l), u && (this._propagationContext = u), c && (this._conversationId = c), this
            }
            clear() {
                return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, n1(this, void 0), this._attachments = [], this.setPropagationContext({
                    traceId: nW(),
                    sampleRand: nI()
                }), this._notifyScopeListeners(), this
            }
            addBreadcrumb(e, t) {
                let n = "number" == typeof t ? t : 100;
                if (n <= 0) return this;
                let r = {
                    timestamp: nJ(),
                    ...e,
                    message: e.message ? n$(e.message, 2048) : e.message
                };
                return this._breadcrumbs.push(r), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), this._client ? .recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
            }
            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1]
            }
            clearBreadcrumbs() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this
            }
            addAttachment(e) {
                return this._attachments.push(e), this
            }
            clearAttachments() {
                return this._attachments = [], this
            }
            getScopeData() {
                return {
                    breadcrumbs: this._breadcrumbs,
                    attachments: this._attachments,
                    contexts: this._contexts,
                    tags: this._tags,
                    attributes: this._attributes,
                    extra: this._extra,
                    user: this._user,
                    level: this._level,
                    fingerprint: this._fingerprint || [],
                    eventProcessors: this._eventProcessors,
                    propagationContext: this._propagationContext,
                    sdkProcessingMetadata: this._sdkProcessingMetadata,
                    transactionName: this._transactionName,
                    span: this[n0],
                    conversationId: this._conversationId
                }
            }
            setSDKProcessingMetadata(e) {
                return this._sdkProcessingMetadata = nZ(this._sdkProcessingMetadata, e, 2), this
            }
            setPropagationContext(e) {
                return this._propagationContext = e, this
            }
            getPropagationContext() {
                return this._propagationContext
            }
            captureException(e, t) {
                let n = t ? .event_id || nW();
                if (!this._client) return n;
                let r = Error("Sentry syntheticException");
                return this._client.captureException(e, {
                    originalException: e,
                    syntheticException: r,
                    ...t,
                    event_id: n
                }, this), n
            }
            captureMessage(e, t, n) {
                let r = n ? .event_id || nW();
                if (!this._client) return r;
                let i = n ? .syntheticException ? ? Error(e);
                return this._client.captureMessage(e, t, {
                    originalException: e,
                    syntheticException: i,
                    ...n,
                    event_id: r
                }, this), r
            }
            captureEvent(e, t) {
                let n = e.event_id || t ? .event_id || nW();
                return this._client && this._client.captureEvent(e, { ...t,
                    event_id: n
                }, this), n
            }
            _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                    e(this)
                }), this._notifyingListeners = !1)
            }
        }
        let n3 = e => e instanceof Promise && !e[n5],
            n5 = Symbol("chained PromiseLike"),
            n4 = (e, t, n) => {
                let r = e.then(e => (t(e), e), e => {
                    throw n(e), e
                });
                return n3(r) && n3(e) ? r : n6(e, r)
            },
            n6 = (e, t) => {
                let n = !1;
                for (let r in e) {
                    if (r in t) continue;
                    n = !0;
                    let i = e[r];
                    "function" == typeof i ? Object.defineProperty(t, r, {
                        value: (...t) => i.apply(e, t),
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = i
                }
                return n && Object.assign(t, {
                    [n5]: !0
                }), t
            };
        class n8 {
            constructor(e, t) {
                let n, r;
                n = e || new n2, r = t || new n2, this._stack = [{
                    scope: n
                }], this._isolationScope = r
            }
            withScope(e) {
                let t, n = this._pushScope();
                try {
                    t = e(n)
                } catch (e) {
                    throw this._popScope(), e
                }
                return na(t) ? n4(t, () => this._popScope(), () => this._popScope()) : (this._popScope(), t)
            }
            getClient() {
                return this.getStackTop().client
            }
            getScope() {
                return this.getStackTop().scope
            }
            getIsolationScope() {
                return this._isolationScope
            }
            getStackTop() {
                return this._stack[this._stack.length - 1]
            }
            _pushScope() {
                let e = this.getScope().clone();
                return this._stack.push({
                    client: this.getClient(),
                    scope: e
                }), e
            }
            _popScope() {
                return !(this._stack.length <= 1) && !!this._stack.pop()
            }
        }

        function n7() {
            let e = t4(t5());
            return e.stack = e.stack || new n8(t6("defaultCurrentScope", () => new n2), t6("defaultIsolationScope", () => new n2))
        }

        function n9(e) {
            return n7().withScope(e)
        }

        function re(e, t) {
            let n = n7();
            return n.withScope(() => (n.getStackTop().scope = e, t(e)))
        }

        function rt(e) {
            return n7().withScope(() => e(n7().getIsolationScope()))
        }

        function rn(e) {
            let t = t4(e);
            return t.acs ? t.acs : {
                withIsolationScope: rt,
                withScope: n9,
                withSetScope: re,
                withSetIsolationScope: (e, t) => rt(t),
                getCurrentScope: () => n7().getScope(),
                getIsolationScope: () => n7().getIsolationScope()
            }
        }

        function rr() {
            return rn(t5()).getCurrentScope()
        }

        function ri() {
            return rn(t5()).getIsolationScope()
        }

        function rs() {
            return t6("globalScope", () => new n2)
        }

        function ro(...e) {
            let t = rn(t5());
            if (2 === e.length) {
                let [n, r] = e;
                return n ? t.withSetScope(n, r) : t.withScope(r)
            }
            return t.withScope(e[0])
        }

        function ra(...e) {
            let t = rn(t5());
            if (2 === e.length) {
                let [n, r] = e;
                return n ? t.withSetIsolationScope(n, r) : t.withIsolationScope(r)
            }
            return t.withIsolationScope(e[0])
        }

        function rl() {
            return rr().getClient()
        }

        function ru(e) {
            let t = u ? .();
            if (t) return {
                trace_id: t.traceId,
                span_id: t.spanId
            };
            let {
                traceId: n,
                parentSpanId: r,
                propagationSpanId: i
            } = e.getPropagationContext(), s = {
                trace_id: n,
                span_id: i || nQ()
            };
            return r && (s.parent_span_id = r), s
        }
        let rc = "production";

        function rd(e) {
            return new rh(t => {
                t(e)
            })
        }

        function rp(e) {
            return new rh((t, n) => {
                n(e)
            })
        }
        class rh {
            constructor(e) {
                this._state = 0, this._handlers = [], this._runExecutor(e)
            }
            then(e, t) {
                return new rh((n, r) => {
                    this._handlers.push([!1, t => {
                        if (e) try {
                            n(e(t))
                        } catch (e) {
                            r(e)
                        } else n(t)
                    }, e => {
                        if (t) try {
                            n(t(e))
                        } catch (e) {
                            r(e)
                        } else r(e)
                    }]), this._executeHandlers()
                })
            } catch (e) {
                return this.then(e => e, e)
            } finally(e) {
                return new rh((t, n) => {
                    let r, i;
                    return this.then(t => {
                        i = !1, r = t, e && e()
                    }, t => {
                        i = !0, r = t, e && e()
                    }).then(() => {
                        i ? n(r) : t(r)
                    })
                })
            }
            _executeHandlers() {
                if (0 === this._state) return;
                let e = this._handlers.slice();
                this._handlers = [], e.forEach(e => {
                    e[0] || (1 === this._state && e[1](this._value), 2 === this._state && e[2](this._value), e[0] = !0)
                })
            }
            _runExecutor(e) {
                let t = (e, t) => {
                        if (0 === this._state) {
                            if (na(t)) return void t.then(n, r);
                            this._state = e, this._value = t, this._executeHandlers()
                        }
                    },
                    n = e => {
                        t(1, e)
                    },
                    r = e => {
                        t(2, e)
                    };
                try {
                    e(n, r)
                } catch (e) {
                    r(e)
                }
            }
        }

        function rf(e) {
            let t = t3._sentryDebugIds,
                n = t3._debugIds;
            if (!t && !n) return {};
            let r = t ? Object.keys(t) : [],
                i = n ? Object.keys(n) : [];
            if (h && r.length === d && i.length === p) return h;
            d = r.length, p = i.length, h = {}, c || (c = {});
            let s = (t, n) => {
                for (let r of t) {
                    let t = n[r],
                        i = c ? .[r];
                    if (i && h && t) h[i[0]] = t, c && (c[r] = [i[0], t]);
                    else if (t) {
                        let n = e(r);
                        for (let e = n.length - 1; e >= 0; e--) {
                            let i = n[e],
                                s = i ? .filename;
                            if (s && h && c) {
                                h[s] = t, c[r] = [s, t];
                                break
                            }
                        }
                    }
                }
            };
            return t && s(r, t), n && s(i, n), h
        }

        function rm(e, t = 100, n = Infinity) {
            try {
                return function e(t, n, r = Infinity, i = Infinity, s = function() {
                    let e = new WeakSet;
                    return [function(t) {
                        return !!e.has(t) || (e.add(t), !1)
                    }, function(t) {
                        e.delete(t)
                    }]
                }()) {
                    let [o, a] = s;
                    if (null == n || ["boolean", "string"].includes(typeof n) || "number" == typeof n && Number.isFinite(n)) return n;
                    let l = function(e, t) {
                        try {
                            var n;
                            let r;
                            if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
                            if ("domainEmitter" === e) return "[DomainEmitter]";
                            if ("u" > typeof global && t === global) return "[Global]";
                            if ("u" > typeof window && t === window) return "[Window]";
                            if ("u" > typeof document && t === document) return "[Document]";
                            if (nu(t)) return nD(t);
                            if (ns(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t) return "[SyntheticEvent]";
                            if ("number" == typeof t && !Number.isFinite(t)) return `[${t}]`;
                            if ("function" == typeof t) return `[Function: ${nP(t)}]`;
                            if ("symbol" == typeof t) return `[${String(t)}]`;
                            if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                            let i = (n = t, r = Object.getPrototypeOf(n), r ? .constructor ? r.constructor.name : "null prototype");
                            if (/^HTML(\w*)Element$/.test(i)) return `[HTMLElement: ${i}]`;
                            return `[object ${i}]`
                        } catch (e) {
                            return `**non-serializable** (${e})`
                        }
                    }(t, n);
                    if (!l.startsWith("[object ")) return l;
                    if (n.__sentry_skip_normalization__) return n;
                    let u = "number" == typeof n.__sentry_override_normalization_depth__ ? n.__sentry_override_normalization_depth__ : r;
                    if (0 === u) return l.replace("object ", "");
                    if (o(n)) return "[Circular ~]";
                    if (n && "function" == typeof n.toJSON) try {
                        let t = n.toJSON();
                        return e("", t, u - 1, i, s)
                    } catch {}
                    let c = Array.isArray(n) ? [] : {},
                        d = 0,
                        p = nk(n);
                    for (let t in p) {
                        if (!Object.prototype.hasOwnProperty.call(p, t)) continue;
                        if (d >= i) {
                            c[t] = "[MaxProperties ~]";
                            break
                        }
                        let n = p[t];
                        c[t] = e(t, n, u - 1, i, s), d++
                    }
                    return a(n), c
                }("", e, t, n)
            } catch (e) {
                return {
                    ERROR: `**non-serializable** (${e})`
                }
            }
        }
        let rg = "sentry.source",
            r_ = "sentry.sample_rate",
            ry = "sentry.previous_trace_sample_rate",
            rv = "sentry.op",
            rb = "sentry.origin",
            rS = "sentry.idle_span_finish_reason",
            rw = "sentry.measurement_unit",
            rk = "sentry.measurement_value",
            rE = "sentry.custom_span_name",
            rx = "sentry.profile_id",
            rC = "sentry.exclusive_time",
            rI = "sentry-";

        function rT(e) {
            let t = function(e) {
                if (e && (nn(e) || Array.isArray(e))) return Array.isArray(e) ? e.reduce((e, t) => (Object.entries(rA(t)).forEach(([t, n]) => {
                    e[t] = n
                }), e), {}) : rA(e)
            }(e);
            if (!t) return;
            let n = Object.entries(t).reduce((e, [t, n]) => (t.startsWith(rI) && (e[t.slice(rI.length)] = n), e), {});
            return Object.keys(n).length > 0 ? n : void 0
        }

        function rM(e) {
            if (e) {
                var t = Object.entries(e).reduce((e, [t, n]) => (n && (e[`${rI}${t}`] = n), e), {});
                return 0 !== Object.keys(t).length ? Object.entries(t).reduce((e, [t, n], r) => {
                    let i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                        s = 0 === r ? i : `${e},${i}`;
                    return s.length > 8192 ? e : s
                }, "") : void 0
            }
        }

        function rA(e) {
            return e.split(",").map(e => {
                let t = e.indexOf("=");
                return -1 === t ? [] : [e.slice(0, t), e.slice(t + 1)].map(e => {
                    try {
                        return decodeURIComponent(e.trim())
                    } catch {
                        return
                    }
                })
            }).reduce((e, [t, n]) => (t && n && (e[t] = n), e), {})
        }
        let rR = /^o(\d+)\./,
            rO = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

        function rL(e, t = !1) {
            let {
                host: n,
                path: r,
                pass: i,
                port: s,
                projectId: o,
                protocol: a,
                publicKey: l
            } = e;
            return `${a}://${l}${t&&i?`:${i}`:""}@${n}${s?`:${s}`:""}/${r?`${r}/`:r}${o}`
        }

        function rP(e) {
            let t = rO.exec(e);
            if (!t) return void ng(() => {
                console.error(`Invalid Sentry Dsn: ${e}`)
            });
            let [n, r, i = "", s = "", o = "", a = ""] = t.slice(1), l = "", u = a, c = u.split("/");
            if (c.length > 1 && (l = c.slice(0, -1).join("/"), u = c.pop()), u) {
                let e = u.match(/^\d+/);
                e && (u = e[0])
            }
            return rN({
                host: s,
                pass: i,
                path: l,
                projectId: u,
                port: o,
                protocol: n,
                publicKey: r
            })
        }

        function rN(e) {
            return {
                protocol: e.protocol,
                publicKey: e.publicKey || "",
                pass: e.pass || "",
                host: e.host,
                port: e.port || "",
                path: e.path || "",
                projectId: e.projectId
            }
        }

        function rD(e) {
            let t, n = e.getOptions(),
                {
                    host: r
                } = e.getDsn() || {};
            if (n.orgId) t = String(n.orgId);
            else {
                let e;
                r && (e = r.match(rR), t = e ? .[1])
            }
            return t
        }

        function r$(e) {
            let t = "string" == typeof e ? rP(e) : rN(e);
            if (t && 1) return t
        }

        function rj(e) {
            if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
            let t = e || rl() ? .getOptions();
            return !!t && (null != t.tracesSampleRate || !!t.tracesSampler)
        }

        function rF(e) {
            if (e < 400 && e >= 100) return {
                code: 1
            };
            if (e >= 400 && e < 500) switch (e) {
                case 401:
                    return {
                        code: 2,
                        message: "unauthenticated"
                    };
                case 403:
                    return {
                        code: 2,
                        message: "permission_denied"
                    };
                case 404:
                    return {
                        code: 2,
                        message: "not_found"
                    };
                case 409:
                    return {
                        code: 2,
                        message: "already_exists"
                    };
                case 413:
                    return {
                        code: 2,
                        message: "failed_precondition"
                    };
                case 429:
                    return {
                        code: 2,
                        message: "resource_exhausted"
                    };
                case 499:
                    return {
                        code: 2,
                        message: "cancelled"
                    };
                default:
                    return {
                        code: 2,
                        message: "invalid_argument"
                    }
            }
            if (e >= 500 && e < 600) switch (e) {
                case 501:
                    return {
                        code: 2,
                        message: "unimplemented"
                    };
                case 503:
                    return {
                        code: 2,
                        message: "unavailable"
                    };
                case 504:
                    return {
                        code: 2,
                        message: "deadline_exceeded"
                    }
            }
            return {
                code: 2,
                message: "internal_error"
            }
        }

        function rU(e, t) {
            e.setAttribute("http.response.status_code", t);
            let n = rF(t);
            "unknown_error" !== n.message && e.setStatus(n)
        }
        let rB = "_sentryScope",
            rW = "_sentryIsolationScope";

        function rq(e) {
            return {
                scope: e[rB],
                isolationScope: function(e) {
                    if (e) {
                        if ("object" == typeof e && "deref" in e && "function" == typeof e.deref) try {
                            return e.deref()
                        } catch {
                            return
                        }
                        return e
                    }
                }(e[rW])
            }
        }

        function rH(e) {
            if ("boolean" == typeof e) return Number(e);
            let t = "string" == typeof e ? parseFloat(e) : e;
            if (!("number" != typeof t || isNaN(t)) && !(t < 0) && !(t > 1)) return t
        }
        let rz = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

        function rV(e, t) {
            let n = function(e) {
                    let t;
                    if (!e) return;
                    let n = e.match(rz);
                    if (n) return "1" === n[3] ? t = !0 : "0" === n[3] && (t = !1), {
                        traceId: n[1],
                        parentSampled: t,
                        parentSpanId: n[2]
                    }
                }(e),
                r = rT(t);
            if (!n ? .traceId) return {
                traceId: nW(),
                sampleRand: nI()
            };
            let i = function(e, t) {
                let n = rH(t ? .sample_rand);
                if (void 0 !== n) return n;
                let r = rH(t ? .sample_rate);
                return r && e ? .parentSampled !== void 0 ? e.parentSampled ? nI() * r : r + nI() * (1 - r) : nI()
            }(n, r);
            r && (r.sample_rand = i.toString());
            let {
                traceId: s,
                parentSpanId: o,
                parentSampled: a
            } = n;
            return {
                traceId: s,
                parentSpanId: o,
                sampled: a,
                dsc: r || {},
                sampleRand: i
            }
        }

        function rJ(e = nW(), t = nQ(), n) {
            let r = "";
            return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`
        }

        function rG(e = nW(), t = nQ(), n) {
            return `00-${e}-${t}-${n?"01":"00"}`
        }
        let rK = !1;

        function rY(e) {
            let {
                spanId: t,
                traceId: n,
                isRemote: r
            } = e.spanContext(), i = r ? t : r1(e).parent_span_id, s = rq(e).scope;
            return {
                parent_span_id: i,
                span_id: r ? s ? .getPropagationContext().propagationSpanId || nQ() : t,
                trace_id: n
            }
        }

        function rX(e) {
            let {
                traceId: t,
                spanId: n
            } = e.spanContext();
            return rJ(t, n, r2(e))
        }

        function rZ(e) {
            return e && e.length > 0 ? e.map(({
                context: {
                    spanId: e,
                    traceId: t,
                    traceFlags: n,
                    ...r
                },
                attributes: i
            }) => ({
                span_id: e,
                trace_id: t,
                sampled: 1 === n,
                attributes: i,
                ...r
            })) : void 0
        }

        function rQ(e) {
            return "number" == typeof e ? r0(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? r0(e.getTime()) : nG()
        }

        function r0(e) {
            return e > 0x2540be3ff ? e / 1e3 : e
        }

        function r1(e) {
            var t;
            if ("function" == typeof e.getSpanJSON) return e.getSpanJSON();
            let {
                spanId: n,
                traceId: r
            } = e.spanContext();
            if ((t = e).attributes && t.startTime && t.name && t.endTime && t.status) {
                let {
                    attributes: t,
                    startTime: i,
                    name: s,
                    endTime: o,
                    status: a,
                    links: l
                } = e;
                return {
                    span_id: n,
                    trace_id: r,
                    data: t,
                    description: s,
                    parent_span_id: "parentSpanId" in e ? e.parentSpanId : "parentSpanContext" in e ? e.parentSpanContext ? .spanId : void 0,
                    start_timestamp: rQ(i),
                    timestamp: rQ(o) || void 0,
                    status: r3(a),
                    op: t[rv],
                    origin: t[rb],
                    links: rZ(l)
                }
            }
            return {
                span_id: n,
                trace_id: r,
                start_timestamp: 0,
                data: {}
            }
        }

        function r2(e) {
            let {
                traceFlags: t
            } = e.spanContext();
            return 1 === t
        }

        function r3(e) {
            if (e && 0 !== e.code) return 1 === e.code ? "ok" : e.message || "internal_error"
        }
        let r5 = "_sentryChildSpans",
            r4 = "_sentryRootSpan";

        function r6(e, t) {
            let n = e[r4] || e;
            nb(t, r4, n), e[r5] ? e[r5].add(t) : nb(e, r5, new Set([t]))
        }

        function r8(e) {
            let t = new Set;
            return ! function e(n) {
                if (!t.has(n) && r2(n))
                    for (let r of (t.add(n), n[r5] ? Array.from(n[r5]) : [])) e(r)
            }(e), Array.from(t)
        }

        function r7(e) {
            return e[r4] || e
        }

        function r9() {
            let e = rn(t5());
            return e.getActiveSpan ? e.getActiveSpan() : rr()[n0]
        }

        function ie() {
            rK || (ng(() => {
                console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.")
            }), rK = !0)
        }

        function it(e, t) {
            e.updateName(t), e.setAttributes({
                [rg]: "custom",
                [rE]: t
            })
        }
        let ir = "_frozenDsc";

        function ii(e, t) {
            let n = t.getOptions(),
                {
                    publicKey: r
                } = t.getDsn() || {},
                i = {
                    environment: n.environment || rc,
                    release: n.release,
                    public_key: r,
                    trace_id: e,
                    org_id: rD(t)
                };
            return t.emit("createDsc", i), i
        }

        function is(e, t) {
            let n = t.getPropagationContext();
            return n.dsc || ii(n.traceId, e)
        }

        function io(e) {
            let t = rl();
            if (!t) return {};
            let n = r7(e),
                r = r1(n),
                i = r.data,
                s = n.spanContext().traceState,
                o = s ? .get("sentry.sample_rate") ? ? i[r_] ? ? i[ry];

            function a(e) {
                return ("number" == typeof o || "string" == typeof o) && (e.sample_rate = `${o}`), e
            }
            let l = n[ir];
            if (l) return a(l);
            let u = s ? .get("sentry.dsc"),
                c = u && rT(u);
            if (c) return a(c);
            let d = ii(e.spanContext().traceId, t),
                p = i[rg],
                h = r.description;
            return "url" !== p && h && (d.transaction = h), rj() && (d.sampled = String(r2(n)), d.sample_rand = s ? .get("sentry.sample_rand") ? ? rq(n).scope ? .getPropagationContext().sampleRand.toString()), a(d), t.emit("createDsc", d, n), d
        }

        function ia(e) {
            return rM(io(e))
        }

        function il(e, t) {
            let {
                extra: n,
                tags: r,
                attributes: i,
                user: s,
                contexts: o,
                level: a,
                sdkProcessingMetadata: l,
                breadcrumbs: u,
                fingerprint: c,
                eventProcessors: d,
                attachments: p,
                propagationContext: h,
                transactionName: f,
                span: m
            } = t;
            iu(e, "extra", n), iu(e, "tags", r), iu(e, "attributes", i), iu(e, "user", s), iu(e, "contexts", o), e.sdkProcessingMetadata = nZ(e.sdkProcessingMetadata, l, 2), a && (e.level = a), f && (e.transactionName = f), m && (e.span = m), u.length && (e.breadcrumbs = [...e.breadcrumbs, ...u]), c.length && (e.fingerprint = [...e.fingerprint, ...c]), d.length && (e.eventProcessors = [...e.eventProcessors, ...d]), p.length && (e.attachments = [...e.attachments, ...p]), e.propagationContext = { ...e.propagationContext,
                ...h
            }
        }

        function iu(e, t, n) {
            e[t] = nZ(e[t], n, 1)
        }

        function ic(e, t) {
            let n = rs().getScopeData();
            return e && il(n, e.getScopeData()), t && il(n, t.getScopeData()), n
        }

        function id(e, t, n, r, i, s) {
            var o, a, l;
            let u, {
                    normalizeDepth: c = 3,
                    normalizeMaxBreadth: d = 1e3
                } = e,
                p = { ...t,
                    event_id: t.event_id || n.event_id || nW(),
                    timestamp: t.timestamp || nJ()
                },
                h = n.integrations || e.integrations.map(e => e.name);
            (function(e, t) {
                let {
                    environment: n,
                    release: r,
                    dist: i,
                    maxValueLength: s
                } = t;
                e.environment = e.environment || n || rc, !e.release && r && (e.release = r), !e.dist && i && (e.dist = i);
                let o = e.request;
                o ? .url && s && (o.url = n$(o.url, s)), s && e.exception ? .values ? .forEach(e => {
                    e.value && (e.value = n$(e.value, s))
                })
            })(p, e), o = p, (a = h).length > 0 && (o.sdk = o.sdk || {}, o.sdk.integrations = [...o.sdk.integrations || [], ...a]), i && i.emit("applyFrameMetadata", t), void 0 === t.type && (l = p, u = rf(e.stackParser), l.exception ? .values ? .forEach(e => {
                e.stacktrace ? .frames ? .forEach(e => {
                    e.filename && (e.debug_id = u[e.filename])
                })
            }));
            let f = function(e, t) {
                if (!t) return e;
                let n = e ? e.clone() : new n2;
                return n.update(t), n
            }(r, n.captureContext);
            n.mechanism && nz(p, n.mechanism);
            let m = i ? i.getEventProcessors() : [],
                g = ic(s, f),
                _ = [...n.attachments || [], ...g.attachments];
            _.length && (n.attachments = _),
                function(e, t) {
                    var n, r, i, s, o, a, l, u;
                    let c, d, {
                        fingerprint: p,
                        span: h,
                        breadcrumbs: f,
                        sdkProcessingMetadata: m
                    } = t;
                    (function(e, t) {
                        let {
                            extra: n,
                            tags: r,
                            user: i,
                            contexts: s,
                            level: o,
                            transactionName: a
                        } = t;
                        Object.keys(n).length && (e.extra = { ...n,
                            ...e.extra
                        }), Object.keys(r).length && (e.tags = { ...r,
                            ...e.tags
                        }), Object.keys(i).length && (e.user = { ...i,
                            ...e.user
                        }), Object.keys(s).length && (e.contexts = { ...s,
                            ...e.contexts
                        }), o && (e.level = o), a && "transaction" !== e.type && (e.transaction = a)
                    })(e, t), h && ((n = e).contexts = {
                        trace: rY(r = h),
                        ...n.contexts
                    }, n.sdkProcessingMetadata = {
                        dynamicSamplingContext: io(r),
                        ...n.sdkProcessingMetadata
                    }, (c = r1(r7(r)).description) && !n.transaction && "transaction" === n.type && (n.transaction = c)), i = e, s = p, i.fingerprint = i.fingerprint ? Array.isArray(i.fingerprint) ? i.fingerprint : [i.fingerprint] : [], s && (i.fingerprint = i.fingerprint.concat(s)), i.fingerprint.length || delete i.fingerprint, o = e, a = f, d = [...o.breadcrumbs || [], ...a], o.breadcrumbs = d.length ? d : void 0, l = e, u = m, l.sdkProcessingMetadata = { ...l.sdkProcessingMetadata,
                        ...u
                    }
                }(p, g);
            let y = [...m, ...g.eventProcessors];
            return (n.data && !0 === n.data.__sentry__ ? rd(p) : function(e, t, n, r = 0) {
                try {
                    let i = function e(t, n, r, i) {
                        let s = r[i];
                        if (!t || !s) return t;
                        let o = s({ ...t
                        }, n);
                        return na(o) ? o.then(t => e(t, n, r, i + 1)) : e(o, n, r, i + 1)
                    }(t, n, e, r);
                    return na(i) ? i : rd(i)
                } catch (e) {
                    return rp(e)
                }
            }(y, p, n)).then(e => (e && function(e) {
                let t = {};
                if (e.exception ? .values ? .forEach(e => {
                        e.stacktrace ? .frames ? .forEach(e => {
                            e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id)
                        })
                    }), 0 === Object.keys(t).length) return;
                e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
                let n = e.debug_meta.images;
                Object.entries(t).forEach(([e, t]) => {
                    n.push({
                        type: "sourcemap",
                        code_file: e,
                        debug_id: t
                    })
                })
            }(e), "number" == typeof c && c > 0) ? function(e, t, n) {
                if (!e) return null;
                let r = { ...e,
                    ...e.breadcrumbs && {
                        breadcrumbs: e.breadcrumbs.map(e => ({ ...e,
                            ...e.data && {
                                data: rm(e.data, t, n)
                            }
                        }))
                    },
                    ...e.user && {
                        user: rm(e.user, t, n)
                    },
                    ...e.contexts && {
                        contexts: rm(e.contexts, t, n)
                    },
                    ...e.extra && {
                        extra: rm(e.extra, t, n)
                    }
                };
                return e.contexts ? .trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = rm(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map(e => ({ ...e,
                    ...e.data && {
                        data: rm(e.data, t, n)
                    }
                }))), e.contexts ? .flags && r.contexts && (r.contexts.flags = rm(e.contexts.flags, 3, n)), r
            }(e, c, d) : e)
        }
        let ip = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

        function ih(e, t) {
            return rr().captureException(e, function(e) {
                if (e) {
                    var t;
                    return (t = e) instanceof n2 || "function" == typeof t || Object.keys(e).some(e => ip.includes(e)) ? {
                        captureContext: e
                    } : e
                }
            }(t))
        }

        function im(e, t) {
            let n = "string" == typeof t ? t : void 0,
                r = "string" != typeof t ? {
                    captureContext: t
                } : void 0;
            return rr().captureMessage(e, n, r)
        }

        function ig(e, t) {
            return rr().captureEvent(e, t)
        }

        function i_(e, t) {
            ri().setContext(e, t)
        }

        function iy(e) {
            ri().setExtras(e)
        }

        function iv(e, t) {
            ri().setExtra(e, t)
        }

        function ib(e) {
            ri().setTags(e)
        }

        function iS(e, t) {
            ri().setTag(e, t)
        }

        function iw(e) {
            ri().setUser(e)
        }

        function ik(e) {
            ri().setConversationId(e)
        }

        function iE() {
            return ri().lastEventId()
        }
        async function ix(e) {
            let t = rl();
            return t ? t.flush(e) : Promise.resolve(!1)
        }
        async function iC(e) {
            let t = rl();
            return t ? t.close(e) : Promise.resolve(!1)
        }

        function iI() {
            return !!rl()
        }

        function iT() {
            let e = rl();
            return e ? .getOptions().enabled !== !1 && !!e ? .getTransport()
        }

        function iM(e) {
            ri().addEventProcessor(e)
        }

        function iA(e) {
            var t;
            let n, r, i = ri(),
                {
                    user: s
                } = ic(i, rr()),
                {
                    userAgent: o
                } = t3.navigator || {},
                a = (t = {
                    user: s,
                    ...o && {
                        userAgent: o
                    },
                    ...e
                }, n = nG(), r = {
                    sid: nW(),
                    init: !0,
                    timestamp: n,
                    started: n,
                    duration: 0,
                    status: "ok",
                    errors: 0,
                    ignoreDuration: !1,
                    toJSON: () => {
                        var e;
                        return e = r, {
                            sid: `${e.sid}`,
                            init: e.init,
                            started: new Date(1e3 * e.started).toISOString(),
                            timestamp: new Date(1e3 * e.timestamp).toISOString(),
                            status: e.status,
                            errors: e.errors,
                            did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                            duration: e.duration,
                            abnormal_mechanism: e.abnormal_mechanism,
                            attrs: {
                                release: e.release,
                                environment: e.environment,
                                ip_address: e.ipAddress,
                                user_agent: e.userAgent
                            }
                        }
                    }
                }, t && nX(r, t), r),
                l = i.getSession();
            return l ? .status === "ok" && nX(l, {
                status: "exited"
            }), iR(), i.setSession(a), a
        }

        function iR() {
            let e, t = ri(),
                n = rr().getSession() || t.getSession();
            n && (e = {}, "ok" === n.status && (e = {
                status: "exited"
            }), nX(n, e)), iO(), t.setSession()
        }

        function iO() {
            let e = ri(),
                t = rl(),
                n = e.getSession();
            n && t && t.captureSession(n)
        }

        function iL(e = !1) {
            e ? iR() : iO()
        }
        let iP = t3,
            iN = 0;

        function iD(e, t = {}) {
            if ("function" != typeof e) return e;
            try {
                let t = e.__sentry_wrapped__;
                if (t)
                    if ("function" == typeof t) return t;
                    else return e;
                if (nw(e)) return e
            } catch {
                return e
            }
            let n = function(...n) {
                try {
                    let r = n.map(e => iD(e, t));
                    return e.apply(this, r)
                } catch (e) {
                    throw iN++, setTimeout(() => {
                        iN--
                    }), ro(r => {
                        r.addEventProcessor(e => (t.mechanism && (nH(e, void 0, void 0), nz(e, t.mechanism)), e.extra = { ...e.extra,
                            arguments: n
                        }, e)), ih(e)
                    }), e
                }
            };
            try {
                for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
            } catch {}
            nS(n, e), nb(e, "__sentry_wrapped__", n);
            try {
                Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
                    get: () => e.name
                })
            } catch {}
            return n
        }

        function i$() {
            let e = np(),
                {
                    referrer: t
                } = iP.document || {},
                {
                    userAgent: n
                } = iP.navigator || {};
            return {
                url: e,
                headers: { ...t && {
                        Referer: t
                    },
                    ...n && {
                        "User-Agent": n
                    }
                }
            }
        }
        let ij = ["replayIntegration", "replayCanvasIntegration", "feedbackIntegration", "feedbackModalIntegration", "feedbackScreenshotIntegration", "captureConsoleIntegration", "contextLinesIntegration", "linkedErrorsIntegration", "dedupeIntegration", "extraErrorDataIntegration", "graphqlClientIntegration", "httpClientIntegration", "reportingObserverIntegration", "rewriteFramesIntegration", "browserProfilingIntegration", "moduleMetadataIntegration", "instrumentAnthropicAiClient", "instrumentOpenAiClient", "instrumentGoogleGenAIClient", "instrumentLangGraph", "createLangChainCallbackHandler"],
            iF = {
                replayCanvasIntegration: "replay-canvas",
                feedbackModalIntegration: "feedback-modal",
                feedbackScreenshotIntegration: "feedback-screenshot"
            };
        async function iU(e, t) {
            var n;
            let r, i = ij.includes(e) ? iF[e] || e.replace("Integration", "").toLowerCase() : void 0,
                s = iP.Sentry = iP.Sentry || {};
            if (!i) throw Error(`Cannot lazy load integration: ${e}`);
            let o = s[e];
            if ("function" == typeof o && !("_isShim" in o)) return o;
            let a = (n = i, r = rl(), new URL(`/${t2}/${n}.min.js`, r ? .getOptions() ? .cdnBaseUrl || "https://browser.sentry-cdn.com").toString()),
                l = iP.document.createElement("script");
            l.src = a, l.crossOrigin = "anonymous", l.referrerPolicy = "strict-origin", t && l.setAttribute("nonce", t);
            let u = new Promise((e, t) => {
                    l.addEventListener("load", () => e()), l.addEventListener("error", t)
                }),
                c = iP.document.currentScript,
                d = iP.document.body || iP.document.head || c ? .parentElement;
            if (d) d.appendChild(l);
            else throw Error(`Could not find parent element to insert lazy-loaded ${e} script`);
            try {
                await u
            } catch {
                throw Error(`Error when loading integration: ${e}`)
            }
            let p = s[e];
            if ("function" != typeof p) throw Error(`Could not load integration: ${e}`);
            return p
        }
        let iB = eV({
                lazyLoadIntegration: iU
            }),
            iW = eV({
                getModalIntegration: () => tX,
                getScreenshotIntegration: () => t1
            });

        function iq(e) {
            let t = e.protocol ? `${e.protocol}:` : "",
                n = e.port ? `:${e.port}` : "";
            return `${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`
        }

        function iH(e, t, n) {
            let r;
            return t || `${iq(e)}${e.projectId}/envelope/?${r={sentry_version:"7"},e.publicKey&&(r.sentry_key=e.publicKey),n&&(r.sentry_client=`
            $ {
                n.name
            }
            /${n.version}`),new URLSearchParams(r).toString()}`}function iz(e,t=[]){return[e,t]}function iV(e,t){for(let n of e[1]){let e=n[0].type;if(t(n,e))return!0}return!1}function iJ(e,t){return iV(e,(e,n)=>t.includes(n))}function iG(e){let t=t4(t3);return t.encodePolyfill?t.encodePolyfill(e):new TextEncoder().encode(e)}function iK(e){let[t,n]=e,r=JSON.stringify(t);function i(e){"string"==typeof r?r="string"==typeof e?r+e:[iG(r),e]:r.push("string"==typeof e?iG(e):e)}for(let e of n){let[t,n]=e;if(i(`
            $ {
                JSON.stringify(t)
            }
            `),"string"==typeof n||n instanceof Uint8Array)i(n);else{let e;try{e=JSON.stringify(n)}catch{e=JSON.stringify(rm(n))}i(e)}}return"string"==typeof r?r:function(e){let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),n=0;for(let r of e)t.set(r,n),n+=r.length;return t}(r)}let iY={sessions:"session",event:"error",client_report:"internal",user_report:"default",profile_chunk:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",raw_security:"security",log:"log_item",trace_metric:"metric"};function iX(e){return e in iY?iY[e]:e}function iZ(e){if(!e?.sdk)return;let{name:t,version:n}=e.sdk;return{name:t,version:n}}function iQ(e,t,n,r){let i=e.sdkProcessingMetadata?.dynamicSamplingContext;return{event_id:e.event_id,sent_at:new Date().toISOString(),...t&&{sdk:t},...!!n&&r&&{dsn:rL(r)},...i&&{trace:i}}}let i0="MULTIPLEXED_TRANSPORT_EXTRA_KEY";function i1(e,t){let n;return iV(e,(e,r)=>(t.includes(r)&&(n=Array.isArray(e)?e[1]:void 0),!!n)),n}function i2(e,t){return n=>{let r=e(n),i=new Map,s=t||(e=>{let t=e.getEvent();return t?.extra?.[i0]&&Array.isArray(t.extra[i0])?t.extra[i0]:[]});function o(t,r){let s=r?`
            $ {
                t
            }: $ {
                r
            }
            `:t,o=i.get(s);if(!o){let a=rP(t);if(!a)return;let l=iH(a,n.tunnel);o=r?(t=>{let n=e(t);return{...n,send:async e=>{let t=i1(e,["event","transaction","profile","replay_event"]);return t&&(t.release=r),n.send(e)}}})({...n,url:l}):e({...n,url:l}),i.set(s,o)}return[t,o]}return{send:async function(e){let t=s({envelope:e,getEvent:function(t){return i1(e,t?.length?t:["event"])}}).map(e=>"string"==typeof e?o(e,void 0):o(e.dsn,e.release)).filter(e=>!!e),n=t.length?t:[["",r]];return(await Promise.all(n.map(([t,n])=>n.send(iz(t?{...e[0],dsn:t}:e[0],e[1])))))[0]},flush:async function(e){let t=[...i.values(),r];return(await Promise.all(t.map(t=>t.flush(e)))).every(e=>e)}}}}function i3(e,t){let n=rl(),r=ri();if(!n)return;let{beforeBreadcrumb:i=null,maxBreadcrumbs:s=100}=n.getOptions();if(s<=0)return;let o={timestamp:nJ(),...e},a=i?ng(()=>i(o,t)):o;null!==a&&(n.emit&&n.emit("beforeAddBreadcrumb",a,t),r.addBreadcrumb(a,s))}let i5=[];function i4(e,t){for(let n of t)n?.afterAllSetup&&n.afterAllSetup(e)}function i6(e,t,n){if(!n[t.name]){if(n[t.name]=t,i5.includes(t.name)||"function"!=typeof t.setupOnce||(t.setupOnce(),i5.push(t.name)),t.setup&&"function"==typeof t.setup&&t.setup(e),"function"==typeof t.preprocessEvent){let n=t.preprocessEvent.bind(t);e.on("preprocessEvent",(t,r)=>n(t,r,e))}if("function"==typeof t.processEvent){let n=t.processEvent.bind(t),r=Object.assign((t,r)=>n(t,r,e),{id:t.name});e.addEventProcessor(r)}}}function i8(e){let t=rl();t&&t.addIntegration(e)}let i7={},i9={};function se(e,t){i7[e]=i7[e]||[],i7[e].push(t)}function st(e,t){if(!i9[e]){i9[e]=!0;try{t()}catch(e){}}}function sn(e,t){let n=e&&i7[e];if(n)for(let e of n)try{e(t)}catch(e){}}function sr(e){let t="console";se(t,e),st(t,si)}function si(){"console"in t3&&nf.forEach(function(e){e in t3.console&&nv(t3.console,e,function(t){return nm[e]=t,function(...t){sn("console",{args:t,level:e});let n=nm[e];n?.apply(t3.console,t)}})})}function ss(e){return"warn"===e?"warning":["fatal","error","warning","log","info","debug"].includes(e)?e:"log"}let so=(e={})=>{let t=e.levels||nf,n=e.handled??!0;return{name:"CaptureConsole",setup(e){"console"in t3&&sr(({args:r,level:i})=>{var s,o,a;let l,u,c;rl()===e&&t.includes(i)&&(s=r,o=i,a=n,l=ss(o),u=Error(),c={level:ss(o),extra:{arguments:s}},ro(e=>{if(e.addEventProcessor(e=>(e.logger="console",nz(e,{handled:a,type:"auto.core.capture_console"}),e)),"assert"===o){if(!s[0]){let t=`
            Assertion failed: $ {
                nF(s.slice(1), " ") || "console.assert"
            }
            `;e.setExtra("arguments",s.slice(1)),e.captureMessage(t,l,{captureContext:c,syntheticException:u})}return}let t=s.find(e=>e instanceof Error);if(t)return void ih(t,c);let n=nF(s," ");e.captureMessage(n,l,{captureContext:c,syntheticException:u})}))})}}};function sa(e,t={},n=rr()){let{message:r,name:i,email:s,url:o,source:a,associatedEventId:l,tags:u}=e,c={contexts:{feedback:{contact_email:s,name:i,message:r,url:o,source:a,associated_event_id:l}},type:"feedback",level:"info",tags:u},d=n?.getClient()||rl();return d&&d.emit("beforeSendFeedback",c,t),n.captureEvent(c,t)}function sl(e,t=!1){let n={};for(let[r,i]of Object.entries(e??{})){let e=function(e,t){let{value:n,unit:r}="object"==typeof e&&null!=e&&!Array.isArray(e)&&Object.keys(e).includes("value")?e:{value:e,unit:void 0},i=function(e){let t="string"==typeof e?"string":"boolean"==typeof e?"boolean":"number"!=typeof e||Number.isNaN(e)?null:Number.isInteger(e)?"integer":"double";if(t)return{value:e,type:t}}(n),s=r&&"string"==typeof r?{unit:r}:{};if(i)return{...i,...s};if(!t||"skip-undefined"===t&&void 0===n)return;let o="";try{o=JSON.stringify(n)??""}catch{}return{value:o,type:"string",...s}}(i,t);e&&(n[r]=e)}return n}let su=0;function sc(e){let t=Math.floor(1e3*e);void 0!==f&&t!==f&&(su=0);let n=su;return su++,f=t,{key:"sentry.timestamp.sequence",value:{value:n,type:"integer"}}}function sd(e,t){return t?ro(t,()=>{let n=r9(),r=n?rY(n):ru(t);return[n?io(n):is(e,t),r]}):[void 0,void 0]}let sp={trace:1,debug:5,info:9,warn:13,error:17,fatal:21};function sh(e,t,n,r=!0){n&&(!e[t]||r)&&(e[t]=n)}function sf(e,t){var n;let r=s_(),i=(n=e,s_().get(n));void 0===i?r.set(e,[t]):i.length>=100?(sg(e,i),r.set(e,[t])):r.set(e,[...i,t])}function sm(e,t=rr(),n=sf){let r=t?.getClient()??rl();if(!r)return;let{release:i,environment:s,enableLogs:o=!1,beforeSendLog:a}=r.getOptions();if(!o)return;let[,l]=sd(r,t),u={...e.attributes},{user:{id:c,email:d,username:p},attributes:h={}}=ic(ri(),t);sh(u,"user.id",c,!1),sh(u,"user.email",d,!1),sh(u,"user.name",p,!1),sh(u,"sentry.release",i),sh(u,"sentry.environment",s);let{name:f,version:m}=r.getSdkMetadata()?.sdk??{};sh(u,"sentry.sdk.name",f),sh(u,"sentry.sdk.version",m);let g=r.getIntegrationByName("Replay"),_=g?.getReplayId(!0);sh(u,"sentry.replay_id",_),_&&g?.getRecordingMode()==="buffer"&&sh(u,"sentry._internal.replay_is_buffering",!0);let y=e.message;if(nr(y)){let{__sentry_template_string__:e,__sentry_template_values__:t=[]}=y;t?.length&&(u["sentry.message.template"]=e),t.forEach((e,t)=>{u[`
            sentry.message.parameter.$ {
                t
            }
            `]=e})}let v=t[n0];sh(u,"sentry.trace.parent_span_id",v?.spanContext().spanId);let b={...e,attributes:u};r.emit("beforeCaptureLog",b);let S=a?ng(()=>a(b)):b;if(!S)return void r.recordDroppedEvent("before_send","log_item",1);let{level:w,message:k,attributes:E={},severityNumber:x}=S,C=nG(),I=sc(C);n(r,{timestamp:C,level:w,body:k,trace_id:l?.trace_id,severity_number:x??sp[w],attributes:{...sl(h),...sl(E,!0),[I.key]:I.value}}),r.emit("afterCaptureLog",S)}function sg(e,t){var n,r,i,s;let o,a=t??(s=e,s_().get(s))??[];if(0===a.length)return;let l=e.getOptions(),u=(n=l._metadata,r=l.tunnel,i=e.getDsn(),o={},n?.sdk&&(o.sdk={name:n.sdk.name,version:n.sdk.version}),r&&i&&(o.dsn=rL(i)),iz(o,[[{type:"log",item_count:a.length,content_type:"application/vnd.sentry.items.log+json"},{items:a}]]));s_().set(e,[]),e.emit("flushLogs"),e.sendEnvelope(u)}function s_(){return t6("clientToLogBufferMap",()=>new WeakMap)}function sy(e,t,n){var r,i,s;return"util"in t3&&"function"==typeof t3.util.format?t3.util.format(...e):(r=e,i=t,s=n,r.map(e=>ni(e)?String(e):JSON.stringify(rm(e,i,s))).join(" "))}function sv(e){return/%[sdifocO]/.test(e)}function sb(e,t){let n={},r=Array(t.length).fill("{}").join(" ");return n["sentry.message.template"]=`
            $ {
                e
            }
            $ {
                r
            }
            `,t.forEach((e,t)=>{n[`
            sentry.message.parameter.$ {
                t
            }
            `]=e}),n}let sS={[rb]:"auto.log.console"},sw=(e={})=>{let t=e.levels||nf;return{name:"ConsoleLogs",setup(e){let{enableLogs:n,normalizeDepth:r=3,normalizeMaxBreadth:i=1e3}=e.getOptions();n&&sr(({args:n,level:s})=>{if(rl()!==e||!t.includes(s))return;let o=n[0],a=n.slice(1);if("assert"===s){o||sm({level:"error",message:a.length>0?`
            Assertion failed: $ {
                sy(a, r, i)
            }
            `:"Assertion failed",attributes:sS});return}let l="log"===s,u=n.length>1&&"string"==typeof n[0]&&!sv(n[0]),c={...sS,...u?sb(o,a):{}};sm({level:l?"info":s,message:sy(n,r,i),severityNumber:l?10:void 0,attributes:c})})}}};function sk(e,t,n=()=>{},r=()=>{}){var i,s,o,a;let l;try{l=e()}catch(e){throw t(e),n(),e}return i=l,s=t,o=n,a=r,na(i)?n4(i,e=>{o(),a(e)},e=>{s(e),o()}):(o(),a(i),i)}class sE{constructor(e={}){this._traceId=e.traceId||nW(),this._spanId=e.spanId||nQ()}spanContext(){return{spanId:this._spanId,traceId:this._traceId,traceFlags:0}}end(e){}setAttribute(e,t){return this}setAttributes(e){return this}setStatus(e){return this}updateName(e){return this}isRecording(){return!1}addEvent(e,t,n){return this}addLink(e){return this}addLinks(e){return this}recordException(e,t){}}function sx(e,t){if(!t?.length||!e.description)return!1;for(let r of t){var n;if("string"==typeof(n=r)||n instanceof RegExp){if(nU(e.description,r))return!0;continue}if(!r.name&&!r.op)continue;let t=!r.name||nU(e.description,r.name),i=!r.op||e.op&&nU(e.op,r.op);if(t&&i)return!0}return!1}function sC(e,t,n,r=r9()){let i=r&&r7(r);i&&i.addEvent(e,{[rk]:t,[rw]:n})}function sI(e){if(!e||0===e.length)return;let t={};return e.forEach(e=>{let n=e.attributes||{},r=n[rw],i=n[rk];"string"==typeof r&&"number"==typeof i&&(t[e.name]={value:i,unit:r})}),t}class sT{constructor(e={}){this._traceId=e.traceId||nW(),this._spanId=e.spanId||nQ(),this._startTime=e.startTimestamp||nG(),this._links=e.links,this._attributes={},this.setAttributes({[rb]:"manual",[rv]:e.op,...e.attributes}),this._name=e.name,e.parentSpanId&&(this._parentSpanId=e.parentSpanId),"sampled"in e&&(this._sampled=e.sampled),e.endTimestamp&&(this._endTime=e.endTimestamp),this._events=[],this._isStandaloneSpan=e.isStandalone,this._endTime&&this._onSpanEnded()}addLink(e){return this._links?this._links.push(e):this._links=[e],this}addLinks(e){return this._links?this._links.push(...e):this._links=e,this}recordException(e,t){}spanContext(){let{_spanId:e,_traceId:t,_sampled:n}=this;return{spanId:e,traceId:t,traceFlags:+!!n}}setAttribute(e,t){return void 0===t?delete this._attributes[e]:this._attributes[e]=t,this}setAttributes(e){return Object.keys(e).forEach(t=>this.setAttribute(t,e[t])),this}updateStartTime(e){this._startTime=rQ(e)}setStatus(e){return this._status=e,this}updateName(e){return this._name=e,this.setAttribute(rg,"custom"),this}end(e){this._endTime||(this._endTime=rQ(e),this._onSpanEnded())}getSpanJSON(){return{data:this._attributes,description:this._name,op:this._attributes[rv],parent_span_id:this._parentSpanId,span_id:this._spanId,start_timestamp:this._startTime,status:r3(this._status),timestamp:this._endTime,trace_id:this._traceId,origin:this._attributes[rb],profile_id:this._attributes[rx],exclusive_time:this._attributes[rC],measurements:sI(this._events),is_segment:this._isStandaloneSpan&&r7(this)===this||void 0,segment_id:this._isStandaloneSpan?r7(this).spanContext().spanId:void 0,links:rZ(this._links)}}isRecording(){return!this._endTime&&!!this._sampled}addEvent(e,t,n){let r=sM(t)?t:n||nG(),i=sM(t)?{}:t||{},s={name:e,time:rQ(r),attributes:i};return this._events.push(s),this}isStandaloneSpan(){return!!this._isStandaloneSpan}_onSpanEnded(){let e=rl();if(e&&e.emit("spanEnd",this),!(this._isStandaloneSpan||this===r7(this)))return;if(this._isStandaloneSpan)return void(this._sampled?function(e){let t=rl();if(!t)return;let n=e[1];n&&0!==n.length?t.sendEnvelope(e):t.recordDroppedEvent("before_send","span")}(function(e,t){let n=io(e[0]),r=t?.getDsn(),i=t?.getOptions().tunnel,s={sent_at:new Date().toISOString(),...!!n.trace_id&&!!n.public_key&&{trace:n},...!!i&&r&&{dsn:rL(r)}},{beforeSendSpan:o,ignoreSpans:a}=t?.getOptions()||{},l=a?.length?e.filter(e=>!sx(r1(e),a)):e,u=e.length-l.length;u&&t?.recordDroppedEvent("before_send","span",u);let c=o?e=>{let t=r1(e),n=o(t);return n||(ie(),t)}:r1,d=[];for(let e of l){let t=c(e);t&&d.push([{type:"span"},t])}return iz(s,d)}([this],e)):e&&e.recordDroppedEvent("sample_rate","span"));let t=this._convertSpanToTransaction();t&&(rq(this).scope||rr()).captureEvent(t)}_convertSpanToTransaction(){if(!sA(r1(this)))return;this._name||(this._name="<unlabeled transaction>");let{scope:e,isolationScope:t}=rq(this),n=e?.getScopeData().sdkProcessingMetadata?.normalizedRequest;if(!0!==this._sampled)return;let r=r8(this).filter(e=>{var t;return e!==this&&!((t=e)instanceof sT&&t.isStandaloneSpan())}).map(e=>r1(e)).filter(sA),i=this._attributes[rg];delete this._attributes[rE],r.forEach(e=>{delete e.data[rE]});let s={contexts:{trace:function(e){let{spanId:t,traceId:n}=e.spanContext(),{data:r,op:i,parent_span_id:s,status:o,origin:a,links:l}=r1(e);return{parent_span_id:s,span_id:t,trace_id:n,data:r,op:i,status:o,origin:a,links:l}}(this)},spans:r.length>1e3?r.sort((e,t)=>e.start_timestamp-t.start_timestamp).slice(0,1e3):r,start_timestamp:this._startTime,timestamp:this._endTime,transaction:this._name,type:"transaction",sdkProcessingMetadata:{capturedSpanScope:e,capturedSpanIsolationScope:t,dynamicSamplingContext:io(this)},request:n,...i&&{transaction_info:{source:i}}},o=sI(this._events);return o&&Object.keys(o).length&&(s.measurements=o),s}}function sM(e){return e&&"number"==typeof e||e instanceof Date||Array.isArray(e)}function sA(e){return!!e.start_timestamp&&!!e.timestamp&&!!e.span_id&&!!e.trace_id}let sR="__SENTRY_SUPPRESS_TRACING__";function sO(e,t){let n=sB();if(n.startSpan)return n.startSpan(e,t);let r=sU(e),{forceTransaction:i,parentSpan:s,scope:o}=e;return ro(o?.clone(),()=>sH(s)(()=>{let n=rr(),o=sq(n,s),a=e.onlyIfParent&&!o?new sE:sF({parentSpan:o,spanArguments:r,forceTransaction:i,scope:n});return n1(n,a),sk(()=>t(a),()=>{let{status:e}=r1(a);a.isRecording()&&(!e||"ok"===e)&&a.setStatus({code:2,message:"internal_error"})},()=>{a.end()})}))}function sL(e,t){let n=sB();if(n.startSpanManual)return n.startSpanManual(e,t);let r=sU(e),{forceTransaction:i,parentSpan:s,scope:o}=e;return ro(o?.clone(),()=>sH(s)(()=>{let n=rr(),o=sq(n,s),a=e.onlyIfParent&&!o?new sE:sF({parentSpan:o,spanArguments:r,forceTransaction:i,scope:n});return n1(n,a),sk(()=>t(a,()=>a.end()),()=>{let{status:e}=r1(a);a.isRecording()&&(!e||"ok"===e)&&a.setStatus({code:2,message:"internal_error"})})}))}function sP(e){let t=sB();if(t.startInactiveSpan)return t.startInactiveSpan(e);let n=sU(e),{forceTransaction:r,parentSpan:i}=e;return(e.scope?t=>ro(e.scope,t):void 0!==i?e=>sD(i,e):e=>e())(()=>{let t=rr(),s=sq(t,i);return e.onlyIfParent&&!s?new sE:sF({parentSpan:s,spanArguments:n,forceTransaction:r,scope:t})})}let sN=(e,t)=>{var n;let r,i=rn(t5());if(i.continueTrace)return i.continueTrace(e,t);let{sentryTrace:s,baggage:o}=e,a=rl(),l=rT(o);return a&&(n=l?.org_id,r=rD(a),n&&r&&n!==r?(ny.log(`
            Won 't continue trace because org IDs don'
            t match(incoming baggage: $ {
                n
            }, SDK options: $ {
                r
            })
            `),1):a.getOptions().strictTraceContinuation&&(n&&!r||!n&&r)&&(ny.log(`
            Starting a new trace because strict trace continuation is enabled but one org ID is missing(incoming baggage: $ {
                n
            }, Sentry client: $ {
                r
            })
            `),1))?sj(t):ro(e=>{let n=rV(s,o);return e.setPropagationContext(n),n1(e,void 0),t()})};function sD(e,t){let n=sB();return n.withActiveSpan?n.withActiveSpan(e,t):ro(n=>(n1(n,e||void 0),t(n)))}function s$(e){let t=sB();return t.suppressTracing?t.suppressTracing(e):ro(t=>{t.setSDKProcessingMetadata({[sR]:!0});let n=e();return t.setSDKProcessingMetadata({[sR]:void 0}),n})}function sj(e){let t=sB();return t.startNewTrace?t.startNewTrace(e):ro(t=>(t.setPropagationContext({traceId:nW(),sampleRand:nI()}),sD(null,e)))}function sF({parentSpan:e,spanArguments:t,forceTransaction:n,scope:r}){var i;let s;if(!rj()){let r=new sE;if(n||!e){let e={sampled:"false",sample_rate:"0",transaction:t.name,...io(r)};nb(r,ir,e)}return r}let o=ri();if(e&&!n)s=function(e,t,n){let{spanId:r,traceId:i}=e.spanContext(),s=!t.getScopeData().sdkProcessingMetadata[sR]&&r2(e),o=s?new sT({...n,parentSpanId:r,traceId:i,sampled:s}):new sE({traceId:i});r6(e,o);let a=rl();return a&&(a.emit("spanStart",o),n.endTimestamp&&a.emit("spanEnd",o)),o}(e,r,t),r6(e,s);else if(e){let n=io(e),{traceId:i,spanId:o}=e.spanContext(),a=r2(e);nb(s=sW({traceId:i,parentSpanId:o,...t},r,a),ir,n)}else{let{traceId:e,dsc:n,parentSpanId:i,sampled:a}={...o.getPropagationContext(),...r.getPropagationContext()};s=sW({traceId:e,parentSpanId:i,...t},r,a),n&&nb(s,ir,n)}return(i=s)&&(nb(i,rW,function(e){try{let t=t3.WeakRef;if("function"==typeof t)return new t(e)}catch{}return e}(o)),nb(i,rB,r)),s}function sU(e){let t={isStandalone:(e.experimental||{}).standalone,...e};if(e.startTime){let n={...t};return n.startTimestamp=rQ(e.startTime),delete n.startTime,n}return t}function sB(){return rn(t5())}function sW(e,t,n){let r=rl(),i=r?.getOptions()||{},{name:s=""}=e,o={spanAttributes:{...e.attributes},spanName:s,parentSampled:n};r?.emit("beforeSampling",o,{decision:!1});let a=o.parentSampled??n,l=o.spanAttributes,u=t.getPropagationContext(),[c,d,p]=t.getScopeData().sdkProcessingMetadata[sR]?[!1]:function(e,t,n){let r,i;if(!rj(e))return[!1];"function"==typeof e.tracesSampler?(r=e.tracesSampler({...t,inheritOrSampleWith:e=>"number"==typeof t.parentSampleRate?t.parentSampleRate:"boolean"==typeof t.parentSampled?Number(t.parentSampled):e}),i=!0):void 0!==t.parentSampled?r=t.parentSampled:void 0!==e.tracesSampleRate&&(r=e.tracesSampleRate,i=!0);let s=rH(r);if(void 0===s)return[!1];if(!s)return[!1,s,i];let o=n<s;return[o,s,i]}(i,{name:s,parentSampled:a,attributes:l,parentSampleRate:rH(u.dsc?.sample_rate)},u.sampleRand),h=new sT({...e,attributes:{[rg]:"custom",[r_]:void 0!==d&&p?d:void 0,...l},sampled:c});return!c&&r&&r.recordDroppedEvent("sample_rate","transaction"),r&&r.emit("spanStart",h),h}function sq(e,t){if(t)return t;if(null===t)return;let n=e[n0];if(!n)return;let r=rl();return(r?r.getOptions():{}).parentSpanIsAlwaysRootSpan?r7(n):n}function sH(e){return void 0!==e?t=>sD(e,t):e=>e()}let sz=["trace","debug","info","warn","error","fatal"];function sV(e={}){let t=new Set(e.levels??sz),n=e.client;return{log(e){let{type:r,level:i,message:s,args:o,tag:a,date:l,...u}=e,c=n||rl();if(!c)return;let d=function(e,t){if("verbose"===e)return"debug";if("silent"===e)return"trace";if(e){let t=sJ[e];if(t)return t}if("number"==typeof t){let e=sG[t];if(e)return e}return"info"}(r,i);if(!t.has(d))return;let{normalizeDepth:p=3,normalizeMaxBreadth:h=1e3}=c.getOptions(),f={};for(let[e,t]of Object.entries(u))f[e]=rm(t,p,h);f["sentry.origin"]="auto.log.consola",a&&(f["consola.tag"]=a),r&&(f["consola.type"]=r),null!=i&&"number"==typeof i&&(f["consola.level"]=i);let m=function(e,t,n){let{message:r,attributes:i,messageTemplate:s,messageParameters:o}=e,a={};if(s&&o)for(let[e,r]of Object.entries(sb(s,o)))a[e]=e.startsWith("sentry.message.parameter.")?rm(r,t,n):r;else o&&o.length>0&&o.forEach((e,r)=>{a[`
            sentry.message.parameter.$ {
                r
            }
            `]=rm(e,t,n)});return{message:r,attributes:{...rm(i,t,n),...a}}}(function(e,t,n){if(!e?.length)return{message:""};let r=sy(e,t,n),i=e[0];if(ns(i)){let t="string"==typeof e[1]?2:1;return{message:r,attributes:i,messageParameters:e.slice(t)}}{let t=e.slice(1),n=t.length>0&&"string"==typeof i&&!sv(i);return{message:r,messageTemplate:n?i:void 0,messageParameters:n?t:void 0}}}(o,p,h),p,h);m?.attributes&&Object.assign(f,m.attributes),sm({level:d,message:m?.message||s||o&&sy(o,p,h)||"",attributes:f})}}}let sJ={silent:"trace",fatal:"fatal",error:"error",warn:"warn",log:"info",info:"info",success:"info",fail:"error",ready:"info",start:"info",box:"info",debug:"debug",trace:"trace",verbose:"debug",critical:"fatal",notice:"info"},sG={0:"fatal",1:"warn",2:"info",3:"info",4:"debug",5:"trace"},sK="gen_ai.system",sY="gen_ai.request.model",sX="gen_ai.request.stream",sZ="gen_ai.request.temperature",sQ="gen_ai.request.max_tokens",s0="gen_ai.request.frequency_penalty",s1="gen_ai.request.presence_penalty",s2="gen_ai.request.top_p",s3="gen_ai.request.top_k",s5="gen_ai.response.finish_reasons",s4="gen_ai.response.model",s6="gen_ai.response.id",s8="gen_ai.usage.input_tokens",s7="gen_ai.usage.output_tokens",s9="gen_ai.usage.total_tokens",oe="gen_ai.operation.name",ot="sentry.sdk_meta.gen_ai.input.messages.original_length",on="gen_ai.input.messages",or="gen_ai.system_instructions",oi="gen_ai.response.text",os="gen_ai.request.available_tools",oo="gen_ai.response.streaming",oa="gen_ai.response.tool_calls",ol="gen_ai.agent.name",ou="gen_ai.conversation.id",oc="gen_ai.embeddings.input",od="openai.response.id",op="openai.response.model",oh="openai.response.timestamp",of="anthropic.response.timestamp";function om(e){var t,n,r,i,s,o,a,l;return!!e&&"object"==typeof e&&("type"in(t=e)&&"string"==typeof t.type&&"source"in t&&om(t.source)||o_(e)||"image_url"in(n=e)&&("string"==typeof n.image_url?n.image_url.startsWith("data:"):og(n))||oy(e)||ov(e)||"media_type"in(r=e)&&"string"==typeof r.media_type&&"data"in r||"type"in(i=e)&&"file"===i.type&&"mediaType"in i&&"string"==typeof i.mediaType&&"data"in i&&"string"==typeof i.data&&!i.data.startsWith("http://")&&!i.data.startsWith("https://")||"type"in(s=e)&&"image"===s.type&&"image"in s&&"string"==typeof s.image&&!s.image.startsWith("http://")&&!s.image.startsWith("https://")||"type"in(o=e)&&("blob"===o.type||"base64"===o.type)||"b64_json"in e||"type"in(a=e)&&"result"in a&&"image_generation"===a.type||"uri"in(l=e)&&"string"==typeof l.uri&&l.uri.startsWith("data:"))}function og(e){return"image_url"in e&&!!e.image_url&&"object"==typeof e.image_url&&"url"in e.image_url&&"string"==typeof e.image_url.url&&e.image_url.url.startsWith("data:")}function o_(e){return"inlineData"in e&&!!e.inlineData&&"object"==typeof e.inlineData&&"data"in e.inlineData&&"string"==typeof e.inlineData.data}function oy(e){return"type"in e&&"input_audio"===e.type&&"input_audio"in e&&!!e.input_audio&&"object"==typeof e.input_audio&&"data"in e.input_audio&&"string"==typeof e.input_audio.data}function ov(e){return"type"in e&&"file"===e.type&&"file"in e&&!!e.file&&"object"==typeof e.file&&"file_data"in e.file&&"string"==typeof e.file.file_data}let ob="[Blob substitute]",oS=["image_url","data","content","b64_json","result","uri","image"];function ow(e){let t={...e};for(let n of(om(t.source)&&(t.source=ow(t.source)),o_(e)&&(t.inlineData={...e.inlineData,data:ob}),og(e)&&(t.image_url={...e.image_url,url:ob}),oy(e)&&(t.input_audio={...e.input_audio,data:ob}),ov(e)&&(t.file={...e.file,file_data:ob}),oS))"string"==typeof t[n]&&(t[n]=ob);return t}let ok=e=>new TextEncoder().encode(e).length,oE=e=>ok(JSON.stringify(e));function ox(e,t){if(ok(e)<=t)return e;let n=0,r=e.length,i="";for(;n<=r;){let s=Math.floor((n+r)/2),o=e.slice(0,s);ok(o)<=t?(i=o,n=s+1):r=s-1}return i}function oC(e,t){return"string"==typeof e?t:{...e,text:t}}function oI(e){return null!==e&&"object"==typeof e&&"content"in e&&Array.isArray(e.content)}function oT(e){return null!==e&&"object"==typeof e&&"parts"in e&&Array.isArray(e.parts)&&e.parts.length>0}function oM(e){if(!Array.isArray(e)||0===e.length)return e;let t=function e(t){return t.map(t=>{let n;return t&&"object"==typeof t&&(oI(t)?n={...t,content:e(t.content)}:"content"in t&&om(t.content)&&(n={...t,content:ow(t.content)}),oT(t)&&(n={...n??t,parts:e(t.parts)}),om(n)?n=ow(n):om(t)&&(n=ow(t))),n??t})}([e[e.length-1]]),n=t[0];return 19998>=oE(n)?t:function(e){if(!e)return[];if("string"==typeof e){let t=ox(e,19998);return t?[t]:[]}if("object"!=typeof e)return[];if(null!==e&&"object"==typeof e&&"content"in e&&"string"==typeof e.content){let t=19998-oE({...e,content:""});if(t<=0)return[];let n=ox(e.content,t);return[{...e,content:n}]}return oI(e)||oT(e)?function(e,t){let{key:n,items:r}="parts"in e&&Array.isArray(e.parts)?{key:"parts",items:e.parts}:"content"in e&&Array.isArray(e.content)?{key:"content",items:e.content}:{key:null,items:[]};if(null===n||0===r.length)return[];let i=r.map(e=>oC(e,"")),s=t-oE({...e,[n]:i});if(s<=0)return[];let o=[];for(let e of r){let t="string"==typeof e?e:"text"in e&&"string"==typeof e.text?e.text:"",n=ok(t);if(n<=s)o.push(e),s-=n;else if(0===o.length){let n=ox(t,s);n&&o.push(oC(e,n));break}else break}return o.length<=0?[]:[{...e,[n]:o}]}(e,19998):[]}(n)}function oA(e){let t=!!rl()?.getOptions().sendDefaultPii;return{...e,recordInputs:e?.recordInputs??t,recordOutputs:e?.recordOutputs??t}}function oR(e,t){return e?`
            $ {
                e
            }.$ {
                t
            }
            `:t}function oO(e,t,n,r,i){void 0!==t&&e.setAttributes({[s8]:t}),void 0!==n&&e.setAttributes({[s7]:n}),(void 0!==t||void 0!==n||void 0!==r||void 0!==i)&&e.setAttributes({[s9]:(t??0)+(n??0)+(r??0)+(i??0)})}function oL(e){return"string"==typeof e?ox(e,2e4):Array.isArray(e)?JSON.stringify(oM(e)):JSON.stringify(e)}function oP(e){if(!Array.isArray(e))return{systemInstructions:void 0,filteredMessages:e};let t=e.findIndex(e=>e&&"object"==typeof e&&"role"in e&&"system"===e.role);if(-1===t)return{systemInstructions:void 0,filteredMessages:e};let n=e[t],r="string"==typeof n.content?n.content:void 0!==n.content?JSON.stringify(n.content):void 0;return r?{systemInstructions:JSON.stringify([{type:"text",content:r}]),filteredMessages:[...e.slice(0,t),...e.slice(t+1)]}:{systemInstructions:void 0,filteredMessages:e}}async function oN(e,t,n){let r=e.catch(e=>{throw ih(e,{mechanism:{handled:!1,type:n}}),e}),i=await t,s=await r;return s&&"object"==typeof s&&"data"in s?{...s,data:i}:i}function oD(e,t,n){return na(e)?new Proxy(e,{get(e,r){let i=r in Promise.prototype||r===Symbol.toStringTag?t:e,s=Reflect.get(i,r);return"withResponse"===r&&"function"==typeof s?function(){return oN(s.call(e),t,n)}:"function"==typeof s?s.bind(i):s}}):t}let o$="auto.ai.langchain",oj={human:"user",ai:"assistant",assistant:"assistant",system:"system",function:"function",tool:"tool"},oF=(e,t,n)=>{null!=n&&(e[t]=n)},oU=(e,t,n)=>{let r=Number(n);Number.isNaN(r)||(e[t]=r)};function oB(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch{return String(e)}}function oW(e){if(Array.isArray(e))try{let t=e.map(e=>e&&"object"==typeof e&&om(e)?ow(e):e);return JSON.stringify(t)}catch{return String(e)}return oB(e)}function oq(e){let t=e.toLowerCase();return oj[t]??t}function oH(e){return e.includes("System")?"system":e.includes("Human")?"user":e.includes("AI")||e.includes("Assistant")?"assistant":e.includes("Function")?"function":e.includes("Tool")?"tool":"user"}function oz(e){if(!(!e||Array.isArray(e)))return e.invocation_params}function oV(e){return e.map(e=>{let t=e._getType;if("function"==typeof t)return{role:oq(t.call(e)),content:oW(e.content)};if(1===e.lc&&e.kwargs){let t=e.id,n=Array.isArray(t)&&t.length>0?t[t.length-1]:"";return{role:oq("string"==typeof n?oH(n):"user"),content:oW(e.kwargs?.content)}}if(e.type)return{role:oq(String(e.type).toLowerCase()),content:oW(e.content)};if(e.role)return{role:oq(String(e.role)),content:oW(e.content)};let n=e.constructor?.name;return n&&"Object"!==n?{role:oq(oH(n)),content:oW(e.content)}:{role:"user",content:oW(e.content)}})}function oJ(e,t,n,r,i){let s,o;return{[sK]:oB(e??"langchain"),[oe]:"chat",[sY]:oB(t),[rb]:o$,...(s={},o="kwargs"in n?n.kwargs:void 0,oU(s,sZ,r?.temperature??i?.ls_temperature??o?.temperature),oU(s,sQ,r?.max_tokens??i?.ls_max_tokens??o?.max_tokens),oU(s,s2,r?.top_p??o?.top_p),oU(s,s0,r?.frequency_penalty),oU(s,s1,r?.presence_penalty),r&&"stream"in r&&oF(s,sX,!!r.stream),s)}}function oG(e={}){let{recordInputs:t,recordOutputs:n}=oA(e),r=new Map,i=e=>{let t=r.get(e);t?.isRecording()&&(t.end(),r.delete(e))},s={lc_serializable:!1,lc_namespace:["langchain_core","callbacks","sentry"],lc_secrets:void 0,lc_attributes:void 0,lc_aliases:void 0,lc_serializable_keys:void 0,lc_id:["langchain_core","callbacks","sentry"],lc_kwargs:{},name:"SentryCallbackHandler",ignoreLLM:!1,ignoreChain:!1,ignoreAgent:!1,ignoreRetriever:!1,ignoreCustomEvent:!1,raiseError:!1,awaitHandlers:!0,handleLLMStart(e,n,i,s,o,a,l,u){let c,d=oz(a),p=(c=oJ(l?.ls_provider,d?.model??l?.ls_model_name??"unknown",e,d,l),t&&Array.isArray(n)&&n.length>0&&(oF(c,ot,n.length),oF(c,on,oB(n.map(e=>({role:"user",content:e}))))),c),h=p[sY],f=p[oe];sL({name:`
            $ {
                f
            }
            $ {
                h
            }
            `,op:"gen_ai.chat",attributes:{...p,[rv]:"gen_ai.chat"}},e=>(r.set(i,e),e))},handleChatModelStart(e,n,i,s,o,a,l,u){let c=function(e,t,n,r,i){let s=oJ(i?.ls_provider??e.id?.[2],r?.model??i?.ls_model_name??"unknown",e,r,i);if(n&&Array.isArray(t)&&t.length>0){let{systemInstructions:e,filteredMessages:n}=oP(oV(t.flat()));e&&oF(s,or,e),oF(s,ot,Array.isArray(n)?n.length:0),oF(s,on,oB(oM(n)))}return s}(e,n,t,oz(a),l),d=c[sY],p=c[oe];sL({name:`
            $ {
                p
            }
            $ {
                d
            }
            `,op:"gen_ai.chat",attributes:{...c,[rv]:"gen_ai.chat"}},e=>(r.set(i,e),e))},handleLLMEnd(e,t,s,o,a){let l=r.get(t);if(l?.isRecording()){let r=function(e,t){if(!e)return;let n={};if(Array.isArray(e.generations)){let i=e.generations.flat().map(e=>e.generationInfo?.finish_reason?e.generationInfo.finish_reason:e.generation_info?.finish_reason?e.generation_info.finish_reason:null).filter(e=>"string"==typeof e);i.length>0&&oF(n,s5,oB(i));var r=e.generations;let s=[];for(let e of r.flat()){let t=e.message?.content;if(Array.isArray(t))for(let e of t)"tool_use"===e.type&&s.push(e)}if(s.length>0&&oF(n,oa,oB(s)),t){let t=e.generations.flat().map(e=>e.text??e.message?.content).filter(e=>"string"==typeof e);t.length>0&&oF(n,oi,oB(t))}}!function(e,t){if(!e)return;let n=e.tokenUsage,r=e.usage;if(n)oU(t,s8,n.promptTokens),oU(t,s7,n.completionTokens),oU(t,s9,n.totalTokens);else if(r){oU(t,s8,r.input_tokens),oU(t,s7,r.output_tokens);let e=Number(r.input_tokens),n=Number(r.output_tokens),i=(Number.isNaN(e)?0:e)+(Number.isNaN(n)?0:n);i>0&&oU(t,s9,i),void 0!==r.cache_creation_input_tokens&&oU(t,"gen_ai.usage.cache_creation_input_tokens",r.cache_creation_input_tokens),void 0!==r.cache_read_input_tokens&&oU(t,"gen_ai.usage.cache_read_input_tokens",r.cache_read_input_tokens)}}(e.llmOutput,n);let i=e.llmOutput,s=e.generations?.[0]?.[0],o=s?.message,a=i?.model_name??i?.model??o?.response_metadata?.model_name;a&&oF(n,s4,a);let l=i?.id??o?.id;l&&oF(n,s6,l);let u=i?.stop_reason??o?.response_metadata?.finish_reason;return u&&oF(n,"gen_ai.response.stop_reason",oB(u)),n}(e,n);r&&l.setAttributes(r),i(t)}},handleLLMError(e,t){let n=r.get(t);n?.isRecording()&&(n.setStatus({code:2,message:"internal_error"}),i(t)),ih(e,{mechanism:{handled:!1,type:`
            $ {
                o$
            }.llm_error_handler `}})},handleChainStart(e,n,i,s,o,a,l,u){let c=u||e.name||"unknown_chain",d={[rb]:"auto.ai.langchain","langchain.chain.name":c};t&&(d["langchain.chain.inputs"]=JSON.stringify(n)),sL({name:`
            chain $ {
                c
            }
            `,op:"gen_ai.invoke_agent",attributes:{...d,[rv]:"gen_ai.invoke_agent"}},e=>(r.set(i,e),e))},handleChainEnd(e,t){let s=r.get(t);s?.isRecording()&&(n&&s.setAttributes({"langchain.chain.outputs":JSON.stringify(e)}),i(t))},handleChainError(e,t){let n=r.get(t);n?.isRecording()&&(n.setStatus({code:2,message:"internal_error"}),i(t)),ih(e,{mechanism:{handled:!1,type:`
            $ {
                o$
            }.chain_error_handler `}})},handleToolStart(e,n,i,s){let o=e.name||"unknown_tool",a={[rb]:o$,"gen_ai.tool.name":o};t&&(a["gen_ai.tool.input"]=n),sL({name:`
            execute_tool $ {
                o
            }
            `,op:"gen_ai.execute_tool",attributes:{...a,[rv]:"gen_ai.execute_tool"}},e=>(r.set(i,e),e))},handleToolEnd(e,t){let s=r.get(t);s?.isRecording()&&(n&&s.setAttributes({"gen_ai.tool.output":JSON.stringify(e)}),i(t))},handleToolError(e,t){let n=r.get(t);n?.isRecording()&&(n.setStatus({code:2,message:"internal_error"}),i(t)),ih(e,{mechanism:{handled:!1,type:`
            $ {
                o$
            }.tool_error_handler `}})},copy:()=>s,toJSON:()=>({lc:1,type:"not_implemented",id:s.lc_id}),toJSONNotImplemented:()=>({lc:1,type:"not_implemented",id:s.lc_id})};return s}function oK(e){return"object"==typeof e&&"function"==typeof e.unref&&e.unref(),e}let oY=Symbol.for("SentryBufferFullError");function oX(e=100){let t=new Set;return{get $(){return Array.from(t)},add:function(n){if(!(t.size<e))return rp(oY);let r=n();return t.add(r),r.then(()=>{t.delete(r)},()=>{t.delete(r)}),r},drain:function(e){if(!t.size)return rd(!0);let n=Promise.allSettled(Array.from(t)).then(()=>!0);return e?Promise.race([n,new Promise(t=>oK(setTimeout(()=>t(!1),e)))]):n}}}function oZ(e,t=nT()){let n=parseInt(`
            $ {
                e
            }
            `,10);if(!isNaN(n))return 1e3*n;let r=Date.parse(`
            $ {
                e
            }
            `);return isNaN(r)?6e4:r-t}function oQ(e,t,n=nT()){return(e[t]||e.all||0)>n}function o0(e,{statusCode:t,headers:n},r=nT()){let i={...e},s=n?.["x-sentry-rate-limits"],o=n?.["retry-after"];if(s)for(let e of s.trim().split(",")){let[t,n,,,s]=e.split(":",5),o=parseInt(t,10),a=(isNaN(o)?60:o)*1e3;if(n)for(let e of n.split(";"))"metric_bucket"===e?(!s||s.split(";").includes("custom"))&&(i[e]=r+a):i[e]=r+a;else i.all=r+a}else o?i.all=r+oZ(o,r):429===t&&(i.all=r+6e4);return i}function o1(e,t,n=oX(e.bufferSize||64)){let r={};return{send:function(i){let s=[];if(iV(i,(t,n)=>{let i=iX(n);oQ(r,i)?e.recordDroppedEvent("ratelimit_backoff",i):s.push(t)}),0===s.length)return Promise.resolve({});let o=iz(i[0],s),a=t=>{iJ(o,["client_report"])||iV(o,(n,r)=>{e.recordDroppedEvent(t,iX(r))})};return n.add(()=>t({body:iK(o)}).then(e=>(413===e.statusCode?a("send_error"):r=o0(r,e),e),e=>{throw a("network_error"),e})).then(e=>e,e=>{if(e===oY)return a("queue_overflow"),Promise.resolve({});throw e})},flush:e=>n.drain(e)}}let o2=()=>{let e;return{name:"Dedupe",processEvent(t){if(t.type)return t;try{var n,r,i,s,o,a;let l,u,c,d;if(n=t,(r=e)&&(i=n,s=r,l=i.message,u=s.message,(l||u)&&(!l||u)&&(l||!u)&&l===u&&o5(i,s)&&o3(i,s)&&1||(o=n,a=r,c=o4(a),d=o4(o),c&&d&&c.type===d.type&&c.value===d.value&&o5(o,a)&&o3(o,a))))return null}catch{}return e=t}}};function o3(e,t){let n=nN(e),r=nN(t);if(!n&&!r)return!0;if(n&&!r||!n&&r||r.length!==n.length)return!1;for(let e=0;e<r.length;e++){let t=r[e],i=n[e];if(t.filename!==i.filename||t.lineno!==i.lineno||t.colno!==i.colno||t.function!==i.function)return!1}return!0}function o5(e,t){let n=e.fingerprint,r=t.fingerprint;if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;try{return n.join("")===r.join("")}catch{return!1}}function o4(e){return e.exception?.values?.[0]}let o6=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/,/^ResizeObserver loop completed with undelivered notifications.$/,/^Cannot redefine property: googletag$/,/^Can't find variable: gmo$/,/^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,/can't redefine non-configurable property "solana"/,/vv\(\)\.getRestrictions is not a function/,/Can't find variable: _AutofillCallbackHandler/,/Object Not Found Matching Id:\d+, MethodName:simulateEvent/,/^Java exception was raised during method invocation$/],o8=(e={})=>{let t;return{name:"EventFilters",setup(n){t=o9(e,n.getOptions())},processEvent:(n,r,i)=>(t||(t=o9(e,i.getOptions())),!function(e,t){if(e.type){if("transaction"===e.type&&function(e,t){if(!t?.length)return!1;let n=e.transaction;return!!n&&nB(n,t)}(e,t.ignoreTransactions))return!0}else{var n,r,i;if(n=e,r=t.ignoreErrors,r?.length&&(function(e){let t=[];e.message&&t.push(e.message);try{let n=e.exception.values[e.exception.values.length-1];n?.value&&(t.push(n.value),n.type&&t.push(`
            $ {
                n.type
            }: $ {
                n.value
            }
            `))}catch{}return t})(n).some(e=>nB(e,r)))return!0;if(i=e,i.exception?.values?.length&&!i.message&&!i.exception.values.some(e=>e.stacktrace||e.type&&"Error"!==e.type||e.value)||function(e,t){if(!t?.length)return!1;let n=ae(e);return!!n&&nB(n,t)}(e,t.denyUrls)||!function(e,t){if(!t?.length)return!0;let n=ae(e);return!n||nB(n,t)}(e,t.allowUrls))return!0}return!1}(n,t)?n:null)}},o7=(e={})=>({...o8(e),name:"InboundFilters"});function o9(e={},t={}){return{allowUrls:[...e.allowUrls||[],...t.allowUrls||[]],denyUrls:[...e.denyUrls||[],...t.denyUrls||[]],ignoreErrors:[...e.ignoreErrors||[],...t.ignoreErrors||[],...e.disableErrorDefaults?[]:o6],ignoreTransactions:[...e.ignoreTransactions||[],...t.ignoreTransactions||[]]}}function ae(e){try{let t=[...e.exception?.values??[]].reverse().find(e=>e.mechanism?.parent_id===void 0&&e.stacktrace?.frames?.length),n=t?.stacktrace?.frames;return n?function(e=[]){for(let t=e.length-1;t>=0;t--){let n=e[t];if(n&&"<anonymous>"!==n.filename&&"[native code]"!==n.filename)return n.filename||null}return null}(n):null}catch{return null}}let at=(e={})=>{let{depth:t=3,captureErrorCause:n=!0}=e;return{name:"ExtraErrorData",processEvent(e,r,i){let{maxValueLength:s}=i.getOptions();return function(e,t={},n,r,i){if(!t.originalException||!t7(t.originalException))return e;let s=t.originalException.name||t.originalException.constructor.name,o=function e(t,n,r){try{let i=["name","message","stack","line","column","fileName","lineNumber","columnNumber","toJSON"],s={};for(let e of Object.keys(t)){if(-1!==i.indexOf(e))continue;let n=t[e];s[e]=t7(n)||"string"==typeof n?r?n$(`
            $ {
                n
            }
            `,r):`
            $ {
                n
            }
            `:n}if(n&&void 0!==t.cause&&(t7(t.cause)?s.cause={[t.cause.name||t.cause.constructor.name]:e(t.cause,!1,r)}:s.cause=t.cause),"function"==typeof t.toJSON){let e=t.toJSON();for(let t of Object.keys(e)){let n=e[t];s[t]=t7(n)?n.toString():n}}return s}catch(e){}return null}(t.originalException,r,i);if(o){let t={...e.contexts},r=rm(o,n);return ns(r)&&(nb(r,"__sentry_skip_normalization__",!0),t[s]=r),{...e,contexts:t}}return e}(e,r,t,n,s)}}},an="flag.evaluation.";function ar(e){let t=rr().getScopeData().contexts.flags,n=t?t.values:[];return n.length&&(void 0===e.contexts&&(e.contexts={}),e.contexts.flags={values:[...n]}),e}function ai(e,t,n=100){let r=rr().getScopeData().contexts;r.flags||(r.flags={values:[]}),function(e,t,n,r){if("boolean"!=typeof n||e.length>r)return;let i=e.findIndex(e=>e.flag===t);-1!==i&&e.splice(i,1),e.length===r&&e.shift(),e.push({flag:t,result:n})}(r.flags.values,e,t,n)}function as(e,t,n=10){if("boolean"!=typeof t)return;let r=r9();if(!r)return;let i=r1(r).data;`
            $ {
                an
            }
            $ {
                e
            }
            `in i?r.setAttribute(`
            $ {
                an
            }
            $ {
                e
            }
            `,t):Object.keys(i).filter(e=>e.startsWith(an)).length<n&&r.setAttribute(`
            $ {
                an
            }
            $ {
                e
            }
            `,t)}let ao=()=>({name:"FeatureFlags",processEvent:(e,t,n)=>ar(e),addFeatureFlag(e,t){ai(e,t),as(e,t)}}),aa=new WeakMap,al=()=>({name:"FunctionToString",setupOnce(){m=Function.prototype.toString;try{Function.prototype.toString=function(...e){let t=nw(this),n=aa.has(rl())&&void 0!==t?t:this;return m.apply(n,e)}}catch{}},setup(e){aa.set(e,!0)}});function au(e={}){let t=e.client||rl();if(!iT()||!t)return{};let n=rn(t5());if(n.getTraceData)return n.getTraceData(e);let r=e.scope||rr(),i=e.span||r9();if(!i&&void 0!==u)return{};let s=i?rX(i):function(e){let{traceId:t,sampled:n,propagationSpanId:r}=e.getPropagationContext();return rJ(t,r,n)}(r),o=rM(i?io(i):is(t,r));if(!rz.test(s))return ny.warn("Invalid sentry-trace data. Cannot generate trace data"),{};let a={"sentry-trace":s,baggage:o};return e.propagateTraceparent&&(a.traceparent=i?function(e){let{traceId:t,spanId:n}=e.spanContext();return rG(t,n,r2(e))}(i):function(e){let{traceId:t,sampled:n,propagationSpanId:r}=e.getPropagationContext();return rG(t,r,n)}(r)),a}let ac={"messages.create":{operation:"chat"},"messages.stream":{operation:"chat",streaming:!0},"messages.countTokens":{operation:"chat"},"models.get":{operation:"models"},"completions.create":{operation:"chat"},"models.retrieve":{operation:"models"},"beta.messages.create":{operation:"chat"}},ad={invalid_request_error:"invalid_argument",authentication_error:"unauthenticated",permission_error:"permission_denied",not_found_error:"not_found",request_too_large:"failed_precondition",rate_limit_error:"resource_exhausted",api_error:"internal_error",overloaded_error:"unavailable"};function ap(e){return e&&ad[e]||"internal_error"}function ah(e,t,n,r){if(e&&"object"==typeof e&&(!("type"in e)||"string"!=typeof e.type||"error"!==e.type||(r.setStatus({code:2,message:ap(e.error?.type)}),ih(e.error,{mechanism:{handled:!1,type:"auto.ai.anthropic.anthropic_error"}}),0))){if("message_delta"===e.type&&e.usage&&"output_tokens"in e.usage&&"number"==typeof e.usage.output_tokens&&(t.completionTokens=e.usage.output_tokens),e.message){let n=e.message;n.id&&(t.responseId=n.id),n.model&&(t.responseModel=n.model),n.stop_reason&&t.finishReasons.push(n.stop_reason),n.usage&&("number"==typeof n.usage.input_tokens&&(t.promptTokens=n.usage.input_tokens),"number"==typeof n.usage.cache_creation_input_tokens&&(t.cacheCreationInputTokens=n.usage.cache_creation_input_tokens),"number"==typeof n.usage.cache_read_input_tokens&&(t.cacheReadInputTokens=n.usage.cache_read_input_tokens))}"content_block_start"===e.type&&"number"==typeof e.index&&e.content_block&&("tool_use"===e.content_block.type||"server_tool_use"===e.content_block.type)&&(t.activeToolBlocks[e.index]={id:e.content_block.id,name:e.content_block.name,inputJsonParts:[]});if("content_block_delta"===e.type&&e.delta){if("number"==typeof e.index&&"partial_json"in e.delta&&"string"==typeof e.delta.partial_json){let n=t.activeToolBlocks[e.index];n&&n.inputJsonParts.push(e.delta.partial_json)}n&&"string"==typeof e.delta.text&&t.responseTexts.push(e.delta.text)}!function(e,t){let n;if("content_block_stop"!==e.type||"number"!=typeof e.index)return;let r=t.activeToolBlocks[e.index];if(!r)return;let i=r.inputJsonParts.join("");try{n=i?JSON.parse(i):{}}catch{n={__unparsed:i}}t.toolCalls.push({type:"tool_use",id:r.id,name:r.name,input:n}),delete t.activeToolBlocks[e.index]}(e,t)}}async function*af(e,t,n){let r={responseTexts:[],finishReasons:[],responseId:"",responseModel:"",promptTokens:void 0,completionTokens:void 0,cacheCreationInputTokens:void 0,cacheReadInputTokens:void 0,toolCalls:[],activeToolBlocks:{}};try{for await(let i of e)ah(i,r,n,t),yield i}finally{r.responseId&&t.setAttributes({[s6]:r.responseId}),r.responseModel&&t.setAttributes({[s4]:r.responseModel}),oO(t,r.promptTokens,r.completionTokens,r.cacheCreationInputTokens,r.cacheReadInputTokens),t.setAttributes({[oo]:!0}),r.finishReasons.length>0&&t.setAttributes({[s5]:JSON.stringify(r.finishReasons)}),n&&r.responseTexts.length>0&&t.setAttributes({[oi]:r.responseTexts.join("")}),n&&r.toolCalls.length>0&&t.setAttributes({[oa]:JSON.stringify(r.toolCalls)}),t.end()}}function am(e,t){!function(e,t){if(Array.isArray(t)&&0===t.length)return;let{systemInstructions:n,filteredMessages:r}=oP(t);n&&e.setAttributes({[or]:n});let i=Array.isArray(r)?r.length:1;e.setAttributes({[on]:oL(r),[ot]:i})}(e,function(e){let{system:t,messages:n,input:r}=e,i="string"==typeof t?[{role:"system",content:e.system}]:[],s=Array.isArray(r)?r:null!=r?[r]:void 0,o=Array.isArray(n)?n:null!=n?[n]:[];return[...i,...s??o]}(t)),"prompt"in t&&e.setAttributes({"gen_ai.prompt":JSON.stringify(t.prompt)})}function ag(e,t,n){throw ih(e,{mechanism:{handled:!1,type:"auto.ai.anthropic",data:{function:n}}}),t.isRecording()&&(t.setStatus({code:2,message:"internal_error"}),t.end()),e}function a_(e,t){return function e(t,n="",r){return new Proxy(t,{get(t,i){let s=t[i],o=oR(n,String(i)),a=ac[o];if("function"==typeof s&&a)return new Proxy(s,{apply(e,n,i){let l,u=a.operation,c=function(e,t,n){let r={[sK]:"anthropic",[oe]:n,[rb]:"auto.ai.anthropic"};if(e.length>0&&"object"==typeof e[0]&&null!==e[0]){let t=e[0];t.tools&&Array.isArray(t.tools)&&(r[os]=JSON.stringify(t.tools)),r[sY]=t.model??"unknown","temperature"in t&&(r[sZ]=t.temperature),"top_p"in t&&(r[s2]=t.top_p),"stream"in t&&(r[sX]=t.stream),"top_k"in t&&(r[s3]=t.top_k),"frequency_penalty"in t&&(r[s0]=t.frequency_penalty),"max_tokens"in t&&(r[sQ]=t.max_tokens)}else"models.retrieve"===t||"models.get"===t?r[sY]=e[0]:r[sY]="unknown";return r}(i,o,u),d=c[sY]??"unknown",p="object"==typeof i[0]?i[0]:void 0,h=!!p?.stream,f=!0===a.streaming;if(h||f){let n=c[sY]??"unknown",a={name:`
            $ {
                u
            }
            $ {
                n
            }
            `,op:`
            gen_ai.$ {
                u
            }
            `,attributes:c};if(!h||f)return sL(a,n=>{try{var s,a;let o;return r.recordInputs&&p&&am(n,p),s=e.apply(t,i),a=r.recordOutputs??!1,o={responseTexts:[],finishReasons:[],responseId:"",responseModel:"",promptTokens:void 0,completionTokens:void 0,cacheCreationInputTokens:void 0,cacheReadInputTokens:void 0,toolCalls:[],activeToolBlocks:{}},s.on("streamEvent",e=>{ah(e,o,a,n)}),s.on("message",()=>{n.isRecording()&&(o.responseId&&n.setAttributes({[s6]:o.responseId}),o.responseModel&&n.setAttributes({[s4]:o.responseModel}),oO(n,o.promptTokens,o.completionTokens,o.cacheCreationInputTokens,o.cacheReadInputTokens),n.setAttributes({[oo]:!0}),o.finishReasons.length>0&&n.setAttributes({[s5]:JSON.stringify(o.finishReasons)}),a&&o.responseTexts.length>0&&n.setAttributes({[oi]:o.responseTexts.join("")}),a&&o.toolCalls.length>0&&n.setAttributes({[oa]:JSON.stringify(o.toolCalls)}),n.end())}),s.on("error",e=>{ih(e,{mechanism:{handled:!1,type:"auto.ai.anthropic.stream_error"}}),n.isRecording()&&(n.setStatus({code:2,message:"internal_error"}),n.end())}),s}catch(e){return ag(e,n,o)}});{let e,n=sL(a,n=>(e=s.apply(t,i),r.recordInputs&&p&&am(n,p),(async()=>{try{let t=await e;return af(t,n,r.recordOutputs??!1)}catch(e){return ag(e,n,o)}})()));return oD(e,n,"auto.ai.anthropic")}}let m=sO({name:`
            $ {
                u
            }
            $ {
                d
            }
            `,op:`
            gen_ai.$ {
                u
            }
            `,attributes:c},n=>(l=e.apply(t,i),r.recordInputs&&p&&am(n,p),l.then(e=>(!function(e,t,n){if(t&&"object"==typeof t){if("type"in t&&"error"===t.type)return t.error&&(e.setStatus({code:2,message:ap(t.error.type)}),ih(t.error,{mechanism:{handled:!1,type:"auto.ai.anthropic.anthropic_error"}}));n&&function(e,t){if("content"in t&&Array.isArray(t.content)){e.setAttributes({[oi]:t.content.map(e=>e.text).filter(e=>!!e).join("")});let n=[];for(let e of t.content)("tool_use"===e.type||"server_tool_use"===e.type)&&n.push(e);n.length>0&&e.setAttributes({[oa]:JSON.stringify(n)})}"completion"in t&&e.setAttributes({[oi]:t.completion}),"input_tokens"in t&&e.setAttributes({[oi]:JSON.stringify(t.input_tokens)})}(e,t),"id"in t&&"model"in t&&(e.setAttributes({[s6]:t.id,[s4]:t.model}),"created"in t&&"number"==typeof t.created&&e.setAttributes({[of]:new Date(1e3*t.created).toISOString()}),"created_at"in t&&"number"==typeof t.created_at&&e.setAttributes({[of]:new Date(1e3*t.created_at).toISOString()}),"usage"in t&&t.usage&&oO(e,t.usage.input_tokens,t.usage.output_tokens,t.usage.cache_creation_input_tokens,t.usage.cache_read_input_tokens))}}(n,e,r.recordOutputs),e),e=>{throw ih(e,{mechanism:{handled:!1,type:"auto.ai.anthropic",data:{function:o}}}),e})));return oD(l,m,"auto.ai.anthropic")}});return"function"==typeof s?s.bind(t):s&&"object"==typeof s?e(s,o,r):s}})}(e,"",oA(t))}let ay={"models.generateContent":{operation:"generate_content"},"models.generateContentStream":{operation:"generate_content",streaming:!0},"models.embedContent":{operation:"embeddings"},"chats.create":{operation:"chat"},"chat.sendMessage":{operation:"chat"},"chat.sendMessageStream":{operation:"chat",streaming:!0}},av="chats.create";async function*ab(e,t,n){let r={responseTexts:[],finishReasons:[],toolCalls:[]};try{for await(let i of e)!function(e,t,n,r){if(!(!e||function(e,t){let n=e?.promptFeedback;if(n?.blockReason){let e=n.blockReasonMessage??n.blockReason;return t.setStatus({code:2,message:"internal_error"}),ih(`
            Content blocked: $ {
                e
            }
            `,{mechanism:{handled:!1,type:"auto.ai.google_genai"}}),!0}return!1}(e,r))){let r;for(let i of("string"==typeof e.responseId&&(t.responseId=e.responseId),"string"==typeof e.modelVersion&&(t.responseModel=e.modelVersion),(r=e.usageMetadata)&&("number"==typeof r.promptTokenCount&&(t.promptTokens=r.promptTokenCount),"number"==typeof r.candidatesTokenCount&&(t.completionTokens=r.candidatesTokenCount),"number"==typeof r.totalTokenCount&&(t.totalTokens=r.totalTokenCount)),Array.isArray(e.functionCalls)&&t.toolCalls.push(...e.functionCalls),e.candidates??[]))for(let e of(i?.finishReason&&!t.finishReasons.includes(i.finishReason)&&t.finishReasons.push(i.finishReason),i?.content?.parts??[]))n&&e.text&&t.responseTexts.push(e.text),e.functionCall&&t.toolCalls.push({type:"function",id:e.functionCall.id,name:e.functionCall.name,arguments:e.functionCall.args})}}(i,r,n,t),yield i}finally{let e={[oo]:!0};r.responseId&&(e[s6]=r.responseId),r.responseModel&&(e[s4]=r.responseModel),void 0!==r.promptTokens&&(e[s8]=r.promptTokens),void 0!==r.completionTokens&&(e[s7]=r.completionTokens),void 0!==r.totalTokens&&(e[s9]=r.totalTokens),r.finishReasons.length&&(e[s5]=JSON.stringify(r.finishReasons)),n&&r.responseTexts.length&&(e[oi]=r.responseTexts.join("")),n&&r.toolCalls.length&&(e[oa]=JSON.stringify(r.toolCalls)),t.setAttributes(e),t.end()}}function aS(e,t="user"){return"string"==typeof e?[{role:t,content:e}]:Array.isArray(e)?e.flatMap(e=>aS(e,t)):"object"==typeof e&&e?"role"in e&&"string"==typeof e.role?[e]:"parts"in e?[{...e,role:t}]:[{role:t,content:e}]:[]}function aw(e,t){if("model"in e&&"string"==typeof e.model)return e.model;if(t&&"object"==typeof t){if("model"in t&&"string"==typeof t.model)return t.model;if("modelVersion"in t&&"string"==typeof t.modelVersion)return t.modelVersion}return"unknown"}function ak(e,t,n){if(n){let n=t.contents;null!=n&&e.setAttribute(oc,"string"==typeof n?n:JSON.stringify(n));return}let r=[];if("config"in t&&t.config&&"object"==typeof t.config&&"systemInstruction"in t.config&&t.config.systemInstruction&&r.push(...aS(t.config.systemInstruction,"system")),"history"in t&&r.push(...aS(t.history,"user")),"contents"in t&&r.push(...aS(t.contents,"user")),"message"in t&&r.push(...aS(t.message,"user")),Array.isArray(r)&&r.length){let{systemInstructions:t,filteredMessages:n}=oP(r);t&&e.setAttribute(or,t);let i=Array.isArray(n)?n.length:0;e.setAttributes({[ot]:i,[on]:JSON.stringify(oM(n))})}}function aE(e,t,n,r,i){let s=t===av,o="embeddings"===n.operation;return new Proxy(e,{apply(e,a,l){let u=n.operation,c=l[0],d=function(e,t,n){let r={[sK]:"google_genai",[oe]:e,[rb]:"auto.ai.google_genai"};if(t){if(r[sY]=aw(t,n),"config"in t&&"object"==typeof t.config&&t.config){let e,n=t.config;if(Object.assign(r,(e={},"temperature"in n&&"number"==typeof n.temperature&&(e[sZ]=n.temperature),"topP"in n&&"number"==typeof n.topP&&(e[s2]=n.topP),"topK"in n&&"number"==typeof n.topK&&(e[s3]=n.topK),"maxOutputTokens"in n&&"number"==typeof n.maxOutputTokens&&(e[sQ]=n.maxOutputTokens),"frequencyPenalty"in n&&"number"==typeof n.frequencyPenalty&&(e[s0]=n.frequencyPenalty),"presencePenalty"in n&&"number"==typeof n.presencePenalty&&(e[s1]=n.presencePenalty),e)),"tools"in n&&Array.isArray(n.tools)){let e=n.tools.flatMap(e=>e.functionDeclarations);r[os]=JSON.stringify(e)}}}else r[sY]=aw({},n);return r}(u,c,r),p=d[sY]??"unknown";return n.streaming?sL({name:`
            $ {
                u
            }
            $ {
                p
            }
            `,op:`
            gen_ai.$ {
                u
            }
            `,attributes:d},async n=>{try{i.recordInputs&&c&&ak(n,c,o);let t=await e.apply(r,l);return ab(t,n,!!i.recordOutputs)}catch(e){throw n.setStatus({code:2,message:"internal_error"}),ih(e,{mechanism:{handled:!1,type:"auto.ai.google_genai",data:{function:t}}}),n.end(),e}}):sO({name:s?`
            $ {
                u
            }
            $ {
                p
            }
            create `:`
            $ {
                u
            }
            $ {
                p
            }
            `,op:`
            gen_ai.$ {
                u
            }
            `,attributes:d},n=>(i.recordInputs&&c&&ak(n,c,o),sk(()=>e.apply(r,l),e=>{ih(e,{mechanism:{handled:!1,type:"auto.ai.google_genai",data:{function:t}}})},()=>{},e=>{s||o||function(e,t,n){if(t&&"object"==typeof t){if(t.modelVersion&&e.setAttribute(s4,t.modelVersion),t.usageMetadata&&"object"==typeof t.usageMetadata){let n=t.usageMetadata;"number"==typeof n.promptTokenCount&&e.setAttributes({[s8]:n.promptTokenCount}),"number"==typeof n.candidatesTokenCount&&e.setAttributes({[s7]:n.candidatesTokenCount}),"number"==typeof n.totalTokenCount&&e.setAttributes({[s9]:n.totalTokenCount})}if(n&&Array.isArray(t.candidates)&&t.candidates.length>0){let n=t.candidates.map(e=>e.content?.parts&&Array.isArray(e.content.parts)?e.content.parts.map(e=>"string"==typeof e.text?e.text:"").filter(e=>e.length>0).join(""):"").filter(e=>e.length>0);n.length>0&&e.setAttributes({[oi]:n.join("")})}if(n&&t.functionCalls){let n=t.functionCalls;Array.isArray(n)&&n.length>0&&e.setAttributes({[oa]:JSON.stringify(n)})}}}(n,e,i.recordOutputs)})))}})}function ax(e,t){return function e(t,n="",r){return new Proxy(t,{get:(t,i,s)=>{let o=Reflect.get(t,i,s),a=oR(n,String(i)),l=ay[a];if("function"==typeof o&&l){if(a===av){let n=aE(o,a,l,t,r);return function(...t){let i=n(...t);return i&&"object"==typeof i?e(i,"chat",r):i}}return aE(o,a,l,t,r)}return"function"==typeof o?o.bind(t):o&&"object"==typeof o?e(o,a,r):o}})}(e,"",oA(t))}let aC="auto.ai.langgraph";function aI(e,t){var n,r;return n=e.compile,r=oA(t),e.compile=new Proxy(n,{apply:(e,t,n)=>sO({op:"gen_ai.create_agent",name:"create_agent",attributes:{[rb]:aC,[rv]:"gen_ai.create_agent",[oe]:"create_agent"}},i=>{try{var s,o,a,l;let u=Reflect.apply(e,t,n),c=n.length>0?n[0]:{};c?.name&&"string"==typeof c.name&&(i.setAttribute(ol,c.name),i.updateName(`
            create_agent $ {
                c.name
            }
            `));let d=u.invoke;return d&&"function"==typeof d&&(s=d.bind(u),o=u,a=c,l=r,u.invoke=new Proxy(s,{apply:(e,t,n)=>sO({op:"gen_ai.invoke_agent",name:"invoke_agent",attributes:{[rb]:aC,[rv]:"gen_ai.invoke_agent",[oe]:"invoke_agent"}},async r=>{try{let i=a?.name;i&&"string"==typeof i&&(r.setAttribute("gen_ai.pipeline.name",i),r.setAttribute(ol,i),r.updateName(`
            invoke_agent $ {
                i
            }
            `));let s=n.length>1?n[1]:void 0,u=s?.configurable,c=u?.thread_id;c&&"string"==typeof c&&r.setAttribute(ou,c);let d=function(e){if(!e.builder?.nodes?.tools?.runnable?.tools)return null;let t=e.builder?.nodes?.tools?.runnable?.tools;return t&&Array.isArray(t)&&0!==t.length?t.map(e=>({name:e.lc_kwargs?.name,description:e.lc_kwargs?.description,schema:e.lc_kwargs?.schema})):null}(o);d&&r.setAttribute(os,JSON.stringify(d));let p=l.recordInputs,h=l.recordOutputs,f=n.length>0?n[0]?.messages??[]:[];if(f&&p){let e=oV(f),{systemInstructions:t,filteredMessages:n}=oP(e);t&&r.setAttribute(or,t);let i=oM(n),s=Array.isArray(n)?n.length:0;r.setAttributes({[on]:JSON.stringify(i),[ot]:s})}let m=await Reflect.apply(e,t,n);return h&&function(e,t,n){let r=n?.messages;if(!r||!Array.isArray(r))return;let i=t?.length??0,s=r.length>i?r.slice(i):[];if(0===s.length)return;let o=function(e){if(!e||0===e.length)return null;let t=[];for(let n of e)if(n&&"object"==typeof n){let e=n.tool_calls;e&&Array.isArray(e)&&t.push(...e)}return t.length>0?t:null}(s);o&&e.setAttribute(oa,JSON.stringify(o));let a=oV(s);e.setAttribute(oi,JSON.stringify(a));let l=0,u=0,c=0;for(let t of s){let n=function(e){let t=0,n=0,r=0;if(e.usage_metadata&&"object"==typeof e.usage_metadata){let i=e.usage_metadata;return"number"==typeof i.input_tokens&&(t=i.input_tokens),"number"==typeof i.output_tokens&&(n=i.output_tokens),"number"==typeof i.total_tokens&&(r=i.total_tokens),{inputTokens:t,outputTokens:n,totalTokens:r}}if(e.response_metadata&&"object"==typeof e.response_metadata){let i=e.response_metadata;if(i.tokenUsage&&"object"==typeof i.tokenUsage){let e=i.tokenUsage;"number"==typeof e.promptTokens&&(t=e.promptTokens),"number"==typeof e.completionTokens&&(n=e.completionTokens),"number"==typeof e.totalTokens&&(r=e.totalTokens)}}return{inputTokens:t,outputTokens:n,totalTokens:r}}(t);l+=n.inputTokens,u+=n.outputTokens,c+=n.totalTokens,function(e,t){if(t.response_metadata&&"object"==typeof t.response_metadata){let n=t.response_metadata;n.model_name&&"string"==typeof n.model_name&&e.setAttribute(s4,n.model_name),n.finish_reason&&"string"==typeof n.finish_reason&&e.setAttribute(s5,[n.finish_reason])}}(e,t)}l>0&&e.setAttribute(s8,l),u>0&&e.setAttribute(s7,u),c>0&&e.setAttribute(s9,c)}(r,f??null,m),m}catch(e){throw r.setStatus({code:2,message:"internal_error"}),ih(e,{mechanism:{handled:!1,type:"auto.ai.langgraph.error"}}),e}})})),u}catch(e){throw i.setStatus({code:2,message:"internal_error"}),ih(e,{mechanism:{handled:!1,type:"auto.ai.langgraph.error"}}),e}})}),e}let aT={"responses.create":{operation:"chat"},"chat.completions.create":{operation:"chat"},"embeddings.create":{operation:"embeddings"},"conversations.create":{operation:"chat"}},aM=["response.created","response.in_progress","response.failed","response.completed","response.incomplete","response.queued","response.output_text.delta","response.output_item.added","response.function_call_arguments.delta","response.function_call_arguments.done","response.output_item.done"];function aA(e,t,n,r){void 0!==t&&e.setAttributes({"openai.usage.prompt_tokens":t,[s8]:t}),void 0!==n&&e.setAttributes({"openai.usage.completion_tokens":n,[s7]:n}),void 0!==r&&e.setAttributes({[s9]:r})}function aR(e,t,n,r){e.setAttributes({[od]:t,[s6]:t}),e.setAttributes({[op]:n,[s4]:n}),e.setAttributes({[oh]:new Date(1e3*r).toISOString()})}async function*aO(e,t,n){let r={eventTypes:[],responseTexts:[],finishReasons:[],responseId:"",responseModel:"",responseTimestamp:0,promptTokens:void 0,completionTokens:void 0,totalTokens:void 0,chatCompletionToolCalls:{},responsesApiToolCalls:[]};try{for await(let i of e){if(null!==i&&"object"==typeof i&&"object"in i&&"chat.completion.chunk"===i.object){for(let e of(r.responseId=i.id??r.responseId,r.responseModel=i.model??r.responseModel,r.responseTimestamp=i.created??r.responseTimestamp,i.usage&&(r.promptTokens=i.usage.prompt_tokens,r.completionTokens=i.usage.completion_tokens,r.totalTokens=i.usage.total_tokens),i.choices??[]))n&&(e.delta?.content&&r.responseTexts.push(e.delta.content),e.delta?.tool_calls&&function(e,t){for(let n of e){let e=n.index;if(void 0!==e&&n.function)if(e in t.chatCompletionToolCalls){let r=t.chatCompletionToolCalls[e];n.function.arguments&&r?.function&&(r.function.arguments+=n.function.arguments)}else t.chatCompletionToolCalls[e]={...n,function:{name:n.function.name,arguments:n.function.arguments||""}}}}(e.delta.tool_calls,r)),e.finish_reason&&r.finishReasons.push(e.finish_reason)}else null!==i&&"object"==typeof i&&"type"in i&&"string"==typeof i.type&&i.type.startsWith("response.")&&function(e,t,n,r){if(!(e&&"object"==typeof e))return t.eventTypes.push("unknown:non-object");if(e instanceof Error){r.setStatus({code:2,message:"internal_error"}),ih(e,{mechanism:{handled:!1,type:"auto.ai.openai.stream-response"}});return}if("type"in e){if(!aM.includes(e.type))return t.eventTypes.push(e.type);if(n&&("response.output_item.done"===e.type&&"item"in e&&t.responsesApiToolCalls.push(e.item),"response.output_text.delta"===e.type&&"delta"in e&&e.delta))return t.responseTexts.push(e.delta);if("response"in e){let{response:r}=e;t.responseId=r.id??t.responseId,t.responseModel=r.model??t.responseModel,t.responseTimestamp=r.created_at??t.responseTimestamp,r.usage&&(t.promptTokens=r.usage.input_tokens,t.completionTokens=r.usage.output_tokens,t.totalTokens=r.usage.total_tokens),r.status&&t.finishReasons.push(r.status),n&&r.output_text&&t.responseTexts.push(r.output_text)}}}(i,r,n,t);yield i}}finally{aR(t,r.responseId,r.responseModel,r.responseTimestamp),aA(t,r.promptTokens,r.completionTokens,r.totalTokens),t.setAttributes({[oo]:!0}),r.finishReasons.length&&t.setAttributes({[s5]:JSON.stringify(r.finishReasons)}),n&&r.responseTexts.length&&t.setAttributes({[oi]:r.responseTexts.join("")});let e=[...Object.values(r.chatCompletionToolCalls),...r.responsesApiToolCalls];e.length>0&&t.setAttributes({[oa]:JSON.stringify(e)}),t.end()}}function aL(e,t,n){if("embeddings"===n&&"input"in t){let n=t.input;if(null==n||"string"==typeof n&&0===n.length||Array.isArray(n)&&0===n.length)return;e.setAttribute(oc,"string"==typeof n?n:JSON.stringify(n));return}let r="input"in t?t.input:"messages"in t?t.messages:void 0;if(!r||Array.isArray(r)&&0===r.length)return;let{systemInstructions:i,filteredMessages:s}=oP(r);i&&e.setAttribute(or,i);let o=oL(s);e.setAttribute(on,o),Array.isArray(s)?e.setAttribute(ot,s.length):e.setAttribute(ot,1)}function aP(e,t){return function e(t,n="",r){return new Proxy(t,{get(t,i){let s=t[i],o=oR(n,String(i)),a=aT[o];if("function"==typeof s&&a)return function(...e){let n,i=a.operation,l=function(e,t){let n={[sK]:"openai",[oe]:t,[rb]:"auto.ai.openai"};if(e.length>0&&"object"==typeof e[0]&&null!==e[0]){let t,r,i=e[0],s=function(e){let t=[...Array.isArray(e.tools)?e.tools:[],...e.web_search_options&&"object"==typeof e.web_search_options?[{type:"web_search_options",...e.web_search_options}]:[]];if(0!==t.length)try{return JSON.stringify(t)}catch(e){return}}(i);s&&(n[os]=s),Object.assign(n,(t={[sY]:i.model??"unknown"},"temperature"in i&&(t[sZ]=i.temperature),"top_p"in i&&(t[s2]=i.top_p),"frequency_penalty"in i&&(t[s0]=i.frequency_penalty),"presence_penalty"in i&&(t[s1]=i.presence_penalty),"stream"in i&&(t[sX]=i.stream),"encoding_format"in i&&(t["gen_ai.request.encoding_format"]=i.encoding_format),"dimensions"in i&&(t["gen_ai.request.dimensions"]=i.dimensions),(r="conversation"in i&&"string"==typeof i.conversation?i.conversation:"previous_response_id"in i&&"string"==typeof i.previous_response_id?i.previous_response_id:void 0)&&(t[ou]=r),t))}else n[sY]="unknown";return n}(e,i),u=l[sY]||"unknown",c=e[0],d=c&&"object"==typeof c&&!0===c.stream,p={name:`
            $ {
                i
            }
            $ {
                u
            }
            `,op:`
            gen_ai.$ {
                i
            }
            `,attributes:l};if(d){let n,a=sL(p,a=>(n=s.apply(t,e),r.recordInputs&&c&&aL(a,c,i),(async()=>{try{let e=await n;return aO(e,a,r.recordOutputs??!1)}catch(e){throw a.setStatus({code:2,message:"internal_error"}),ih(e,{mechanism:{handled:!1,type:"auto.ai.openai.stream",data:{function:o}}}),a.end(),e}})()));return oD(n,a,"auto.ai.openai")}let h=sO(p,a=>(n=s.apply(t,e),r.recordInputs&&c&&aL(a,c,i),n.then(e=>(!function(e,t,n){if(t&&"object"==typeof t)if(null!==t&&"object"==typeof t&&"object"in t&&"chat.completion"===t.object){if(aR(e,t.id,t.model,t.created),t.usage&&aA(e,t.usage.prompt_tokens,t.usage.completion_tokens,t.usage.total_tokens),Array.isArray(t.choices)){let r=t.choices.map(e=>e.finish_reason).filter(e=>null!==e);if(r.length>0&&e.setAttributes({[s5]:JSON.stringify(r)}),n){let n=t.choices.map(e=>e.message?.tool_calls).filter(e=>Array.isArray(e)&&e.length>0).flat();n.length>0&&e.setAttributes({[oa]:JSON.stringify(n)})}}if(n&&t.choices?.length){let n=t.choices.map(e=>e.message?.content||"");e.setAttributes({[oi]:JSON.stringify(n)})}}else if(null!==t&&"object"==typeof t&&"object"in t&&"response"===t.object){if(aR(e,t.id,t.model,t.created_at),t.status&&e.setAttributes({[s5]:JSON.stringify([t.status])}),t.usage&&aA(e,t.usage.input_tokens,t.usage.output_tokens,t.usage.total_tokens),n&&Array.isArray(t.output)&&t.output.length>0){let n=t.output.filter(e=>"object"==typeof e&&null!==e&&"function_call"===e.type);n.length>0&&e.setAttributes({[oa]:JSON.stringify(n)})}n&&t.output_text&&e.setAttributes({[oi]:t.output_text})}else null!==t&&"object"==typeof t&&"object"in t&&"list"===t.object&&"string"==typeof t.model&&t.model.toLowerCase().includes("embedding")?(e.setAttributes({[op]:t.model,[s4]:t.model}),t.usage&&aA(e,t.usage.prompt_tokens,void 0,t.usage.total_tokens)):null!==t&&"object"==typeof t&&"object"in t&&"conversation"===t.object&&function(e,t){let{id:n,created_at:r}=t;e.setAttributes({[od]:n,[s6]:n,[ou]:n}),r&&e.setAttributes({[oh]:new Date(1e3*r).toISOString()})}(e,t)}(a,e,r.recordOutputs),e),e=>{throw ih(e,{mechanism:{handled:!1,type:"auto.ai.openai",data:{function:o}}}),e})));return oD(n,h,"auto.ai.openai")};return"function"==typeof s?s.bind(t):s&&"object"==typeof s?e(s,o,r):s}})}(e,"",oA(t))}let aN=["reauthenticate","signInAnonymously","signInWithOAuth","signInWithIdToken","signInWithOtp","signInWithPassword","signInWithSSO","signOut","signUp","verifyOtp"],aD=["createUser","deleteUser","listUsers","getUserById","updateUserById","inviteUserByEmail"],a$={eq:"eq",neq:"neq",gt:"gt",gte:"gte",lt:"lt",lte:"lte",like:"like","like(all)":"likeAllOf","like(any)":"likeAnyOf",ilike:"ilike","ilike(all)":"ilikeAllOf","ilike(any)":"ilikeAnyOf",is:"is",in:"in",cs:"contains",cd:"containedBy",sr:"rangeGt",nxl:"rangeGte",sl:"rangeLt",nxr:"rangeLte",adj:"rangeAdjacent",ov:"overlaps",fts:"",plfts:"plain",phfts:"phrase",wfts:"websearch",not:"not"},aj=["select","insert","upsert","update","delete"];function aF(e){try{e.__SENTRY_INSTRUMENTED__=!0}catch{}}function aU(e){try{return e.__SENTRY_INSTRUMENTED__}catch{return!1}}function aB(e,t=!1){return new Proxy(e,{apply:(n,r,i)=>sO({name:`
            auth $ {
                t ? "(admin) " : ""
            }
            $ {
                e.name
            }
            `,attributes:{[rb]:"auto.db.supabase",[rv]:"db","db.system":"postgresql","db.operation":`
            auth.$ {
                t ? "admin." : ""
            }
            $ {
                e.name
            }
            `}},e=>Reflect.apply(n,r,i).then(t=>(t&&"object"==typeof t&&"error"in t&&t.error?(e.setStatus({code:2}),ih(t.error,{mechanism:{handled:!1,type:"auto.db.supabase.auth"}})):e.setStatus({code:1}),e.end(),t)).catch(t=>{throw e.setStatus({code:2}),e.end(),ih(t,{mechanism:{handled:!1,type:"auto.db.supabase.auth"}}),t}).then(...i))})}let aW=e=>{var t;if(!e)return;aU((t=e.constructor===Function?e:e.constructor).prototype.from)||(t.prototype.from=new Proxy(t.prototype.from,{apply(e,t,n){let r=Reflect.apply(e,t,n);return function(e){for(let t of aj)aU(e.prototype[t])||(e.prototype[t]=new Proxy(e.prototype[t],{apply(e,t,n){let r=Reflect.apply(e,t,n),i=r.constructor;return aU(i.prototype.then)||(i.prototype.then=new Proxy(i.prototype.then,{apply(e,t,n){let r=function(e,t={}){switch(e){case"GET":return"select";case"POST":if(t.Prefer?.includes("resolution="))return"upsert";return"insert";case"PATCH":return"update";case"DELETE":return"delete";default:return"<unknown-op>"}}(t.method,t.headers);if(!aj.includes(r)||!t?.url?.pathname||"string"!=typeof t.url.pathname)return Reflect.apply(e,t,n);let i=t.url.pathname.split("/"),s=i.length>0?i[i.length-1]:"",o=[];for(let[e,n]of t.url.searchParams.entries())o.push(function(e,t){let n;if(""===t||"*"===t)return"select(*)";if("select"===e)return`
            select($ {
                t
            })
            `;if("or"===e||e.endsWith(".or"))return`
            $ {
                e
            }
            $ {
                t
            }
            `;let[r,...i]=t.split(".");return n=r?.startsWith("fts")?"textSearch":r?.startsWith("plfts")?"textSearch[plain]":r?.startsWith("phfts")?"textSearch[phrase]":r?.startsWith("wfts")?"textSearch[websearch]":r&&a$[r]||"filter",`
            $ {
                n
            }($ {
                e
            }, $ {
                i.join(".")
            })
            `}(e,n));let a=Object.create(null);if(ns(t.body))for(let[e,n]of Object.entries(t.body))a[e]=n;let l=`
            $ {
                "select" === r ? "" : `${r}${a?"(...) ":""}`
            }
            $ {
                o.join(" ")
            }
            from($ {
                s
            })
            `,u={"db.table":s,"db.schema":t.schema,"db.url":t.url.origin,"db.sdk":t.headers["X-Client-Info"],"db.system":"postgresql","db.operation":r,[rb]:"auto.db.supabase",[rv]:"db"};return o.length&&(u["db.query"]=o),Object.keys(a).length&&(u["db.body"]=a),sO({name:l,attributes:u},i=>Reflect.apply(e,t,[]).then(e=>{if(i&&(e&&"object"==typeof e&&"status"in e&&rU(i,e.status||500),i.end()),e?.error){let t=Error(e.error.message);e.error.code&&(t.code=e.error.code),e.error.details&&(t.details=e.error.details);let n={};o.length&&(n.query=o),Object.keys(a).length&&(n.body=a),ih(t,e=>(e.addEventProcessor(e=>(nz(e,{handled:!1,type:"auto.db.supabase.postgres"}),e)),e.setContext("supabase",n),e))}let t={type:"supabase",category:`
            db.$ {
                r
            }
            `,message:l},n={};return o.length&&(n.query=o),Object.keys(a).length&&(n.body=a),Object.keys(n).length&&(t.data=n),i3(t),e},e=>{throw i&&(rU(i,500),i.end()),e}).then(...n))}}),aF(i.prototype.then)),r}}),aF(e.prototype[t]))}(r.constructor),r}}),aF(t.prototype.from));let n=e.auth;if(!(!n||aU(e.auth))){for(let t of aN){let r=n[t];r&&"function"==typeof e.auth[t]&&(e.auth[t]=aB(r))}for(let t of aD){let r=n.admin[t];r&&"function"==typeof e.auth.admin[t]&&(e.auth.admin[t]=aB(r,!0))}aF(e.auth)}},aq=e=>{let t;return t=e.supabaseClient,{setupOnce(){aW(t)},name:"Supabase"}};function aH(e,...t){let n=new String(String.raw(e,...t));return n.__sentry_template_string__=e.join("\0").replace(/%/g,"%%").replace(/\0/g,"%s"),n.__sentry_template_values__=t,n}let az=aH;function aV(e,t,n,r,i){sm({level:e,message:t,attributes:n,severityNumber:i},r)}function aJ(e,t,{scope:n}={}){aV("trace",e,t,n)}function aG(e,t,{scope:n}={}){aV("debug",e,t,n)}function aK(e,t,{scope:n}={}){aV("info",e,t,n)}function aY(e,t,{scope:n}={}){aV("warn",e,t,n)}function aX(e,t,{scope:n}={}){aV("error",e,t,n)}function aZ(e,t,{scope:n}={}){aV("fatal",e,t,n)}function aQ(e,t,n,r=!0){!n||!r&&t in e||(e[t]=n)}function a0(e,t){var n;let r=a2(),i=(n=e,a2().get(n));void 0===i?r.set(e,[t]):i.length>=1e3?(a1(e,i),r.set(e,[t])):r.set(e,[...i,t])}function a1(e,t){var n,r,i,s;let o,a=t??(s=e,a2().get(s))??[];if(0===a.length)return;let l=e.getOptions(),u=(n=l._metadata,r=l.tunnel,i=e.getDsn(),o={},n?.sdk&&(o.sdk={name:n.sdk.name,version:n.sdk.version}),r&&i&&(o.dsn=rL(i)),iz(o,[[{type:"trace_metric",item_count:a.length,content_type:"application/vnd.sentry.items.trace-metric+json"},{items:a}]]));a2().set(e,[]),e.emit("flushMetrics"),e.sendEnvelope(u)}function a2(){return t6("clientToMetricBufferMap",()=>new WeakMap)}function a3(e,t,n,r){!function(e,t){let n=t?.scope??rr(),r=t?.captureSerializedMetric??a0,i=n?.getClient()??rl();if(!i)return;let{_experiments:s,enableMetrics:o,beforeSendMetric:a}=i.getOptions();if(!(o??s?.enableMetrics??!0))return;let{user:l,attributes:u}=ic(ri(),n),c=function(e,t,n){let{release:r,environment:i}=t.getOptions(),s={...e.attributes};aQ(s,"user.id",n.id,!1),aQ(s,"user.email",n.email,!1),aQ(s,"user.name",n.username,!1),aQ(s,"sentry.release",r),aQ(s,"sentry.environment",i);let{name:o,version:a}=t.getSdkMetadata()?.sdk??{};aQ(s,"sentry.sdk.name",o),aQ(s,"sentry.sdk.version",a);let l=t.getIntegrationByName("Replay"),u=l?.getReplayId(!0);return aQ(s,"sentry.replay_id",u),u&&l?.getRecordingMode()==="buffer"&&aQ(s,"sentry._internal.replay_is_buffering",!0),{...e,attributes:s}}(e,i,l);i.emit("processMetric",c);let d=a||s?.beforeSendMetric,p=d?d(c):c;if(!p)return;let h=function(e,t,n,r){let[,i]=sd(t,n),s=n[n0],o=s?s.spanContext().traceId:i?.trace_id,a=s?s.spanContext().spanId:void 0,l=nG(),u=sc(l);return{timestamp:l,trace_id:o??"",span_id:a,name:e.name,type:e.type,unit:e.unit,value:e.value,attributes:{...sl(r),...sl(e.attributes,"skip-undefined"),[u.key]:u.value}}}(p,i,n,u);r(i,h),i.emit("afterCaptureMetric",p)}({type:e,name:t,value:n,unit:r?.unit,attributes:r?.attributes},{scope:r?.scope})}function a5(e,t=1,n){a3("counter",e,t,n)}function a4(e,t,n){a3("gauge",e,t,n)}function a6(e,t,n){a3("distribution",e,t,n)}let a8=new Map,a7=new Set;function a9(e,t){t.exception?.values?.forEach(t=>{t.stacktrace?.frames?.forEach(t=>{if(!t.filename||t.module_metadata)return;let n=function(e,t){if(t3._sentryModuleMetadata)for(let t of Object.keys(t3._sentryModuleMetadata)){let n=t3._sentryModuleMetadata[t];if(!a7.has(t)){for(let r of(a7.add(t),e(t).reverse()))if(r.filename){a8.set(r.filename,n);break}}}return a8.get(t)}(e,t.filename);n&&(t.module_metadata=n)})})}function le(e){e.exception?.values?.forEach(e=>{e.stacktrace?.frames?.forEach(e=>{delete e.module_metadata})})}let lt=()=>({name:"ModuleMetadata",setup(e){e.on("beforeEnvelope",e=>{iV(e,(e,t)=>{if("event"===t){let t=Array.isArray(e)?e[1]:void 0;t&&(le(t),e[1]=t)}})}),e.on("applyFrameMetadata",t=>{t.type||a9(e.getOptions().stackParser,t)})}}),ln=null;function lr(e){let t="error";se(t,e),st(t,li)}function li(){ln=t3.onerror,t3.onerror=function(e,t,n,r,i){return sn("error",{column:r,error:i,line:n,msg:e,url:t}),!!ln&&ln.apply(this,arguments)},t3.onerror.__SENTRY_INSTRUMENTED__=!0}let ls=null;function lo(e){let t="unhandledrejection";se(t,e),st(t,la)}function la(){ls=t3.onunhandledrejection,t3.onunhandledrejection=function(e){return sn("unhandledrejection",e),!ls||ls.apply(this,arguments)},t3.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}let ll=!1;function lu(){ll||(e.tag="sentry_tracingErrorCallback",ll=!0,lr(e),lo(e));function e(){let e=r9(),t=e&&r7(e);t&&t.setStatus({code:2,message:"internal_error"})}}let lc=/^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;function ld(...e){let t="",n=!1;for(let r=e.length-1;r>=-1&&!n;r--){let i=r>=0?e[r]:"/";i&&(t=`
            $ {
                i
            }
            /${t}`,n="/
            "===i.charAt(0))}return t=(function(e,t){let n=0;for(let t=e.length-1;t>=0;t--){let r=e[t];".
            "===r?e.splice(t,1):"..
            "===r?(e.splice(t,1),n++):n&&(e.splice(t,1),n--)}if(t)for(;n--;)e.unshift("..
            ");return e})(t.split(" / ").filter(e=>!!e),!n).join(" / "),(n?" / ":"
            ")+t||".
            "}function lp(e){let t=0;for(;t<e.length&&"
            "===e[t];t++);let n=e.length-1;for(;n>=0&&"
            "===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}let lh=(e={})=>{let t=e.root,n=e.prefix||"
            app: ///",r="window"in t3&&!!t3.window,i=e.iteratee||function({isBrowser:e,root:t,prefix:n}){return r=>{if(!r.filename)return r;let i=/^[a-zA-Z]:\\/.test(r.filename)||r.filename.includes("\\")&&!r.filename.includes("/"),s=/^\//.test(r.filename);if(e){if(t){let e=r.filename;0===e.indexOf(t)&&(r.filename=e.replace(t,n))}}else if(i||s){let e,s,o=i?r.filename.replace(/^[a-zA-Z]:/,"").replace(/\\/g,"/"):r.filename,a=t?function(e,t){e=ld(e).slice(1),t=ld(t).slice(1);let n=lp(e.split("/")),r=lp(t.split("/")),i=Math.min(n.length,r.length),s=i;for(let e=0;e<i;e++)if(n[e]!==r[e]){s=e;break}let o=[];for(let e=s;e<n.length;e++)o.push("..");return(o=o.concat(r.slice(s))).join("/")}(t,o):(e=o.length>1024?`<truncated>${o.slice(-1024)}`:o,(s=lc.exec(e))?s.slice(1):[])[2]||"";r.filename=`${n}${a}`}return r}}({isBrowser:r,root:t,prefix:n});return{name:"RewriteFrames",processEvent(e){let t=e;return e.exception&&Array.isArray(e.exception.values)&&(t=function(e){try{return{...e,exception:{...e.exception,values:e.exception.values.map(e=>{var t;return{...e,...e.stacktrace&&{stacktrace:{...t=e.stacktrace,frames:t?.frames?.map(e=>i(e))}}}})}}}catch{return e}}(t)),t}}};function lf(e){rr().setClient(e)}let lm=e=>({name:"ThirdPartyErrorsFilter",setup(e){e.on("beforeEnvelope",e=>{iV(e,(e,t)=>{if("event"===t){let t=Array.isArray(e)?e[1]:void 0;t&&(le(t),e[1]=t)}})}),e.on("applyFrameMetadata",t=>{t.type||a9(e.getOptions().stackParser,t)})},processEvent(t){let n=function(e,t){let n=nN(e);if(n)return n.filter((e,n)=>!!e.filename&&(null!=e.lineno||null!=e.colno||null!=e.instruction_addr)&&(!t||!function(e,t){if(0!==t||!e.context_line||!e.filename||!e.filename.includes("sentry")||!e.filename.includes("helpers")||!e.context_line.includes(ly))return!1;if(e.pre_context){let t=e.pre_context.length;for(let n=0;n<t;n++)if(e.pre_context[n]?.includes(l_))return!0}return!1}(e,n))).map(e=>e.module_metadata?Object.keys(e.module_metadata).filter(e=>e.startsWith(lg)).map(e=>e.slice(lg.length)):[])}(t,e.ignoreSentryInternalFrames);if(n&&n["drop-error-if-contains-third-party-frames"===e.behaviour||"apply-tag-if-contains-third-party-frames"===e.behaviour?"some":"every"](t=>!t.some(t=>e.filterKeys.includes(t)))){if("drop-error-if-contains-third-party-frames"===e.behaviour||"drop-error-if-exclusively-contains-third-party-frames"===e.behaviour)return null;t.tags={...t.tags,third_party_code:!0}}return t}}),lg="_sentryBundlerPluginAppKey:",l_="Attempt to invoke user-land function",ly="fn.apply(this, wrappedArguments)";function lv(e){return{...e,path:"path"in e&&Array.isArray(e.path)?e.path.join("."):void 0,keys:"keys"in e?JSON.stringify(e.keys):void 0,unionErrors:"unionErrors"in e?JSON.stringify(e.unionErrors):void 0}}let lb=(e={})=>{let t=e.limit??10;return{name:"ZodErrors",processEvent:(n,r)=>(function(e,t=!1,n,r){var i;if(!n.exception?.values||!r.originalException||!(t7(i=r.originalException)&&"ZodError"===i.name&&Array.isArray(i.issues))||0===r.originalException.issues.length)return n;try{let i=(t?r.originalException.issues:r.originalException.issues.slice(0,e)).map(lv);return t&&(Array.isArray(r.attachments)||(r.attachments=[]),r.attachments.push({filename:"zod_issues.json",data:JSON.stringify({issues:i})})),{...n,exception:{...n.exception,values:[{...n.exception.values[0],value:function(e){let t=new Set;for(let n of e.issues){let e=n.path.map(e=>"number"==typeof e?"<array>":e).join(".");e.length>0&&t.add(e)}let n=Array.from(t);if(0===n.length){let t="variable";if(e.issues.length>0){let n=e.issues[0];void 0!==n&&"expected"in n&&"string"==typeof n.expected&&(t=n.expected)}return`Failed to validate ${t}`}return`Failed to validate keys: ${n$(n.join(", "),100)}`}(r.originalException)},...n.exception.values.slice(1)]},extra:{...n.extra,"zoderror.issues":i.slice(0,e)}}}catch(e){return{...n,extra:{...n.extra,"zoderrors sentry integration parse error":{message:"an exception was thrown while processing ZodError within applyZodErrorsToEvent()",error:e instanceof Error?`${e.name}: ${e.message}
                $ {
                    e.stack
                }
            `:"unknown"}}}}})(t,e.saveZodIssuesAsAttachment,n,r)}},lS=Symbol.for("SentryInternalError"),lw=Symbol.for("SentryDoNotSendEventError");function lk(e){return{message:e,[lS]:!0}}function lE(e){return{message:e,[lw]:!0}}function lx(e,t,n,r,i){let s,o=0,a=!1;e.on(n,()=>{o=0,clearTimeout(s),a=!1}),e.on(t,t=>{(o+=r(t))>=8e5?i(e):a||(a=!0,s=oK(setTimeout(()=>{i(e)},5e3)))}),e.on("flush",()=>{i(e)})}class lC{constructor(e){if(this._options=e,this._integrations={},this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],this._promiseBuffer=oX(e.transportOptions?.bufferSize??64),e.dsn&&(this._dsn=r$(e.dsn)),this._dsn){const t=iH(this._dsn,e.tunnel,e._metadata?e._metadata.sdk:void 0);this._transport=e.transport({tunnel:this._options.tunnel,recordDroppedEvent:this.recordDroppedEvent.bind(this),...e.transportOptions,url:t})}this._options.enableLogs=this._options.enableLogs??this._options._experiments?.enableLogs,this._options.enableLogs&&lx(this,"afterCaptureLog","flushLogs",lR,sg),(this._options.enableMetrics??this._options._experiments?.enableMetrics??!0)&&lx(this,"afterCaptureMetric","flushMetrics",lA,a1)}captureException(e,t,n){let r=nW();if(nV(e))return r;let i={event_id:r,...t};return this._process(()=>this.eventFromException(e,i).then(e=>this._captureEvent(e,i,n)).then(e=>e),"error"),i.event_id}captureMessage(e,t,n,r){let i={event_id:nW(),...n},s=nr(e)?e:String(e),o=ni(e),a=o?this.eventFromMessage(s,t,i):this.eventFromException(e,i);return this._process(()=>a.then(e=>this._captureEvent(e,i,r)),o?"unknown":"error"),i.event_id}captureEvent(e,t,n){let r=nW();if(t?.originalException&&nV(t.originalException))return r;let i={event_id:r,...t},s=e.sdkProcessingMetadata||{},o=s.capturedSpanScope,a=s.capturedSpanIsolationScope,l=lI(e.type);return this._process(()=>this._captureEvent(e,i,o||n,a),l),i.event_id}captureSession(e){this.sendSession(e),nX(e,{init:!1})}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}async flush(e){let t=this._transport;if(!t)return!0;this.emit("flush");let n=await this._isClientDoneProcessing(e),r=await t.flush(e);return n&&r}async close(e){sg(this);let t=await this.flush(e);return this.getOptions().enabled=!1,this.emit("close"),t}getEventProcessors(){return this._eventProcessors}addEventProcessor(e){this._eventProcessors.push(e)}init(){(this._isEnabled()||this._options.integrations.some(({name:e})=>e.startsWith("Spotlight")))&&this._setupIntegrations()}getIntegrationByName(e){return this._integrations[e]}addIntegration(e){let t=this._integrations[e.name];i6(this,e,this._integrations),t||i4(this,[e])}sendEvent(e,t={}){var n,r,i;let s,o,a;this.emit("beforeSendEvent",e,t);let l=(n=this._dsn,r=this._options._metadata,i=this._options.tunnel,s=iZ(r),o=e.type&&"replay_event"!==e.type?e.type:"event",!function(e,t){if(!t)return;let n=e.sdk||{};e.sdk={...n,name:n.name||t.name,version:n.version||t.version,integrations:[...e.sdk?.integrations||[],...t.integrations||[]],packages:[...e.sdk?.packages||[],...t.packages||[]],settings:e.sdk?.settings||t.settings?{...e.sdk?.settings,...t.settings}:void 0}}(e,r?.sdk),a=iQ(e,s,i,n),delete e.sdkProcessingMetadata,iz(a,[[{type:o},e]]));for(let e of t.attachments||[])l=function(e,t){let[n,r]=e;return[n,[...r,t]]}(l,function(e){let t="string"==typeof e.data?iG(e.data):e.data;return[{type:"attachment",length:t.length,filename:e.filename,content_type:e.contentType,attachment_type:e.attachmentType},t]}(e));this.sendEnvelope(l).then(t=>this.emit("afterSendEvent",e,t))}sendSession(e){var t,n,r;let i,{release:s,environment:o=rc}=this._options;if("aggregates"in e){let t=e.attrs||{};if(!t.release&&!s)return;t.release=t.release||s,t.environment=t.environment||o,e.attrs=t}else{if(!e.release&&!s)return;e.release=e.release||s,e.environment=e.environment||o}this.emit("beforeSendSession",e);let a=(t=this._dsn,n=this._options._metadata,r=this._options.tunnel,i=iZ(n),iz({sent_at:new Date().toISOString(),...i&&{sdk:i},...!!r&&t&&{dsn:rL(t)}},["aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e.toJSON()]]));this.sendEnvelope(a)}recordDroppedEvent(e,t,n=1){if(this._options.sendClientReports){let r=`
            $ {
                e
            }: $ {
                t
            }
            `;this._outcomes[r]=(this._outcomes[r]||0)+n}}on(e,t){let n=this._hooks[e]=this._hooks[e]||new Set,r=(...e)=>t(...e);return n.add(r),()=>{n.delete(r)}}emit(e,...t){let n=this._hooks[e];n&&n.forEach(e=>e(...t))}async sendEnvelope(e){if(this.emit("beforeEnvelope",e),this._isEnabled()&&this._transport)try{return await this._transport.send(e)}catch(e){}return{}}dispose(){}_setupIntegrations(){var e;let t,{integrations:n}=this._options;this._integrations=(e=this,t={},n.forEach(n=>{n&&i6(e,n,t)}),t),i4(this,n)}_updateSessionFromEvent(e,t){let n="fatal"===t.level,r=!1,i=t.exception?.values;if(i){for(let e of(r=!0,n=!1,i))if(e.mechanism?.handled===!1){n=!0;break}}let s="ok"===e.status;(s&&0===e.errors||s&&n)&&(nX(e,{...n&&{status:"crashed"},errors:e.errors||Number(r||n)}),this.captureSession(e))}async _isClientDoneProcessing(e){let t=0;for(;!e||t<e;){if(await new Promise(e=>setTimeout(e,1)),!this._numProcessing)return!0;t++}return!1}_isEnabled(){return!1!==this.getOptions().enabled&&void 0!==this._transport}_prepareEvent(e,t,n,r){let i=this.getOptions(),s=Object.keys(this._integrations);return!t.integrations&&s?.length&&(t.integrations=s),this.emit("preprocessEvent",e,t),e.type||r.setLastEventId(e.event_id||t.event_id),id(i,e,t,n,this,r).then(e=>(null===e||(this.emit("postprocessEvent",e,t),e.contexts={trace:{...e.contexts?.trace,...ru(n)},...e.contexts},e.sdkProcessingMetadata={dynamicSamplingContext:is(this,n),...e.sdkProcessingMetadata}),e))}_captureEvent(e,t={},n=rr(),r=ri()){return this._processEvent(e,t,n,r).then(e=>e.event_id,e=>{})}_processEvent(e,t,n,r){let i=this.getOptions(),{sampleRate:s}=i,o=lM(e),a=lT(e),l=e.type||"error",u=`
            before send
            for type\ `${l}\``, c = void 0 === s ? void 0 : rH(s);
            if (a && "number" == typeof c && nI() > c) return this.recordDroppedEvent("sample_rate", "error"), rp(lE(`Discarding event because it's not included in the random sample (sampling rate = ${s})`));
            let d = lI(e.type);
            return this._prepareEvent(e, t, n, r).then(e => {
                if (null === e) throw this.recordDroppedEvent("event_processor", d), lE("An event processor returned `null`, will not send event.");
                return t.data ? .__sentry__ === !0 ? e : function(e, t) {
                    let n = `${t} must return \`null\` or a valid event.`;
                    if (na(e)) return e.then(e => {
                        if (!ns(e) && null !== e) throw lk(n);
                        return e
                    }, e => {
                        throw lk(`${t} rejected with ${e}`)
                    });
                    if (!ns(e) && null !== e) throw lk(n);
                    return e
                }(function(e, t, n, r) {
                    let {
                        beforeSend: i,
                        beforeSendTransaction: s,
                        beforeSendSpan: o,
                        ignoreSpans: a
                    } = t, l = n;
                    if (lT(l) && i) return i(l, r);
                    if (lM(l)) {
                        if (o || a) {
                            let t = function(e) {
                                let {
                                    trace_id: t,
                                    parent_span_id: n,
                                    span_id: r,
                                    status: i,
                                    origin: s,
                                    data: o,
                                    op: a
                                } = e.contexts ? .trace ? ? {};
                                return {
                                    data: o ? ? {},
                                    description: e.transaction,
                                    op: a,
                                    parent_span_id: n,
                                    span_id: r ? ? "",
                                    start_timestamp: e.start_timestamp ? ? 0,
                                    status: i,
                                    timestamp: e.timestamp,
                                    trace_id: t ? ? "",
                                    origin: s,
                                    profile_id: o ? .[rx],
                                    exclusive_time: o ? .[rC],
                                    measurements: e.measurements,
                                    is_segment: !0
                                }
                            }(l);
                            if (a ? .length && sx(t, a)) return null;
                            if (o) {
                                let e = o(t);
                                if (e) l = nZ(n, {
                                    type: "transaction",
                                    timestamp: e.timestamp,
                                    start_timestamp: e.start_timestamp,
                                    transaction: e.description,
                                    contexts: {
                                        trace: {
                                            trace_id: e.trace_id,
                                            span_id: e.span_id,
                                            parent_span_id: e.parent_span_id,
                                            op: e.op,
                                            status: e.status,
                                            origin: e.origin,
                                            data: { ...e.data,
                                                ...e.profile_id && {
                                                    [rx]: e.profile_id
                                                },
                                                ...e.exclusive_time && {
                                                    [rC]: e.exclusive_time
                                                }
                                            }
                                        }
                                    },
                                    measurements: e.measurements
                                });
                                else ie()
                            }
                            if (l.spans) {
                                let t = [],
                                    n = l.spans;
                                for (let e of n) {
                                    if (a ? .length && sx(e, a)) {
                                        ! function(e, t) {
                                            let n = t.parent_span_id,
                                                r = t.span_id;
                                            if (n)
                                                for (let t of e) t.parent_span_id === r && (t.parent_span_id = n)
                                        }(n, e);
                                        continue
                                    }
                                    if (o) {
                                        let n = o(e);
                                        n ? t.push(n) : (ie(), t.push(e))
                                    } else t.push(e)
                                }
                                let r = l.spans.length - t.length;
                                r && e.recordDroppedEvent("before_send", "span", r), l.spans = t
                            }
                        }
                        if (s) {
                            if (l.spans) {
                                let e = l.spans.length;
                                l.sdkProcessingMetadata = { ...n.sdkProcessingMetadata,
                                    spanCountBeforeProcessing: e
                                }
                            }
                            return s(l, r)
                        }
                    }
                    return l
                }(this, i, e, t), u)
            }).then(i => {
                if (null === i) {
                    if (this.recordDroppedEvent("before_send", d), o) {
                        let t = 1 + (e.spans || []).length;
                        this.recordDroppedEvent("before_send", "span", t)
                    }
                    throw lE(`${u} returned \`null\`, will not send event.`)
                }
                let s = n.getSession() || r.getSession();
                if (a && s && this._updateSessionFromEvent(s, i), o) {
                    let e = (i.sdkProcessingMetadata ? .spanCountBeforeProcessing || 0) - (i.spans ? i.spans.length : 0);
                    e > 0 && this.recordDroppedEvent("before_send", "span", e)
                }
                let l = i.transaction_info;
                return o && l && i.transaction !== e.transaction && (i.transaction_info = { ...l,
                    source: "custom"
                }), this.sendEvent(i, t), i
            }).then(null, e => {
                var t, n;
                if ((t = e) && "object" == typeof t && lw in t || (n = e) && "object" == typeof n && lS in n) throw e;
                throw this.captureException(e, {
                    mechanism: {
                        handled: !1,
                        type: "internal"
                    },
                    data: {
                        __sentry__: !0
                    },
                    originalException: e
                }), lk(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`)
            })
        }
        _process(e, t) {
            this._numProcessing++, this._promiseBuffer.add(e).then(e => (this._numProcessing--, e), e => (this._numProcessing--, e === oY && this.recordDroppedEvent("queue_overflow", t), e))
        }
        _clearOutcomes() {
            let e = this._outcomes;
            return this._outcomes = {}, Object.entries(e).map(([e, t]) => {
                let [n, r] = e.split(":");
                return {
                    reason: n,
                    category: r,
                    quantity: t
                }
            })
        }
        _flushOutcomes() {
            var e;
            let t = this._clearOutcomes();
            if (0 === t.length || !this._dsn) return;
            let n = iz((e = this._options.tunnel && rL(this._dsn)) ? {
                dsn: e
            } : {}, [
                [{
                    type: "client_report"
                }, {
                    timestamp: nJ(),
                    discarded_events: t
                }]
            ]);
            this.sendEnvelope(n)
        }
    }

    function lI(e) {
        return "replay_event" === e ? "replay" : e || "error"
    }

    function lT(e) {
        return void 0 === e.type
    }

    function lM(e) {
        return "transaction" === e.type
    }

    function lA(e) {
        let t = 0;
        return e.name && (t += 2 * e.name.length), (t += 8) + lO(e.attributes)
    }

    function lR(e) {
        let t = 0;
        return e.message && (t += 2 * e.message.length), t + lO(e.attributes)
    }

    function lO(e) {
        if (!e) return 0;
        let t = 0;
        return Object.values(e).forEach(e => {
            Array.isArray(e) ? t += e.length * lL(e[0]) : ni(e) ? t += lL(e) : t += 100
        }), t
    }

    function lL(e) {
        return "string" == typeof e ? 2 * e.length : "number" == typeof e ? 8 : 4 * ("boolean" == typeof e)
    }

    function lP(e) {
        "aggregates" in e ? e.attrs ? .ip_address === void 0 && (e.attrs = { ...e.attrs,
            ip_address: "{{auto}}"
        }) : void 0 === e.ipAddress && (e.ipAddress = "{{auto}}")
    }

    function lN(e) {
        return t7(e) && "__sentry_fetch_url_host__" in e && "string" == typeof e.__sentry_fetch_url_host__ ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message
    }

    function lD(e, t) {
        var n, r;
        let i, s, o = lj(e, t),
            a = {
                type: (n = t, !(i = n ? .name) && lU(n) ? n.message && Array.isArray(n.message) && 2 == n.message.length ? n.message[0] : "WebAssembly.Exception" : i),
                value: (r = t, s = r ? .message, lU(r) ? Array.isArray(r.message) && 2 == r.message.length ? r.message[1] : "wasm exception" : s ? s.error && "string" == typeof s.error.message ? lN(s.error) : lN(r) : "No error message")
            };
        return o.length && (a.stacktrace = {
            frames: o
        }), void 0 === a.type && "" === a.value && (a.value = "Unrecoverable error caught"), a
    }

    function l$(e, t) {
        return {
            exception: {
                values: [lD(e, t)]
            }
        }
    }

    function lj(e, t) {
        var n, r;
        let i = t.stacktrace || t.stack || "",
            s = (n = t) && lF.test(n.message) ? 1 : 0,
            o = "number" == typeof(r = t).framesToPop ? r.framesToPop : 0;
        try {
            return e(i, s, o)
        } catch {}
        return []
    }
    let lF = /Minified React error #\d+;/i;

    function lU(e) {
        return "u" > typeof WebAssembly && void 0 !== WebAssembly.Exception && e instanceof WebAssembly.Exception
    }

    function lB(e, t, n, r) {
        let i = lq(e, t, n ? .syntheticException || void 0, r);
        return nz(i), i.level = "error", n ? .event_id && (i.event_id = n.event_id), rd(i)
    }

    function lW(e, t, n = "info", r, i) {
        let s = lH(e, t, r ? .syntheticException || void 0, i);
        return s.level = n, r ? .event_id && (s.event_id = r.event_id), rd(s)
    }

    function lq(e, t, n, r, i) {
        let s;
        if (ne(t) && t.error) return l$(e, t.error);
        if (nt(t) || t9(t, "DOMException")) {
            if ("stack" in t) s = l$(e, t);
            else {
                let i = t.name || (nt(t) ? "DOMError" : "DOMException"),
                    o = t.message ? `${i}: ${t.message}` : i;
                nH(s = lH(e, o, n, r), o)
            }
            return "code" in t && (s.tags = { ...s.tags,
                "DOMException.code": `${t.code}`
            }), s
        }
        return t7(t) ? l$(e, t) : (ns(t) || no(t) ? nz(s = function(e, t, n, r) {
            let i = rl(),
                s = i ? .getOptions().normalizeDepth,
                o = Object.values(t).find(e => e instanceof Error),
                a = {
                    __serialized__: function e(t, n = 3, r = 102400) {
                        let i = rm(t, n);
                        return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? e(t, n - 1, r) : i
                    }(t, s)
                };
            if (o) return {
                exception: {
                    values: [lD(e, o)]
                },
                extra: a
            };
            let l = {
                exception: {
                    values: [{
                        type: no(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                        value: function(e, {
                            isUnhandledRejection: t
                        }) {
                            let n, r = ((n = Object.keys(nk(e))).sort(), n[0] ? n.join(", ") : "[object has no keys]"),
                                i = t ? "promise rejection" : "exception";
                            if (ne(e)) return `Event \`ErrorEvent\` captured as ${i} with message \`${e.message}\``;
                            if (no(e)) {
                                let t = function(e) {
                                    try {
                                        let t = Object.getPrototypeOf(e);
                                        return t ? t.constructor.name : void 0
                                    } catch {}
                                }(e);
                                return `Event \`${t}\` (type=${e.type}) captured as ${i}`
                            }
                            return `Object captured as ${i} with keys: ${r}`
                        }(t, {
                            isUnhandledRejection: r
                        })
                    }]
                },
                extra: a
            };
            if (n) {
                let t = lj(e, n);
                t.length && (l.exception.values[0].stacktrace = {
                    frames: t
                })
            }
            return l
        }(e, t, n, i), {
            synthetic: !0
        }) : (nH(s = lH(e, t, n, r), `${t}`, void 0), nz(s, {
            synthetic: !0
        })), s)
    }

    function lH(e, t, n, r) {
        let i = {};
        if (r && n) {
            let r = lj(e, n);
            r.length && (i.exception = {
                values: [{
                    value: t,
                    stacktrace: {
                        frames: r
                    }
                }]
            }), nz(i, {
                synthetic: !0
            })
        }
        if (nr(t)) {
            let {
                __sentry_template_string__: e,
                __sentry_template_values__: n
            } = t;
            return i.logentry = {
                message: e,
                params: n
            }, i
        }
        return i.message = t, i
    }
    class lz extends lC {
        constructor(e) {
            const t = function(e) {
                return {
                    release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : iP.SENTRY_RELEASE ? .id,
                    sendClientReports: !0,
                    parentSpanIsAlwaysRootSpan: !0,
                    ...e
                }
            }(e);
            ! function(e, t, n = [t], r = "npm") {
                let i = (e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {};
                i.name || (i.name = `sentry.javascript.${t}`, i.packages = n.map(e => ({
                    name: `${r}:@sentry/${e}`,
                    version: t2
                })), i.version = t2)
            }(t, "browser", ["browser"], iP.SENTRY_SDK_SOURCE || "npm"), t._metadata ? .sdk && (t._metadata.sdk.settings = {
                infer_ip: t.sendDefaultPii ? "auto" : "never",
                ...t._metadata.sdk.settings
            }), super(t);
            const {
                sendDefaultPii: n,
                sendClientReports: r,
                enableLogs: i,
                _experiments: s,
                enableMetrics: o
            } = this._options, a = o ? ? s ? .enableMetrics ? ? !0;
            iP.document && (r || i || a) && iP.document.addEventListener("visibilitychange", () => {
                "hidden" === iP.document.visibilityState && (r && this._flushOutcomes(), i && sg(this), a && a1(this))
            }), n && this.on("beforeSendSession", lP)
        }
        eventFromException(e, t) {
            return lB(this._options.stackParser, e, t, this._options.attachStacktrace)
        }
        eventFromMessage(e, t = "info", n) {
            return lW(this._options.stackParser, e, t, n, this._options.attachStacktrace)
        }
        _prepareEvent(e, t, n, r) {
            return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n, r)
        }
    }

    function lV(e) {
        return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function lJ() {
        if ("string" == typeof EdgeRuntime) return !0;
        if (! function() {
                if (!("fetch" in t3)) return !1;
                try {
                    return new Headers, new Request("data:,"), new Response, !0
                } catch {
                    return !1
                }
            }()) return !1;
        if (lV(t3.fetch)) return !0;
        let e = !1,
            t = t3.document;
        if (t && "function" == typeof t.createElement) try {
            let n = t.createElement("iframe");
            n.hidden = !0, t.head.appendChild(n), n.contentWindow ? .fetch && (e = lV(n.contentWindow.fetch)), t.head.removeChild(n)
        } catch (e) {}
        return e
    }
    let lG = {};

    function lK(e) {
        let t = lG[e];
        if (t) return t;
        let n = t3[e];
        if (lV(n)) return lG[e] = n.bind(t3);
        let r = t3.document;
        if (r && "function" == typeof r.createElement) try {
            let t = r.createElement("iframe");
            t.hidden = !0, r.head.appendChild(t);
            let i = t.contentWindow;
            i ? .[e] && (n = i[e]), r.head.removeChild(t)
        } catch (e) {}
        return n ? lG[e] = n.bind(t3) : n
    }

    function lY(...e) {
        return lK("setTimeout")(...e)
    }

    function lX(e, t = lK("fetch")) {
        let n = 0,
            r = 0;
        async function i(i) {
            let s = i.body.length;
            n += s, r++;
            let o = {
                body: i.body,
                method: "POST",
                referrerPolicy: "strict-origin",
                headers: e.headers,
                keepalive: n <= 6e4 && r < 15,
                ...e.fetchOptions
            };
            try {
                let n = await t(e.url, o);
                return {
                    statusCode: n.status,
                    headers: {
                        "x-sentry-rate-limits": n.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": n.headers.get("Retry-After")
                    }
                }
            } catch (e) {
                throw lG.fetch = void 0, e
            } finally {
                n -= s, r--
            }
        }
        return o1(e, i, oX(e.bufferSize || 40))
    }
    let lZ = {
        startProfiler: function() {
            let e = rl();
            !e || e.getIntegrationByName("BrowserProfiling") && e.emit("startUIProfiler")
        },
        stopProfiler: function() {
            let e = rl();
            !e || e.getIntegrationByName("BrowserProfiling") && e.emit("stopUIProfiler")
        }
    };

    function lQ(e, t, n, r) {
        let i = {
            filename: e,
            function: "<anonymous>" === t ? "?" : t,
            in_app: !0
        };
        return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
    }
    let l0 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
        l1 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        l2 = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        l3 = /at (.+?) ?\(data:(.+?),/,
        l5 = [30, e => {
            let t = e.match(l3);
            if (t) return {
                filename: `<data:${t[2]}>`,
                function: t[1]
            };
            let n = l0.exec(e);
            if (n) {
                let [, e, t, r] = n;
                return lQ(e, "?", +t, +r)
            }
            let r = l1.exec(e);
            if (r) {
                if (r[2] ? .indexOf("eval") === 0) {
                    let e = l2.exec(r[2]);
                    e && (r[2] = e[1], r[3] = e[2], r[4] = e[3])
                }
                let [e, t] = uo(r[1] || "?", r[2]);
                return lQ(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0)
            }
        }],
        l4 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        l6 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        l8 = [50, e => {
            let t = l4.exec(e);
            if (t) {
                if (t[3] && t[3].indexOf(" > eval") > -1) {
                    let e = l6.exec(t[3]);
                    e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
                }
                let e = t[3],
                    n = t[1] || "?";
                return [n, e] = uo(n, e), lQ(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
            }
        }],
        l7 = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        l9 = [40, e => {
            let t = l7.exec(e);
            return t ? lQ(t[2], t[1] || "?", +t[3], t[4] ? +t[4] : void 0) : void 0
        }],
        ue = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        ut = [10, e => {
            let t = ue.exec(e);
            return t ? lQ(t[2], t[3] || "?", +t[1]) : void 0
        }],
        un = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
        ur = [20, e => {
            let t = un.exec(e);
            return t ? lQ(t[5], t[3] || t[4] || "?", +t[1], +t[2]) : void 0
        }],
        ui = [l5, l8],
        us = nR(...ui),
        uo = (e, t) => {
            let n = -1 !== e.indexOf("safari-extension"),
                r = -1 !== e.indexOf("safari-web-extension");
            return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
        };

    function ua(e, {
        metadata: t,
        tunnel: n,
        dsn: r
    }) {
        return iz({
            event_id: e.event_id,
            sent_at: new Date().toISOString(),
            ...t ? .sdk && {
                sdk: {
                    name: t.sdk.name,
                    version: t.sdk.version
                }
            },
            ...!!n && !!r && {
                dsn: rL(r)
            }
        }, [
            [{
                type: "user_report"
            }, e]
        ])
    }

    function ul(e, t) {
        let n = "fetch";
        se(n, e), st(n, () => uu(void 0, t))
    }

    function uu(e, t = !1) {
        (!t || lJ()) && nv(t3, "fetch", function(t) {
            return function(...n) {
                let r = Error(),
                    {
                        method: i,
                        url: s
                    } = function(e) {
                        if (0 === e.length) return {
                            method: "GET",
                            url: ""
                        };
                        if (2 === e.length) {
                            let [t, n] = e;
                            return {
                                url: uh(t),
                                method: up(n, "method") ? String(n.method).toUpperCase() : nc(t) && up(t, "method") ? String(t.method).toUpperCase() : "GET"
                            }
                        }
                        let t = e[0];
                        return {
                            url: uh(t),
                            method: up(t, "method") ? String(t.method).toUpperCase() : "GET"
                        }
                    }(n),
                    o = {
                        args: n,
                        fetchData: {
                            method: i,
                            url: s
                        },
                        startTimestamp: 1e3 * nG(),
                        virtualError: r,
                        headers: function(e) {
                            let [t, n] = e;
                            try {
                                if ("object" == typeof n && null !== n && "headers" in n && n.headers) return new Headers(n.headers);
                                if (nc(t)) return new Headers(t.headers)
                            } catch {}
                        }(n)
                    };
                return e || sn("fetch", { ...o
                }), t.apply(t3, n).then(async t => (e ? e(t) : sn("fetch", { ...o,
                    endTimestamp: 1e3 * nG(),
                    response: t
                }), t), e => {
                    sn("fetch", { ...o,
                        endTimestamp: 1e3 * nG(),
                        error: e
                    }), t7(e) && void 0 === e.stack && (e.stack = r.stack, nb(e, "framesToPop", 1));
                    let t = rl(),
                        n = t ? .getOptions().enhanceFetchErrorMessages ? ? "always";
                    if (!1 !== n && e instanceof TypeError && ("Failed to fetch" === e.message || "Load failed" === e.message || "NetworkError when attempting to fetch resource." === e.message)) try {
                        let t = new URL(o.fetchData.url).host;
                        "always" === n ? e.message = `${e.message} (${t})` : nb(e, "__sentry_fetch_url_host__", t)
                    } catch {}
                    throw e
                })
            }
        })
    }
    async function uc(e, t) {
        if (e ? .body) {
            let n = e.body,
                r = n.getReader(),
                i = setTimeout(() => {
                    n.cancel().then(null, () => {})
                }, 9e4),
                s = !0;
            for (; s;) {
                let e;
                try {
                    e = setTimeout(() => {
                        n.cancel().then(null, () => {})
                    }, 5e3);
                    let {
                        done: i
                    } = await r.read();
                    clearTimeout(e), i && (t(), s = !1)
                } catch {
                    s = !1
                } finally {
                    clearTimeout(e)
                }
            }
            clearTimeout(i), r.releaseLock(), n.cancel().then(null, () => {})
        }
    }

    function ud(e) {
        let t;
        try {
            t = e.clone()
        } catch {
            return
        }
        uc(t, () => {
            sn("fetch-body-resolved", {
                endTimestamp: 1e3 * nG(),
                response: e
            })
        })
    }

    function up(e, t) {
        return !!e && "object" == typeof e && !!e[t]
    }

    function uh(e) {
        return "string" == typeof e ? e : e ? up(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
    }

    function uf(e) {
        if (void 0 !== e) return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
    }

    function um(e) {
        return "isRelative" in e
    }

    function ug(e, t) {
        let n = 0 >= e.indexOf("://") && 0 !== e.indexOf("//"),
            r = t ? ? (n ? "thismessage:/" : void 0);
        try {
            if ("canParse" in URL && !URL.canParse(e, r)) return;
            let t = new URL(e, r);
            if (n) return {
                isRelative: n,
                pathname: t.pathname,
                search: t.search,
                hash: t.hash
            };
            return t
        } catch {}
    }

    function u_(e) {
        if (!e) return {};
        let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t) return {};
        let n = t[6] || "",
            r = t[8] || "";
        return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            search: n,
            hash: r,
            relative: t[5] + n + r
        }
    }

    function uy(e) {
        return e.split(/[?#]/, 1)[0]
    }

    function uv(e, t = !0) {
        if (e.startsWith("data:")) {
            let n = e.match(/^data:([^;,]+)/),
                r = n ? n[1] : "text/plain",
                i = e.includes(";base64,"),
                s = e.indexOf(","),
                o = "";
            if (t && -1 !== s) {
                let t = e.slice(s + 1);
                o = t.length > 10 ? `${t.slice(0,10)}... [truncated]` : t
            }
            return `data:${r}${i?",base64":""}${o?`,${o}`:""}`
        }
        return e
    }

    function ub(e) {
        se("dom", e), st("dom", uS)
    }

    function uS() {
        if (!t3.document) return;
        let e = sn.bind(null, "dom"),
            t = uw(e, !0);
        t3.document.addEventListener("click", t, !1), t3.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(t => {
            let n = t3[t] ? .prototype;
            n ? .hasOwnProperty ? .("addEventListener") && (nv(n, "addEventListener", function(t) {
                return function(n, r, i) {
                    if ("click" === n || "keypress" == n) try {
                        let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                            s = r[n] = r[n] || {
                                refCount: 0
                            };
                        if (!s.handler) {
                            let r = uw(e);
                            s.handler = r, t.call(this, n, r, i)
                        }
                        s.refCount++
                    } catch {}
                    return t.call(this, n, r, i)
                }
            }), nv(n, "removeEventListener", function(e) {
                return function(t, n, r) {
                    if ("click" === t || "keypress" == t) try {
                        let n = this.__sentry_instrumentation_handlers__ || {},
                            i = n[t];
                        i && (i.refCount--, i.refCount <= 0 && (e.call(this, t, i.handler, r), i.handler = void 0, delete n[t]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                    } catch {}
                    return e.call(this, t, n, r)
                }
            }))
        })
    }

    function uw(e, t = !1) {
        return n => {
            var r;
            if (!n || n._sentryCaptured) return;
            let i = function(e) {
                try {
                    return e.target
                } catch {
                    return null
                }
            }(n);
            if (r = n.type, "keypress" === r && (!i ? .tagName || "INPUT" !== i.tagName && "TEXTAREA" !== i.tagName && !i.isContentEditable && 1)) return;
            nb(n, "_sentryCaptured", !0), i && !i._sentryId && nb(i, "_sentryId", nW());
            let s = "keypress" === n.type ? "input" : n.type;
            ! function(e) {
                if (e.type !== _) return !1;
                try {
                    if (!e.target || e.target._sentryId !== y) return !1
                } catch {}
                return !0
            }(n) && (e({
                event: n,
                name: s,
                global: t
            }), _ = n.type, y = i ? i._sentryId : void 0), clearTimeout(g), g = t3.setTimeout(() => {
                y = void 0, _ = void 0
            }, 1e3)
        }
    }
    let uk = "__sentry_xhr_v3__";

    function uE(e) {
        se("xhr", e), st("xhr", ux)
    }

    function ux() {
        if (!t3.XMLHttpRequest) return;
        let e = XMLHttpRequest.prototype;
        e.open = new Proxy(e.open, {
            apply(e, t, n) {
                let r = Error(),
                    i = 1e3 * nG(),
                    s = nn(n[0]) ? n[0].toUpperCase() : void 0,
                    o = function(e) {
                        if (nn(e)) return e;
                        try {
                            return e.toString()
                        } catch {}
                    }(n[1]);
                if (!s || !o) return e.apply(t, n);
                t[uk] = {
                    method: s,
                    url: o,
                    request_headers: {}
                }, "POST" === s && o.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
                let a = () => {
                    let e = t[uk];
                    if (e && 4 === t.readyState) {
                        try {
                            e.status_code = t.status
                        } catch {}
                        sn("xhr", {
                            endTimestamp: 1e3 * nG(),
                            startTimestamp: i,
                            xhr: t,
                            virtualError: r
                        })
                    }
                };
                return "onreadystatechange" in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange, {
                    apply: (e, t, n) => (a(), e.apply(t, n))
                }) : t.addEventListener("readystatechange", a), t.setRequestHeader = new Proxy(t.setRequestHeader, {
                    apply(e, t, n) {
                        let [r, i] = n, s = t[uk];
                        return s && nn(r) && nn(i) && (s.request_headers[r.toLowerCase()] = i), e.apply(t, n)
                    }
                }), e.apply(t, n)
            }
        }), e.send = new Proxy(e.send, {
            apply(e, t, n) {
                let r = t[uk];
                return r && (void 0 !== n[0] && (r.body = n[0]), sn("xhr", {
                    startTimestamp: 1e3 * nG(),
                    xhr: t
                })), e.apply(t, n)
            }
        })
    }

    function uC(e) {
        let t = "history";
        se(t, e), st(t, uI)
    }

    function uI() {
        function e(e) {
            return function(...t) {
                let n = t.length > 2 ? t[2] : void 0;
                if (n) {
                    let r = v,
                        i = function(e) {
                            try {
                                return new URL(e, t3.location.origin).toString()
                            } catch {
                                return e
                            }
                        }(String(n));
                    if (v = i, r === i) return e.apply(this, t);
                    sn("history", {
                        from: r,
                        to: i
                    })
                }
                return e.apply(this, t)
            }
        }
        t3.addEventListener("popstate", () => {
            let e = t3.location.href,
                t = v;
            v = e, t === e || sn("history", {
                from: t,
                to: e
            })
        }), "history" in t3 && t3.history && (nv(t3.history, "pushState", e), nv(t3.history, "replaceState", e))
    }
    let uT = (e = {}) => {
            let t = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...e
            };
            return {
                name: "Breadcrumbs",
                setup(e) {
                    var n, r, i, s, o, a, l;
                    t.console && sr((n = e, function(e) {
                        if (rl() !== n) return;
                        let t = {
                            category: "console",
                            data: {
                                arguments: e.args,
                                logger: "console"
                            },
                            level: ss(e.level),
                            message: nF(e.args, " ")
                        };
                        if ("assert" === e.level)
                            if (!1 !== e.args[0]) return;
                            else t.message = `Assertion failed: ${nF(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
                        i3(t, {
                            input: e.args,
                            level: e.level
                        })
                    })), t.dom && ub((r = e, i = t.dom, function(e) {
                        let t, n;
                        if (rl() !== r) return;
                        let s = "object" == typeof i ? i.serializeAttribute : void 0,
                            o = "object" == typeof i && "number" == typeof i.maxStringLength ? i.maxStringLength : void 0;
                        o && o > 1024 && (o = 1024), "string" == typeof s && (s = [s]);
                        try {
                            var a;
                            let r = e.event,
                                i = (a = r) && a.target ? r.target : r;
                            t = nd(i, {
                                keyAttrs: s,
                                maxStringLength: o
                            }), n = nh(i)
                        } catch {
                            t = "<unknown>"
                        }
                        if (0 === t.length) return;
                        let l = {
                            category: `ui.${e.name}`,
                            message: t
                        };
                        n && (l.data = {
                            "ui.component_name": n
                        }), i3(l, {
                            event: e.event,
                            name: e.name,
                            global: e.global
                        })
                    })), t.xhr && uE((s = e, function(e) {
                        if (rl() !== s) return;
                        let {
                            startTimestamp: t,
                            endTimestamp: n
                        } = e, r = e.xhr[uk];
                        if (!t || !n || !r) return;
                        let {
                            method: i,
                            url: o,
                            status_code: a,
                            body: l
                        } = r, u = {
                            xhr: e.xhr,
                            input: l,
                            startTimestamp: t,
                            endTimestamp: n
                        }, c = {
                            category: "xhr",
                            data: {
                                method: i,
                                url: o,
                                status_code: a
                            },
                            type: "http",
                            level: uf(a)
                        };
                        s.emit("beforeOutgoingRequestBreadcrumb", c, u), i3(c, u)
                    })), t.fetch && ul((o = e, function(e) {
                        if (rl() !== o) return;
                        let {
                            startTimestamp: t,
                            endTimestamp: n
                        } = e;
                        if (n && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method))
                            if (e.error) {
                                let r = {
                                        data: e.error,
                                        input: e.args,
                                        startTimestamp: t,
                                        endTimestamp: n
                                    },
                                    i = {
                                        category: "fetch",
                                        data: e.fetchData,
                                        level: "error",
                                        type: "http"
                                    };
                                o.emit("beforeOutgoingRequestBreadcrumb", i, r), i3(i, r)
                            } else {
                                let r = e.response,
                                    i = { ...e.fetchData,
                                        status_code: r ? .status
                                    },
                                    s = {
                                        input: e.args,
                                        response: r,
                                        startTimestamp: t,
                                        endTimestamp: n
                                    },
                                    a = {
                                        category: "fetch",
                                        data: i,
                                        type: "http",
                                        level: uf(i.status_code)
                                    };
                                o.emit("beforeOutgoingRequestBreadcrumb", a, s), i3(a, s)
                            }
                    })), t.history && uC((a = e, function(e) {
                        if (rl() !== a) return;
                        let t = e.from,
                            n = e.to,
                            r = u_(iP.location.href),
                            i = t ? u_(t) : void 0,
                            s = u_(n);
                        i ? .path || (i = r), r.protocol === s.protocol && r.host === s.host && (n = s.relative), r.protocol === i.protocol && r.host === i.host && (t = i.relative), i3({
                            category: "navigation",
                            data: {
                                from: t,
                                to: n
                            }
                        })
                    })), t.sentry && e.on("beforeSendEvent", (l = e, function(e) {
                        rl() === l && i3({
                            category: `sentry.${"transaction"===e.type?"transaction":"event"}`,
                            event_id: e.event_id,
                            level: e.level,
                            message: function(e) {
                                let {
                                    message: t,
                                    event_id: n
                                } = e;
                                if (t) return t;
                                let r = nq(e);
                                return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
                            }(e)
                        }, {
                            event: e
                        })
                    }))
                }
            }
        },
        uM = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(","),
        uA = (e = {}) => {
            let t = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                unregisterOriginalCallbacks: !1,
                ...e
            };
            return {
                name: "BrowserApiErrors",
                setupOnce() {
                    t.setTimeout && nv(iP, "setTimeout", uR), t.setInterval && nv(iP, "setInterval", uR), t.requestAnimationFrame && nv(iP, "requestAnimationFrame", uO), t.XMLHttpRequest && "XMLHttpRequest" in iP && nv(XMLHttpRequest.prototype, "send", uL);
                    let e = t.eventTarget;
                    e && (Array.isArray(e) ? e : uM).forEach(e => {
                        var n, r;
                        let i;
                        return n = e, r = t, i = iP[n] ? .prototype, void(i ? .hasOwnProperty ? .("addEventListener") && (nv(i, "addEventListener", function(e) {
                            return function(t, i, s) {
                                var o, a, l, u;
                                try {
                                    o = i, "function" == typeof o.handleEvent && (i.handleEvent = iD(i.handleEvent, {
                                        mechanism: {
                                            data: {
                                                handler: nP(i),
                                                target: n
                                            },
                                            handled: !1,
                                            type: "auto.browser.browserapierrors.handleEvent"
                                        }
                                    }))
                                } catch {}
                                return r.unregisterOriginalCallbacks && (a = this, l = t, u = i, a && "object" == typeof a && "removeEventListener" in a && "function" == typeof a.removeEventListener && a.removeEventListener(l, u)), e.apply(this, [t, iD(i, {
                                    mechanism: {
                                        data: {
                                            handler: nP(i),
                                            target: n
                                        },
                                        handled: !1,
                                        type: "auto.browser.browserapierrors.addEventListener"
                                    }
                                }), s])
                            }
                        }), nv(i, "removeEventListener", function(e) {
                            return function(t, n, r) {
                                try {
                                    let i = n.__sentry_wrapped__;
                                    i && e.call(this, t, i, r)
                                } catch {}
                                return e.call(this, t, n, r)
                            }
                        })))
                    })
                }
            }
        };

    function uR(e) {
        return function(...t) {
            let n = t[0];
            return t[0] = iD(n, {
                mechanism: {
                    handled: !1,
                    type: `auto.browser.browserapierrors.${nP(e)}`
                }
            }), e.apply(this, t)
        }
    }

    function uO(e) {
        return function(t) {
            return e.apply(this, [iD(t, {
                mechanism: {
                    data: {
                        handler: nP(e)
                    },
                    handled: !1,
                    type: "auto.browser.browserapierrors.requestAnimationFrame"
                }
            })])
        }
    }

    function uL(e) {
        return function(...t) {
            let n = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
                e in n && "function" == typeof n[e] && nv(n, e, function(t) {
                    let n = {
                            mechanism: {
                                data: {
                                    handler: nP(t)
                                },
                                handled: !1,
                                type: `auto.browser.browserapierrors.xhr.${e}`
                            }
                        },
                        r = nw(t);
                    return r && (n.mechanism.data.handler = nP(r)), iD(t, n)
                })
            }), e.apply(this, t)
        }
    }
    let uP = (e = {}) => {
            let t = e.lifecycle ? ? "route";
            return {
                name: "BrowserSession",
                setupOnce() {
                    if (void 0 === iP.document) return;
                    iA({
                        ignoreDuration: !0
                    }), iL();
                    let e = ri(),
                        n = e.getUser();
                    e.addScopeListener(e => {
                        let t = e.getUser();
                        (n ? .id !== t ? .id || n ? .ip_address !== t ? .ip_address) && (iL(), n = t)
                    }), "route" === t && uC(({
                        from: e,
                        to: t
                    }) => {
                        e !== t && (iA({
                            ignoreDuration: !0
                        }), iL())
                    })
                }
            }
        },
        uN = () => ({
            name: "CultureContext",
            preprocessEvent(e) {
                let t = function() {
                    try {
                        let e = iP.Intl;
                        if (!e) return;
                        let t = e.DateTimeFormat().resolvedOptions();
                        return {
                            locale: t.locale,
                            timezone: t.timeZone,
                            calendar: t.calendar
                        }
                    } catch {
                        return
                    }
                }();
                t && (e.contexts = { ...e.contexts,
                    culture: { ...t,
                        ...e.contexts ? .culture
                    }
                })
            }
        }),
        uD = (e = {}) => {
            let t = {
                onerror: !0,
                onunhandledrejection: !0,
                ...e
            };
            return {
                name: "GlobalHandlers",
                setupOnce() {
                    Error.stackTraceLimit = 50
                },
                setup(e) {
                    var n, r;
                    t.onerror && (n = e, lr(e => {
                        var t, r, i, s;
                        let o, a, l, u, c, {
                            stackParser: d,
                            attachStacktrace: p
                        } = uF();
                        if (rl() !== n || iN > 0) return;
                        let {
                            msg: h,
                            url: f,
                            line: m,
                            column: g,
                            error: _
                        } = e, y = (t = lq(d, _ || h, void 0, p, !1), r = f, i = m, s = g, 0 === (c = (u = (l = (a = (o = t.exception = t.exception || {}).values = o.values || [])[0] = a[0] || {}).stacktrace = l.stacktrace || {}).frames = u.frames || []).length && c.push({
                            colno: s,
                            lineno: i,
                            filename: function(e) {
                                if (nn(e) && 0 !== e.length) return e.startsWith("data:") ? `<${uv(e,!1)}>` : e
                            }(r) ? ? np(),
                            function: "?",
                            in_app: !0
                        }), t);
                        y.level = "error", ig(y, {
                            originalException: _,
                            mechanism: {
                                handled: !1,
                                type: "auto.browser.global_handlers.onerror"
                            }
                        })
                    })), t.onunhandledrejection && (r = e, lo(e => {
                        let {
                            stackParser: t,
                            attachStacktrace: n
                        } = uF();
                        if (rl() !== r || iN > 0) return;
                        let i = u$(e),
                            s = ni(i) ? uj(i) : lq(t, i, void 0, n, !0);
                        s.level = "error", ig(s, {
                            originalException: i,
                            mechanism: {
                                handled: !1,
                                type: "auto.browser.global_handlers.onunhandledrejection"
                            }
                        })
                    }))
                }
            }
        };

    function u$(e) {
        if (ni(e)) return e;
        try {
            if ("reason" in e) return e.reason;
            if ("detail" in e && "reason" in e.detail) return e.detail.reason
        } catch {}
        return e
    }

    function uj(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function uF() {
        let e = rl();
        return e ? .getOptions() || {
            stackParser: () => [],
            attachStacktrace: !1
        }
    }
    let uU = () => ({
        name: "HttpContext",
        preprocessEvent(e) {
            if (!iP.navigator && !iP.location && !iP.document) return;
            let t = i$(),
                n = { ...t.headers,
                    ...e.request ? .headers
                };
            e.request = { ...t,
                ...e.request,
                headers: n
            }
        }
    });

    function uB(e) {
        return Array.isArray(e.errors)
    }

    function uW(e, t, n) {
        e.mechanism = {
            handled: !0,
            type: "auto.core.linked_errors",
            ...uB(n) && {
                is_exception_group: !0
            },
            ...e.mechanism,
            exception_id: t
        }
    }

    function uq(e, t, n, r) {
        e.mechanism = {
            handled: !0,
            ...e.mechanism,
            type: "chained",
            source: t,
            exception_id: n,
            parent_id: r
        }
    }
    let uH = (e = {}) => {
        let t = e.limit || 5,
            n = e.key || "cause";
        return {
            name: "LinkedErrors",
            preprocessEvent(e, r, i) {
                ! function(e, t, n, r, i, s) {
                    if (!i.exception ? .values || !s || !nl(s.originalException, Error)) return;
                    let o = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
                    o && (i.exception.values = function e(t, n, r, i, s, o, a, l) {
                        if (o.length >= r + 1) return o;
                        let u = [...o];
                        if (nl(i[s], Error)) {
                            uW(a, l, i);
                            let o = t(n, i[s]),
                                c = u.length;
                            uq(o, s, c, l), u = e(t, n, r, i[s], s, [o, ...u], o, c)
                        }
                        return uB(i) && i.errors.forEach((o, c) => {
                            if (nl(o, Error)) {
                                uW(a, l, i);
                                let d = t(n, o),
                                    p = u.length;
                                uq(d, `errors[${c}]`, p, l), u = e(t, n, r, o, s, [d, ...u], d, p)
                            }
                        }), u
                    }(e, t, r, s.originalException, n, i.exception.values, o, 0))
                }(lD, i.getOptions().stackParser, n, t, e, r)
            }
        }
    };

    function uz(e) {
        return [o7(), al(), {
            name: "ConversationId",
            setup(e) {
                e.on("spanStart", e => {
                    let t = rr().getScopeData(),
                        n = ri().getScopeData(),
                        r = t.conversationId || n.conversationId;
                    r && e.setAttribute("gen_ai.conversation.id", r)
                })
            }
        }, uA(), uT(), uD(), uH(), o2(), uU(), uN(), uP()]
    }

    function uV(e = {}) {
        var t;
        let n, r = !e.skipBrowserExtensionCheck && !! function() {
                if (void 0 === iP.window || iP.nw) return !1;
                let e = iP.chrome || iP.browser;
                if (!e ? .runtime ? .id) return !1;
                let t = np();
                return !(iP === iP.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(t))
            }(),
            i = null == e.defaultIntegrations ? uz() : e.defaultIntegrations,
            s = { ...e,
                enabled: !r && e.enabled,
                stackParser: Array.isArray(t = e.stackParser || us) ? nR(...t) : t,
                integrations: function(e) {
                    let t, n, r = e.defaultIntegrations || [],
                        i = e.integrations;
                    if (r.forEach(e => {
                            e.isDefaultInstance = !0
                        }), Array.isArray(i)) t = [...r, ...i];
                    else if ("function" == typeof i) {
                        let e = i(r);
                        t = Array.isArray(e) ? e : [e]
                    } else t = r;
                    return n = {}, t.forEach(e => {
                        let {
                            name: t
                        } = e, r = n[t];
                        r && !r.isDefaultInstance && e.isDefaultInstance || (n[t] = e)
                    }), Object.values(n)
                }({
                    integrations: e.integrations,
                    defaultIntegrations: i
                }),
                transport: e.transport || lX
            };
        return !0 === s.debug && ng(() => {
            console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
        }), rr().update(s.initialScope), lf(n = new lz(s)), n.init(), n
    }

    function uJ() {}

    function uG(e) {
        e()
    }

    function uK(e = {}) {
        let t = iP.document,
            n = t ? .head || t ? .body;
        if (!n) return;
        let r = rr(),
            i = rl(),
            s = i ? .getDsn();
        if (!s) return;
        let o = { ...e,
                user: { ...r.getUser(),
                    ...e.user
                },
                eventId: e.eventId || iE()
            },
            a = iP.document.createElement("script");
        a.async = !0, a.crossOrigin = "anonymous", a.src = function(e, t) {
            let n = r$(e);
            if (!n) return "";
            let r = `${iq(n)}embed/error-page/`,
                i = `dsn=${rL(n)}`;
            for (let e in t)
                if ("dsn" !== e && "onClose" !== e)
                    if ("user" === e) {
                        let e = t.user;
                        if (!e) continue;
                        e.name && (i += `&name=${encodeURIComponent(e.name)}`), e.email && (i += `&email=${encodeURIComponent(e.email)}`)
                    } else i += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
            return `${r}?${i}`
        }(s, o);
        let {
            onLoad: l,
            onClose: u
        } = o;
        if (l && (a.onload = l), u) {
            let e = t => {
                if ("__sentry_reportdialog_closed__" === t.data) try {
                    u()
                } finally {
                    iP.removeEventListener("message", e)
                }
            };
            iP.addEventListener("message", e)
        }
        n.appendChild(a)
    }
    let uY = new WeakMap,
        uX = (e = {}) => {
            let t = e.types || ["crash", "deprecation", "intervention"];

            function n(e) {
                if (uY.has(rl()))
                    for (let t of e) ro(e => {
                        e.setExtra("url", t.url);
                        let n = `ReportingObserver [${t.type}]`,
                            r = "No details available";
                        if (t.body) {
                            let n = {};
                            for (let e in t.body) n[e] = t.body[e];
                            if (e.setExtra("body", n), "crash" === t.type) {
                                let e = t.body;
                                r = [e.crashId || "", e.reason || ""].join(" ").trim() || r
                            } else r = t.body.message || r
                        }
                        im(`${n}: ${r}`)
                    })
            }
            return {
                name: "ReportingObserver",
                setupOnce() {
                    "ReportingObserver" in t3 && new t3.ReportingObserver(n, {
                        buffered: !0,
                        types: t
                    }).observe()
                },
                setup(e) {
                    uY.set(e, !0)
                }
            }
        };

    function uZ(e, t) {
        var n, r, i, s;
        let o, a = t ? .getDsn(),
            l = t ? .getOptions().tunnel;
        return n = e, r = a, !(!(o = ug(n)) || um(o)) && !!r && o.host.includes(r.host) && /(^|&|\?)sentry_key=/.test(o.search) || (i = e, !!(s = l) && uQ(i) === uQ(s))
    }

    function uQ(e) {
        return "/" === e[e.length - 1] ? e.slice(0, -1) : e
    }
    let u0 = (e = {}) => {
        let t = {
            failedRequestStatusCodes: [
                [500, 599]
            ],
            failedRequestTargets: [/.*/],
            ...e
        };
        return {
            name: "HttpClient",
            setup(e) {
                var n, r, i, s;
                n = e, r = t, lJ() && ul(e => {
                    if (rl() !== n) return;
                    let {
                        response: t,
                        args: i,
                        error: s,
                        virtualError: o
                    } = e, [a, l] = i;
                    t && function(e, t, n, r, i) {
                        if (u3(e, n.status, n.url)) {
                            var s, o;
                            let e, a, l, u, c = (s = t, !(o = r) && s instanceof Request || s instanceof Request && s.bodyUsed ? s : new Request(s, o));
                            u4() && ([e, l] = u1("Cookie", c), [a, u] = u1("Set-Cookie", n)), ig(u5({
                                url: c.url,
                                method: c.method,
                                status: n.status,
                                requestHeaders: e,
                                responseHeaders: a,
                                requestCookies: l,
                                responseCookies: u,
                                error: i,
                                type: "fetch"
                            }))
                        }
                    }(r, a, t, l, s || o)
                }, !1), i = e, s = t, "XMLHttpRequest" in t3 && uE(e => {
                    if (rl() !== i) return;
                    let {
                        error: t,
                        virtualError: n
                    } = e, r = e.xhr, o = r[uk];
                    if (!o) return;
                    let {
                        method: a,
                        request_headers: l
                    } = o;
                    try {
                        ! function(e, t, n, r, i) {
                            if (u3(e, t.status, t.responseURL)) {
                                let e, s, o;
                                if (u4()) {
                                    try {
                                        let e = t.getResponseHeader("Set-Cookie") || t.getResponseHeader("set-cookie") || void 0;
                                        e && (s = u2(e))
                                    } catch {}
                                    try {
                                        let e;
                                        o = (e = t.getAllResponseHeaders()) ? e.split("\r\n").reduce((e, t) => {
                                            let [n, r] = t.split(": ");
                                            return n && r && (e[n] = r), e
                                        }, {}) : {}
                                    } catch {}
                                    e = r
                                }
                                ig(u5({
                                    url: t.responseURL,
                                    method: n,
                                    status: t.status,
                                    requestHeaders: e,
                                    responseHeaders: o,
                                    responseCookies: s,
                                    error: i,
                                    type: "xhr"
                                }))
                            }
                        }(s, r, a, l, t || n)
                    } catch (e) {}
                })
            }
        }
    };

    function u1(e, t) {
        var n;
        let r, i, s = (n = t.headers, r = {}, n.forEach((e, t) => {
            r[t] = e
        }), r);
        try {
            let t = s[e] || s[e.toLowerCase()] || void 0;
            t && (i = u2(t))
        } catch {}
        return [s, i]
    }

    function u2(e) {
        return e.split("; ").reduce((e, t) => {
            let [n, r] = t.split("=");
            return n && r && (e[n] = r), e
        }, {})
    }

    function u3(e, t, n) {
        var r, i;
        return r = e.failedRequestStatusCodes, r.some(e => "number" == typeof e ? e === t : t >= e[0] && t <= e[1]) && (i = e.failedRequestTargets, i.some(e => "string" == typeof e ? n.includes(e) : e.test(n))) && !uZ(n, rl())
    }

    function u5(e) {
        let t = rl(),
            n = t && e.error && e.error instanceof Error ? e.error.stack : void 0,
            r = n && t ? t.getOptions().stackParser(n, 0, 1) : void 0,
            i = `HTTP Client Error with status code: ${e.status}`,
            s = {
                message: i,
                exception: {
                    values: [{
                        type: "Error",
                        value: i,
                        stacktrace: r ? {
                            frames: r
                        } : void 0
                    }]
                },
                request: {
                    url: e.url,
                    method: e.method,
                    headers: e.requestHeaders,
                    cookies: e.requestCookies
                },
                contexts: {
                    response: {
                        status_code: e.status,
                        headers: e.responseHeaders,
                        cookies: e.responseCookies,
                        body_size: function(e) {
                            if (e) {
                                let t = e["Content-Length"] || e["content-length"];
                                if (t) return parseInt(t, 10)
                            }
                        }(e.responseHeaders)
                    }
                }
            };
        return nz(s, {
            type: `auto.http.client.${e.type}`,
            handled: !1
        }), s
    }

    function u4() {
        let e = rl();
        return !!e && !!e.getOptions().sendDefaultPii
    }
    let u6 = (e = {}) => {
            let t = null != e.frameContextLines ? e.frameContextLines : 7;
            return {
                name: "ContextLines",
                processEvent: e => (function(e, t) {
                    let n = t3.document,
                        r = t3.location && uy(t3.location.href);
                    if (!n || !r) return e;
                    let i = e.exception ? .values;
                    if (!i ? .length) return e;
                    let s = n.documentElement.innerHTML;
                    if (!s) return e;
                    let o = ["<!DOCTYPE html>", "<html>", ...s.split("\n"), "</html>"];
                    return i.forEach(e => {
                        let n = e.stacktrace;
                        n ? .frames && (n.frames = n.frames.map(e => {
                            var n, i, s, a;
                            return n = e, i = o, s = r, a = t, n.filename === s && n.lineno && i.length && ! function(e, t, n = 5) {
                                if (void 0 === t.lineno) return;
                                let r = e.length,
                                    i = Math.max(Math.min(r - 1, t.lineno - 1), 0);
                                t.pre_context = e.slice(Math.max(0, i - n), i).map(e => nj(e, 0)), t.context_line = nj(e[Math.min(r - 1, i)], t.colno || 0), t.post_context = e.slice(Math.min(i + 1, r), i + 1 + n).map(e => nj(e, 0))
                            }(i, n, a), n
                        }))
                    }), e
                })(e, t)
            }
        },
        u8 = Symbol.for("sentry__originalRequestBody");

    function u7(e) {
        return new URLSearchParams(e).toString()
    }

    function u9(e, t = ny) {
        try {
            if ("string" == typeof e) return [e];
            if (e instanceof URLSearchParams) return [e.toString()];
            if (e instanceof FormData) return [u7(e)];
            if (!e) return [void 0]
        } catch (e) {
            return [void 0, "BODY_PARSE_ERROR"]
        }
        return [void 0, "UNPARSEABLE_BODY_TYPE"]
    }

    function ce(e = []) {
        if (e.length >= 2 && e[1] && "object" == typeof e[1] && "body" in e[1]) return e[1].body;
        if (e.length >= 1 && e[0] instanceof Request) {
            let t = e[0][u8];
            if (void 0 !== t) return t
        }
    }

    function ct(e) {
        let t;
        try {
            t = e.getAllResponseHeaders()
        } catch (e) {
            return {}
        }
        return t ? t.split("\r\n").reduce((e, t) => {
            let [n, r] = t.split(": ");
            return r && (e[n.toLowerCase()] = r), e
        }, {}) : {}
    }

    function cn(e) {
        if (co(e)) return `persisted ${e.operationName}`;
        if (cs(e)) {
            let {
                query: t,
                operationName: n
            } = e, {
                operationName: r = n,
                operationType: i
            } = function(e) {
                let t = e.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/);
                if (t) return {
                    operationType: t[1],
                    operationName: t[2]
                };
                let n = e.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/);
                return n ? {
                    operationType: n[1],
                    operationName: void 0
                } : {
                    operationType: void 0,
                    operationName: void 0
                }
            }(t);
            return r ? `${i} ${r}` : `${i}`
        }
        return "unknown"
    }

    function cr(e) {
        let t;
        if ("xhr" in e) {
            let n = e.xhr[uk];
            t = n && u9(n.body)[0]
        } else t = u9(ce(e.input))[0];
        return t
    }

    function ci(e) {
        return "object" == typeof e && null !== e
    }

    function cs(e) {
        return ci(e) && "string" == typeof e.query
    }

    function co(e) {
        return ci(e) && "string" == typeof e.operationName && ci(e.extensions) && ci(e.extensions.persistedQuery) && "string" == typeof e.extensions.persistedQuery.sha256Hash && "number" == typeof e.extensions.persistedQuery.version
    }

    function ca(e) {
        try {
            let t = JSON.parse(e);
            if (cs(t) || co(t)) return t;
            return
        } catch {
            return
        }
    }
    let cl = e => ({
        name: "GraphQLClient",
        setup(t) {
            var n, r, i, s;
            n = t, r = e, n.on("beforeOutgoingRequestSpan", (e, t) => {
                let n = r1(e).data || {};
                if ("http.client" !== n[rv]) return;
                let i = n["url.full"] || n["http.url"],
                    s = n["http.request.method"] || n["http.method"];
                if (!nn(i) || !nn(s)) return;
                let {
                    endpoints: o
                } = r, a = nB(i, o), l = cr(t);
                if (a && l) {
                    let t = ca(l);
                    if (t) {
                        let n = cn(t);
                        e.updateName(`${s} ${i} (${n})`), cs(t) && e.setAttribute("graphql.document", t.query), co(t) && (e.setAttribute("graphql.persisted_query.hash.sha256", t.extensions.persistedQuery.sha256Hash), e.setAttribute("graphql.persisted_query.version", t.extensions.persistedQuery.version))
                    }
                }
            }), i = t, s = e, i.on("beforeOutgoingRequestBreadcrumb", (e, t) => {
                let {
                    category: n,
                    type: r,
                    data: i
                } = e;
                if ("http" === r && ("fetch" === n || "xhr" === n)) {
                    let e = i ? .url,
                        {
                            endpoints: n
                        } = s,
                        r = nB(e, n),
                        o = cr(t);
                    if (r && i && o) {
                        let e = ca(o);
                        if (!i.graphql && e) {
                            let t = cn(e);
                            i["graphql.operation"] = t, cs(e) && (i["graphql.document"] = e.query), co(e) && (i["graphql.persisted_query.hash.sha256"] = e.extensions.persistedQuery.sha256Hash, i["graphql.persisted_query.version"] = e.extensions.persistedQuery.version)
                        }
                    }
                }
            })
        }
    });

    function cu() {
        let e;
        return "u" > typeof window && (!(!("u" > typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call("u" > typeof process ? process : 0)) || (e = t3.process, e ? .type === "renderer"))
    }
    let cc = (e, t, n, r) => {
            let i, s;
            return o => {
                if (t.value >= 0 && (o || r) && ((s = t.value - (i ? ? 0)) || void 0 === i)) {
                    var a;
                    i = t.value, t.delta = s, a = t.value, t.rating = a > n[1] ? "poor" : a > n[0] ? "needs-improvement" : "good", e(t)
                }
            }
        },
        cd = (e = !0) => {
            let t = t3.performance ? .getEntriesByType ? .("navigation")[0];
            if (!e || t && t.responseStart > 0 && t.responseStart < performance.now()) return t
        },
        cp = () => {
            let e = cd();
            return e ? .activationStart ? ? 0
        };

    function ch(e, t, n) {
        t3.document && t3.addEventListener(e, t, n)
    }

    function cf(e, t, n) {
        t3.document && t3.removeEventListener(e, t, n)
    }
    let cm = -1,
        cg = new Set,
        c_ = e => {
            if (("pagehide" === e.type || t3.document ? .visibilityState === "hidden") && cm > -1) {
                if ("visibilitychange" === e.type || "pagehide" === e.type)
                    for (let e of cg) e();
                isFinite(cm) || (cm = "visibilitychange" === e.type ? e.timeStamp : 0, cf("prerenderingchange", c_, !0))
            }
        },
        cy = () => {
            if (t3.document && cm < 0) {
                let e = cp();
                cm = (t3.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter(t => "hidden" === t.name && t.startTime > e)[0] ? .startTime) ? ? (t3.document ? .visibilityState !== "hidden" || t3.document ? .prerendering ? 1 / 0 : 0), ch("visibilitychange", c_, !0), ch("pagehide", c_, !0), ch("prerenderingchange", c_, !0)
            }
            return {
                get firstHiddenTime() {
                    return cm
                },
                onHidden(e) {
                    cg.add(e)
                }
            }
        },
        cv = (e, t = -1) => {
            let n = cd(),
                r = "navigate";
            return n && (t3.document ? .prerendering || cp() > 0 ? r = "prerender" : t3.document ? .wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
                name: e,
                value: t,
                rating: "good",
                delta: 0,
                entries: [],
                id: `v5-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`,
                navigationType: r
            }
        },
        cb = new WeakMap;

    function cS(e, t) {
        try {
            return cb.get(e) || cb.set(e, new t), cb.get(e)
        } catch (e) {
            return new t
        }
    }
    class cw {
        constructor() {
            cw.prototype.__init.call(this), cw.prototype.__init2.call(this)
        }
        __init() {
            this._sessionValue = 0
        }
        __init2() {
            this._sessionEntries = []
        }
        _processEntry(e) {
            if (e.hadRecentInput) return;
            let t = this._sessionEntries[0],
                n = this._sessionEntries[this._sessionEntries.length - 1];
            this._sessionValue && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this._sessionValue += e.value, this._sessionEntries.push(e)) : (this._sessionValue = e.value, this._sessionEntries = [e]), this._onAfterProcessingUnexpectedShift ? .(e)
        }
    }
    let ck = (e, t, n = {}) => {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    let r = new PerformanceObserver(e => {
                        Promise.resolve().then(() => {
                            t(e.getEntries())
                        })
                    });
                    return r.observe({
                        type: e,
                        buffered: !0,
                        ...n
                    }), r
                }
            } catch {}
        },
        cE = e => {
            let t = !1;
            return () => {
                t || (e(), t = !0)
            }
        },
        cx = e => {
            t3.document ? .prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e()
        },
        cC = [1800, 3e3],
        cI = [.1, .25],
        cT = 0,
        cM = 1 / 0,
        cA = 0,
        cR = e => {
            e.forEach(e => {
                e.interactionId && (cM = Math.min(cM, e.interactionId), cT = (cA = Math.max(cA, e.interactionId)) ? (cA - cM) / 7 + 1 : 0)
            })
        },
        cO = () => b ? cT : performance.interactionCount || 0,
        cL = 0;class cP {
        constructor() {
            cP.prototype.__init.call(this), cP.prototype.__init2.call(this)
        }
        __init() {
            this._longestInteractionList = []
        }
        __init2() {
            this._longestInteractionMap = new Map
        }
        _resetInteractions() {
            cL = cO(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear()
        }
        _estimateP98LongestInteraction() {
            let e = Math.min(this._longestInteractionList.length - 1, Math.floor((cO() - cL) / 50));
            return this._longestInteractionList[e]
        }
        _processEntry(e) {
            if (this._onBeforeProcessingEntry ? .(e), !(e.interactionId || "first-input" === e.entryType)) return;
            let t = this._longestInteractionList.at(-1),
                n = this._longestInteractionMap.get(e.interactionId);
            if (n || this._longestInteractionList.length < 10 || e.duration > t._latency) {
                if (n ? e.duration > n._latency ? (n.entries = [e], n._latency = e.duration) : e.duration === n._latency && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                        id: e.interactionId,
                        entries: [e],
                        _latency: e.duration
                    }, this._longestInteractionMap.set(n.id, n), this._longestInteractionList.push(n)), this._longestInteractionList.sort((e, t) => t._latency - e._latency), this._longestInteractionList.length > 10)
                    for (let e of this._longestInteractionList.splice(10)) this._longestInteractionMap.delete(e.id);
                this._onAfterProcessingINPCandidate ? .(n)
            }
        }
    }
    let cN = e => {
            let t = t3.requestIdleCallback || t3.setTimeout;
            t3.document ? .visibilityState === "hidden" ? e() : (ch("visibilitychange", e = cE(e), {
                once: !0,
                capture: !0
            }), ch("pagehide", e, {
                once: !0,
                capture: !0
            }), t(() => {
                e(), cf("visibilitychange", e, {
                    capture: !0
                }), cf("pagehide", e, {
                    capture: !0
                })
            }))
        },
        cD = [200, 500];class c$ {
        _processEntry(e) {
            this._onBeforeProcessingEntry ? .(e)
        }
    }
    let cj = [2500, 4e3],
        cF = [800, 1800],
        cU = e => {
            t3.document ? .prerendering ? cx(() => cU(e)) : t3.document ? .readyState !== "complete" ? addEventListener("load", () => cU(e), !0) : setTimeout(e)
        },
        cB = {},
        cW = {};

    function cq(e, t = !1) {
        return cZ("cls", e, cG, S, t)
    }

    function cH(e, t = !1) {
        return cZ("lcp", e, cK, w, t)
    }

    function cz(e) {
        return cZ("inp", e, cX, E)
    }

    function cV(e, t) {
        var n;
        let r;
        return cQ(e, t), cW[e] || (r = {}, "event" === (n = e) && (r.durationThreshold = 0), ck(n, e => {
            cJ(n, {
                entries: e
            })
        }, r), cW[e] = !0), c0(e, t)
    }

    function cJ(e, t) {
        let n = cB[e];
        if (n ? .length)
            for (let e of n) try {
                e(t)
            } catch (e) {}
    }

    function cG() {
        return ((e, t = {}) => {
            ((e, t = {}) => {
                cx(() => {
                    let n, r = cy(),
                        i = cv("FCP"),
                        s = ck("paint", e => {
                            for (let t of e) "first-contentful-paint" === t.name && (s.disconnect(), t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - cp(), 0), i.entries.push(t), n(!0)))
                        });
                    s && (n = cc(e, i, cC, t.reportAllChanges))
                })
            })(cE(() => {
                let n, r = cv("CLS", 0),
                    i = cy(),
                    s = cS(t, cw),
                    o = e => {
                        for (let t of e) s._processEntry(t);
                        s._sessionValue > r.value && (r.value = s._sessionValue, r.entries = s._sessionEntries, n())
                    },
                    a = ck("layout-shift", o);
                a && (n = cc(e, r, cI, t.reportAllChanges), i.onHidden(() => {
                    o(a.takeRecords()), n(!0)
                }), t3 ? .setTimeout ? .(n))
            }))
        })(e => {
            cJ("cls", {
                metric: e
            }), S = e
        }, {
            reportAllChanges: !0
        })
    }

    function cK() {
        return ((e, t = {}) => {
            cx(() => {
                let n, r = cy(),
                    i = cv("LCP"),
                    s = cS(t, c$),
                    o = e => {
                        for (let o of (t.reportAllChanges || (e = e.slice(-1)), e)) s._processEntry(o), o.startTime < r.firstHiddenTime && (i.value = Math.max(o.startTime - cp(), 0), i.entries = [o], n())
                    },
                    a = ck("largest-contentful-paint", o);
                if (a) {
                    n = cc(e, i, cj, t.reportAllChanges);
                    let r = cE(() => {
                            o(a.takeRecords()), a.disconnect(), n(!0)
                        }),
                        s = e => {
                            e.isTrusted && (cN(r), cf(e.type, s, {
                                capture: !0
                            }))
                        };
                    for (let e of ["keydown", "click", "visibilitychange"]) ch(e, s, {
                        capture: !0
                    })
                }
            })
        })(e => {
            cJ("lcp", {
                metric: e
            }), w = e
        }, {
            reportAllChanges: !0
        })
    }

    function cY() {
        return ((e, t = {}) => {
            let n = cv("TTFB"),
                r = cc(e, n, cF, t.reportAllChanges);
            cU(() => {
                let e = cd();
                e && (n.value = Math.max(e.responseStart - cp(), 0), n.entries = [e], r(!0))
            })
        })(e => {
            cJ("ttfb", {
                metric: e
            }), k = e
        })
    }

    function cX() {
        return ((e, t = {}) => {
            if (!(globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype)) return;
            let n = cy();
            cx(() => {
                let r;
                "interactionCount" in performance || b || (b = ck("event", cR, {
                    type: "event",
                    buffered: !0,
                    durationThreshold: 0
                }));
                let i = cv("INP"),
                    s = cS(t, cP),
                    o = e => {
                        cN(() => {
                            for (let t of e) s._processEntry(t);
                            let t = s._estimateP98LongestInteraction();
                            t && t._latency !== i.value && (i.value = t._latency, i.entries = t.entries, r())
                        })
                    },
                    a = ck("event", o, {
                        durationThreshold: t.durationThreshold ? ? 40
                    });
                r = cc(e, i, cD, t.reportAllChanges), a && (a.observe({
                    type: "first-input",
                    buffered: !0
                }), n.onHidden(() => {
                    o(a.takeRecords()), r(!0)
                }))
            })
        })(e => {
            cJ("inp", {
                metric: e
            }), E = e
        })
    }

    function cZ(e, t, n, r, i = !1) {
        let s;
        return cQ(e, t), cW[e] || (s = n(), cW[e] = !0), r && t({
            metric: r
        }), c0(e, t, i ? s : void 0)
    }

    function cQ(e, t) {
        cB[e] = cB[e] || [], cB[e].push(t)
    }

    function c0(e, t, n) {
        return () => {
            n && n();
            let r = cB[e];
            if (!r) return;
            let i = r.indexOf(t); - 1 !== i && r.splice(i, 1)
        }
    }
    let c1 = "sentryReplaySession",
        c2 = "Unable to send Replay";
    var c3 = Object.defineProperty,
        c5 = (e, t, n) => {
            let r;
            return (r = "symbol" != typeof t ? t + "" : t) in e ? c3(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[r] = n
        },
        c4 = ((N = c4 || {})[N.Document = 0] = "Document", N[N.DocumentType = 1] = "DocumentType", N[N.Element = 2] = "Element", N[N.Text = 3] = "Text", N[N.CDATA = 4] = "CDATA", N[N.Comment = 5] = "Comment", N);

    function c6(e) {
        let t = e ? .host;
        return t ? .shadowRoot === e
    }

    function c8(e) {
        return "[object ShadowRoot]" === Object.prototype.toString.call(e)
    }

    function c7(e) {
        try {
            var t;
            let n = e.rules || e.cssRules;
            return n ? ((t = Array.from(n, c9).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), t) : null
        } catch (e) {
            return null
        }
    }

    function c9(e) {
        let t;
        if ("styleSheet" in e) try {
            t = c7(e.styleSheet) || function(e) {
                let {
                    cssText: t
                } = e;
                if (t.split('"').length < 3) return t;
                let n = ["@import", `url(${JSON.stringify(e.href)})`];
                return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`), e.supportsText && n.push(`supports(${e.supportsText})`), e.media.length && n.push(e.media.mediaText), n.join(" ") + ";"
            }(e)
        } catch (e) {} else if ("selectorText" in e) {
            let t = e.cssText,
                n = e.selectorText.includes(":"),
                r = "string" == typeof e.style.all && e.style.all;
            if (r && (t = function(e) {
                    let t = "";
                    for (let n = 0; n < e.style.length; n++) {
                        let r = e.style,
                            i = r[n],
                            s = r.getPropertyPriority(i);
                        t += `${i}:${r.getPropertyValue(i)}${s?" !important":""};`
                    }
                    return `${e.selectorText} { ${t} }`
                }(e)), n && (t = t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")), n || r) return t
        }
        return t || e.cssText
    }
    class de {
        constructor() {
            c5(this, "idNodeMap", new Map), c5(this, "nodeMetaMap", new WeakMap)
        }
        getId(e) {
            return e ? this.getMeta(e) ? .id ? ? -1 : -1
        }
        getNode(e) {
            return this.idNodeMap.get(e) || null
        }
        getIds() {
            return Array.from(this.idNodeMap.keys())
        }
        getMeta(e) {
            return this.nodeMetaMap.get(e) || null
        }
        removeNodeFromMap(e) {
            let t = this.getId(e);
            this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
        }
        has(e) {
            return this.idNodeMap.has(e)
        }
        hasNode(e) {
            return this.nodeMetaMap.has(e)
        }
        add(e, t) {
            let n = t.id;
            this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
        }
        replace(e, t) {
            let n = this.getNode(e);
            if (n) {
                let e = this.nodeMetaMap.get(n);
                e && this.nodeMetaMap.set(t, e)
            }
            this.idNodeMap.set(e, t)
        }
        reset() {
            this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
    }

    function dt({
        maskInputOptions: e,
        tagName: t,
        type: n
    }) {
        return "OPTION" === t && (t = "SELECT"), !!(e[t.toLowerCase()] || n && e[n] || "password" === n || "INPUT" === t && !n && e.text)
    }

    function dn({
        isMasked: e,
        element: t,
        value: n,
        maskInputFn: r
    }) {
        let i = n || "";
        return e ? (r && (i = r(i, t)), "*".repeat(i.length)) : i
    }

    function dr(e) {
        return e.toLowerCase()
    }

    function di(e) {
        return e.toUpperCase()
    }
    let ds = "__rrweb_original__";

    function da(e) {
        let t = e.type;
        return e.hasAttribute("data-rr-is-password") ? "password" : t ? dr(t) : null
    }

    function dl(e, t, n) {
        return "INPUT" === t && ("radio" === n || "checkbox" === n) ? e.getAttribute("value") || "" : e.value
    }

    function du(e, t) {
        let n;
        try {
            n = new URL(e, t ? ? window.location.href)
        } catch (e) {
            return null
        }
        let r = n.pathname.match(/\.([0-9a-z]+)(?:$)/i);
        return r ? .[1] ? ? null
    }
    let dc = {};

    function dd(e) {
        let t = dc[e];
        if (t) return t;
        let n = window.document,
            r = window[e];
        if (n && "function" == typeof n.createElement) try {
            let t = n.createElement("iframe");
            t.hidden = !0, n.head.appendChild(t);
            let i = t.contentWindow;
            i && i[e] && (r = i[e]), n.head.removeChild(t)
        } catch (e) {}
        return dc[e] = r.bind(window)
    }

    function dp(...e) {
        return dd("setTimeout")(...e)
    }

    function dh(...e) {
        return dd("clearTimeout")(...e)
    }

    function df(e) {
        try {
            return e.contentDocument
        } catch (e) {}
    }
    let dm = 1,
        dg = RegExp("[^a-z0-9-_:]");

    function d_() {
        return dm++
    }
    let dy = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        dv = /^(?:[a-z+]+:)?\/\//i,
        db = /^www\..*/i,
        dS = /^(data:)([^,]*),(.*)/i;

    function dw(e, t) {
        return (e || "").replace(dy, (e, n, r, i, s, o) => {
            let a = r || s || o,
                l = n || i || "";
            if (!a) return e;
            if (dv.test(a) || db.test(a) || dS.test(a)) return `url(${l}${a}${l})`;
            if ("/" === a[0]) return `url(${l}${(t.indexOf("//")>-1?t.split("/").slice(0,3).join("/"):t.split("/")[0]).split("?")[0]+a}${l})`;
            let u = t.split("/"),
                c = a.split("/");
            for (let e of (u.pop(), c))
                if ("." === e) continue;
                else ".." === e ? u.pop() : u.push(e);
            return `url(${l}${u.join("/")}${l})`
        })
    }
    let dk = /^[^ \t\n\r\u000c]+/,
        dE = /^[, \t\n\r\u000c]+/,
        dx = new WeakMap;

    function dC(e, t) {
        return t && "" !== t.trim() ? dI(e, t) : t
    }

    function dI(e, t) {
        let n = dx.get(e);
        if (n || (n = e.createElement("a"), dx.set(e, n)), t) {
            if (t.startsWith("blob:") || t.startsWith("data:")) return t
        } else t = "";
        return n.setAttribute("href", t), n.href
    }

    function dT(e, t, n, r, i, s, o) {
        if (!r) return r;
        if ("src" === n || "href" === n && ("use" !== t || "#" !== r[0]) || "xlink:href" === n && "#" !== r[0]) return dC(e, r);
        if ("background" === n && ("table" === t || "td" === t || "th" === t)) return dC(e, r);
        if ("srcset" === n) return function(e, t) {
            if ("" === t.trim()) return t;
            let n = 0;

            function r(e) {
                let r, i = e.exec(t.substring(n));
                return i ? (r = i[0], n += r.length, r) : ""
            }
            let i = [];
            for (; r(dE), !(n >= t.length);) {
                let s = r(dk);
                if ("," === s.slice(-1)) s = dC(e, s.substring(0, s.length - 1)), i.push(s);
                else {
                    let r = "";
                    s = dC(e, s);
                    let o = !1;
                    for (;;) {
                        let e = t.charAt(n);
                        if ("" === e) {
                            i.push((s + r).trim());
                            break
                        }
                        if (o) ")" === e && (o = !1);
                        else if ("," === e) {
                            n += 1, i.push((s + r).trim());
                            break
                        } else "(" === e && (o = !0);
                        r += e, n += 1
                    }
                }
            }
            return i.join(", ")
        }(e, r);
        if ("style" === n) {
            let t = dw(r, dI(e));
            return o && o.size > 0 && (t = function(e, t) {
                if (!e || 0 === t.size) return e;
                try {
                    let n = e.split(";"),
                        r = [];
                    for (let e of n) {
                        if (!(e = e.trim())) continue;
                        let n = e.indexOf(":");
                        if (-1 === n) {
                            r.push(e);
                            continue
                        }
                        let i = e.slice(0, n).trim();
                        t.has(i) || r.push(e)
                    }
                    return r.join("; ") + (r.length > 0 && e.endsWith(";") ? ";" : "")
                } catch (t) {
                    return console.warn("Error filtering CSS properties:", t), e
                }
            }(t, o)), t
        } else if ("object" === t && "data" === n) return dC(e, r);
        return "function" == typeof s ? s(n, r, i) : r
    }

    function dM(e, t, n) {
        return ("video" === e || "audio" === e) && "autoplay" === t
    }

    function dA(e, t, n = 1 / 0, r = 0) {
        return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : dA(e.parentNode, t, n, r + 1)
    }

    function dR(e, t) {
        return n => {
            if (null === n) return !1;
            try {
                if (e) {
                    if ("string" == typeof e) {
                        if (n.matches(`.${e}`)) return !0
                    } else if (function(e, t) {
                            for (let n = e.classList.length; n--;) {
                                let r = e.classList[n];
                                if (t.test(r)) return !0
                            }
                            return !1
                        }(n, e)) return !0
                }
                if (t && n.matches(t)) return !0;
                return !1
            } catch {
                return !1
            }
        }
    }

    function dO(e, t, n, r, i, s) {
        try {
            let o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
            if (null === o) return !1;
            if ("INPUT" === o.tagName) {
                let e = o.getAttribute("autocomplete");
                if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e)) return !0
            }
            let a = -1,
                l = -1;
            if (s) {
                if ((l = dA(o, dR(r, i))) < 0) return !0;
                a = dA(o, dR(t, n), l >= 0 ? l : 1 / 0)
            } else {
                if ((a = dA(o, dR(t, n))) < 0) return !1;
                l = dA(o, dR(r, i), a >= 0 ? a : 1 / 0)
            }
            return a >= 0 ? !(l >= 0) || a <= l : !(l >= 0) && !!s
        } catch (e) {}
        return !!s
    }

    function dL(e) {
        return null == e ? "" : e.toLowerCase()
    }

    function dP(e, t) {
        let n, {
                doc: r,
                mirror: i,
                blockClass: s,
                blockSelector: o,
                unblockSelector: a,
                maskAllText: l,
                maskTextClass: u,
                unmaskTextClass: c,
                maskTextSelector: d,
                unmaskTextSelector: p,
                skipChild: h = !1,
                inlineStylesheet: f = !0,
                maskInputOptions: m = {},
                maskAttributeFn: g,
                maskTextFn: _,
                maskInputFn: y,
                slimDOMOptions: v,
                dataURLOptions: b = {},
                inlineImages: S = !1,
                recordCanvas: w = !1,
                onSerialize: k,
                onIframeLoad: E,
                iframeLoadTimeout: I = 5e3,
                onBlockedImageLoad: T,
                onStylesheetLoad: M,
                stylesheetLoadTimeout: A = 5e3,
                keepIframeSrcFn: R = () => !1,
                newlyAddedElement: O = !1,
                ignoreCSSAttributes: L
            } = t,
            {
                preserveWhiteSpace: P = !0
            } = t,
            N = function(e, t) {
                let {
                    doc: n,
                    mirror: r,
                    blockClass: i,
                    blockSelector: s,
                    unblockSelector: o,
                    maskAllText: a,
                    maskAttributeFn: l,
                    maskTextClass: u,
                    unmaskTextClass: c,
                    maskTextSelector: d,
                    unmaskTextSelector: p,
                    inlineStylesheet: h,
                    maskInputOptions: f = {},
                    maskTextFn: m,
                    maskInputFn: g,
                    dataURLOptions: _ = {},
                    inlineImages: y,
                    recordCanvas: v,
                    keepIframeSrcFn: b,
                    newlyAddedElement: S = !1,
                    ignoreCSSAttributes: w
                } = t, k = function(e, t) {
                    if (!t.hasNode(e)) return;
                    let n = t.getId(e);
                    return 1 === n ? void 0 : n
                }(n, r);
                switch (e.nodeType) {
                    case e.DOCUMENT_NODE:
                        if ("CSS1Compat" !== e.compatMode) return {
                            type: c4.Document,
                            childNodes: [],
                            compatMode: e.compatMode
                        };
                        return {
                            type: c4.Document,
                            childNodes: []
                        };
                    case e.DOCUMENT_TYPE_NODE:
                        return {
                            type: c4.DocumentType,
                            name: e.name,
                            publicId: e.publicId,
                            systemId: e.systemId,
                            rootId: k
                        };
                    case e.ELEMENT_NODE:
                        return function(e, t) {
                            let n, {
                                    doc: r,
                                    blockClass: i,
                                    blockSelector: s,
                                    unblockSelector: o,
                                    inlineStylesheet: a,
                                    maskInputOptions: l = {},
                                    maskAttributeFn: u,
                                    maskInputFn: c,
                                    dataURLOptions: d = {},
                                    inlineImages: p,
                                    recordCanvas: h,
                                    keepIframeSrcFn: f,
                                    newlyAddedElement: m = !1,
                                    rootId: g,
                                    maskTextClass: _,
                                    unmaskTextClass: y,
                                    maskTextSelector: v,
                                    unmaskTextSelector: b,
                                    ignoreCSSAttributes: S
                                } = t,
                                w = function(e, t, n, r) {
                                    try {
                                        if (r && e.matches(r)) return !1;
                                        if ("string" == typeof t) {
                                            if (e.classList.contains(t)) return !0
                                        } else
                                            for (let n = e.classList.length; n--;) {
                                                let r = e.classList[n];
                                                if (t.test(r)) return !0
                                            }
                                        if (n) return e.matches(n)
                                    } catch (e) {}
                                    return !1
                                }(e, i, s, o),
                                k = function(e) {
                                    if (e instanceof HTMLFormElement) return "form";
                                    let t = dr(e.tagName);
                                    return dg.test(t) ? "div" : t
                                }(e),
                                E = {},
                                I = e.attributes.length;
                            for (let t = 0; t < I; t++) {
                                let n = e.attributes[t];
                                n.name && !dM(k, n.name, n.value) && (E[n.name] = dT(r, k, dr(n.name), n.value, e, u, S))
                            }
                            if ("link" === k && a) {
                                let t = Array.from(r.styleSheets).find(t => t.href === e.href),
                                    n = null;
                                t && (n = c7(t)), n && (E.rel = null, E.href = null, E.crossorigin = null, E._cssText = dw(n, t.href))
                            }
                            if ("style" === k && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                                let t = c7(e.sheet);
                                t && (E._cssText = dw(t, dI(r)))
                            }
                            if ("input" === k || "textarea" === k || "select" === k || "option" === k) {
                                let t = da(e),
                                    n = dl(e, di(k), t),
                                    r = e.checked;
                                if ("submit" !== t && "button" !== t && n) {
                                    let r = dO(e, _, v, y, b, dt({
                                        type: t,
                                        tagName: di(k),
                                        maskInputOptions: l
                                    }));
                                    E.value = dn({
                                        isMasked: r,
                                        element: e,
                                        value: n,
                                        maskInputFn: c
                                    })
                                }
                                r && (E.checked = r)
                            }
                            if ("option" === k && (e.selected && !l.select ? E.selected = !0 : delete E.selected), "canvas" === k && h) {
                                if ("2d" === e.__context) ! function(e) {
                                    let t = e.getContext("2d");
                                    if (!t) return !0;
                                    for (let n = 0; n < e.width; n += 50)
                                        for (let r = 0; r < e.height; r += 50) {
                                            let i = t.getImageData;
                                            if (new Uint32Array((ds in i ? i[ds] : i).call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some(e => 0 !== e)) return !1
                                        }
                                    return !0
                                }(e) && (E.rr_dataURL = e.toDataURL(d.type, d.quality));
                                else if (!("__context" in e)) {
                                    let t = e.toDataURL(d.type, d.quality),
                                        n = r.createElement("canvas");
                                    n.width = e.width, n.height = e.height, t !== n.toDataURL(d.type, d.quality) && (E.rr_dataURL = t)
                                }
                            }
                            if ("img" === k && p) {
                                x || (C = (x = r.createElement("canvas")).getContext("2d"));
                                let t = e.currentSrc || e.getAttribute("src") || "<unknown-src>",
                                    n = e.crossOrigin,
                                    i = () => {
                                        e.removeEventListener("load", i);
                                        try {
                                            x.width = e.naturalWidth, x.height = e.naturalHeight, C.drawImage(e, 0, 0), E.rr_dataURL = x.toDataURL(d.type, d.quality)
                                        } catch (n) {
                                            if ("anonymous" !== e.crossOrigin) {
                                                e.crossOrigin = "anonymous", e.complete && 0 !== e.naturalWidth ? i() : e.addEventListener("load", i);
                                                return
                                            }
                                            console.warn(`Cannot inline img src=${t}! Error: ${n}`)
                                        }
                                        "anonymous" === e.crossOrigin && (n ? E.crossOrigin = n : e.removeAttribute("crossorigin"))
                                    };
                                e.complete && 0 !== e.naturalWidth ? i() : e.addEventListener("load", i)
                            }
                            if (("audio" === k || "video" === k) && (E.rr_mediaState = e.paused ? "paused" : "played", E.rr_mediaCurrentTime = e.currentTime), !m && (e.scrollLeft && (E.rr_scrollLeft = e.scrollLeft), e.scrollTop && (E.rr_scrollTop = e.scrollTop)), w) {
                                let {
                                    width: t,
                                    height: n
                                } = e.getBoundingClientRect();
                                E = {
                                    class: E.class,
                                    rr_width: `${t}px`,
                                    rr_height: `${n}px`
                                }
                            }
                            "iframe" !== k || f(E.src) || (w || df(e) || (E.rr_src = E.src), delete E.src);
                            try {
                                customElements.get(k) && (n = !0)
                            } catch (e) {}
                            return {
                                type: c4.Element,
                                tagName: k,
                                attributes: E,
                                childNodes: [],
                                isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                                needBlock: w,
                                rootId: g,
                                isCustom: n
                            }
                        }(e, {
                            doc: n,
                            blockClass: i,
                            blockSelector: s,
                            unblockSelector: o,
                            inlineStylesheet: h,
                            maskAttributeFn: l,
                            maskInputOptions: f,
                            maskInputFn: g,
                            dataURLOptions: _,
                            inlineImages: y,
                            recordCanvas: v,
                            keepIframeSrcFn: b,
                            newlyAddedElement: S,
                            rootId: k,
                            maskTextClass: u,
                            unmaskTextClass: c,
                            maskTextSelector: d,
                            unmaskTextSelector: p,
                            ignoreCSSAttributes: w
                        });
                    case e.TEXT_NODE:
                        return function(e, t) {
                            let {
                                maskAllText: n,
                                maskTextClass: r,
                                unmaskTextClass: i,
                                maskTextSelector: s,
                                unmaskTextSelector: o,
                                maskTextFn: a,
                                maskInputOptions: l,
                                maskInputFn: u,
                                rootId: c
                            } = t, d = e.parentNode && e.parentNode.tagName, p = e.textContent, h = "STYLE" === d || void 0, f = "SCRIPT" === d || void 0, m = "TEXTAREA" === d || void 0;
                            if (h && p) {
                                try {
                                    e.nextSibling || e.previousSibling || e.parentNode.sheet ? .cssRules && (p = c7(e.parentNode.sheet))
                                } catch (t) {
                                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                                }
                                p = dw(p, dI(t.doc))
                            }
                            f && (p = "SCRIPT_PLACEHOLDER");
                            let g = dO(e, r, s, i, o, n);
                            return h || f || m || !p || !g || (p = a ? a(p, e.parentElement) : p.replace(/[\S]/g, "*")), m && p && (l.textarea || g) && (p = u ? u(p, e.parentNode) : p.replace(/[\S]/g, "*")), "OPTION" === d && p && (p = dn({
                                isMasked: dO(e, r, s, i, o, dt({
                                    type: null,
                                    tagName: d,
                                    maskInputOptions: l
                                })),
                                element: e,
                                value: p,
                                maskInputFn: u
                            })), {
                                type: c4.Text,
                                textContent: p || "",
                                isStyle: h,
                                rootId: c
                            }
                        }(e, {
                            doc: n,
                            maskAllText: a,
                            maskTextClass: u,
                            unmaskTextClass: c,
                            maskTextSelector: d,
                            unmaskTextSelector: p,
                            maskTextFn: m,
                            maskInputOptions: f,
                            maskInputFn: g,
                            rootId: k
                        });
                    case e.CDATA_SECTION_NODE:
                        return {
                            type: c4.CDATA,
                            textContent: "",
                            rootId: k
                        };
                    case e.COMMENT_NODE:
                        return {
                            type: c4.Comment,
                            textContent: e.textContent || "",
                            rootId: k
                        };
                    default:
                        return !1
                }
            }(e, {
                doc: r,
                mirror: i,
                blockClass: s,
                blockSelector: o,
                maskAllText: l,
                unblockSelector: a,
                maskTextClass: u,
                unmaskTextClass: c,
                maskTextSelector: d,
                unmaskTextSelector: p,
                inlineStylesheet: f,
                maskInputOptions: m,
                maskAttributeFn: g,
                maskTextFn: _,
                maskInputFn: y,
                dataURLOptions: b,
                inlineImages: S,
                recordCanvas: w,
                keepIframeSrcFn: R,
                newlyAddedElement: O,
                ignoreCSSAttributes: L
            });
        if (!N) return console.warn(e, "not serialized"), null;
        n = i.hasNode(e) ? i.getId(e) : ! function(e, t) {
            if (t.comment && e.type === c4.Comment) return !0;
            if (e.type === c4.Element) {
                if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === du(e.attributes.href))) return !0;
                else if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (dL(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === dL(e.attributes.name) || "icon" === dL(e.attributes.rel) || "apple-touch-icon" === dL(e.attributes.rel) || "shortcut icon" === dL(e.attributes.rel)))) return !0;
                else if ("meta" === e.tagName) {
                    if (t.headMetaDescKeywords && dL(e.attributes.name).match(/^description|keywords$/)) return !0;
                    else if (t.headMetaSocial && (dL(e.attributes.property).match(/^(og|twitter|fb):/) || dL(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === dL(e.attributes.name))) return !0;
                    else if (t.headMetaRobots && ("robots" === dL(e.attributes.name) || "googlebot" === dL(e.attributes.name) || "bingbot" === dL(e.attributes.name))) return !0;
                    else if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                    else if (t.headMetaAuthorship && ("author" === dL(e.attributes.name) || "generator" === dL(e.attributes.name) || "framework" === dL(e.attributes.name) || "publisher" === dL(e.attributes.name) || "progid" === dL(e.attributes.name) || dL(e.attributes.property).match(/^article:/) || dL(e.attributes.property).match(/^product:/))) return !0;
                    else if (t.headMetaVerification && ("google-site-verification" === dL(e.attributes.name) || "yandex-verification" === dL(e.attributes.name) || "csrf-token" === dL(e.attributes.name) || "p:domain_verify" === dL(e.attributes.name) || "verify-v1" === dL(e.attributes.name) || "verification" === dL(e.attributes.name) || "shopify-checkout-api-token" === dL(e.attributes.name))) return !0
                }
            }
            return !1
        }(N, v) && (P || N.type !== c4.Text || N.isStyle || N.textContent.replace(/^\s+|\s+$/gm, "").length) ? d_() : -2;
        let D = Object.assign(N, {
            id: n
        });
        if (i.add(e, D), -2 === n) return null;
        k && k(e);
        let $ = !h;
        if (D.type === c4.Element) {
            $ = $ && !D.needBlock;
            let t = e.shadowRoot;
            t && c8(t) && (D.isShadowHost = !0)
        }
        if ((D.type === c4.Document || D.type === c4.Element) && $) {
            v.headWhitespace && D.type === c4.Element && "head" === D.tagName && (P = !1);
            let t = {
                doc: r,
                mirror: i,
                blockClass: s,
                blockSelector: o,
                maskAllText: l,
                unblockSelector: a,
                maskTextClass: u,
                unmaskTextClass: c,
                maskTextSelector: d,
                unmaskTextSelector: p,
                skipChild: h,
                inlineStylesheet: f,
                maskInputOptions: m,
                maskAttributeFn: g,
                maskTextFn: _,
                maskInputFn: y,
                slimDOMOptions: v,
                dataURLOptions: b,
                inlineImages: S,
                recordCanvas: w,
                preserveWhiteSpace: P,
                onSerialize: k,
                onIframeLoad: E,
                iframeLoadTimeout: I,
                onBlockedImageLoad: T,
                onStylesheetLoad: M,
                stylesheetLoadTimeout: A,
                keepIframeSrcFn: R,
                ignoreCSSAttributes: L
            };
            for (let n of e.childNodes ? Array.from(e.childNodes) : []) {
                let e = dP(n, t);
                e && D.childNodes.push(e)
            }
            if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
                for (let n of Array.from(e.shadowRoot.childNodes)) {
                    let r = dP(n, t);
                    r && (c8(e.shadowRoot) && (r.isShadow = !0), D.childNodes.push(r))
                }
        }
        if (e.parentNode && c6(e.parentNode) && c8(e.parentNode) && (D.isShadow = !0), D.type !== c4.Element || "iframe" !== D.tagName || D.needBlock || function(e, t, n) {
                let r, i = e.contentWindow;
                if (!i) return;
                let s = !1;
                try {
                    r = i.document.readyState
                } catch (e) {
                    return
                }
                if ("complete" !== r) {
                    let r = dp(() => {
                        s || (t(), s = !0)
                    }, n);
                    e.addEventListener("load", () => {
                        dh(r), s = !0, t()
                    });
                    return
                }
                let o = "about:blank";
                if (i.location.href !== o || e.src === o || "" === e.src) return dp(t, 0), e.addEventListener("load", t);
                e.addEventListener("load", t)
            }(e, () => {
                let t = df(e);
                if (t && E) {
                    let n = dP(t, {
                        doc: t,
                        mirror: i,
                        blockClass: s,
                        blockSelector: o,
                        unblockSelector: a,
                        maskAllText: l,
                        maskTextClass: u,
                        unmaskTextClass: c,
                        maskTextSelector: d,
                        unmaskTextSelector: p,
                        skipChild: !1,
                        inlineStylesheet: f,
                        maskInputOptions: m,
                        maskAttributeFn: g,
                        maskTextFn: _,
                        maskInputFn: y,
                        slimDOMOptions: v,
                        dataURLOptions: b,
                        inlineImages: S,
                        recordCanvas: w,
                        preserveWhiteSpace: P,
                        onSerialize: k,
                        onIframeLoad: E,
                        iframeLoadTimeout: I,
                        onStylesheetLoad: M,
                        stylesheetLoadTimeout: A,
                        keepIframeSrcFn: R,
                        ignoreCSSAttributes: L
                    });
                    n && E(e, n)
                }
            }, I), D.type === c4.Element && "img" === D.tagName && !e.complete && D.needBlock) {
            let t = () => {
                if (e.isConnected && !e.complete && T) try {
                    let t = e.getBoundingClientRect();
                    t.width > 0 && t.height > 0 && T(e, D, t)
                } catch (e) {}
                e.removeEventListener("load", t)
            };
            e.isConnected && e.addEventListener("load", t)
        }
        return D.type === c4.Element && "link" === D.tagName && "string" == typeof D.attributes.rel && ("stylesheet" === D.attributes.rel || "preload" === D.attributes.rel && "string" == typeof D.attributes.href && "css" === du(D.attributes.href)) && function(e, t, n) {
            let r, i = !1;
            try {
                r = e.sheet
            } catch (e) {
                return
            }
            if (r) return;
            let s = dp(() => {
                i || (t(), i = !0)
            }, n);
            e.addEventListener("load", () => {
                dh(s), i = !0, t()
            })
        }(e, () => {
            if (M) {
                let t = dP(e, {
                    doc: r,
                    mirror: i,
                    blockClass: s,
                    blockSelector: o,
                    unblockSelector: a,
                    maskAllText: l,
                    maskTextClass: u,
                    unmaskTextClass: c,
                    maskTextSelector: d,
                    unmaskTextSelector: p,
                    skipChild: !1,
                    inlineStylesheet: f,
                    maskInputOptions: m,
                    maskAttributeFn: g,
                    maskTextFn: _,
                    maskInputFn: y,
                    slimDOMOptions: v,
                    dataURLOptions: b,
                    inlineImages: S,
                    recordCanvas: w,
                    preserveWhiteSpace: P,
                    onSerialize: k,
                    onIframeLoad: E,
                    iframeLoadTimeout: I,
                    onStylesheetLoad: M,
                    stylesheetLoadTimeout: A,
                    keepIframeSrcFn: R,
                    ignoreCSSAttributes: L
                });
                t && M(e, t)
            }
        }, A), D.type === c4.Element && delete D.needBlock, D
    }

    function dN(e, t, n = document) {
        let r = {
            capture: !0,
            passive: !0
        };
        return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
    }
    let dD = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        d$ = {
            map: {},
            getId: () => (console.error(dD), -1),
            getNode: () => (console.error(dD), null),
            removeNodeFromMap() {
                console.error(dD)
            },
            has: () => (console.error(dD), !1),
            reset() {
                console.error(dD)
            }
        };

    function dj(e, t, n = {}) {
        let r = null,
            i = 0;
        return function(...s) {
            let o = Date.now();
            i || !1 !== n.leading || (i = o);
            let a = t - (o - i),
                l = this;
            a <= 0 || a > t ? (r && (function(...e) {
                d1("clearTimeout")(...e)
            }(r), r = null), i = o, e.apply(l, s)) : r || !1 === n.trailing || (r = d2(() => {
                i = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(l, s)
            }, a))
        }
    }

    function dF(e, t, n) {
        try {
            if (!(t in e)) return () => {};
            let r = e[t],
                i = n(r);
            return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
                __rrweb_original__: {
                    enumerable: !1,
                    value: r
                }
            })), e[t] = i, () => {
                e[t] = r
            }
        } catch {
            return () => {}
        }
    }
    "u" > typeof window && window.Proxy && window.Reflect && (d$ = new Proxy(d$, {
        get: (e, t, n) => ("map" === t && console.error(dD), Reflect.get(e, t, n))
    }));
    let dU = Date.now;

    function dB(e) {
        let t = e.document;
        return {
            left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : t ? .documentElement.scrollLeft || t ? .body ? .parentElement ? .scrollLeft || t ? .body ? .scrollLeft || 0,
            top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : t ? .documentElement.scrollTop || t ? .body ? .parentElement ? .scrollTop || t ? .body ? .scrollTop || 0
        }
    }

    function dW() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function dq() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function dH(e) {
        if (!e) return null;
        try {
            return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
        } catch (e) {
            return null
        }
    }

    function dz(e, t, n, r, i) {
        if (!e) return !1;
        let s = dH(e);
        if (!s) return !1;
        let o = dR(t, n);
        if (!i) {
            let e = r && s.matches(r);
            return o(s) && !e
        }
        let a = dA(s, o),
            l = -1;
        return !(a < 0) && (r && (l = dA(s, dR(null, r))), a > -1 && l < 0 || a < l)
    }

    function dV(e, t) {
        return -2 === t.getId(e)
    }

    function dJ(e) {
        return !!e.changedTouches
    }

    function dG(e, t) {
        return !!("IFRAME" === e.nodeName && t.getMeta(e))
    }

    function dK(e, t) {
        return !!("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
    }

    function dY(e) {
        return !!e ? .shadowRoot
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (dU = () => new Date().getTime());class dX {
        constructor() {
            this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
        }
        getId(e) {
            return this.styleIDMap.get(e) ? ? -1
        }
        has(e) {
            return this.styleIDMap.has(e)
        }
        add(e, t) {
            let n;
            return this.has(e) ? this.getId(e) : (n = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n)
        }
        getStyle(e) {
            return this.idStyleMap.get(e) || null
        }
        reset() {
            this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
            return this.id++
        }
    }

    function dZ(e) {
        let t = null;
        return e.getRootNode ? .() ? .nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t
    }

    function dQ(e) {
        let t = e.ownerDocument;
        return !!t && (t.contains(e) || function(e) {
            let t = e.ownerDocument;
            if (!t) return !1;
            let n = function(e) {
                let t, n = e;
                for (; t = dZ(n);) n = t;
                return n
            }(e);
            return t.contains(n)
        }(e))
    }
    let d0 = {};

    function d1(e) {
        let t = d0[e];
        if (t) return t;
        let n = window.document,
            r = window[e];
        if (n && "function" == typeof n.createElement) try {
            let t = n.createElement("iframe");
            t.hidden = !0, n.head.appendChild(t);
            let i = t.contentWindow;
            i && i[e] && (r = i[e]), n.head.removeChild(t)
        } catch (e) {}
        return d0[e] = r.bind(window)
    }

    function d2(...e) {
        return d1("setTimeout")(...e)
    }
    var d3 = ((D = d3 || {})[D.DomContentLoaded = 0] = "DomContentLoaded", D[D.Load = 1] = "Load", D[D.FullSnapshot = 2] = "FullSnapshot", D[D.IncrementalSnapshot = 3] = "IncrementalSnapshot", D[D.Meta = 4] = "Meta", D[D.Custom = 5] = "Custom", D[D.Plugin = 6] = "Plugin", D),
        d5 = (($ = d5 || {})[$.Mutation = 0] = "Mutation", $[$.MouseMove = 1] = "MouseMove", $[$.MouseInteraction = 2] = "MouseInteraction", $[$.Scroll = 3] = "Scroll", $[$.ViewportResize = 4] = "ViewportResize", $[$.Input = 5] = "Input", $[$.TouchMove = 6] = "TouchMove", $[$.MediaInteraction = 7] = "MediaInteraction", $[$.StyleSheetRule = 8] = "StyleSheetRule", $[$.CanvasMutation = 9] = "CanvasMutation", $[$.Font = 10] = "Font", $[$.Log = 11] = "Log", $[$.Drag = 12] = "Drag", $[$.StyleDeclaration = 13] = "StyleDeclaration", $[$.Selection = 14] = "Selection", $[$.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", $[$.CustomElement = 16] = "CustomElement", $),
        d4 = ((j = d4 || {})[j.MouseUp = 0] = "MouseUp", j[j.MouseDown = 1] = "MouseDown", j[j.Click = 2] = "Click", j[j.ContextMenu = 3] = "ContextMenu", j[j.DblClick = 4] = "DblClick", j[j.Focus = 5] = "Focus", j[j.Blur = 6] = "Blur", j[j.TouchStart = 7] = "TouchStart", j[j.TouchMove_Departed = 8] = "TouchMove_Departed", j[j.TouchEnd = 9] = "TouchEnd", j[j.TouchCancel = 10] = "TouchCancel", j),
        d6 = ((F = d6 || {})[F.Mouse = 0] = "Mouse", F[F.Pen = 1] = "Pen", F[F.Touch = 2] = "Touch", F),
        d8 = ((U = d8 || {})[U.Play = 0] = "Play", U[U.Pause = 1] = "Pause", U[U.Seeked = 2] = "Seeked", U[U.VolumeChange = 3] = "VolumeChange", U[U.RateChange = 4] = "RateChange", U);

    function d7(e) {
        try {
            return e.contentDocument
        } catch (e) {}
    }
    class d9 {
        constructor() {
            this.length = 0, this.head = null, this.tail = null
        }
        get(e) {
            if (e >= this.length) throw Error("Position outside of list range");
            let t = this.head;
            for (let n = 0; n < e; n++) t = t ? .next || null;
            return t
        }
        addNode(e) {
            let t = {
                value: e,
                previous: null,
                next: null
            };
            if (e.__ln = t, e.previousSibling && "__ln" in e.previousSibling) {
                let n = e.previousSibling.__ln.next;
                t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
            } else if (e.nextSibling && "__ln" in e.nextSibling && e.nextSibling.__ln.previous) {
                let n = e.nextSibling.__ln.previous;
                t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t)
            } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
            null === t.next && (this.tail = t), this.length++
        }
        removeNode(e) {
            let t = e.__ln;
            this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
        }
    }
    let pe = (e, t) => `${e}@${t}`;class pt {
        constructor() {
            this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
                e.forEach(this.processMutation), this.emit()
            }, this.emit = () => {
                if (this.frozen || this.locked) return;
                let e = [],
                    t = new Set,
                    n = new d9,
                    r = e => {
                        let t = e,
                            n = -2;
                        for (; - 2 === n;) n = (t = t && t.nextSibling) && this.mirror.getId(t);
                        return n
                    },
                    i = i => {
                        if (!i.parentNode || !dQ(i)) return;
                        let s = c6(i.parentNode) ? this.mirror.getId(dZ(i)) : this.mirror.getId(i.parentNode),
                            o = r(i);
                        if (-1 === s || -1 === o) return n.addNode(i);
                        let a = dP(i, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: e => {
                                dG(e, this.mirror) && !dz(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(e), dK(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), dY(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, this.doc)
                            },
                            onIframeLoad: (e, t) => {
                                dz(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (this.iframeManager.attachIframe(e, t), e.contentWindow && this.canvasManager.addWindow(e.contentWindow), this.shadowDomManager.observeAttachShadow(e))
                            },
                            onStylesheetLoad: (e, t) => {
                                this.stylesheetManager.attachLinkElement(e, t)
                            },
                            onBlockedImageLoad: (e, t, {
                                width: n,
                                height: r
                            }) => {
                                this.mutationCb({
                                    adds: [],
                                    removes: [],
                                    texts: [],
                                    attributes: [{
                                        id: t.id,
                                        attributes: {
                                            style: {
                                                width: `${n}px`,
                                                height: `${r}px`
                                            }
                                        }
                                    }]
                                })
                            },
                            ignoreCSSAttributes: this.ignoreCSSAttributes
                        });
                        a && (e.push({
                            parentId: s,
                            nextId: o,
                            node: a
                        }), t.add(a.id))
                    };
                for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (let e of this.movedSet)(!pr(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && i(e);
                for (let e of this.addedSet) pi(this.droppedSet, e) || pr(this.removes, e, this.mirror) ? pi(this.movedSet, e) ? i(e) : this.droppedSet.add(e) : i(e);
                let s = null;
                for (; n.length;) {
                    let e = null;
                    if (s) {
                        let t = this.mirror.getId(s.value.parentNode),
                            n = r(s.value); - 1 !== t && -1 !== n && (e = s)
                    }
                    if (!e) {
                        let t = n.tail;
                        for (; t;) {
                            let n = t;
                            if (t = t.previous, n) {
                                let t = this.mirror.getId(n.value.parentNode);
                                if (-1 === r(n.value)) continue;
                                if (-1 !== t) {
                                    e = n;
                                    break
                                } {
                                    let t = n.value;
                                    if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        let r = t.parentNode.host;
                                        if (-1 !== this.mirror.getId(r)) {
                                            e = n;
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!e) {
                        for (; n.head;) n.removeNode(n.head.value);
                        break
                    }
                    s = e.previous, n.removeNode(e.value), i(e.value)
                }
                let o = {
                    texts: this.texts.map(e => ({
                        id: this.mirror.getId(e.node),
                        value: e.value
                    })).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                    attributes: this.attributes.map(e => {
                        let {
                            attributes: t
                        } = e;
                        if ("string" == typeof t.style) {
                            let n = JSON.stringify(e.styleDiff),
                                r = JSON.stringify(e._unchangedStyles);
                            n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                        }
                        return {
                            id: this.mirror.getId(e.node),
                            attributes: t
                        }
                    }).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                    removes: this.removes,
                    adds: e
                };
                (o.texts.length || o.attributes.length || o.removes.length || o.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(o))
            }, this.processMutation = e => {
                if (!dV(e.target, this.mirror)) switch (e.type) {
                    case "characterData":
                        {
                            let t = e.target.textContent;dz(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                                value: dO(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, dH(e.target)) : t.replace(/[\S]/g, "*") : t,
                                node: e.target
                            });
                            break
                        }
                    case "attributes":
                        {
                            let t = e.target,
                                n = e.attributeName,
                                r = e.target.getAttribute(n);
                            if ("value" === n) {
                                let n = da(t),
                                    i = t.tagName;
                                r = dl(t, i, n);
                                let s = dt({
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: i,
                                    type: n
                                });
                                r = dn({
                                    isMasked: dO(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, s),
                                    element: t,
                                    value: r,
                                    maskInputFn: this.maskInputFn
                                })
                            }
                            if (dz(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === e.oldValue) return;
                            let i = this.attributeMap.get(e.target);
                            if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                                if (d7(t)) return;
                                n = "rr_src"
                            }
                            if (i || (i = {
                                    node: e.target,
                                    attributes: {},
                                    styleDiff: {},
                                    _unchangedStyles: {}
                                }, this.attributes.push(i), this.attributeMap.set(e.target, i)), "type" === n && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), !dM(t.tagName, n) && (i.attributes[n] = dT(this.doc, dr(t.tagName), dr(n), r, t, this.maskAttributeFn), "style" === n)) {
                                if (!this.unattachedDoc) try {
                                    this.unattachedDoc = document.implementation.createHTMLDocument()
                                } catch (e) {
                                    this.unattachedDoc = this.doc
                                }
                                let n = this.unattachedDoc.createElement("span");
                                for (let r of (e.oldValue && n.setAttribute("style", e.oldValue), Array.from(t.style))) {
                                    let e = t.style.getPropertyValue(r),
                                        s = t.style.getPropertyPriority(r);
                                    e !== n.style.getPropertyValue(r) || s !== n.style.getPropertyPriority(r) ? "" === s ? i.styleDiff[r] = e : i.styleDiff[r] = [e, s] : i._unchangedStyles[r] = [e, s]
                                }
                                for (let e of Array.from(n.style)) "" === t.style.getPropertyValue(e) && (i.styleDiff[e] = !1)
                            }
                            break
                        }
                    case "childList":
                        if (dz(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                        e.addedNodes.forEach(t => this.genAdds(t, e.target)), e.removedNodes.forEach(t => {
                            let n = this.mirror.getId(t),
                                r = c6(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                            dz(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || dV(t, this.mirror) || -1 === this.mirror.getId(t) || (this.addedSet.has(t) ? (pn(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || function e(t, n) {
                                if (c6(t)) return !1;
                                let r = n.getId(t);
                                return !n.has(r) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, n))
                            }(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[pe(n, r)] ? pn(this.movedSet, t) : this.removes.push({
                                parentId: r,
                                id: n,
                                isShadow: !!(c6(e.target) && c8(e.target)) || void 0
                            })), this.mapRemoves.push(t))
                        })
                }
            }, this.genAdds = (e, t) => {
                if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
                    if (this.mirror.hasNode(e)) {
                        if (dV(e, this.mirror)) return;
                        this.movedSet.add(e);
                        let n = null;
                        t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && -1 !== n && (this.movedMap[pe(this.mirror.getId(e), n)] = !0)
                    } else this.addedSet.add(e), this.droppedSet.delete(e);
                    !dz(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && (e.childNodes && e.childNodes.forEach(e => this.genAdds(e)), dY(e) && e.shadowRoot.childNodes.forEach(t => {
                        this.processedNodeManager.add(t, this), this.genAdds(t, e)
                    }))
                }
            }
        }
        init(e) {
            ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager", "ignoreCSSAttributes"].forEach(t => {
                this[t] = e[t]
            })
        }
        freeze() {
            this.frozen = !0, this.canvasManager.freeze()
        }
        unfreeze() {
            this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
        }
        isFrozen() {
            return this.frozen
        }
        lock() {
            this.locked = !0, this.canvasManager.lock()
        }
        unlock() {
            this.locked = !1, this.canvasManager.unlock(), this.emit()
        }
        reset() {
            this.shadowDomManager.reset(), this.canvasManager.reset()
        }
    }

    function pn(e, t) {
        e.delete(t), t.childNodes ? .forEach(t => pn(e, t))
    }

    function pr(e, t, n) {
        return 0 !== e.length && function(e, t, n) {
            let r = t.parentNode;
            for (; r;) {
                let t = n.getId(r);
                if (e.some(e => e.id === t)) return !0;
                r = r.parentNode
            }
            return !1
        }(e, t, n)
    }

    function pi(e, t) {
        return 0 !== e.size && function e(t, n) {
            let {
                parentNode: r
            } = n;
            return !!r && (!!t.has(r) || e(t, r))
        }(e, t)
    }
    let ps = e => I ? (...t) => {
            try {
                return e(...t)
            } catch (e) {
                if (I && !0 === I(e)) return () => {};
                throw e
            }
        } : e,
        po = [];

    function pa(e) {
        try {
            if ("composedPath" in e) {
                let t = e.composedPath();
                if (t.length) return t[0]
            } else if ("path" in e && e.path.length) return e.path[0]
        } catch {}
        return e && e.target
    }

    function pl(e, t) {
        let n = new pt;
        po.push(n), n.init(e);
        let r = window.MutationObserver || window.__rrMutationObserver,
            i = window ? .Zone ? .__symbol__ ? .("MutationObserver");
        i && window[i] && (r = window[i]);
        let s = new r(ps(t => {
            e.onMutation && !1 === e.onMutation(t) || n.processMutations.bind(n)(t)
        }));
        return s.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }), s
    }

    function pu({
        scrollCb: e,
        doc: t,
        mirror: n,
        blockClass: r,
        blockSelector: i,
        unblockSelector: s,
        sampling: o
    }) {
        return dN("scroll", ps(dj(ps(o => {
            let a = pa(o);
            if (!a || dz(a, r, i, s, !0)) return;
            let l = n.getId(a);
            if (a === t && t.defaultView) {
                let n = dB(t.defaultView);
                e({
                    id: l,
                    x: n.left,
                    y: n.top
                })
            } else e({
                id: l,
                x: a.scrollLeft,
                y: a.scrollTop
            })
        }), o.scroll || 100)), t)
    }
    let pc = ["INPUT", "TEXTAREA", "SELECT"],
        pd = new WeakMap;

    function pp(e) {
        var t = [];
        if (pg("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || pg("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || pg("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || pg("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
            let n = Array.from(e.parentRule.cssRules).indexOf(e);
            t.unshift(n)
        } else if (e.parentStyleSheet) {
            let n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
            t.unshift(n)
        }
        return t
    }

    function ph(e, t, n) {
        let r, i;
        return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : i = n.getId(e), {
            styleId: i,
            id: r
        }) : {}
    }

    function pf({
        mirror: e,
        stylesheetManager: t
    }, n) {
        let r = null;
        r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
        let i = "#document" === n.nodeName ? n.defaultView ? .Document : n.ownerDocument ? .defaultView ? .ShadowRoot,
            s = i ? .prototype ? Object.getOwnPropertyDescriptor(i ? .prototype, "adoptedStyleSheets") : void 0;
        return null !== r && -1 !== r && i && s ? (Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: s.configurable,
            enumerable: s.enumerable,
            get() {
                return s.get ? .call(this)
            },
            set(e) {
                let n = s.set ? .call(this, e);
                if (null !== r && -1 !== r) try {
                    t.adoptStyleSheets(e, r)
                } catch (e) {}
                return n
            }
        }), ps(() => {
            Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: s.configurable,
                enumerable: s.enumerable,
                get: s.get,
                set: s.set
            })
        })) : () => {}
    }

    function pm(e, t = {}) {
        let n, r = e.doc.defaultView;
        if (!r) return () => {};
        e.recordDOM && (n = pl(e, e.doc));
        let i = function({
                mousemoveCb: e,
                sampling: t,
                doc: n,
                mirror: r
            }) {
                let i;
                if (!1 === t.mousemove) return () => {};
                let s = "number" == typeof t.mousemove ? t.mousemove : 50,
                    o = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500,
                    a = [],
                    l = dj(ps(t => {
                        let n = Date.now() - i;
                        e(a.map(e => (e.timeOffset -= n, e)), t), a = [], i = null
                    }), o),
                    u = ps(dj(ps(e => {
                        let t = pa(e),
                            {
                                clientX: n,
                                clientY: s
                            } = dJ(e) ? e.changedTouches[0] : e;
                        i || (i = dU()), a.push({
                            x: n,
                            y: s,
                            id: r.getId(t),
                            timeOffset: dU() - i
                        }), l("u" > typeof DragEvent && e instanceof DragEvent ? d5.Drag : e instanceof MouseEvent ? d5.MouseMove : d5.TouchMove)
                    }), s, {
                        trailing: !1
                    })),
                    c = [dN("mousemove", u, n), dN("touchmove", u, n), dN("drag", u, n)];
                return ps(() => {
                    c.forEach(e => e())
                })
            }(e),
            s = function({
                mouseInteractionCb: e,
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: i,
                unblockSelector: s,
                sampling: o
            }) {
                if (!1 === o.mouseInteraction) return () => {};
                let a = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                    l = [],
                    u = null;
                return Object.keys(d4).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e]).forEach(o => {
                    let a = dr(o),
                        c = t => {
                            let a = pa(t);
                            if (dz(a, r, i, s, !0)) return;
                            let l = null,
                                c = o;
                            if ("pointerType" in t) {
                                switch (t.pointerType) {
                                    case "mouse":
                                        l = d6.Mouse;
                                        break;
                                    case "touch":
                                        l = d6.Touch;
                                        break;
                                    case "pen":
                                        l = d6.Pen
                                }
                                l === d6.Touch ? d4[o] === d4.MouseDown ? c = "TouchStart" : d4[o] === d4.MouseUp && (c = "TouchEnd") : d6.Pen
                            } else dJ(t) && (l = d6.Touch);
                            null !== l ? (u = l, (c.startsWith("Touch") && l === d6.Touch || c.startsWith("Mouse") && l === d6.Mouse) && (l = null)) : d4[o] === d4.Click && (l = u, u = null);
                            let d = dJ(t) ? t.changedTouches[0] : t;
                            if (!d) return;
                            let p = n.getId(a),
                                {
                                    clientX: h,
                                    clientY: f
                                } = d;
                            ps(e)({
                                type: d4[c],
                                id: p,
                                x: h,
                                y: f,
                                ...null !== l && {
                                    pointerType: l
                                }
                            })
                        };
                    if (window.PointerEvent) switch (d4[o]) {
                        case d4.MouseDown:
                        case d4.MouseUp:
                            a = a.replace("mouse", "pointer");
                            break;
                        case d4.TouchStart:
                        case d4.TouchEnd:
                            return
                    }
                    l.push(dN(a, c, t))
                }), ps(() => {
                    l.forEach(e => e())
                })
            }(e),
            o = pu(e),
            a = function({
                viewportResizeCb: e
            }, {
                win: t
            }) {
                let n = -1,
                    r = -1;
                return dN("resize", ps(dj(ps(() => {
                    let t = dW(),
                        i = dq();
                    (n !== t || r !== i) && (e({
                        width: Number(i),
                        height: Number(t)
                    }), n = t, r = i)
                }), 200)), t)
            }(e, {
                win: r
            }),
            l = function({
                inputCb: e,
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: i,
                unblockSelector: s,
                ignoreClass: o,
                ignoreSelector: a,
                maskInputOptions: l,
                maskInputFn: u,
                sampling: c,
                userTriggeredOnInput: d,
                maskTextClass: p,
                unmaskTextClass: h,
                maskTextSelector: f,
                unmaskTextSelector: m
            }) {
                function g(e) {
                    let n = pa(e),
                        c = e.isTrusted,
                        g = n && di(n.tagName);
                    if ("OPTION" === g && (n = n.parentElement), !n || !g || 0 > pc.indexOf(g) || dz(n, r, i, s, !0)) return;
                    let y = n;
                    if (y.classList.contains(o) || a && y.matches(a)) return;
                    let v = da(n),
                        b = dl(y, g, v),
                        S = !1,
                        w = dt({
                            maskInputOptions: l,
                            tagName: g,
                            type: v
                        }),
                        k = dO(n, p, f, h, m, w);
                    ("radio" === v || "checkbox" === v) && (S = n.checked), b = dn({
                        isMasked: k,
                        element: n,
                        value: b,
                        maskInputFn: u
                    }), _(n, d ? {
                        text: b,
                        isChecked: S,
                        userTriggered: c
                    } : {
                        text: b,
                        isChecked: S
                    });
                    let E = n.name;
                    "radio" === v && E && S && t.querySelectorAll(`input[type="radio"][name="${E}"]`).forEach(e => {
                        if (e !== n) {
                            let t = dn({
                                isMasked: k,
                                element: e,
                                value: dl(e, g, v),
                                maskInputFn: u
                            });
                            _(e, d ? {
                                text: t,
                                isChecked: !S,
                                userTriggered: !1
                            } : {
                                text: t,
                                isChecked: !S
                            })
                        }
                    })
                }

                function _(t, r) {
                    let i = pd.get(t);
                    if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                        pd.set(t, r);
                        let i = n.getId(t);
                        ps(e)({ ...r,
                            id: i
                        })
                    }
                }
                let y = ("last" === c.input ? ["change"] : ["input", "change"]).map(e => dN(e, ps(g), t)),
                    v = t.defaultView;
                if (!v) return () => {
                    y.forEach(e => e())
                };
                let b = v.Object.getOwnPropertyDescriptor(v.HTMLInputElement.prototype, "value"),
                    S = [
                        [v.HTMLInputElement.prototype, "value"],
                        [v.HTMLInputElement.prototype, "checked"],
                        [v.HTMLSelectElement.prototype, "value"],
                        [v.HTMLTextAreaElement.prototype, "value"],
                        [v.HTMLSelectElement.prototype, "selectedIndex"],
                        [v.HTMLOptionElement.prototype, "selected"]
                    ];
                return b && b.set && y.push(...S.map(e => (function e(t, n, r, i, s = window) {
                    let o = s.Object.getOwnPropertyDescriptor(t, n);
                    return s.Object.defineProperty(t, n, i ? r : {
                        set(e) {
                            d2(() => {
                                r.set.call(this, e)
                            }, 0), o && o.set && o.set.call(this, e)
                        }
                    }), () => e(t, n, o || {}, !0)
                })(e[0], e[1], {
                    set() {
                        ps(g)({
                            target: this,
                            isTrusted: !1
                        })
                    }
                }, !1, v))), ps(() => {
                    y.forEach(e => e())
                })
            }(e),
            u = function({
                mediaInteractionCb: e,
                blockClass: t,
                blockSelector: n,
                unblockSelector: r,
                mirror: i,
                sampling: s,
                doc: o
            }) {
                let a = ps(o => dj(ps(s => {
                        let a = pa(s);
                        if (!a || dz(a, t, n, r, !0)) return;
                        let {
                            currentTime: l,
                            volume: u,
                            muted: c,
                            playbackRate: d
                        } = a;
                        e({
                            type: o,
                            id: i.getId(a),
                            currentTime: l,
                            volume: u,
                            muted: c,
                            playbackRate: d
                        })
                    }), s.media || 500)),
                    l = [dN("play", a(d8.Play), o), dN("pause", a(d8.Pause), o), dN("seeked", a(d8.Seeked), o), dN("volumechange", a(d8.VolumeChange), o), dN("ratechange", a(d8.RateChange), o)];
                return ps(() => {
                    l.forEach(e => e())
                })
            }(e),
            c = () => {},
            d = () => {},
            p = () => {},
            h = () => {};
        e.recordDOM && (c = function({
            styleSheetRuleCb: e,
            mirror: t,
            stylesheetManager: n
        }, {
            win: r
        }) {
            let i, s;
            if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
            let o = r.CSSStyleSheet.prototype.insertRule;
            r.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                apply: ps((r, i, s) => {
                    let [o, a] = s, {
                        id: l,
                        styleId: u
                    } = ph(i, t, n.styleMirror);
                    return (l && -1 !== l || u && -1 !== u) && e({
                        id: l,
                        styleId: u,
                        adds: [{
                            rule: o,
                            index: a
                        }]
                    }), r.apply(i, s)
                })
            });
            let a = r.CSSStyleSheet.prototype.deleteRule;
            r.CSSStyleSheet.prototype.deleteRule = new Proxy(a, {
                apply: ps((r, i, s) => {
                    let [o] = s, {
                        id: a,
                        styleId: l
                    } = ph(i, t, n.styleMirror);
                    return (a && -1 !== a || l && -1 !== l) && e({
                        id: a,
                        styleId: l,
                        removes: [{
                            index: o
                        }]
                    }), r.apply(i, s)
                })
            }), r.CSSStyleSheet.prototype.replace && (i = r.CSSStyleSheet.prototype.replace, r.CSSStyleSheet.prototype.replace = new Proxy(i, {
                apply: ps((r, i, s) => {
                    let [o] = s, {
                        id: a,
                        styleId: l
                    } = ph(i, t, n.styleMirror);
                    return (a && -1 !== a || l && -1 !== l) && e({
                        id: a,
                        styleId: l,
                        replace: o
                    }), r.apply(i, s)
                })
            })), r.CSSStyleSheet.prototype.replaceSync && (s = r.CSSStyleSheet.prototype.replaceSync, r.CSSStyleSheet.prototype.replaceSync = new Proxy(s, {
                apply: ps((r, i, s) => {
                    let [o] = s, {
                        id: a,
                        styleId: l
                    } = ph(i, t, n.styleMirror);
                    return (a && -1 !== a || l && -1 !== l) && e({
                        id: a,
                        styleId: l,
                        replaceSync: o
                    }), r.apply(i, s)
                })
            }));
            let l = {};
            p_("CSSGroupingRule") ? l.CSSGroupingRule = r.CSSGroupingRule : (p_("CSSMediaRule") && (l.CSSMediaRule = r.CSSMediaRule), p_("CSSConditionRule") && (l.CSSConditionRule = r.CSSConditionRule), p_("CSSSupportsRule") && (l.CSSSupportsRule = r.CSSSupportsRule));
            let u = {};
            return Object.entries(l).forEach(([r, i]) => {
                u[r] = {
                    insertRule: i.prototype.insertRule,
                    deleteRule: i.prototype.deleteRule
                }, i.prototype.insertRule = new Proxy(u[r].insertRule, {
                    apply: ps((r, i, s) => {
                        let [o, a] = s, {
                            id: l,
                            styleId: u
                        } = ph(i.parentStyleSheet, t, n.styleMirror);
                        return (l && -1 !== l || u && -1 !== u) && e({
                            id: l,
                            styleId: u,
                            adds: [{
                                rule: o,
                                index: [...pp(i), a || 0]
                            }]
                        }), r.apply(i, s)
                    })
                }), i.prototype.deleteRule = new Proxy(u[r].deleteRule, {
                    apply: ps((r, i, s) => {
                        let [o] = s, {
                            id: a,
                            styleId: l
                        } = ph(i.parentStyleSheet, t, n.styleMirror);
                        return (a && -1 !== a || l && -1 !== l) && e({
                            id: a,
                            styleId: l,
                            removes: [{
                                index: [...pp(i), o]
                            }]
                        }), r.apply(i, s)
                    })
                })
            }), ps(() => {
                r.CSSStyleSheet.prototype.insertRule = o, r.CSSStyleSheet.prototype.deleteRule = a, i && (r.CSSStyleSheet.prototype.replace = i), s && (r.CSSStyleSheet.prototype.replaceSync = s), Object.entries(l).forEach(([e, t]) => {
                    t.prototype.insertRule = u[e].insertRule, t.prototype.deleteRule = u[e].deleteRule
                })
            })
        }(e, {
            win: r
        }), d = pf(e, e.doc), p = function({
            styleDeclarationCb: e,
            mirror: t,
            ignoreCSSAttributes: n,
            stylesheetManager: r
        }, {
            win: i
        }) {
            let s = i.CSSStyleDeclaration.prototype.setProperty;
            i.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
                apply: ps((i, o, a) => {
                    let [l, u, c] = a;
                    if (n.has(l)) return s.apply(o, [l, u, c]);
                    let {
                        id: d,
                        styleId: p
                    } = ph(o.parentRule ? .parentStyleSheet, t, r.styleMirror);
                    return (d && -1 !== d || p && -1 !== p) && e({
                        id: d,
                        styleId: p,
                        set: {
                            property: l,
                            value: u,
                            priority: c
                        },
                        index: pp(o.parentRule)
                    }), i.apply(o, a)
                })
            });
            let o = i.CSSStyleDeclaration.prototype.removeProperty;
            return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                apply: ps((i, s, a) => {
                    let [l] = a;
                    if (n.has(l)) return o.apply(s, [l]);
                    let {
                        id: u,
                        styleId: c
                    } = ph(s.parentRule ? .parentStyleSheet, t, r.styleMirror);
                    return (u && -1 !== u || c && -1 !== c) && e({
                        id: u,
                        styleId: c,
                        remove: {
                            property: l
                        },
                        index: pp(s.parentRule)
                    }), i.apply(s, a)
                })
            }), ps(() => {
                i.CSSStyleDeclaration.prototype.setProperty = s, i.CSSStyleDeclaration.prototype.removeProperty = o
            })
        }(e, {
            win: r
        }), e.collectFonts && (h = function({
            fontCb: e,
            doc: t
        }) {
            let n = t.defaultView;
            if (!n) return () => {};
            let r = [],
                i = new WeakMap,
                s = n.FontFace;
            n.FontFace = function(e, t, n) {
                let r = new s(e, t, n);
                return i.set(r, {
                    family: e,
                    buffer: "string" != typeof t,
                    descriptors: n,
                    fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                }), r
            };
            let o = dF(t.fonts, "add", function(t) {
                return function(n) {
                    return d2(ps(() => {
                        let t = i.get(n);
                        t && (e(t), i.delete(n))
                    }), 0), t.apply(this, [n])
                }
            });
            return r.push(() => {
                n.FontFace = s
            }), r.push(o), ps(() => {
                r.forEach(e => e())
            })
        }(e)));
        let f = function(e) {
                let {
                    doc: t,
                    mirror: n,
                    blockClass: r,
                    blockSelector: i,
                    unblockSelector: s,
                    selectionCb: o
                } = e, a = !0, l = ps(() => {
                    let e = t.getSelection();
                    if (!e || a && e ? .isCollapsed) return;
                    a = e.isCollapsed || !1;
                    let l = [],
                        u = e.rangeCount || 0;
                    for (let t = 0; t < u; t++) {
                        let {
                            startContainer: o,
                            startOffset: a,
                            endContainer: u,
                            endOffset: c
                        } = e.getRangeAt(t);
                        dz(o, r, i, s, !0) || dz(u, r, i, s, !0) || l.push({
                            start: n.getId(o),
                            startOffset: a,
                            end: n.getId(u),
                            endOffset: c
                        })
                    }
                    o({
                        ranges: l
                    })
                });
                return l(), dN("selectionchange", l)
            }(e),
            m = function({
                doc: e,
                customElementCb: t
            }) {
                let n = e.defaultView;
                return n && n.customElements ? dF(n.customElements, "define", function(e) {
                    return function(n, r, i) {
                        try {
                            t({
                                define: {
                                    name: n
                                }
                            })
                        } catch (e) {}
                        return e.apply(this, [n, r, i])
                    }
                }) : () => {}
            }(e),
            g = [];
        for (let t of e.plugins) g.push(t.observer(t.callback, r, t.options));
        return ps(() => {
            po.forEach(e => e.reset()), n ? .disconnect(), i(), s(), o(), a(), l(), u(), c(), d(), p(), h(), f(), m(), g.forEach(e => e())
        })
    }

    function pg(e) {
        return void 0 !== window[e]
    }

    function p_(e) {
        return !!(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
    }
    class py {
        constructor(e) {
            this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
        }
        getId(e, t, n, r) {
            let i = n || this.getIdToRemoteIdMap(e),
                s = r || this.getRemoteIdToIdMap(e),
                o = i.get(t);
            return o || (o = this.generateIdFn(), i.set(t, o), s.set(o, t)), o
        }
        getIds(e, t) {
            let n = this.getIdToRemoteIdMap(e),
                r = this.getRemoteIdToIdMap(e);
            return t.map(t => this.getId(e, t, n, r))
        }
        getRemoteId(e, t, n) {
            let r = n || this.getRemoteIdToIdMap(e);
            if ("number" != typeof t) return t;
            let i = r.get(t);
            return i || -1
        }
        getRemoteIds(e, t) {
            let n = this.getRemoteIdToIdMap(e);
            return t.map(t => this.getRemoteId(e, t, n))
        }
        reset(e) {
            if (!e) {
                this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
                return
            }
            this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
        }
        getIdToRemoteIdMap(e) {
            let t = this.iframeIdToRemoteIdMap.get(e);
            return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
        }
        getRemoteIdToIdMap(e) {
            let t = this.iframeRemoteIdToIdMap.get(e);
            return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
        }
    }
    class pv {
        constructor() {
            this.crossOriginIframeMirror = new py(d_), this.crossOriginIframeRootIdMap = new WeakMap
        }
        addIframe() {}
        addLoadListener() {}
        attachIframe() {}
    }
    class pb {
        constructor(e) {
            this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new py(d_), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new py(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
        }
        addIframe(e) {
            this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
        }
        addLoadListener(e) {
            this.loadListener = e
        }
        attachIframe(e, t) {
            this.mutationCb({
                adds: [{
                    parentId: this.mirror.getId(e),
                    nextId: null,
                    node: t
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
            }), this.recordCrossOriginIframes && e.contentWindow ? .addEventListener("message", this.handleMessage.bind(this)), this.loadListener ? .(e);
            let n = d7(e);
            n && n.adoptedStyleSheets && n.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(n.adoptedStyleSheets, this.mirror.getId(n))
        }
        handleMessage(e) {
            if ("rrweb" !== e.data.type || e.origin !== e.data.origin || !e.source) return;
            let t = this.crossOriginIframeMap.get(e.source);
            if (!t) return;
            let n = this.transformCrossOriginEvent(t, e.data.event);
            n && this.wrappedEmit(n, e.data.isCheckout)
        }
        transformCrossOriginEvent(e, t) {
            switch (t.type) {
                case d3.FullSnapshot:
                    {
                        this.crossOriginIframeMirror.reset(e),
                        this.crossOriginIframeStyleMirror.reset(e),
                        this.replaceIdOnNode(t.data.node, e);
                        let n = t.data.node.id;
                        return this.crossOriginIframeRootIdMap.set(e, n),
                        this.patchRootIdOnNode(t.data.node, n),
                        {
                            timestamp: t.timestamp,
                            type: d3.IncrementalSnapshot,
                            data: {
                                source: d5.Mutation,
                                adds: [{
                                    parentId: this.mirror.getId(e),
                                    nextId: null,
                                    node: t.data.node
                                }],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }
                        }
                    }
                case d3.Meta:
                case d3.Load:
                case d3.DomContentLoaded:
                    break;
                case d3.Plugin:
                    return t;
                case d3.Custom:
                    return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
                case d3.IncrementalSnapshot:
                    switch (t.data.source) {
                        case d5.Mutation:
                            return t.data.adds.forEach(t => {
                                this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                                let n = this.crossOriginIframeRootIdMap.get(e);
                                n && this.patchRootIdOnNode(t.node, n)
                            }), t.data.removes.forEach(t => {
                                this.replaceIds(t, e, ["parentId", "id"])
                            }), t.data.attributes.forEach(t => {
                                this.replaceIds(t, e, ["id"])
                            }), t.data.texts.forEach(t => {
                                this.replaceIds(t, e, ["id"])
                            }), t;
                        case d5.Drag:
                        case d5.TouchMove:
                        case d5.MouseMove:
                            return t.data.positions.forEach(t => {
                                this.replaceIds(t, e, ["id"])
                            }), t;
                        case d5.ViewportResize:
                            return !1;
                        case d5.MediaInteraction:
                        case d5.MouseInteraction:
                        case d5.Scroll:
                        case d5.CanvasMutation:
                        case d5.Input:
                            return this.replaceIds(t.data, e, ["id"]), t;
                        case d5.StyleSheetRule:
                        case d5.StyleDeclaration:
                            return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                        case d5.Font:
                            return t;
                        case d5.Selection:
                            return t.data.ranges.forEach(t => {
                                this.replaceIds(t, e, ["start", "end"])
                            }), t;
                        case d5.AdoptedStyleSheet:
                            return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), t.data.styles ? .forEach(t => {
                                this.replaceStyleIds(t, e, ["styleId"])
                            }), t
                    }
            }
            return !1
        }
        replace(e, t, n, r) {
            for (let i of r)(Array.isArray(t[i]) || "number" == typeof t[i]) && (Array.isArray(t[i]) ? t[i] = e.getIds(n, t[i]) : t[i] = e.getId(n, t[i]));
            return t
        }
        replaceIds(e, t, n) {
            return this.replace(this.crossOriginIframeMirror, e, t, n)
        }
        replaceStyleIds(e, t, n) {
            return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
        }
        replaceIdOnNode(e, t) {
            this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach(e => {
                this.replaceIdOnNode(e, t)
            })
        }
        patchRootIdOnNode(e, t) {
            e.type === c4.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach(e => {
                this.patchRootIdOnNode(e, t)
            })
        }
    }
    class pS {
        init() {}
        addShadowRoot() {}
        observeAttachShadow() {}
        reset() {}
    }
    class pw {
        constructor(e) {
            this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
        }
        init() {
            this.reset(), this.patchAttachShadow(Element, document)
        }
        addShadowRoot(e, t) {
            if (!c8(e) || this.shadowDoms.has(e)) return;
            this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
            let n = pl({ ...this.bypassOptions,
                doc: t,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
            }, e);
            this.restoreHandlers.push(() => n.disconnect()), this.restoreHandlers.push(pu({ ...this.bypassOptions,
                scrollCb: this.scrollCb,
                doc: e,
                mirror: this.mirror
            })), d2(() => {
                e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(pf({
                    mirror: this.mirror,
                    stylesheetManager: this.bypassOptions.stylesheetManager
                }, e))
            }, 0)
        }
        observeAttachShadow(e) {
            let t = d7(e),
                n = function(e) {
                    try {
                        return e.contentWindow
                    } catch (e) {}
                }(e);
            t && n && this.patchAttachShadow(n.Element, t)
        }
        patchAttachShadow(e, t) {
            let n = this;
            this.restoreHandlers.push(dF(e.prototype, "attachShadow", function(e) {
                return function(r) {
                    let i = e.call(this, r);
                    return this.shadowRoot && dQ(this) && n.addShadowRoot(this.shadowRoot, t), i
                }
            }))
        }
        reset() {
            this.restoreHandlers.forEach(e => {
                try {
                    e()
                } catch (e) {}
            }), this.restoreHandlers = [], this.shadowDoms = new WeakSet, this.bypassOptions.canvasManager.resetShadowRoots()
        }
    }
    for (var pk = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pE = "u" < typeof Uint8Array ? [] : new Uint8Array(256), px = 0; px < pk.length; px++) pE[pk.charCodeAt(px)] = px;class pC {
        reset() {}
        freeze() {}
        unfreeze() {}
        lock() {}
        unlock() {}
        snapshot() {}
        addWindow() {}
        addShadowRoot() {}
        resetShadowRoots() {}
    }
    class pI {
        constructor(e) {
            this.trackedLinkElements = new WeakSet, this.styleMirror = new dX, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
        }
        attachLinkElement(e, t) {
            "_cssText" in t.attributes && this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [{
                    id: t.id,
                    attributes: t.attributes
                }]
            }), this.trackLinkElement(e)
        }
        trackLinkElement(e) {
            this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
        }
        adoptStyleSheets(e, t) {
            if (0 === e.length) return;
            let n = {
                    id: t,
                    styleIds: []
                },
                r = [];
            for (let t of e) {
                let e;
                this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), r.push({
                    styleId: e,
                    rules: Array.from(t.rules || CSSRule, (e, t) => ({
                        rule: c9(e),
                        index: t
                    }))
                })), n.styleIds.push(e)
            }
            r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n)
        }
        reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
        }
        trackStylesheetInLinkElement(e) {}
    }
    class pT {
        constructor() {
            this.nodeMap = new WeakMap, this.active = !1
        }
        inOtherBuffer(e, t) {
            let n = this.nodeMap.get(e);
            return n && Array.from(n).some(e => e !== t)
        }
        add(e, t) {
            this.active || (this.active = !0, function(...e) {
                d1("requestAnimationFrame")(...e)
            }(() => {
                this.nodeMap = new WeakMap, this.active = !1
            })), this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
        }
        destroy() {}
    }
    try {
        if (2 !== Array.from([1], e => 2 * e)[0]) {
            let e = document.createElement("iframe");
            document.body.appendChild(e), Array.from = e.contentWindow ? .Array.from || Array.from, document.body.removeChild(e)
        }
    } catch (e) {
        console.debug("Unable to override Array.from", e)
    }
    let pM = new de;

    function pA(e = {}) {
        let t, {
            emit: n,
            checkoutEveryNms: r,
            checkoutEveryNth: i,
            blockClass: s = "rr-block",
            blockSelector: o = null,
            unblockSelector: a = null,
            ignoreClass: l = "rr-ignore",
            ignoreSelector: u = null,
            maskAllText: c = !1,
            maskTextClass: d = "rr-mask",
            unmaskTextClass: p = null,
            maskTextSelector: h = null,
            unmaskTextSelector: f = null,
            inlineStylesheet: m = !0,
            maskAllInputs: g,
            maskInputOptions: _,
            slimDOMOptions: y,
            maskAttributeFn: v,
            maskInputFn: b,
            maskTextFn: S,
            maxCanvasSize: w = null,
            packFn: k,
            sampling: E = {},
            dataURLOptions: x = {},
            mousemoveWait: C,
            recordDOM: A = !0,
            recordCanvas: R = !1,
            recordCrossOriginIframes: O = !1,
            recordAfter: L = "DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load",
            userTriggeredOnInput: P = !1,
            collectFonts: N = !1,
            inlineImages: D = !1,
            plugins: $,
            keepIframeSrcFn: j = () => !1,
            ignoreCSSAttributes: F = new Set([]),
            errorHandler: U,
            onMutation: B,
            getCanvasManager: W
        } = e;
        I = U;
        let q = !O || window.parent === window,
            H = !1;
        if (!q) try {
            window.parent.document && (H = !1)
        } catch (e) {
            H = !0
        }
        if (q && !n) throw Error("emit function is required");
        if (!q && !H) return () => {};
        void 0 !== C && void 0 === E.mousemove && (E.mousemove = C), pM.reset();
        let z = !0 === g ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                radio: !0,
                checkbox: !0
            } : void 0 !== _ ? _ : {},
            V = !0 === y || "all" === y ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaVerification: !0,
                headMetaAuthorship: "all" === y,
                headMetaDescKeywords: "all" === y
            } : y || {};
        ! function(e = window) {
            "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...e) => {
                let t = e[0];
                if (!(0 in e)) throw TypeError("1 argument is required");
                do
                    if (this === t) return !0; while (t = t && t.parentNode) return !1
            })
        }();
        let J = 0,
            G = e => {
                for (let t of $ || []) t.eventProcessor && (e = t.eventProcessor(e));
                return k && !H && (e = k(e)), e
            };
        T = (e, s) => {
            if (e.timestamp = dU(), po[0] ? .isFrozen() && e.type !== d3.FullSnapshot && (e.type !== d3.IncrementalSnapshot || e.data.source !== d5.Mutation) && po.forEach(e => e.unfreeze()), q) n ? .(G(e), s);
            else if (H) {
                let t = {
                    type: "rrweb",
                    event: G(e),
                    origin: window.location.origin,
                    isCheckout: s
                };
                window.parent.postMessage(t, "*")
            }
            if (e.type === d3.FullSnapshot) t = e, J = 0;
            else if (e.type === d3.IncrementalSnapshot) {
                if (e.data.source === d5.Mutation && e.data.isAttachIframe) return;
                J++;
                let n = i && J >= i,
                    s = r && t && e.timestamp - t.timestamp > r;
                (n || s) && er(!0)
            }
        };
        let K = e => {
                T({
                    type: d3.IncrementalSnapshot,
                    data: {
                        source: d5.Mutation,
                        ...e
                    }
                })
            },
            Y = e => T({
                type: d3.IncrementalSnapshot,
                data: {
                    source: d5.Scroll,
                    ...e
                }
            }),
            X = e => T({
                type: d3.IncrementalSnapshot,
                data: {
                    source: d5.CanvasMutation,
                    ...e
                }
            }),
            Z = new pI({
                mutationCb: K,
                adoptedStyleSheetCb: e => T({
                    type: d3.IncrementalSnapshot,
                    data: {
                        source: d5.AdoptedStyleSheet,
                        ...e
                    }
                })
            }),
            Q = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new pv : new pb({
                mirror: pM,
                mutationCb: K,
                stylesheetManager: Z,
                recordCrossOriginIframes: O,
                wrappedEmit: T
            });
        for (let e of $ || []) e.getMirror && e.getMirror({
            nodeMirror: pM,
            crossOriginIframeMirror: Q.crossOriginIframeMirror,
            crossOriginIframeStyleMirror: Q.crossOriginIframeStyleMirror
        });
        let ee = new pT,
            et = function(e, t) {
                try {
                    return e ? e(t) : new pC
                } catch {
                    return console.warn("Unable to initialize CanvasManager"), new pC
                }
            }(W, {
                mirror: pM,
                win: window,
                mutationCb: e => T({
                    type: d3.IncrementalSnapshot,
                    data: {
                        source: d5.CanvasMutation,
                        ...e
                    }
                }),
                recordCanvas: R,
                blockClass: s,
                blockSelector: o,
                unblockSelector: a,
                maxCanvasSize: w,
                sampling: E.canvas,
                dataURLOptions: x,
                errorHandler: U
            }),
            en = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new pS : new pw({
                mutationCb: K,
                scrollCb: Y,
                bypassOptions: {
                    onMutation: B,
                    blockClass: s,
                    blockSelector: o,
                    unblockSelector: a,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: h,
                    unmaskTextSelector: f,
                    inlineStylesheet: m,
                    maskInputOptions: z,
                    dataURLOptions: x,
                    maskAttributeFn: v,
                    maskTextFn: S,
                    maskInputFn: b,
                    recordCanvas: R,
                    inlineImages: D,
                    sampling: E,
                    slimDOMOptions: V,
                    iframeManager: Q,
                    stylesheetManager: Z,
                    canvasManager: et,
                    keepIframeSrcFn: j,
                    processedNodeManager: ee,
                    ignoreCSSAttributes: F
                },
                mirror: pM
            }),
            er = (e = !1) => {
                if (!A) return;
                T({
                    type: d3.Meta,
                    data: {
                        href: window.location.href,
                        width: dq(),
                        height: dW()
                    }
                }, e), Z.reset(), en.init(), po.forEach(e => e.lock());
                let t = function(e, t) {
                    let {
                        mirror: n = new de,
                        blockClass: r = "rr-block",
                        blockSelector: i = null,
                        unblockSelector: s = null,
                        maskAllText: o = !1,
                        maskTextClass: a = "rr-mask",
                        unmaskTextClass: l = null,
                        maskTextSelector: u = null,
                        unmaskTextSelector: c = null,
                        inlineStylesheet: d = !0,
                        inlineImages: p = !1,
                        recordCanvas: h = !1,
                        maskAllInputs: f = !1,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: _,
                        slimDOM: y = !1,
                        dataURLOptions: v,
                        preserveWhiteSpace: b,
                        onSerialize: S,
                        onIframeLoad: w,
                        iframeLoadTimeout: k,
                        onBlockedImageLoad: E,
                        onStylesheetLoad: x,
                        stylesheetLoadTimeout: C,
                        keepIframeSrcFn: I = () => !1,
                        ignoreCSSAttributes: T = new Set([])
                    } = t || {};
                    return dP(e, {
                        doc: e,
                        mirror: n,
                        blockClass: r,
                        blockSelector: i,
                        unblockSelector: s,
                        maskAllText: o,
                        maskTextClass: a,
                        unmaskTextClass: l,
                        maskTextSelector: u,
                        unmaskTextSelector: c,
                        skipChild: !1,
                        inlineStylesheet: d,
                        maskInputOptions: !0 === f ? {
                            color: !0,
                            date: !0,
                            "datetime-local": !0,
                            email: !0,
                            month: !0,
                            number: !0,
                            range: !0,
                            search: !0,
                            tel: !0,
                            text: !0,
                            time: !0,
                            url: !0,
                            week: !0,
                            textarea: !0,
                            select: !0
                        } : !1 === f ? {} : f,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: _,
                        slimDOMOptions: !0 === y || "all" === y ? {
                            script: !0,
                            comment: !0,
                            headFavicon: !0,
                            headWhitespace: !0,
                            headMetaDescKeywords: "all" === y,
                            headMetaSocial: !0,
                            headMetaRobots: !0,
                            headMetaHttpEquiv: !0,
                            headMetaAuthorship: !0,
                            headMetaVerification: !0
                        } : !1 === y ? {} : y,
                        dataURLOptions: v,
                        inlineImages: p,
                        recordCanvas: h,
                        preserveWhiteSpace: b,
                        onSerialize: S,
                        onIframeLoad: w,
                        iframeLoadTimeout: k,
                        onBlockedImageLoad: E,
                        onStylesheetLoad: x,
                        stylesheetLoadTimeout: C,
                        keepIframeSrcFn: I,
                        newlyAddedElement: !1,
                        ignoreCSSAttributes: T
                    })
                }(document, {
                    mirror: pM,
                    blockClass: s,
                    blockSelector: o,
                    unblockSelector: a,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: h,
                    unmaskTextSelector: f,
                    inlineStylesheet: m,
                    maskAllInputs: z,
                    maskAttributeFn: v,
                    maskInputFn: b,
                    maskTextFn: S,
                    slimDOM: V,
                    dataURLOptions: x,
                    recordCanvas: R,
                    inlineImages: D,
                    onSerialize: e => {
                        dG(e, pM) && Q.addIframe(e), dK(e, pM) && Z.trackLinkElement(e), dY(e) && en.addShadowRoot(e.shadowRoot, document)
                    },
                    onIframeLoad: (e, t) => {
                        Q.attachIframe(e, t), e.contentWindow && et.addWindow(e.contentWindow), en.observeAttachShadow(e)
                    },
                    onStylesheetLoad: (e, t) => {
                        Z.attachLinkElement(e, t)
                    },
                    onBlockedImageLoad: (e, t, {
                        width: n,
                        height: r
                    }) => {
                        K({
                            adds: [],
                            removes: [],
                            texts: [],
                            attributes: [{
                                id: t.id,
                                attributes: {
                                    style: {
                                        width: `${n}px`,
                                        height: `${r}px`
                                    }
                                }
                            }]
                        })
                    },
                    keepIframeSrcFn: j,
                    ignoreCSSAttributes: F
                });
                if (!t) return console.warn("Failed to snapshot the document");
                T({
                    type: d3.FullSnapshot,
                    data: {
                        node: t,
                        initialOffset: dB(window)
                    }
                }), po.forEach(e => e.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Z.adoptStyleSheets(document.adoptedStyleSheets, pM.getId(document))
            };
        M = er;
        try {
            let e = [],
                t = e => ps(pm)({
                    onMutation: B,
                    mutationCb: K,
                    mousemoveCb: (e, t) => T({
                        type: d3.IncrementalSnapshot,
                        data: {
                            source: t,
                            positions: e
                        }
                    }),
                    mouseInteractionCb: e => T({
                        type: d3.IncrementalSnapshot,
                        data: {
                            source: d5.MouseInteraction,
                            ...e
                        }
                    }),
                    scrollCb: Y,
                    viewportResizeCb: e => T({
                        type: d3.IncrementalSnapshot,
                        data: {
                            source: d5.ViewportResize,
                            ...e
                        }
                    }),
                    inputCb: e => T({
                        type: d3.IncrementalSnapshot,
                        data: {
                            source: d5.Input,
                            ...e
                        }
                    }),
                    mediaInteractionCb: e => T({
                        type: d3.IncrementalSnapshot,
                        data: {
                            source: d5.MediaInteraction,
                            ...e
                        }
                    }),
                    styleSheetRuleCb: e => T({
                        type: d3.IncrementalSnapshot,
                        data: {
                            source: d5.StyleSheetRule,
                            ...e
                        }
                    }),
                    styleDeclarationCb: e => T({
                        type: d3.IncrementalSnapshot,
                        data: {
                            source: d5.StyleDeclaration,
                            ...e
                        }
                    }),
                    canvasMutationCb: X,
                    fontCb: e => T({
                        type: d3.IncrementalSnapshot,
                        data: {
                            source: d5.Font,
                            ...e
                        }
                    }),
                    selectionCb: e => {
                        T({
                            type: d3.IncrementalSnapshot,
                            data: {
                                source: d5.Selection,
                                ...e
                            }
                        })
                    },
                    customElementCb: e => {
                        T({
                            type: d3.IncrementalSnapshot,
                            data: {
                                source: d5.CustomElement,
                                ...e
                            }
                        })
                    },
                    blockClass: s,
                    ignoreClass: l,
                    ignoreSelector: u,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: h,
                    unmaskTextSelector: f,
                    maskInputOptions: z,
                    inlineStylesheet: m,
                    sampling: E,
                    recordDOM: A,
                    recordCanvas: R,
                    inlineImages: D,
                    userTriggeredOnInput: P,
                    collectFonts: N,
                    doc: e,
                    maskAttributeFn: v,
                    maskInputFn: b,
                    maskTextFn: S,
                    keepIframeSrcFn: j,
                    blockSelector: o,
                    unblockSelector: a,
                    slimDOMOptions: V,
                    dataURLOptions: x,
                    mirror: pM,
                    iframeManager: Q,
                    stylesheetManager: Z,
                    shadowDomManager: en,
                    processedNodeManager: ee,
                    canvasManager: et,
                    ignoreCSSAttributes: F,
                    plugins: $ ? .filter(e => e.observer) ? .map(e => ({
                        observer: e.observer,
                        options: e.options,
                        callback: t => T({
                            type: d3.Plugin,
                            data: {
                                plugin: e.name,
                                payload: t
                            }
                        })
                    })) || []
                }, {});
            Q.addLoadListener(n => {
                try {
                    e.push(t(n.contentDocument))
                } catch (e) {
                    console.warn(e)
                }
            });
            let n = () => {
                er(), e.push(t(document))
            };
            return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(dN("DOMContentLoaded", () => {
                T({
                    type: d3.DomContentLoaded,
                    data: {}
                }), "DOMContentLoaded" === L && n()
            })), e.push(dN("load", () => {
                T({
                    type: d3.Load,
                    data: {}
                }), "load" === L && n()
            }, window))), () => {
                e.forEach(e => e()), ee.destroy(), M = void 0, I = void 0
            }
        } catch (e) {
            console.warn(e)
        }
    }

    function pR(e) {
        return e > 0x2540be3ff ? e : 1e3 * e
    }

    function pO(e) {
        return e > 0x2540be3ff ? e / 1e3 : e
    }

    function pL(e, t) {
        "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate(() => (e.throttledAddEvent({
            type: d3.Custom,
            timestamp: 1e3 * (t.timestamp || 0),
            data: {
                tag: "breadcrumb",
                payload: rm(t, 10, 1e3)
            }
        }), "console" === t.category)))
    }

    function pP(e) {
        return e.closest("button,a") || e
    }

    function pN(e) {
        let t = pD(e);
        return t && t instanceof Element ? pP(t) : t
    }

    function pD(e) {
        var t;
        return "object" == typeof(t = e) && t && "target" in t ? e.target : e
    }
    pA.mirror = pM,
    pA.takeFullSnapshot = function(e) {
        if (!M) throw Error("please take full snapshot after start recording");
        M(e)
    },
    (B = z || (z = {}))[B.NotStarted = 0] = "NotStarted",
    B[B.Running = 1] = "Running",
    B[B.Stopped = 2] = "Stopped";
    let p$ = new Set([d5.Mutation, d5.StyleSheetRule, d5.StyleDeclaration, d5.AdoptedStyleSheet, d5.CanvasMutation, d5.Selection, d5.MediaInteraction]);class pj {
        constructor(e, t, n = pL) {
            this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scrollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = n
        }
        addListeners() {
            var e;
            let t = (e = () => {
                this._lastMutation = pU()
            }, A || (A = [], nv(t3, "open", function(e) {
                return function(...t) {
                    if (A) try {
                        A.forEach(e => e())
                    } catch {}
                    return e.apply(t3, t)
                }
            })), A.push(e), () => {
                let t = A ? A.indexOf(e) : -1;
                t > -1 && A.splice(t, 1)
            });
            this._teardown = () => {
                t(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
            }
        }
        removeListeners() {
            this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
        }
        handleClick(e, t) {
            var n, r, i;
            if (n = t, r = this._ignoreSelector, !pF.includes(n.tagName) || "INPUT" === n.tagName && !["submit", "button"].includes(n.getAttribute("type") || "") || "A" === n.tagName && (n.hasAttribute("download") || n.hasAttribute("target") && "_self" !== n.getAttribute("target")) || r && n.matches(r) || !((i = e).data && "number" == typeof i.data.nodeId && i.timestamp)) return;
            let s = {
                timestamp: pO(e.timestamp),
                clickBreadcrumb: e,
                clickCount: 0,
                node: t
            };
            this._clicks.some(e => e.node === s.node && 1 > Math.abs(e.timestamp - s.timestamp)) || (this._clicks.push(s), 1 === this._clicks.length && this._scheduleCheckClicks())
        }
        registerMutation(e = Date.now()) {
            this._lastMutation = pO(e)
        }
        registerScroll(e = Date.now()) {
            this._lastScroll = pO(e)
        }
        registerClick(e) {
            let t = pP(e);
            this._handleMultiClick(t)
        }
        _handleMultiClick(e) {
            this._getClicks(e).forEach(e => {
                e.clickCount++
            })
        }
        _getClicks(e) {
            return this._clicks.filter(t => t.node === e)
        }
        _checkClicks() {
            let e = [],
                t = pU();
            for (let n of (this._clicks.forEach(n => {
                    !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= t && e.push(n)
                }), e)) {
                let e = this._clicks.indexOf(n);
                e > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(e, 1))
            }
            this._clicks.length && this._scheduleCheckClicks()
        }
        _generateBreadcrumbs(e) {
            let t = this._replay,
                n = e.scrollAfter && e.scrollAfter <= this._scrollTimeout,
                r = e.mutationAfter && e.mutationAfter <= this._threshold,
                {
                    clickCount: i,
                    clickBreadcrumb: s
                } = e;
            if (!n && !r) {
                let n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                    r = n < 1e3 * this._timeout ? "mutation" : "timeout",
                    o = {
                        type: "default",
                        message: s.message,
                        timestamp: s.timestamp,
                        category: "ui.slowClickDetected",
                        data: { ...s.data,
                            url: t3.location.href,
                            route: t.getCurrentRoute(),
                            timeAfterClickMs: n,
                            endReason: r,
                            clickCount: i || 1
                        }
                    };
                this._addBreadcrumbEvent(t, o);
                return
            }
            if (i > 1) {
                let e = {
                    type: "default",
                    message: s.message,
                    timestamp: s.timestamp,
                    category: "ui.multiClick",
                    data: { ...s.data,
                        url: t3.location.href,
                        route: t.getCurrentRoute(),
                        clickCount: i,
                        metric: !0
                    }
                };
                this._addBreadcrumbEvent(t, e)
            }
        }
        _scheduleCheckClicks() {
            this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = lY(() => this._checkClicks(), 1e3)
        }
    }
    let pF = ["A", "BUTTON", "INPUT"];

    function pU() {
        return Date.now() / 1e3
    }

    function pB(e) {
        return {
            timestamp: Date.now() / 1e3,
            type: "default",
            ...e
        }
    }
    var pW = ((W = pW || {})[W.Document = 0] = "Document", W[W.DocumentType = 1] = "DocumentType", W[W.Element = 2] = "Element", W[W.Text = 3] = "Text", W[W.CDATA = 4] = "CDATA", W[W.Comment = 5] = "Comment", W);
    let pq = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);

    function pH(e, t) {
        let n = pA.mirror.getId(e),
            r = n && pA.mirror.getNode(n),
            i = r && pA.mirror.getMeta(r),
            s = i && i.type === pW.Element ? i : null;
        return {
            message: t,
            data: s ? {
                nodeId: n,
                node: {
                    id: n,
                    tagName: s.tagName,
                    textContent: Array.from(s.childNodes).map(e => e.type === pW.Text && e.textContent).filter(Boolean).map(e => e.trim()).join(""),
                    attributes: function(e) {
                        let t = {};
                        for (let n in !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]), e)
                            if (pq.has(n)) {
                                let r = n;
                                ("data-testid" === n || "data-test-id" === n) && (r = "testId"), t[r] = e[n]
                            }
                        return t
                    }(s.attributes)
                }
            } : {}
        }
    }
    let pz = {
        resource: function(e) {
            let {
                entryType: t,
                initiatorType: n,
                name: r,
                responseEnd: i,
                startTime: s,
                decodedBodySize: o,
                encodedBodySize: a,
                responseStatus: l,
                transferSize: u
            } = e;
            return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                type: `${t}.${n}`,
                start: pG(s),
                end: pG(i),
                name: r,
                data: {
                    size: u,
                    statusCode: l,
                    decodedBodySize: o,
                    encodedBodySize: a
                }
            }
        },
        paint: function(e) {
            let {
                duration: t,
                entryType: n,
                name: r,
                startTime: i
            } = e, s = pG(i);
            return {
                type: n,
                name: r,
                start: s,
                end: s + t,
                data: void 0
            }
        },
        navigation: function(e) {
            let {
                entryType: t,
                name: n,
                decodedBodySize: r,
                duration: i,
                domComplete: s,
                encodedBodySize: o,
                domContentLoadedEventStart: a,
                domContentLoadedEventEnd: l,
                domInteractive: u,
                loadEventStart: c,
                loadEventEnd: d,
                redirectCount: p,
                startTime: h,
                transferSize: f,
                type: m
            } = e;
            return 0 === i ? null : {
                type: `${t}.${m}`,
                start: pG(h),
                end: pG(s),
                name: n,
                data: {
                    size: f,
                    decodedBodySize: r,
                    encodedBodySize: o,
                    duration: i,
                    domInteractive: u,
                    domContentLoadedEventStart: a,
                    domContentLoadedEventEnd: l,
                    loadEventStart: c,
                    loadEventEnd: d,
                    domComplete: s,
                    redirectCount: p
                }
            }
        }
    };

    function pV(e, t) {
        return ({
            metric: n
        }) => void t.replayPerformanceEntries.push(e(n))
    }

    function pJ(e) {
        let t = pz[e.entryType];
        return t ? t(e) : null
    }

    function pG(e) {
        return ((nY() || t3.performance.timeOrigin) + e) / 1e3
    }

    function pK(e) {
        let t = e.entries[e.entries.length - 1];
        return pZ(e, "largest-contentful-paint", t ? .element ? [t.element] : void 0)
    }

    function pY(e) {
        let t = [],
            n = [];
        for (let r of e.entries)
            if (void 0 !== r.sources) {
                let e = [];
                for (let t of r.sources)
                    if (t.node) {
                        n.push(t.node);
                        let r = pA.mirror.getId(t.node);
                        r && e.push(r)
                    }
                t.push({
                    value: r.value,
                    nodeIds: e.length ? e : void 0
                })
            }
        return pZ(e, "cumulative-layout-shift", n, t)
    }

    function pX(e) {
        let t = e.entries[e.entries.length - 1];
        return pZ(e, "interaction-to-next-paint", t ? .target ? [t.target] : void 0)
    }

    function pZ(e, t, n, r) {
        let i = e.value,
            s = e.rating,
            o = pG(i);
        return {
            type: "web-vital",
            name: t,
            start: o,
            end: o,
            data: {
                value: i,
                size: i,
                rating: s,
                nodeIds: n ? n.map(e => pA.mirror.getId(e)) : void 0,
                attributions: r
            }
        }
    }
    let pQ = (P = {
        exception: () => void 0,
        infoTick: () => void 0,
        setConfig: e => {
            e.captureExceptions, e.traceInternals
        }
    }, ["log", "warn", "error"].forEach(e => {
        P[e] = () => void 0
    }), P);class p0 extends Error {
        constructor() {
            super("Event buffer exceeded maximum size of 20000000.")
        }
    }
    class p1 {
        constructor() {
            this.events = [], this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
        }
        get hasEvents() {
            return this.events.length > 0
        }
        get type() {
            return "sync"
        }
        destroy() {
            this.events = []
        }
        async addEvent(e) {
            let t = JSON.stringify(e).length;
            if (this._totalSize += t, this._totalSize > 2e7) throw new p0;
            this.events.push(e)
        }
        finish() {
            return new Promise(e => {
                let t = this.events;
                this.clear(), e(JSON.stringify(t))
            })
        }
        clear() {
            this.events = [], this._totalSize = 0, this.hasCheckout = !1
        }
        getEarliestTimestamp() {
            let e = null;
            for (let {
                    timestamp: t
                } of this.events)(null === e || t < e) && (e = t);
            return null === e ? e : pR(e)
        }
    }
    class p2 {
        constructor(e) {
            this._worker = e, this._id = 0
        }
        ensureReady() {
            return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise((e, t) => {
                this._worker.addEventListener("message", ({
                    data: n
                }) => {
                    n.success ? e() : t(Error("Received worker message with unsuccessful status"))
                }, {
                    once: !0
                }), this._worker.addEventListener("error", e => {
                    t(Error(`Failed to load Replay compression worker: ${e instanceof ErrorEvent&&e.message?e.message:"Unknown error. This can happen due to CSP policy restrictions, network issues, or the worker script failing to load."}`))
                }, {
                    once: !0
                })
            })), this._ensureReadyPromise
        }
        destroy() {
            this._worker.terminate()
        }
        postMessage(e, t) {
            let n = this._getAndIncrementId();
            return new Promise((r, i) => {
                let s = ({
                    data: t
                }) => {
                    if (t.method === e && t.id === n) {
                        if (this._worker.removeEventListener("message", s), !t.success) return void i(Error("Error in compression worker"));
                        r(t.response)
                    }
                };
                this._worker.addEventListener("message", s), this._worker.postMessage({
                    id: n,
                    method: e,
                    arg: t
                })
            })
        }
        _getAndIncrementId() {
            return this._id++
        }
    }
    class p3 {
        constructor(e) {
            this._worker = new p2(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
        }
        get hasEvents() {
            return !!this._earliestTimestamp
        }
        get type() {
            return "worker"
        }
        ensureReady() {
            return this._worker.ensureReady()
        }
        destroy() {
            this._worker.destroy()
        }
        addEvent(e) {
            let t = pR(e.timestamp);
            (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
            let n = JSON.stringify(e);
            return (this._totalSize += n.length, this._totalSize > 2e7) ? Promise.reject(new p0) : this._sendEventToWorker(n)
        }
        finish() {
            return this._finishRequest()
        }
        clear() {
            this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, e => {})
        }
        getEarliestTimestamp() {
            return this._earliestTimestamp
        }
        _sendEventToWorker(e) {
            return this._worker.postMessage("addEvent", e)
        }
        async _finishRequest() {
            let e = await this._worker.postMessage("finish");
            return this._earliestTimestamp = null, this._totalSize = 0, e
        }
    }
    class p5 {
        constructor(e) {
            this._fallback = new p1, this._compression = new p3(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
        }
        get waitForCheckout() {
            return this._used.waitForCheckout
        }
        get type() {
            return this._used.type
        }
        get hasEvents() {
            return this._used.hasEvents
        }
        get hasCheckout() {
            return this._used.hasCheckout
        }
        set hasCheckout(e) {
            this._used.hasCheckout = e
        }
        set waitForCheckout(e) {
            this._used.waitForCheckout = e
        }
        destroy() {
            this._fallback.destroy(), this._compression.destroy()
        }
        clear() {
            return this._used.clear()
        }
        getEarliestTimestamp() {
            return this._used.getEarliestTimestamp()
        }
        addEvent(e) {
            return this._used.addEvent(e)
        }
        async finish() {
            return await this.ensureWorkerIsLoaded(), this._used.finish()
        }
        ensureWorkerIsLoaded() {
            return this._ensureWorkerIsLoadedPromise
        }
        async _ensureWorkerIsLoaded() {
            try {
                await this._compression.ensureReady()
            } catch (e) {
                return
            }
            await this._switchToCompressionWorker()
        }
        async _switchToCompressionWorker() {
            let {
                events: e,
                hasCheckout: t,
                waitForCheckout: n
            } = this._fallback, r = [];
            for (let t of e) r.push(this._compression.addEvent(t));
            this._compression.hasCheckout = t, this._compression.waitForCheckout = n, this._used = this._compression;
            try {
                await Promise.all(r), this._fallback.clear()
            } catch (e) {}
        }
    }

    function p4() {
        try {
            return "sessionStorage" in t3 && !!t3.sessionStorage
        } catch {
            return !1
        }
    }

    function p6(e) {
        return void 0 !== e && Math.random() < e
    }

    function p8(e) {
        if (p4()) try {
            t3.sessionStorage.setItem(c1, JSON.stringify(e))
        } catch {}
    }

    function p7(e) {
        let t = Date.now(),
            n = e.id || nW(),
            r = e.started || t,
            i = e.lastActivity || t,
            s = e.segmentId || 0,
            o = e.sampled;
        return {
            id: n,
            started: r,
            lastActivity: i,
            segmentId: s,
            sampled: o,
            previousSessionId: e.previousSessionId,
            dirty: e.dirty || !1
        }
    }

    function p9({
        sessionSampleRate: e,
        allowBuffering: t,
        stickySession: n = !1
    }, {
        previousSessionId: r
    } = {}) {
        let i = p7({
            sampled: p6(e) ? "session" : !!t && "buffer",
            previousSessionId: r
        });
        return n && p8(i), i
    }

    function he(e, t, n = +new Date) {
        return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n
    }

    function ht(e, {
        maxReplayDuration: t,
        sessionIdleExpire: n,
        targetTime: r = Date.now()
    }) {
        return he(e.started, t, r) || he(e.lastActivity, n, r)
    }

    function hn(e, {
        sessionIdleExpire: t,
        maxReplayDuration: n
    }) {
        return !!ht(e, {
            sessionIdleExpire: t,
            maxReplayDuration: n
        }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
    }

    function hr({
        sessionIdleExpire: e,
        maxReplayDuration: t,
        previousSessionId: n
    }, r) {
        let i = r.stickySession && function() {
            if (!p4()) return null;
            try {
                let e = t3.sessionStorage.getItem(c1);
                if (!e) return null;
                let t = JSON.parse(e);
                return p7(t)
            } catch {
                return null
            }
        }();
        return i ? hn(i, {
            sessionIdleExpire: e,
            maxReplayDuration: t
        }) ? p9(r, {
            previousSessionId: i.id
        }) : i : p9(r, {
            previousSessionId: n
        })
    }

    function hi(e, t, n) {
        return !!ho(e, t) && (hs(e, t, n), !0)
    }
    async function hs(e, t, n) {
        let {
            eventBuffer: r
        } = e;
        if (!r || r.waitForCheckout && !n) return null;
        let i = "buffer" === e.recordingMode;
        try {
            n && i && r.clear(), n && (r.hasCheckout = !0, r.waitForCheckout = !1);
            let s = e.getOptions(),
                o = function(e, t) {
                    try {
                        if ("function" == typeof t && e.type === d3.Custom) return t(e)
                    } catch (e) {
                        return null
                    }
                    return e
                }(t, s.beforeAddRecordingEvent);
            if (!o) return;
            return await r.addEvent(o)
        } catch (s) {
            let t = s && s instanceof p0,
                n = rl();
            if (n && n.recordDroppedEvent(t ? "buffer_overflow" : "internal_sdk_error", "replay"), t && i) return r.clear(), r.waitForCheckout = !0, null;
            e.handleException(s), await e.stop({
                reason: t ? "addEventSizeExceeded" : "addEvent"
            })
        }
    }

    function ho(e, t) {
        if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
        let n = pR(t.timestamp);
        return !(n + e.timeouts.sessionIdlePause < Date.now()) && !(n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration)
    }

    function ha(e) {
        return "transaction" === e.type
    }

    function hl(e) {
        return "feedback" === e.type
    }

    function hu(e) {
        return !!e.category
    }

    function hc() {
        let e = rr().getPropagationContext().dsc;
        e && delete e.replay_id;
        let t = r9();
        if (t) {
            let e = io(t);
            delete e.replay_id
        }
    }

    function hd(e, t) {
        return t.map(({
            type: t,
            start: n,
            end: r,
            name: i,
            data: s
        }) => {
            let o = e.throttledAddEvent({
                type: d3.Custom,
                timestamp: n,
                data: {
                    tag: "performanceSpan",
                    payload: {
                        op: t,
                        description: i,
                        startTimestamp: n,
                        endTimestamp: r,
                        data: s
                    }
                }
            });
            return "string" == typeof o ? Promise.resolve(null) : o
        })
    }

    function hp(e, t) {
        e.isEnabled() && null !== t && (uZ(t.name, rl()) || e.addUpdate(() => (hd(e, [t]), !0)))
    }

    function hh(e) {
        if (!e) return;
        let t = new TextEncoder;
        try {
            if ("string" == typeof e) return t.encode(e).length;
            if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
            if (e instanceof FormData) {
                let n = u7(e);
                return t.encode(n).length
            }
            if (e instanceof Blob) return e.size;
            if (e instanceof ArrayBuffer) return e.byteLength
        } catch {}
    }

    function hf(e) {
        if (!e) return;
        let t = parseInt(e, 10);
        return isNaN(t) ? void 0 : t
    }

    function hm(e, t) {
        if (!e) return {
            headers: {},
            size: void 0,
            _meta: {
                warnings: [t]
            }
        };
        let n = { ...e._meta
            },
            r = n.warnings || [];
        return n.warnings = [...r, t], e._meta = n, e
    }

    function hg(e, t) {
        if (!t) return null;
        let {
            startTimestamp: n,
            endTimestamp: r,
            url: i,
            method: s,
            statusCode: o,
            request: a,
            response: l
        } = t;
        return {
            type: e,
            start: n / 1e3,
            end: r / 1e3,
            name: i,
            data: {
                method: s,
                statusCode: o,
                request: a,
                response: l
            }
        }
    }

    function h_(e) {
        return {
            headers: {},
            size: e,
            _meta: {
                warnings: ["URL_SKIPPED"]
            }
        }
    }

    function hy(e, t, n) {
        if (!t && 0 === Object.keys(e).length) return;
        if (!t) return {
            headers: e
        };
        if (!n) return {
            headers: e,
            size: t
        };
        let r = {
                headers: e,
                size: t
            },
            {
                body: i,
                warnings: s
            } = function(e) {
                var t;
                let n, r;
                if (!e || "string" != typeof e) return {
                    body: e
                };
                let i = e.length > 15e4,
                    s = (n = (t = e)[0], r = t[t.length - 1], "[" === n && "]" === r || "{" === n && "}" === r);
                if (i) {
                    let t = e.slice(0, 15e4);
                    return s ? {
                        body: t,
                        warnings: ["MAYBE_JSON_TRUNCATED"]
                    } : {
                        body: `${t}…`,
                        warnings: ["TEXT_TRUNCATED"]
                    }
                }
                if (s) try {
                    return {
                        body: JSON.parse(e)
                    }
                } catch {}
                return {
                    body: e
                }
            }(n);
        return r.body = i, s ? .length && (r._meta = {
            warnings: s
        }), r
    }

    function hv(e, t) {
        return Object.entries(e).reduce((n, [r, i]) => {
            let s = r.toLowerCase();
            return t.includes(s) && e[r] && (n[s] = i), n
        }, {})
    }

    function hb(e, t = t3.document.baseURI) {
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(t3.location.origin)) return e;
        let n = new URL(e, t);
        if (n.origin !== new URL(t).origin) return e;
        let r = n.href;
        return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
    }
    async function hS(e, t, n) {
        try {
            let r = await hw(e, t, n),
                i = hg("resource.fetch", r);
            hp(n.replay, i)
        } catch (e) {}
    }
    async function hw(e, t, n) {
        var r, i;
        let s = Date.now(),
            {
                startTimestamp: o = s,
                endTimestamp: a = s
            } = t,
            {
                url: l,
                method: u,
                status_code: c = 0,
                request_body_size: d,
                response_body_size: p
            } = e.data,
            h = (r = n.networkDetailAllowUrls, nB(hb(l), r) && (i = n.networkDetailDenyUrls, !nB(hb(l), i)));
        return {
            startTimestamp: o,
            endTimestamp: a,
            url: l,
            method: u,
            statusCode: c,
            request: h ? function({
                networkCaptureBodies: e,
                networkRequestHeaders: t
            }, n, r) {
                var i, s;
                let o = n ? (i = n, s = t, 1 === i.length && "string" != typeof i[0] ? hC(i[0], s) : 2 === i.length ? hC(i[1], s) : {}) : {};
                if (!e) return hy(o, r, void 0);
                let [a, l] = u9(ce(n), pQ), u = hy(o, r, a);
                return l ? hm(u, l) : u
            }(n, t.input, d) : h_(d),
            response: await hk(h, n, t.response, p)
        }
    }
    async function hk(e, {
        networkCaptureBodies: t,
        networkResponseHeaders: n
    }, r, i) {
        if (!e && void 0 !== i) return h_(i);
        let s = r ? hx(r.headers, n) : {};
        if (!r || !t && void 0 !== i) return hy(s, i, void 0);
        let [o, a] = await hE(r), l = function(e, {
            networkCaptureBodies: t,
            responseBodySize: n,
            captureDetails: r,
            headers: i
        }) {
            try {
                let s = e ? .length && void 0 === n ? hh(e) : n;
                if (!r) return h_(s);
                if (t) return hy(i, s, e);
                return hy(i, s, void 0)
            } catch (e) {
                return hy(i, n, void 0)
            }
        }(o, {
            networkCaptureBodies: t,
            responseBodySize: i,
            captureDetails: e,
            headers: s
        });
        return a ? hm(l, a) : l
    }
    async function hE(e) {
        let t = function(e) {
            try {
                return e.clone()
            } catch (e) {}
        }(e);
        if (!t) return [void 0, "BODY_PARSE_ERROR"];
        try {
            var n;
            return [await (n = t, new Promise((e, t) => {
                let r = lY(() => t(Error("Timeout while trying to read response body")), 500);
                hI(n).then(t => e(t), e => t(e)).finally(() => clearTimeout(r))
            }))]
        } catch (e) {
            if (e instanceof Error && e.message.indexOf("Timeout") > -1) return [void 0, "BODY_PARSE_TIMEOUT"];
            return [void 0, "BODY_PARSE_ERROR"]
        }
    }

    function hx(e, t) {
        let n = {};
        return t.forEach(t => {
            e.get(t) && (n[t] = e.get(t))
        }), n
    }

    function hC(e, t) {
        if (!e) return {};
        let n = e.headers;
        return n ? n instanceof Headers ? hx(n, t) : Array.isArray(n) ? {} : hv(n, t) : {}
    }
    async function hI(e) {
        return await e.text()
    }
    async function hT(e, t, n) {
        try {
            let r = function(e, t, n) {
                    var r, i;
                    let s = Date.now(),
                        {
                            startTimestamp: o = s,
                            endTimestamp: a = s,
                            input: l,
                            xhr: u
                        } = t,
                        {
                            url: c,
                            method: d,
                            status_code: p = 0,
                            request_body_size: h,
                            response_body_size: f
                        } = e.data;
                    if (!c) return null;
                    if (!u || (r = n.networkDetailAllowUrls, !nB(hb(c), r)) || (i = n.networkDetailDenyUrls, nB(hb(c), i))) {
                        let e = h_(h);
                        return {
                            startTimestamp: o,
                            endTimestamp: a,
                            url: c,
                            method: d,
                            statusCode: p,
                            request: e,
                            response: h_(f)
                        }
                    }
                    let m = u[uk],
                        g = m ? hv(m.request_headers, n.networkRequestHeaders) : {},
                        _ = hv(ct(u), n.networkResponseHeaders),
                        [y, v] = n.networkCaptureBodies ? u9(l, pQ) : [void 0],
                        [b, S] = n.networkCaptureBodies ? function(e) {
                            let t = [];
                            try {
                                return [e.responseText]
                            } catch (e) {
                                t.push(e)
                            }
                            try {
                                var n = e.response,
                                    r = e.responseType;
                                try {
                                    if ("string" == typeof n) return [n];
                                    if (n instanceof Document) return [n.body.outerHTML];
                                    if ("json" === r && n && "object" == typeof n) return [JSON.stringify(n)];
                                    if (!n) return [void 0]
                                } catch (e) {
                                    return [void 0, "BODY_PARSE_ERROR"]
                                }
                                return [void 0, "UNPARSEABLE_BODY_TYPE"]
                            } catch (e) {
                                t.push(e)
                            }
                            return [void 0]
                        }(u) : [void 0],
                        w = hy(g, h, y),
                        k = hy(_, f, b);
                    return {
                        startTimestamp: o,
                        endTimestamp: a,
                        url: c,
                        method: d,
                        statusCode: p,
                        request: v ? hm(w, v) : w,
                        response: S ? hm(k, S) : k
                    }
                }(e, t, n),
                i = hg("resource.xhr", r);
            hp(n.replay, i)
        } catch (e) {}
    }
    async function hM(e) {
        try {
            return Promise.all(hd(e, [function(e) {
                let {
                    jsHeapSizeLimit: t,
                    totalJSHeapSize: n,
                    usedJSHeapSize: r
                } = e, i = Date.now() / 1e3;
                return {
                    type: "memory",
                    name: "memory",
                    start: i,
                    end: i,
                    data: {
                        memory: {
                            jsHeapSizeLimit: t,
                            totalJSHeapSize: n,
                            usedJSHeapSize: r
                        }
                    }
                }
            }(t3.performance.memory)]))
        } catch {
            return []
        }
    }
    let hA = t3.navigator;async function hR({
        client: e,
        scope: t,
        replayId: n,
        event: r
    }) {
        let i = {
            event_id: n,
            integrations: "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
        };
        e.emit("preprocessEvent", r, i);
        let s = await id(e.getOptions(), r, i, t, e, ri());
        if (!s) return null;
        e.emit("postprocessEvent", s, i), s.platform = s.platform || "javascript";
        let o = e.getSdkMetadata(),
            {
                name: a,
                version: l,
                settings: u
            } = o ? .sdk || {};
        return s.sdk = { ...s.sdk,
            name: a || "sentry.javascript.unknown",
            version: l || "0.0.0",
            settings: u
        }, s
    }
    async function hO({
        recordingData: e,
        replayId: t,
        segmentId: n,
        eventContext: r,
        timestamp: i,
        session: s
    }) {
        var o;
        let a, l = function({
                recordingData: e,
                headers: t
            }) {
                let n, r = `${JSON.stringify(t)}
`;
                if ("string" == typeof e) n = `${r}${e}`;
                else {
                    let t = new TextEncoder().encode(r);
                    (n = new Uint8Array(t.length + e.length)).set(t), n.set(e, t.length)
                }
                return n
            }({
                recordingData: e,
                headers: {
                    segment_id: n
                }
            }),
            {
                urls: u,
                errorIds: c,
                traceIds: d,
                initialTimestamp: p
            } = r,
            h = rl(),
            f = rr(),
            m = h ? .getTransport(),
            g = h ? .getDsn();
        if (!h || !m || !g || !s.sampled) return Promise.resolve({});
        let _ = {
                type: "replay_event",
                replay_start_timestamp: p / 1e3,
                timestamp: i / 1e3,
                error_ids: c,
                trace_ids: d,
                urls: u,
                replay_id: t,
                segment_id: n,
                replay_type: s.sampled
            },
            y = await hR({
                scope: f,
                client: h,
                replayId: t,
                event: _
            });
        if (!y) return h.recordDroppedEvent("event_processor", "replay"), Promise.resolve({});
        delete y.sdkProcessingMetadata;
        let v = (o = h.getOptions().tunnel, iz(iQ(y, iZ(y), o, g), [
            [{
                type: "replay_event"
            }, y],
            [{
                type: "replay_recording",
                length: "string" == typeof l ? new TextEncoder().encode(l).length : l.length
            }, l]
        ]));
        try {
            a = await m.send(v)
        } catch (t) {
            let e = Error(c2);
            try {
                e.cause = t
            } catch {}
            throw e
        }
        let b = o0({}, a);
        if (oQ(b, "replay")) throw new hP(b);
        if ("number" == typeof a.statusCode && (a.statusCode < 200 || a.statusCode >= 300)) throw new hL(a.statusCode);
        return a
    }
    class hL extends Error {
        constructor(e) {
            super(`Transport returned status code ${e}`)
        }
    }
    class hP extends Error {
        constructor(e) {
            super("Rate limit hit"), this.rateLimits = e
        }
    }
    class hN extends Error {
        constructor() {
            super("Session is too long, not sending replay")
        }
    }
    async function hD(e, t = {
        count: 0,
        interval: 5e3
    }) {
        let {
            recordingData: n,
            onError: r
        } = e;
        if (n.length) try {
            return await hO(e), !0
        } catch (n) {
            if (n instanceof hL || n instanceof hP) throw n;
            if (i_("Replays", {
                    _retryCount: t.count
                }), r && r(n), t.count >= 3) {
                let e = Error(`${c2} - max retries exceeded`);
                try {
                    e.cause = n
                } catch {}
                throw e
            }
            return t.interval *= ++t.count, new Promise((n, r) => {
                lY(async () => {
                    try {
                        await hD(e, t), n(!0)
                    } catch (e) {
                        r(e)
                    }
                }, t.interval)
            })
        }
    }
    let h$ = "__THROTTLED";class hj {
        constructor({
            options: e,
            recordingOptions: t
        }) {
            this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
                sessionIdlePause: 3e5,
                sessionIdleExpire: 9e5
            }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._requiresManualStart = !1, this._hasInitializedCoreListeners = !1, this._context = {
                errorIds: new Set,
                traceIds: new Set,
                urls: [],
                initialTimestamp: Date.now(),
                initialUrl: ""
            }, this._recordingOptions = t, this._options = e, this._debouncedFlush = function(e, t, n) {
                return function(e, t, n) {
                    let r, i, s, o = n ? .maxWait ? Math.max(n.maxWait, t) : 0,
                        a = n ? .setTimeoutImpl || setTimeout;

                    function l() {
                        return u(), r = e()
                    }

                    function u() {
                        void 0 !== i && clearTimeout(i), void 0 !== s && clearTimeout(s), i = s = void 0
                    }

                    function c() {
                        return i && clearTimeout(i), i = a(l, t), o && void 0 === s && (s = a(l, o)), r
                    }
                    return c.cancel = u, c.flush = function() {
                        return void 0 !== i || void 0 !== s ? l() : r
                    }, c
                }(e, t, { ...n,
                    setTimeoutImpl: lY
                })
            }(() => this._flush(), this._options.flushMinDelay, {
                maxWait: this._options.flushMaxDelay
            }), this._throttledAddEvent = function(e) {
                let t = new Map,
                    n = !1;
                return (...r) => {
                    let i, s = Math.floor(Date.now() / 1e3);
                    if (i = s - 5, t.forEach((e, n) => {
                            n < i && t.delete(n)
                        }), [...t.values()].reduce((e, t) => e + t, 0) >= 300) {
                        let e = n;
                        return n = !0, e ? "__SKIPPED" : h$
                    }
                    n = !1;
                    let o = t.get(s) || 0;
                    return t.set(s, o + 1), e(...r)
                }
            }((e, t) => ho(this, e) ? hs(this, e, t) : Promise.resolve(null));
            const {
                slowClickTimeout: n,
                slowClickIgnoreSelectors: r
            } = this.getOptions(), i = n ? {
                threshold: Math.min(3e3, n),
                timeout: n,
                scrollTimeout: 300,
                ignoreSelector: r ? r.join(",") : ""
            } : void 0;
            i && (this.clickDetector = new pj(this, i)), this._handleVisibilityChange = () => {
                "visible" === t3.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
            }, this._handleWindowBlur = () => {
                let e = pB({
                    category: "ui.blur"
                });
                this._doChangeToBackgroundTasks(e)
            }, this._handleWindowFocus = () => {
                let e = pB({
                    category: "ui.focus"
                });
                this._doChangeToForegroundTasks(e)
            }, this._handleKeyboardEvent = e => {
                ! function(e, t) {
                    if (!e.isEnabled()) return;
                    e.updateUserActivity();
                    let n = function(e) {
                        var t;
                        let {
                            metaKey: n,
                            shiftKey: r,
                            ctrlKey: i,
                            altKey: s,
                            key: o,
                            target: a
                        } = e;
                        if (!a || "INPUT" === (t = a).tagName || "TEXTAREA" === t.tagName || t.isContentEditable || !o) return null;
                        let l = n || i || s,
                            u = 1 === o.length;
                        if (!l && u) return null;
                        let c = nd(a, {
                                maxStringLength: 200
                            }) || "<unknown>",
                            d = pH(a, c);
                        return pB({
                            category: "ui.keyDown",
                            message: c,
                            data: { ...d.data,
                                metaKey: n,
                                shiftKey: r,
                                ctrlKey: i,
                                altKey: s,
                                key: o
                            }
                        })
                    }(t);
                    n && pL(e, n)
                }(this, e)
            }
        }
        getContext() {
            return this._context
        }
        isEnabled() {
            return this._isEnabled
        }
        isPaused() {
            return this._isPaused
        }
        isRecordingCanvas() {
            return !!this._canvas
        }
        getOptions() {
            return this._options
        }
        handleException(e) {
            this._options.onError && this._options.onError(e)
        }
        initializeSampling(e) {
            let {
                errorSampleRate: t,
                sessionSampleRate: n
            } = this._options, r = t <= 0 && n <= 0;
            this._requiresManualStart = r, r || (this._initializeSessionForSampling(e), this.session && !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", this._initializeRecording()))
        }
        start() {
            if (this._isEnabled && "session" === this.recordingMode || this._isEnabled && "buffer" === this.recordingMode) return;
            this._updateUserActivity();
            let e = hr({
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire
            }, {
                stickySession: this._options.stickySession,
                sessionSampleRate: 1,
                allowBuffering: !1
            });
            this.session = e, this.recordingMode = "session", this._initializeRecording()
        }
        startBuffering() {
            if (this._isEnabled) return;
            let e = hr({
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration
            }, {
                stickySession: this._options.stickySession,
                sessionSampleRate: 0,
                allowBuffering: !0
            });
            this.session = e, this.recordingMode = "buffer", this._initializeRecording()
        }
        startRecording() {
            try {
                var e;
                let t, n = this._canvas;
                this._stopRecording = pA({ ...this._recordingOptions,
                    ..."buffer" === this.recordingMode ? {
                        checkoutEveryNms: 6e4
                    } : this._options._experiments.continuousCheckout && {
                        checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
                    },
                    emit: (e = this, t = !1, (n, r) => {
                        if (!e.checkAndHandleExpiredSession()) return;
                        let i = r || !t;
                        t = !0, e.clickDetector && function(e, t) {
                            try {
                                var n;
                                if (n = t, 3 !== n.type) return;
                                let {
                                    source: r
                                } = t.data;
                                if (p$.has(r) && e.registerMutation(t.timestamp), r === d5.Scroll && e.registerScroll(t.timestamp), t.data.source === d5.MouseInteraction) {
                                    let {
                                        type: n,
                                        id: r
                                    } = t.data, i = pA.mirror.getNode(r);
                                    i instanceof HTMLElement && n === d4.Click && e.registerClick(i)
                                }
                            } catch {}
                        }(e.clickDetector, n), e.addUpdate(() => {
                            if ("buffer" === e.recordingMode && i && e.setInitialState(), !hi(e, n, i)) return !0;
                            if (!i) return !1;
                            let t = e.session;
                            if (function(e, t) {
                                    if (t && e.session ? .segmentId === 0) {
                                        let t;
                                        hi(e, (t = e.getOptions(), {
                                            type: d3.Custom,
                                            timestamp: Date.now(),
                                            data: {
                                                tag: "options",
                                                payload: {
                                                    shouldRecordCanvas: e.isRecordingCanvas(),
                                                    sessionSampleRate: t.sessionSampleRate,
                                                    errorSampleRate: t.errorSampleRate,
                                                    useCompressionOption: t.useCompression,
                                                    blockAllMedia: t.blockAllMedia,
                                                    maskAllText: t.maskAllText,
                                                    maskAllInputs: t.maskAllInputs,
                                                    useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                                    networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                                    networkCaptureBodies: t.networkCaptureBodies,
                                                    networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                                    networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                                }
                                            }
                                        }), !1)
                                    }
                                }(e, i), "buffer" === e.recordingMode && t && e.eventBuffer && !t.dirty) {
                                let n = e.eventBuffer.getEarliestTimestamp();
                                n && (t.started = n, e.getOptions().stickySession && p8(t))
                            }
                            return !!t ? .previousSessionId || ("session" === e.recordingMode && e.flush(), !0)
                        })
                    }),
                    .../iPhone|iPad|iPod/i.test(hA ? .userAgent ? ? "") || /Macintosh/i.test(hA ? .userAgent ? ? "") && hA ? .maxTouchPoints && hA ? .maxTouchPoints > 1 ? {
                        sampling: {
                            mousemove: !1
                        }
                    } : {},
                    onMutation : this._onMutationHandler.bind(this),
                    ...n ? {
                        recordCanvas: n.recordCanvas,
                        getCanvasManager: n.getCanvasManager,
                        sampling: n.sampling,
                        dataURLOptions: n.dataURLOptions
                    } : {}
                })
            } catch (e) {
                this.handleException(e)
            }
        }
        stopRecording() {
            try {
                return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
            } catch (e) {
                return this.handleException(e), !1
            }
        }
        async stop({
            forceFlush: e = !1,
            reason: t
        } = {}) {
            if (this._isEnabled) {
                this._isEnabled = !1, this.recordingMode = "buffer";
                try {
                    hc(), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({
                            force: !0
                        }), this.eventBuffer ? .destroy(), this.eventBuffer = null,
                        function() {
                            if (p4()) try {
                                t3.sessionStorage.removeItem(c1)
                            } catch {}
                        }(), this.session = void 0
                } catch (e) {
                    this.handleException(e)
                }
            }
        }
        pause() {
            this._isPaused || (this._isPaused = !0, this.stopRecording())
        }
        resume() {
            this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording())
        }
        async sendBufferedReplayOrFlush({
            continueRecording: e = !0
        } = {}) {
            if ("session" === this.recordingMode) return this.flushImmediate();
            let t = Date.now();
            await this.flushImmediate();
            let n = this.stopRecording();
            e && n && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this.session.dirty = !1, this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession()), this.startRecording())
        }
        addUpdate(e) {
            let t = e();
            "buffer" !== this.recordingMode && this._isEnabled && !0 !== t && this._debouncedFlush()
        }
        triggerUserActivity() {
            if (this._updateUserActivity(), !this._stopRecording) {
                if (!this._checkSession()) return;
                this.resume();
                return
            }
            this.checkAndHandleExpiredSession(), this._updateSessionActivity()
        }
        updateUserActivity() {
            this._updateUserActivity(), this._updateSessionActivity()
        }
        conditionalFlush() {
            return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
        }
        flush() {
            return this._debouncedFlush()
        }
        flushImmediate() {
            return this._debouncedFlush(), this._debouncedFlush.flush()
        }
        cancelFlush() {
            this._debouncedFlush.cancel()
        }
        getSessionId(e) {
            if (!e || this.session ? .sampled !== !1) return this.session ? .id
        }
        checkAndHandleExpiredSession() {
            return this._lastActivity && he(this._lastActivity, this.timeouts.sessionIdlePause) && this.session ? .sampled === "session" ? void this.pause() : !!this._checkSession()
        }
        setInitialState() {
            let e = `${t3.location.pathname}${t3.location.hash}${t3.location.search}`,
                t = `${t3.location.origin}${e}`;
            this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t)
        }
        throttledAddEvent(e, t) {
            let n = this._throttledAddEvent(e, t);
            if (n === h$) {
                let e = pB({
                    category: "replay.throttled"
                });
                this.addUpdate(() => !hi(this, {
                    type: 5,
                    timestamp: e.timestamp || 0,
                    data: {
                        tag: "breadcrumb",
                        payload: e,
                        metric: !0
                    }
                }))
            }
            return n
        }
        getCurrentRoute() {
            let e = this.lastActiveSpan || r9(),
                t = e && r7(e),
                n = (t && r1(t).data || {})[rg];
            if (t && n && ["route", "custom"].includes(n)) return r1(t).description
        }
        _initializeRecording() {
            this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
                useCompression: e,
                workerUrl: t
            }) {
                if (e && window.Worker) {
                    let e = function(e) {
                        try {
                            let t = e || function() {
                                if ("u" < typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ || !__SENTRY_EXCLUDE_REPLAY_WORKER__) {
                                    let e;
                                    return e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(t,n){return t.f-n.f}),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort(function(t,n){return p[n.s]-p[t.s]||t.f-n.f});s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,s=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),a=s.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(s,n),O(s,a-8,r.d()),O(s,a-4,e),s}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){j.prototype.flush.call(this)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(G)return G.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J((t,n)=>{this.deflate.push(t,n)}),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}}),postMessage({id:void 0,method:"init",success:!0,response:void 0});']), URL.createObjectURL(e)
                                }
                                return ""
                            }();
                            if (!t) return;
                            let n = new Worker(t);
                            return new p5(n)
                        } catch (e) {}
                    }(t);
                    if (e) return e
                }
                return new p1
            }({
                useCompression: this._options.useCompression,
                workerUrl: this._options.workerUrl
            }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording()
        }
        _initializeSessionForSampling(e) {
            let t = this._options.errorSampleRate > 0,
                n = hr({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    previousSessionId: e
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: t
                });
            this.session = n
        }
        _checkSession() {
            if (!this.session) return !1;
            let e = this.session;
            return !hn(e, {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration
            }) || (this._refreshSession(e), !1)
        }
        async _refreshSession(e) {
            this._isEnabled && (await this.stop({
                reason: "refresh session"
            }), this.initializeSampling(e.id))
        }
        _addListeners() {
            try {
                t3.document.addEventListener("visibilitychange", this._handleVisibilityChange), t3.addEventListener("blur", this._handleWindowBlur), t3.addEventListener("focus", this._handleWindowFocus), t3.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (! function(e) {
                    let t, n = rl();
                    ub(t => {
                        var n, r;
                        if (!e.isEnabled()) return;
                        let i = function(e) {
                            let {
                                target: t,
                                message: n
                            } = function(e) {
                                let t, n = "click" === e.name,
                                    r = null;
                                try {
                                    r = n ? pN(e.event) : pD(e.event), t = nd(r, {
                                        maxStringLength: 200
                                    }) || "<unknown>"
                                } catch {
                                    t = "<unknown>"
                                }
                                return {
                                    target: r,
                                    message: t
                                }
                            }(e);
                            return pB({
                                category: `ui.${e.name}`,
                                ...pH(t, n)
                            })
                        }(t);
                        if (!i) return;
                        let s = "click" === t.name,
                            o = s ? t.event : void 0;
                        s && e.clickDetector && o ? .target && !o.altKey && !o.metaKey && !o.ctrlKey && !o.shiftKey && (n = e.clickDetector, r = pN(t.event), n.handleClick(i, r)), pL(e, i)
                    }), uC(t => {
                        if (!e.isEnabled()) return;
                        let n = function(e) {
                            let {
                                from: t,
                                to: n
                            } = e, r = Date.now() / 1e3;
                            return {
                                type: "navigation.push",
                                start: r,
                                end: r,
                                name: n,
                                data: {
                                    previous: t
                                }
                            }
                        }(t);
                        null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (hd(e, [n]), !1)))
                    }), (t = rl()) && t.on("beforeAddBreadcrumb", t => (function(e, t) {
                        var n;
                        if (!e.isEnabled() || !hu(t)) return;
                        let r = (n = t, !hu(n) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(n.category) || n.category.startsWith("ui.") ? null : "console" === n.category ? function(e) {
                            let t = e.data ? .arguments;
                            if (!Array.isArray(t) || 0 === t.length) return pB(e);
                            let n = !1,
                                r = t.map(e => {
                                    if (!e) return e;
                                    if ("string" == typeof e) return e.length > 5e3 ? (n = !0, `${e.slice(0,5e3)}…`) : e;
                                    if ("object" == typeof e) try {
                                        let t = rm(e, 7);
                                        if (JSON.stringify(t).length > 5e3) return n = !0, `${JSON.stringify(t,null,2).slice(0,5e3)}…`;
                                        return t
                                    } catch {}
                                    return e
                                });
                            return pB({ ...e,
                                data: { ...e.data,
                                    arguments: r,
                                    ...n ? {
                                        _meta: {
                                            warnings: ["CONSOLE_ARG_TRUNCATED"]
                                        }
                                    } : {}
                                }
                            })
                        }(n) : pB(n));
                        r && pL(e, r)
                    })(e, t));
                    let r = rl();
                    try {
                        let {
                            networkDetailAllowUrls: t,
                            networkDetailDenyUrls: n,
                            networkCaptureBodies: i,
                            networkRequestHeaders: s,
                            networkResponseHeaders: o
                        } = e.getOptions(), a = {
                            replay: e,
                            networkDetailAllowUrls: t,
                            networkDetailDenyUrls: n,
                            networkCaptureBodies: i,
                            networkRequestHeaders: s,
                            networkResponseHeaders: o
                        };
                        r && r.on("beforeAddBreadcrumb", (e, t) => (function(e, t, n) {
                            if (t.data) try {
                                var r, i, s, o;
                                r = t, "xhr" === r.category && (i = n, i ? .xhr) && (! function(e, t) {
                                    let {
                                        xhr: n,
                                        input: r
                                    } = t;
                                    if (!n) return;
                                    let i = hh(r),
                                        s = n.getResponseHeader("content-length") ? hf(n.getResponseHeader("content-length")) : function(e, t) {
                                            try {
                                                let n = "json" === t && e && "object" == typeof e ? JSON.stringify(e) : e;
                                                return hh(n)
                                            } catch {
                                                return
                                            }
                                        }(n.response, n.responseType);
                                    void 0 !== i && (e.data.request_body_size = i), void 0 !== s && (e.data.response_body_size = s)
                                }(t, n), hT(t, n, e)), s = t, "fetch" === s.category && (o = n, o ? .response) && (! function(e, t) {
                                    let {
                                        input: n,
                                        response: r
                                    } = t, i = hh(n ? ce(n) : void 0), s = r ? hf(r.headers.get("content-length")) : void 0;
                                    void 0 !== i && (e.data.request_body_size = i), void 0 !== s && (e.data.response_body_size = s)
                                }(t, n), hS(t, n, e))
                            } catch (e) {}
                        })(a, e, t))
                    } catch {}
                    iM(Object.assign((t, n) => {
                        if (!e.isEnabled() || e.isPaused()) return t;
                        if ("replay_event" === t.type) return delete t.breadcrumbs, t;
                        if (t.type && !ha(t) && !hl(t)) return t;
                        if (!e.checkAndHandleExpiredSession()) return hc(), t;
                        if (hl(t)) return e.flush(), t.contexts.feedback.replay_id = e.getSessionId(), e.triggerUserActivity(), e.addUpdate(() => !t.timestamp || (e.throttledAddEvent({
                            type: d3.Custom,
                            timestamp: 1e3 * t.timestamp,
                            data: {
                                tag: "breadcrumb",
                                payload: {
                                    timestamp: t.timestamp,
                                    type: "default",
                                    category: "sentry.feedback",
                                    data: {
                                        feedbackId: t.event_id
                                    }
                                }
                            }
                        }), !1)), t;
                        if (!t.type && t.exception ? .values ? .length && n.originalException ? .__rrweb__ && !e.getOptions()._experiments.captureExceptions) return null;
                        let r = "buffer" === e.recordingMode && t.message !== c2 && !!t.exception && !t.type && p6(e.getOptions().errorSampleRate);
                        if ((r || "session" === e.recordingMode) && (t.tags = { ...t.tags,
                                replayId: e.getSessionId()
                            }), r && "buffer" === e.recordingMode && e.session ? .sampled === "buffer") {
                            let t = e.session;
                            t.dirty = !0, e.getOptions().stickySession && p8(t)
                        }
                        return t
                    }, {
                        id: "Replay"
                    })), n && (n.on("beforeSendEvent", t => {
                        var n, r;
                        let i;
                        e.isEnabled() && !t.type && (n = e, r = t, i = r.exception ? .values ? .[0] ? .value, "string" == typeof i && (i.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || i.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && pL(n, pB({
                            category: "replay.hydrate-error",
                            data: {
                                url: np()
                            }
                        })))
                    }), n.on("afterSendEvent", (t, n) => {
                        if (!e.isEnabled() || t.type && !ha(t)) return;
                        let r = n.statusCode;
                        if (r && !(r < 200) && !(r >= 300)) {
                            if (ha(t)) {
                                var i, s;
                                let n;
                                return void(i = e, s = t, n = i.getContext(), s.contexts ? .trace ? .trace_id && n.traceIds.size < 100 && n.traceIds.add(s.contexts.trace.trace_id))
                            }! function(e, t) {
                                let n = e.getContext();
                                if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id), "buffer" !== e.recordingMode || !t.tags ? .replayId) return;
                                let {
                                    beforeErrorSampling: r
                                } = e.getOptions();
                                ("function" != typeof r || r(t)) && lY(async () => {
                                    try {
                                        await e.sendBufferedReplayOrFlush()
                                    } catch (t) {
                                        e.handleException(t)
                                    }
                                })
                            }(e, t)
                        }
                    }), n.on("createDsc", t => {
                        let n = e.getSessionId();
                        n && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = n)
                    }), n.on("spanStart", t => {
                        e.lastActiveSpan = t
                    }), n.on("spanEnd", t => {
                        e.lastActiveSpan = t
                    }), n.on("beforeSendFeedback", async (t, n) => {
                        let r = e.getSessionId();
                        n ? .includeReplay && e.isEnabled() && r && t.contexts ? .feedback && ("api" === t.contexts.feedback.source && await e.sendBufferedReplayOrFlush(), t.contexts.feedback.replay_id = r)
                    }), n.on("openFeedbackWidget", async () => {
                        await e.sendBufferedReplayOrFlush()
                    }))
                }(this), this._hasInitializedCoreListeners = !0)
            } catch (e) {
                this.handleException(e)
            }
            this._performanceCleanupCallback = function(e) {
                function t(t) {
                    e.performanceEntries.includes(t) || e.performanceEntries.push(t)
                }

                function n({
                    entries: e
                }) {
                    e.forEach(t)
                }
                let r = [];
                return ["navigation", "paint", "resource"].forEach(e => {
                    r.push(cV(e, n))
                }), r.push(cH(pV(pK, e)), cq(pV(pY, e)), cz(pV(pX, e))), () => {
                    r.forEach(e => e())
                }
            }(this)
        }
        _removeListeners() {
            try {
                t3.document.removeEventListener("visibilitychange", this._handleVisibilityChange), t3.removeEventListener("blur", this._handleWindowBlur), t3.removeEventListener("focus", this._handleWindowFocus), t3.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
            } catch (e) {
                this.handleException(e)
            }
        }
        _doChangeToBackgroundTasks(e) {
            !this.session || ht(this.session, {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire
            }) || (e && this._createCustomBreadcrumb(e), this.conditionalFlush())
        }
        _doChangeToForegroundTasks(e) {
            !this.session || this.checkAndHandleExpiredSession() && e && this._createCustomBreadcrumb(e)
        }
        _updateUserActivity(e = Date.now()) {
            this._lastActivity = e
        }
        _updateSessionActivity(e = Date.now()) {
            this.session && (this.session.lastActivity = e, this._maybeSaveSession())
        }
        _createCustomBreadcrumb(e) {
            this.addUpdate(() => {
                this.throttledAddEvent({
                    type: d3.Custom,
                    timestamp: e.timestamp || 0,
                    data: {
                        tag: "breadcrumb",
                        payload: e
                    }
                })
            })
        }
        _addPerformanceEntries() {
            let e = this.performanceEntries.map(pJ).filter(Boolean).concat(this.replayPerformanceEntries);
            if (this.performanceEntries = [], this.replayPerformanceEntries = [], this._requiresManualStart) {
                let t = this._context.initialTimestamp / 1e3;
                e = e.filter(e => e.start >= t)
            }
            return Promise.all(hd(this, e))
        }
        _clearContext() {
            this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
        }
        _updateInitialTimestampFromEventBuffer() {
            let {
                session: e,
                eventBuffer: t
            } = this;
            if (!e || !t || this._requiresManualStart || e.segmentId) return;
            let n = t.getEarliestTimestamp();
            n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
        }
        _popEventContext() {
            let e = {
                initialTimestamp: this._context.initialTimestamp,
                initialUrl: this._context.initialUrl,
                errorIds: Array.from(this._context.errorIds),
                traceIds: Array.from(this._context.traceIds),
                urls: this._context.urls
            };
            return this._clearContext(), e
        }
        async _runFlush() {
            let e = this.getSessionId();
            if (this.session && this.eventBuffer && e && (await this._addPerformanceEntries(), this.eventBuffer ? .hasEvents)) {
                if ((await hM(this), this.eventBuffer) && e === this.getSessionId()) try {
                    this._updateInitialTimestampFromEventBuffer();
                    let t = Date.now();
                    if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw new hN;
                    let n = this._popEventContext(),
                        r = this.session.segmentId++;
                    this._maybeSaveSession();
                    let i = await this.eventBuffer.finish();
                    await hD({
                        replayId: e,
                        recordingData: i,
                        segmentId: r,
                        eventContext: n,
                        session: this.session,
                        timestamp: t,
                        onError: e => this.handleException(e)
                    })
                } catch (t) {
                    this.handleException(t), this.stop({
                        reason: "sendReplay"
                    });
                    let e = rl();
                    e && e.recordDroppedEvent(t instanceof hP ? "ratelimit_backoff" : t instanceof hN ? "invalid" : "send_error", "replay")
                }
            }
        }
        async _flush({
            force: e = !1
        } = {}) {
            if (!this._isEnabled && !e || !this.checkAndHandleExpiredSession() || !this.session) return;
            let t = this.session.started,
                n = Date.now() - t;
            this._debouncedFlush.cancel();
            let r = n < this._options.minReplayDuration,
                i = n > this._options.maxReplayDuration + 5e3;
            if (r || i) {
                r && this._debouncedFlush();
                return
            }
            let s = this.eventBuffer;
            s && 0 === this.session.segmentId && s.hasCheckout;
            let o = !!this._flushLock;
            this._flushLock || (this._flushLock = this._runFlush());
            try {
                await this._flushLock
            } catch (e) {
                this.handleException(e)
            } finally {
                this._flushLock = void 0, o && this._debouncedFlush()
            }
        }
        _maybeSaveSession() {
            this.session && this._options.stickySession && p8(this.session)
        }
        _onMutationHandler(e) {
            let {
                ignoreMutations: t
            } = this._options._experiments;
            if (t ? .length && e.some(e => {
                    let n = function(e) {
                            if (!e) return null;
                            try {
                                return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
                            } catch {
                                return null
                            }
                        }(e.target),
                        r = t.join(",");
                    return n ? .matches(r)
                })) return !1;
            let n = e.length,
                r = this._options.mutationLimit,
                i = this._options.mutationBreadcrumbLimit,
                s = r && n > r;
            if (n > i || s) {
                let e = pB({
                    category: "replay.mutations",
                    data: {
                        count: n,
                        limit: s
                    }
                });
                this._createCustomBreadcrumb(e)
            }
            return !s || (this.stop({
                reason: "mutationLimit",
                forceFlush: "session" === this.recordingMode
            }), !1)
        }
    }

    function hF(e, t) {
        return [...e, ...t].join(",")
    }
    let hU = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
        hB = ["content-length", "content-type", "accept"],
        hW = Symbol.for("sentry__originalRequestBody"),
        hq = !1,
        hH = !1,
        hz = e => new hV(e);class hV {
        constructor({
            flushMinDelay: e = 5e3,
            flushMaxDelay: t = 5500,
            minReplayDuration: n = 4999,
            maxReplayDuration: r = 36e5,
            stickySession: i = !0,
            useCompression: s = !0,
            workerUrl: o,
            _experiments: a = {},
            maskAllText: l = !0,
            maskAllInputs: u = !0,
            blockAllMedia: c = !0,
            mutationBreadcrumbLimit: d = 750,
            mutationLimit: p = 1e4,
            slowClickTimeout: h = 7e3,
            slowClickIgnoreSelectors: f = [],
            networkDetailAllowUrls: m = [],
            networkDetailDenyUrls: g = [],
            networkCaptureBodies: _ = !0,
            networkRequestHeaders: y = [],
            networkResponseHeaders: v = [],
            mask: b = [],
            maskAttributes: S = ["title", "placeholder", "aria-label"],
            unmask: w = [],
            block: k = [],
            unblock: E = [],
            ignore: x = [],
            maskFn: C,
            beforeAddRecordingEvent: I,
            beforeErrorSampling: T,
            onError: M,
            attachRawBodyFromRequest: A = !1
        } = {}) {
            this.name = "Replay";
            const R = function({
                mask: e,
                unmask: t,
                block: n,
                unblock: r,
                ignore: i
            }) {
                return {
                    maskTextSelector: hF(e, [".sentry-mask", "[data-sentry-mask]"]),
                    unmaskTextSelector: hF(t, []),
                    blockSelector: hF(n, [".sentry-block", "[data-sentry-block]", "base", "iframe[srcdoc]:not([src])"]),
                    unblockSelector: hF(r, []),
                    ignoreSelector: hF(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
                }
            }({
                mask: b,
                unmask: w,
                block: k,
                unblock: E,
                ignore: x
            });
            if (this._recordingOptions = {
                    maskAllInputs: u,
                    maskAllText: l,
                    maskInputOptions: {
                        password: !0
                    },
                    maskTextFn: C,
                    maskInputFn: C,
                    maskAttributeFn: (e, t, n) => (function({
                        el: e,
                        key: t,
                        maskAttributes: n,
                        maskAllText: r,
                        privacyOptions: i,
                        value: s
                    }) {
                        return !r || i.unmaskTextSelector && e.matches(i.unmaskTextSelector) ? s : n.includes(t) || "value" === t && "INPUT" === e.tagName && ["submit", "button"].includes(e.getAttribute("type") || "") ? s.replace(/[\S]/g, "*") : s
                    })({
                        maskAttributes: S,
                        maskAllText: l,
                        privacyOptions: R,
                        key: e,
                        value: t,
                        el: n
                    }),
                    ...R,
                    slimDOMOptions: "all",
                    inlineStylesheet: !0,
                    inlineImages: !1,
                    collectFonts: !0,
                    errorHandler: e => {
                        try {
                            e.__rrweb__ = !0
                        } catch {}
                    },
                    recordCrossOriginIframes: !!a.recordCrossOriginIframes
                }, this._initialOptions = {
                    flushMinDelay: e,
                    flushMaxDelay: t,
                    minReplayDuration: Math.min(n, 5e4),
                    maxReplayDuration: Math.min(r, 36e5),
                    stickySession: i,
                    useCompression: s,
                    workerUrl: o,
                    blockAllMedia: c,
                    maskAllInputs: u,
                    maskAllText: l,
                    mutationBreadcrumbLimit: d,
                    mutationLimit: p,
                    slowClickTimeout: h,
                    slowClickIgnoreSelectors: f,
                    networkDetailAllowUrls: m,
                    networkDetailDenyUrls: g,
                    networkCaptureBodies: _,
                    networkRequestHeaders: hJ(y),
                    networkResponseHeaders: hJ(v),
                    beforeAddRecordingEvent: I,
                    beforeErrorSampling: T,
                    onError: M,
                    attachRawBodyFromRequest: A,
                    _experiments: a
                }, this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${hU}` : hU, this._recordingOptions.ignoreCSSAttributes = new Set(["background-image"])), this._isInitialized && cu()) throw Error("Multiple Sentry Session Replay instances are not supported");
            this._isInitialized = !0
        }
        get _isInitialized() {
            return hq
        }
        set _isInitialized(e) {
            hq = e
        }
        afterAllSetup(e) {
            cu() && !this._replay && (this._initialOptions.attachRawBodyFromRequest && function() {
                if ("u" < typeof Request || hH) return;
                let e = Request;
                try {
                    let t = function(t, n) {
                        let r = new e(t, n);
                        return n ? .body != null && (r[hW] = n.body), r
                    };
                    t.prototype = e.prototype, t3.Request = t, hH = !0
                } catch {}
            }(), this._setup(e), this._initialize(e))
        }
        start() {
            this._replay && this._replay.start()
        }
        startBuffering() {
            this._replay && this._replay.startBuffering()
        }
        stop() {
            return this._replay ? this._replay.stop({
                forceFlush: "session" === this._replay.recordingMode
            }) : Promise.resolve()
        }
        flush(e) {
            return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : (this._replay.start(), Promise.resolve()) : Promise.resolve()
        }
        getReplayId(e) {
            if (this._replay ? .isEnabled()) return this._replay.getSessionId(e)
        }
        getRecordingMode() {
            if (this._replay ? .isEnabled()) return this._replay.recordingMode
        }
        _initialize(e) {
            this._replay && (this._maybeLoadFromReplayCanvasIntegration(e), this._replay.initializeSampling())
        }
        _setup(e) {
            var t;
            let n, r, i, s, o = (t = this._initialOptions, n = e.getOptions(), r = {
                sessionSampleRate: 0,
                errorSampleRate: 0,
                ...t
            }, i = rH(n.replaysSessionSampleRate), s = rH(n.replaysOnErrorSampleRate), null == i && null == s && ng(() => {
                console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
            }), null != i && (r.sessionSampleRate = i), null != s && (r.errorSampleRate = s), r);
            this._replay = new hj({
                options: o,
                recordingOptions: this._recordingOptions
            })
        }
        _maybeLoadFromReplayCanvasIntegration(e) {
            try {
                let t = e.getIntegrationByName("ReplayCanvas");
                if (!t) return;
                this._replay._canvas = t.getOptions()
            } catch {}
        }
    }

    function hJ(e) {
        return [...hB, ...e.map(e => e.toLowerCase())]
    }

    function hG() {
        let e = rl();
        return e ? .getIntegrationByName("Replay")
    }
    var hK = Object.defineProperty,
        hY = (e, t, n) => {
            let r;
            return (r = "symbol" != typeof t ? t + "" : t) in e ? hK(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[r] = n
        };

    function hX(e, t, n = 1 / 0, r = 0) {
        return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : hX(e.parentNode, t, n, r + 1)
    }

    function hZ(e, t) {
        return n => {
            if (null === n) return !1;
            try {
                if (e) {
                    if ("string" == typeof e) {
                        if (n.matches(`.${e}`)) return !0
                    } else if (function(e, t) {
                            for (let n = e.classList.length; n--;) {
                                let r = e.classList[n];
                                if (t.test(r)) return !0
                            }
                            return !1
                        }(n, e)) return !0
                }
                if (t && n.matches(t)) return !0;
                return !1
            } catch {
                return !1
            }
        }
    }
    let hQ = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        h0 = {
            map: {},
            getId: () => (console.error(hQ), -1),
            getNode: () => (console.error(hQ), null),
            removeNodeFromMap() {
                console.error(hQ)
            },
            has: () => (console.error(hQ), !1),
            reset() {
                console.error(hQ)
            }
        };

    function h1(e, t, n, r, i = window) {
        let s = i.Object.getOwnPropertyDescriptor(e, t);
        return i.Object.defineProperty(e, t, r ? n : {
            set(e) {
                h8(() => {
                    n.set.call(this, e)
                }, 0), s && s.set && s.set.call(this, e)
            }
        }), () => h1(e, t, s || {}, !0)
    }

    function h2(e, t, n) {
        try {
            if (!(t in e)) return () => {};
            let r = e[t],
                i = n(r);
            return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
                __rrweb_original__: {
                    enumerable: !1,
                    value: r
                }
            })), e[t] = i, () => {
                e[t] = r
            }
        } catch {
            return () => {}
        }
    }

    function h3(e, t, n, r, i) {
        if (!e) return !1;
        let s = function(e) {
            if (!e) return null;
            try {
                return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
            } catch (e) {
                return null
            }
        }(e);
        if (!s) return !1;
        let o = hZ(t, n);
        if (!i) {
            let e = r && s.matches(r);
            return o(s) && !e
        }
        let a = hX(s, o),
            l = -1;
        return !(a < 0) && (r && (l = hX(s, hZ(null, r))), a > -1 && l < 0 || a < l)
    }
    "u" > typeof window && window.Proxy && window.Reflect && (h0 = new Proxy(h0, {
        get: (e, t, n) => ("map" === t && console.error(hQ), Reflect.get(e, t, n))
    })),
    Date.now().toString();
    let h5 = {};

    function h4(e) {
        let t = h5[e];
        if (t) return t;
        let n = window.document,
            r = window[e];
        if (n && "function" == typeof n.createElement) try {
            let t = n.createElement("iframe");
            t.hidden = !0, n.head.appendChild(t);
            let i = t.contentWindow;
            i && i[e] && (r = i[e]), n.head.removeChild(t)
        } catch (e) {}
        return h5[e] = r.bind(window)
    }

    function h6(...e) {
        return h4("requestAnimationFrame")(...e)
    }

    function h8(...e) {
        return h4("setTimeout")(...e)
    }
    var h7 = ((q = h7 || {})[q["2D"] = 0] = "2D", q[q.WebGL = 1] = "WebGL", q[q.WebGL2 = 2] = "WebGL2", q);
    let h9 = e => R ? (...t) => {
        try {
            return e(...t)
        } catch (e) {
            if (R && !0 === R(e)) return () => {};
            throw e
        }
    } : e;
    for (var fe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ft = "u" < typeof Uint8Array ? [] : new Uint8Array(256), fn = 0; fn < fe.length; fn++) ft[fe.charCodeAt(fn)] = fn;
    var fr = function(e) {
        var t, n = new Uint8Array(e),
            r = n.length,
            i = "";
        for (t = 0; t < r; t += 3) i += fe[n[t] >> 2], i += fe[(3 & n[t]) << 4 | n[t + 1] >> 4], i += fe[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], i += fe[63 & n[t + 2]];
        return r % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
    };
    let fi = new Map,
        fs = (e, t, n) => {
            let r;
            if (!e || !(fa(e, t) || "object" == typeof e)) return;
            let i = e.constructor.name,
                s = ((r = fi.get(n)) || (r = new Map, fi.set(n, r)), r.has(i) || r.set(i, []), r.get(i)),
                o = s.indexOf(e);
            return -1 === o && (o = s.length, s.push(e)), o
        },
        fo = (e, t, n) => e.map(e => (function e(t, n, r) {
            if (t instanceof Array) return t.map(t => e(t, n, r));
            if (null === t);
            else if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray) return {
                rr_type: t.constructor.name,
                args: [Object.values(t)]
            };
            else if (t instanceof ArrayBuffer) return {
                rr_type: t.constructor.name,
                base64: fr(t)
            };
            else if (t instanceof DataView) return {
                rr_type: t.constructor.name,
                args: [e(t.buffer, n, r), t.byteOffset, t.byteLength]
            };
            else if (t instanceof HTMLImageElement) {
                let e = t.constructor.name,
                    {
                        src: n
                    } = t;
                return {
                    rr_type: e,
                    src: n
                }
            } else if (t instanceof HTMLCanvasElement) return {
                rr_type: "HTMLImageElement",
                src: t.toDataURL()
            };
            else if (t instanceof ImageData) return {
                rr_type: t.constructor.name,
                args: [e(t.data, n, r), t.width, t.height]
            };
            else if (fa(t, n) || "object" == typeof t) return {
                rr_type: t.constructor.name,
                index: fs(t, n, r)
            };
            return t
        })(e, t, n)),
        fa = (e, t) => !!["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(e => "function" == typeof t[e]).find(n => e instanceof t[n]);

    function fl(e, t, n, r, i) {
        let s = [];
        try {
            let o = h2(e.HTMLCanvasElement.prototype, "getContext", function(e) {
                return function(s, ...o) {
                    if (!h3(this, t, n, r, !0)) {
                        let e = "experimental-webgl" === s ? "webgl" : s;
                        if ("__context" in this || (this.__context = e), i && ["webgl", "webgl2"].includes(e))
                            if (o[0] && "object" == typeof o[0]) {
                                let e = o[0];
                                e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0)
                            } else o.splice(0, 1, {
                                preserveDrawingBuffer: !0
                            })
                    }
                    return e.apply(this, [s, ...o])
                }
            });
            s.push(o)
        } catch {
            console.error("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
            s.forEach(e => e())
        }
    }

    function fu(e, t, n, r, i, s, o, a) {
        let l = [];
        for (let o of Object.getOwnPropertyNames(e))
            if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(o)) try {
                if ("function" != typeof e[o]) continue;
                let u = h2(e, o, function(e) {
                    return function(...l) {
                        let u = e.apply(this, l);
                        if (fs(u, a, this), "tagName" in this.canvas && !h3(this.canvas, r, i, s, !0)) {
                            let e = fo(l, a, this),
                                r = {
                                    type: t,
                                    property: o,
                                    args: e
                                };
                            n(this.canvas, r)
                        }
                        return u
                    }
                });
                l.push(u)
            } catch {
                let r = h1(e, o, {
                    set(e) {
                        n(this.canvas, {
                            type: t,
                            property: o,
                            args: [e],
                            setter: !0
                        })
                    }
                });
                l.push(r)
            }
        return l
    }
    class fc {
        constructor(e) {
            this.pendingCanvasMutations = new Map, this.rafStamps = {
                latestId: 0,
                invokeId: null
            }, this.shadowDoms = new Set, this.windowsSet = new WeakSet, this.windows = [], this.restoreHandlers = [], this.frozen = !1, this.locked = !1, this.snapshotInProgressMap = new Map, this.worker = null, this.lastSnapshotTime = 0, this.processMutation = (e, t) => {
                (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t)
            };
            const {
                enableManualSnapshot: t,
                sampling: n = "all",
                win: r,
                recordCanvas: i,
                errorHandler: s
            } = e;
            if (e.sampling = n, this.mutationCb = e.mutationCb, this.mirror = e.mirror, this.options = e, s && function(e) {
                    R = e
                }(s), (i && "number" == typeof n || t) && (this.worker = this.initFPSWorker()), this.addWindow(r), t) return;
            h9(() => {
                i && "all" === n && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()), i && "number" == typeof n && this.initCanvasFPSObserver()
            })()
        }
        reset() {
            this.pendingCanvasMutations.clear(), this.restoreHandlers.forEach(e => {
                try {
                    e()
                } catch (e) {}
            }), this.restoreHandlers = [], this.windowsSet = new WeakSet, this.windows = [], this.shadowDoms = new Set, this.worker ? .terminate(), this.worker = null, this.snapshotInProgressMap = new Map
        }
        freeze() {
            this.frozen = !0
        }
        unfreeze() {
            this.frozen = !1
        }
        lock() {
            this.locked = !0
        }
        unlock() {
            this.locked = !1
        }
        addWindow(e) {
            let {
                sampling: t = "all",
                blockClass: n,
                blockSelector: r,
                unblockSelector: i,
                recordCanvas: s,
                enableManualSnapshot: o
            } = this.options;
            if (!this.windowsSet.has(e)) {
                if (o) {
                    this.windowsSet.add(e), this.windows.push(new WeakRef(e));
                    return
                }
                h9(() => {
                    if (s && "all" === t && this.initCanvasMutationObserver(e, n, r, i), s && "number" == typeof t) {
                        let t = fl(e, n, r, i, !0);
                        this.restoreHandlers.push(() => {
                            t()
                        })
                    }
                })(), this.windowsSet.add(e), this.windows.push(new WeakRef(e))
            }
        }
        addShadowRoot(e) {
            this.shadowDoms.add(new WeakRef(e))
        }
        resetShadowRoots() {
            this.shadowDoms = new Set
        }
        snapshot(e, t) {
            t ? .skipRequestAnimationFrame ? this.takeSnapshot(performance.now(), !0, e) : h6(t => this.takeSnapshot(t, !0, e))
        }
        initFPSWorker() {
            let e, t = new Worker((e = new Blob(['for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w?.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};']), URL.createObjectURL(e)));
            return t.onmessage = e => {
                let t = e.data,
                    {
                        id: n
                    } = t;
                if (this.snapshotInProgressMap.set(n, !1), !("base64" in t)) return;
                let {
                    base64: r,
                    type: i,
                    width: s,
                    height: o
                } = t;
                this.mutationCb({
                    id: n,
                    type: h7["2D"],
                    commands: [{
                        property: "clearRect",
                        args: [0, 0, s, o]
                    }, {
                        property: "drawImage",
                        args: [{
                            rr_type: "ImageBitmap",
                            args: [{
                                rr_type: "Blob",
                                data: [{
                                    rr_type: "ArrayBuffer",
                                    base64: r
                                }],
                                type: i
                            }]
                        }, 0, 0, s, o]
                    }]
                })
            }, t
        }
        initCanvasFPSObserver() {
            let e;
            if (!this.windows.length && !this.shadowDoms.size) return;
            let t = n => {
                this.takeSnapshot(n, !1), e = h6(t)
            };
            e = h6(t), this.restoreHandlers.push(() => {
                e && cancelAnimationFrame(e)
            })
        }
        initCanvasMutationObserver(e, t, n, r) {
            var i, s;
            let o, a = fl(e, t, n, r, !1),
                l = function(e, t, n, r, i) {
                    let s = [];
                    for (let o of Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype)) try {
                        if ("function" != typeof t.CanvasRenderingContext2D.prototype[o]) continue;
                        let a = h2(t.CanvasRenderingContext2D.prototype, o, function(s) {
                            return function(...a) {
                                return h3(this.canvas, n, r, i, !0) || h8(() => {
                                    let n = fo(a, t, this);
                                    e(this.canvas, {
                                        type: h7["2D"],
                                        property: o,
                                        args: n
                                    })
                                }, 0), s.apply(this, a)
                            }
                        });
                        s.push(a)
                    } catch {
                        let n = h1(t.CanvasRenderingContext2D.prototype, o, {
                            set(t) {
                                e(this.canvas, {
                                    type: h7["2D"],
                                    property: o,
                                    args: [t],
                                    setter: !0
                                })
                            }
                        });
                        s.push(n)
                    }
                    return () => {
                        s.forEach(e => e())
                    }
                }(this.processMutation.bind(this), e, t, n, r),
                u = (i = this.processMutation.bind(this), s = this.mirror, (o = []).push(...fu(e.WebGLRenderingContext.prototype, h7.WebGL, i, t, n, r, s, e)), void 0 !== e.WebGL2RenderingContext && o.push(...fu(e.WebGL2RenderingContext.prototype, h7.WebGL2, i, t, n, r, s, e)), () => {
                    o.forEach(e => e())
                });
            this.restoreHandlers.push(() => {
                a(), l(), u()
            })
        }
        getCanvasElements(e, t, n) {
            let r = [],
                i = i => {
                    i.querySelectorAll("canvas").forEach(i => {
                        h3(i, e, t, n, !0) || r.push(i)
                    })
                };
            for (let e of this.windows) {
                let t, n = e.deref();
                try {
                    t = n && n.document
                } catch {}
                t && i(t)
            }
            for (let e of this.shadowDoms) {
                let t = e.deref();
                t && i(t)
            }
            return r
        }
        takeSnapshot(e, t, n) {
            let {
                sampling: r,
                blockClass: i,
                blockSelector: s,
                unblockSelector: o,
                dataURLOptions: a,
                maxCanvasSize: l
            } = this.options;
            return (!this.lastSnapshotTime || !(e - this.lastSnapshotTime < 1e3 / ("all" === r ? 2 : r || 2))) && (this.lastSnapshotTime = e, (n ? [n] : this.getCanvasElements(i, s, o)).forEach(e => {
                let n = this.mirror.getId(e);
                if (!(!this.mirror.hasNode(e) || !e.width || !e.height || this.snapshotInProgressMap.get(n))) {
                    if (this.snapshotInProgressMap.set(n, !0), !t && ["webgl", "webgl2"].includes(e.__context)) {
                        let t = e.getContext(e.__context);
                        t ? .getContextAttributes() ? .preserveDrawingBuffer === !1 && t.clear(t.COLOR_BUFFER_BIT)
                    }
                    createImageBitmap(e).then(t => {
                        this.worker ? .postMessage({
                            id: n,
                            bitmap: t,
                            width: e.width,
                            height: e.height,
                            dataURLOptions: a,
                            maxCanvasSize: l
                        }, [t])
                    }).catch(e => {
                        h9(() => {
                            throw this.snapshotInProgressMap.delete(n), e
                        })()
                    })
                }
            }), !0)
        }
        startPendingCanvasMutationFlusher() {
            h6(() => this.flushPendingCanvasMutations())
        }
        startRAFTimestamping() {
            let e = t => {
                this.rafStamps.latestId = t, h6(e)
            };
            h6(e)
        }
        flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach((e, t) => {
                let n = this.mirror.getId(t);
                this.flushPendingCanvasMutationFor(t, n)
            }), h6(() => this.flushPendingCanvasMutations())
        }
        flushPendingCanvasMutationFor(e, t) {
            if (this.frozen || this.locked) return;
            let n = this.pendingCanvasMutations.get(e);
            if (!n || -1 === t) return;
            let r = n.map(e => {
                    let {
                        type: t,
                        ...n
                    } = e;
                    return n
                }),
                {
                    type: i
                } = n[0];
            this.mutationCb({
                id: t,
                type: i,
                commands: r
            }), this.pendingCanvasMutations.delete(e)
        }
    }
    try {
        if (2 !== Array.from([1], e => 2 * e)[0]) {
            let e = document.createElement("iframe");
            document.body.appendChild(e), Array.from = e.contentWindow ? .Array.from || Array.from, document.body.removeChild(e)
        }
    } catch (e) {
        console.debug("Unable to override Array.from", e)
    }
    new class e {
        constructor() {
            hY(this, "idNodeMap", new Map), hY(this, "nodeMetaMap", new WeakMap)
        }
        getId(e) {
            return e ? this.getMeta(e) ? .id ? ? -1 : -1
        }
        getNode(e) {
            return this.idNodeMap.get(e) || null
        }
        getIds() {
            return Array.from(this.idNodeMap.keys())
        }
        getMeta(e) {
            return this.nodeMetaMap.get(e) || null
        }
        removeNodeFromMap(e) {
            let t = this.getId(e);
            this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
        }
        has(e) {
            return this.idNodeMap.has(e)
        }
        hasNode(e) {
            return this.nodeMetaMap.has(e)
        }
        add(e, t) {
            let n = t.id;
            this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
        }
        replace(e, t) {
            let n = this.getNode(e);
            if (n) {
                let e = this.nodeMetaMap.get(n);
                e && this.nodeMetaMap.set(t, e)
            }
            this.idNodeMap.set(e, t)
        }
        reset() {
            this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
    },
    (H = V || (V = {}))[H.NotStarted = 0] = "NotStarted",
    H[H.Running = 1] = "Running",
    H[H.Stopped = 2] = "Stopped";
    let fd = {
            low: {
                sampling: {
                    canvas: 1
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .25
                }
            },
            medium: {
                sampling: {
                    canvas: 2
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .4
                }
            },
            high: {
                sampling: {
                    canvas: 4
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .5
                }
            }
        },
        fp = (e = {}) => {
            let t, n, [r, i] = e.maxCanvasSize || [],
                s = {
                    quality: e.quality || "medium",
                    enableManualSnapshot: e.enableManualSnapshot,
                    maxCanvasSize: [r ? Math.min(r, 1280) : 1280, i ? Math.min(i, 1280) : 1280]
                },
                o = new Promise(e => n = e);
            return {
                name: "ReplayCanvas",
                getOptions() {
                    let {
                        quality: e,
                        enableManualSnapshot: r,
                        maxCanvasSize: i
                    } = s;
                    return {
                        enableManualSnapshot: r,
                        recordCanvas: !0,
                        getCanvasManager: e => {
                            let s = new fc({ ...e,
                                enableManualSnapshot: r,
                                maxCanvasSize: i,
                                errorHandler: e => {
                                    try {
                                        "object" == typeof e && (e.__rrweb__ = !0)
                                    } catch {}
                                }
                            });
                            return t = s, n(s), s
                        },
                        ...fd[e] || fd.medium
                    }
                },
                async snapshot(e, n) {
                    (t || await o).snapshot(e, n)
                }
            }
        };

    function fh(e) {
        return e.split(",").some(e => e.trim().startsWith(rI))
    }

    function ff(e, t, n, r) {
        let i = {
            url: uv(e),
            type: "fetch",
            "http.method": n,
            [rb]: r,
            [rv]: "http.client"
        };
        return t && (um(t) || (i["http.url"] = uv(t.href), i["server.address"] = t.host), t.search && (i["http.query"] = t.search), t.hash && (i["http.fragment"] = t.hash)), i
    }

    function fm(e) {
        return "number" == typeof e && isFinite(e)
    }

    function fg(e, t, n, { ...r
    }) {
        let i = r1(e).start_timestamp;
        return i && i > t && "function" == typeof e.updateStartTime && e.updateStartTime(t), sD(e, () => {
            let e = sP({
                startTime: t,
                ...r
            });
            return e && e.end(n), e
        })
    }

    function f_(e) {
        let t, n = rl();
        if (!n) return;
        let {
            name: r,
            transaction: i,
            attributes: s,
            startTime: o
        } = e, {
            release: a,
            environment: l,
            sendDefaultPii: u
        } = n.getOptions(), c = n.getIntegrationByName("Replay"), d = c ? .getReplayId(), p = rr(), h = p.getUser(), f = void 0 !== h ? h.email || h.id || h.ip_address : void 0;
        try {
            t = p.getScopeData().contexts.profile.profile_id
        } catch {}
        return sP({
            name: r,
            attributes: {
                release: a,
                environment: l,
                user: f || void 0,
                profile_id: t || void 0,
                replay_id: d || void 0,
                transaction: i,
                "user_agent.original": t3.navigator ? .userAgent,
                "client.address": u ? "{{auto}}" : void 0,
                ...s
            },
            startTime: o,
            experimental: {
                standalone: !0
            }
        })
    }

    function fy() {
        return t3.addEventListener && t3.performance
    }

    function fv(e) {
        return e / 1e3
    }

    function fb(e) {
        try {
            return PerformanceObserver.supportedEntryTypes.includes(e)
        } catch {
            return !1
        }
    }

    function fS(e, t) {
        let n, r, i = !1;

        function s(e) {
            !i && r && t(e, r), i = !0
        }
        ch("visibilitychange", n = e => {
            ("pagehide" === e.type || t3.document ? .visibilityState === "hidden") && (() => {
                s("pagehide")
            })(e)
        }, {
            capture: !0,
            once: !0
        }), ch("pagehide", n, {
            capture: !0,
            once: !0
        });
        let o = e.on("beforeStartNavigationSpan", (e, t) => {
                t ? .isRedirect || (s("navigation"), o(), a())
            }),
            a = e.on("afterStartPageLoadSpan", e => {
                r = e.spanContext().spanId, a()
            })
    }

    function fw(e) {
        return e ? ((nY() || performance.timeOrigin) + e) / 1e3 : e
    }

    function fk(e) {
        let t = {};
        if (void 0 != e.nextHopProtocol) {
            let {
                name: n,
                version: r
            } = function(e) {
                let t = "unknown",
                    n = "unknown",
                    r = "";
                for (let i of e) {
                    if ("/" === i) {
                        [t, n] = e.split("/");
                        break
                    }
                    if (!isNaN(Number(i))) {
                        t = "h" === r ? "http" : r, n = e.split(r)[1];
                        break
                    }
                    r += i
                }
                return r === e && (t = r), {
                    name: t,
                    version: n
                }
            }(e.nextHopProtocol);
            t["network.protocol.version"] = r, t["network.protocol.name"] = n
        }
        return nY() || fy() ? .timeOrigin ? Object.fromEntries(Object.entries({ ...t,
            "http.request.redirect_start": fw(e.redirectStart),
            "http.request.redirect_end": fw(e.redirectEnd),
            "http.request.worker_start": fw(e.workerStart),
            "http.request.fetch_start": fw(e.fetchStart),
            "http.request.domain_lookup_start": fw(e.domainLookupStart),
            "http.request.domain_lookup_end": fw(e.domainLookupEnd),
            "http.request.connect_start": fw(e.connectStart),
            "http.request.secure_connection_start": fw(e.secureConnectionStart),
            "http.request.connection_end": fw(e.connectEnd),
            "http.request.request_start": fw(e.requestStart),
            "http.request.response_start": fw(e.responseStart),
            "http.request.response_end": fw(e.responseEnd),
            "http.request.time_to_first_byte": null != e.responseStart ? e.responseStart / 1e3 : void 0
        }).filter(([, e]) => null != e)) : t
    }

    function fE(e) {
        try {
            return new URL(e, iP.location.origin).href
        } catch {
            return
        }
    }

    function fx(e) {
        try {
            return new Headers(e)
        } catch {
            return
        }
    }
    let fC = new WeakMap,
        fI = new Map,
        fT = {
            traceFetch: !0,
            traceXHR: !0,
            enableHTTPTimings: !0,
            trackFetchStreamPerformance: !1
        };

    function fM(e, t) {
        let {
            traceFetch: n,
            traceXHR: r,
            trackFetchStreamPerformance: i,
            shouldCreateSpanForRequest: s,
            enableHTTPTimings: o,
            tracePropagationTargets: a,
            onRequestSpanStart: l,
            onRequestSpanEnd: u
        } = { ...fT,
            ...t
        }, c = "function" == typeof s ? s : e => !0, d = e => (function(e, t) {
            let n = np();
            if (n) {
                let r, i;
                try {
                    r = new URL(e, n), i = new URL(n).origin
                } catch {
                    return !1
                }
                let s = r.origin === i;
                return t ? nB(r.toString(), t) || s && nB(r.pathname, t) : s
            } {
                let n = !!e.match(/^\/(?!\/)/);
                return t ? nB(e, t) : n
            }
        })(e, a), p = {}, h = e.getOptions().propagateTraceparent;
        if (n) {
            let t;
            e.addEventProcessor(e => ("transaction" === e.type && e.spans && e.spans.forEach(e => {
                if ("http.client" === e.op) {
                    let t = fI.get(e.span_id);
                    t && (e.timestamp = t / 1e3, fI.delete(e.span_id))
                }
            }), e)), i && (se(t = "fetch-body-resolved", e => {
                if (e.response) {
                    let t = fC.get(e.response);
                    t && e.endTimestamp && fI.set(t, e.endTimestamp)
                }
            }), st(t, () => uu(ud))), ul(e => {
                let t = function(e, t, n, r, i) {
                    if (!e.fetchData) return;
                    let {
                        method: s,
                        url: o
                    } = e.fetchData, a = rj() && t(o);
                    if (e.endTimestamp) {
                        var l, u, c;
                        let t, n = e.fetchData.__span;
                        if (!n) return;
                        let s = r[n];
                        s && (a && (function(e, t) {
                            if (t.response) {
                                rU(e, t.response.status);
                                let n = t.response ? .headers ? .get("content-length");
                                if (n) {
                                    let t = parseInt(n);
                                    t > 0 && e.setAttribute("http.response_content_length", t)
                                }
                            } else t.error && e.setStatus({
                                code: 2,
                                message: "internal_error"
                            });
                            e.end()
                        }(s, e), l = s, u = e, t = "object" == typeof(c = i) && null !== c ? c.onRequestSpanEnd : void 0, t ? .(l, {
                            headers: u.response ? .headers,
                            error: u.error
                        })), delete r[n]);
                        return
                    }
                    let {
                        spanOrigin: d = "auto.http.browser",
                        propagateTraceparent: p = !1
                    } = "object" == typeof i ? i : {
                        spanOrigin: i
                    }, h = !!r9(), f = a && h ? sP(function(e, t, n) {
                        if (e.startsWith("data:")) {
                            let r = uv(e);
                            return {
                                name: `${t} ${r}`,
                                attributes: ff(e, void 0, t, n)
                            }
                        }
                        let r = ug(e),
                            i = r ? function(e) {
                                if (um(e)) return e.pathname;
                                let t = new URL(e);
                                return t.search = "", t.hash = "", ["80", "443"].includes(t.port) && (t.port = ""), t.password && (t.password = "%filtered%"), t.username && (t.username = "%filtered%"), t.toString()
                            }(r) : e;
                        return {
                            name: `${t} ${i}`,
                            attributes: ff(e, r, t, n)
                        }
                    }(o, s, d)) : new sE;
                    if (e.fetchData.__span = f.spanContext().spanId, r[f.spanContext().spanId] = f, n(e.fetchData.url)) {
                        let t = e.args[0],
                            n = { ...e.args[1] || {}
                            },
                            r = function(e, t, n, r) {
                                var i;
                                let s = au({
                                        span: n,
                                        propagateTraceparent: r
                                    }),
                                    o = s["sentry-trace"],
                                    a = s.baggage,
                                    l = s.traceparent;
                                if (!o) return;
                                let u = t.headers || (nc(e) ? e.headers : void 0);
                                if (!u) return { ...s
                                };
                                if (i = u, "u" > typeof Headers && nl(i, Headers)) {
                                    let e = new Headers(u);
                                    if (e.get("sentry-trace") || e.set("sentry-trace", o), r && l && !e.get("traceparent") && e.set("traceparent", l), a) {
                                        let t = e.get("baggage");
                                        t ? fh(t) || e.set("baggage", `${t},${a}`) : e.set("baggage", a)
                                    }
                                    return e
                                }
                                if (Array.isArray(u)) {
                                    let e = [...u];
                                    u.find(e => "sentry-trace" === e[0]) || e.push(["sentry-trace", o]), r && l && !u.find(e => "traceparent" === e[0]) && e.push(["traceparent", l]);
                                    let t = u.find(e => "baggage" === e[0] && fh(e[1]));
                                    return a && !t && e.push(["baggage", a]), e
                                } {
                                    let e = "sentry-trace" in u ? u["sentry-trace"] : void 0,
                                        t = "traceparent" in u ? u.traceparent : void 0,
                                        n = "baggage" in u ? u.baggage : void 0,
                                        i = n ? Array.isArray(n) ? [...n] : [n] : [],
                                        s = n && (Array.isArray(n) ? n.find(e => fh(e)) : fh(n));
                                    a && !s && i.push(a);
                                    let c = { ...u,
                                        "sentry-trace": e ? ? o,
                                        baggage: i.length > 0 ? i.join(",") : void 0
                                    };
                                    return r && l && !t && (c.traceparent = l), c
                                }
                            }(t, n, rj() && h ? f : void 0, p);
                        r && (e.args[1] = n, n.headers = r)
                    }
                    let m = rl();
                    if (m) {
                        let t = {
                            input: e.args,
                            response: e.response,
                            startTimestamp: e.startTimestamp,
                            endTimestamp: e.endTimestamp
                        };
                        m.emit("beforeOutgoingRequestSpan", f, t)
                    }
                    return f
                }(e, c, d, p, {
                    propagateTraceparent: h,
                    onRequestSpanEnd: u
                });
                if (e.response && e.fetchData.__span && fC.set(e.response, e.fetchData.__span), t) {
                    let n = fE(e.fetchData.url),
                        r = n ? u_(n).host : void 0;
                    t.setAttributes({
                        "http.url": n ? uv(n) : void 0,
                        "server.address": r
                    }), o && fA(t), l ? .(t, {
                        headers: e.headers
                    })
                }
            })
        }
        r && uE(e => {
            let t = function(e, t, n, r, i, s) {
                let o = e.xhr,
                    a = o ? .[uk];
                if (!o || o.__sentry_own_request__ || !a) return;
                let {
                    url: l,
                    method: u
                } = a, c = rj() && t(l);
                if (e.endTimestamp) {
                    let t = o.__sentry_xhr_span_id__;
                    if (!t) return;
                    let n = r[t];
                    n && (c && void 0 !== a.status_code && (rU(n, a.status_code), n.end(), s ? .(n, {
                        headers: fx(ct(o)),
                        error: e.error
                    })), delete r[t]);
                    return
                }
                let d = fE(l),
                    p = d ? u_(d) : u_(l),
                    h = uv(uy(l)),
                    f = !!r9(),
                    m = c && f ? sP({
                        name: `${u} ${h}`,
                        attributes: {
                            url: uv(l),
                            type: "xhr",
                            "http.method": u,
                            "http.url": d ? uv(d) : void 0,
                            "server.address": p ? .host,
                            [rb]: "auto.http.browser",
                            [rv]: "http.client",
                            ...p ? .search && {
                                "http.query": p ? .search
                            },
                            ...p ? .hash && {
                                "http.fragment": p ? .hash
                            }
                        }
                    }) : new sE;
                o.__sentry_xhr_span_id__ = m.spanContext().spanId, r[o.__sentry_xhr_span_id__] = m, n(l) && function(e, t, n) {
                    let {
                        "sentry-trace": r,
                        baggage: i,
                        traceparent: s
                    } = au({
                        span: t,
                        propagateTraceparent: n
                    });
                    r && function(e, t, n, r) {
                        let i = e.__sentry_xhr_v3__ ? .request_headers;
                        if (!i ? .["sentry-trace"] && e.setRequestHeader) try {
                            if (e.setRequestHeader("sentry-trace", t), r && !i ? .traceparent && e.setRequestHeader("traceparent", r), n) {
                                let t = i ? .baggage;
                                t && t.split(",").some(e => e.trim().startsWith("sentry-")) || e.setRequestHeader("baggage", n)
                            }
                        } catch {}
                    }(e, r, i, s)
                }(o, rj() && f ? m : void 0, i);
                let g = rl();
                return g && g.emit("beforeOutgoingRequestSpan", m, e), m
            }(e, c, d, p, h, u);
            t && (o && fA(t), l ? .(t, {
                headers: fx(e.xhr.__sentry_xhr_v3__ ? .request_headers)
            }))
        })
    }

    function fA(e) {
        let {
            url: t
        } = r1(e).data;
        if (!t || "string" != typeof t) return;
        let n = cV("resource", ({
            entries: r
        }) => {
            r.forEach(r => {
                "resource" === r.entryType && "initiatorType" in r && "string" == typeof r.nextHopProtocol && ("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) && r.name.endsWith(t) && (e.setAttributes(fk(r)), setTimeout(n))
            })
        })
    }
    let fR = {
        idleTimeout: 1e3,
        finalTimeout: 3e4,
        childSpanTimeout: 15e3
    };

    function fO(e, t = {}) {
        let n, r, i = new Map,
            s = !1,
            o = "externalFinish",
            a = !t.disableAutoFinish,
            l = [],
            {
                idleTimeout: u = fR.idleTimeout,
                finalTimeout: c = fR.finalTimeout,
                childSpanTimeout: d = fR.childSpanTimeout,
                beforeSpanEnd: p,
                trimIdleSpanEndTimestamp: h = !0
            } = t,
            f = rl();
        if (!f || !rj()) {
            let e = new sE,
                t = {
                    sample_rate: "0",
                    sampled: "false",
                    ...io(e)
                };
            return nb(e, ir, t), e
        }
        let m = rr(),
            g = r9(),
            _ = (n = sP(e), n1(rr(), n), n);

        function y() {
            r && (clearTimeout(r), r = void 0)
        }

        function v(e) {
            y(), r = setTimeout(() => {
                !s && 0 === i.size && a && (o = "idleTimeout", _.end(e))
            }, u)
        }

        function b(e) {
            r = setTimeout(() => {
                !s && a && (o = "heartbeatFailed", _.end(e))
            }, d)
        }

        function S(e) {
            s = !0, i.clear(), l.forEach(e => e()), n1(m, g);
            let t = r1(_),
                {
                    start_timestamp: n
                } = t;
            if (!n) return;
            t.data[rS] || _.setAttribute(rS, o);
            let r = t.status;
            r && "unknown" !== r || _.setStatus({
                code: 1
            }), ny.log(`[Tracing] Idle span "${t.op}" finished`);
            let a = r8(_).filter(e => e !== _),
                d = 0;
            a.forEach(t => {
                t.isRecording() && (t.setStatus({
                    code: 2,
                    message: "cancelled"
                }), t.end(e));
                let {
                    timestamp: n = 0,
                    start_timestamp: r = 0
                } = r1(t), i = r <= e;
                (!(n - r <= (c + u) / 1e3) || !i) && (_[r5] && _[r5].delete(t), d++)
            }), d > 0 && _.setAttribute("sentry.idle_span_discarded_spans", d)
        }
        return _.end = new Proxy(_.end, {
            apply(e, t, n) {
                if (p && p(_), t instanceof sE) return;
                let [r, ...i] = n, s = rQ(r || nG()), o = r8(_).filter(e => e !== _), a = r1(_);
                if (!o.length || !h) return S(s), Reflect.apply(e, t, [s, ...i]);
                let l = f.getOptions().ignoreSpans,
                    u = o ? .reduce((e, t) => {
                        let n = r1(t);
                        return !n.timestamp || l && sx(n, l) ? e : e ? Math.max(e, n.timestamp) : n.timestamp
                    }, void 0),
                    d = a.start_timestamp,
                    m = Math.min(d ? d + c / 1e3 : 1 / 0, Math.max(d || -1 / 0, Math.min(s, u || 1 / 0)));
                return S(m), Reflect.apply(e, t, [m, ...i])
            }
        }), l.push(f.on("spanStart", e => {
            var t;
            !(s || e === _ || r1(e).timestamp || e instanceof sT && e.isStandaloneSpan()) && r8(_).includes(e) && (t = e.spanContext().spanId, y(), i.set(t, !0), b(nG() + d / 1e3))
        })), l.push(f.on("spanEnd", e => {
            if (!s) {
                var t;
                t = e.spanContext().spanId, i.has(t) && i.delete(t), 0 === i.size && v(nG() + u / 1e3)
            }
        })), l.push(f.on("idleSpanEnableAutoFinish", e => {
            e === _ && (a = !0, v(), i.size && b())
        })), t.disableAutoFinish || v(), setTimeout(() => {
            s || (_.setStatus({
                code: 2,
                message: "deadline_exceeded"
            }), o = "finalTimeout", _.end())
        }, c), _
    }
    let fL = 0,
        fP = {};

    function fN(e, t, n, r, i = n) {
        var s;
        let o = t["secureConnection" === (s = n) ? "connectEnd" : "fetch" === s ? "domainLookupStart" : `${s}End`],
            a = t[`${n}Start`];
        a && o && fg(e, r + fv(a), r + fv(o), {
            op: `browser.${i}`,
            name: t.name,
            attributes: {
                [rb]: "auto.ui.browser.metrics",
                ..."redirect" === n && null != t.redirectCount ? {
                    "http.redirect_count": t.redirectCount
                } : {}
            }
        })
    }
    let fD = [],
        f$ = new Map,
        fj = new Map,
        fF = {
            click: "click",
            pointerdown: "click",
            pointerup: "click",
            mousedown: "click",
            mouseup: "click",
            touchstart: "click",
            touchend: "click",
            mouseover: "hover",
            mouseout: "hover",
            mouseenter: "hover",
            mouseleave: "hover",
            pointerover: "hover",
            pointerout: "hover",
            pointerenter: "hover",
            pointerleave: "hover",
            dragstart: "drag",
            dragend: "drag",
            drag: "drag",
            dragenter: "drag",
            dragleave: "drag",
            dragover: "drag",
            drop: "drag",
            keydown: "press",
            keyup: "press",
            keypress: "press",
            input: "press"
        },
        fU = ({
            metric: e
        }) => {
            if (void 0 == e.value) return;
            let t = fv(e.value);
            if (t > 60) return;
            let n = e.entries.find(t => t.duration === e.value && fF[t.name]);
            if (!n) return;
            let {
                interactionId: r
            } = n, i = fF[n.name], s = fv(nY() + n.startTime), o = r9(), a = o ? r7(o) : void 0, l = null != r ? f$.get(r) : void 0, u = l ? .span || a, c = u ? r1(u).description : rr().getScopeData().transactionName, d = f_({
                name: l ? .elementName || nd(n.target),
                transaction: c,
                attributes: {
                    [rb]: "auto.http.browser.inp",
                    [rv]: `ui.interaction.${i}`,
                    [rC]: n.duration
                },
                startTime: s
            });
            d && (d.addEvent("inp", {
                [rw]: "millisecond",
                [rk]: e.value
            }), d.end(s + t))
        },
        fB = "sentry_previous_trace";

    function fW(e) {
        return 1 === e.traceFlags
    }
    let fq = /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i,
        fH = { ...fR,
            instrumentNavigation: !0,
            instrumentPageLoad: !0,
            markBackgroundSpan: !0,
            enableLongTask: !0,
            enableLongAnimationFrame: !0,
            enableInp: !0,
            ignoreResourceSpans: [],
            ignorePerformanceApiSpans: [],
            detectRedirects: !0,
            linkPreviousTrace: "in-memory",
            consistentTraceSampling: !1,
            enableReportPageLoaded: !1,
            _experiments: {},
            ...fT
        },
        fz = (e = {}) => {
            let t, n, r, i;
            "enableElementTiming" in e && ng(() => {
                console.warn("[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead.")
            });
            let s = {
                    name: void 0,
                    source: void 0
                },
                o = iP.document,
                {
                    enableInp: a,
                    enableLongTask: l,
                    enableLongAnimationFrame: u,
                    _experiments: {
                        enableInteractions: c,
                        enableStandaloneClsSpans: d,
                        enableStandaloneLcpSpans: p
                    },
                    beforeStartSpan: h,
                    idleTimeout: f,
                    finalTimeout: m,
                    childSpanTimeout: g,
                    markBackgroundSpan: _,
                    traceFetch: y,
                    traceXHR: v,
                    trackFetchStreamPerformance: b,
                    shouldCreateSpanForRequest: S,
                    enableHTTPTimings: w,
                    ignoreResourceSpans: E,
                    ignorePerformanceApiSpans: x,
                    instrumentPageLoad: C,
                    instrumentNavigation: I,
                    detectRedirects: T,
                    linkPreviousTrace: M,
                    consistentTraceSampling: A,
                    enableReportPageLoaded: R,
                    onRequestSpanStart: P,
                    onRequestSpanEnd: N
                } = { ...fH,
                    ...e
                },
                D = (i = iP.navigator, !!i ? .userAgent && fq.test(i.userAgent));

            function $(e, n, i = !0) {
                let a = "pageload" === n.op,
                    l = n.name,
                    u = h ? h(n) : n,
                    c = u.attributes || {};
                if (l !== u.name && (c[rg] = "custom", u.attributes = c), !i) {
                    let e = nJ();
                    sP({ ...u,
                        startTime: e
                    }).end(e);
                    return
                }
                s.name = u.name, s.source = c[rg];
                let _ = fO(u, {
                    idleTimeout: f,
                    finalTimeout: m,
                    childSpanTimeout: g,
                    disableAutoFinish: a,
                    beforeSpanEnd: n => {
                        t ? .(),
                            function(e, t) {
                                var n, r;
                                let i = fy(),
                                    s = nY();
                                if (!i ? .getEntries || !s) return;
                                let o = fv(s),
                                    a = i.getEntries(),
                                    {
                                        op: l,
                                        start_timestamp: u
                                    } = r1(e);
                                a.slice(fL).forEach(n => {
                                        let r = fv(n.startTime),
                                            i = fv(Math.max(0, n.duration));
                                        if ("navigation" !== l || !u || !(o + r < u)) switch (n.entryType) {
                                            case "navigation":
                                                var s, a, c, d, p, h;
                                                let f, m, g;
                                                s = e, a = n, c = o, ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(e => {
                                                    fN(s, a, e, c)
                                                }), fN(s, a, "secureConnection", c, "TLS/SSL"), fN(s, a, "fetch", c, "cache"), fN(s, a, "domainLookup", c, "DNS"), d = s, p = a, f = (h = c) + fv(p.requestStart), m = h + fv(p.responseEnd), g = h + fv(p.responseStart), p.responseEnd && (fg(d, f, m, {
                                                    op: "browser.request",
                                                    name: p.name,
                                                    attributes: {
                                                        [rb]: "auto.ui.browser.metrics"
                                                    }
                                                }), fg(d, g, m, {
                                                    op: "browser.response",
                                                    name: p.name,
                                                    attributes: {
                                                        [rb]: "auto.ui.browser.metrics"
                                                    }
                                                }));
                                                break;
                                            case "mark":
                                            case "paint":
                                            case "measure":
                                                {! function(e, t, n, r, i, s) {
                                                        if (function(e) {
                                                                if (e ? .entryType === "measure") try {
                                                                    return "Components ⚛" === e.detail.devtools.track
                                                                } catch {
                                                                    return
                                                                }
                                                            }(t) || ["mark", "measure"].includes(t.entryType) && nB(t.name, s)) return;
                                                        let o = cd(!1),
                                                            a = i + Math.max(n, fv(o ? o.requestStart : 0)),
                                                            l = i + n,
                                                            u = l + r,
                                                            c = {
                                                                [rb]: "auto.resource.browser.metrics"
                                                            };
                                                        a !== l && (c["sentry.browser.measure_happened_before_request"] = !0, c["sentry.browser.measure_start_time"] = a),
                                                            function(e, t) {
                                                                try {
                                                                    let n = t.detail;
                                                                    if (!n) return;
                                                                    if ("object" == typeof n) {
                                                                        for (let [t, r] of Object.entries(n))
                                                                            if (r && ni(r)) e[`sentry.browser.measure.detail.${t}`] = r;
                                                                            else if (void 0 !== r) try {
                                                                            e[`sentry.browser.measure.detail.${t}`] = JSON.stringify(r)
                                                                        } catch {}
                                                                        return
                                                                    }
                                                                    if (ni(n)) {
                                                                        e["sentry.browser.measure.detail"] = n;
                                                                        return
                                                                    }
                                                                    try {
                                                                        e["sentry.browser.measure.detail"] = JSON.stringify(n)
                                                                    } catch {}
                                                                } catch {}
                                                            }(c, t), a <= u && fg(e, a, u, {
                                                                name: t.name,
                                                                op: t.entryType,
                                                                attributes: c
                                                            })
                                                    }(e, n, r, i, o, t.ignorePerformanceApiSpans);
                                                    let s = cy(),
                                                        a = n.startTime < s.firstHiddenTime;
                                                    "first-paint" === n.name && a && (fP.fp = {
                                                        value: n.startTime,
                                                        unit: "millisecond"
                                                    }),
                                                    "first-contentful-paint" === n.name && a && (fP.fcp = {
                                                        value: n.startTime,
                                                        unit: "millisecond"
                                                    });
                                                    break
                                                }
                                            case "resource":
                                                ! function(e, t, n, r, i, s, o) {
                                                    var a, l;
                                                    if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                                                    let u = t.initiatorType ? `resource.${t.initiatorType}` : "resource.other";
                                                    if (o ? .includes(u)) return;
                                                    let c = {
                                                            [rb]: "auto.resource.browser.metrics"
                                                        },
                                                        d = u_(n);
                                                    d.protocol && (c["url.scheme"] = d.protocol.split(":").pop()), d.host && (c["server.address"] = d.host), c["url.same_origin"] = n.includes(t3.location.origin), a = t, l = c, [
                                                        ["responseStatus", "http.response.status_code"],
                                                        ["transferSize", "http.response_transfer_size"],
                                                        ["encodedBodySize", "http.response_content_length"],
                                                        ["decodedBodySize", "http.decoded_response_content_length"],
                                                        ["renderBlockingStatus", "resource.render_blocking_status"],
                                                        ["deliveryType", "http.response_delivery_type"]
                                                    ].forEach(([e, t]) => {
                                                        let n = a[e];
                                                        null != n && ("number" == typeof n && n < 0x7fffffff || "string" == typeof n) && (l[t] = n)
                                                    });
                                                    let p = { ...c,
                                                            ...fk(t)
                                                        },
                                                        h = s + r;
                                                    fg(e, h, h + i, {
                                                        name: n.replace(t3.location.origin, ""),
                                                        op: u,
                                                        attributes: p
                                                    })
                                                }(e, n, n.name, r, i, o, t.ignoreResourceSpans)
                                        }
                                    }), fL = Math.max(a.length - 1, 0),
                                    function(e) {
                                        let t = t3.navigator;
                                        if (!t) return;
                                        let n = t.connection;
                                        n && (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType), n.type && e.setAttribute("connectionType", n.type), fm(n.rtt) && (fP["connection.rtt"] = {
                                            value: n.rtt,
                                            unit: "millisecond"
                                        })), fm(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`), fm(t.hardwareConcurrency) && e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency))
                                    }(e), "pageload" === l && (function(e) {
                                        let t = cd(!1);
                                        if (!t) return;
                                        let {
                                            responseStart: n,
                                            requestStart: r
                                        } = t;
                                        r <= n && (e["ttfb.requestTime"] = {
                                            value: n - r,
                                            unit: "millisecond"
                                        })
                                    }(fP), t.recordClsOnPageloadSpan || delete fP.cls, t.recordLcpOnPageloadSpan || delete fP.lcp, Object.entries(fP).forEach(([e, t]) => {
                                        sC(e, t.value, t.unit)
                                    }), e.setAttribute("performance.timeOrigin", o), e.setAttribute("performance.activationStart", cp()), n = e, r = t, O && r.recordLcpOnPageloadSpan && (O.element && n.setAttribute("lcp.element", nd(O.element)), O.id && n.setAttribute("lcp.id", O.id), O.url && n.setAttribute("lcp.url", O.url.trim().slice(0, 200)), null != O.loadTime && n.setAttribute("lcp.loadTime", O.loadTime), null != O.renderTime && n.setAttribute("lcp.renderTime", O.renderTime), n.setAttribute("lcp.size", O.size)), L ? .sources && r.recordClsOnPageloadSpan && L.sources.forEach((e, t) => n.setAttribute(`cls.source.${t+1}`, nd(e.node)))), O = void 0, L = void 0, fP = {}
                            }(n, {
                                recordClsOnPageloadSpan: !d,
                                recordLcpOnPageloadSpan: !p,
                                ignoreResourceSpans: E,
                                ignorePerformanceApiSpans: x
                            }), nb(e, fY, void 0);
                        let i = rr(),
                            s = i.getPropagationContext();
                        i.setPropagationContext({ ...s,
                            traceId: _.spanContext().traceId,
                            sampled: r2(_),
                            dsc: io(n)
                        }), a && (r = void 0)
                    },
                    trimIdleSpanEndTimestamp: !R
                });

                function y() {
                    o && ["interactive", "complete"].includes(o.readyState) && e.emit("idleSpanEnableAutoFinish", _)
                }
                a && R && (r = _), nb(e, fY, _), a && !R && o && (o.addEventListener("readystatechange", () => {
                    y()
                }), y())
            }
            return {
                name: "BrowserTracing",
                setup(e) {
                    if (!D) {
                        if (lu(), t = function({
                                recordClsStandaloneSpans: e,
                                recordLcpStandaloneSpans: t,
                                client: n
                            }) {
                                let r = fy();
                                if (r && nY()) {
                                    r.mark && t3.performance.mark("sentry-tracing-init");
                                    let i = t ? function(e) {
                                            let t, n = 0;
                                            if (!fb("largest-contentful-paint")) return;
                                            let r = cH(({
                                                metric: e
                                            }) => {
                                                let r = e.entries[e.entries.length - 1];
                                                r && (n = e.value, t = r)
                                            }, !0);
                                            fS(e, (e, i) => {
                                                var s, o, a, l;
                                                let u, c, d, p, h;
                                                s = n, o = t, a = i, l = e, u = fv((nY() || 0) + (o ? .startTime || 0)), c = rr().getScopeData().transactionName, d = o ? nd(o.element) : "Largest contentful paint", p = {
                                                    [rb]: "auto.http.browser.lcp",
                                                    [rv]: "ui.webvital.lcp",
                                                    [rC]: 0,
                                                    "sentry.pageload.span_id": a,
                                                    "sentry.report_event": l
                                                }, o && (o.element && (p["lcp.element"] = nd(o.element)), o.id && (p["lcp.id"] = o.id), o.url && (p["lcp.url"] = o.url), null != o.loadTime && (p["lcp.loadTime"] = o.loadTime), null != o.renderTime && (p["lcp.renderTime"] = o.renderTime), null != o.size && (p["lcp.size"] = o.size)), (h = f_({
                                                    name: d,
                                                    transaction: c,
                                                    attributes: p,
                                                    startTime: u
                                                })) && (h.addEvent("lcp", {
                                                    [rw]: "millisecond",
                                                    [rk]: s
                                                }), h.end(u)), r()
                                            })
                                        }(n) : cH(({
                                            metric: e
                                        }) => {
                                            let t = e.entries[e.entries.length - 1];
                                            t && (fP.lcp = {
                                                value: e.value,
                                                unit: "millisecond"
                                            }, O = t)
                                        }, !0),
                                        s = cZ("ttfb", ({
                                            metric: e
                                        }) => {
                                            e.entries[e.entries.length - 1] && (fP.ttfb = {
                                                value: e.value,
                                                unit: "millisecond"
                                            })
                                        }, cY, k),
                                        o = e ? function(e) {
                                            let t, n = 0;
                                            if (!fb("layout-shift")) return;
                                            let r = cq(({
                                                metric: e
                                            }) => {
                                                let r = e.entries[e.entries.length - 1];
                                                r && (n = e.value, t = r)
                                            }, !0);
                                            fS(e, (e, i) => {
                                                var s, o, a, l;
                                                let u, c, d, p, h;
                                                s = n, o = t, a = i, l = e, u = o ? fv((nY() || 0) + o.startTime) : nG(), c = rr().getScopeData().transactionName, d = o ? nd(o.sources[0] ? .node) : "Layout shift", p = {
                                                    [rb]: "auto.http.browser.cls",
                                                    [rv]: "ui.webvital.cls",
                                                    [rC]: 0,
                                                    "sentry.pageload.span_id": a,
                                                    "sentry.report_event": l
                                                }, o ? .sources && o.sources.forEach((e, t) => {
                                                    p[`cls.source.${t+1}`] = nd(e.node)
                                                }), (h = f_({
                                                    name: d,
                                                    transaction: c,
                                                    attributes: p,
                                                    startTime: u
                                                })) && (h.addEvent("cls", {
                                                    [rw]: "",
                                                    [rk]: s
                                                }), h.end(u)), r()
                                            })
                                        }(n) : cq(({
                                            metric: e
                                        }) => {
                                            let t = e.entries[e.entries.length - 1];
                                            t && (fP.cls = {
                                                value: e.value,
                                                unit: ""
                                            }, L = t)
                                        }, !0);
                                    return () => {
                                        i ? .(), s(), o ? .()
                                    }
                                }
                                return () => void 0
                            }({
                                recordClsStandaloneSpans: d || !1,
                                recordLcpStandaloneSpans: p || !1,
                                client: e
                            }), a && function() {
                                if (fy() && nY()) {
                                    let e = cz(fU);
                                    () => {
                                        e()
                                    }
                                }
                            }(), u && t3.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? .includes("long-animation-frame") ? new PerformanceObserver(e => {
                                let t = r9();
                                if (t)
                                    for (let n of e.getEntries()) {
                                        if (!n.scripts[0]) continue;
                                        let e = fv(nY() + n.startTime),
                                            {
                                                start_timestamp: r,
                                                op: i
                                            } = r1(t);
                                        if ("navigation" === i && r && e < r) continue;
                                        let s = fv(n.duration),
                                            o = {
                                                [rb]: "auto.ui.browser.metrics"
                                            },
                                            {
                                                invoker: a,
                                                invokerType: l,
                                                sourceURL: u,
                                                sourceFunctionName: c,
                                                sourceCharPosition: d
                                            } = n.scripts[0];
                                        o["browser.script.invoker"] = a, o["browser.script.invoker_type"] = l, u && (o["code.filepath"] = u), c && (o["code.function"] = c), -1 !== d && (o["browser.script.source_char_position"] = d), fg(t, e, e + s, {
                                            name: "Main UI thread blocked",
                                            op: "ui.long-animation-frame",
                                            attributes: o
                                        })
                                    }
                            }).observe({
                                type: "long-animation-frame",
                                buffered: !0
                            }) : l && cV("longtask", ({
                                entries: e
                            }) => {
                                let t = r9();
                                if (!t) return;
                                let {
                                    op: n,
                                    start_timestamp: r
                                } = r1(t);
                                for (let i of e) {
                                    let e = fv(nY() + i.startTime),
                                        s = fv(i.duration);
                                    "navigation" === n && r && e < r || fg(t, e, e + s, {
                                        name: "Main UI thread blocked",
                                        op: "ui.long-task",
                                        attributes: {
                                            [rb]: "auto.ui.browser.metrics"
                                        }
                                    })
                                }
                            }), c && cV("event", ({
                                entries: e
                            }) => {
                                let t = r9();
                                if (t) {
                                    for (let n of e)
                                        if ("click" === n.name) {
                                            let e = fv(nY() + n.startTime),
                                                r = fv(n.duration),
                                                i = {
                                                    name: nd(n.target),
                                                    op: `ui.interaction.${n.name}`,
                                                    startTime: e,
                                                    attributes: {
                                                        [rb]: "auto.ui.browser.metrics"
                                                    }
                                                },
                                                s = nh(n.target);
                                            s && (i.attributes["ui.component_name"] = s), fg(t, e, e + r, i)
                                        }
                                }
                            }), T && o) {
                            let e = () => {
                                n = nG()
                            };
                            addEventListener("click", e, {
                                capture: !0
                            }), addEventListener("keydown", e, {
                                capture: !0,
                                passive: !0
                            })
                        }
                        e.on("startNavigationSpan", (t, r) => {
                            if (rl() !== e) return;
                            if (r ? .isRedirect) return void $(e, {
                                op: "navigation.redirect",
                                ...t
                            }, !1);
                            n = void 0, i(), ri().setPropagationContext({
                                traceId: nW(),
                                sampleRand: Math.random(),
                                propagationSpanId: rj() ? void 0 : nQ()
                            });
                            let s = rr();
                            s.setPropagationContext({
                                traceId: nW(),
                                sampleRand: Math.random(),
                                propagationSpanId: rj() ? void 0 : nQ()
                            }), s.setSDKProcessingMetadata({
                                normalizedRequest: void 0
                            }), $(e, {
                                op: "navigation",
                                ...t,
                                parentSpan: null,
                                forceTransaction: !0
                            })
                        }), e.on("startPageLoadSpan", (t, n = {}) => {
                            if (rl() !== e) return;
                            i();
                            let r = rV(n.sentryTrace || fG("sentry-trace") || fK("sentry-trace"), n.baggage || fG("baggage") || fK("baggage")),
                                s = rr();
                            s.setPropagationContext(r), rj() || (s.getPropagationContext().propagationSpanId = nQ()), s.setSDKProcessingMetadata({
                                normalizedRequest: i$()
                            }), $(e, {
                                op: "pageload",
                                ...t
                            })
                        }), e.on("endPageloadSpan", () => {
                            R && r && (r.setAttribute(rS, "reportPageLoaded"), r.end())
                        })
                    }

                    function i() {
                        let t = e[fY];
                        t && !r1(t).timestamp && (t.setAttribute(rS, "cancelled"), t.end())
                    }
                },
                afterAllSetup(e) {
                    var t, r, i, o, l;
                    let u;
                    if (D) return;
                    let d = np();
                    if ("off" !== M && function(e, {
                            linkPreviousTrace: t,
                            consistentTraceSampling: n
                        }) {
                            let r = "session-storage" === t,
                                i = r ? function() {
                                    try {
                                        let e = iP.sessionStorage ? .getItem(fB);
                                        return JSON.parse(e)
                                    } catch {
                                        return
                                    }
                                }() : void 0;
                            e.on("spanStart", e => {
                                if (r7(e) !== e) return;
                                let t = rr().getPropagationContext();
                                i = function(e, t, n) {
                                    let r = r1(t),
                                        i = {
                                            spanContext: t.spanContext(),
                                            startTimestamp: r.start_timestamp,
                                            sampleRate: function() {
                                                try {
                                                    return Number(n.dsc ? .sample_rate) ? ? Number(r.data ? .[r_])
                                                } catch {
                                                    return 0
                                                }
                                            }(),
                                            sampleRand: n.sampleRand
                                        };
                                    if (!e) return i;
                                    let s = e.spanContext;
                                    return s.traceId === r.trace_id ? e : (Date.now() / 1e3 - e.startTimestamp <= 3600 && (t.addLink({
                                        context: s,
                                        attributes: {
                                            "sentry.link.type": "previous_trace"
                                        }
                                    }), t.setAttribute("sentry.previous_trace", `${s.traceId}-${s.spanId}-${+!!fW(s)}`)), i)
                                }(i, e, t), r && function(e) {
                                    try {
                                        iP.sessionStorage.setItem(fB, JSON.stringify(e))
                                    } catch (e) {}
                                }(i)
                            });
                            let s = !0;
                            n && e.on("beforeSampling", e => {
                                if (!i) return;
                                let t = rr(),
                                    n = t.getPropagationContext();
                                if (s && n.parentSpanId) {
                                    s = !1;
                                    return
                                }
                                t.setPropagationContext({ ...n,
                                    dsc: { ...n.dsc,
                                        sample_rate: String(i.sampleRate),
                                        sampled: String(fW(i.spanContext))
                                    },
                                    sampleRand: i.sampleRand
                                }), e.parentSampled = fW(i.spanContext), e.parentSampleRate = i.sampleRate, e.spanAttributes = { ...e.spanAttributes,
                                    [ry]: i.sampleRate
                                }
                            })
                        }(e, {
                            linkPreviousTrace: M,
                            consistentTraceSampling: A
                        }), iP.location) {
                        if (C) {
                            let t = nY();
                            fV(e, {
                                name: iP.location.pathname,
                                startTime: t ? t / 1e3 : void 0,
                                attributes: {
                                    [rg]: "url",
                                    [rb]: "auto.pageload.browser"
                                }
                            })
                        }
                        I && uC(({
                            to: t,
                            from: r
                        }) => {
                            var i, s;
                            let o, a;
                            if (void 0 === r && d ? .indexOf(t) !== -1) {
                                d = void 0;
                                return
                            }
                            d = void 0;
                            let l = ug(t),
                                u = e[fY],
                                c = u && T && (i = u, s = n, o = r1(i), !((a = nJ()) - o.start_timestamp > 1.5) && (!s || !(a - s <= 1.5)));
                            fJ(e, {
                                name: l ? .pathname || iP.location.pathname,
                                attributes: {
                                    [rg]: "url",
                                    [rb]: "auto.navigation.browser"
                                }
                            }, {
                                url: t,
                                isRedirect: c
                            })
                        })
                    }
                    _ && iP.document && iP.document.addEventListener("visibilitychange", () => {
                        let e = r9();
                        if (!e) return;
                        let t = r7(e);
                        if (iP.document.hidden && t) {
                            let {
                                op: e,
                                status: n
                            } = r1(t);
                            n || t.setStatus({
                                code: 2,
                                message: "cancelled"
                            }), t.setAttribute("sentry.cancellation_reason", "document.hidden"), t.end()
                        }
                    }), c && (t = e, r = f, i = m, o = g, l = s, iP.document && addEventListener("click", () => {
                        let e = function(e) {
                            return e[fY]
                        }(t);
                        e && ["navigation", "pageload"].includes(r1(e).op) || (u && (u.setAttribute(rS, "interactionInterrupted"), u.end(), u = void 0), l.name && (u = fO({
                            name: l.name,
                            op: "ui.action.click",
                            attributes: {
                                [rg]: l.source || "url"
                            }
                        }, {
                            idleTimeout: r,
                            finalTimeout: i,
                            childSpanTimeout: o
                        })))
                    }, {
                        capture: !0
                    })), a && function() {
                        let e = Object.keys(fF);

                        function t(e) {
                            let t = e.target;
                            if (!t) return;
                            let n = nd(t),
                                r = Math.round(e.timeStamp);
                            if (fj.set(r, n), fj.size > 50) {
                                let e = fj.keys().next().value;
                                void 0 !== e && fj.delete(e)
                            }
                        }
                        cu() && e.forEach(e => {
                            t3.addEventListener(e, t, {
                                capture: !0,
                                passive: !0
                            })
                        });
                        let n = ({
                            entries: e
                        }) => {
                            let t = r9(),
                                n = t && r7(t);
                            e.forEach(e => {
                                if (!("duration" in e)) return;
                                let t = e.interactionId;
                                if (null == t || f$.has(t)) return;
                                let r = e.target ? nd(e.target) : function(e) {
                                    let t = Math.round(e.startTime),
                                        n = fj.get(t);
                                    if (!n)
                                        for (let e = -5; e <= 5; e++) {
                                            let r = fj.get(t + e);
                                            if (r) {
                                                n = r;
                                                break
                                            }
                                        }
                                    return n || "<unknown>"
                                }(e);
                                if (fD.length > 10) {
                                    let e = fD.shift();
                                    f$.delete(e)
                                }
                                fD.push(t), f$.set(t, {
                                    span: n,
                                    elementName: r
                                })
                            })
                        };
                        cV("event", n), cV("first-input", n)
                    }(), fM(e, {
                        traceFetch: y,
                        traceXHR: v,
                        trackFetchStreamPerformance: b,
                        tracePropagationTargets: e.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: S,
                        enableHTTPTimings: w,
                        onRequestSpanStart: P,
                        onRequestSpanEnd: N
                    })
                }
            }
        };

    function fV(e, t, n) {
        e.emit("startPageLoadSpan", t, n), rr().setTransactionName(t.name);
        let r = e[fY];
        return r && e.emit("afterStartPageLoadSpan", r), r
    }

    function fJ(e, t, n) {
        let {
            url: r,
            isRedirect: i
        } = n || {};
        e.emit("beforeStartNavigationSpan", t, {
            isRedirect: i
        }), e.emit("startNavigationSpan", t, {
            isRedirect: i
        });
        let s = rr();
        return s.setTransactionName(t.name), r && !i && s.setSDKProcessingMetadata({
            normalizedRequest: { ...i$(),
                url: r
            }
        }), e[fY]
    }

    function fG(e) {
        let t = iP.document,
            n = t ? .querySelector(`meta[name=${e}]`);
        return n ? .getAttribute("content") || void 0
    }

    function fK(e) {
        let t = iP.performance ? .getEntriesByType ? .("navigation")[0],
            n = t ? .serverTiming ? .find(t => t.name === e);
        return n ? .description
    }
    let fY = "_sentry_idleSpan",
        fX = () => ({
            name: "ElementTiming",
            setup() {
                fy() && nY() && cV("element", ({
                    entries: e
                }) => {
                    for (let t of e) {
                        if (!t.identifier) continue;
                        let e = t.identifier,
                            n = t.name,
                            r = t.renderTime,
                            i = t.loadTime,
                            s = {
                                "sentry.origin": "auto.ui.browser.element_timing",
                                "ui.element.identifier": e
                            };
                        n && (s["ui.element.paint_type"] = n), t.id && (s["ui.element.id"] = t.id), t.element && (s["ui.element.type"] = t.element.tagName.toLowerCase()), t.url && (s["ui.element.url"] = t.url), t.naturalWidth && (s["ui.element.width"] = t.naturalWidth), t.naturalHeight && (s["ui.element.height"] = t.naturalHeight), r > 0 && a6("ui.element.render_time", r, {
                            unit: "millisecond",
                            attributes: s
                        }), i > 0 && a6("ui.element.load_time", i, {
                            unit: "millisecond",
                            attributes: s
                        })
                    }
                })
            }
        });

    function fZ(e = rl()) {
        e ? .emit("endPageloadSpan")
    }

    function fQ(e) {
        let t = r9();
        if (t === e) return;
        let n = rr();
        e.end = new Proxy(e.end, {
            apply: (e, r, i) => (n1(n, t), Reflect.apply(e, r, i))
        }), n1(n, e)
    }

    function f0(e) {
        return new Promise((t, n) => {
            e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error)
        })
    }

    function f1(e) {
        return f0(e.getAllKeys())
    }

    function f2(e) {
        let t;

        function n() {
            var n, r;
            let i, s;
            return void 0 == t && (n = e.dbName || "sentry-offline", r = e.storeName || "queue", (i = indexedDB.open(n)).onupgradeneeded = () => i.result.createObjectStore(r), s = f0(i), t = e => s.then(t => e(t.transaction(r, "readwrite").objectStore(r)))), t
        }
        return {
            push: async t => {
                try {
                    var r, i;
                    let s = iK(t);
                    await (r = n(), i = e.maxQueueSize || 30, r(e => f1(e).then(t => {
                        if (!(t.length >= i)) return e.put(s, Math.max(...t, 0) + 1), f0(e.transaction)
                    })))
                } catch {}
            },
            unshift: async t => {
                try {
                    var r, i;
                    let s = iK(t);
                    await (r = n(), i = e.maxQueueSize || 30, r(e => f1(e).then(t => {
                        if (!(t.length >= i)) return e.put(s, Math.min(...t, 0) - 1), f0(e.transaction)
                    })))
                } catch {}
            },
            shift: async () => {
                try {
                    let e = await n()(e => f1(e).then(t => {
                        let n = t[0];
                        if (null != n) return f0(e.get(n)).then(t => (e.delete(n), f0(e.transaction).then(() => t)))
                    }));
                    if (e) return function(e) {
                        let t = "string" == typeof e ? iG(e) : e;

                        function n(e) {
                            let n = t.subarray(0, e);
                            return t = t.subarray(e + 1), n
                        }

                        function r() {
                            var e;
                            let r, i = t.indexOf(10);
                            return i < 0 && (i = t.length), JSON.parse((e = n(i), (r = t4(t3)).decodePolyfill ? r.decodePolyfill(e) : new TextDecoder().decode(e)))
                        }
                        let i = r(),
                            s = [];
                        for (; t.length;) {
                            let e = r(),
                                t = "number" == typeof e.length ? e.length : void 0;
                            s.push([e, t ? n(t) : r()])
                        }
                        return [i, s]
                    }(e)
                } catch {}
            }
        }
    }

    function f3(e = lX) {
        var t;
        return t = function(e) {
            function t() {}
            return n => {
                let r, i = e(n);
                if (!n.createStore) throw Error("No `createStore` function was provided");
                let s = n.createStore(n),
                    o = 5e3;

                function a(e) {
                    r && clearTimeout(r), r = oK(setTimeout(async () => {
                        r = void 0;
                        let e = await s.shift();
                        e && (e[0].sent_at = new Date().toISOString(), u(e, !0).catch(e => {}))
                    }, e))
                }

                function l() {
                    r || (a(o), o = Math.min(2 * o, 36e5))
                }
                async function u(e, r = !1) {
                    if (!r && iJ(e, ["replay_event", "replay_recording"])) return await s.push(e), a(100), {};
                    try {
                        if (n.shouldSend && await n.shouldSend(e) === !1) throw Error("Envelope not sent because `shouldSend` callback returned false");
                        let t = await i.send(e),
                            r = 100;
                        if (t) {
                            if (t.headers ? .["retry-after"]) r = oZ(t.headers["retry-after"]);
                            else if (t.headers ? .["x-sentry-rate-limits"]) r = 6e4;
                            else if ((t.statusCode || 0) >= 400) return t
                        }
                        return a(r), o = 5e3, t
                    } catch (i) {
                        var c;
                        if (await (c = o, !iJ(e, ["client_report"]) && (!n.shouldStore || n.shouldStore(e, i, c)))) return r ? await s.unshift(e) : await s.push(e), l(), t("Error sending. Event queued.", i), {};
                        throw i
                    }
                }
                return n.flushAtStartup && l(), {
                    send: u,
                    flush: e => (void 0 === e && (o = 5e3, a(100)), i.flush(e))
                }
            }
        }(e), e => {
            let n = t({ ...e,
                createStore: f2
            });
            return iP.addEventListener("online", async e => {
                await n.flush()
            }), n
        }
    }
    let f5 = "window" in t3 && t3.window === t3 && "u" < typeof importScripts,
        f4 = String(0),
        f6 = f5 ? "main" : "worker",
        f8 = iP.navigator,
        f7 = "",
        f9 = "",
        me = "",
        mt = f8 ? .userAgent || "",
        mn = "",
        mr = f8 ? .language || f8 ? .languages ? .[0] || "",
        mi = f8 ? .userAgentData;

    function ms(e) {
        return "pageload" === r1(e).op
    }

    function mo(e) {
        let t = rl(),
            n = t ? .getOptions(),
            r = n ? .stackParser;
        if (!r) return [];
        let i = rf(r);
        if (!i) return [];
        let s = [];
        for (let t of e) {
            let e = function(e) {
                let t = e ? .startsWith("file://") ? e.slice(7) : e;
                return t ? .match(/\/[A-Z]:/) && (t = t.slice(1)), t
            }(t);
            e && i[e] && s.push({
                type: "sourcemap",
                code_file: t,
                debug_id: i[e]
            })
        }
        return s
    }

    function ma(e) {
        return !("number" != typeof e && "boolean" != typeof e || "number" == typeof e && isNaN(e)) && (!0 === e || !1 === e || !(e < 0) && !(e > 1))
    }
    "object" == typeof mi && null !== mi && "getHighEntropyValues" in mi && mi.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then(e => {
        if (f7 = e.platform || "", me = e.architecture || "", mn = e.model || "", f9 = e.platformVersion || "", e.fullVersionList ? .length) {
            let t = e.fullVersionList[e.fullVersionList.length - 1];
            mt = `${t.brand} ${t.version}`
        }
    }).catch(e => void 0);
    let ml = !1;

    function mu() {
        let e = iP.Profiler;
        if ("function" != typeof e) return;
        let t = Math.floor(3e3);
        try {
            return new e({
                sampleInterval: 10,
                maxBufferSize: t
            })
        } catch (e) {
            ml = !0
        }
    }

    function mc(e) {
        if (ml || !e.isRecording()) return !1;
        let t = rl(),
            n = t ? .getOptions();
        if (!n) return !1;
        let r = n.profilesSampleRate;
        return !!ma(r) && !!r && !!(!0 === r || Math.random() < r)
    }

    function md(e) {
        return void 0 !== e.profilesSampleRate
    }
    let mp = new Map;

    function mh(e) {
        let t;
        ms(e) && (t = 1e3 * nG());
        let n = mu();
        if (!n) return;
        let r = nW(),
            i = null;
        async function s() {
            if (e && n) {
                if (!i) return n.stop().then(e => {
                    if (o && (iP.clearTimeout(o), o = void 0), e) {
                        i = e;
                        if (mp.set(r, e), mp.size > 30) {
                            let e = mp.keys().next().value;
                            void 0 !== e && mp.delete(e)
                        }
                    }
                }).catch(e => {})
            }
        }
        rr().setContext("profile", {
            profile_id: r,
            start_timestamp: t
        });
        let o = iP.setTimeout(() => {
                s()
            }, 3e4),
            a = e.end.bind(e);
        e.end = function() {
            return e ? (s().then(() => {
                a()
            }, () => {
                a()
            }), e) : a()
        }
    }
    class mf {
        constructor() {
            this._client = void 0, this._profiler = void 0, this._chunkTimer = void 0, this._profilerId = void 0, this._isRunning = !1, this._sessionSampled = !1, this._lifecycleMode = void 0, this._activeRootSpanIds = new Set, this._rootSpanTimeouts = new Map
        }
        initialize(e) {
            let t = e.getOptions().profileLifecycle,
                n = function(e) {
                    if (ml || "trace" !== e.profileLifecycle && "manual" !== e.profileLifecycle) return !1;
                    let t = e.profileSessionSampleRate;
                    return !!ma(t) && !!t && Math.random() <= t
                }(e.getOptions());
            this._profilerId = nW(), this._client = e, this._sessionSampled = n, this._lifecycleMode = t, "trace" === t && this._setupTraceLifecycleListeners(e)
        }
        start() {
            "trace" === this._lifecycleMode || this._isRunning || this._sessionSampled && this._beginProfiling()
        }
        stop() {
            "trace" === this._lifecycleMode || this._isRunning && this._endProfiling()
        }
        notifyRootSpanActive(e) {
            if ("trace" !== this._lifecycleMode || !this._sessionSampled) return;
            let t = e.spanContext().spanId;
            !t || this._activeRootSpanIds.has(t) || (this._registerTraceRootSpan(t), 1 === this._activeRootSpanIds.size && this._beginProfiling())
        }
        _beginProfiling() {
            if (!this._isRunning) {
                if (this._isRunning = !0, rs().setContext("profile", {
                        profiler_id: this._profilerId
                    }), this._startProfilerInstance(), !this._profiler) return void this._resetProfilerInfo();
                this._startPeriodicChunking()
            }
        }
        _endProfiling() {
            this._isRunning && (this._isRunning = !1, this._chunkTimer && (clearTimeout(this._chunkTimer), this._chunkTimer = void 0), this._clearAllRootSpanTimeouts(), this._collectCurrentChunk().catch(e => {}), "manual" === this._lifecycleMode && rs().setContext("profile", {}))
        }
        _setupTraceLifecycleListeners(e) {
            e.on("spanStart", e => {
                if (!this._sessionSampled || e !== r7(e) || !e.isRecording()) return;
                let t = e.spanContext().spanId;
                !t || this._activeRootSpanIds.has(t) || (this._registerTraceRootSpan(t), 1 === this._activeRootSpanIds.size && this._beginProfiling())
            }), e.on("spanEnd", e => {
                if (!this._sessionSampled) return;
                let t = e.spanContext().spanId;
                t && this._activeRootSpanIds.has(t) && (this._activeRootSpanIds.delete(t), 0 === this._activeRootSpanIds.size && (this._collectCurrentChunk().catch(e => {}), this._endProfiling()))
            })
        }
        _resetProfilerInfo() {
            this._isRunning = !1, rs().setContext("profile", {})
        }
        _clearAllRootSpanTimeouts() {
            this._rootSpanTimeouts.forEach(e => clearTimeout(e)), this._rootSpanTimeouts.clear()
        }
        _registerTraceRootSpan(e) {
            this._activeRootSpanIds.add(e);
            let t = setTimeout(() => this._onRootSpanTimeout(e), 3e5);
            this._rootSpanTimeouts.set(e, t)
        }
        _startProfilerInstance() {
            if (this._profiler ? .stopped === !1) return;
            let e = mu();
            e && (this._profiler = e)
        }
        _startPeriodicChunking() {
            this._isRunning && (this._chunkTimer = setTimeout(() => {
                if (this._collectCurrentChunk().catch(e => {}), this._isRunning) {
                    if (this._startProfilerInstance(), !this._profiler) return void this._resetProfilerInfo();
                    this._startPeriodicChunking()
                }
            }, 6e4))
        }
        _onRootSpanTimeout(e) {
            !this._rootSpanTimeouts.has(e) || (this._rootSpanTimeouts.delete(e), this._activeRootSpanIds.has(e) && (this._activeRootSpanIds.delete(e), 0 === this._activeRootSpanIds.size && this._endProfiling()))
        }
        async _collectCurrentChunk() {
            let e = this._profiler;
            if (this._profiler = void 0, e) try {
                let t = await e.stop(),
                    n = function(e, t, n) {
                        if (null == e) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${e} instead.`);
                        let r = function(e) {
                                let t = [];
                                for (let n = 0; n < e.frames.length; n++) {
                                    let r = e.frames[n];
                                    r && (t[n] = {
                                        function: r.name,
                                        abs_path: "number" == typeof r.resourceId ? e.resources[r.resourceId] : void 0,
                                        lineno: r.line,
                                        colno: r.column
                                    })
                                }
                                let n = [];
                                for (let t = 0; t < e.stacks.length; t++) {
                                    let r = e.stacks[t];
                                    if (!r) continue;
                                    let i = [],
                                        s = r;
                                    for (; s;) i.push(s.frameId), s = void 0 === s.parentId ? void 0 : e.stacks[s.parentId];
                                    n[t] = i
                                }
                                let r = nY(),
                                    i = "number" == typeof performance.timeOrigin ? performance.timeOrigin : r || 0,
                                    s = i - (r || i),
                                    o = [];
                                for (let t = 0; t < e.samples.length; t++) {
                                    let n = e.samples[t];
                                    if (!n) continue;
                                    let r = (i + (n.timestamp - s)) / 1e3;
                                    o[t] = {
                                        stack_id: n.stackId ? ? 0,
                                        thread_id: f4,
                                        timestamp: r
                                    }
                                }
                                return {
                                    frames: t,
                                    stacks: n,
                                    samples: o,
                                    thread_metadata: {
                                        [f4]: {
                                            name: f6
                                        }
                                    }
                                }
                            }(e),
                            i = t.getOptions(),
                            s = t.getSdkMetadata ? .() ? .sdk;
                        return {
                            chunk_id: nW(),
                            client_sdk: {
                                name: s ? .name ? ? "sentry.javascript.browser",
                                version: s ? .version ? ? "0.0.0"
                            },
                            profiler_id: n || nW(),
                            platform: "javascript",
                            version: "2",
                            release: i.release ? ? "",
                            environment: i.environment ? ? "production",
                            debug_meta: {
                                images: mo(e.resources)
                            },
                            profile: r
                        }
                    }(t, this._client, this._profilerId),
                    r = function(e) {
                        try {
                            if (!e || "object" != typeof e) return {
                                reason: "chunk is not an object"
                            };
                            let t = e => "string" == typeof e && /^[a-f0-9]{32}$/.test(e);
                            if (!t(e.profiler_id)) return {
                                reason: "missing or invalid profiler_id"
                            };
                            if (!t(e.chunk_id)) return {
                                reason: "missing or invalid chunk_id"
                            };
                            if (!e.client_sdk) return {
                                reason: "missing client_sdk metadata"
                            };
                            let n = e.profile;
                            if (!n) return {
                                reason: "missing profile data"
                            };
                            if (!Array.isArray(n.frames) || !n.frames.length) return {
                                reason: "profile has no frames"
                            };
                            if (!Array.isArray(n.stacks) || !n.stacks.length) return {
                                reason: "profile has no stacks"
                            };
                            if (!Array.isArray(n.samples) || !n.samples.length) return {
                                reason: "profile has no samples"
                            };
                            return {
                                valid: !0
                            }
                        } catch (e) {
                            return {
                                reason: `unknown validation error: ${e}`
                            }
                        }
                    }(n);
                if ("reason" in r) return;
                this._sendProfileChunk(n)
            } catch (e) {}
        }
        _sendProfileChunk(e) {
            let t = this._client,
                n = iZ(t.getSdkMetadata ? .()),
                r = t.getDsn(),
                i = t.getOptions().tunnel,
                s = iz({
                    event_id: nW(),
                    sent_at: new Date().toISOString(),
                    ...n && {
                        sdk: n
                    },
                    ...!!i && r && {
                        dsn: rL(r)
                    }
                }, [
                    [{
                        type: "profile_chunk",
                        platform: "javascript"
                    }, e]
                ]);
            t.sendEnvelope(s).then(null, e => {})
        }
    }
    let mm = () => ({
            name: "BrowserProfiling",
            setup(e) {
                let t = e.getOptions(),
                    n = new mf;
                if (md(t) || t.profileLifecycle || (t.profileLifecycle = "manual"), md(t) && !t.profilesSampleRate) return;
                let r = r9(),
                    i = r && r7(r);
                if (md(t) && t.profileSessionSampleRate, md(t)) i && ms(i) && mc(i) && mh(i), e.on("spanStart", e => {
                    e === r7(e) && mc(e) && mh(e)
                }), e.on("beforeEnvelope", e => {
                    let t;
                    if (!mp.size) return;
                    let n = (t = [], iV(e, (e, n) => {
                        if ("transaction" === n)
                            for (let n = 1; n < e.length; n++) {
                                let r = e[n];
                                r ? .contexts ? .profile ? .profile_id && t.push(e[n])
                            }
                    }), t);
                    if (!n.length) return;
                    let r = [];
                    for (let e of n) {
                        let t = e ? .contexts,
                            n = t ? .profile ? .profile_id,
                            i = t ? .profile ? .start_timestamp;
                        if ("string" != typeof n || !n) continue;
                        t ? .profile && delete t.profile;
                        let s = function(e) {
                            let t = mp.get(e);
                            return t && mp.delete(e), t
                        }(n);
                        if (!s) continue;
                        let o = function(e, t, n, r) {
                            return !(n.samples.length < 2) && n.frames.length && 1 ? function(e, t, n, r) {
                                var i;
                                let s;
                                if ("transaction" !== r.type) throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
                                if (null == n) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`);
                                let o = ("string" == typeof(s = r.contexts ? .trace ? .trace_id) && s.length, "string" != typeof s) ? "" : s,
                                    a = "thread_metadata" in (i = n) ? i : function(e) {
                                        let t, n = 0,
                                            r = {
                                                samples: [],
                                                stacks: [],
                                                frames: [],
                                                thread_metadata: {
                                                    [f4]: {
                                                        name: f6
                                                    }
                                                }
                                            },
                                            i = e.samples[0];
                                        if (!i) return r;
                                        let s = i.timestamp,
                                            o = nY(),
                                            a = "number" == typeof performance.timeOrigin ? performance.timeOrigin : o || 0,
                                            l = a - (o || a);
                                        return e.samples.forEach((i, o) => {
                                            if (void 0 === i.stackId) {
                                                void 0 === t && (t = n, r.stacks[t] = [], n++), r.samples[o] = {
                                                    elapsed_since_start_ns: ((i.timestamp + l - s) * 1e6).toFixed(0),
                                                    stack_id: t,
                                                    thread_id: f4
                                                };
                                                return
                                            }
                                            let a = e.stacks[i.stackId],
                                                u = [];
                                            for (; a;) {
                                                u.push(a.frameId);
                                                let t = e.frames[a.frameId];
                                                t && void 0 === r.frames[a.frameId] && (r.frames[a.frameId] = {
                                                    function: t.name,
                                                    abs_path: "number" == typeof t.resourceId ? e.resources[t.resourceId] : void 0,
                                                    lineno: t.line,
                                                    colno: t.column
                                                }), a = void 0 === a.parentId ? void 0 : e.stacks[a.parentId]
                                            }
                                            let c = {
                                                elapsed_since_start_ns: ((i.timestamp + l - s) * 1e6).toFixed(0),
                                                stack_id: n,
                                                thread_id: f4
                                            };
                                            r.stacks[n] = u, r.samples[o] = c, n++
                                        }), r
                                    }(i),
                                    l = t || ("number" == typeof r.start_timestamp ? 1e3 * r.start_timestamp : 1e3 * nG()),
                                    u = "number" == typeof r.timestamp ? 1e3 * r.timestamp : 1e3 * nG();
                                return {
                                    event_id: e,
                                    timestamp: new Date(l).toISOString(),
                                    platform: "javascript",
                                    version: "1",
                                    release: r.release || "",
                                    environment: r.environment || rc,
                                    runtime: {
                                        name: "javascript",
                                        version: iP.navigator.userAgent
                                    },
                                    os: {
                                        name: f7,
                                        version: f9,
                                        build_number: mt
                                    },
                                    device: {
                                        locale: mr,
                                        model: mn,
                                        manufacturer: mt,
                                        architecture: me,
                                        is_emulator: !1
                                    },
                                    debug_meta: {
                                        images: mo(n.resources)
                                    },
                                    profile: a,
                                    transactions: [{
                                        name: r.transaction || "",
                                        id: r.event_id || nW(),
                                        trace_id: o,
                                        active_thread_id: f4,
                                        relative_start_ns: "0",
                                        relative_end_ns: ((u - l) * 1e6).toFixed(0)
                                    }]
                                }
                            }(e, t, n, r) : null
                        }(n, i, s, e);
                        o && r.push(o)
                    }! function(e, t) {
                        if (t.length)
                            for (let n of t) e[1].push([{
                                type: "profile"
                            }, n])
                    }(e, r)
                });
                else {
                    let r = t.profileLifecycle;
                    if (e.on("startUIProfiler", () => n.start()), e.on("stopUIProfiler", () => n.stop()), "manual" === r) n.initialize(e);
                    else if ("trace" === r) {
                        if (!rj(t)) return;
                        n.initialize(e), i && n.notifyRootSpanActive(i), iP.setTimeout(() => {
                            let e = r9(),
                                t = e && r7(e);
                            t && n.notifyRootSpanActive(t)
                        }, 0)
                    }
                }
            },
            processEvent: e => (e ? .contexts ? .profile && e.contexts && (e.contexts.trace ? .trace_id && (e.contexts.trace = { ...e.contexts.trace,
                data: { ...e.contexts.trace.data ? ? {},
                    "thread.id" : f4,
                    "thread.name" : f6
                }
            }), e.spans ? .forEach(e => {
                e.data = { ...e.data || {},
                    "thread.id": f4,
                    "thread.name": f6
                }
            })), e)
        }),
        mg = (e = {}) => {
            let t = e.sidecarUrl || "http://localhost:8969/stream";
            return {
                name: "SpotlightBrowser",
                setup: () => {},
                processEvent: e => {
                    var t;
                    return "transaction" === (t = e).type && t.spans && t.contexts ? .trace && "ui.action.click" === t.contexts.trace.op && t.spans.some(({
                        description: e
                    }) => e ? .includes("#sentry-spotlight")) ? null : e
                },
                afterAllSetup: e => {
                    var n, r;
                    let i, s;
                    n = e, r = t, i = lK("fetch"), s = 0, n.on("beforeEnvelope", e => {
                        s > 3 ? ny.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", s) : i(r, {
                            method: "POST",
                            body: iK(e),
                            headers: {
                                "Content-Type": "application/x-sentry-envelope"
                            },
                            mode: "cors"
                        }).then(e => {
                            e.status >= 200 && e.status < 400 && (s = 0)
                        }, e => {
                            s++, ny.error("Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/", e)
                        })
                    })
                }
            }
        },
        m_ = () => ({
            name: "LaunchDarkly",
            processEvent: (e, t, n) => ar(e)
        });

    function my() {
        return {
            name: "sentry-flag-auditor",
            type: "flag-used",
            synchronous: !0,
            method: (e, t, n) => {
                ai(e, t.value), as(e, t.value)
            }
        }
    }
    let mv = () => ({
        name: "OpenFeature",
        processEvent: (e, t, n) => ar(e)
    });class mb {
        after(e, t) {
            ai(t.flagKey, t.value), as(t.flagKey, t.value)
        }
        error(e, t, n) {
            ai(e.flagKey, e.defaultValue), as(e.flagKey, e.defaultValue)
        }
    }
    let mS = ({
        featureFlagClientClass: e
    }) => ({
        name: "Unleash",
        setupOnce() {
            nv(e.prototype, "isEnabled", mw)
        },
        processEvent: (e, t, n) => ar(e)
    });

    function mw(e) {
        return function(...t) {
            let n = t[0],
                r = e.apply(this, t);
            return "string" == typeof n && "boolean" == typeof r && (ai(n, r), as(n, r)), r
        }
    }

    function mk(e) {
        return function(...t) {
            let n = t[0],
                r = e.apply(this, t);
            return "string" == typeof n && "boolean" == typeof r && (ai(n, r), as(n, r)), r
        }
    }
    let mE = ({
            growthbookClass: e
        }) => (({
            growthbookClass: e
        }) => ({
            name: "GrowthBook",
            setupOnce() {
                let t = e.prototype;
                "function" == typeof t.isOn && nv(t, "isOn", mk), "function" == typeof t.getFeatureValue && nv(t, "getFeatureValue", mk)
            },
            processEvent: (e, t, n) => ar(e)
        }))({
            growthbookClass: e
        }),
        mx = ({
            featureFlagClient: e
        }) => ({
            name: "Statsig",
            setup(t) {
                e.on("gate_evaluation", e => {
                    ai(e.gate.name, e.gate.value), as(e.gate.name, e.gate.value)
                })
            },
            processEvent: (e, t, n) => ar(e)
        });async function mC() {
        let e = rl();
        if (!e) return "no-client-active";
        if (!e.getDsn()) return "no-dsn-configured";
        let t = e.getOptions().tunnel || "https://o447951.ingest.sentry.io/api/4509632503087104/envelope/?sentry_version=7&sentry_key=c1dfb07d783ad5325c245c1fd3725390&sentry_client=sentry.javascript.browser%2F1.33.7";
        try {
            await s$(() => fetch(t, {
                body: "{}",
                method: "POST",
                mode: "cors",
                credentials: "omit"
            }))
        } catch {
            return "sentry-unreachable"
        }
    }
    let mI = ({
        worker: e
    }) => ({
        name: "WebWorker",
        setupOnce: () => {
            (Array.isArray(e) ? e : [e]).forEach(e => mT(e))
        },
        addWorker: e => mT(e)
    });

    function mT(e) {
        e.addEventListener("message", e => {
            if (function(e) {
                    if (!ns(e) || !0 !== e._sentryMessage) return !1;
                    let t = "_sentryDebugIds" in e,
                        n = "_sentryModuleMetadata" in e,
                        r = "_sentryWorkerError" in e,
                        i = "_sentryWasmImages" in e;
                    return (!!t || !!n || !!r || !!i) && (!t || !!(ns(e._sentryDebugIds) || void 0 === e._sentryDebugIds)) && (!n || !!(ns(e._sentryModuleMetadata) || void 0 === e._sentryModuleMetadata)) && (!r || !!ns(e._sentryWorkerError)) && (!i || !!Array.isArray(e._sentryWasmImages) && !!e._sentryWasmImages.every(e => ns(e) && "string" == typeof e.code_file)) && !0
                }(e.data)) {
                if (e.stopImmediatePropagation(), e.data._sentryDebugIds && (iP._sentryDebugIds = { ...e.data._sentryDebugIds,
                        ...iP._sentryDebugIds
                    }), e.data._sentryModuleMetadata && (iP._sentryModuleMetadata = { ...e.data._sentryModuleMetadata,
                        ...iP._sentryModuleMetadata
                    }), e.data._sentryWasmImages) {
                    let t = iP._sentryWasmImages || [],
                        n = e.data._sentryWasmImages.filter(e => ns(e) && "string" == typeof e.code_file && !t.some(t => t.code_file === e.code_file));
                    iP._sentryWasmImages = [...t, ...n]
                }
                e.data._sentryWorkerError && function(e) {
                    let t = rl();
                    if (!t) return;
                    let n = t.getOptions().stackParser,
                        r = t.getOptions().attachStacktrace,
                        i = e.reason,
                        s = ni(i) ? uj(i) : lq(n, i, void 0, r, !0);
                    s.level = "error", e.filename && (s.contexts = { ...s.contexts,
                        worker: {
                            filename: e.filename
                        }
                    }), ig(s, {
                        originalException: i,
                        mechanism: {
                            handled: !1,
                            type: "auto.browser.web_worker.onunhandledrejection"
                        }
                    })
                }(e.data._sentryWorkerError)
            }
        })
    }

    function mM({
        self: e
    }) {
        e.postMessage({
            _sentryMessage: !0,
            _sentryDebugIds: e._sentryDebugIds ? ? void 0,
            _sentryModuleMetadata: e._sentryModuleMetadata ? ? void 0
        }), e.addEventListener("unhandledrejection", t => {
            let n = {
                reason: u$(t),
                filename: e.location ? .href
            };
            e.postMessage({
                _sentryMessage: !0,
                _sentryWorkerError: n
            })
        })
    }
}
}]);