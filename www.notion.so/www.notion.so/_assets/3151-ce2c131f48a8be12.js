(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [3151], {
        3739: (t, e, n) => {
            t.exports = function(t, e, r) {
                var o = null == t ? 0 : t.length;
                return o ? (e = r || void 0 === e ? 1 : n(761489)(e), n(225160)(t, e < 0 ? 0 : e, o)) : []
            }
        },
        41484: function(t, e, n) {
            "use strict";
            var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.attemptInRepetitionRecovery = e.Recoverable = e.InRuleRecoveryException = e.IN_RULE_RECOVERY_EXCEPTION = e.EOF_FOLLOW_KEY = void 0;
            var a = () => n(991912),
                u = i(n(962193)),
                s = i(n(927537)),
                c = i(n(835970)),
                l = i(n(455378)),
                f = i(n(907309)),
                d = i(n(761448)),
                p = i(n(679859)),
                h = i(n(932629));
            e.EOF_FOLLOW_KEY = {}, e.IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
            var T = function(t) {
                function n(n) {
                    var r = t.call(this, n) || this;
                    return r.name = e.IN_RULE_RECOVERY_EXCEPTION, r
                }
                return o(n, t), n
            }(Error);
            e.InRuleRecoveryException = T;
            var m = function() {
                function t() {}
                return t.prototype.initRecoverable = function(t) {
                    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = (0, d.default)(t, "recoveryEnabled") ? t.recoveryEnabled : n(358165).DEFAULT_PARSER_CONFIG.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = y)
                }, t.prototype.getTokenToInsert = function(t) {
                    var e = (0, a().createTokenInstance)(t, "", NaN, NaN, NaN, NaN, NaN, NaN);
                    return e.isInsertedInRecovery = !0, e
                }, t.prototype.canTokenTypeBeInsertedInRecovery = function(t) {
                    return !0
                }, t.prototype.canTokenTypeBeDeletedInRecovery = function(t) {
                    return !0
                }, t.prototype.tryInRepetitionRecovery = function(t, e, r, o) {
                    for (var i = this, a = this.findReSyncTokenType(), u = this.exportLexerState(), c = [], l = !1, f = this.LA(1), d = this.LA(1), p = function() {
                            var t = i.LA(0),
                                e = i.errorMessageProvider.buildMismatchTokenMessage({
                                    expected: o,
                                    actual: f,
                                    previous: t,
                                    ruleName: i.getCurrRuleFullName()
                                }),
                                r = new(n(617456)).MismatchedTokenException(e, f, i.LA(0));
                            r.resyncedTokens = (0, s.default)(c), i.SAVE_ERROR(r)
                        }; !l;)
                        if (this.tokenMatcher(d, o)) return void p();
                        else if (r.call(this)) {
                        p(), t.apply(this, e);
                        return
                    } else this.tokenMatcher(d, a) ? l = !0 : (d = this.SKIP_TOKEN(), this.addToResyncTokens(d, c));
                    this.importLexerState(u)
                }, t.prototype.shouldInRepetitionRecoveryBeTried = function(t, e, n) {
                    return !(!1 === n || this.tokenMatcher(this.LA(1), t) || this.isBackTracking() || this.canPerformInRuleRecovery(t, this.getFollowsForInRuleRecovery(t, e)))
                }, t.prototype.getFollowsForInRuleRecovery = function(t, e) {
                    var n = this.getCurrentGrammarPath(t, e);
                    return this.getNextPossibleTokenTypes(n)
                }, t.prototype.tryInRuleRecovery = function(t, e) {
                    if (this.canRecoverWithSingleTokenInsertion(t, e)) return this.getTokenToInsert(t);
                    if (this.canRecoverWithSingleTokenDeletion(t)) {
                        var n = this.SKIP_TOKEN();
                        return this.consumeToken(), n
                    }
                    throw new T("sad sad panda")
                }, t.prototype.canPerformInRuleRecovery = function(t, e) {
                    return this.canRecoverWithSingleTokenInsertion(t, e) || this.canRecoverWithSingleTokenDeletion(t)
                }, t.prototype.canRecoverWithSingleTokenInsertion = function(t, e) {
                    var n = this;
                    if (!this.canTokenTypeBeInsertedInRecovery(t) || (0, u.default)(e)) return !1;
                    var r = this.LA(1);
                    return void 0 !== (0, f.default)(e, function(t) {
                        return n.tokenMatcher(r, t)
                    })
                }, t.prototype.canRecoverWithSingleTokenDeletion = function(t) {
                    return !!this.canTokenTypeBeDeletedInRecovery(t) && this.tokenMatcher(this.LA(2), t)
                }, t.prototype.isInCurrentRuleReSyncSet = function(t) {
                    var e = this.getCurrFollowKey(),
                        n = this.getFollowSetFromFollowKey(e);
                    return (0, p.default)(n, t)
                }, t.prototype.findReSyncTokenType = function() {
                    for (var t = this.flattenFollowSet(), e = this.LA(1), n = 2;;) {
                        var r = (0, f.default)(t, function(t) {
                            return (0, a().tokenMatcher)(e, t)
                        });
                        if (void 0 !== r) return r;
                        e = this.LA(n), n++
                    }
                }, t.prototype.getCurrFollowKey = function() {
                    if (1 === this.RULE_STACK.length) return e.EOF_FOLLOW_KEY;
                    var t = this.getLastExplicitRuleShortName(),
                        n = this.getLastExplicitRuleOccurrenceIndex(),
                        r = this.getPreviousExplicitRuleShortName();
                    return {
                        ruleName: this.shortRuleNameToFullName(t),
                        idxInCallingRule: n,
                        inRule: this.shortRuleNameToFullName(r)
                    }
                }, t.prototype.buildFullFollowKeyStack = function() {
                    var t = this,
                        n = this.RULE_STACK,
                        r = this.RULE_OCCURRENCE_STACK;
                    return (0, l.default)(n, function(o, i) {
                        return 0 === i ? e.EOF_FOLLOW_KEY : {
                            ruleName: t.shortRuleNameToFullName(o),
                            idxInCallingRule: r[i],
                            inRule: t.shortRuleNameToFullName(n[i - 1])
                        }
                    })
                }, t.prototype.flattenFollowSet = function() {
                    var t = this,
                        e = (0, l.default)(this.buildFullFollowKeyStack(), function(e) {
                            return t.getFollowSetFromFollowKey(e)
                        });
                    return (0, c.default)(e)
                }, t.prototype.getFollowSetFromFollowKey = function(t) {
                    if (t === e.EOF_FOLLOW_KEY) return [a().EOF];
                    var r = t.ruleName + t.idxInCallingRule + n(396903).IN + t.inRule;
                    return this.resyncFollows[r]
                }, t.prototype.addToResyncTokens = function(t, e) {
                    return this.tokenMatcher(t, a().EOF) || e.push(t), e
                }, t.prototype.reSyncTo = function(t) {
                    for (var e = [], n = this.LA(1); !1 === this.tokenMatcher(n, t);) n = this.SKIP_TOKEN(), this.addToResyncTokens(n, e);
                    return (0, s.default)(e)
                }, t.prototype.attemptInRepetitionRecovery = function(t, e, n, r, o, i, a) {}, t.prototype.getCurrentGrammarPath = function(t, e) {
                    return {
                        ruleStack: this.getHumanReadableRuleStack(),
                        occurrenceStack: (0, h.default)(this.RULE_OCCURRENCE_STACK),
                        lastTok: t,
                        lastTokOccurrence: e
                    }
                }, t.prototype.getHumanReadableRuleStack = function() {
                    var t = this;
                    return (0, l.default)(this.RULE_STACK, function(e) {
                        return t.shortRuleNameToFullName(e)
                    })
                }, t
            }();

            function y(t, e, n, r, o, i, u) {
                var s = this.getKeyForAutomaticLookahead(r, o),
                    c = this.firstAfterRepMap[s];
                if (void 0 === c) {
                    var l = this.getCurrRuleFullName();
                    c = new i(this.getGAstProductions()[l], o).startWalking(), this.firstAfterRepMap[s] = c
                }
                var f = c.token,
                    d = c.occurrence,
                    p = c.isEndOfRule;
                1 === this.RULE_STACK.length && p && void 0 === f && (f = a().EOF, d = 1), void 0 !== f && void 0 !== d && this.shouldInRepetitionRecoveryBeTried(f, d, u) && this.tryInRepetitionRecovery(t, e, n, f)
            }
            e.Recoverable = m, e.attemptInRepetitionRecovery = y
        },
        55674: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isTokenType = e.hasExtendingTokensTypesMapProperty = e.hasExtendingTokensTypesProperty = e.hasCategoriesProperty = e.hasShortKeyProperty = e.singleAssignCategoriesToksMap = e.assignCategoriesMapProp = e.assignCategoriesTokensProp = e.assignTokenDefaultProps = e.expandCategories = e.augmentTokenTypes = e.tokenIdxToClass = e.tokenShortNameIdx = e.tokenStructuredMatcherNoCategories = e.tokenStructuredMatcher = void 0;
            var o = r(n(962193)),
                i = r(n(183673)),
                a = r(n(956449)),
                u = r(n(835970)),
                s = r(n(666245)),
                c = r(n(455378)),
                l = r(n(539754)),
                f = r(n(761448)),
                d = r(n(679859)),
                p = r(n(932629));

            function h(t) {
                for (var e = (0, p.default)(t), n = t, r = !0; r;) {
                    n = (0, i.default)((0, u.default)((0, c.default)(n, function(t) {
                        return t.CATEGORIES
                    })));
                    var a = (0, s.default)(n, e);
                    e = e.concat(a), (0, o.default)(a) ? r = !1 : n = a
                }
                return e
            }

            function T(t) {
                (0, l.default)(t, function(t) {
                    v(t) || (e.tokenIdxToClass[e.tokenShortNameIdx] = t, t.tokenTypeIdx = e.tokenShortNameIdx++), _(t) && !(0, a.default)(t.CATEGORIES) && (t.CATEGORIES = [t.CATEGORIES]), _(t) || (t.CATEGORIES = []), O(t) || (t.categoryMatches = []), R(t) || (t.categoryMatchesMap = {})
                })
            }

            function m(t) {
                (0, l.default)(t, function(t) {
                    t.categoryMatches = [], (0, l.default)(t.categoryMatchesMap, function(n, r) {
                        t.categoryMatches.push(e.tokenIdxToClass[r].tokenTypeIdx)
                    })
                })
            }

            function y(t) {
                (0, l.default)(t, function(t) {
                    E([], t)
                })
            }

            function E(t, e) {
                (0, l.default)(t, function(t) {
                    e.categoryMatchesMap[t.tokenTypeIdx] = !0
                }), (0, l.default)(e.CATEGORIES, function(n) {
                    var r = t.concat(e);
                    (0, d.default)(r, n) || E(r, n)
                })
            }

            function v(t) {
                return (0, f.default)(t, "tokenTypeIdx")
            }

            function _(t) {
                return (0, f.default)(t, "CATEGORIES")
            }

            function O(t) {
                return (0, f.default)(t, "categoryMatches")
            }

            function R(t) {
                return (0, f.default)(t, "categoryMatchesMap")
            }
            e.tokenStructuredMatcher = function(t, e) {
                var n = t.tokenTypeIdx;
                return n === e.tokenTypeIdx || !0 === e.isParent && !0 === e.categoryMatchesMap[n]
            }, e.tokenStructuredMatcherNoCategories = function(t, e) {
                return t.tokenTypeIdx === e.tokenTypeIdx
            }, e.tokenShortNameIdx = 1, e.tokenIdxToClass = {}, e.augmentTokenTypes = function(t) {
                var e = h(t);
                T(e), y(e), m(e), (0, l.default)(e, function(t) {
                    t.isParent = t.categoryMatches.length > 0
                })
            }, e.expandCategories = h, e.assignTokenDefaultProps = T, e.assignCategoriesTokensProp = m, e.assignCategoriesMapProp = y, e.singleAssignCategoriesToksMap = E, e.hasShortKeyProperty = v, e.hasCategoriesProperty = _, e.hasExtendingTokensTypesProperty = O, e.hasExtendingTokensTypesMapProperty = R, e.isTokenType = function(t) {
                return (0, f.default)(t, "tokenTypeIdx")
            }
        },
        74385: function(t, e, n) {
            "use strict";
            var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.buildModel = void 0;
            var a = i(n(455378)),
                u = i(n(835970)),
                s = i(n(935880)),
                c = i(n(442426)),
                l = i(n(494394)),
                f = i(n(386139));
            e.buildModel = function(t) {
                var e = new d,
                    n = (0, s.default)(t);
                return (0, a.default)(n, function(t) {
                    return e.visitRule(t)
                })
            };
            var d = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.visitRule = function(t) {
                    var e = this.visitEach(t.definition),
                        n = (0, l.default)(e, function(t) {
                            return t.propertyName
                        }),
                        r = (0, a.default)(n, function(t, e) {
                            var n = !(0, c.default)(t, function(t) {
                                    return !t.canBeNull
                                }),
                                r = t[0].type;
                            return t.length > 1 && (r = (0, a.default)(t, function(t) {
                                return t.type
                            })), {
                                name: e,
                                type: r,
                                optional: n
                            }
                        });
                    return {
                        name: t.name,
                        properties: r
                    }
                }, e.prototype.visitAlternative = function(t) {
                    return this.visitEachAndOverrideWith(t.definition, {
                        canBeNull: !0
                    })
                }, e.prototype.visitOption = function(t) {
                    return this.visitEachAndOverrideWith(t.definition, {
                        canBeNull: !0
                    })
                }, e.prototype.visitRepetition = function(t) {
                    return this.visitEachAndOverrideWith(t.definition, {
                        canBeNull: !0
                    })
                }, e.prototype.visitRepetitionMandatory = function(t) {
                    return this.visitEach(t.definition)
                }, e.prototype.visitRepetitionMandatoryWithSeparator = function(t) {
                    return this.visitEach(t.definition).concat({
                        propertyName: t.separator.name,
                        canBeNull: !0,
                        type: p(t.separator)
                    })
                }, e.prototype.visitRepetitionWithSeparator = function(t) {
                    return this.visitEachAndOverrideWith(t.definition, {
                        canBeNull: !0
                    }).concat({
                        propertyName: t.separator.name,
                        canBeNull: !0,
                        type: p(t.separator)
                    })
                }, e.prototype.visitAlternation = function(t) {
                    return this.visitEachAndOverrideWith(t.definition, {
                        canBeNull: !0
                    })
                }, e.prototype.visitTerminal = function(t) {
                    return [{
                        propertyName: t.label || t.terminalType.name,
                        canBeNull: !1,
                        type: p(t)
                    }]
                }, e.prototype.visitNonTerminal = function(t) {
                    return [{
                        propertyName: t.label || t.nonTerminalName,
                        canBeNull: !1,
                        type: p(t)
                    }]
                }, e.prototype.visitEachAndOverrideWith = function(t, e) {
                    return (0, a.default)(this.visitEach(t), function(t) {
                        return (0, f.default)({}, t, e)
                    })
                }, e.prototype.visitEach = function(t) {
                    var e = this;
                    return (0, u.default)((0, a.default)(t, function(t) {
                        return e.visit(t)
                    }))
                }, e
            }(n(486906).GAstVisitor);

            function p(t) {
                return t instanceof n(486906).NonTerminal ? {
                    kind: "rule",
                    name: t.referencedRule.name
                } : {
                    kind: "token"
                }
            }
        },
        121482: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.VERSION = void 0, e.VERSION = "10.5.0"
        },
        139191: function(t, e, n) {
            "use strict";
            var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.buildInProdFollowPrefix = e.buildBetweenProdsFollowPrefix = e.computeAllProdsFollows = e.ResyncFollowsWalker = void 0;
            var a = i(n(539754)),
                u = i(n(386139)),
                s = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.topProd = e, n.follows = {}, n
                    }
                    return o(e, t), e.prototype.startWalking = function() {
                        return this.walk(this.topProd), this.follows
                    }, e.prototype.walkTerminal = function(t, e, n) {}, e.prototype.walkProdRef = function(t, e, r) {
                        var o = c(t.referencedRule, t.idx) + this.topProd.name,
                            i = e.concat(r),
                            a = new(n(486906)).Alternative({
                                definition: i
                            }),
                            u = (0, n(402330).first)(a);
                        this.follows[o] = u
                    }, e
                }(n(687148).RestWalker);

            function c(t, e) {
                return t.name + e + n(396903).IN
            }
            e.ResyncFollowsWalker = s, e.computeAllProdsFollows = function(t) {
                var e = {};
                return (0, a.default)(t, function(t) {
                    var n = new s(t).startWalking();
                    (0, u.default)(e, n)
                }), e
            }, e.buildBetweenProdsFollowPrefix = c, e.buildInProdFollowPrefix = function(t) {
                return t.terminalType.name + t.idx + n(396903).IN
            }
        },
        191444: (t, e, n) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.toFastProperties = e.timer = e.PRINT_ERROR = e.PRINT_WARNING = void 0, Object.defineProperty(e, "PRINT_WARNING", {
                enumerable: !0,
                get: function() {
                    return n(706663).PRINT_WARNING
                }
            }), Object.defineProperty(e, "PRINT_ERROR", {
                enumerable: !0,
                get: function() {
                    return n(706663).PRINT_ERROR
                }
            }), Object.defineProperty(e, "timer", {
                enumerable: !0,
                get: function() {
                    return n(224189).timer
                }
            }), Object.defineProperty(e, "toFastProperties", {
                enumerable: !0,
                get: function() {
                    return n(770038).toFastProperties
                }
            })
        },
        197395: function(t, e, n) {
            "use strict";
            var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.collectMethods = e.LooksAhead = void 0;
            var a = i(n(539754)),
                u = i(n(761448));
            e.LooksAhead = function() {
                function t() {}
                return t.prototype.initLooksAhead = function(t) {
                    this.dynamicTokensEnabled = (0, u.default)(t, "dynamicTokensEnabled") ? t.dynamicTokensEnabled : n(358165).DEFAULT_PARSER_CONFIG.dynamicTokensEnabled, this.maxLookahead = (0, u.default)(t, "maxLookahead") ? t.maxLookahead : n(358165).DEFAULT_PARSER_CONFIG.maxLookahead, this.lookaheadStrategy = (0, u.default)(t, "lookaheadStrategy") ? t.lookaheadStrategy : new(n(477350)).LLkLookaheadStrategy({
                        maxLookahead: this.maxLookahead
                    }), this.lookAheadFuncsCache = new Map
                }, t.prototype.preComputeLookaheadFunctions = function(t) {
                    var e = this;
                    (0, a.default)(t, function(t) {
                        e.TRACE_INIT("".concat(t.name, " Rule Lookahead"), function() {
                            var r = c(t),
                                o = r.alternation,
                                i = r.repetition,
                                u = r.option,
                                s = r.repetitionMandatory,
                                l = r.repetitionMandatoryWithSeparator,
                                f = r.repetitionWithSeparator;
                            (0, a.default)(o, function(r) {
                                var o = 0 === r.idx ? "" : r.idx;
                                e.TRACE_INIT("".concat((0, n(486906).getProductionDslName)(r)).concat(o), function() {
                                    var o = e.lookaheadStrategy.buildLookaheadForAlternation({
                                            prodOccurrence: r.idx,
                                            rule: t,
                                            maxLookahead: r.maxLookahead || e.maxLookahead,
                                            hasPredicates: r.hasPredicates,
                                            dynamicTokensEnabled: e.dynamicTokensEnabled
                                        }),
                                        i = (0, n(784958).getKeyForAutomaticLookahead)(e.fullRuleNameToShort[t.name], n(784958).OR_IDX, r.idx);
                                    e.setLaFuncCache(i, o)
                                })
                            }), (0, a.default)(i, function(r) {
                                e.computeLookaheadFunc(t, r.idx, n(784958).MANY_IDX, "Repetition", r.maxLookahead, (0, n(486906).getProductionDslName)(r))
                            }), (0, a.default)(u, function(r) {
                                e.computeLookaheadFunc(t, r.idx, n(784958).OPTION_IDX, "Option", r.maxLookahead, (0, n(486906).getProductionDslName)(r))
                            }), (0, a.default)(s, function(r) {
                                e.computeLookaheadFunc(t, r.idx, n(784958).AT_LEAST_ONE_IDX, "RepetitionMandatory", r.maxLookahead, (0, n(486906).getProductionDslName)(r))
                            }), (0, a.default)(l, function(r) {
                                e.computeLookaheadFunc(t, r.idx, n(784958).AT_LEAST_ONE_SEP_IDX, "RepetitionMandatoryWithSeparator", r.maxLookahead, (0, n(486906).getProductionDslName)(r))
                            }), (0, a.default)(f, function(r) {
                                e.computeLookaheadFunc(t, r.idx, n(784958).MANY_SEP_IDX, "RepetitionWithSeparator", r.maxLookahead, (0, n(486906).getProductionDslName)(r))
                            })
                        })
                    })
                }, t.prototype.computeLookaheadFunc = function(t, e, r, o, i, a) {
                    var u = this;
                    this.TRACE_INIT("".concat(a).concat(0 === e ? "" : e), function() {
                        var a = u.lookaheadStrategy.buildLookaheadForOptional({
                                prodOccurrence: e,
                                rule: t,
                                maxLookahead: i || u.maxLookahead,
                                dynamicTokensEnabled: u.dynamicTokensEnabled,
                                prodType: o
                            }),
                            s = (0, n(784958).getKeyForAutomaticLookahead)(u.fullRuleNameToShort[t.name], r, e);
                        u.setLaFuncCache(s, a)
                    })
                }, t.prototype.getKeyForAutomaticLookahead = function(t, e) {
                    var r = this.getLastExplicitRuleShortName();
                    return (0, n(784958).getKeyForAutomaticLookahead)(r, t, e)
                }, t.prototype.getLaFuncFromCache = function(t) {
                    return this.lookAheadFuncsCache.get(t)
                }, t.prototype.setLaFuncCache = function(t, e) {
                    this.lookAheadFuncsCache.set(t, e)
                }, t
            }();
            var s = new(function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.dslMethods = {
                        option: [],
                        alternation: [],
                        repetition: [],
                        repetitionWithSeparator: [],
                        repetitionMandatory: [],
                        repetitionMandatoryWithSeparator: []
                    }, e
                }
                return o(e, t), e.prototype.reset = function() {
                    this.dslMethods = {
                        option: [],
                        alternation: [],
                        repetition: [],
                        repetitionWithSeparator: [],
                        repetitionMandatory: [],
                        repetitionMandatoryWithSeparator: []
                    }
                }, e.prototype.visitOption = function(t) {
                    this.dslMethods.option.push(t)
                }, e.prototype.visitRepetitionWithSeparator = function(t) {
                    this.dslMethods.repetitionWithSeparator.push(t)
                }, e.prototype.visitRepetitionMandatory = function(t) {
                    this.dslMethods.repetitionMandatory.push(t)
                }, e.prototype.visitRepetitionMandatoryWithSeparator = function(t) {
                    this.dslMethods.repetitionMandatoryWithSeparator.push(t)
                }, e.prototype.visitRepetition = function(t) {
                    this.dslMethods.repetition.push(t)
                }, e.prototype.visitAlternation = function(t) {
                    this.dslMethods.alternation.push(t)
                }, e
            }(n(486906).GAstVisitor));

            function c(t) {
                s.reset(), t.accept(s);
                var e = s.dslMethods;
                return s.reset(), e
            }
            e.collectMethods = c
        },
        210816: function(t, e, n) {
            "use strict";
            var r, o, i, a = this && this.__extends || (o = function(t, e) {
                    return (o = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }
                    o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                u = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.areTokenCategoriesNotUsed = e.isStrictPrefixOfPath = e.containsPath = e.getLookaheadPathsForOptionalProd = e.getLookaheadPathsForOr = e.lookAheadSequenceFromAlternatives = e.buildSingleAlternativeLookaheadFunction = e.buildAlternativesLookAheadFunc = e.buildLookaheadFuncForOptionalProd = e.buildLookaheadFuncForOr = e.getLookaheadPaths = e.getProdType = e.PROD_TYPE = void 0;
            var s = u(n(962193)),
                c = u(n(835970)),
                l = u(n(619747)),
                f = u(n(455378)),
                d = u(n(539754)),
                p = u(n(761448)),
                h = u(n(940860)),
                T = () => n(437310);

            function m(t) {
                if (t instanceof n(486906).Option || "Option" === t) return i.OPTION;
                if (t instanceof n(486906).Repetition || "Repetition" === t) return i.REPETITION;
                if (t instanceof n(486906).RepetitionMandatory || "RepetitionMandatory" === t) return i.REPETITION_MANDATORY;
                if (t instanceof n(486906).RepetitionMandatoryWithSeparator || "RepetitionMandatoryWithSeparator" === t) return i.REPETITION_MANDATORY_WITH_SEPARATOR;
                if (t instanceof n(486906).RepetitionWithSeparator || "RepetitionWithSeparator" === t) return i.REPETITION_WITH_SEPARATOR;
                else if (t instanceof n(486906).Alternation || "Alternation" === t) return i.ALTERNATION;
                else throw Error("non exhaustive match")
            }(r = i = e.PROD_TYPE || (e.PROD_TYPE = {}))[r.OPTION = 0] = "OPTION", r[r.REPETITION = 1] = "REPETITION", r[r.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", r[r.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", r[r.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", r[r.ALTERNATION = 5] = "ALTERNATION", e.getProdType = m, e.getLookaheadPaths = function(t) {
                var e = t.occurrence,
                    n = t.rule,
                    r = t.prodType,
                    o = t.maxLookahead,
                    a = m(r);
                return a === i.ALTERNATION ? R(e, n, o) : g(e, n, a, o)
            }, e.buildLookaheadFuncForOr = function(t, e, r, o, i, a) {
                var u = R(t, e, r),
                    s = N(u) ? n(55674).tokenStructuredMatcherNoCategories : n(55674).tokenStructuredMatcher;
                return a(u, o, s, i)
            }, e.buildLookaheadFuncForOptionalProd = function(t, e, r, o, i, a) {
                var u = g(t, e, i, r),
                    s = N(u) ? n(55674).tokenStructuredMatcherNoCategories : n(55674).tokenStructuredMatcher;
                return a(u[0], s, o)
            }, e.buildAlternativesLookAheadFunc = function(t, e, n, r) {
                var o = t.length,
                    i = (0, l.default)(t, function(t) {
                        return (0, l.default)(t, function(t) {
                            return 1 === t.length
                        })
                    });
                if (e) return function(e) {
                    for (var r = (0, f.default)(e, function(t) {
                            return t.GATE
                        }), i = 0; i < o; i++) {
                        var a = t[i],
                            u = a.length,
                            s = r[i];
                        if (void 0 === s || !1 !== s.call(this)) t: for (var c = 0; c < u; c++) {
                            for (var l = a[c], d = l.length, p = 0; p < d; p++)
                                if (!1 === n(this.LA(p + 1), l[p])) continue t;
                            return i
                        }
                    }
                };
                if (!i || r) return function() {
                    for (var e = 0; e < o; e++) {
                        var r = t[e],
                            i = r.length;
                        t: for (var a = 0; a < i; a++) {
                            for (var u = r[a], s = u.length, c = 0; c < s; c++)
                                if (!1 === n(this.LA(c + 1), u[c])) continue t;
                            return e
                        }
                    }
                };
                var a = (0, f.default)(t, function(t) {
                        return (0, c.default)(t)
                    }),
                    u = (0, h.default)(a, function(t, e, n) {
                        return (0, d.default)(e, function(e) {
                            (0, p.default)(t, e.tokenTypeIdx) || (t[e.tokenTypeIdx] = n), (0, d.default)(e.categoryMatches, function(e) {
                                (0, p.default)(t, e) || (t[e] = n)
                            })
                        }), t
                    }, {});
                return function() {
                    return u[this.LA(1).tokenTypeIdx]
                }
            }, e.buildSingleAlternativeLookaheadFunction = function(t, e, n) {
                var r = (0, l.default)(t, function(t) {
                        return 1 === t.length
                    }),
                    o = t.length;
                if (!r || n) return function() {
                    t: for (var n = 0; n < o; n++) {
                        for (var r = t[n], i = r.length, a = 0; a < i; a++)
                            if (!1 === e(this.LA(a + 1), r[a])) continue t;
                        return !0
                    }
                    return !1
                };
                var i = (0, c.default)(t);
                if (1 === i.length && (0, s.default)(i[0].categoryMatches)) {
                    var a = i[0].tokenTypeIdx;
                    return function() {
                        return this.LA(1).tokenTypeIdx === a
                    }
                }
                var u = (0, h.default)(i, function(t, e, n) {
                    return t[e.tokenTypeIdx] = !0, (0, d.default)(e.categoryMatches, function(e) {
                        t[e] = !0
                    }), t
                }, []);
                return function() {
                    return !0 === u[this.LA(1).tokenTypeIdx]
                }
            };
            var y = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o.topProd = e, o.targetOccurrence = n, o.targetProdType = r, o
                    }
                    return a(e, t), e.prototype.startWalking = function() {
                        return this.walk(this.topProd), this.restDef
                    }, e.prototype.checkIsTarget = function(t, e, n, r) {
                        return t.idx === this.targetOccurrence && this.targetProdType === e && (this.restDef = n.concat(r), !0)
                    }, e.prototype.walkOption = function(e, n, r) {
                        this.checkIsTarget(e, i.OPTION, n, r) || t.prototype.walkOption.call(this, e, n, r)
                    }, e.prototype.walkAtLeastOne = function(e, n, r) {
                        this.checkIsTarget(e, i.REPETITION_MANDATORY, n, r) || t.prototype.walkOption.call(this, e, n, r)
                    }, e.prototype.walkAtLeastOneSep = function(e, n, r) {
                        this.checkIsTarget(e, i.REPETITION_MANDATORY_WITH_SEPARATOR, n, r) || t.prototype.walkOption.call(this, e, n, r)
                    }, e.prototype.walkMany = function(e, n, r) {
                        this.checkIsTarget(e, i.REPETITION, n, r) || t.prototype.walkOption.call(this, e, n, r)
                    }, e.prototype.walkManySep = function(e, n, r) {
                        this.checkIsTarget(e, i.REPETITION_WITH_SEPARATOR, n, r) || t.prototype.walkOption.call(this, e, n, r)
                    }, e
                }(n(687148).RestWalker),
                E = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o.targetOccurrence = e, o.targetProdType = n, o.targetRef = r, o.result = [], o
                    }
                    return a(e, t), e.prototype.checkIsTarget = function(t, e) {
                        t.idx === this.targetOccurrence && this.targetProdType === e && (void 0 === this.targetRef || t === this.targetRef) && (this.result = t.definition)
                    }, e.prototype.visitOption = function(t) {
                        this.checkIsTarget(t, i.OPTION)
                    }, e.prototype.visitRepetition = function(t) {
                        this.checkIsTarget(t, i.REPETITION)
                    }, e.prototype.visitRepetitionMandatory = function(t) {
                        this.checkIsTarget(t, i.REPETITION_MANDATORY)
                    }, e.prototype.visitRepetitionMandatoryWithSeparator = function(t) {
                        this.checkIsTarget(t, i.REPETITION_MANDATORY_WITH_SEPARATOR)
                    }, e.prototype.visitRepetitionWithSeparator = function(t) {
                        this.checkIsTarget(t, i.REPETITION_WITH_SEPARATOR)
                    }, e.prototype.visitAlternation = function(t) {
                        this.checkIsTarget(t, i.ALTERNATION)
                    }, e
                }(n(486906).GAstVisitor);

            function v(t) {
                for (var e = Array(t), n = 0; n < t; n++) e[n] = [];
                return e
            }

            function _(t) {
                for (var e = [""], n = 0; n < t.length; n++) {
                    for (var r = t[n], o = [], i = 0; i < e.length; i++) {
                        var a = e[i];
                        o.push(a + "_" + r.tokenTypeIdx);
                        for (var u = 0; u < r.categoryMatches.length; u++) {
                            var s = "_" + r.categoryMatches[u];
                            o.push(a + s)
                        }
                    }
                    e = o
                }
                return e
            }

            function O(t, e) {
                for (var n = (0, f.default)(t, function(t) {
                        return (0, T().possiblePathsFrom)([t], 1)
                    }), r = v(n.length), o = (0, f.default)(n, function(t) {
                        var e = {};
                        return (0, d.default)(t, function(t) {
                            var n = _(t.partialPath);
                            (0, d.default)(n, function(t) {
                                e[t] = !0
                            })
                        }), e
                    }), i = n, a = 1; a <= e; a++) {
                    var u = i;
                    i = v(u.length);
                    for (var c = function(t) {
                            for (var n = u[t], c = 0; c < n.length; c++) {
                                var l = n[c].partialPath,
                                    f = n[c].suffixDef,
                                    p = _(l);
                                if (function(t, e, n) {
                                        for (var r = 0; r < t.length; r++)
                                            if (r !== n) {
                                                for (var o = t[r], i = 0; i < e.length; i++)
                                                    if (!0 === o[e[i]]) return !1
                                            }
                                        return !0
                                    }(o, p, t) || (0, s.default)(f) || l.length === e) {
                                    var h = r[t];
                                    if (!1 === A(h, l)) {
                                        h.push(l);
                                        for (var m = 0; m < p.length; m++) {
                                            var y = p[m];
                                            o[t][y] = !0
                                        }
                                    }
                                } else {
                                    var E = (0, T().possiblePathsFrom)(f, a + 1, l);
                                    i[t] = i[t].concat(E), (0, d.default)(E, function(e) {
                                        var n = _(e.partialPath);
                                        (0, d.default)(n, function(e) {
                                            o[t][e] = !0
                                        })
                                    })
                                }
                            }
                        }, l = 0; l < u.length; l++) c(l)
                }
                return r
            }

            function R(t, e, n, r) {
                var o = new E(t, i.ALTERNATION, r);
                return e.accept(o), O(o.result, n)
            }

            function g(t, e, r, o) {
                var i = new E(t, r);
                e.accept(i);
                var a = i.result,
                    u = new y(e, t, r).startWalking();
                return O([new(n(486906)).Alternative({
                    definition: a
                }), new(n(486906)).Alternative({
                    definition: u
                })], o)
            }

            function A(t, e) {
                e: for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (r.length === e.length) {
                        for (var o = 0; o < r.length; o++) {
                            var i = e[o],
                                a = r[o];
                            if (!1 == (i === a || void 0 !== a.categoryMatchesMap[i.tokenTypeIdx])) continue e
                        }
                        return !0
                    }
                }
                return !1
            }

            function N(t) {
                return (0, l.default)(t, function(t) {
                    return (0, l.default)(t, function(t) {
                        return (0, l.default)(t, function(t) {
                            return (0, s.default)(t.categoryMatches)
                        })
                    })
                })
            }
            e.lookAheadSequenceFromAlternatives = O, e.getLookaheadPathsForOr = R, e.getLookaheadPathsForOptionalProd = g, e.containsPath = A, e.isStrictPrefixOfPath = function(t, e) {
                return t.length < e.length && (0, l.default)(t, function(t, n) {
                    var r = e[n];
                    return t === r || r.categoryMatchesMap[t.tokenTypeIdx]
                })
            }, e.areTokenCategoriesNotUsed = N
        },
        224189: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.timer = void 0, e.timer = function(t) {
                var e = new Date().getTime(),
                    n = t();
                return {
                    time: new Date().getTime() - e,
                    value: n
                }
            }
        },
        272488: function(t, e, n) {
            "use strict";
            var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.GastRefResolverVisitor = e.resolveGrammar = void 0;
            var a = i(n(539754)),
                u = i(n(935880));
            e.resolveGrammar = function(t, e) {
                var n = new s(t, e);
                return n.resolveRefs(), n.errors
            };
            var s = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.nameToTopRule = e, r.errMsgProvider = n, r.errors = [], r
                }
                return o(e, t), e.prototype.resolveRefs = function() {
                    var t = this;
                    (0, a.default)((0, u.default)(this.nameToTopRule), function(e) {
                        t.currTopLevel = e, e.accept(t)
                    })
                }, e.prototype.visitNonTerminal = function(t) {
                    var e = this.nameToTopRule[t.nonTerminalName];
                    if (e) t.referencedRule = e;
                    else {
                        var r = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, t);
                        this.errors.push({
                            message: r,
                            type: n(358165).ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,
                            ruleName: this.currTopLevel.name,
                            unresolvedRefName: t.nonTerminalName
                        })
                    }
                }, e
            }(n(486906).GAstVisitor);
            e.GastRefResolverVisitor = s
        },
        292228: function(t, e, n) {
            "use strict";
            var r, o, i = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.validateMissingCstMethods = e.validateVisitor = e.CstVisitorDefinitionError = e.createBaseVisitorConstructorWithDefaults = e.createBaseSemanticVisitorConstructor = e.defaultVisit = void 0;
            var a = i(n(962193)),
                u = i(n(183673)),
                s = i(n(956449)),
                c = i(n(455378)),
                l = i(n(539754)),
                f = i(n(587612)),
                d = i(n(395950)),
                p = i(n(501882)),
                h = i(n(762216));

            function T(t, e) {
                for (var n = (0, d.default)(t), r = n.length, o = 0; o < r; o++)
                    for (var i = t[n[o]], a = i.length, u = 0; u < a; u++) {
                        var s = i[u];
                        void 0 === s.tokenTypeIdx && this[s.name](s.children, e)
                    }
            }
            e.defaultVisit = T, e.createBaseSemanticVisitorConstructor = function(t, e) {
                var r = function() {};
                return (0, n(312708).defineNameProp)(r, t + "BaseSemantics"), r.prototype = {
                    visit: function(t, e) {
                        if ((0, s.default)(t) && (t = t[0]), !(0, h.default)(t)) return this[t.name](t.children, e)
                    },
                    validateVisitor: function() {
                        var t, n = (t = this, m(t, e));
                        if (!(0, a.default)(n)) {
                            var r = (0, c.default)(n, function(t) {
                                return t.msg
                            });
                            throw Error("Errors Detected in CST Visitor <".concat(this.constructor.name, ">:\n	") + "".concat(r.join("\n\n").replace(/\n/g, "\n	")))
                        }
                    }
                }, r.prototype.constructor = r, r._RULE_NAMES = e, r
            };

            function m(t, e) {
                var n = (0, f.default)(e, function(e) {
                        return !1 === (0, p.default)(t[e])
                    }),
                    r = (0, c.default)(n, function(e) {
                        return {
                            msg: "Missing visitor method: <".concat(e, "> on ").concat(t.constructor.name, " CST Visitor."),
                            type: o.MISSING_METHOD,
                            methodName: e
                        }
                    });
                return (0, u.default)(r)
            }
            e.createBaseVisitorConstructorWithDefaults = function(t, e, r) {
                var o = function() {};
                (0, n(312708).defineNameProp)(o, t + "BaseSemanticsWithDefaults");
                var i = Object.create(r.prototype);
                return (0, l.default)(e, function(t) {
                    i[t] = T
                }), o.prototype = i, o.prototype.constructor = o, o
            }, (r = o = e.CstVisitorDefinitionError || (e.CstVisitorDefinitionError = {}))[r.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", r[r.MISSING_METHOD = 1] = "MISSING_METHOD", e.validateVisitor = function(t, e) {
                return m(t, e)
            }, e.validateMissingCstMethods = m
        },
        303151: (t, e, n) => {
            "use strict";
            n.d(e, {
                Ey: () => a,
                G: () => u,
                JG: () => i,
                LT: () => o,
                cA: () => r
            }), n(901238).ak, n(901238).EF;
            let r = n(901238).cA;
            n(901238).mT;
            let o = n(901238).LT;
            n(901238).DN, n(901238).jr, n(901238).C_, n(901238).T6;
            let i = n(901238).JG;
            n(901238)._J, n(901238).Vv, n(901238).X2, n(901238).wL, n(901238).xd, n(901238).c$, n(901238).iX, n(901238).D2, n(901238).Y2, n(901238).$P, n(901238).Cy, n(901238).Pp, n(901238).jO, n(901238).BK, n(901238).xv, n(901238).IL, n(901238).jT;
            let a = n(901238).Ey;
            n(901238).fx, n(901238).PW, n(901238).my, n(901238).Ro, n(901238).jk, n(901238).lC, n(901238)._3, n(901238).Ug, n(901238).Sk;
            let u = n(901238).G;
            n(901238).vb
        },
        310456: function(t, e, n) {
            "use strict";
            var r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.generateCstDts = void 0;
            var o = {
                includeVisitorInterface: !0,
                visitorInterfaceName: "ICstNodeVisitor"
            };
            e.generateCstDts = function(t, e) {
                var i = r(r({}, o), e),
                    a = (0, n(74385).buildModel)(t);
                return (0, n(696953).genDts)(a, i)
            }
        },
        312708: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.defineNameProp = void 0, e.defineNameProp = function(t, e) {
                Object.defineProperty(t, "name", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !1,
                    value: e
                })
            }
        },
        336610: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.GastRecorder = void 0;
            var o = r(n(468090)),
                i = r(n(956449)),
                a = r(n(442426)),
                u = r(n(539754)),
                s = r(n(501882)),
                c = r(n(761448)),
                l = {
                    description: "This Object indicates the Parser is during Recording Phase"
                };
            Object.freeze(l);
            var f = Math.pow(2, n(784958).BITS_FOR_OCCURRENCE_IDX) - 1,
                d = (0, n(991912).createToken)({
                    name: "RECORDING_PHASE_TOKEN",
                    pattern: n(560458).Lexer.NA
                });
            (0, n(55674).augmentTokenTypes)([d]);
            var p = (0, n(991912).createTokenInstance)(d, "This IToken indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details", -1, -1, -1, -1, -1, -1);
            Object.freeze(p);
            var h = {
                name: "This CSTNode indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
                children: {}
            };

            function T(t, e, n, r) {
                void 0 === r && (r = !1), E(n);
                var i = (0, o.default)(this.recordingProdStack),
                    a = (0, s.default)(e) ? e : e.DEF,
                    u = new t({
                        definition: [],
                        idx: n
                    });
                return r && (u.separator = e.SEP), (0, c.default)(e, "MAX_LOOKAHEAD") && (u.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(u), a.call(this), i.definition.push(u), this.recordingProdStack.pop(), l
            }

            function m(t, e) {
                var r = this;
                E(e);
                var f = (0, o.default)(this.recordingProdStack),
                    d = !1 === (0, i.default)(t),
                    p = !1 === d ? t : t.DEF,
                    h = new(n(486906)).Alternation({
                        definition: [],
                        idx: e,
                        ignoreAmbiguities: d && !0 === t.IGNORE_AMBIGUITIES
                    });
                return (0, c.default)(t, "MAX_LOOKAHEAD") && (h.maxLookahead = t.MAX_LOOKAHEAD), h.hasPredicates = (0, a.default)(p, function(t) {
                    return (0, s.default)(t.GATE)
                }), f.definition.push(h), (0, u.default)(p, function(t) {
                    var e = new(n(486906)).Alternative({
                        definition: []
                    });
                    h.definition.push(e), (0, c.default)(t, "IGNORE_AMBIGUITIES") ? e.ignoreAmbiguities = t.IGNORE_AMBIGUITIES : (0, c.default)(t, "GATE") && (e.ignoreAmbiguities = !0), r.recordingProdStack.push(e), t.ALT.call(r), r.recordingProdStack.pop()
                }), l
            }

            function y(t) {
                return 0 === t ? "" : "".concat(t)
            }

            function E(t) {
                if (t < 0 || t > f) {
                    var e = Error("Invalid DSL Method idx value: <".concat(t, ">\n	") + "Idx value must be a none negative value smaller than ".concat(f + 1));
                    throw e.KNOWN_RECORDER_ERROR = !0, e
                }
            }
            e.GastRecorder = function() {
                function t() {}
                return t.prototype.initGastRecorder = function(t) {
                    this.recordingProdStack = [], this.RECORDING_PHASE = !1
                }, t.prototype.enableRecording = function() {
                    var t = this;
                    this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", function() {
                        for (var e = function(e) {
                                var n = e > 0 ? e : "";
                                t["CONSUME".concat(n)] = function(t, n) {
                                    return this.consumeInternalRecord(t, e, n)
                                }, t["SUBRULE".concat(n)] = function(t, n) {
                                    return this.subruleInternalRecord(t, e, n)
                                }, t["OPTION".concat(n)] = function(t) {
                                    return this.optionInternalRecord(t, e)
                                }, t["OR".concat(n)] = function(t) {
                                    return this.orInternalRecord(t, e)
                                }, t["MANY".concat(n)] = function(t) {
                                    this.manyInternalRecord(e, t)
                                }, t["MANY_SEP".concat(n)] = function(t) {
                                    this.manySepFirstInternalRecord(e, t)
                                }, t["AT_LEAST_ONE".concat(n)] = function(t) {
                                    this.atLeastOneInternalRecord(e, t)
                                }, t["AT_LEAST_ONE_SEP".concat(n)] = function(t) {
                                    this.atLeastOneSepFirstInternalRecord(e, t)
                                }
                            }, n = 0; n < 10; n++) e(n);
                        t.consume = function(t, e, n) {
                            return this.consumeInternalRecord(e, t, n)
                        }, t.subrule = function(t, e, n) {
                            return this.subruleInternalRecord(e, t, n)
                        }, t.option = function(t, e) {
                            return this.optionInternalRecord(e, t)
                        }, t.or = function(t, e) {
                            return this.orInternalRecord(e, t)
                        }, t.many = function(t, e) {
                            this.manyInternalRecord(t, e)
                        }, t.atLeastOne = function(t, e) {
                            this.atLeastOneInternalRecord(t, e)
                        }, t.ACTION = t.ACTION_RECORD, t.BACKTRACK = t.BACKTRACK_RECORD, t.LA = t.LA_RECORD
                    })
                }, t.prototype.disableRecording = function() {
                    var t = this;
                    this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", function() {
                        for (var e = 0; e < 10; e++) {
                            var n = e > 0 ? e : "";
                            delete t["CONSUME".concat(n)], delete t["SUBRULE".concat(n)], delete t["OPTION".concat(n)], delete t["OR".concat(n)], delete t["MANY".concat(n)], delete t["MANY_SEP".concat(n)], delete t["AT_LEAST_ONE".concat(n)], delete t["AT_LEAST_ONE_SEP".concat(n)]
                        }
                        delete t.consume, delete t.subrule, delete t.option, delete t.or, delete t.many, delete t.atLeastOne, delete t.ACTION, delete t.BACKTRACK, delete t.LA
                    })
                }, t.prototype.ACTION_RECORD = function(t) {}, t.prototype.BACKTRACK_RECORD = function(t, e) {
                    return function() {
                        return !0
                    }
                }, t.prototype.LA_RECORD = function(t) {
                    return n(358165).END_OF_FILE
                }, t.prototype.topLevelRuleRecord = function(t, e) {
                    try {
                        var r = new(n(486906)).Rule({
                            definition: [],
                            name: t
                        });
                        return r.name = t, this.recordingProdStack.push(r), e.call(this), this.recordingProdStack.pop(), r
                    } catch (t) {
                        if (!0 !== t.KNOWN_RECORDER_ERROR) try {
                            t.message = t.message + '\n	 This error was thrown during the "grammar recording phase" For more info see:\n	https://chevrotain.io/docs/guide/internals.html#grammar-recording'
                        } catch (t) {}
                        throw t
                    }
                }, t.prototype.optionInternalRecord = function(t, e) {
                    return T.call(this, n(486906).Option, t, e)
                }, t.prototype.atLeastOneInternalRecord = function(t, e) {
                    T.call(this, n(486906).RepetitionMandatory, e, t)
                }, t.prototype.atLeastOneSepFirstInternalRecord = function(t, e) {
                    T.call(this, n(486906).RepetitionMandatoryWithSeparator, e, t, !0)
                }, t.prototype.manyInternalRecord = function(t, e) {
                    T.call(this, n(486906).Repetition, e, t)
                }, t.prototype.manySepFirstInternalRecord = function(t, e) {
                    T.call(this, n(486906).RepetitionWithSeparator, e, t, !0)
                }, t.prototype.orInternalRecord = function(t, e) {
                    return m.call(this, t, e)
                }, t.prototype.subruleInternalRecord = function(t, e, r) {
                    if (E(e), !t || !1 === (0, c.default)(t, "ruleName")) {
                        var i = Error("<SUBRULE".concat(y(e), "> argument is invalid") + " expecting a Parser method reference but got: <".concat(JSON.stringify(t), ">") + "\n inside top level rule: <".concat(this.recordingProdStack[0].name, ">"));
                        throw i.KNOWN_RECORDER_ERROR = !0, i
                    }
                    var a = (0, o.default)(this.recordingProdStack),
                        u = t.ruleName,
                        s = new(n(486906)).NonTerminal({
                            idx: e,
                            nonTerminalName: u,
                            label: null == r ? void 0 : r.LABEL,
                            referencedRule: void 0
                        });
                    return a.definition.push(s), this.outputCst ? h : l
                }, t.prototype.consumeInternalRecord = function(t, e, r) {
                    if (E(e), !(0, n(55674).hasShortKeyProperty)(t)) {
                        var i = Error("<CONSUME".concat(y(e), "> argument is invalid") + " expecting a TokenType reference but got: <".concat(JSON.stringify(t), ">") + "\n inside top level rule: <".concat(this.recordingProdStack[0].name, ">"));
                        throw i.KNOWN_RECORDER_ERROR = !0, i
                    }
                    var a = (0, o.default)(this.recordingProdStack),
                        u = new(n(486906)).Terminal({
                            idx: e,
                            terminalType: t,
                            label: null == r ? void 0 : r.LABEL
                        });
                    return a.definition.push(u), p
                }, t
            }()
        },
        358165: function(t, e, n) {
            "use strict";
            var r, o, i = this && this.__extends || (o = function(t, e) {
                    return (o = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }
                    o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                a = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.EmbeddedActionsParser = e.CstParser = e.Parser = e.EMPTY_ALT = e.ParserDefinitionErrorType = e.DEFAULT_RULE_CONFIG = e.DEFAULT_PARSER_CONFIG = e.END_OF_FILE = void 0;
            var u = a(n(962193)),
                s = a(n(455378)),
                c = a(n(539754)),
                l = a(n(935880)),
                f = a(n(761448)),
                d = a(n(932629));
            e.END_OF_FILE = (0, n(991912).createTokenInstance)(n(991912).EOF, "", NaN, NaN, NaN, NaN, NaN, NaN), Object.freeze(e.END_OF_FILE), e.DEFAULT_PARSER_CONFIG = Object.freeze({
                recoveryEnabled: !1,
                maxLookahead: 3,
                dynamicTokensEnabled: !1,
                outputCst: !0,
                errorMessageProvider: n(918259).defaultParserErrorProvider,
                nodeLocationTracking: "none",
                traceInitPerf: !1,
                skipValidations: !1
            }), e.DEFAULT_RULE_CONFIG = Object.freeze({
                recoveryValueFunc: function() {},
                resyncEnabled: !0
            }), (r = e.ParserDefinitionErrorType || (e.ParserDefinitionErrorType = {}))[r.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", r[r.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", r[r.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", r[r.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", r[r.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", r[r.LEFT_RECURSION = 5] = "LEFT_RECURSION", r[r.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", r[r.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", r[r.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", r[r.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", r[r.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", r[r.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", r[r.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", r[r.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION", e.EMPTY_ALT = function(t) {
                return void 0 === t && (t = void 0),
                    function() {
                        return t
                    }
            };
            var p = function() {
                function t(t, n) {
                    if (this.definitionErrors = [], this.selfAnalysisDone = !1, this.initErrorHandler(n), this.initLexerAdapter(), this.initLooksAhead(n), this.initRecognizerEngine(t, n), this.initRecoverable(n), this.initTreeBuilder(n), this.initContentAssist(), this.initGastRecorder(n), this.initPerformanceTracer(n), (0, f.default)(n, "ignoredIssues")) throw Error("The <ignoredIssues> IParserConfig property has been deprecated.\n	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n	For further details.");
                    this.skipValidations = (0, f.default)(n, "skipValidations") ? n.skipValidations : e.DEFAULT_PARSER_CONFIG.skipValidations
                }
                return t.performSelfAnalysis = function(t) {
                    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")
                }, t.prototype.performSelfAnalysis = function() {
                    var e = this;
                    this.TRACE_INIT("performSelfAnalysis", function() {
                        e.selfAnalysisDone = !0;
                        var r, o = e.className;
                        e.TRACE_INIT("toFastProps", function() {
                            (0, n(191444).toFastProperties)(e)
                        }), e.TRACE_INIT("Grammar Recording", function() {
                            try {
                                e.enableRecording(), (0, c.default)(e.definedRulesNames, function(t) {
                                    var n, r = e[t].originalGrammarAction;
                                    e.TRACE_INIT("".concat(t, " Rule"), function() {
                                        n = e.topLevelRuleRecord(t, r)
                                    }), e.gastProductionsCache[t] = n
                                })
                            } finally {
                                e.disableRecording()
                            }
                        });
                        var i = [];
                        if (e.TRACE_INIT("Grammar Resolving", function() {
                                i = (0, n(985786).resolveGrammar)({
                                    rules: (0, l.default)(e.gastProductionsCache)
                                }), e.definitionErrors = e.definitionErrors.concat(i)
                            }), e.TRACE_INIT("Grammar Validations", function() {
                                if ((0, u.default)(i) && !1 === e.skipValidations) {
                                    var t = (0, n(985786).validateGrammar)({
                                            rules: (0, l.default)(e.gastProductionsCache),
                                            tokenTypes: (0, l.default)(e.tokensMap),
                                            errMsgProvider: n(918259).defaultGrammarValidatorErrorProvider,
                                            grammarName: o
                                        }),
                                        r = (0, n(409955).validateLookahead)({
                                            lookaheadStrategy: e.lookaheadStrategy,
                                            rules: (0, l.default)(e.gastProductionsCache),
                                            tokenTypes: (0, l.default)(e.tokensMap),
                                            grammarName: o
                                        });
                                    e.definitionErrors = e.definitionErrors.concat(t, r)
                                }
                            }), (0, u.default)(e.definitionErrors) && (e.recoveryEnabled && e.TRACE_INIT("computeAllProdsFollows", function() {
                                var t = (0, n(139191).computeAllProdsFollows)((0, l.default)(e.gastProductionsCache));
                                e.resyncFollows = t
                            }), e.TRACE_INIT("ComputeLookaheadFunctions", function() {
                                var t, n;
                                null == (n = (t = e.lookaheadStrategy).initialize) || n.call(t, {
                                    rules: (0, l.default)(e.gastProductionsCache)
                                }), e.preComputeLookaheadFunctions((0, l.default)(e.gastProductionsCache))
                            })), !t.DEFER_DEFINITION_ERRORS_HANDLING && !(0, u.default)(e.definitionErrors)) throw r = (0, s.default)(e.definitionErrors, function(t) {
                            return t.message
                        }), Error("Parser Definition Errors detected:\n ".concat(r.join("\n-------------------------------\n")))
                    })
                }, t.DEFER_DEFINITION_ERRORS_HANDLING = !1, t
            }();
            e.Parser = p, (0, n(794227).applyMixins)(p, [n(41484).Recoverable, n(197395).LooksAhead, n(693210).TreeBuilder, n(414306).LexerAdapter, n(946497).RecognizerEngine, n(535179).RecognizerApi, n(635461).ErrorHandler, n(841253).ContentAssist, n(336610).GastRecorder, n(906561).PerformanceTracer]);
            var h = function(t) {
                function n(n, r) {
                    void 0 === r && (r = e.DEFAULT_PARSER_CONFIG);
                    var o = (0, d.default)(r);
                    return o.outputCst = !0, t.call(this, n, o) || this
                }
                return i(n, t), n
            }(p);
            e.CstParser = h;
            var T = function(t) {
                function n(n, r) {
                    void 0 === r && (r = e.DEFAULT_PARSER_CONFIG);
                    var o = (0, d.default)(r);
                    return o.outputCst = !1, t.call(this, n, o) || this
                }
                return i(n, t), n
            }(p);
            e.EmbeddedActionsParser = T
        },
        386139: (t, e, n) => {
            var r = () => n(116547),
                o = Object.prototype.hasOwnProperty;
            t.exports = n(920999)(function(t, e) {
                if (n(255527)(e) || n(864894)(e)) return void n(921791)(e, n(395950)(e), t);
                for (var i in e) o.call(e, i) && r()(t, i, e[i])
            })
        },
        387579: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getProductionDslName = e.isBranchingProd = e.isOptionalProd = e.isSequenceProd = void 0;
            var o = r(n(442426)),
                i = r(n(619747)),
                a = r(n(679859));
            e.isSequenceProd = function(t) {
                return t instanceof n(765223).Alternative || t instanceof n(765223).Option || t instanceof n(765223).Repetition || t instanceof n(765223).RepetitionMandatory || t instanceof n(765223).RepetitionMandatoryWithSeparator || t instanceof n(765223).RepetitionWithSeparator || t instanceof n(765223).Terminal || t instanceof n(765223).Rule
            }, e.isOptionalProd = function t(e, r) {
                return void 0 === r && (r = []), e instanceof n(765223).Option || e instanceof n(765223).Repetition || e instanceof n(765223).RepetitionWithSeparator || (e instanceof n(765223).Alternation ? (0, o.default)(e.definition, function(e) {
                    return t(e, r)
                }) : !(e instanceof n(765223).NonTerminal && (0, a.default)(r, e)) && e instanceof n(765223).AbstractProduction && (e instanceof n(765223).NonTerminal && r.push(e), (0, i.default)(e.definition, function(e) {
                    return t(e, r)
                })))
            }, e.isBranchingProd = function(t) {
                return t instanceof n(765223).Alternation
            }, e.getProductionDslName = function(t) {
                if (t instanceof n(765223).NonTerminal) return "SUBRULE";
                if (t instanceof n(765223).Option) return "OPTION";
                if (t instanceof n(765223).Alternation) return "OR";
                if (t instanceof n(765223).RepetitionMandatory) return "AT_LEAST_ONE";
                if (t instanceof n(765223).RepetitionMandatoryWithSeparator) return "AT_LEAST_ONE_SEP";
                else if (t instanceof n(765223).RepetitionWithSeparator) return "MANY_SEP";
                else if (t instanceof n(765223).Repetition) return "MANY";
                else if (t instanceof n(765223).Terminal) return "CONSUME";
                else throw Error("non exhaustive match")
            }
        },
        388245: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.addNoneTerminalToCst = e.addTerminalToCst = e.setNodeLocationFull = e.setNodeLocationOnlyOffset = void 0, e.setNodeLocationOnlyOffset = function(t, e) {
                !0 === isNaN(t.startOffset) ? (t.startOffset = e.startOffset, t.endOffset = e.endOffset) : t.endOffset < e.endOffset == !0 && (t.endOffset = e.endOffset)
            }, e.setNodeLocationFull = function(t, e) {
                !0 === isNaN(t.startOffset) ? (t.startOffset = e.startOffset, t.startColumn = e.startColumn, t.startLine = e.startLine, t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine) : t.endOffset < e.endOffset == !0 && (t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine)
            }, e.addTerminalToCst = function(t, e, n) {
                void 0 === t.children[n] ? t.children[n] = [e] : t.children[n].push(e)
            }, e.addNoneTerminalToCst = function(t, e, n) {
                void 0 === t.children[e] ? t.children[e] = [n] : t.children[e].push(n)
            }
        },
        396903: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.IN = void 0, e.IN = "_~IN~_"
        },
        400912: t => {
            t.exports = function(t) {
                return t && t.length ? t[0] : void 0
            }
        },
        402330: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.firstForTerminal = e.firstForBranching = e.firstForSequence = e.first = void 0;
            var o = r(n(835970)),
                i = r(n(763375)),
                a = r(n(455378)),
                u = () => n(486906);

            function s(t) {
                if (t instanceof n(486906).NonTerminal) return s(t.referencedRule);
                if (t instanceof n(486906).Terminal) return f(t);
                if ((0, u().isSequenceProd)(t)) return c(t);
                if ((0, u().isBranchingProd)(t)) return l(t);
                throw Error("non exhaustive match")
            }

            function c(t) {
                for (var e, n = [], r = t.definition, o = 0, a = r.length > o, c = !0; a && c;) e = r[o], c = (0, u().isOptionalProd)(e), n = n.concat(s(e)), o += 1, a = r.length > o;
                return (0, i.default)(n)
            }

            function l(t) {
                var e = (0, a.default)(t.definition, function(t) {
                    return s(t)
                });
                return (0, i.default)((0, o.default)(e))
            }

            function f(t) {
                return [t.terminalType]
            }
            e.first = s, e.firstForSequence = c, e.firstForBranching = l, e.firstForTerminal = f
        },
        409955: function(t, e, n) {
            "use strict";
            var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                i = this && this.__assign || function() {
                    return (i = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                a = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.checkPrefixAlternativesAmbiguities = e.validateSomeNonEmptyLookaheadPath = e.validateTooManyAlts = e.RepetitionCollector = e.validateAmbiguousAlternationAlternatives = e.validateEmptyOrAlternative = e.getFirstNoneTerminal = e.validateNoLeftRecursion = e.validateRuleIsOverridden = e.validateRuleDoesNotAlreadyExist = e.OccurrenceValidationCollector = e.identifyProductionForDuplicates = e.validateGrammar = e.validateLookahead = void 0;
            var u = a(n(756170)),
                s = a(n(962193)),
                c = a(n(3739)),
                l = a(n(835970)),
                f = a(n(587612)),
                d = a(n(448081)),
                p = a(n(666245)),
                h = a(n(455378)),
                T = a(n(539754)),
                m = a(n(494394)),
                y = a(n(940860)),
                E = a(n(971086)),
                v = a(n(935880)),
                _ = a(n(679859)),
                O = a(n(547307)),
                R = a(n(932629)),
                g = a(n(927537)),
                A = a(n(183673));

            function N(t) {
                return "".concat((0, n(486906).getProductionDslName)(t), "_#_").concat(t.idx, "_#_").concat(I(t))
            }

            function I(t) {
                return t instanceof n(486906).Terminal ? t.terminalType.name : t instanceof n(486906).NonTerminal ? t.nonTerminalName : ""
            }
            e.validateLookahead = function(t) {
                var e = t.lookaheadStrategy.validate({
                    rules: t.rules,
                    tokenTypes: t.tokenTypes,
                    grammarName: t.grammarName
                });
                return (0, h.default)(e, function(t) {
                    return i({
                        type: n(358165).ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION
                    }, t)
                })
            }, e.validateGrammar = function(t, e, r, o) {
                var i, a, s, c, l, f = (0, O.default)(t, function(t) {
                        var e, o, i, a, s, c;
                        return e = t, o = r, i = new P, e.accept(i), a = i.allProductions, s = (0, m.default)(a, N), c = (0, E.default)(s, function(t) {
                            return t.length > 1
                        }), (0, h.default)((0, v.default)(c), function(t) {
                            var r = (0, u.default)(t),
                                i = o.buildDuplicateFoundError(e, t),
                                a = (0, n(486906).getProductionDslName)(r),
                                s = {
                                    message: i,
                                    type: n(358165).ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,
                                    ruleName: e.name,
                                    dslName: a,
                                    occurrence: r.idx
                                },
                                c = I(r);
                            return c && (s.parameter = c), s
                        })
                    }),
                    d = (i = t, a = e, s = r, c = [], l = (0, h.default)(a, function(t) {
                        return t.name
                    }), (0, T.default)(i, function(t) {
                        var e = t.name;
                        if ((0, _.default)(l, e)) {
                            var r = s.buildNamespaceConflictError(t);
                            c.push({
                                message: r,
                                type: n(358165).ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,
                                ruleName: e
                            })
                        }
                    }), c),
                    p = (0, O.default)(t, function(t) {
                        return C(t, r)
                    }),
                    y = (0, O.default)(t, function(e) {
                        return S(e, t, o, r)
                    });
                return f.concat(d, p, y)
            }, e.identifyProductionForDuplicates = N;
            var P = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.allProductions = [], e
                }
                return o(e, t), e.prototype.visitNonTerminal = function(t) {
                    this.allProductions.push(t)
                }, e.prototype.visitOption = function(t) {
                    this.allProductions.push(t)
                }, e.prototype.visitRepetitionWithSeparator = function(t) {
                    this.allProductions.push(t)
                }, e.prototype.visitRepetitionMandatory = function(t) {
                    this.allProductions.push(t)
                }, e.prototype.visitRepetitionMandatoryWithSeparator = function(t) {
                    this.allProductions.push(t)
                }, e.prototype.visitRepetition = function(t) {
                    this.allProductions.push(t)
                }, e.prototype.visitAlternation = function(t) {
                    this.allProductions.push(t)
                }, e.prototype.visitTerminal = function(t) {
                    this.allProductions.push(t)
                }, e
            }(n(486906).GAstVisitor);

            function S(t, e, r, o) {
                var i = [];
                if ((0, y.default)(e, function(e, n) {
                        return n.name === t.name ? e + 1 : e
                    }, 0) > 1) {
                    var a = o.buildDuplicateRuleNameError({
                        topLevelRule: t,
                        grammarName: r
                    });
                    i.push({
                        message: a,
                        type: n(358165).ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
                        ruleName: t.name
                    })
                }
                return i
            }

            function L(t) {
                var e = [];
                if ((0, s.default)(t)) return e;
                var r = (0, u.default)(t);
                if (r instanceof n(486906).NonTerminal) e.push(r.referencedRule);
                else if (r instanceof n(486906).Alternative || r instanceof n(486906).Option || r instanceof n(486906).RepetitionMandatory || r instanceof n(486906).RepetitionMandatoryWithSeparator || r instanceof n(486906).RepetitionWithSeparator || r instanceof n(486906).Repetition) e = e.concat(L(r.definition));
                else if (r instanceof n(486906).Alternation) e = (0, l.default)((0, h.default)(r.definition, function(t) {
                    return L(t.definition)
                }));
                else if (r instanceof n(486906).Terminal);
                else throw Error("non exhaustive match");
                var o = (0, n(486906).isOptionalProd)(r),
                    i = t.length > 1;
                if (!o || !i) return e;
                var a = (0, c.default)(t);
                return e.concat(L(a))
            }
            e.OccurrenceValidationCollector = P, e.validateRuleDoesNotAlreadyExist = S, e.validateRuleIsOverridden = function(t, e, r) {
                var o = [];
                return (0, _.default)(e, t) || o.push({
                    message: "Invalid rule override, rule: ->".concat(t, "<- cannot be overridden in the grammar: ->").concat(r, "<-") + "as it is not defined in any of the super grammars ",
                    type: n(358165).ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,
                    ruleName: t
                }), o
            }, e.validateNoLeftRecursion = function t(e, r, o, i) {
                void 0 === i && (i = []);
                var a = [],
                    u = L(r.definition);
                if ((0, s.default)(u)) return [];
                var c = e.name;
                (0, _.default)(u, e) && a.push({
                    message: o.buildLeftRecursionError({
                        topLevelRule: e,
                        leftRecursionPath: i
                    }),
                    type: n(358165).ParserDefinitionErrorType.LEFT_RECURSION,
                    ruleName: c
                });
                var l = (0, p.default)(u, i.concat([e]));
                return a.concat((0, O.default)(l, function(n) {
                    var r = (0, R.default)(i);
                    return r.push(n), t(e, n, o, r)
                }))
            }, e.getFirstNoneTerminal = L;
            var k = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.alternations = [], e
                }
                return o(e, t), e.prototype.visitAlternation = function(t) {
                    this.alternations.push(t)
                }, e
            }(n(486906).GAstVisitor);
            e.validateEmptyOrAlternative = function(t, e) {
                var r = new k;
                t.accept(r);
                var o = r.alternations;
                return (0, O.default)(o, function(r) {
                    var o = (0, g.default)(r.definition);
                    return (0, O.default)(o, function(o, i) {
                        var a = (0, n(437310).nextPossibleTokensAfter)([o], [], n(55674).tokenStructuredMatcher, 1);
                        return (0, s.default)(a) ? [{
                            message: e.buildEmptyAlternationError({
                                topLevelRule: t,
                                alternation: r,
                                emptyChoiceIdx: i
                            }),
                            type: n(358165).ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,
                            ruleName: t.name,
                            occurrence: r.idx,
                            alternative: i + 1
                        }] : []
                    })
                })
            }, e.validateAmbiguousAlternationAlternatives = function(t, e, r) {
                var o = new k;
                t.accept(o);
                var i = o.alternations;
                return i = (0, d.default)(i, function(t) {
                    return !0 === t.ignoreAmbiguities
                }), (0, O.default)(i, function(o) {
                    var i, a, u, s, c, l, f = o.idx,
                        d = o.maxLookahead || e,
                        p = (0, n(210816).getLookaheadPathsForOr)(f, t, d, o),
                        m = (i = p, a = o, u = t, s = r, c = [], l = (0, y.default)(i, function(t, e, r) {
                            return !0 === a.definition[r].ignoreAmbiguities || (0, T.default)(e, function(e) {
                                var o = [r];
                                (0, T.default)(i, function(t, i) {
                                    r !== i && (0, n(210816).containsPath)(t, e) && !0 !== a.definition[i].ignoreAmbiguities && o.push(i)
                                }), o.length > 1 && !(0, n(210816).containsPath)(c, e) && (c.push(e), t.push({
                                    alts: o,
                                    path: e
                                }))
                            }), t
                        }, []), (0, h.default)(l, function(t) {
                            var e = (0, h.default)(t.alts, function(t) {
                                return t + 1
                            });
                            return {
                                message: s.buildAlternationAmbiguityError({
                                    topLevelRule: u,
                                    alternation: a,
                                    ambiguityIndices: e,
                                    prefixPath: t.path
                                }),
                                type: n(358165).ParserDefinitionErrorType.AMBIGUOUS_ALTS,
                                ruleName: u.name,
                                occurrence: a.idx,
                                alternatives: t.alts
                            }
                        })),
                        E = M(p, o, t, r);
                    return m.concat(E)
                })
            };
            var x = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.allProductions = [], e
                }
                return o(e, t), e.prototype.visitRepetitionWithSeparator = function(t) {
                    this.allProductions.push(t)
                }, e.prototype.visitRepetitionMandatory = function(t) {
                    this.allProductions.push(t)
                }, e.prototype.visitRepetitionMandatoryWithSeparator = function(t) {
                    this.allProductions.push(t)
                }, e.prototype.visitRepetition = function(t) {
                    this.allProductions.push(t)
                }, e
            }(n(486906).GAstVisitor);

            function C(t, e) {
                var r = new k;
                t.accept(r);
                var o = r.alternations;
                return (0, O.default)(o, function(r) {
                    return r.definition.length > 255 ? [{
                        message: e.buildTooManyAlternativesError({
                            topLevelRule: t,
                            alternation: r
                        }),
                        type: n(358165).ParserDefinitionErrorType.TOO_MANY_ALTS,
                        ruleName: t.name,
                        occurrence: r.idx
                    }] : []
                })
            }

            function M(t, e, r, o) {
                var i = (0, y.default)(t, function(t, e, n) {
                    var r = (0, h.default)(e, function(t) {
                        return {
                            idx: n,
                            path: t
                        }
                    });
                    return t.concat(r)
                }, []);
                return (0, A.default)((0, O.default)(i, function(t) {
                    if (!0 === e.definition[t.idx].ignoreAmbiguities) return [];
                    var a = t.idx,
                        u = t.path,
                        s = (0, f.default)(i, function(t) {
                            return !0 !== e.definition[t.idx].ignoreAmbiguities && t.idx < a && (0, n(210816).isStrictPrefixOfPath)(t.path, u)
                        });
                    return (0, h.default)(s, function(t) {
                        var i = [t.idx + 1, a + 1],
                            u = 0 === e.idx ? "" : e.idx;
                        return {
                            message: o.buildAlternationPrefixAmbiguityError({
                                topLevelRule: r,
                                alternation: e,
                                ambiguityIndices: i,
                                prefixPath: t.path
                            }),
                            type: n(358165).ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,
                            ruleName: r.name,
                            occurrence: u,
                            alternatives: i
                        }
                    })
                }))
            }
            e.RepetitionCollector = x, e.validateTooManyAlts = C, e.validateSomeNonEmptyLookaheadPath = function(t, e, r) {
                var o = [];
                return (0, T.default)(t, function(t) {
                    var i = new x;
                    t.accept(i);
                    var a = i.allProductions;
                    (0, T.default)(a, function(i) {
                        var a = (0, n(210816).getProdType)(i),
                            u = i.maxLookahead || e,
                            c = i.idx,
                            f = (0, n(210816).getLookaheadPathsForOptionalProd)(c, t, a, u)[0];
                        if ((0, s.default)((0, l.default)(f))) {
                            var d = r.buildEmptyRepetitionError({
                                topLevelRule: t,
                                repetition: i
                            });
                            o.push({
                                message: d,
                                type: n(358165).ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,
                                ruleName: t.name
                            })
                        }
                    })
                }), o
            }, e.checkPrefixAlternativesAmbiguities = M
        },
        414306: (t, e, n) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LexerAdapter = void 0, e.LexerAdapter = function() {
                function t() {}
                return t.prototype.initLexerAdapter = function() {
                    this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1
                }, Object.defineProperty(t.prototype, "input", {
                    get: function() {
                        return this.tokVector
                    },
                    set: function(t) {
                        if (!0 !== this.selfAnalysisDone) throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
                        this.reset(), this.tokVector = t, this.tokVectorLength = t.length
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.SKIP_TOKEN = function() {
                    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : n(358165).END_OF_FILE
                }, t.prototype.LA = function(t) {
                    var e = this.currIdx + t;
                    return e < 0 || this.tokVectorLength <= e ? n(358165).END_OF_FILE : this.tokVector[e]
                }, t.prototype.consumeToken = function() {
                    this.currIdx++
                }, t.prototype.exportLexerState = function() {
                    return this.currIdx
                }, t.prototype.importLexerState = function(t) {
                    this.currIdx = t
                }, t.prototype.resetLexerState = function() {
                    this.currIdx = -1
                }, t.prototype.moveToTerminatedState = function() {
                    this.currIdx = this.tokVector.length - 1
                }, t.prototype.getLexerPosition = function() {
                    return this.exportLexerState()
                }, t
            }()
        },
        421585: (t, e, n) => {
            var r = Math.max;
            t.exports = function(t, e, o) {
                var i = null == t ? 0 : t.length;
                if (!i) return -1;
                var a = null == o ? 0 : n(761489)(o);
                return a < 0 && (a = r(i + a, 0)), n(596131)(t, e, a)
            }
        },
        437310: function(t, e, n) {
            "use strict";
            var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.nextPossibleTokensAfter = e.possiblePathsFrom = e.NextTerminalAfterAtLeastOneSepWalker = e.NextTerminalAfterAtLeastOneWalker = e.NextTerminalAfterManySepWalker = e.NextTerminalAfterManyWalker = e.AbstractNextTerminalAfterProductionWalker = e.NextAfterTokenWalker = e.AbstractNextPossibleTokensWalker = void 0;
            var a = i(n(756170)),
                u = i(n(962193)),
                s = i(n(927537)),
                c = i(n(3739)),
                l = i(n(468090)),
                f = i(n(539754)),
                d = i(n(932629)),
                p = () => n(486906),
                h = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.topProd = e, r.path = n, r.possibleTokTypes = [], r.nextProductionName = "", r.nextProductionOccurrence = 0, r.found = !1, r.isAtEndOfPath = !1, r
                    }
                    return o(e, t), e.prototype.startWalking = function() {
                        if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name) throw Error("The path does not start with the walker's top Rule!");
                        return this.ruleStack = (0, d.default)(this.path.ruleStack).reverse(), this.occurrenceStack = (0, d.default)(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes
                    }, e.prototype.walk = function(e, n) {
                        void 0 === n && (n = []), this.found || t.prototype.walk.call(this, e, n)
                    }, e.prototype.walkProdRef = function(t, e, n) {
                        if (t.referencedRule.name === this.nextProductionName && t.idx === this.nextProductionOccurrence) {
                            var r = e.concat(n);
                            this.updateExpectedNext(), this.walk(t.referencedRule, r)
                        }
                    }, e.prototype.updateExpectedNext = function() {
                        (0, u.default)(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop())
                    }, e
                }(n(687148).RestWalker);
            e.AbstractNextPossibleTokensWalker = h, e.NextAfterTokenWalker = function(t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    return r.path = n, r.nextTerminalName = "", r.nextTerminalOccurrence = 0, r.nextTerminalName = r.path.lastTok.name, r.nextTerminalOccurrence = r.path.lastTokOccurrence, r
                }
                return o(e, t), e.prototype.walkTerminal = function(t, e, r) {
                    if (this.isAtEndOfPath && t.terminalType.name === this.nextTerminalName && t.idx === this.nextTerminalOccurrence && !this.found) {
                        var o = e.concat(r),
                            i = new(p()).Alternative({
                                definition: o
                            });
                        this.possibleTokTypes = (0, n(402330).first)(i), this.found = !0
                    }
                }, e
            }(h);
            var T = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.topRule = e, r.occurrence = n, r.result = {
                        token: void 0,
                        occurrence: void 0,
                        isEndOfRule: void 0
                    }, r
                }
                return o(e, t), e.prototype.startWalking = function() {
                    return this.walk(this.topRule), this.result
                }, e
            }(n(687148).RestWalker);
            e.AbstractNextTerminalAfterProductionWalker = T, e.NextTerminalAfterManyWalker = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.walkMany = function(e, n, r) {
                    if (e.idx === this.occurrence) {
                        var o = (0, a.default)(n.concat(r));
                        this.result.isEndOfRule = void 0 === o, o instanceof p().Terminal && (this.result.token = o.terminalType, this.result.occurrence = o.idx)
                    } else t.prototype.walkMany.call(this, e, n, r)
                }, e
            }(T), e.NextTerminalAfterManySepWalker = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.walkManySep = function(e, n, r) {
                    if (e.idx === this.occurrence) {
                        var o = (0, a.default)(n.concat(r));
                        this.result.isEndOfRule = void 0 === o, o instanceof p().Terminal && (this.result.token = o.terminalType, this.result.occurrence = o.idx)
                    } else t.prototype.walkManySep.call(this, e, n, r)
                }, e
            }(T), e.NextTerminalAfterAtLeastOneWalker = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.walkAtLeastOne = function(e, n, r) {
                    if (e.idx === this.occurrence) {
                        var o = (0, a.default)(n.concat(r));
                        this.result.isEndOfRule = void 0 === o, o instanceof p().Terminal && (this.result.token = o.terminalType, this.result.occurrence = o.idx)
                    } else t.prototype.walkAtLeastOne.call(this, e, n, r)
                }, e
            }(T), e.NextTerminalAfterAtLeastOneSepWalker = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.walkAtLeastOneSep = function(e, n, r) {
                    if (e.idx === this.occurrence) {
                        var o = (0, a.default)(n.concat(r));
                        this.result.isEndOfRule = void 0 === o, o instanceof p().Terminal && (this.result.token = o.terminalType, this.result.occurrence = o.idx)
                    } else t.prototype.walkAtLeastOneSep.call(this, e, n, r)
                }, e
            }(T), e.possiblePathsFrom = function t(e, n, r) {
                void 0 === r && (r = []), r = (0, d.default)(r);
                var o = [],
                    i = 0;

                function a(a) {
                    var u = t(a.concat((0, c.default)(e, i + 1)), n, r);
                    return o.concat(u)
                }
                for (; r.length < n && i < e.length;) {
                    var s = e[i];
                    if (s instanceof p().Alternative) return a(s.definition);
                    if (s instanceof p().NonTerminal) return a(s.definition);
                    if (s instanceof p().Option) o = a(s.definition);
                    else if (s instanceof p().RepetitionMandatory) {
                        var l = s.definition.concat([new(p()).Repetition({
                            definition: s.definition
                        })]);
                        return a(l)
                    } else if (s instanceof p().RepetitionMandatoryWithSeparator) {
                        var l = [new(p()).Alternative({
                            definition: s.definition
                        }), new(p()).Repetition({
                            definition: [new(p()).Terminal({
                                terminalType: s.separator
                            })].concat(s.definition)
                        })];
                        return a(l)
                    } else if (s instanceof p().RepetitionWithSeparator) {
                        var l = s.definition.concat([new(p()).Repetition({
                            definition: [new(p()).Terminal({
                                terminalType: s.separator
                            })].concat(s.definition)
                        })]);
                        o = a(l)
                    } else if (s instanceof p().Repetition) {
                        var l = s.definition.concat([new(p()).Repetition({
                            definition: s.definition
                        })]);
                        o = a(l)
                    } else if (s instanceof p().Alternation) return (0, f.default)(s.definition, function(t) {
                        !1 === (0, u.default)(t.definition) && (o = a(t.definition))
                    }), o;
                    else if (s instanceof p().Terminal) r.push(s.terminalType);
                    else throw Error("non exhaustive match");
                    i++
                }
                return o.push({
                    partialPath: r,
                    suffixDef: (0, c.default)(e, i)
                }), o
            }, e.nextPossibleTokensAfter = function(t, e, n, r) {
                var o = "EXIT_NONE_TERMINAL",
                    i = [o],
                    a = "EXIT_ALTERNATIVE",
                    f = !1,
                    h = e.length,
                    T = h - r - 1,
                    m = [],
                    y = [];
                for (y.push({
                        idx: -1,
                        def: t,
                        ruleStack: [],
                        occurrenceStack: []
                    }); !(0, u.default)(y);) {
                    var E = y.pop();
                    if (E === a) {
                        f && (0, l.default)(y).idx <= T && y.pop();
                        continue
                    }
                    var v = E.def,
                        _ = E.idx,
                        O = E.ruleStack,
                        R = E.occurrenceStack;
                    if (!(0, u.default)(v)) {
                        var g = v[0];
                        if (g === o) {
                            var A = {
                                idx: _,
                                def: (0, c.default)(v),
                                ruleStack: (0, s.default)(O),
                                occurrenceStack: (0, s.default)(R)
                            };
                            y.push(A)
                        } else if (g instanceof p().Terminal)
                            if (_ < h - 1) {
                                var N = _ + 1;
                                if (n(e[N], g.terminalType)) {
                                    var A = {
                                        idx: N,
                                        def: (0, c.default)(v),
                                        ruleStack: O,
                                        occurrenceStack: R
                                    };
                                    y.push(A)
                                }
                            } else if (_ === h - 1) m.push({
                            nextTokenType: g.terminalType,
                            nextTokenOccurrence: g.idx,
                            ruleStack: O,
                            occurrenceStack: R
                        }), f = !0;
                        else throw Error("non exhaustive match");
                        else if (g instanceof p().NonTerminal) {
                            var I = (0, d.default)(O);
                            I.push(g.nonTerminalName);
                            var P = (0, d.default)(R);
                            P.push(g.idx);
                            var A = {
                                idx: _,
                                def: g.definition.concat(i, (0, c.default)(v)),
                                ruleStack: I,
                                occurrenceStack: P
                            };
                            y.push(A)
                        } else if (g instanceof p().Option) {
                            var S = {
                                idx: _,
                                def: (0, c.default)(v),
                                ruleStack: O,
                                occurrenceStack: R
                            };
                            y.push(S), y.push(a);
                            var L = {
                                idx: _,
                                def: g.definition.concat((0, c.default)(v)),
                                ruleStack: O,
                                occurrenceStack: R
                            };
                            y.push(L)
                        } else if (g instanceof p().RepetitionMandatory) {
                            var k = new(p()).Repetition({
                                    definition: g.definition,
                                    idx: g.idx
                                }),
                                x = g.definition.concat([k], (0, c.default)(v)),
                                A = {
                                    idx: _,
                                    def: x,
                                    ruleStack: O,
                                    occurrenceStack: R
                                };
                            y.push(A)
                        } else if (g instanceof p().RepetitionMandatoryWithSeparator) {
                            var C = new(p()).Terminal({
                                    terminalType: g.separator
                                }),
                                k = new(p()).Repetition({
                                    definition: [C].concat(g.definition),
                                    idx: g.idx
                                }),
                                x = g.definition.concat([k], (0, c.default)(v)),
                                A = {
                                    idx: _,
                                    def: x,
                                    ruleStack: O,
                                    occurrenceStack: R
                                };
                            y.push(A)
                        } else if (g instanceof p().RepetitionWithSeparator) {
                            var S = {
                                idx: _,
                                def: (0, c.default)(v),
                                ruleStack: O,
                                occurrenceStack: R
                            };
                            y.push(S), y.push(a);
                            var C = new(p()).Terminal({
                                    terminalType: g.separator
                                }),
                                M = new(p()).Repetition({
                                    definition: [C].concat(g.definition),
                                    idx: g.idx
                                }),
                                x = g.definition.concat([M], (0, c.default)(v)),
                                L = {
                                    idx: _,
                                    def: x,
                                    ruleStack: O,
                                    occurrenceStack: R
                                };
                            y.push(L)
                        } else if (g instanceof p().Repetition) {
                            var S = {
                                idx: _,
                                def: (0, c.default)(v),
                                ruleStack: O,
                                occurrenceStack: R
                            };
                            y.push(S), y.push(a);
                            var M = new(p()).Repetition({
                                    definition: g.definition,
                                    idx: g.idx
                                }),
                                x = g.definition.concat([M], (0, c.default)(v)),
                                L = {
                                    idx: _,
                                    def: x,
                                    ruleStack: O,
                                    occurrenceStack: R
                                };
                            y.push(L)
                        } else if (g instanceof p().Alternation)
                            for (var b = g.definition.length - 1; b >= 0; b--) {
                                var D = {
                                    idx: _,
                                    def: g.definition[b].definition.concat((0, c.default)(v)),
                                    ruleStack: O,
                                    occurrenceStack: R
                                };
                                y.push(D), y.push(a)
                            } else if (g instanceof p().Alternative) y.push({
                                idx: _,
                                def: g.definition.concat((0, c.default)(v)),
                                ruleStack: O,
                                occurrenceStack: R
                            });
                            else if (g instanceof p().Rule) y.push(function(t, e, n, r) {
                            var o = (0, d.default)(n);
                            o.push(t.name);
                            var i = (0, d.default)(r);
                            return i.push(1), {
                                idx: e,
                                def: t.definition,
                                ruleStack: o,
                                occurrenceStack: i
                            }
                        }(g, _, O, R));
                        else throw Error("non exhaustive match")
                    }
                }
                return m
            }
        },
        442426: (t, e, n) => {
            t.exports = function(t, e, r) {
                var o = n(956449)(t) ? n(314248) : n(990916);
                return r && n(936800)(t, e, r) && (e = void 0), o(t, n(315389)(e, 3))
            }
        },
        448081: (t, e, n) => {
            t.exports = function(t, e) {
                return (n(956449)(t) ? n(679770) : n(616574))(t, n(806048)(n(315389)(e, 3)))
            }
        },
        469607: (t, e, n) => {
            var r = n(786009) && n(786009).isRegExp;
            t.exports = r ? n(827301)(r) : n(881437)
        },
        477350: function(t, e, n) {
            "use strict";
            var r = this && this.__spreadArray || function(t, e, n) {
                    if (n || 2 == arguments.length)
                        for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                    return t.concat(r || Array.prototype.slice.call(e))
                },
                o = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LLkLookaheadStrategy = void 0;
            var i = o(n(547307)),
                a = o(n(962193));
            e.LLkLookaheadStrategy = function() {
                function t(t) {
                    var e;
                    this.maxLookahead = null != (e = null == t ? void 0 : t.maxLookahead) ? e : n(358165).DEFAULT_PARSER_CONFIG.maxLookahead
                }
                return t.prototype.validate = function(t) {
                    var e = this.validateNoLeftRecursion(t.rules);
                    if ((0, a.default)(e)) {
                        var n = this.validateEmptyOrAlternatives(t.rules),
                            o = this.validateAmbiguousAlternationAlternatives(t.rules, this.maxLookahead),
                            i = this.validateSomeNonEmptyLookaheadPath(t.rules, this.maxLookahead);
                        return r(r(r(r([], e, !0), n, !0), o, !0), i, !0)
                    }
                    return e
                }, t.prototype.validateNoLeftRecursion = function(t) {
                    return (0, i.default)(t, function(t) {
                        return (0, n(409955).validateNoLeftRecursion)(t, t, n(918259).defaultGrammarValidatorErrorProvider)
                    })
                }, t.prototype.validateEmptyOrAlternatives = function(t) {
                    return (0, i.default)(t, function(t) {
                        return (0, n(409955).validateEmptyOrAlternative)(t, n(918259).defaultGrammarValidatorErrorProvider)
                    })
                }, t.prototype.validateAmbiguousAlternationAlternatives = function(t, e) {
                    return (0, i.default)(t, function(t) {
                        return (0, n(409955).validateAmbiguousAlternationAlternatives)(t, e, n(918259).defaultGrammarValidatorErrorProvider)
                    })
                }, t.prototype.validateSomeNonEmptyLookaheadPath = function(t, e) {
                    return (0, n(409955).validateSomeNonEmptyLookaheadPath)(t, e, n(918259).defaultGrammarValidatorErrorProvider)
                }, t.prototype.buildLookaheadForAlternation = function(t) {
                    return (0, n(210816).buildLookaheadFuncForOr)(t.prodOccurrence, t.rule, t.maxLookahead, t.hasPredicates, t.dynamicTokensEnabled, n(210816).buildAlternativesLookAheadFunc)
                }, t.prototype.buildLookaheadForOptional = function(t) {
                    return (0, n(210816).buildLookaheadFuncForOptionalProd)(t.prodOccurrence, t.rule, t.maxLookahead, t.dynamicTokensEnabled, (0, n(210816).getProdType)(t.prodType), n(210816).buildSingleAlternativeLookaheadFunction)
                }, t
            }()
        },
        486906: (t, e, n) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isSequenceProd = e.isBranchingProd = e.isOptionalProd = e.getProductionDslName = e.GAstVisitor = e.serializeProduction = e.serializeGrammar = e.Alternative = e.Alternation = e.RepetitionWithSeparator = e.RepetitionMandatoryWithSeparator = e.RepetitionMandatory = e.Repetition = e.Option = e.NonTerminal = e.Terminal = e.Rule = void 0, Object.defineProperty(e, "Rule", {
                enumerable: !0,
                get: function() {
                    return n(765223).Rule
                }
            }), Object.defineProperty(e, "Terminal", {
                enumerable: !0,
                get: function() {
                    return n(765223).Terminal
                }
            }), Object.defineProperty(e, "NonTerminal", {
                enumerable: !0,
                get: function() {
                    return n(765223).NonTerminal
                }
            }), Object.defineProperty(e, "Option", {
                enumerable: !0,
                get: function() {
                    return n(765223).Option
                }
            }), Object.defineProperty(e, "Repetition", {
                enumerable: !0,
                get: function() {
                    return n(765223).Repetition
                }
            }), Object.defineProperty(e, "RepetitionMandatory", {
                enumerable: !0,
                get: function() {
                    return n(765223).RepetitionMandatory
                }
            }), Object.defineProperty(e, "RepetitionMandatoryWithSeparator", {
                enumerable: !0,
                get: function() {
                    return n(765223).RepetitionMandatoryWithSeparator
                }
            }), Object.defineProperty(e, "RepetitionWithSeparator", {
                enumerable: !0,
                get: function() {
                    return n(765223).RepetitionWithSeparator
                }
            }), Object.defineProperty(e, "Alternation", {
                enumerable: !0,
                get: function() {
                    return n(765223).Alternation
                }
            }), Object.defineProperty(e, "Alternative", {
                enumerable: !0,
                get: function() {
                    return n(765223).Alternative
                }
            }), Object.defineProperty(e, "serializeGrammar", {
                enumerable: !0,
                get: function() {
                    return n(765223).serializeGrammar
                }
            }), Object.defineProperty(e, "serializeProduction", {
                enumerable: !0,
                get: function() {
                    return n(765223).serializeProduction
                }
            }), Object.defineProperty(e, "GAstVisitor", {
                enumerable: !0,
                get: function() {
                    return n(687440).GAstVisitor
                }
            }), Object.defineProperty(e, "getProductionDslName", {
                enumerable: !0,
                get: function() {
                    return n(387579).getProductionDslName
                }
            }), Object.defineProperty(e, "isOptionalProd", {
                enumerable: !0,
                get: function() {
                    return n(387579).isOptionalProd
                }
            }), Object.defineProperty(e, "isBranchingProd", {
                enumerable: !0,
                get: function() {
                    return n(387579).isBranchingProd
                }
            }), Object.defineProperty(e, "isSequenceProd", {
                enumerable: !0,
                get: function() {
                    return n(387579).isSequenceProd
                }
            })
        },
        535179: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RecognizerApi = void 0;
            var o = r(n(935880)),
                i = r(n(679859));
            e.RecognizerApi = function() {
                function t() {}
                return t.prototype.ACTION = function(t) {
                    return t.call(this)
                }, t.prototype.consume = function(t, e, n) {
                    return this.consumeInternal(e, t, n)
                }, t.prototype.subrule = function(t, e, n) {
                    return this.subruleInternal(e, t, n)
                }, t.prototype.option = function(t, e) {
                    return this.optionInternal(e, t)
                }, t.prototype.or = function(t, e) {
                    return this.orInternal(e, t)
                }, t.prototype.many = function(t, e) {
                    return this.manyInternal(t, e)
                }, t.prototype.atLeastOne = function(t, e) {
                    return this.atLeastOneInternal(t, e)
                }, t.prototype.CONSUME = function(t, e) {
                    return this.consumeInternal(t, 0, e)
                }, t.prototype.CONSUME1 = function(t, e) {
                    return this.consumeInternal(t, 1, e)
                }, t.prototype.CONSUME2 = function(t, e) {
                    return this.consumeInternal(t, 2, e)
                }, t.prototype.CONSUME3 = function(t, e) {
                    return this.consumeInternal(t, 3, e)
                }, t.prototype.CONSUME4 = function(t, e) {
                    return this.consumeInternal(t, 4, e)
                }, t.prototype.CONSUME5 = function(t, e) {
                    return this.consumeInternal(t, 5, e)
                }, t.prototype.CONSUME6 = function(t, e) {
                    return this.consumeInternal(t, 6, e)
                }, t.prototype.CONSUME7 = function(t, e) {
                    return this.consumeInternal(t, 7, e)
                }, t.prototype.CONSUME8 = function(t, e) {
                    return this.consumeInternal(t, 8, e)
                }, t.prototype.CONSUME9 = function(t, e) {
                    return this.consumeInternal(t, 9, e)
                }, t.prototype.SUBRULE = function(t, e) {
                    return this.subruleInternal(t, 0, e)
                }, t.prototype.SUBRULE1 = function(t, e) {
                    return this.subruleInternal(t, 1, e)
                }, t.prototype.SUBRULE2 = function(t, e) {
                    return this.subruleInternal(t, 2, e)
                }, t.prototype.SUBRULE3 = function(t, e) {
                    return this.subruleInternal(t, 3, e)
                }, t.prototype.SUBRULE4 = function(t, e) {
                    return this.subruleInternal(t, 4, e)
                }, t.prototype.SUBRULE5 = function(t, e) {
                    return this.subruleInternal(t, 5, e)
                }, t.prototype.SUBRULE6 = function(t, e) {
                    return this.subruleInternal(t, 6, e)
                }, t.prototype.SUBRULE7 = function(t, e) {
                    return this.subruleInternal(t, 7, e)
                }, t.prototype.SUBRULE8 = function(t, e) {
                    return this.subruleInternal(t, 8, e)
                }, t.prototype.SUBRULE9 = function(t, e) {
                    return this.subruleInternal(t, 9, e)
                }, t.prototype.OPTION = function(t) {
                    return this.optionInternal(t, 0)
                }, t.prototype.OPTION1 = function(t) {
                    return this.optionInternal(t, 1)
                }, t.prototype.OPTION2 = function(t) {
                    return this.optionInternal(t, 2)
                }, t.prototype.OPTION3 = function(t) {
                    return this.optionInternal(t, 3)
                }, t.prototype.OPTION4 = function(t) {
                    return this.optionInternal(t, 4)
                }, t.prototype.OPTION5 = function(t) {
                    return this.optionInternal(t, 5)
                }, t.prototype.OPTION6 = function(t) {
                    return this.optionInternal(t, 6)
                }, t.prototype.OPTION7 = function(t) {
                    return this.optionInternal(t, 7)
                }, t.prototype.OPTION8 = function(t) {
                    return this.optionInternal(t, 8)
                }, t.prototype.OPTION9 = function(t) {
                    return this.optionInternal(t, 9)
                }, t.prototype.OR = function(t) {
                    return this.orInternal(t, 0)
                }, t.prototype.OR1 = function(t) {
                    return this.orInternal(t, 1)
                }, t.prototype.OR2 = function(t) {
                    return this.orInternal(t, 2)
                }, t.prototype.OR3 = function(t) {
                    return this.orInternal(t, 3)
                }, t.prototype.OR4 = function(t) {
                    return this.orInternal(t, 4)
                }, t.prototype.OR5 = function(t) {
                    return this.orInternal(t, 5)
                }, t.prototype.OR6 = function(t) {
                    return this.orInternal(t, 6)
                }, t.prototype.OR7 = function(t) {
                    return this.orInternal(t, 7)
                }, t.prototype.OR8 = function(t) {
                    return this.orInternal(t, 8)
                }, t.prototype.OR9 = function(t) {
                    return this.orInternal(t, 9)
                }, t.prototype.MANY = function(t) {
                    this.manyInternal(0, t)
                }, t.prototype.MANY1 = function(t) {
                    this.manyInternal(1, t)
                }, t.prototype.MANY2 = function(t) {
                    this.manyInternal(2, t)
                }, t.prototype.MANY3 = function(t) {
                    this.manyInternal(3, t)
                }, t.prototype.MANY4 = function(t) {
                    this.manyInternal(4, t)
                }, t.prototype.MANY5 = function(t) {
                    this.manyInternal(5, t)
                }, t.prototype.MANY6 = function(t) {
                    this.manyInternal(6, t)
                }, t.prototype.MANY7 = function(t) {
                    this.manyInternal(7, t)
                }, t.prototype.MANY8 = function(t) {
                    this.manyInternal(8, t)
                }, t.prototype.MANY9 = function(t) {
                    this.manyInternal(9, t)
                }, t.prototype.MANY_SEP = function(t) {
                    this.manySepFirstInternal(0, t)
                }, t.prototype.MANY_SEP1 = function(t) {
                    this.manySepFirstInternal(1, t)
                }, t.prototype.MANY_SEP2 = function(t) {
                    this.manySepFirstInternal(2, t)
                }, t.prototype.MANY_SEP3 = function(t) {
                    this.manySepFirstInternal(3, t)
                }, t.prototype.MANY_SEP4 = function(t) {
                    this.manySepFirstInternal(4, t)
                }, t.prototype.MANY_SEP5 = function(t) {
                    this.manySepFirstInternal(5, t)
                }, t.prototype.MANY_SEP6 = function(t) {
                    this.manySepFirstInternal(6, t)
                }, t.prototype.MANY_SEP7 = function(t) {
                    this.manySepFirstInternal(7, t)
                }, t.prototype.MANY_SEP8 = function(t) {
                    this.manySepFirstInternal(8, t)
                }, t.prototype.MANY_SEP9 = function(t) {
                    this.manySepFirstInternal(9, t)
                }, t.prototype.AT_LEAST_ONE = function(t) {
                    this.atLeastOneInternal(0, t)
                }, t.prototype.AT_LEAST_ONE1 = function(t) {
                    return this.atLeastOneInternal(1, t)
                }, t.prototype.AT_LEAST_ONE2 = function(t) {
                    this.atLeastOneInternal(2, t)
                }, t.prototype.AT_LEAST_ONE3 = function(t) {
                    this.atLeastOneInternal(3, t)
                }, t.prototype.AT_LEAST_ONE4 = function(t) {
                    this.atLeastOneInternal(4, t)
                }, t.prototype.AT_LEAST_ONE5 = function(t) {
                    this.atLeastOneInternal(5, t)
                }, t.prototype.AT_LEAST_ONE6 = function(t) {
                    this.atLeastOneInternal(6, t)
                }, t.prototype.AT_LEAST_ONE7 = function(t) {
                    this.atLeastOneInternal(7, t)
                }, t.prototype.AT_LEAST_ONE8 = function(t) {
                    this.atLeastOneInternal(8, t)
                }, t.prototype.AT_LEAST_ONE9 = function(t) {
                    this.atLeastOneInternal(9, t)
                }, t.prototype.AT_LEAST_ONE_SEP = function(t) {
                    this.atLeastOneSepFirstInternal(0, t)
                }, t.prototype.AT_LEAST_ONE_SEP1 = function(t) {
                    this.atLeastOneSepFirstInternal(1, t)
                }, t.prototype.AT_LEAST_ONE_SEP2 = function(t) {
                    this.atLeastOneSepFirstInternal(2, t)
                }, t.prototype.AT_LEAST_ONE_SEP3 = function(t) {
                    this.atLeastOneSepFirstInternal(3, t)
                }, t.prototype.AT_LEAST_ONE_SEP4 = function(t) {
                    this.atLeastOneSepFirstInternal(4, t)
                }, t.prototype.AT_LEAST_ONE_SEP5 = function(t) {
                    this.atLeastOneSepFirstInternal(5, t)
                }, t.prototype.AT_LEAST_ONE_SEP6 = function(t) {
                    this.atLeastOneSepFirstInternal(6, t)
                }, t.prototype.AT_LEAST_ONE_SEP7 = function(t) {
                    this.atLeastOneSepFirstInternal(7, t)
                }, t.prototype.AT_LEAST_ONE_SEP8 = function(t) {
                    this.atLeastOneSepFirstInternal(8, t)
                }, t.prototype.AT_LEAST_ONE_SEP9 = function(t) {
                    this.atLeastOneSepFirstInternal(9, t)
                }, t.prototype.RULE = function(t, e, r) {
                    if (void 0 === r && (r = n(358165).DEFAULT_RULE_CONFIG), (0, i.default)(this.definedRulesNames, t)) {
                        var o = {
                            message: n(918259).defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({
                                topLevelRule: t,
                                grammarName: this.className
                            }),
                            type: n(358165).ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
                            ruleName: t
                        };
                        this.definitionErrors.push(o)
                    }
                    this.definedRulesNames.push(t);
                    var a = this.defineRule(t, e, r);
                    return this[t] = a, a
                }, t.prototype.OVERRIDE_RULE = function(t, e, r) {
                    void 0 === r && (r = n(358165).DEFAULT_RULE_CONFIG);
                    var o = (0, n(409955).validateRuleIsOverridden)(t, this.definedRulesNames, this.className);
                    this.definitionErrors = this.definitionErrors.concat(o);
                    var i = this.defineRule(t, e, r);
                    return this[t] = i, i
                }, t.prototype.BACKTRACK = function(t, e) {
                    return function() {
                        this.isBackTrackingStack.push(1);
                        var r = this.saveRecogState();
                        try {
                            return t.apply(this, e), !0
                        } catch (t) {
                            if ((0, n(617456).isRecognitionException)(t)) return !1;
                            throw t
                        } finally {
                            this.reloadRecogState(r), this.isBackTrackingStack.pop()
                        }
                    }
                }, t.prototype.getGAstProductions = function() {
                    return this.gastProductionsCache
                }, t.prototype.getSerializedGastProductions = function() {
                    return (0, n(486906).serializeGrammar)((0, o.default)(this.gastProductionsCache))
                }, t
            }()
        },
        539754: (t, e, n) => {
            t.exports = function(t, e) {
                return (n(956449)(t) ? n(983729) : n(480909))(t, n(724066)(e))
            }
        },
        560458: function(t, e, n) {
            "use strict";
            var r, o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Lexer = e.LexerDefinitionErrorType = void 0;
            var i = o(n(263950)),
                a = o(n(962193)),
                u = o(n(956449)),
                s = o(n(468090)),
                c = o(n(448081)),
                l = o(n(455378)),
                f = o(n(539754)),
                d = o(n(395950)),
                p = o(n(762216)),
                h = o(n(383488)),
                T = o(n(386139)),
                m = o(n(940860)),
                y = o(n(932629));
            (r = e.LexerDefinitionErrorType || (e.LexerDefinitionErrorType = {}))[r.MISSING_PATTERN = 0] = "MISSING_PATTERN", r[r.INVALID_PATTERN = 1] = "INVALID_PATTERN", r[r.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", r[r.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", r[r.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", r[r.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", r[r.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", r[r.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", r[r.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", r[r.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", r[r.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", r[r.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", r[r.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", r[r.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", r[r.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", r[r.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", r[r.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", r[r.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
            var E = {
                deferDefinitionErrorsHandling: !1,
                positionTracking: "full",
                lineTerminatorsPattern: /\n|\r\n?/g,
                lineTerminatorCharacters: ["\n", "\r"],
                ensureOptimizations: !1,
                safeMode: !1,
                errorMessageProvider: n(599034).defaultLexerErrorProvider,
                traceInitPerf: !1,
                skipValidations: !1,
                recoveryEnabled: !0
            };
            Object.freeze(E), e.Lexer = function() {
                function t(t, e) {
                    void 0 === e && (e = E);
                    var r = this;
                    if (this.lexerDefinition = t, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = function(t, e) {
                            if (!0 !== r.traceInitPerf) return e();
                            r.traceInitIndent++;
                            var o = Array(r.traceInitIndent + 1).join("	");
                            r.traceInitIndent < r.traceInitMaxIdent && console.log("".concat(o, "--\x3e <").concat(t, ">"));
                            var i = (0, n(191444).timer)(e),
                                a = i.time,
                                u = i.value,
                                s = a > 10 ? console.warn : console.log;
                            return r.traceInitIndent < r.traceInitMaxIdent && s("".concat(o, "<-- <").concat(t, "> time: ").concat(a, "ms")), r.traceInitIndent--, u
                        }, "boolean" == typeof e) throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");
                    this.config = (0, T.default)({}, E, e);
                    var o = this.config.traceInitPerf;
                    !0 === o ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = !0) : "number" == typeof o && (this.traceInitMaxIdent = o, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", function() {
                        var o, s = !0;
                        r.TRACE_INIT("Lexer Config handling", function() {
                            if (r.config.lineTerminatorsPattern === E.lineTerminatorsPattern) r.config.lineTerminatorsPattern = n(917164).LineTerminatorOptimizedTester;
                            else if (r.config.lineTerminatorCharacters === E.lineTerminatorCharacters) throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
                            if (e.safeMode && e.ensureOptimizations) throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
                            r.trackStartLines = /full|onlyStart/i.test(r.config.positionTracking), r.trackEndLines = /full/i.test(r.config.positionTracking), (0, u.default)(t) ? o = {
                                modes: {
                                    defaultMode: (0, y.default)(t)
                                },
                                defaultMode: n(917164).DEFAULT_MODE
                            } : (s = !1, o = (0, y.default)(t))
                        }), !1 === r.config.skipValidations && (r.TRACE_INIT("performRuntimeChecks", function() {
                            r.lexerDefinitionErrors = r.lexerDefinitionErrors.concat((0, n(917164).performRuntimeChecks)(o, r.trackStartLines, r.config.lineTerminatorCharacters))
                        }), r.TRACE_INIT("performWarningRuntimeChecks", function() {
                            r.lexerDefinitionWarning = r.lexerDefinitionWarning.concat((0, n(917164).performWarningRuntimeChecks)(o, r.trackStartLines, r.config.lineTerminatorCharacters))
                        })), o.modes = o.modes ? o.modes : {}, (0, f.default)(o.modes, function(t, e) {
                            o.modes[e] = (0, c.default)(t, function(t) {
                                return (0, p.default)(t)
                            })
                        });
                        var v = (0, d.default)(o.modes);
                        if ((0, f.default)(o.modes, function(t, o) {
                                r.TRACE_INIT("Mode: <".concat(o, "> processing"), function() {
                                    if (r.modes.push(o), !1 === r.config.skipValidations && r.TRACE_INIT("validatePatterns", function() {
                                            r.lexerDefinitionErrors = r.lexerDefinitionErrors.concat((0, n(917164).validatePatterns)(t, v))
                                        }), (0, a.default)(r.lexerDefinitionErrors)) {
                                        var i;
                                        (0, n(55674).augmentTokenTypes)(t), r.TRACE_INIT("analyzeTokenTypes", function() {
                                            i = (0, n(917164).analyzeTokenTypes)(t, {
                                                lineTerminatorCharacters: r.config.lineTerminatorCharacters,
                                                positionTracking: e.positionTracking,
                                                ensureOptimizations: e.ensureOptimizations,
                                                safeMode: e.safeMode,
                                                tracer: r.TRACE_INIT
                                            })
                                        }), r.patternIdxToConfig[o] = i.patternIdxToConfig, r.charCodeToPatternIdxToConfig[o] = i.charCodeToPatternIdxToConfig, r.emptyGroups = (0, T.default)({}, r.emptyGroups, i.emptyGroups), r.hasCustom = i.hasCustom || r.hasCustom, r.canModeBeOptimized[o] = i.canBeOptimized
                                    }
                                })
                            }), r.defaultMode = o.defaultMode, !(0, a.default)(r.lexerDefinitionErrors) && !r.config.deferDefinitionErrorsHandling) throw Error("Errors detected in definition of Lexer:\n" + (0, l.default)(r.lexerDefinitionErrors, function(t) {
                            return t.message
                        }).join("-----------------------\n"));
                        (0, f.default)(r.lexerDefinitionWarning, function(t) {
                            (0, n(191444).PRINT_WARNING)(t.message)
                        }), r.TRACE_INIT("Choosing sub-methods implementations", function() {
                            if (n(917164).SUPPORT_STICKY ? (r.chopInput = h.default, r.match = r.matchWithTest) : (r.updateLastIndex = i.default, r.match = r.matchWithExec), s && (r.handleModes = i.default), !1 === r.trackStartLines && (r.computeNewColumn = h.default), !1 === r.trackEndLines && (r.updateTokenEndLineColumnLocation = i.default), /full/i.test(r.config.positionTracking)) r.createTokenInstance = r.createFullToken;
                            else if (/onlyStart/i.test(r.config.positionTracking)) r.createTokenInstance = r.createStartOnlyToken;
                            else if (/onlyOffset/i.test(r.config.positionTracking)) r.createTokenInstance = r.createOffsetOnlyToken;
                            else throw Error('Invalid <positionTracking> config option: "'.concat(r.config.positionTracking, '"'));
                            r.hasCustom ? (r.addToken = r.addTokenUsingPush, r.handlePayload = r.handlePayloadWithCustom) : (r.addToken = r.addTokenUsingMemberAccess, r.handlePayload = r.handlePayloadNoCustom)
                        }), r.TRACE_INIT("Failed Optimization Warnings", function() {
                            var t = (0, m.default)(r.canModeBeOptimized, function(t, e, n) {
                                return !1 === e && t.push(n), t
                            }, []);
                            if (e.ensureOptimizations && !(0, a.default)(t)) throw Error("Lexer Modes: < ".concat(t.join(", "), " > cannot be optimized.\n") + '	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.\n	 Or inspect the console log for details on how to resolve these issues.')
                        }), r.TRACE_INIT("clearRegExpParserCache", function() {
                            (0, n(628540).clearRegExpParserCache)()
                        }), r.TRACE_INIT("toFastProperties", function() {
                            (0, n(191444).toFastProperties)(r)
                        })
                    })
                }
                return t.prototype.tokenize = function(t, e) {
                    if (void 0 === e && (e = this.defaultMode), !(0, a.default)(this.lexerDefinitionErrors)) throw Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + (0, l.default)(this.lexerDefinitionErrors, function(t) {
                        return t.message
                    }).join("-----------------------\n"));
                    return this.tokenizeInternal(t, e)
                }, t.prototype.tokenizeInternal = function(t, e) {
                    var r, o, i, a, u, c, l, f, d, p, h, T, m, y, E, v, _, O = this,
                        R = t,
                        g = R.length,
                        A = 0,
                        N = 0,
                        I = Array(this.hasCustom ? 0 : Math.floor(t.length / 10)),
                        P = [],
                        S = this.trackStartLines ? 1 : void 0,
                        L = this.trackStartLines ? 1 : void 0,
                        k = (0, n(917164).cloneEmptyGroups)(this.emptyGroups),
                        x = this.trackStartLines,
                        C = this.config.lineTerminatorsPattern,
                        M = 0,
                        b = [],
                        D = [],
                        F = [],
                        U = [];

                    function w() {
                        return b
                    }

                    function j(t) {
                        var e = D[(0, n(917164).charCodeToOptimizedIndex)(t)];
                        return void 0 === e ? U : e
                    }
                    Object.freeze(U);
                    var G = function(t) {
                        if (1 === F.length && void 0 === t.tokenType.PUSH_MODE) {
                            var e = O.config.errorMessageProvider.buildUnableToPopLexerModeMessage(t);
                            P.push({
                                offset: t.startOffset,
                                line: t.startLine,
                                column: t.startColumn,
                                length: t.image.length,
                                message: e
                            })
                        } else {
                            F.pop();
                            var n = (0, s.default)(F);
                            b = O.patternIdxToConfig[n], D = O.charCodeToPatternIdxToConfig[n], M = b.length;
                            var r = O.canModeBeOptimized[n] && !1 === O.config.safeMode;
                            v = D && r ? j : w
                        }
                    };

                    function W(t) {
                        F.push(t), D = this.charCodeToPatternIdxToConfig[t], M = (b = this.patternIdxToConfig[t]).length, M = b.length;
                        var e = this.canModeBeOptimized[t] && !1 === this.config.safeMode;
                        v = D && e ? j : w
                    }
                    W.call(this, e);
                    for (var B = this.config.recoveryEnabled; A < g;) {
                        c = null;
                        var V = R.charCodeAt(A),
                            K = v(V),
                            z = K.length;
                        for (r = 0; r < z; r++) {
                            var Y = (_ = K[r]).pattern;
                            l = null;
                            var H = _.short;
                            if (!1 !== H ? V === H && (c = Y) : !0 === _.isCustom ? null !== (E = Y.exec(R, A, I, k)) ? (c = E[0], void 0 !== E.payload && (l = E.payload)) : c = null : (this.updateLastIndex(Y, A), c = this.match(Y, t, A)), null !== c) {
                                if (void 0 !== (u = _.longerAlt)) {
                                    var X = u.length;
                                    for (i = 0; i < X; i++) {
                                        var q = b[u[i]],
                                            $ = q.pattern;
                                        if (f = null, !0 === q.isCustom ? null !== (E = $.exec(R, A, I, k)) ? (a = E[0], void 0 !== E.payload && (f = E.payload)) : a = null : (this.updateLastIndex($, A), a = this.match($, t, A)), a && a.length > c.length) {
                                            c = a, l = f, _ = q;
                                            break
                                        }
                                    }
                                }
                                break
                            }
                        }
                        if (null !== c) {
                            if (d = c.length, void 0 !== (p = _.group) && (h = _.tokenTypeIdx, T = this.createTokenInstance(c, A, h, _.tokenType, S, L, d), this.handlePayload(T, l), !1 === p ? N = this.addToken(I, N, T) : k[p].push(T)), t = this.chopInput(t, d), A += d, L = this.computeNewColumn(L, d), !0 === x && !0 === _.canLineTerminator) {
                                var J = 0,
                                    Z = void 0,
                                    Q = void 0;
                                C.lastIndex = 0;
                                do !0 === (Z = C.test(c)) && (Q = C.lastIndex - 1, J++); while (!0 === Z) 0 !== J && (S += J, L = d - Q, this.updateTokenEndLineColumnLocation(T, p, Q, J, S, L, d))
                            }
                            this.handleModes(_, G, W, T)
                        } else {
                            for (var tt = A, te = S, tn = L, tr = !1 === B; !1 === tr && A < g;)
                                for (t = this.chopInput(t, 1), A++, o = 0; o < M; o++) {
                                    var to = b[o],
                                        Y = to.pattern,
                                        H = to.short;
                                    if (!1 !== H ? R.charCodeAt(A) === H && (tr = !0) : !0 === to.isCustom ? tr = null !== Y.exec(R, A, I, k) : (this.updateLastIndex(Y, A), tr = null !== Y.exec(t)), !0 === tr) break
                                }
                            if (m = A - tt, y = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(R, tt, m, te, tn), P.push({
                                    offset: tt,
                                    line: te,
                                    column: tn,
                                    length: m,
                                    message: y
                                }), !1 === B) break
                        }
                    }
                    return this.hasCustom || (I.length = N), {
                        tokens: I,
                        groups: k,
                        errors: P
                    }
                }, t.prototype.handleModes = function(t, e, n, r) {
                    if (!0 === t.pop) {
                        var o = t.push;
                        e(r), void 0 !== o && n.call(this, o)
                    } else void 0 !== t.push && n.call(this, t.push)
                }, t.prototype.chopInput = function(t, e) {
                    return t.substring(e)
                }, t.prototype.updateLastIndex = function(t, e) {
                    t.lastIndex = e
                }, t.prototype.updateTokenEndLineColumnLocation = function(t, e, n, r, o, i, a) {
                    var u, s;
                    void 0 !== e && (s = (u = n === a - 1) ? -1 : 0, (1 !== r || !0 !== u) && (t.endLine = o + s, t.endColumn = i - 1 + -s))
                }, t.prototype.computeNewColumn = function(t, e) {
                    return t + e
                }, t.prototype.createOffsetOnlyToken = function(t, e, n, r) {
                    return {
                        image: t,
                        startOffset: e,
                        tokenTypeIdx: n,
                        tokenType: r
                    }
                }, t.prototype.createStartOnlyToken = function(t, e, n, r, o, i) {
                    return {
                        image: t,
                        startOffset: e,
                        startLine: o,
                        startColumn: i,
                        tokenTypeIdx: n,
                        tokenType: r
                    }
                }, t.prototype.createFullToken = function(t, e, n, r, o, i, a) {
                    return {
                        image: t,
                        startOffset: e,
                        endOffset: e + a - 1,
                        startLine: o,
                        endLine: o,
                        startColumn: i,
                        endColumn: i + a - 1,
                        tokenTypeIdx: n,
                        tokenType: r
                    }
                }, t.prototype.addTokenUsingPush = function(t, e, n) {
                    return t.push(n), e
                }, t.prototype.addTokenUsingMemberAccess = function(t, e, n) {
                    return t[e] = n, ++e
                }, t.prototype.handlePayloadNoCustom = function(t, e) {}, t.prototype.handlePayloadWithCustom = function(t, e) {
                    null !== e && (t.payload = e)
                }, t.prototype.matchWithTest = function(t, e, n) {
                    return !0 === t.test(e) ? e.substring(n, t.lastIndex) : null
                }, t.prototype.matchWithExec = function(t, e) {
                    var n = t.exec(e);
                    return null !== n ? n[0] : null
                }, t.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.", t.NA = /NOT_APPLICABLE/, t
            }()
        },
        587612: (t, e, n) => {
            t.exports = function(t, e) {
                return (n(956449)(t) ? n(679770) : n(616574))(t, n(315389)(e, 3))
            }
        },
        599034: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.defaultLexerErrorProvider = void 0, e.defaultLexerErrorProvider = {
                buildUnableToPopLexerModeMessage: function(t) {
                    return "Unable to pop Lexer Mode after encountering Token ->".concat(t.image, "<- The Mode Stack is empty")
                },
                buildUnexpectedCharactersMessage: function(t, e, n, r, o) {
                    return "unexpected character: ->".concat(t.charAt(e), "<- at offset: ").concat(e, ",") + " skipped ".concat(n, " characters.")
                }
            }
        },
        601836: function(t, e, n) {
            "use strict";
            var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.canMatchCharCode = e.firstCharOptimizedIndices = e.getOptimizedStartCodesIndices = e.failedOptimizationPrefixMsg = void 0;
            var a = i(n(956449)),
                u = i(n(619747)),
                s = i(n(539754)),
                c = i(n(907309)),
                l = i(n(935880)),
                f = i(n(679859)),
                d = () => n(917164),
                p = "Complement Sets are not supported for first char optimization";

            function h(t, e, n) {
                switch (t.type) {
                    case "Disjunction":
                        for (var r = 0; r < t.value.length; r++) h(t.value[r], e, n);
                        break;
                    case "Alternative":
                        for (var o = t.value, r = 0; r < o.length; r++) {
                            var i = o[r];
                            switch (i.type) {
                                case "EndAnchor":
                                case "GroupBackReference":
                                case "Lookahead":
                                case "NegativeLookahead":
                                case "StartAnchor":
                                case "WordBoundary":
                                case "NonWordBoundary":
                                    continue
                            }
                            switch (i.type) {
                                case "Character":
                                    T(i.value, e, n);
                                    break;
                                case "Set":
                                    if (!0 === i.complement) throw Error(p);
                                    (0, s.default)(i.value, function(t) {
                                        if ("number" == typeof t) T(t, e, n);
                                        else if (!0 === n)
                                            for (var r = t.from; r <= t.to; r++) T(r, e, n);
                                        else {
                                            for (var r = t.from; r <= t.to && r < d().minOptimizationVal; r++) T(r, e, n);
                                            if (t.to >= d().minOptimizationVal)
                                                for (var o = t.from >= d().minOptimizationVal ? t.from : d().minOptimizationVal, i = t.to, a = (0, d().charCodeToOptimizedIndex)(o), u = (0, d().charCodeToOptimizedIndex)(i), s = a; s <= u; s++) e[s] = s
                                        }
                                    });
                                    break;
                                case "Group":
                                    h(i.value, e, n);
                                    break;
                                default:
                                    throw Error("Non Exhaustive Match")
                            }
                            var c = void 0 !== i.quantifier && 0 === i.quantifier.atLeast;
                            if ("Group" === i.type && !1 === function t(e) {
                                    var n = e.quantifier;
                                    return !!n && 0 === n.atLeast || !!e.value && ((0, a.default)(e.value) ? (0, u.default)(e.value, t) : t(e.value))
                                }(i) || "Group" !== i.type && !1 === c) break
                        }
                        break;
                    default:
                        throw Error("non exhaustive match!")
                }
                return (0, l.default)(e)
            }

            function T(t, e, n) {
                var r = (0, d().charCodeToOptimizedIndex)(t);
                e[r] = r, !0 === n && function(t, e) {
                    var n = String.fromCharCode(t),
                        r = n.toUpperCase();
                    if (r !== n) {
                        var o = (0, d().charCodeToOptimizedIndex)(r.charCodeAt(0));
                        e[o] = o
                    } else {
                        var i = n.toLowerCase();
                        if (i !== n) {
                            var o = (0, d().charCodeToOptimizedIndex)(i.charCodeAt(0));
                            e[o] = o
                        }
                    }
                }(t, e)
            }

            function m(t, e) {
                return (0, c.default)(t.value, function(t) {
                    return "number" == typeof t ? (0, f.default)(e, t) : void 0 !== (0, c.default)(e, function(e) {
                        return t.from <= e && e <= t.to
                    })
                })
            }
            e.failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n', e.getOptimizedStartCodesIndices = function(t, r) {
                void 0 === r && (r = !1);
                try {
                    var o = (0, n(628540).getRegExpAst)(t);
                    return h(o.value, {}, o.flags.ignoreCase)
                } catch (o) {
                    if (o.message === p) r && (0, n(191444).PRINT_WARNING)("".concat(e.failedOptimizationPrefixMsg) + "	Unable to optimize: < ".concat(t.toString(), " >\n") + "	Complement Sets cannot be automatically optimized.\n	This will disable the lexer's first char optimizations.\n	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.");
                    else {
                        var i = "";
                        r && (i = "\n	This will disable the lexer's first char optimizations.\n	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details."), (0, n(191444).PRINT_ERROR)("".concat(e.failedOptimizationPrefixMsg, "\n") + "	Failed parsing: < ".concat(t.toString(), " >\n") + "	Using the regexp-to-ast library version: ".concat(n(562475).VERSION, "\n") + "	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues" + i)
                    }
                }
                return []
            }, e.firstCharOptimizedIndices = h;
            var y = function(t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return n.targetCharCodes = e, n.found = !1, n
                }
                return o(e, t), e.prototype.visitChildren = function(e) {
                    if (!0 !== this.found) {
                        switch (e.type) {
                            case "Lookahead":
                                this.visitLookahead(e);
                                return;
                            case "NegativeLookahead":
                                this.visitNegativeLookahead(e);
                                return
                        }
                        t.prototype.visitChildren.call(this, e)
                    }
                }, e.prototype.visitCharacter = function(t) {
                    (0, f.default)(this.targetCharCodes, t.value) && (this.found = !0)
                }, e.prototype.visitSet = function(t) {
                    t.complement ? void 0 === m(t, this.targetCharCodes) && (this.found = !0) : void 0 !== m(t, this.targetCharCodes) && (this.found = !0)
                }, e
            }(n(562475).BaseRegExpVisitor);
            e.canMatchCharCode = function(t, e) {
                if (!(e instanceof RegExp)) return void 0 !== (0, c.default)(e, function(e) {
                    return (0, f.default)(t, e.charCodeAt(0))
                });
                var r = (0, n(628540).getRegExpAst)(e),
                    o = new y(t);
                return o.visit(r), o.found
            }
        },
        616574: (t, e, n) => {
            t.exports = function(t, e) {
                var r = [];
                return n(480909)(t, function(t, n, o) {
                    e(t, n, o) && r.push(t)
                }), r
            }
        },
        617456: function(t, e, n) {
            "use strict";
            var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.EarlyExitException = e.NotAllInputParsedException = e.NoViableAltException = e.MismatchedTokenException = e.isRecognitionException = void 0;
            var a = i(n(679859)),
                u = "MismatchedTokenException",
                s = "NoViableAltException",
                c = "EarlyExitException",
                l = "NotAllInputParsedException",
                f = [u, s, c, l];
            Object.freeze(f), e.isRecognitionException = function(t) {
                return (0, a.default)(f, t.name)
            };
            var d = function(t) {
                function e(e, n) {
                    var r = this.constructor,
                        o = t.call(this, e) || this;
                    return o.token = n, o.resyncedTokens = [], Object.setPrototypeOf(o, r.prototype), Error.captureStackTrace && Error.captureStackTrace(o, o.constructor), o
                }
                return o(e, t), e
            }(Error);
            e.MismatchedTokenException = function(t) {
                function e(e, n, r) {
                    var o = t.call(this, e, n) || this;
                    return o.previousToken = r, o.name = u, o
                }
                return o(e, t), e
            }(d), e.NoViableAltException = function(t) {
                function e(e, n, r) {
                    var o = t.call(this, e, n) || this;
                    return o.previousToken = r, o.name = s, o
                }
                return o(e, t), e
            }(d), e.NotAllInputParsedException = function(t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    return r.name = l, r
                }
                return o(e, t), e
            }(d), e.EarlyExitException = function(t) {
                function e(e, n, r) {
                    var o = t.call(this, e, n) || this;
                    return o.previousToken = r, o.name = c, o
                }
                return o(e, t), e
            }(d)
        },
        619747: (t, e, n) => {
            t.exports = function(t, e, r) {
                var o = n(956449)(t) ? n(917277) : n(623777);
                return r && n(936800)(t, e, r) && (e = void 0), o(t, n(315389)(e, 3))
            }
        },
        623777: (t, e, n) => {
            t.exports = function(t, e) {
                var r = !0;
                return n(480909)(t, function(t, n, o) {
                    return r = !!e(t, n, o)
                }), r
            }
        },
        628540: (t, e, n) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.clearRegExpParserCache = e.getRegExpAst = void 0;
            var r = {},
                o = new(n(562475)).RegExpParser;
            e.getRegExpAst = function(t) {
                var e = t.toString();
                if (r.hasOwnProperty(e)) return r[e];
                var n = o.pattern(e);
                return r[e] = n, n
            }, e.clearRegExpParserCache = function() {
                r = {}
            }
        },
        635461: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ErrorHandler = void 0;
            var o = r(n(761448)),
                i = r(n(932629));
            e.ErrorHandler = function() {
                function t() {}
                return t.prototype.initErrorHandler = function(t) {
                    this._errors = [], this.errorMessageProvider = (0, o.default)(t, "errorMessageProvider") ? t.errorMessageProvider : n(358165).DEFAULT_PARSER_CONFIG.errorMessageProvider
                }, t.prototype.SAVE_ERROR = function(t) {
                    if ((0, n(617456).isRecognitionException)(t)) return t.context = {
                        ruleStack: this.getHumanReadableRuleStack(),
                        ruleOccurrenceStack: (0, i.default)(this.RULE_OCCURRENCE_STACK)
                    }, this._errors.push(t), t;
                    throw Error("Trying to save an Error which is not a RecognitionException")
                }, Object.defineProperty(t.prototype, "errors", {
                    get: function() {
                        return (0, i.default)(this._errors)
                    },
                    set: function(t) {
                        this._errors = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.raiseEarlyExitException = function(t, e, r) {
                    for (var o = this.getCurrRuleFullName(), i = this.getGAstProductions()[o], a = (0, n(210816).getLookaheadPathsForOptionalProd)(t, i, e, this.maxLookahead)[0], u = [], s = 1; s <= this.maxLookahead; s++) u.push(this.LA(s));
                    var c = this.errorMessageProvider.buildEarlyExitMessage({
                        expectedIterationPaths: a,
                        actual: u,
                        previous: this.LA(0),
                        customUserDescription: r,
                        ruleName: o
                    });
                    throw this.SAVE_ERROR(new(n(617456)).EarlyExitException(c, this.LA(1), this.LA(0)))
                }, t.prototype.raiseNoAltException = function(t, e) {
                    for (var r = this.getCurrRuleFullName(), o = this.getGAstProductions()[r], i = (0, n(210816).getLookaheadPathsForOr)(t, o, this.maxLookahead), a = [], u = 1; u <= this.maxLookahead; u++) a.push(this.LA(u));
                    var s = this.LA(0),
                        c = this.errorMessageProvider.buildNoViableAltMessage({
                            expectedPathsPerAlt: i,
                            actual: a,
                            previous: s,
                            customUserDescription: e,
                            ruleName: this.getCurrRuleFullName()
                        });
                    throw this.SAVE_ERROR(new(n(617456)).NoViableAltException(c, this.LA(1), s))
                }, t
            }()
        },
        685558: t => {
            t.exports = function(t, e, n, r, o) {
                return o(t, function(t, o, i) {
                    n = r ? (r = !1, t) : e(n, t, o, i)
                }), n
            }
        },
        687148: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RestWalker = void 0;
            var o = r(n(3739)),
                i = r(n(539754));

            function a(t, e, r) {
                return [new(n(486906)).Option({
                    definition: [new(n(486906)).Terminal({
                        terminalType: t.separator
                    })].concat(t.definition)
                })].concat(e, r)
            }
            e.RestWalker = function() {
                function t() {}
                return t.prototype.walk = function(t, e) {
                    var r = this;
                    void 0 === e && (e = []), (0, i.default)(t.definition, function(i, a) {
                        var u = (0, o.default)(t.definition, a + 1);
                        if (i instanceof n(486906).NonTerminal) r.walkProdRef(i, u, e);
                        else if (i instanceof n(486906).Terminal) r.walkTerminal(i, u, e);
                        else if (i instanceof n(486906).Alternative) r.walkFlat(i, u, e);
                        else if (i instanceof n(486906).Option) r.walkOption(i, u, e);
                        else if (i instanceof n(486906).RepetitionMandatory) r.walkAtLeastOne(i, u, e);
                        else if (i instanceof n(486906).RepetitionMandatoryWithSeparator) r.walkAtLeastOneSep(i, u, e);
                        else if (i instanceof n(486906).RepetitionWithSeparator) r.walkManySep(i, u, e);
                        else if (i instanceof n(486906).Repetition) r.walkMany(i, u, e);
                        else if (i instanceof n(486906).Alternation) r.walkOr(i, u, e);
                        else throw Error("non exhaustive match")
                    })
                }, t.prototype.walkTerminal = function(t, e, n) {}, t.prototype.walkProdRef = function(t, e, n) {}, t.prototype.walkFlat = function(t, e, n) {
                    var r = e.concat(n);
                    this.walk(t, r)
                }, t.prototype.walkOption = function(t, e, n) {
                    var r = e.concat(n);
                    this.walk(t, r)
                }, t.prototype.walkAtLeastOne = function(t, e, r) {
                    var o = [new(n(486906)).Option({
                        definition: t.definition
                    })].concat(e, r);
                    this.walk(t, o)
                }, t.prototype.walkAtLeastOneSep = function(t, e, n) {
                    var r = a(t, e, n);
                    this.walk(t, r)
                }, t.prototype.walkMany = function(t, e, r) {
                    var o = [new(n(486906)).Option({
                        definition: t.definition
                    })].concat(e, r);
                    this.walk(t, o)
                }, t.prototype.walkManySep = function(t, e, n) {
                    var r = a(t, e, n);
                    this.walk(t, r)
                }, t.prototype.walkOr = function(t, e, r) {
                    var o = this,
                        a = e.concat(r);
                    (0, i.default)(t.definition, function(t) {
                        var e = new(n(486906)).Alternative({
                            definition: [t]
                        });
                        o.walk(e, a)
                    })
                }, t
            }()
        },
        687440: (t, e, n) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.GAstVisitor = void 0, e.GAstVisitor = function() {
                function t() {}
                return t.prototype.visit = function(t) {
                    switch (t.constructor) {
                        case n(765223).NonTerminal:
                            return this.visitNonTerminal(t);
                        case n(765223).Alternative:
                            return this.visitAlternative(t);
                        case n(765223).Option:
                            return this.visitOption(t);
                        case n(765223).RepetitionMandatory:
                            return this.visitRepetitionMandatory(t);
                        case n(765223).RepetitionMandatoryWithSeparator:
                            return this.visitRepetitionMandatoryWithSeparator(t);
                        case n(765223).RepetitionWithSeparator:
                            return this.visitRepetitionWithSeparator(t);
                        case n(765223).Repetition:
                            return this.visitRepetition(t);
                        case n(765223).Alternation:
                            return this.visitAlternation(t);
                        case n(765223).Terminal:
                            return this.visitTerminal(t);
                        case n(765223).Rule:
                            return this.visitRule(t);
                        default:
                            throw Error("non exhaustive match")
                    }
                }, t.prototype.visitNonTerminal = function(t) {}, t.prototype.visitAlternative = function(t) {}, t.prototype.visitOption = function(t) {}, t.prototype.visitRepetition = function(t) {}, t.prototype.visitRepetitionMandatory = function(t) {}, t.prototype.visitRepetitionMandatoryWithSeparator = function(t) {}, t.prototype.visitRepetitionWithSeparator = function(t) {}, t.prototype.visitAlternation = function(t) {}, t.prototype.visitTerminal = function(t) {}, t.prototype.visitRule = function(t) {}, t
            }()
        },
        693210: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TreeBuilder = void 0;
            var o = r(n(263950)),
                i = r(n(761448)),
                a = r(n(395950)),
                u = r(n(762216));
            e.TreeBuilder = function() {
                function t() {}
                return t.prototype.initTreeBuilder = function(t) {
                    if (this.CST_STACK = [], this.outputCst = t.outputCst, this.nodeLocationTracking = (0, i.default)(t, "nodeLocationTracking") ? t.nodeLocationTracking : n(358165).DEFAULT_PARSER_CONFIG.nodeLocationTracking, this.outputCst)
                        if (/full/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = n(388245).setNodeLocationFull, this.setNodeLocationFromNode = n(388245).setNodeLocationFull, this.cstPostRule = o.default, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = o.default, this.setNodeLocationFromNode = o.default, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
                        else if (/onlyOffset/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = n(388245).setNodeLocationOnlyOffset, this.setNodeLocationFromNode = n(388245).setNodeLocationOnlyOffset, this.cstPostRule = o.default, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = o.default, this.setNodeLocationFromNode = o.default, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
                    else if (/none/i.test(this.nodeLocationTracking)) this.setNodeLocationFromToken = o.default, this.setNodeLocationFromNode = o.default, this.cstPostRule = o.default, this.setInitialNodeLocation = o.default;
                    else throw Error('Invalid <nodeLocationTracking> config option: "'.concat(t.nodeLocationTracking, '"'));
                    else this.cstInvocationStateUpdate = o.default, this.cstFinallyStateUpdate = o.default, this.cstPostTerminal = o.default, this.cstPostNonTerminal = o.default, this.cstPostRule = o.default
                }, t.prototype.setInitialNodeLocationOnlyOffsetRecovery = function(t) {
                    t.location = {
                        startOffset: NaN,
                        endOffset: NaN
                    }
                }, t.prototype.setInitialNodeLocationOnlyOffsetRegular = function(t) {
                    t.location = {
                        startOffset: this.LA(1).startOffset,
                        endOffset: NaN
                    }
                }, t.prototype.setInitialNodeLocationFullRecovery = function(t) {
                    t.location = {
                        startOffset: NaN,
                        startLine: NaN,
                        startColumn: NaN,
                        endOffset: NaN,
                        endLine: NaN,
                        endColumn: NaN
                    }
                }, t.prototype.setInitialNodeLocationFullRegular = function(t) {
                    var e = this.LA(1);
                    t.location = {
                        startOffset: e.startOffset,
                        startLine: e.startLine,
                        startColumn: e.startColumn,
                        endOffset: NaN,
                        endLine: NaN,
                        endColumn: NaN
                    }
                }, t.prototype.cstInvocationStateUpdate = function(t) {
                    var e = {
                        name: t,
                        children: Object.create(null)
                    };
                    this.setInitialNodeLocation(e), this.CST_STACK.push(e)
                }, t.prototype.cstFinallyStateUpdate = function() {
                    this.CST_STACK.pop()
                }, t.prototype.cstPostRuleFull = function(t) {
                    var e = this.LA(0),
                        n = t.location;
                    n.startOffset <= e.startOffset == !0 ? (n.endOffset = e.endOffset, n.endLine = e.endLine, n.endColumn = e.endColumn) : (n.startOffset = NaN, n.startLine = NaN, n.startColumn = NaN)
                }, t.prototype.cstPostRuleOnlyOffset = function(t) {
                    var e = this.LA(0),
                        n = t.location;
                    n.startOffset <= e.startOffset == !0 ? n.endOffset = e.endOffset : n.startOffset = NaN
                }, t.prototype.cstPostTerminal = function(t, e) {
                    var r = this.CST_STACK[this.CST_STACK.length - 1];
                    (0, n(388245).addTerminalToCst)(r, e, t), this.setNodeLocationFromToken(r.location, e)
                }, t.prototype.cstPostNonTerminal = function(t, e) {
                    var r = this.CST_STACK[this.CST_STACK.length - 1];
                    (0, n(388245).addNoneTerminalToCst)(r, e, t), this.setNodeLocationFromNode(r.location, t.location)
                }, t.prototype.getBaseCstVisitorConstructor = function() {
                    if ((0, u.default)(this.baseCstVisitorConstructor)) {
                        var t = (0, n(292228).createBaseSemanticVisitorConstructor)(this.className, (0, a.default)(this.gastProductionsCache));
                        return this.baseCstVisitorConstructor = t, t
                    }
                    return this.baseCstVisitorConstructor
                }, t.prototype.getBaseCstVisitorConstructorWithDefaults = function() {
                    if ((0, u.default)(this.baseCstVisitorWithDefaultsConstructor)) {
                        var t = (0, n(292228).createBaseVisitorConstructorWithDefaults)(this.className, (0, a.default)(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
                        return this.baseCstVisitorWithDefaultsConstructor = t, t
                    }
                    return this.baseCstVisitorWithDefaultsConstructor
                }, t.prototype.getLastExplicitRuleShortName = function() {
                    var t = this.RULE_STACK;
                    return t[t.length - 1]
                }, t.prototype.getPreviousExplicitRuleShortName = function() {
                    var t = this.RULE_STACK;
                    return t[t.length - 2]
                }, t.prototype.getLastExplicitRuleOccurrenceIndex = function() {
                    var t = this.RULE_OCCURRENCE_STACK;
                    return t[t.length - 1]
                }, t
            }()
        },
        696953: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.genDts = void 0;
            var o = r(n(835970)),
                i = r(n(956449)),
                a = r(n(455378)),
                u = r(n(940860)),
                s = r(n(763375)),
                c = r(n(555808));

            function l(t) {
                return "token" === t.kind ? "IToken" : f(t.name)
            }

            function f(t) {
                return (0, c.default)(t) + "CstNode"
            }

            function d(t) {
                return (0, c.default)(t) + "CstChildren"
            }
            e.genDts = function(t, e) {
                var n, r, c = [];
                return c = (c = c.concat('import type { CstNode, ICstVisitor, IToken } from "chevrotain";')).concat((0, o.default)((0, a.default)(t, function(t) {
                    var e, n, r, o, c, p;
                    return [(r = f((n = e = t).name), o = d(n.name), "export interface ".concat(r, ' extends CstNode {\n  name: "').concat(n.name, '";\n  children: ').concat(o, ";\n}")), (p = d((c = e).name), "export type ".concat(p, " = {\n  ").concat((0, a.default)(c.properties, function(t) {
                        var e, n;
                        return n = function(t) {
                            if (!(0, i.default)(t)) return l(t);
                            var e = (0, s.default)((0, a.default)(t, function(t) {
                                return l(t)
                            }));
                            return "(" + (0, u.default)(e, function(t, e) {
                                return t + " | " + e
                            }) + ")"
                        }((e = t).type), "".concat(e.name).concat(e.optional ? "?" : "", ": ").concat(n, "[];")
                    }).join("\n  "), "\n};"))]
                }))), e.includeVisitorInterface && (c = c.concat((n = e.visitorInterfaceName, r = t, "export interface ".concat(n, "<IN, OUT> extends ICstVisitor<IN, OUT> {\n  ").concat((0, a.default)(r, function(t) {
                    var e, n;
                    return n = d((e = t).name), "".concat(e.name, "(children: ").concat(n, ", param?: IN): OUT;")
                }).join("\n  "), "\n}")))), c.join("\n\n") + "\n"
            }
        },
        706663: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PRINT_WARNING = e.PRINT_ERROR = void 0, e.PRINT_ERROR = function(t) {
                console && console.error && console.error("Error: ".concat(t))
            }, e.PRINT_WARNING = function(t) {
                console && console.warn && console.warn("Warning: ".concat(t))
            }
        },
        756170: (t, e, n) => {
            t.exports = n(400912)
        },
        762216: t => {
            t.exports = function(t) {
                return void 0 === t
            }
        },
        765223: function(t, e, n) {
            "use strict";
            var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.serializeProduction = e.serializeGrammar = e.Terminal = e.Alternation = e.RepetitionWithSeparator = e.Repetition = e.RepetitionMandatoryWithSeparator = e.RepetitionMandatory = e.Option = e.Alternative = e.Rule = e.NonTerminal = e.AbstractProduction = void 0;
            var a = i(n(455378)),
                u = i(n(539754)),
                s = i(n(185015)),
                c = i(n(469607)),
                l = i(n(971086)),
                f = i(n(386139)),
                d = function() {
                    function t(t) {
                        this._definition = t
                    }
                    return Object.defineProperty(t.prototype, "definition", {
                        get: function() {
                            return this._definition
                        },
                        set: function(t) {
                            this._definition = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.accept = function(t) {
                        t.visit(this), (0, u.default)(this.definition, function(e) {
                            e.accept(t)
                        })
                    }, t
                }();
            e.AbstractProduction = d;
            var p = function(t) {
                function e(e) {
                    var n = t.call(this, []) || this;
                    return n.idx = 1, (0, f.default)(n, (0, l.default)(e, function(t) {
                        return void 0 !== t
                    })), n
                }
                return o(e, t), Object.defineProperty(e.prototype, "definition", {
                    get: function() {
                        return void 0 !== this.referencedRule ? this.referencedRule.definition : []
                    },
                    set: function(t) {},
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.accept = function(t) {
                    t.visit(this)
                }, e
            }(d);
            e.NonTerminal = p;
            var h = function(t) {
                function e(e) {
                    var n = t.call(this, e.definition) || this;
                    return n.orgText = "", (0, f.default)(n, (0, l.default)(e, function(t) {
                        return void 0 !== t
                    })), n
                }
                return o(e, t), e
            }(d);
            e.Rule = h;
            var T = function(t) {
                function e(e) {
                    var n = t.call(this, e.definition) || this;
                    return n.ignoreAmbiguities = !1, (0, f.default)(n, (0, l.default)(e, function(t) {
                        return void 0 !== t
                    })), n
                }
                return o(e, t), e
            }(d);
            e.Alternative = T;
            var m = function(t) {
                function e(e) {
                    var n = t.call(this, e.definition) || this;
                    return n.idx = 1, (0, f.default)(n, (0, l.default)(e, function(t) {
                        return void 0 !== t
                    })), n
                }
                return o(e, t), e
            }(d);
            e.Option = m;
            var y = function(t) {
                function e(e) {
                    var n = t.call(this, e.definition) || this;
                    return n.idx = 1, (0, f.default)(n, (0, l.default)(e, function(t) {
                        return void 0 !== t
                    })), n
                }
                return o(e, t), e
            }(d);
            e.RepetitionMandatory = y;
            var E = function(t) {
                function e(e) {
                    var n = t.call(this, e.definition) || this;
                    return n.idx = 1, (0, f.default)(n, (0, l.default)(e, function(t) {
                        return void 0 !== t
                    })), n
                }
                return o(e, t), e
            }(d);
            e.RepetitionMandatoryWithSeparator = E;
            var v = function(t) {
                function e(e) {
                    var n = t.call(this, e.definition) || this;
                    return n.idx = 1, (0, f.default)(n, (0, l.default)(e, function(t) {
                        return void 0 !== t
                    })), n
                }
                return o(e, t), e
            }(d);
            e.Repetition = v;
            var _ = function(t) {
                function e(e) {
                    var n = t.call(this, e.definition) || this;
                    return n.idx = 1, (0, f.default)(n, (0, l.default)(e, function(t) {
                        return void 0 !== t
                    })), n
                }
                return o(e, t), e
            }(d);
            e.RepetitionWithSeparator = _;
            var O = function(t) {
                function e(e) {
                    var n = t.call(this, e.definition) || this;
                    return n.idx = 1, n.ignoreAmbiguities = !1, n.hasPredicates = !1, (0, f.default)(n, (0, l.default)(e, function(t) {
                        return void 0 !== t
                    })), n
                }
                return o(e, t), Object.defineProperty(e.prototype, "definition", {
                    get: function() {
                        return this._definition
                    },
                    set: function(t) {
                        this._definition = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), e
            }(d);
            e.Alternation = O;
            var R = function() {
                function t(t) {
                    this.idx = 1, (0, f.default)(this, (0, l.default)(t, function(t) {
                        return void 0 !== t
                    }))
                }
                return t.prototype.accept = function(t) {
                    t.visit(this)
                }, t
            }();

            function g(t) {
                function e(t) {
                    return (0, a.default)(t, g)
                }
                if (t instanceof p) {
                    var n = {
                        type: "NonTerminal",
                        name: t.nonTerminalName,
                        idx: t.idx
                    };
                    return (0, s.default)(t.label) && (n.label = t.label), n
                }
                if (t instanceof T) return {
                    type: "Alternative",
                    definition: e(t.definition)
                };
                if (t instanceof m) return {
                    type: "Option",
                    idx: t.idx,
                    definition: e(t.definition)
                };
                if (t instanceof y) return {
                    type: "RepetitionMandatory",
                    idx: t.idx,
                    definition: e(t.definition)
                };
                if (t instanceof E) return {
                    type: "RepetitionMandatoryWithSeparator",
                    idx: t.idx,
                    separator: g(new R({
                        terminalType: t.separator
                    })),
                    definition: e(t.definition)
                };
                else if (t instanceof _) return {
                    type: "RepetitionWithSeparator",
                    idx: t.idx,
                    separator: g(new R({
                        terminalType: t.separator
                    })),
                    definition: e(t.definition)
                };
                else if (t instanceof v) return {
                    type: "Repetition",
                    idx: t.idx,
                    definition: e(t.definition)
                };
                else if (t instanceof O) return {
                    type: "Alternation",
                    idx: t.idx,
                    definition: e(t.definition)
                };
                else if (t instanceof R) {
                    var r, o, i = {
                        type: "Terminal",
                        name: t.terminalType.name,
                        label: (r = o = t.terminalType, (0, s.default)(r.LABEL) && "" !== r.LABEL) ? o.LABEL : o.name,
                        idx: t.idx
                    };
                    (0, s.default)(t.label) && (i.terminalLabel = t.label);
                    var u = t.terminalType.PATTERN;
                    return t.terminalType.PATTERN && (i.pattern = (0, c.default)(u) ? u.source : u), i
                } else if (t instanceof h) return {
                    type: "Rule",
                    name: t.name,
                    orgText: t.orgText,
                    definition: e(t.definition)
                };
                else throw Error("non exhaustive match")
            }
            e.Terminal = R, e.serializeGrammar = function(t) {
                return (0, a.default)(t, g)
            }, e.serializeProduction = g
        },
        770038: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.toFastProperties = void 0, e.toFastProperties = function(t) {
                function e() {}
                e.prototype = t;
                var n = new e;

                function r() {
                    return typeof n.bar
                }
                return r(), r(), t
            }
        },
        784958: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getKeyForAutomaticLookahead = e.AT_LEAST_ONE_SEP_IDX = e.MANY_SEP_IDX = e.AT_LEAST_ONE_IDX = e.MANY_IDX = e.OPTION_IDX = e.OR_IDX = e.BITS_FOR_ALT_IDX = e.BITS_FOR_RULE_IDX = e.BITS_FOR_OCCURRENCE_IDX = e.BITS_FOR_METHOD_TYPE = void 0, e.BITS_FOR_METHOD_TYPE = 4, e.BITS_FOR_OCCURRENCE_IDX = 8, e.BITS_FOR_RULE_IDX = 12, e.BITS_FOR_ALT_IDX = 8, e.OR_IDX = 1 << e.BITS_FOR_OCCURRENCE_IDX, e.OPTION_IDX = 2 << e.BITS_FOR_OCCURRENCE_IDX, e.MANY_IDX = 3 << e.BITS_FOR_OCCURRENCE_IDX, e.AT_LEAST_ONE_IDX = 4 << e.BITS_FOR_OCCURRENCE_IDX, e.MANY_SEP_IDX = 5 << e.BITS_FOR_OCCURRENCE_IDX, e.AT_LEAST_ONE_SEP_IDX = 6 << e.BITS_FOR_OCCURRENCE_IDX, e.getKeyForAutomaticLookahead = function(t, e, n) {
                return n | e | t
            }, e.BITS_FOR_ALT_IDX
        },
        794227: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.applyMixins = void 0, e.applyMixins = function(t, e) {
                e.forEach(function(e) {
                    var n = e.prototype;
                    Object.getOwnPropertyNames(n).forEach(function(r) {
                        if ("constructor" !== r) {
                            var o = Object.getOwnPropertyDescriptor(n, r);
                            o && (o.get || o.set) ? Object.defineProperty(t.prototype, r, o) : t.prototype[r] = e.prototype[r]
                        }
                    })
                })
            }
        },
        841253: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ContentAssist = void 0;
            var o = r(n(756170)),
                i = r(n(762216));
            e.ContentAssist = function() {
                function t() {}
                return t.prototype.initContentAssist = function() {}, t.prototype.computeContentAssist = function(t, e) {
                    var r = this.gastProductionsCache[t];
                    if ((0, i.default)(r)) throw Error("Rule ->".concat(t, "<- does not exist in this grammar."));
                    return (0, n(437310).nextPossibleTokensAfter)([r], e, this.tokenMatcher, this.maxLookahead)
                }, t.prototype.getNextPossibleTokenTypes = function(t) {
                    var e = (0, o.default)(t.ruleStack),
                        r = this.getGAstProductions()[e];
                    return new(n(437310)).NextAfterTokenWalker(r, t).startWalking()
                }, t
            }()
        },
        881437: (t, e, n) => {
            t.exports = function(t) {
                return n(540346)(t) && "[object RegExp]" == n(472552)(t)
            }
        },
        901238: (t, e, n) => {
            "use strict";
            e.iX = e.jT = e.IL = e.Ro = e.C_ = e.Ug = e._3 = e.BK = e.jO = e.Pp = e.Cy = e.$P = e.Y2 = e.c$ = e.wL = e.EF = e.ak = e.PW = e.X2 = e.xd = e.Vv = e.lC = e.DN = e.my = e.T6 = e.jk = e.vb = e.G = e.Sk = e.LT = e.fx = e.Ey = e._J = e.JG = e.mT = e.D2 = e.jr = e.cA = e.xv = void 0, Object.defineProperty(e, "xv", {
                enumerable: !0,
                get: function() {
                    return n(121482).VERSION
                }
            }), Object.defineProperty(e, "cA", {
                enumerable: !0,
                get: function() {
                    return n(358165).CstParser
                }
            }), Object.defineProperty(e, "jr", {
                enumerable: !0,
                get: function() {
                    return n(358165).EmbeddedActionsParser
                }
            }), Object.defineProperty(e, "D2", {
                enumerable: !0,
                get: function() {
                    return n(358165).ParserDefinitionErrorType
                }
            }), Object.defineProperty(e, "mT", {
                enumerable: !0,
                get: function() {
                    return n(358165).EMPTY_ALT
                }
            }), Object.defineProperty(e, "JG", {
                enumerable: !0,
                get: function() {
                    return n(560458).Lexer
                }
            }), Object.defineProperty(e, "_J", {
                enumerable: !0,
                get: function() {
                    return n(560458).LexerDefinitionErrorType
                }
            }), Object.defineProperty(e, "Ey", {
                enumerable: !0,
                get: function() {
                    return n(991912).createToken
                }
            }), Object.defineProperty(e, "fx", {
                enumerable: !0,
                get: function() {
                    return n(991912).createTokenInstance
                }
            }), Object.defineProperty(e, "LT", {
                enumerable: !0,
                get: function() {
                    return n(991912).EOF
                }
            }), Object.defineProperty(e, "Sk", {
                enumerable: !0,
                get: function() {
                    return n(991912).tokenLabel
                }
            }), Object.defineProperty(e, "G", {
                enumerable: !0,
                get: function() {
                    return n(991912).tokenMatcher
                }
            }), Object.defineProperty(e, "vb", {
                enumerable: !0,
                get: function() {
                    return n(991912).tokenName
                }
            }), Object.defineProperty(e, "jk", {
                enumerable: !0,
                get: function() {
                    return n(210816).getLookaheadPaths
                }
            }), Object.defineProperty(e, "T6", {
                enumerable: !0,
                get: function() {
                    return n(477350).LLkLookaheadStrategy
                }
            }), Object.defineProperty(e, "my", {
                enumerable: !0,
                get: function() {
                    return n(918259).defaultParserErrorProvider
                }
            }), Object.defineProperty(e, "DN", {
                enumerable: !0,
                get: function() {
                    return n(617456).EarlyExitException
                }
            }), Object.defineProperty(e, "lC", {
                enumerable: !0,
                get: function() {
                    return n(617456).isRecognitionException
                }
            }), Object.defineProperty(e, "Vv", {
                enumerable: !0,
                get: function() {
                    return n(617456).MismatchedTokenException
                }
            }), Object.defineProperty(e, "xd", {
                enumerable: !0,
                get: function() {
                    return n(617456).NotAllInputParsedException
                }
            }), Object.defineProperty(e, "X2", {
                enumerable: !0,
                get: function() {
                    return n(617456).NoViableAltException
                }
            }), Object.defineProperty(e, "PW", {
                enumerable: !0,
                get: function() {
                    return n(599034).defaultLexerErrorProvider
                }
            }), Object.defineProperty(e, "ak", {
                enumerable: !0,
                get: function() {
                    return n(486906).Alternation
                }
            }), Object.defineProperty(e, "EF", {
                enumerable: !0,
                get: function() {
                    return n(486906).Alternative
                }
            }), Object.defineProperty(e, "wL", {
                enumerable: !0,
                get: function() {
                    return n(486906).NonTerminal
                }
            }), Object.defineProperty(e, "c$", {
                enumerable: !0,
                get: function() {
                    return n(486906).Option
                }
            }), Object.defineProperty(e, "Y2", {
                enumerable: !0,
                get: function() {
                    return n(486906).Repetition
                }
            }), Object.defineProperty(e, "$P", {
                enumerable: !0,
                get: function() {
                    return n(486906).RepetitionMandatory
                }
            }), Object.defineProperty(e, "Cy", {
                enumerable: !0,
                get: function() {
                    return n(486906).RepetitionMandatoryWithSeparator
                }
            }), Object.defineProperty(e, "Pp", {
                enumerable: !0,
                get: function() {
                    return n(486906).RepetitionWithSeparator
                }
            }), Object.defineProperty(e, "jO", {
                enumerable: !0,
                get: function() {
                    return n(486906).Rule
                }
            }), Object.defineProperty(e, "BK", {
                enumerable: !0,
                get: function() {
                    return n(486906).Terminal
                }
            }), Object.defineProperty(e, "_3", {
                enumerable: !0,
                get: function() {
                    return n(486906).serializeGrammar
                }
            }), Object.defineProperty(e, "Ug", {
                enumerable: !0,
                get: function() {
                    return n(486906).serializeProduction
                }
            }), Object.defineProperty(e, "C_", {
                enumerable: !0,
                get: function() {
                    return n(486906).GAstVisitor
                }
            }), Object.defineProperty(e, "Ro", {
                enumerable: !0,
                get: function() {
                    return n(310456).generateCstDts
                }
            }), e.IL = function() {
                console.warn("The clearCache function was 'soft' removed from the Chevrotain API.\n	 It performs no action other than printing this message.\n	 Please avoid using it as it will be completely removed in the future")
            }, Object.defineProperty(e, "jT", {
                enumerable: !0,
                get: function() {
                    return n(919037).createSyntaxDiagramsCode
                }
            }), e.iX = function() {
                throw Error("The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.	\nSee: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0")
            }
        },
        906561: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PerformanceTracer = void 0;
            var o = r(n(761448));
            e.PerformanceTracer = function() {
                function t() {}
                return t.prototype.initPerformanceTracer = function(t) {
                    if ((0, o.default)(t, "traceInitPerf")) {
                        var e = t.traceInitPerf,
                            r = "number" == typeof e;
                        this.traceInitMaxIdent = r ? e : 1 / 0, this.traceInitPerf = r ? e > 0 : e
                    } else this.traceInitMaxIdent = 0, this.traceInitPerf = n(358165).DEFAULT_PARSER_CONFIG.traceInitPerf;
                    this.traceInitIndent = -1
                }, t.prototype.TRACE_INIT = function(t, e) {
                    if (!0 !== this.traceInitPerf) return e();
                    this.traceInitIndent++;
                    var r = Array(this.traceInitIndent + 1).join("	");
                    this.traceInitIndent < this.traceInitMaxIdent && console.log("".concat(r, "--\x3e <").concat(t, ">"));
                    var o = (0, n(191444).timer)(e),
                        i = o.time,
                        a = o.value,
                        u = i > 10 ? console.warn : console.log;
                    return this.traceInitIndent < this.traceInitMaxIdent && u("".concat(r, "<-- <").concat(t, "> time: ").concat(i, "ms")), this.traceInitIndent--, a
                }, t
            }()
        },
        907309: (t, e, n) => {
            t.exports = n(562006)(n(324713))
        },
        917164: function(t, e, n) {
            "use strict";
            var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.charCodeToOptimizedIndex = e.minOptimizationVal = e.buildLineBreakIssueMessage = e.LineTerminatorOptimizedTester = e.isShortPattern = e.isCustomPattern = e.cloneEmptyGroups = e.performWarningRuntimeChecks = e.performRuntimeChecks = e.addStickyFlag = e.addStartOfInput = e.findUnreachablePatterns = e.findModesThatDoNotExist = e.findInvalidGroupType = e.findDuplicatePatterns = e.findUnsupportedFlags = e.findStartOfInputAnchor = e.findEmptyMatchRegExps = e.findEndOfInputAnchor = e.findInvalidPatterns = e.findMissingPatterns = e.validatePatterns = e.analyzeTokenTypes = e.enableSticky = e.disableSticky = e.SUPPORT_STICKY = e.MODES = e.DEFAULT_MODE = void 0;
            var a = i(n(756170)),
                u = i(n(962193)),
                s = i(n(183673)),
                c = i(n(956449)),
                l = i(n(935880)),
                f = i(n(835970)),
                d = i(n(448081)),
                p = i(n(666245)),
                h = i(n(421585)),
                T = i(n(455378)),
                m = i(n(539754)),
                y = i(n(185015)),
                E = i(n(501882)),
                v = i(n(762216)),
                _ = i(n(907309)),
                O = i(n(761448)),
                R = i(n(395950)),
                g = i(n(469607)),
                A = i(n(587612)),
                N = i(n(884684)),
                I = i(n(940860)),
                P = i(n(679859)),
                S = "PATTERN";

            function L(t) {
                var e = (0, A.default)(t, function(t) {
                    return !(0, O.default)(t, S)
                });
                return {
                    errors: (0, T.default)(e, function(t) {
                        return {
                            message: "Token Type: ->" + t.name + "<- missing static 'PATTERN' property",
                            type: n(560458).LexerDefinitionErrorType.MISSING_PATTERN,
                            tokenTypes: [t]
                        }
                    }),
                    valid: (0, p.default)(t, e)
                }
            }

            function k(t) {
                var e = (0, A.default)(t, function(t) {
                    var e = t[S];
                    return !(0, g.default)(e) && !(0, E.default)(e) && !(0, O.default)(e, "exec") && !(0, y.default)(e)
                });
                return {
                    errors: (0, T.default)(e, function(t) {
                        return {
                            message: "Token Type: ->" + t.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
                            type: n(560458).LexerDefinitionErrorType.INVALID_PATTERN,
                            tokenTypes: [t]
                        }
                    }),
                    valid: (0, p.default)(t, e)
                }
            }
            e.DEFAULT_MODE = "defaultMode", e.MODES = "modes", e.SUPPORT_STICKY = "boolean" == typeof RegExp("(?:)").sticky, e.disableSticky = function() {
                e.SUPPORT_STICKY = !1
            }, e.enableSticky = function() {
                e.SUPPORT_STICKY = !0
            }, e.analyzeTokenTypes = function(t, r) {
                var o, i, a, s, l, f, p, _, R, A, L, k, x = (r = (0, N.default)(r, {
                    useSticky: e.SUPPORT_STICKY,
                    debug: !1,
                    safeMode: !1,
                    positionTracking: "full",
                    lineTerminatorCharacters: ["\r", "\n"],
                    tracer: function(t, e) {
                        return e()
                    }
                })).tracer;
                x("initCharCodeToOptimizedIndexMap", function() {
                    if ((0, u.default)(q)) {
                        q = Array(65536);
                        for (var t = 0; t < 65536; t++) q[t] = t > 255 ? 255 + ~~(t / 255) : t
                    }
                }), x("Reject Lexer.NA", function() {
                    o = (0, d.default)(t, function(t) {
                        return t[S] === n(560458).Lexer.NA
                    })
                });
                var C = !1;
                x("Transform Patterns", function() {
                    C = !1, i = (0, T.default)(o, function(t) {
                        var e = t[S];
                        if ((0, g.default)(e)) {
                            var n = e.source;
                            return 1 !== n.length || "^" === n || "$" === n || "." === n || e.ignoreCase ? 2 !== n.length || "\\" !== n[0] || (0, P.default)(["d", "D", "s", "S", "t", "r", "n", "t", "0", "c", "b", "B", "f", "v", "w", "W"], n[1]) ? r.useSticky ? B(e) : W(e) : n[1] : n
                        }
                        if ((0, E.default)(e)) return C = !0, {
                            exec: e
                        };
                        if ("object" == typeof e) return C = !0, e;
                        if ("string" == typeof e)
                            if (1 === e.length) return e;
                            else {
                                var o = new RegExp(e.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"));
                                return r.useSticky ? B(o) : W(o)
                            }
                        throw Error("non exhaustive match")
                    })
                }), x("misc mapping", function() {
                    a = (0, T.default)(o, function(t) {
                        return t.tokenTypeIdx
                    }), s = (0, T.default)(o, function(t) {
                        var e = t.GROUP;
                        if (e !== n(560458).Lexer.SKIPPED) {
                            if ((0, y.default)(e)) return e;
                            if ((0, v.default)(e)) return !1;
                            throw Error("non exhaustive match")
                        }
                    }), l = (0, T.default)(o, function(t) {
                        var e = t.LONGER_ALT;
                        if (e) return (0, c.default)(e) ? (0, T.default)(e, function(t) {
                            return (0, h.default)(o, t)
                        }) : [(0, h.default)(o, e)]
                    }), f = (0, T.default)(o, function(t) {
                        return t.PUSH_MODE
                    }), p = (0, T.default)(o, function(t) {
                        return (0, O.default)(t, "POP_MODE")
                    })
                }), x("Line Terminator Handling", function() {
                    var t = H(r.lineTerminatorCharacters);
                    _ = (0, T.default)(o, function(t) {
                        return !1
                    }), "onlyOffset" !== r.positionTracking && (_ = (0, T.default)(o, function(e) {
                        return (0, O.default)(e, "LINE_BREAKS") ? !!e.LINE_BREAKS : !1 === z(e, t) && (0, n(601836).canMatchCharCode)(t, e.PATTERN)
                    }))
                }), x("Misc Mapping #2", function() {
                    R = (0, T.default)(o, V), A = (0, T.default)(i, K), L = (0, I.default)(o, function(t, e) {
                        var r = e.GROUP;
                        return (0, y.default)(r) && r !== n(560458).Lexer.SKIPPED && (t[r] = []), t
                    }, {}), k = (0, T.default)(i, function(t, e) {
                        return {
                            pattern: i[e],
                            longerAlt: l[e],
                            canLineTerminator: _[e],
                            isCustom: R[e],
                            short: A[e],
                            group: s[e],
                            push: f[e],
                            pop: p[e],
                            tokenTypeIdx: a[e],
                            tokenType: o[e]
                        }
                    })
                });
                var M = !0,
                    b = [];
                return r.safeMode || x("First Char Optimization", function() {
                    b = (0, I.default)(o, function(t, e, o) {
                        if ("string" == typeof e.PATTERN) {
                            var i;
                            X(t, $(e.PATTERN.charCodeAt(0)), k[o])
                        } else if ((0, c.default)(e.START_CHARS_HINT))(0, m.default)(e.START_CHARS_HINT, function(e) {
                            var n = $("string" == typeof e ? e.charCodeAt(0) : e);
                            i !== n && (i = n, X(t, n, k[o]))
                        });
                        else if ((0, g.default)(e.PATTERN))
                            if (e.PATTERN.unicode) M = !1, r.ensureOptimizations && (0, n(191444).PRINT_ERROR)("".concat(n(601836).failedOptimizationPrefixMsg) + "	Unable to analyze < ".concat(e.PATTERN.toString(), " > pattern.\n") + "	The regexp unicode flag is not currently supported by the regexp-to-ast library.\n	This will disable the lexer's first char optimizations.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE");
                            else {
                                var a = (0, n(601836).getOptimizedStartCodesIndices)(e.PATTERN, r.ensureOptimizations);
                                (0, u.default)(a) && (M = !1), (0, m.default)(a, function(e) {
                                    X(t, e, k[o])
                                })
                            }
                        else r.ensureOptimizations && (0, n(191444).PRINT_ERROR)("".concat(n(601836).failedOptimizationPrefixMsg) + "	TokenType: <".concat(e.name, "> is using a custom token pattern without providing <start_chars_hint> parameter.\n") + "	This will disable the lexer's first char optimizations.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE"), M = !1;
                        return t
                    }, [])
                }), {
                    emptyGroups: L,
                    patternIdxToConfig: k,
                    charCodeToPatternIdxToConfig: b,
                    hasCustom: C,
                    canBeOptimized: M
                }
            }, e.validatePatterns = function(t, e) {
                var n, r, o, i = [],
                    a = L(t);
                i = i.concat(a.errors);
                var u = k(a.valid),
                    s = u.valid;
                return (i = (i = (i = (i = i.concat(u.errors)).concat((n = s, r = [], o = (0, A.default)(n, function(t) {
                    return (0, g.default)(t[S])
                }), (r = (r = (r = (r = r.concat(C(o))).concat(D(o))).concat(F(o))).concat(U(o))).concat(M(o))))).concat(w(s))).concat(j(s, e))).concat(G(s))
            }, e.findMissingPatterns = L, e.findInvalidPatterns = k;
            var x = /[^\\][$]/;

            function C(t) {
                var e = function(t) {
                        function e() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.found = !1, e
                        }
                        return o(e, t), e.prototype.visitEndAnchor = function(t) {
                            this.found = !0
                        }, e
                    }(n(562475).BaseRegExpVisitor),
                    r = (0, A.default)(t, function(t) {
                        var r = t.PATTERN;
                        try {
                            var o = (0, n(628540).getRegExpAst)(r),
                                i = new e;
                            return i.visit(o), i.found
                        } catch (t) {
                            return x.test(r.source)
                        }
                    });
                return (0, T.default)(r, function(t) {
                    return {
                        message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + t.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
                        type: n(560458).LexerDefinitionErrorType.EOI_ANCHOR_FOUND,
                        tokenTypes: [t]
                    }
                })
            }

            function M(t) {
                var e = (0, A.default)(t, function(t) {
                    return t.PATTERN.test("")
                });
                return (0, T.default)(e, function(t) {
                    return {
                        message: "Token Type: ->" + t.name + "<- static 'PATTERN' must not match an empty string",
                        type: n(560458).LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,
                        tokenTypes: [t]
                    }
                })
            }
            e.findEndOfInputAnchor = C, e.findEmptyMatchRegExps = M;
            var b = /[^\\[][\^]|^\^/;

            function D(t) {
                var e = function(t) {
                        function e() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.found = !1, e
                        }
                        return o(e, t), e.prototype.visitStartAnchor = function(t) {
                            this.found = !0
                        }, e
                    }(n(562475).BaseRegExpVisitor),
                    r = (0, A.default)(t, function(t) {
                        var r = t.PATTERN;
                        try {
                            var o = (0, n(628540).getRegExpAst)(r),
                                i = new e;
                            return i.visit(o), i.found
                        } catch (t) {
                            return b.test(r.source)
                        }
                    });
                return (0, T.default)(r, function(t) {
                    return {
                        message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + t.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
                        type: n(560458).LexerDefinitionErrorType.SOI_ANCHOR_FOUND,
                        tokenTypes: [t]
                    }
                })
            }

            function F(t) {
                var e = (0, A.default)(t, function(t) {
                    var e = t[S];
                    return e instanceof RegExp && (e.multiline || e.global)
                });
                return (0, T.default)(e, function(t) {
                    return {
                        message: "Token Type: ->" + t.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
                        type: n(560458).LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,
                        tokenTypes: [t]
                    }
                })
            }

            function U(t) {
                var e = [],
                    r = (0, T.default)(t, function(r) {
                        return (0, I.default)(t, function(t, o) {
                            return r.PATTERN.source !== o.PATTERN.source || (0, P.default)(e, o) || o.PATTERN === n(560458).Lexer.NA || (e.push(o), t.push(o)), t
                        }, [])
                    });
                r = (0, s.default)(r);
                var o = (0, A.default)(r, function(t) {
                    return t.length > 1
                });
                return (0, T.default)(o, function(t) {
                    var e = (0, T.default)(t, function(t) {
                            return t.name
                        }),
                        r = (0, a.default)(t).PATTERN;
                    return {
                        message: "The same RegExp pattern ->".concat(r, "<-") + "has been used in all of the following Token Types: ".concat(e.join(", "), " <-"),
                        type: n(560458).LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,
                        tokenTypes: t
                    }
                })
            }

            function w(t) {
                var e = (0, A.default)(t, function(t) {
                    if (!(0, O.default)(t, "GROUP")) return !1;
                    var e = t.GROUP;
                    return e !== n(560458).Lexer.SKIPPED && e !== n(560458).Lexer.NA && !(0, y.default)(e)
                });
                return (0, T.default)(e, function(t) {
                    return {
                        message: "Token Type: ->" + t.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
                        type: n(560458).LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,
                        tokenTypes: [t]
                    }
                })
            }

            function j(t, e) {
                var r = (0, A.default)(t, function(t) {
                    return void 0 !== t.PUSH_MODE && !(0, P.default)(e, t.PUSH_MODE)
                });
                return (0, T.default)(r, function(t) {
                    return {
                        message: "Token Type: ->".concat(t.name, "<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->").concat(t.PUSH_MODE, "<-") + "which does not exist",
                        type: n(560458).LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,
                        tokenTypes: [t]
                    }
                })
            }

            function G(t) {
                var e = [],
                    r = (0, I.default)(t, function(t, e, r) {
                        var o, i = e.PATTERN;
                        return i === n(560458).Lexer.NA || ((0, y.default)(i) ? t.push({
                            str: i,
                            idx: r,
                            tokenType: e
                        }) : (0, g.default)(i) && (o = i, void 0 === (0, _.default)([".", "\\", "[", "]", "|", "^", "$", "(", ")", "?", "*", "+", "{"], function(t) {
                            return -1 !== o.source.indexOf(t)
                        })) && t.push({
                            str: i.source,
                            idx: r,
                            tokenType: e
                        })), t
                    }, []);
                return (0, m.default)(t, function(t, o) {
                    (0, m.default)(r, function(r) {
                        var i = r.str,
                            a = r.idx,
                            u = r.tokenType;
                        if (o < a && function(t, e) {
                                if ((0, g.default)(e)) {
                                    var n = e.exec(t);
                                    return null !== n && 0 === n.index
                                }
                                if ((0, E.default)(e)) return e(t, 0, [], {});
                                if ((0, O.default)(e, "exec")) return e.exec(t, 0, [], {});
                                if ("string" == typeof e) return e === t;
                                throw Error("non exhaustive match")
                            }(i, t.PATTERN)) {
                            var s = "Token: ->".concat(u.name, "<- can never be matched.\n") + "Because it appears AFTER the Token Type ->".concat(t.name, "<-") + "in the lexer's definition.\nSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE";
                            e.push({
                                message: s,
                                type: n(560458).LexerDefinitionErrorType.UNREACHABLE_PATTERN,
                                tokenTypes: [t, u]
                            })
                        }
                    })
                }), e
            }

            function W(t) {
                var e = t.ignoreCase ? "i" : "";
                return new RegExp("^(?:".concat(t.source, ")"), e)
            }

            function B(t) {
                var e = t.ignoreCase ? "iy" : "y";
                return new RegExp("".concat(t.source), e)
            }

            function V(t) {
                var e = t.PATTERN;
                if ((0, g.default)(e)) return !1;
                if ((0, E.default)(e)) return !0;
                if ((0, O.default)(e, "exec")) return !0;
                if ((0, y.default)(e)) return !1;
                throw Error("non exhaustive match")
            }

            function K(t) {
                return !!(0, y.default)(t) && 1 === t.length && t.charCodeAt(0)
            }

            function z(t, e) {
                if ((0, O.default)(t, "LINE_BREAKS")) return !1;
                if ((0, g.default)(t.PATTERN)) {
                    try {
                        (0, n(601836).canMatchCharCode)(e, t.PATTERN)
                    } catch (t) {
                        return {
                            issue: n(560458).LexerDefinitionErrorType.IDENTIFY_TERMINATOR,
                            errMsg: t.message
                        }
                    }
                    return !1
                }
                if ((0, y.default)(t.PATTERN)) return !1;
                if (V(t)) return {
                    issue: n(560458).LexerDefinitionErrorType.CUSTOM_LINE_BREAK
                };
                throw Error("non exhaustive match")
            }

            function Y(t, e) {
                if (e.issue === n(560458).LexerDefinitionErrorType.IDENTIFY_TERMINATOR) return "Warning: unable to identify line terminator usage in pattern.\n" + "	The problem is in the <".concat(t.name, "> Token Type\n") + "	 Root cause: ".concat(e.errMsg, ".\n") + "	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";
                if (e.issue === n(560458).LexerDefinitionErrorType.CUSTOM_LINE_BREAK) return "Warning: A Custom Token Pattern should specify the <line_breaks> option.\n" + "	The problem is in the <".concat(t.name, "> Token Type\n") + "	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";
                throw Error("non exhaustive match")
            }

            function H(t) {
                return (0, T.default)(t, function(t) {
                    return (0, y.default)(t) ? t.charCodeAt(0) : t
                })
            }

            function X(t, e, n) {
                void 0 === t[e] ? t[e] = [n] : t[e].push(n)
            }
            e.findStartOfInputAnchor = D, e.findUnsupportedFlags = F, e.findDuplicatePatterns = U, e.findInvalidGroupType = w, e.findModesThatDoNotExist = j, e.findUnreachablePatterns = G, e.addStartOfInput = W, e.addStickyFlag = B, e.performRuntimeChecks = function(t, r, o) {
                var i = [];
                return (0, O.default)(t, e.DEFAULT_MODE) || i.push({
                    message: "A MultiMode Lexer cannot be initialized without a <" + e.DEFAULT_MODE + "> property in its definition\n",
                    type: n(560458).LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
                }), (0, O.default)(t, e.MODES) || i.push({
                    message: "A MultiMode Lexer cannot be initialized without a <" + e.MODES + "> property in its definition\n",
                    type: n(560458).LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
                }), (0, O.default)(t, e.MODES) && (0, O.default)(t, e.DEFAULT_MODE) && !(0, O.default)(t.modes, t.defaultMode) && i.push({
                    message: "A MultiMode Lexer cannot be initialized with a ".concat(e.DEFAULT_MODE, ": <").concat(t.defaultMode, ">") + "which does not exist\n",
                    type: n(560458).LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
                }), (0, O.default)(t, e.MODES) && (0, m.default)(t.modes, function(t, e) {
                    (0, m.default)(t, function(r, o) {
                        if ((0, v.default)(r)) i.push({
                            message: "A Lexer cannot be initialized using an undefined Token Type. Mode:" + "<".concat(e, "> at index: <").concat(o, ">\n"),
                            type: n(560458).LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
                        });
                        else if ((0, O.default)(r, "LONGER_ALT")) {
                            var a = (0, c.default)(r.LONGER_ALT) ? r.LONGER_ALT : [r.LONGER_ALT];
                            (0, m.default)(a, function(o) {
                                (0, v.default)(o) || (0, P.default)(t, o) || i.push({
                                    message: "A MultiMode Lexer cannot be initialized with a longer_alt <".concat(o.name, "> on token <").concat(r.name, "> outside of mode <").concat(e, ">\n"),
                                    type: n(560458).LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
                                })
                            })
                        }
                    })
                }), i
            }, e.performWarningRuntimeChecks = function(t, e, r) {
                var o = [],
                    i = !1,
                    a = (0, s.default)((0, f.default)((0, l.default)(t.modes))),
                    u = (0, d.default)(a, function(t) {
                        return t[S] === n(560458).Lexer.NA
                    }),
                    c = H(r);
                return e && (0, m.default)(u, function(t) {
                    var e = z(t, c);
                    if (!1 !== e) {
                        var r = {
                            message: Y(t, e),
                            type: e.issue,
                            tokenType: t
                        };
                        o.push(r)
                    } else(0, O.default)(t, "LINE_BREAKS") ? !0 === t.LINE_BREAKS && (i = !0) : (0, n(601836).canMatchCharCode)(c, t.PATTERN) && (i = !0)
                }), e && !i && o.push({
                    message: "Warning: No LINE_BREAKS Found.\n	This Lexer has been defined to track line and column information,\n	But none of the Token Types can be identified as matching a line terminator.\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n	for details.",
                    type: n(560458).LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS
                }), o
            }, e.cloneEmptyGroups = function(t) {
                var e = {},
                    n = (0, R.default)(t);
                return (0, m.default)(n, function(n) {
                    var r = t[n];
                    if ((0, c.default)(r)) e[n] = [];
                    else throw Error("non exhaustive match")
                }), e
            }, e.isCustomPattern = V, e.isShortPattern = K, e.LineTerminatorOptimizedTester = {
                test: function(t) {
                    for (var e = t.length, n = this.lastIndex; n < e; n++) {
                        var r = t.charCodeAt(n);
                        if (10 === r) return this.lastIndex = n + 1, !0;
                        if (13 === r) return 10 === t.charCodeAt(n + 1) ? this.lastIndex = n + 2 : this.lastIndex = n + 1, !0
                    }
                    return !1
                },
                lastIndex: 0
            }, e.buildLineBreakIssueMessage = Y, e.minOptimizationVal = 256;
            var q = [];

            function $(t) {
                return t < e.minOptimizationVal ? t : q[t]
            }
            e.charCodeToOptimizedIndex = $
        },
        917277: t => {
            t.exports = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                    if (!e(t[n], n, t)) return !1;
                return !0
            }
        },
        918259: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.defaultGrammarValidatorErrorProvider = e.defaultGrammarResolverErrorProvider = e.defaultParserErrorProvider = void 0;
            var o = r(n(756170)),
                i = r(n(455378)),
                a = r(n(940860));
            e.defaultParserErrorProvider = {
                buildMismatchTokenMessage: function(t) {
                    var e = t.expected,
                        r = t.actual;
                    t.previous, t.ruleName;
                    var o = (0, n(991912).hasTokenLabel)(e) ? "--\x3e ".concat((0, n(991912).tokenLabel)(e), " <--") : "token of type --\x3e ".concat(e.name, " <--");
                    return "Expecting ".concat(o, " but found --\x3e '").concat(r.image, "' <--")
                },
                buildNotAllInputParsedMessage: function(t) {
                    var e = t.firstRedundant;
                    return t.ruleName, "Redundant input, expecting EOF but found: " + e.image
                },
                buildNoViableAltMessage: function(t) {
                    var e = t.expectedPathsPerAlt,
                        r = t.actual,
                        u = (t.previous, t.customUserDescription);
                    t.ruleName;
                    var s = "Expecting: ",
                        c = "\nbut found: '" + (0, o.default)(r).image + "'";
                    if (u) return s + u + c;
                    var l = (0, a.default)(e, function(t, e) {
                            return t.concat(e)
                        }, []),
                        f = (0, i.default)(l, function(t) {
                            return "[".concat((0, i.default)(t, function(t) {
                                return (0, n(991912).tokenLabel)(t)
                            }).join(", "), "]")
                        }),
                        d = (0, i.default)(f, function(t, e) {
                            return "  ".concat(e + 1, ". ").concat(t)
                        });
                    return s + "one of these possible Token sequences:\n".concat(d.join("\n")) + c
                },
                buildEarlyExitMessage: function(t) {
                    var e = t.expectedIterationPaths,
                        r = t.actual,
                        a = t.customUserDescription;
                    t.ruleName;
                    var u = "Expecting: ",
                        s = "\nbut found: '" + (0, o.default)(r).image + "'";
                    if (a) return u + a + s;
                    var c = (0, i.default)(e, function(t) {
                        return "[".concat((0, i.default)(t, function(t) {
                            return (0, n(991912).tokenLabel)(t)
                        }).join(","), "]")
                    });
                    return u + "expecting at least one iteration which starts with one of these possible Token sequences::\n  " + "<".concat(c.join(" ,"), ">") + s
                }
            }, Object.freeze(e.defaultParserErrorProvider), e.defaultGrammarResolverErrorProvider = {
                buildRuleNotFoundError: function(t, e) {
                    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + "<-\ninside top level rule: ->" + t.name + "<-"
                }
            }, e.defaultGrammarValidatorErrorProvider = {
                buildDuplicateFoundError: function(t, e) {
                    var r = t.name,
                        i = (0, o.default)(e),
                        a = i.idx,
                        u = (0, n(486906).getProductionDslName)(i),
                        s = i instanceof n(486906).Terminal ? i.terminalType.name : i instanceof n(486906).NonTerminal ? i.nonTerminalName : "",
                        c = a > 0,
                        l = "->".concat(u).concat(c ? a : "", "<- ").concat(s ? "with argument: ->".concat(s, "<-") : "", "\n                  appears more than once (").concat(e.length, " times) in the top level rule: ->").concat(r, "<-.                  \n                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES \n                  ");
                    return (l = l.replace(/[ \t]+/g, " ")).replace(/\s\s+/g, "\n")
                },
                buildNamespaceConflictError: function(t) {
                    return "Namespace conflict found in grammar.\n" + "The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <".concat(t.name, ">.\n") + "To resolve this make sure each Terminal and Non-Terminal names are unique\nThis is easy to accomplish by using the convention that Terminal names start with an uppercase letter\nand Non-Terminal names start with a lower case letter."
                },
                buildAlternationPrefixAmbiguityError: function(t) {
                    var e = (0, i.default)(t.prefixPath, function(t) {
                            return (0, n(991912).tokenLabel)(t)
                        }).join(", "),
                        r = 0 === t.alternation.idx ? "" : t.alternation.idx;
                    return "Ambiguous alternatives: <".concat(t.ambiguityIndices.join(" ,"), "> due to common lookahead prefix\n") + "in <OR".concat(r, "> inside <").concat(t.topLevelRule.name, "> Rule,\n") + "<".concat(e, "> may appears as a prefix path in all these alternatives.\n") + "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\nFor Further details."
                },
                buildAlternationAmbiguityError: function(t) {
                    var e = (0, i.default)(t.prefixPath, function(t) {
                            return (0, n(991912).tokenLabel)(t)
                        }).join(", "),
                        r = 0 === t.alternation.idx ? "" : t.alternation.idx,
                        o = "Ambiguous Alternatives Detected: <".concat(t.ambiguityIndices.join(" ,"), "> in <OR").concat(r, ">") + " inside <".concat(t.topLevelRule.name, "> Rule,\n") + "<".concat(e, "> may appears as a prefix path in all these alternatives.\n");
                    return o + "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\nFor Further details."
                },
                buildEmptyRepetitionError: function(t) {
                    var e = (0, n(486906).getProductionDslName)(t.repetition);
                    return 0 !== t.repetition.idx && (e += t.repetition.idx), "The repetition <".concat(e, "> within Rule <").concat(t.topLevelRule.name, "> can never consume any tokens.\n") + "This could lead to an infinite loop."
                },
                buildTokenNameError: function(t) {
                    return "deprecated"
                },
                buildEmptyAlternationError: function(t) {
                    return "Ambiguous empty alternative: <".concat(t.emptyChoiceIdx + 1, ">") + " in <OR".concat(t.alternation.idx, "> inside <").concat(t.topLevelRule.name, "> Rule.\n") + "Only the last alternative may be an empty alternative."
                },
                buildTooManyAlternativesError: function(t) {
                    return "An Alternation cannot have more than 256 alternatives:\n" + "<OR".concat(t.alternation.idx, "> inside <").concat(t.topLevelRule.name, "> Rule.\n has ").concat(t.alternation.definition.length + 1, " alternatives.")
                },
                buildLeftRecursionError: function(t) {
                    var e = t.topLevelRule.name,
                        n = (0, i.default)(t.leftRecursionPath, function(t) {
                            return t.name
                        }),
                        r = "".concat(e, " --\x3e ").concat(n.concat([e]).join(" --\x3e "));
                    return "Left Recursion found in grammar.\n" + "rule: <".concat(e, "> can be invoked from itself (directly or indirectly)\n") + "without consuming any Tokens. The grammar path that causes this is: \n ".concat(r, "\n") + " To fix this refactor your grammar to remove the left recursion.\nsee: https://en.wikipedia.org/wiki/LL_parser#Left_factoring."
                },
                buildInvalidRuleNameError: function(t) {
                    return "deprecated"
                },
                buildDuplicateRuleNameError: function(t) {
                    var e = t.topLevelRule instanceof n(486906).Rule ? t.topLevelRule.name : t.topLevelRule;
                    return "Duplicate definition, rule: ->".concat(e, "<- is already defined in the grammar: ->").concat(t.grammarName, "<-")
                }
            }
        },
        919037: (t, e, n) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.createSyntaxDiagramsCode = void 0, e.createSyntaxDiagramsCode = function(t, e) {
                var r = void 0 === e ? {} : e,
                    o = r.resourceBase,
                    i = void 0 === o ? "https://unpkg.com/chevrotain@".concat(n(121482).VERSION, "/diagrams/") : o,
                    a = r.css,
                    u = void 0 === a ? "https://unpkg.com/chevrotain@".concat(n(121482).VERSION, "/diagrams/diagrams.css") : a,
                    s = "\n<script src='".concat(i, "vendor/railroad-diagrams.js'><\/script>\n<script src='").concat(i, "src/diagrams_builder.js'><\/script>\n<script src='").concat(i, "src/diagrams_behavior.js'><\/script>\n<script src='").concat(i, "src/main.js'><\/script>\n"),
                    c = "\n<script>\n    window.serializedGrammar = ".concat(JSON.stringify(t, null, "  "), ";\n<\/script>\n");
                return '\n\x3c!-- This is a generated file --\x3e\n<!DOCTYPE html>\n<meta charset="utf-8">\n<style>\n  body {\n    background-color: hsl(30, 20%, 95%)\n  }\n</style>\n\n' + "\n<link rel='stylesheet' href='".concat(u, "'>\n") + s + '\n<div id="diagrams" align="center"></div>    \n' + c + '\n<script>\n    var diagramsDiv = document.getElementById("diagrams");\n    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);\n<\/script>\n'
            }
        },
        940860: (t, e, n) => {
            t.exports = function(t, e, r) {
                var o = n(956449)(t) ? n(640882) : n(685558),
                    i = arguments.length < 3;
                return o(t, n(315389)(e, 4), r, i, n(480909))
            }
        },
        946497: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RecognizerEngine = void 0;
            var o = r(n(962193)),
                i = r(n(956449)),
                a = r(n(835970)),
                u = r(n(619747)),
                s = r(n(763375)),
                c = r(n(223805)),
                l = r(n(761448)),
                f = r(n(935880)),
                d = r(n(940860)),
                p = r(n(932629));
            e.RecognizerEngine = function() {
                function t() {}
                return t.prototype.initRecognizerEngine = function(t, e) {
                    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = n(55674).tokenStructuredMatcherNoCategories, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, (0, l.default)(e, "serializedGrammar")) throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n	For Further details.");
                    if ((0, i.default)(t)) {
                        if ((0, o.default)(t)) throw Error("A Token Vocabulary cannot be empty.\n	Note that the first argument for the parser constructor\n	is no longer a Token vector (since v4.0).");
                        if ("number" == typeof t[0].startOffset) throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n	For Further details.")
                    }
                    if ((0, i.default)(t)) this.tokensMap = (0, d.default)(t, function(t, e) {
                        return t[e.name] = e, t
                    }, {});
                    else if ((0, l.default)(t, "modes") && (0, u.default)((0, a.default)((0, f.default)(t.modes)), n(55674).isTokenType)) {
                        var r = (0, a.default)((0, f.default)(t.modes)),
                            h = (0, s.default)(r);
                        this.tokensMap = (0, d.default)(h, function(t, e) {
                            return t[e.name] = e, t
                        }, {})
                    } else if ((0, c.default)(t)) this.tokensMap = (0, p.default)(t);
                    else throw Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
                    this.tokensMap.EOF = n(991912).EOF;
                    var T = (0, l.default)(t, "modes") ? (0, a.default)((0, f.default)(t.modes)) : (0, f.default)(t),
                        m = (0, u.default)(T, function(t) {
                            return (0, o.default)(t.categoryMatches)
                        });
                    this.tokenMatcher = m ? n(55674).tokenStructuredMatcherNoCategories : n(55674).tokenStructuredMatcher, (0, n(55674).augmentTokenTypes)((0, f.default)(this.tokensMap))
                }, t.prototype.defineRule = function(t, e, r) {
                    if (this.selfAnalysisDone) throw Error("Grammar rule <".concat(t, "> may not be defined after the 'performSelfAnalysis' method has been called'\n") + "Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.");
                    var o = (0, l.default)(r, "resyncEnabled") ? r.resyncEnabled : n(358165).DEFAULT_RULE_CONFIG.resyncEnabled,
                        i = (0, l.default)(r, "recoveryValueFunc") ? r.recoveryValueFunc : n(358165).DEFAULT_RULE_CONFIG.recoveryValueFunc,
                        a = this.ruleShortNameIdx << n(784958).BITS_FOR_METHOD_TYPE + n(784958).BITS_FOR_OCCURRENCE_IDX;
                    return this.ruleShortNameIdx++, this.shortRuleNameToFull[a] = t, this.fullRuleNameToShort[t] = a, Object.assign(!0 === this.outputCst ? function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        try {
                            this.ruleInvocationStateUpdate(a, t, this.subruleIdx), e.apply(this, n);
                            var u = this.CST_STACK[this.CST_STACK.length - 1];
                            return this.cstPostRule(u), u
                        } catch (t) {
                            return this.invokeRuleCatch(t, o, i)
                        } finally {
                            this.ruleFinallyStateUpdate()
                        }
                    } : function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        try {
                            return this.ruleInvocationStateUpdate(a, t, this.subruleIdx), e.apply(this, n)
                        } catch (t) {
                            return this.invokeRuleCatch(t, o, i)
                        } finally {
                            this.ruleFinallyStateUpdate()
                        }
                    }, {
                        ruleName: t,
                        originalGrammarAction: e
                    })
                }, t.prototype.invokeRuleCatch = function(t, e, r) {
                    var o = 1 === this.RULE_STACK.length,
                        i = e && !this.isBackTracking() && this.recoveryEnabled;
                    if ((0, n(617456).isRecognitionException)(t)) {
                        if (i) {
                            var a = this.findReSyncTokenType();
                            if (this.isInCurrentRuleReSyncSet(a)) {
                                if (t.resyncedTokens = this.reSyncTo(a), !this.outputCst) return r(t);
                                var u = this.CST_STACK[this.CST_STACK.length - 1];
                                return u.recoveredNode = !0, u
                            }
                            if (this.outputCst) {
                                var u = this.CST_STACK[this.CST_STACK.length - 1];
                                u.recoveredNode = !0, t.partialCstResult = u
                            }
                            throw t
                        }
                        if (o) return this.moveToTerminatedState(), r(t)
                    }
                    throw t
                }, t.prototype.optionInternal = function(t, e) {
                    var r = this.getKeyForAutomaticLookahead(n(784958).OPTION_IDX, e);
                    return this.optionInternalLogic(t, e, r)
                }, t.prototype.optionInternalLogic = function(t, e, n) {
                    var r, o = this,
                        i = this.getLaFuncFromCache(n);
                    if ("function" != typeof t) {
                        r = t.DEF;
                        var a = t.GATE;
                        if (void 0 !== a) {
                            var u = i;
                            i = function() {
                                return a.call(o) && u.call(o)
                            }
                        }
                    } else r = t;
                    if (!0 === i.call(this)) return r.call(this)
                }, t.prototype.atLeastOneInternal = function(t, e) {
                    var r = this.getKeyForAutomaticLookahead(n(784958).AT_LEAST_ONE_IDX, t);
                    return this.atLeastOneInternalLogic(t, e, r)
                }, t.prototype.atLeastOneInternalLogic = function(t, e, r) {
                    var o, i = this,
                        a = this.getLaFuncFromCache(r);
                    if ("function" != typeof e) {
                        o = e.DEF;
                        var u = e.GATE;
                        if (void 0 !== u) {
                            var s = a;
                            a = function() {
                                return u.call(i) && s.call(i)
                            }
                        }
                    } else o = e;
                    if (!0 === a.call(this))
                        for (var c = this.doSingleRepetition(o); !0 === a.call(this) && !0 === c;) c = this.doSingleRepetition(o);
                    else throw this.raiseEarlyExitException(t, n(210816).PROD_TYPE.REPETITION_MANDATORY, e.ERR_MSG);
                    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [t, e], a, n(784958).AT_LEAST_ONE_IDX, t, n(437310).NextTerminalAfterAtLeastOneWalker)
                }, t.prototype.atLeastOneSepFirstInternal = function(t, e) {
                    var r = this.getKeyForAutomaticLookahead(n(784958).AT_LEAST_ONE_SEP_IDX, t);
                    this.atLeastOneSepFirstInternalLogic(t, e, r)
                }, t.prototype.atLeastOneSepFirstInternalLogic = function(t, e, r) {
                    var o = this,
                        i = e.DEF,
                        a = e.SEP;
                    if (!0 === this.getLaFuncFromCache(r).call(this)) {
                        i.call(this);
                        for (var u = function() {
                                return o.tokenMatcher(o.LA(1), a)
                            }; !0 === this.tokenMatcher(this.LA(1), a);) this.CONSUME(a), i.call(this);
                        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [t, a, u, i, n(437310).NextTerminalAfterAtLeastOneSepWalker], u, n(784958).AT_LEAST_ONE_SEP_IDX, t, n(437310).NextTerminalAfterAtLeastOneSepWalker)
                    } else throw this.raiseEarlyExitException(t, n(210816).PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, e.ERR_MSG)
                }, t.prototype.manyInternal = function(t, e) {
                    var r = this.getKeyForAutomaticLookahead(n(784958).MANY_IDX, t);
                    return this.manyInternalLogic(t, e, r)
                }, t.prototype.manyInternalLogic = function(t, e, r) {
                    var o, i = this,
                        a = this.getLaFuncFromCache(r);
                    if ("function" != typeof e) {
                        o = e.DEF;
                        var u = e.GATE;
                        if (void 0 !== u) {
                            var s = a;
                            a = function() {
                                return u.call(i) && s.call(i)
                            }
                        }
                    } else o = e;
                    for (var c = !0; !0 === a.call(this) && !0 === c;) c = this.doSingleRepetition(o);
                    this.attemptInRepetitionRecovery(this.manyInternal, [t, e], a, n(784958).MANY_IDX, t, n(437310).NextTerminalAfterManyWalker, c)
                }, t.prototype.manySepFirstInternal = function(t, e) {
                    var r = this.getKeyForAutomaticLookahead(n(784958).MANY_SEP_IDX, t);
                    this.manySepFirstInternalLogic(t, e, r)
                }, t.prototype.manySepFirstInternalLogic = function(t, e, r) {
                    var o = this,
                        i = e.DEF,
                        a = e.SEP;
                    if (!0 === this.getLaFuncFromCache(r).call(this)) {
                        i.call(this);
                        for (var u = function() {
                                return o.tokenMatcher(o.LA(1), a)
                            }; !0 === this.tokenMatcher(this.LA(1), a);) this.CONSUME(a), i.call(this);
                        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [t, a, u, i, n(437310).NextTerminalAfterManySepWalker], u, n(784958).MANY_SEP_IDX, t, n(437310).NextTerminalAfterManySepWalker)
                    }
                }, t.prototype.repetitionSepSecondInternal = function(t, e, r, o, i) {
                    for (; r();) this.CONSUME(e), o.call(this);
                    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [t, e, r, o, i], r, n(784958).AT_LEAST_ONE_SEP_IDX, t, i)
                }, t.prototype.doSingleRepetition = function(t) {
                    var e = this.getLexerPosition();
                    return t.call(this), this.getLexerPosition() > e
                }, t.prototype.orInternal = function(t, e) {
                    var r = this.getKeyForAutomaticLookahead(n(784958).OR_IDX, e),
                        o = (0, i.default)(t) ? t : t.DEF,
                        a = this.getLaFuncFromCache(r).call(this, o);
                    if (void 0 !== a) return o[a].ALT.call(this);
                    this.raiseNoAltException(e, t.ERR_MSG)
                }, t.prototype.ruleFinallyStateUpdate = function() {
                    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), 0 === this.RULE_STACK.length && !1 === this.isAtEndOfInput()) {
                        var t = this.LA(1),
                            e = this.errorMessageProvider.buildNotAllInputParsedMessage({
                                firstRedundant: t,
                                ruleName: this.getCurrRuleFullName()
                            });
                        this.SAVE_ERROR(new(n(617456)).NotAllInputParsedException(e, t))
                    }
                }, t.prototype.subruleInternal = function(t, e, n) {
                    var r;
                    try {
                        var o = void 0 !== n ? n.ARGS : void 0;
                        return this.subruleIdx = e, r = t.apply(this, o), this.cstPostNonTerminal(r, void 0 !== n && void 0 !== n.LABEL ? n.LABEL : t.ruleName), r
                    } catch (e) {
                        throw this.subruleInternalError(e, n, t.ruleName)
                    }
                }, t.prototype.subruleInternalError = function(t, e, r) {
                    throw (0, n(617456).isRecognitionException)(t) && void 0 !== t.partialCstResult && (this.cstPostNonTerminal(t.partialCstResult, void 0 !== e && void 0 !== e.LABEL ? e.LABEL : r), delete t.partialCstResult), t
                }, t.prototype.consumeInternal = function(t, e, n) {
                    var r;
                    try {
                        var o = this.LA(1);
                        !0 === this.tokenMatcher(o, t) ? (this.consumeToken(), r = o) : this.consumeInternalError(t, o, n)
                    } catch (n) {
                        r = this.consumeInternalRecovery(t, e, n)
                    }
                    return this.cstPostTerminal(void 0 !== n && void 0 !== n.LABEL ? n.LABEL : t.name, r), r
                }, t.prototype.consumeInternalError = function(t, e, r) {
                    var o, i = this.LA(0);
                    throw o = void 0 !== r && r.ERR_MSG ? r.ERR_MSG : this.errorMessageProvider.buildMismatchTokenMessage({
                        expected: t,
                        actual: e,
                        previous: i,
                        ruleName: this.getCurrRuleFullName()
                    }), this.SAVE_ERROR(new(n(617456)).MismatchedTokenException(o, e, i))
                }, t.prototype.consumeInternalRecovery = function(t, e, r) {
                    if (this.recoveryEnabled && "MismatchedTokenException" === r.name && !this.isBackTracking()) {
                        var o = this.getFollowsForInRuleRecovery(t, e);
                        try {
                            return this.tryInRuleRecovery(t, o)
                        } catch (t) {
                            if (t.name === n(41484).IN_RULE_RECOVERY_EXCEPTION) throw r;
                            throw t
                        }
                    }
                    throw r
                }, t.prototype.saveRecogState = function() {
                    var t = this.errors,
                        e = (0, p.default)(this.RULE_STACK);
                    return {
                        errors: t,
                        lexerState: this.exportLexerState(),
                        RULE_STACK: e,
                        CST_STACK: this.CST_STACK
                    }
                }, t.prototype.reloadRecogState = function(t) {
                    this.errors = t.errors, this.importLexerState(t.lexerState), this.RULE_STACK = t.RULE_STACK
                }, t.prototype.ruleInvocationStateUpdate = function(t, e, n) {
                    this.RULE_OCCURRENCE_STACK.push(n), this.RULE_STACK.push(t), this.cstInvocationStateUpdate(e)
                }, t.prototype.isBackTracking = function() {
                    return 0 !== this.isBackTrackingStack.length
                }, t.prototype.getCurrRuleFullName = function() {
                    var t = this.getLastExplicitRuleShortName();
                    return this.shortRuleNameToFull[t]
                }, t.prototype.shortRuleNameToFullName = function(t) {
                    return this.shortRuleNameToFull[t]
                }, t.prototype.isAtEndOfInput = function() {
                    return this.tokenMatcher(this.LA(1), n(991912).EOF)
                }, t.prototype.reset = function() {
                    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = []
                }, t
            }()
        },
        985786: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.validateGrammar = e.resolveGrammar = void 0;
            var o = r(n(539754)),
                i = r(n(884684));
            e.resolveGrammar = function(t) {
                var e = (0, i.default)(t, {
                        errMsgProvider: n(918259).defaultGrammarResolverErrorProvider
                    }),
                    r = {};
                return (0, o.default)(t.rules, function(t) {
                    r[t.name] = t
                }), (0, n(272488).resolveGrammar)(r, e.errMsgProvider)
            }, e.validateGrammar = function(t) {
                return t = (0, i.default)(t, {
                    errMsgProvider: n(918259).defaultGrammarValidatorErrorProvider
                }), (0, n(409955).validateGrammar)(t.rules, t.tokenTypes, t.errMsgProvider, t.grammarName)
            }
        },
        990916: (t, e, n) => {
            t.exports = function(t, e) {
                var r;
                return n(480909)(t, function(t, n, o) {
                    return !(r = e(t, n, o))
                }), !!r
            }
        },
        991912: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.tokenMatcher = e.createTokenInstance = e.EOF = e.createToken = e.hasTokenLabel = e.tokenName = e.tokenLabel = void 0;
            var o = r(n(185015)),
                i = r(n(761448)),
                a = r(n(762216));

            function u(t) {
                return (0, o.default)(t.LABEL) && "" !== t.LABEL
            }
            e.tokenLabel = function(t) {
                return u(t) ? t.LABEL : t.name
            }, e.tokenName = function(t) {
                return t.name
            }, e.hasTokenLabel = u;
            var s = "categories",
                c = "label",
                l = "group",
                f = "push_mode",
                d = "pop_mode",
                p = "longer_alt",
                h = "line_breaks",
                T = "start_chars_hint";

            function m(t) {
                var e = t.pattern,
                    r = {};
                if (r.name = t.name, (0, a.default)(e) || (r.PATTERN = e), (0, i.default)(t, "parent")) throw "The parent property is no longer supported.\nSee: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";
                return (0, i.default)(t, s) && (r.CATEGORIES = t[s]), (0, n(55674).augmentTokenTypes)([r]), (0, i.default)(t, c) && (r.LABEL = t[c]), (0, i.default)(t, l) && (r.GROUP = t[l]), (0, i.default)(t, d) && (r.POP_MODE = t[d]), (0, i.default)(t, f) && (r.PUSH_MODE = t[f]), (0, i.default)(t, p) && (r.LONGER_ALT = t[p]), (0, i.default)(t, h) && (r.LINE_BREAKS = t[h]), (0, i.default)(t, T) && (r.START_CHARS_HINT = t[T]), r
            }
            e.createToken = function(t) {
                return m(t)
            }, e.EOF = m({
                name: "EOF",
                pattern: n(560458).Lexer.NA
            }), (0, n(55674).augmentTokenTypes)([e.EOF]), e.createTokenInstance = function(t, e, n, r, o, i, a, u) {
                return {
                    image: e,
                    startOffset: n,
                    endOffset: r,
                    startLine: o,
                    endLine: i,
                    startColumn: a,
                    endColumn: u,
                    tokenTypeIdx: t.tokenTypeIdx,
                    tokenType: t
                }
            }, e.tokenMatcher = function(t, e) {
                return (0, n(55674).tokenStructuredMatcher)(t, e)
            }
        }
    }
]);