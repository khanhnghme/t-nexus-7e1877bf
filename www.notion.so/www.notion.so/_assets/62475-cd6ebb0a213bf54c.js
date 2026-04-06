(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [62475], {
        562475: function(t, e) {
            var r, s;
            "u" > typeof self && self, void 0 === (s = "function" == typeof(r = function() {
                function t() {}
                t.prototype.saveState = function() {
                    return {
                        idx: this.idx,
                        input: this.input,
                        groupIdx: this.groupIdx
                    }
                }, t.prototype.restoreState = function(t) {
                    this.idx = t.idx, this.input = t.input, this.groupIdx = t.groupIdx
                }, t.prototype.pattern = function(t) {
                    this.idx = 0, this.input = t, this.groupIdx = 0, this.consumeChar("/");
                    var e = this.disjunction();
                    this.consumeChar("/");
                    for (var r = {
                            type: "Flags",
                            loc: {
                                begin: this.idx,
                                end: t.length
                            },
                            global: !1,
                            ignoreCase: !1,
                            multiLine: !1,
                            unicode: !1,
                            sticky: !1
                        }; this.isRegExpFlag();) switch (this.popChar()) {
                        case "g":
                            c(r, "global");
                            break;
                        case "i":
                            c(r, "ignoreCase");
                            break;
                        case "m":
                            c(r, "multiLine");
                            break;
                        case "u":
                            c(r, "unicode");
                            break;
                        case "y":
                            c(r, "sticky")
                    }
                    if (this.idx !== this.input.length) throw Error("Redundant input: " + this.input.substring(this.idx));
                    return {
                        type: "Pattern",
                        flags: r,
                        value: e,
                        loc: this.loc(0)
                    }
                }, t.prototype.disjunction = function() {
                    var t = [],
                        e = this.idx;
                    for (t.push(this.alternative());
                        "|" === this.peekChar();) this.consumeChar("|"), t.push(this.alternative());
                    return {
                        type: "Disjunction",
                        value: t,
                        loc: this.loc(e)
                    }
                }, t.prototype.alternative = function() {
                    for (var t = [], e = this.idx; this.isTerm();) t.push(this.term());
                    return {
                        type: "Alternative",
                        value: t,
                        loc: this.loc(e)
                    }
                }, t.prototype.term = function() {
                    return this.isAssertion() ? this.assertion() : this.atom()
                }, t.prototype.assertion = function() {
                    var t = this.idx;
                    switch (this.popChar()) {
                        case "^":
                            return {
                                type: "StartAnchor",
                                loc: this.loc(t)
                            };
                        case "$":
                            return {
                                type: "EndAnchor",
                                loc: this.loc(t)
                            };
                        case "\\":
                            switch (this.popChar()) {
                                case "b":
                                    return {
                                        type: "WordBoundary",
                                        loc: this.loc(t)
                                    };
                                case "B":
                                    return {
                                        type: "NonWordBoundary",
                                        loc: this.loc(t)
                                    }
                            }
                            throw Error("Invalid Assertion Escape");
                        case "(":
                            switch (this.consumeChar("?"), this.popChar()) {
                                case "=":
                                    e = "Lookahead";
                                    break;
                                case "!":
                                    e = "NegativeLookahead"
                            }
                            n(e);
                            var e, r = this.disjunction();
                            return this.consumeChar(")"), {
                                type: e,
                                value: r,
                                loc: this.loc(t)
                            }
                    }
                    throw Error("Internal Error - Should never get here!")
                }, t.prototype.quantifier = function(t) {
                    var e = this.idx;
                    switch (this.popChar()) {
                        case "*":
                            r = {
                                atLeast: 0,
                                atMost: 1 / 0
                            };
                            break;
                        case "+":
                            r = {
                                atLeast: 1,
                                atMost: 1 / 0
                            };
                            break;
                        case "?":
                            r = {
                                atLeast: 0,
                                atMost: 1
                            };
                            break;
                        case "{":
                            var r, s = this.integerIncludingZero();
                            switch (this.popChar()) {
                                case "}":
                                    r = {
                                        atLeast: s,
                                        atMost: s
                                    };
                                    break;
                                case ",":
                                    r = this.isDigit() ? {
                                        atLeast: s,
                                        atMost: this.integerIncludingZero()
                                    } : {
                                        atLeast: s,
                                        atMost: 1 / 0
                                    }, this.consumeChar("}")
                            }
                            if (!0 === t && void 0 === r) return;
                            n(r)
                    }
                    if (!0 !== t || void 0 !== r) return n(r), "?" === this.peekChar(0) ? (this.consumeChar("?"), r.greedy = !1) : r.greedy = !0, r.type = "Quantifier", r.loc = this.loc(e), r
                }, t.prototype.atom = function() {
                    var t, e = this.idx;
                    switch (this.peekChar()) {
                        case ".":
                            t = this.dotAll();
                            break;
                        case "\\":
                            t = this.atomEscape();
                            break;
                        case "[":
                            t = this.characterClass();
                            break;
                        case "(":
                            t = this.group()
                    }
                    return void 0 === t && this.isPatternCharacter() && (t = this.patternCharacter()), n(t), t.loc = this.loc(e), this.isQuantifier() && (t.quantifier = this.quantifier()), t
                }, t.prototype.dotAll = function() {
                    return this.consumeChar("."), {
                        type: "Set",
                        complement: !0,
                        value: [i("\n"), i("\r"), i("\u2028"), i("\u2029")]
                    }
                }, t.prototype.atomEscape = function() {
                    switch (this.consumeChar("\\"), this.peekChar()) {
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                            return this.decimalEscapeAtom();
                        case "d":
                        case "D":
                        case "s":
                        case "S":
                        case "w":
                        case "W":
                            return this.characterClassEscape();
                        case "f":
                        case "n":
                        case "r":
                        case "t":
                        case "v":
                            return this.controlEscapeAtom();
                        case "c":
                            return this.controlLetterEscapeAtom();
                        case "0":
                            return this.nulCharacterAtom();
                        case "x":
                            return this.hexEscapeSequenceAtom();
                        case "u":
                            return this.regExpUnicodeEscapeSequenceAtom();
                        default:
                            return this.identityEscapeAtom()
                    }
                }, t.prototype.decimalEscapeAtom = function() {
                    return {
                        type: "GroupBackReference",
                        value: this.positiveInteger()
                    }
                }, t.prototype.characterClassEscape = function() {
                    var t, e = !1;
                    switch (this.popChar()) {
                        case "d":
                            t = h;
                            break;
                        case "D":
                            t = h, e = !0;
                            break;
                        case "s":
                            t = p;
                            break;
                        case "S":
                            t = p, e = !0;
                            break;
                        case "w":
                            t = u;
                            break;
                        case "W":
                            t = u, e = !0
                    }
                    return n(t), {
                        type: "Set",
                        value: t,
                        complement: e
                    }
                }, t.prototype.controlEscapeAtom = function() {
                    var t;
                    switch (this.popChar()) {
                        case "f":
                            t = i("\f");
                            break;
                        case "n":
                            t = i("\n");
                            break;
                        case "r":
                            t = i("\r");
                            break;
                        case "t":
                            t = i("	");
                            break;
                        case "v":
                            t = i("\v")
                    }
                    return n(t), {
                        type: "Character",
                        value: t
                    }
                }, t.prototype.controlLetterEscapeAtom = function() {
                    this.consumeChar("c");
                    var t = this.popChar();
                    if (!1 === /[a-zA-Z]/.test(t)) throw Error("Invalid ");
                    return {
                        type: "Character",
                        value: t.toUpperCase().charCodeAt(0) - 64
                    }
                }, t.prototype.nulCharacterAtom = function() {
                    return this.consumeChar("0"), {
                        type: "Character",
                        value: i("\0")
                    }
                }, t.prototype.hexEscapeSequenceAtom = function() {
                    return this.consumeChar("x"), this.parseHexDigits(2)
                }, t.prototype.regExpUnicodeEscapeSequenceAtom = function() {
                    return this.consumeChar("u"), this.parseHexDigits(4)
                }, t.prototype.identityEscapeAtom = function() {
                    return {
                        type: "Character",
                        value: i(this.popChar())
                    }
                }, t.prototype.classPatternCharacterAtom = function() {
                    switch (this.peekChar()) {
                        case "\n":
                        case "\r":
                        case "\u2028":
                        case "\u2029":
                        case "\\":
                        case "]":
                            throw Error("TBD");
                        default:
                            return {
                                type: "Character",
                                value: i(this.popChar())
                            }
                    }
                }, t.prototype.characterClass = function() {
                    var t = [],
                        e = !1;
                    for (this.consumeChar("["), "^" === this.peekChar(0) && (this.consumeChar("^"), e = !0); this.isClassAtom();) {
                        var r = this.classAtom();
                        if ("Character" === r.type && this.isRangeDash()) {
                            this.consumeChar("-");
                            var s = this.classAtom();
                            if ("Character" === s.type) {
                                if (s.value < r.value) throw Error("Range out of order in character class");
                                t.push({
                                    from: r.value,
                                    to: s.value
                                })
                            } else o(r.value, t), t.push(i("-")), o(s.value, t)
                        } else o(r.value, t)
                    }
                    return this.consumeChar("]"), {
                        type: "Set",
                        complement: e,
                        value: t
                    }
                }, t.prototype.classAtom = function() {
                    switch (this.peekChar()) {
                        case "]":
                        case "\n":
                        case "\r":
                        case "\u2028":
                        case "\u2029":
                            throw Error("TBD");
                        case "\\":
                            return this.classEscape();
                        default:
                            return this.classPatternCharacterAtom()
                    }
                }, t.prototype.classEscape = function() {
                    switch (this.consumeChar("\\"), this.peekChar()) {
                        case "b":
                            return this.consumeChar("b"), {
                                type: "Character",
                                value: i("\b")
                            };
                        case "d":
                        case "D":
                        case "s":
                        case "S":
                        case "w":
                        case "W":
                            return this.characterClassEscape();
                        case "f":
                        case "n":
                        case "r":
                        case "t":
                        case "v":
                            return this.controlEscapeAtom();
                        case "c":
                            return this.controlLetterEscapeAtom();
                        case "0":
                            return this.nulCharacterAtom();
                        case "x":
                            return this.hexEscapeSequenceAtom();
                        case "u":
                            return this.regExpUnicodeEscapeSequenceAtom();
                        default:
                            return this.identityEscapeAtom()
                    }
                }, t.prototype.group = function() {
                    var t = !0;
                    this.consumeChar("("), "?" === this.peekChar(0) ? (this.consumeChar("?"), this.consumeChar(":"), t = !1) : this.groupIdx++;
                    var e = this.disjunction();
                    this.consumeChar(")");
                    var r = {
                        type: "Group",
                        capturing: t,
                        value: e
                    };
                    return t && (r.idx = this.groupIdx), r
                }, t.prototype.positiveInteger = function() {
                    var t = this.popChar();
                    if (!1 === a.test(t)) throw Error("Expecting a positive integer");
                    for (; s.test(this.peekChar(0));) t += this.popChar();
                    return parseInt(t, 10)
                }, t.prototype.integerIncludingZero = function() {
                    var t = this.popChar();
                    if (!1 === s.test(t)) throw Error("Expecting an integer");
                    for (; s.test(this.peekChar(0));) t += this.popChar();
                    return parseInt(t, 10)
                }, t.prototype.patternCharacter = function() {
                    var t = this.popChar();
                    switch (t) {
                        case "\n":
                        case "\r":
                        case "\u2028":
                        case "\u2029":
                        case "^":
                        case "$":
                        case "\\":
                        case ".":
                        case "*":
                        case "+":
                        case "?":
                        case "(":
                        case ")":
                        case "[":
                        case "|":
                            throw Error("TBD");
                        default:
                            return {
                                type: "Character",
                                value: i(t)
                            }
                    }
                }, t.prototype.isRegExpFlag = function() {
                    switch (this.peekChar(0)) {
                        case "g":
                        case "i":
                        case "m":
                        case "u":
                        case "y":
                            return !0;
                        default:
                            return !1
                    }
                }, t.prototype.isRangeDash = function() {
                    return "-" === this.peekChar() && this.isClassAtom(1)
                }, t.prototype.isDigit = function() {
                    return s.test(this.peekChar(0))
                }, t.prototype.isClassAtom = function(t) {
                    switch (void 0 === t && (t = 0), this.peekChar(t)) {
                        case "]":
                        case "\n":
                        case "\r":
                        case "\u2028":
                        case "\u2029":
                            return !1;
                        default:
                            return !0
                    }
                }, t.prototype.isTerm = function() {
                    return this.isAtom() || this.isAssertion()
                }, t.prototype.isAtom = function() {
                    if (this.isPatternCharacter()) return !0;
                    switch (this.peekChar(0)) {
                        case ".":
                        case "\\":
                        case "[":
                        case "(":
                            return !0;
                        default:
                            return !1
                    }
                }, t.prototype.isAssertion = function() {
                    switch (this.peekChar(0)) {
                        case "^":
                        case "$":
                            return !0;
                        case "\\":
                            switch (this.peekChar(1)) {
                                case "b":
                                case "B":
                                    return !0;
                                default:
                                    return !1
                            }
                        case "(":
                            return "?" === this.peekChar(1) && ("=" === this.peekChar(2) || "!" === this.peekChar(2));
                        default:
                            return !1
                    }
                }, t.prototype.isQuantifier = function() {
                    var t = this.saveState();
                    try {
                        return void 0 !== this.quantifier(!0)
                    } catch (t) {
                        return !1
                    } finally {
                        this.restoreState(t)
                    }
                }, t.prototype.isPatternCharacter = function() {
                    switch (this.peekChar()) {
                        case "^":
                        case "$":
                        case "\\":
                        case ".":
                        case "*":
                        case "+":
                        case "?":
                        case "(":
                        case ")":
                        case "[":
                        case "|":
                        case "/":
                        case "\n":
                        case "\r":
                        case "\u2028":
                        case "\u2029":
                            return !1;
                        default:
                            return !0
                    }
                }, t.prototype.parseHexDigits = function(t) {
                    for (var e = "", s = 0; s < t; s++) {
                        var a = this.popChar();
                        if (!1 === r.test(a)) throw Error("Expecting a HexDecimal digits");
                        e += a
                    }
                    return {
                        type: "Character",
                        value: parseInt(e, 16)
                    }
                }, t.prototype.peekChar = function(t) {
                    return void 0 === t && (t = 0), this.input[this.idx + t]
                }, t.prototype.popChar = function() {
                    var t = this.peekChar(0);
                    return this.consumeChar(), t
                }, t.prototype.consumeChar = function(t) {
                    if (void 0 !== t && this.input[this.idx] !== t) throw Error("Expected: '" + t + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
                    if (this.idx >= this.input.length) throw Error("Unexpected end of input");
                    this.idx++
                }, t.prototype.loc = function(t) {
                    return {
                        begin: t,
                        end: this.idx
                    }
                };
                var e, r = /[0-9a-fA-F]/,
                    s = /[0-9]/,
                    a = /[1-9]/;

                function i(t) {
                    return t.charCodeAt(0)
                }

                function o(t, e) {
                    void 0 !== t.length ? t.forEach(function(t) {
                        e.push(t)
                    }) : e.push(t)
                }

                function c(t, e) {
                    if (!0 === t[e]) throw "duplicate flag " + e;
                    t[e] = !0
                }

                function n(t) {
                    if (void 0 === t) throw Error("Internal Error - Should never get here!")
                }
                var h = [];
                for (e = i("0"); e <= i("9"); e++) h.push(e);
                var u = [i("_")].concat(h);
                for (e = i("a"); e <= i("z"); e++) u.push(e);
                for (e = i("A"); e <= i("Z"); e++) u.push(e);
                var p = [i(" "), i("\f"), i("\n"), i("\r"), i("	"), i("\v"), i("	"), i(" "), i(" "), i(" "), i(" "), i(" "), i(" "), i(" "), i(" "), i(" "), i(" "), i(" "), i(" "), i(" "), i("\u2028"), i("\u2029"), i(" "), i(" "), i("　"), i("\uFEFF")];

                function f() {}
                return f.prototype.visitChildren = function(t) {
                    for (var e in t) {
                        var r = t[e];
                        t.hasOwnProperty(e) && (void 0 !== r.type ? this.visit(r) : Array.isArray(r) && r.forEach(function(t) {
                            this.visit(t)
                        }, this))
                    }
                }, f.prototype.visit = function(t) {
                    switch (t.type) {
                        case "Pattern":
                            this.visitPattern(t);
                            break;
                        case "Flags":
                            this.visitFlags(t);
                            break;
                        case "Disjunction":
                            this.visitDisjunction(t);
                            break;
                        case "Alternative":
                            this.visitAlternative(t);
                            break;
                        case "StartAnchor":
                            this.visitStartAnchor(t);
                            break;
                        case "EndAnchor":
                            this.visitEndAnchor(t);
                            break;
                        case "WordBoundary":
                            this.visitWordBoundary(t);
                            break;
                        case "NonWordBoundary":
                            this.visitNonWordBoundary(t);
                            break;
                        case "Lookahead":
                            this.visitLookahead(t);
                            break;
                        case "NegativeLookahead":
                            this.visitNegativeLookahead(t);
                            break;
                        case "Character":
                            this.visitCharacter(t);
                            break;
                        case "Set":
                            this.visitSet(t);
                            break;
                        case "Group":
                            this.visitGroup(t);
                            break;
                        case "GroupBackReference":
                            this.visitGroupBackReference(t);
                            break;
                        case "Quantifier":
                            this.visitQuantifier(t)
                    }
                    this.visitChildren(t)
                }, f.prototype.visitPattern = function(t) {}, f.prototype.visitFlags = function(t) {}, f.prototype.visitDisjunction = function(t) {}, f.prototype.visitAlternative = function(t) {}, f.prototype.visitStartAnchor = function(t) {}, f.prototype.visitEndAnchor = function(t) {}, f.prototype.visitWordBoundary = function(t) {}, f.prototype.visitNonWordBoundary = function(t) {}, f.prototype.visitLookahead = function(t) {}, f.prototype.visitNegativeLookahead = function(t) {}, f.prototype.visitCharacter = function(t) {}, f.prototype.visitSet = function(t) {}, f.prototype.visitGroup = function(t) {}, f.prototype.visitGroupBackReference = function(t) {}, f.prototype.visitQuantifier = function(t) {}, {
                    RegExpParser: t,
                    BaseRegExpVisitor: f,
                    VERSION: "0.5.0"
                }
            }) ? r.apply(e, []) : r) || (t.exports = s)
        }
    }
]);