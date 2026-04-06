"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [38402], {
        283602: (e, t, i) => {
            i.r(t), i.d(t, {
                useReactiveMessageEventListener: () => m
            });
            var s = i(296540);
            i(16280), i(898992), i(354520), i(581454);
            var n = () => i(531175),
                r = () => i(543346),
                a = () => i(696190);
            let o = new class {
                initialized = !1;
                environment;
                lastProcessedEventTimestamp = 0;
                debounceTimeout;
                storeListener;
                initialize(e) {
                    this.environment = e, this.initialized || (this.lastProcessedEventTimestamp = Date.now(), this.storeListener = () => {
                        this.handleStoreChange()
                    }, i(309479).a.addListener(this.storeListener, {
                        listenerName: "ReactiveMessageEventListener",
                        listenerType: "component"
                    }), this.initialized = !0)
                }
                handleStoreChange() {
                    this.debounceTimeout && clearTimeout(this.debounceTimeout), this.debounceTimeout = setTimeout(() => {
                        this.processNewEvents()
                    }, 300)
                }
                async processNewEvents() {
                    if (this.environment && this.initialized) try {
                        let e = i(309479).a.getRecentEvents().filter(e => e.timestamp > this.lastProcessedEventTimestamp);
                        if (0 === e.length) return;
                        let t = Array.from(a().default.state.pendingDynamicMessages.values());
                        if (0 === t.length) return;
                        let s = await (0, r().Gn)(this.environment);
                        if (!s) return;
                        for (let e of t) !a().default.isVisible(e.key) && e && "reactiveShowConditions" in e && Array.isArray(e.reactiveShowConditions) && e.reactiveShowConditions.length > 0 && (0, r().Tc)({
                            messageConfig: e,
                            environment: this.environment,
                            inAppMessageEligibilityContext: s
                        }) && await (0, n().i)({
                            environment: this.environment,
                            messageKey: e.key
                        });
                        let o = Math.max(...e.map(e => e.timestamp));
                        this.lastProcessedEventTimestamp = o
                    } catch (e) {
                        i(773352).log({
                            level: "error",
                            from: "inAppMessages",
                            type: "reactiveMessageEventListenerError",
                            error: {
                                message: e instanceof Error ? e.message : String(e),
                                stack: e instanceof Error ? e.stack : void 0
                            }
                        })
                    }
                }
                dispose() {
                    this.debounceTimeout && (clearTimeout(this.debounceTimeout), this.debounceTimeout = void 0), this.storeListener && (i(309479).a.removeListener(this.storeListener, "ReactiveMessageEventListener"), this.storeListener = void 0), this.initialized = !1, this.environment = void 0, this.lastProcessedEventTimestamp = 0
                }
            };

            function m() {
                let e = (0, i(533992).v3)();
                return (0, s.useEffect)(() => (o.initialize(e), () => {
                    o.dispose()
                }), [e]), o
            }
        },
        531175: (e, t, i) => {
            i.d(t, {
                i: () => s
            });
            async function s(e) {
                let {
                    environment: t,
                    messageKey: s,
                    options: n,
                    metadata: r
                } = e, a = await i(497345).f.load();
                await a.maybeShowPendingMessagesImpl({
                    environment: t,
                    messageKeys: [s],
                    options: n,
                    metadata: r
                })
            }
        }
    }
]);