"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [14889, 30673, 37342, 40600, 75215], {
        5556: (e, t, u) => {
            u.d(t, {
                u: () => r
            });

            function r(e) {
                let {
                    blocks: t,
                    transaction: r
                } = e;
                if (1 === t.length) {
                    let e = t[0];
                    e && u(966980).wm(e) && (0, u(210191).T)({
                        store: e,
                        transaction: r
                    })
                }
            }
        },
        10123: (e, t, u) => {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e) {
                (0, u(570551).A)(1, arguments);
                var t = Object.prototype.toString.call(e);
                return e instanceof Date || "object" === r(e) && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : (("string" == typeof e || "[object String]" === t) && "u" > typeof console && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(Error().stack)), new Date(NaN))
            }
            u.d(t, {
                A: () => i
            })
        },
        43371: e => {
            e.exports = function() {
                return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFE])|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC3B\u200D\u2744|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDF])\u200D[\u2640\u2642])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g
            }
        },
        50171: (e, t, u) => {
            u.r(t), u.d(t, {
                exclamationMarkTriangleSmallIcon: () => a,
                iconDefinition: () => i
            }), u(296540);
            var r = u(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.49 1.87 13.01 11.75",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M7.9 5.281a.625.625 0 0 0-.625.625v2.5a.625.625 0 0 0 1.25 0v-2.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, r.jsx)("path", {
                            d: "M9.58 2.788c-.702-1.217-2.458-1.217-3.16 0l-4.677 8.1c-.702 1.216.176 2.737 1.58 2.737h9.354c1.405 0 2.283-1.52 1.58-2.738zm-2.078.625a.575.575 0 0 1 .996 0l4.677 8.1a.575.575 0 0 1-.498.862H3.324a.575.575 0 0 1-.498-.863z"
                        })]
                    })
                },
                a = (0, u(104509).wt)("exclamationMarkTriangleSmall", i, "small")
        },
        57168: (e, t, u) => {
            u.r(t), u.d(t, {
                ClientAIChatStore: () => D,
                UserChatPreferenceLocalStorageStore: () => n,
                defaultClientAIChatStore: () => l,
                defaultLegacyThreadConfig: () => s
            });
            var r = () => u(546605);
            u(898992), u(354520), u(430670), u(803949);
            let i = "confirmed_safe_by_user",
                a = {
                    acceptedInferenceKeys: [],
                    inferenceKeysToAnnotations: {},
                    inferenceKeysToMemories: {},
                    tags: [],
                    abortController: void 0,
                    stopInferencePromise: void 0,
                    temporarySteps: [],
                    inferences: [],
                    traceId: void 0,
                    draftTraceId: void 0,
                    wasForceStoppedByUser: !1,
                    requestInfo: void 0,
                    loading: !1,
                    currentUserInitiatedRunningInference: !1,
                    stagedData: {},
                    agentSearchResultsByToolResultStepId: {},
                    pendingStop: !1
                };
            class o extends r().Store {
                getInitialState() {
                    return a
                }
                resetState() {
                    var e;
                    null == (e = this.state.abortController) || e.abort(), this.setState(a)
                }
                getOrCreateTraceId() {
                    let e = this.state.traceId ? ? (0, u(4962).Ay)();
                    return this.state.traceId || this.setState({ ...this.state,
                        traceId: e
                    }), e
                }
                clearTraceId() {
                    this.setState({ ...this.state,
                        traceId: void 0
                    })
                }
                getOrCreateDraftTraceId() {
                    let e = this.state.draftTraceId ? ? (0, u(4962).Ay)();
                    return this.state.draftTraceId || this.setState({ ...this.state,
                        draftTraceId: e
                    }), e
                }
                setAgentSearchResultsForTool(e) {
                    let {
                        agentStepId: t,
                        toolCallId: u,
                        toolResultStepId: r,
                        results: i
                    } = e;
                    this.setState({ ...this.state,
                        agentSearchResultsByToolResultStepId: { ...this.state.agentSearchResultsByToolResultStepId,
                            [r]: {
                                agentStepId: t,
                                toolCallId: u,
                                results: i
                            }
                        }
                    })
                }
                getTemporaryAttachmentStagedDataOrInstantiate() {
                    let e = this.state.stagedData;
                    if (null != e && e.attachmentStagedData) return e.attachmentStagedData;
                    let t = {
                        stagedAttachmentUploadStore: new(u(729849)).Gi,
                        stagedClientSteps: [],
                        stagedEngineSteps: [],
                        stagedInferenceTranscriptSteps: []
                    };
                    return this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: t
                        }
                    }), t
                }
                getStagedAttachmentUploadStoreIfExists() {
                    var e;
                    let t = this.state.stagedData;
                    return null == t || null == (e = t.attachmentStagedData) ? void 0 : e.stagedAttachmentUploadStore
                }
                stageAttachmentInferenceTranscriptStep(e) {
                    let {
                        step: t
                    } = e, u = this.getTemporaryAttachmentStagedDataOrInstantiate(), r = { ...u,
                        stagedInferenceTranscriptSteps: [...u.stagedInferenceTranscriptSteps, t]
                    };
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: r
                        }
                    })
                }
                unstageAttachmentInferenceTranscriptStep(e) {
                    var t;
                    let {
                        fileId: u
                    } = e, r = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!r) return;
                    let i = r.stagedInferenceTranscriptSteps.filter(e => "attachment" !== e.type && "computer-file" !== e.type || e.fileUrl !== u);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...r,
                                stagedInferenceTranscriptSteps: i
                            }
                        }
                    })
                }
                clearStagedComputerFileSteps() {
                    var e;
                    let t = null == (e = this.state.stagedData) ? void 0 : e.attachmentStagedData;
                    if (!t) return;
                    let u = t.stagedInferenceTranscriptSteps.flatMap(e => "computer-file" === e.type ? [e.fileUrl] : []);
                    if (0 === u.length) return;
                    let r = t.stagedAttachmentUploadStore;
                    u.forEach(e => {
                        r.onDeleteFileUpload(e)
                    });
                    let i = t.stagedInferenceTranscriptSteps.filter(e => "computer-file" !== e.type);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...t,
                                stagedInferenceTranscriptSteps: i
                            }
                        }
                    })
                }
                markStagedAttachmentInferenceTranscriptStepAsSafe(e) {
                    var t, u;
                    let {
                        fileUrl: r
                    } = e, a = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!a) return;
                    let o = a.stagedInferenceTranscriptSteps.findIndex(e => "attachment" === e.type && e.fileUrl === r);
                    if (o < 0) return;
                    let n = a.stagedInferenceTranscriptSteps[o];
                    if ("attachment" !== n.type) return;
                    let s = null != (u = n.metadata) && u.guardrail ? { ...n.metadata.guardrail,
                            attachmentRisk: i
                        } : {
                            attachmentRisk: i
                        },
                        D = { ...n,
                            metadata: { ...n.metadata ? ? {},
                                guardrail : s
                            }
                        },
                        l = [...a.stagedInferenceTranscriptSteps];
                    l[o] = D, this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...a,
                                stagedInferenceTranscriptSteps: l
                            }
                        }
                    })
                }
                getAndClearStagedAssistantAttachmentSteps() {
                    var e;
                    let t = null == (e = this.state.stagedData) ? void 0 : e.attachmentStagedData;
                    if (!t) return;
                    let {
                        stagedInferenceTranscriptSteps: u
                    } = t;
                    return this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: void 0
                        }
                    }), u
                }
                getStagedMentionPointers() {
                    let {
                        mentionStagedData: e
                    } = this.state.stagedData;
                    return e ? [...e] : []
                }
                updateMentionedStagedData(e) {
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            mentionStagedData: new(u(227318)).d(e)
                        }
                    })
                }
            }
            let n = new(u(245541)).R({
                    key: "spacedScopedUserChatPreference",
                    namespace: u(274919).Bq,
                    important: !0,
                    trackingType: "preference"
                }),
                s = {
                    type: "search",
                    scopeForNextSearch: {
                        type: "everything"
                    }
                };
            class D extends r().Store {
                getInitialState() {
                    return {
                        showHistory: !1,
                        showDebug: !1,
                        loading: !1,
                        configForNewTranscripts: s,
                        userSelectedConfig: void 0,
                        model: void 0,
                        debugOverrides: {
                            usePromptCache: u(363256).e.withListenerIgnored(() => u(218744).default.checkGate({
                                gateName: "workflows_inference_replay"
                            })) ? "s3" : void 0,
                            emitAgentSearchExtractedResults: !0
                        },
                        threadRegistry: {},
                        isAIChatTranscriptSidePanelVisible: !1,
                        threadToStagedData: {},
                        primeInput: void 0
                    }
                }
                getOrCreateClientAIChatThreadStore(e) {
                    if (!this.state.threadRegistry[e]) {
                        let t = new o;
                        return this.setState({ ...this.state,
                            threadRegistry: { ...this.state.threadRegistry,
                                [e]: t
                            }
                        }), t
                    }
                    return this.state.threadRegistry[e]
                }
                getExistingClientAIChatThreadStore(e) {
                    return this.state.threadRegistry[e]
                }
                removeClientAIChatThreadStore(e) {
                    let {
                        threadRegistry: t
                    } = this.state, u = { ...t
                    };
                    delete u[e], this.setState({ ...this.state,
                        threadRegistry: u
                    })
                }
            }
            let l = new D;
            (0, u(202146).exposeDebugValue)("clientAiChatStore", l)
        },
        83723: (e, t, u) => {
            u.r(t), u.d(t, {
                AudioRecorder: () => p,
                MEDIA_STREAM_CHANGE_EVENT: () => c,
                PcmRecorder: () => m
            }), u(16280), u(944114), u(816573), u(878100), u(177936), u(748140), u(821903), u(491134), u(128845), u(237467), u(444732), u(979577), u(898992), u(823215), u(672577), u(430670), u(803949), u(581454);
            var r = () => u(104310);
            class i {
                _inputSampleRate;
                _outputSampleRate;
                constructor(e, t) {
                    this._inputSampleRate = e, this._outputSampleRate = t
                }
                downsample(e) {
                    return this.downSampleAudioFrame(e, this._inputSampleRate, this._outputSampleRate)
                }
                downSampleAudioFrame(e, t, u) {
                    if (u === t || u > t) return e;
                    let r = t / u,
                        i = Math.round(e.length / r),
                        a = new Float32Array(i),
                        o = 0,
                        n = 0;
                    for (; n < i;) {
                        let t = Math.round((n + 1) * r),
                            u = 0,
                            i = 0;
                        for (; o < t && o < e.length;) u += e[o++], i++;
                        a[n++] = u / i
                    }
                    return a
                }
            }
            var a = () => u(773352),
                o = () => u(416607),
                n = () => u(975162),
                s = () => u(228327),
                D = () => u(580022),
                l = () => u(154642),
                d = () => u(607825);
            u(814603), u(147566), u(198721);
            let c = "ms_change";
            class p {
                static meetingNotesCache = (0, u(716893).bB)();
                _mediaStreams;
                _emitter;
                recorder;
                onDataReceived;
                onStop;
                environment;
                startController;
                audioBuffer = [];
                currentStreamId = null;
                sampleRate;
                includeSystemAudio;
                splitBySource;
                enableMicrophoneEchoCancellation;
                saveAudioFileMetadata;
                constructor(e) {
                    this._emitter = (0, u(827380).A)(), this.recorder = new m, this.onDataReceived = e.onDataReceived, this.onStop = e.onStop, this.includeSystemAudio = e.includeSystemAudio, this.splitBySource = e.splitBySource ? ? !1, this.enableMicrophoneEchoCancellation = e.enableMicrophoneEchoCancellation ? ? !1, this.environment = e.environment, this.sampleRate = e.sampleRate ? ? 16e3, this.saveAudioFileMetadata = e.saveAudioFileMetadata
                }
                setOnDataReceived(e) {
                    this.onDataReceived = e
                }
                get emitter() {
                    return this._emitter
                }
                get isStoringLocalAudio() {
                    return void 0 !== this.saveAudioFileMetadata && void 0 !== p.meetingNotesCache
                }
                set mediaStreams(e) {
                    if (this._mediaStreams)
                        for (let e of this._mediaStreams)
                            for (let t of e.getTracks()) t.stop();
                    for (let t of e ? ? [])
                        for (let e of t.getTracks()) e.addEventListener("ended", async () => {
                            t.getTracks().every(e => "ended" === e.readyState) && "denied" === (await l().Ay.checkPermissions(this.includeSystemAudio)).audio && this.stop({
                                triggerOnStop: !0,
                                error: new(s()).d1("Audio permission denied")
                            })
                        });
                    for (let u of e ? ? []) {
                        var t;
                        let e = null == u || null == (t = u.getAudioTracks()[0]) ? void 0 : t.getSettings();
                        D().A.setState(d().X8.state.find(t => t.deviceId === (null == e ? void 0 : e.deviceId)))
                    }
                    this._mediaStreams = e, this._emitter.emit(c)
                }
                get mediaStreams() {
                    return this._mediaStreams
                }
                getPreferredOrDefaultDevice() {
                    let e = u(844561).d.state,
                        t = d().X8.state;
                    return (null == t ? void 0 : t.find(t => t.deviceId === (null == e ? void 0 : e.deviceId))) ? ? (null == t ? void 0 : t.find(t => t.label === (null == e ? void 0 : e.label))) ? ? t[0]
                }
                async start() {
                    if (void 0 === this.startController || this.startController.signal.aborted) {
                        var e;
                        this.startController = new AbortController;
                        let t = this.startController.signal;
                        if (null === this.currentStreamId) {
                            this.currentStreamId = (0, u(92513).JW)().slice(-4);
                            try {
                                p.meetingNotesCache && void 0 !== this.saveAudioFileMetadata && await p.meetingNotesCache.trimCache(9)
                            } catch (e) {
                                a().log({
                                    level: "error",
                                    from: "audioRecorderHelpers",
                                    type: "trimCacheError",
                                    error: (0, o().convertErrorToLog)(e)
                                })
                            }
                        }
                        this.audioBuffer = [];
                        let i = this.getPreferredOrDefaultDevice(),
                            D = u(844561).d.state,
                            l = i ? null != D && D.deviceId && i.deviceId === D.deviceId ? "preferred" : null != D && D.label && i.label === D.label ? "preferred_label_match" : "first_available" : "browser_default",
                            c = (0, u(601821).E)(),
                            m = async e => {
                                let t = performance.now();
                                this.environment.device.isBrowser && (0, r().u)({
                                    event: {
                                        eventName: "ai_meeting_notes_permission_requested",
                                        eventProperties: {
                                            permission_type: "microphone"
                                        }
                                    }
                                });
                                let u = 0;
                                for (; !e.aborted && u < 5;) {
                                    u++;
                                    let e = Date.now();
                                    try {
                                        let o = {
                                            deviceId: i ? {
                                                exact: i.deviceId
                                            } : void 0,
                                            echoCancellation: !1,
                                            noiseSuppression: !1,
                                            autoGainControl: !1,
                                            channelCount: 1
                                        };
                                        this.enableMicrophoneEchoCancellation && Reflect.set(o, "echoCancellation", "all");
                                        let n = await c.getUserMedia({
                                                audio: o
                                            }),
                                            s = Date.now() - e;
                                        this.environment.device.isBrowser && (0, r().u)({
                                            event: {
                                                eventName: "ai_meeting_notes_permission_result",
                                                eventProperties: {
                                                    permission_type: "microphone",
                                                    result: "granted",
                                                    elapsed_ms_since_request: s,
                                                    likely_user_was_prompted: s >= 600
                                                }
                                            }
                                        });
                                        let D = n.getAudioTracks()[0],
                                            p = null == D ? void 0 : D.getSettings();
                                        return a().log({
                                            level: "info",
                                            from: "audioRecorderHelpers",
                                            type: "getUserMediaSuccess",
                                            data: {
                                                miscDataToConvertToString: {
                                                    attemptElapsedMs: s,
                                                    attempt: u,
                                                    requestedDeviceId: null == i ? void 0 : i.deviceId,
                                                    requestedDeviceLabel: null == i ? void 0 : i.label,
                                                    requestedDeviceGroupId: null == i ? void 0 : i.groupId,
                                                    deviceSelectionMethod: l,
                                                    acquiredDeviceId: null == p ? void 0 : p.deviceId,
                                                    acquiredGroupId: null == p ? void 0 : p.groupId,
                                                    acquiredSampleRate: null == p ? void 0 : p.sampleRate,
                                                    acquiredChannelCount: null == p ? void 0 : p.channelCount,
                                                    acquiredAutoGainControl: null == p ? void 0 : p.autoGainControl,
                                                    acquiredEchoCancellation: null == p ? void 0 : p.echoCancellation,
                                                    acquiredNoiseSuppression: null == p ? void 0 : p.noiseSuppression,
                                                    trackReadyState: null == D ? void 0 : D.readyState,
                                                    trackMuted: null == D ? void 0 : D.muted,
                                                    trackEnabled: null == D ? void 0 : D.enabled,
                                                    trackLabel: null == D ? void 0 : D.label,
                                                    availableInputDeviceCount: d().X8.state.length
                                                }
                                            }
                                        }), {
                                            stream: n,
                                            elapsedMs: performance.now() - t,
                                            attemptCount: u
                                        }
                                    } catch (t) {
                                        if (a().log({
                                                level: "error",
                                                from: "audioRecorderHelpers",
                                                type: "getUserMediaFailed",
                                                error: (0, o().convertErrorToLog)(t),
                                                data: {
                                                    miscDataToConvertToString: {
                                                        attempt: u,
                                                        requestedDeviceId: null == i ? void 0 : i.deviceId,
                                                        requestedDeviceLabel: null == i ? void 0 : i.label,
                                                        deviceSelectionMethod: l,
                                                        availableInputDeviceCount: d().X8.state.length,
                                                        errorName: t instanceof Error ? t.name : "unknown"
                                                    }
                                                }
                                            }), t instanceof Error) {
                                            let u = "NotAllowedError" === t.name || "NotFoundError" === t.name || "OverconstrainedError" === t.name;
                                            if (this.environment.device.isBrowser) {
                                                let u = Date.now() - e,
                                                    i = "NotAllowedError" === t.name ? "denied" : "NotFoundError" === t.name || "OverconstrainedError" === t.name ? "no_devices" : "unknown_error";
                                                (0, r().u)({
                                                    event: {
                                                        eventName: "ai_meeting_notes_permission_result",
                                                        eventProperties: {
                                                            permission_type: "microphone",
                                                            result: i,
                                                            elapsed_ms_since_request: u,
                                                            likely_user_was_prompted: u >= 300
                                                        }
                                                    }
                                                })
                                            }
                                            if (u) throw t
                                        }
                                        await (0, n().wR)(500)
                                    }
                                }
                                throw new(s()).Tn
                            },
                            f = async e => {
                                if (!this.includeSystemAudio) return;
                                let t = performance.now();
                                a().log({
                                    level: "info",
                                    from: "audioRecorderHelpers",
                                    type: "getDisplayMediaAttempt",
                                    data: {
                                        miscDataToConvertToString: {
                                            includeSystemAudio: this.includeSystemAudio
                                        }
                                    }
                                });
                                let u = 0;
                                for (; !e.aborted && u < 5;) {
                                    u++;
                                    let e = performance.now();
                                    try {
                                        let r = await c.getDisplayMedia({
                                                video: !1,
                                                audio: !0,
                                                systemAudio: this.includeSystemAudio ? "include" : void 0
                                            }),
                                            i = performance.now() - e;
                                        for (let e of (a().log({
                                                level: "info",
                                                from: "audioRecorderHelpers",
                                                type: "getDisplayMediaSuccess",
                                                data: {
                                                    miscDataToConvertToString: {
                                                        attemptElapsedMs: i,
                                                        attempt: u
                                                    }
                                                }
                                            }), r.getVideoTracks())) r.removeTrack(e), e.stop();
                                        return {
                                            stream: r,
                                            elapsedMs: performance.now() - t,
                                            attemptCount: u
                                        }
                                    } catch (e) {
                                        if (a().log({
                                                level: "error",
                                                from: "audioRecorderHelpers",
                                                type: "getDisplayMediaFailed",
                                                error: (0, o().convertErrorToLog)(e),
                                                data: {
                                                    miscDataToConvertToString: {
                                                        includeSystemAudio: this.includeSystemAudio,
                                                        attempt: u
                                                    }
                                                }
                                            }), e instanceof Error && "NotReadableError" === e.name) throw new(s()).$W;
                                        await (0, n().wR)(500)
                                    }
                                }
                                throw new(s()).Tn
                            },
                            h = async e => {
                                let [t, u] = await Promise.allSettled([m(e), f(e)]), r = e => {
                                    if ("fulfilled" === e.status && e.value)
                                        for (let t of e.value.stream.getTracks()) t.stop()
                                };
                                if ("rejected" === t.status) throw r(u), a().log({
                                    level: "error",
                                    from: "audioRecorderHelpers",
                                    type: "acquireMediaStreamsMicFailed",
                                    error: (0, o().convertErrorToLog)(t.reason),
                                    data: {
                                        miscDataToConvertToString: {
                                            systemAudioStatus: u.status
                                        }
                                    }
                                }), t.reason;
                                if (this.includeSystemAudio && "rejected" === u.status) throw r(t), a().log({
                                    level: "error",
                                    from: "audioRecorderHelpers",
                                    type: "acquireMediaStreamsSystemAudioFailed",
                                    error: (0, o().convertErrorToLog)(u.reason),
                                    data: {
                                        miscDataToConvertToString: {
                                            micStreamElapsedMs: t.value.elapsedMs
                                        }
                                    }
                                }), u.reason;
                                return {
                                    micResult: t.value,
                                    systemAudioResult: "fulfilled" === u.status ? u.value : void 0
                                }
                            },
                            F = Math.max(u(218744).default.getConfigKey("meeting_notes_media_acquisition_config", "timeoutMs"), 1e4),
                            C = performance.now(),
                            g = new AbortController,
                            v = h(g.signal),
                            E = await (0, n().nQ)(F, v);
                        if (E.timeout) throw g.abort(), v.then(({
                            micResult: e,
                            systemAudioResult: t
                        }) => {
                            let u = performance.now() - C;
                            for (let r of (a().log({
                                    level: "info",
                                    from: "audioRecorderHelpers",
                                    type: "acquireMediaStreamsSuccessAfterTimeout",
                                    data: {
                                        miscDataToConvertToString: {
                                            totalElapsedMs: u,
                                            micStreamElapsedMs: e.elapsedMs,
                                            micStreamAttemptCount: e.attemptCount,
                                            systemAudioStreamElapsedMs: null == t ? void 0 : t.elapsedMs,
                                            systemAudioStreamAttemptCount: null == t ? void 0 : t.attemptCount
                                        }
                                    }
                                }), e.stream.getTracks())) r.stop();
                            if (t)
                                for (let e of t.stream.getTracks()) e.stop()
                        }).catch(() => {}), a().log({
                            level: "warning",
                            from: "audioRecorderHelpers",
                            type: "acquireMediaStreamsTimeout",
                            data: {
                                miscDataToConvertToString: {
                                    timeoutMs: F,
                                    elapsedMs: performance.now() - C
                                }
                            }
                        }), new(s()).Tn;
                        let {
                            micResult: y,
                            systemAudioResult: S
                        } = E.result, A = y.stream.getAudioTracks()[0], B = null == A ? void 0 : A.getSettings(), w = null == S ? void 0 : S.stream.getAudioTracks(), I = null == w || null == (e = w[0]) ? void 0 : e.getSettings();
                        a().log({
                            level: "info",
                            from: "audioRecorderHelpers",
                            type: "acquireMediaStreamsSuccess",
                            data: {
                                miscDataToConvertToString: {
                                    totalElapsedMs: performance.now() - C,
                                    micStreamElapsedMs: y.elapsedMs,
                                    systemAudioStreamElapsedMs: null == S ? void 0 : S.elapsedMs,
                                    includeSystemAudio: this.includeSystemAudio,
                                    micDeviceLabel: null == A ? void 0 : A.label,
                                    micDeviceId: null == B ? void 0 : B.deviceId,
                                    micSampleRate: null == B ? void 0 : B.sampleRate,
                                    systemAudioTrackCount: null == w ? void 0 : w.length,
                                    systemAudioSampleRate: null == I ? void 0 : I.sampleRate
                                }
                            }
                        });
                        let T = y.stream,
                            b = null == S ? void 0 : S.stream;
                        if (await d().Ay.updateMediaDevices(), b ? this.mediaStreams = [T, b] : this.mediaStreams = [T], t.aborted) {
                            for (let e of this.mediaStreams ? ? [])
                                for (let t of e.getTracks()) t.stop();
                            return
                        }
                        let _ = void 0 !== this.saveAudioFileMetadata && this.splitBySource;
                        if (await this.recorder.record({
                                mediaStreams: this.mediaStreams ? ? [],
                                onDataReceived: (e, u) => {
                                    t.aborted || (void 0 === this.saveAudioFileMetadata || _ || this.appendToLocalAudioBuffer(e), this.onDataReceived(e, u))
                                },
                                onArchiveDataReceived: _ ? e => {
                                    t.aborted || this.appendToLocalAudioBuffer(e)
                                } : void 0,
                                desiredSampleRate: this.sampleRate,
                                splitBySource: this.splitBySource
                            }), t.aborted) {
                            this.recorder.releaseMediaResources(), this.mediaStreams = void 0;
                            return
                        }
                        u(844561).d.addListener(this.handleDeviceChange), d().X8.addListener(this.handleDeviceChange)
                    }
                }
                appendToLocalAudioBuffer(e) {
                    this.audioBuffer.push(...e), this.maybeWriteAudioBufferToOPFS({
                        forceWrite: !1
                    })
                }
                maybeWriteAudioBufferToOPFS(e) {
                    let t = 10 * this.sampleRate;
                    if (void 0 !== this.saveAudioFileMetadata && (e.forceWrite || this.audioBuffer.length > t) && p.meetingNotesCache && this.environment.currentUser.id && this.currentStreamId) {
                        var r;
                        let {
                            blockStore: e
                        } = this.saveAudioFileMetadata, t = e.id, i = null == (r = (0, u(869708).y1)(e, "transcript")) ? void 0 : r.id;
                        if (void 0 === i) return;
                        p.meetingNotesCache.write((0, u(480534).G9)({
                            userId: this.environment.currentUser.id,
                            blockId: t,
                            transcriptTabId: i,
                            recordingId: this.currentStreamId,
                            fileType: "PCM_F32_16000_MONO"
                        }), new Float32Array(this.audioBuffer).buffer).catch(e => {
                            a().log({
                                level: "error",
                                from: "audioRecorderHelpers",
                                type: "writeToOPFSFailed",
                                error: (0, o().convertErrorToLog)(e),
                                data: {
                                    miscDataToConvertToString: {
                                        rootBlockId: t
                                    }
                                }
                            })
                        }), this.audioBuffer = []
                    }
                }
                stop(e) {
                    let {
                        error: t,
                        triggerOnStop: r = !0,
                        triggerFlushToOPFS: i = !1
                    } = e || {};
                    if (void 0 !== this.startController && !this.startController.signal.aborted) {
                        if (this.handleDeviceChangeDebounced.cancel(), this.startController.abort(), this.recorder.releaseMediaResources(), this.mediaStreams = void 0, (r || i) && this.maybeWriteAudioBufferToOPFS({
                                forceWrite: !0
                            }), r) {
                            var a;
                            this.currentStreamId = null, null == (a = this.onStop) || a.call(this, t)
                        }
                        u(844561).d.removeListener(this.handleDeviceChange), d().X8.removeListener(this.handleDeviceChange)
                    }
                }
                deviceChangeEventCount = 0;
                handleDeviceChangeImpl = async () => {
                    var e;
                    let t = this.deviceChangeEventCount;
                    this.deviceChangeEventCount = 0;
                    let r = null == (e = this.mediaStreams) || null == (e = e.flatMap(e => e.getAudioTracks())) || null == (e = e.map(e => e.getSettings())) ? void 0 : e.find(e => void 0 !== e),
                        i = this.getPreferredOrDefaultDevice(),
                        n = null == r ? void 0 : r.deviceId,
                        s = null == r ? void 0 : r.groupId,
                        D = null == i ? void 0 : i.deviceId,
                        l = null == i ? void 0 : i.groupId;
                    if (!r || i && (D !== n || l !== s)) {
                        a().log({
                            level: "info",
                            from: "audioRecorderHelpers",
                            type: "handleDeviceChange",
                            data: {
                                miscDataToConvertToString: {
                                    previousDeviceId: n,
                                    previousGroupId: s,
                                    newDeviceId: D,
                                    newGroupId: l,
                                    coalescedEventCount: t
                                }
                            }
                        }), this.stop({
                            triggerOnStop: !1,
                            triggerFlushToOPFS: !0
                        });
                        try {
                            await this.start(), a().log({
                                level: "info",
                                from: "audioRecorderHelpers",
                                type: "handleDeviceChangeRestartSuccess",
                                data: {
                                    miscDataToConvertToString: {
                                        newDeviceId: D,
                                        coalescedEventCount: t
                                    }
                                }
                            })
                        } catch (e) {
                            a().log({
                                level: "error",
                                from: "audioRecorderHelpers",
                                type: "handleDeviceChangeRestartFailed",
                                error: (0, o().convertErrorToLog)(e),
                                data: {
                                    miscDataToConvertToString: {
                                        newDeviceId: D,
                                        coalescedEventCount: t
                                    }
                                }
                            }), this.destroy((0, u(161179).A)(e))
                        }
                    }
                };
                handleDeviceChangeDebounced = (0, u(381453).sg)(() => {
                    this.handleDeviceChangeImpl()
                }, 2 * u(695216).TD, {
                    trailing: !0
                });
                handleDeviceChange = () => {
                    this.deviceChangeEventCount++, this.handleDeviceChangeDebounced()
                };
                destroy(e) {
                    this.handleDeviceChangeDebounced.cancel(), u(844561).d.removeListener(this.handleDeviceChange), d().X8.removeListener(this.handleDeviceChange), this.stop({
                        triggerOnStop: !0,
                        error: e
                    })
                }
            }
            class m {
                _audioWorkletNodes;
                _sourceNodes;
                _audioContext;
                set sourceNodes(e) {
                    this._sourceNodes && this._sourceNodes.forEach(e => e.disconnect()), this._sourceNodes = e
                }
                set audioWorkletNodes(e) {
                    this._audioWorkletNodes && this._audioWorkletNodes.forEach(e => e.disconnect()), this._audioWorkletNodes = e
                }
                set audioContext(e) {
                    this._audioContext && this._audioContext.close(), this._audioContext = e
                }
                get audioContext() {
                    return this._audioContext
                }
                async record(e) {
                    let {
                        mediaStreams: t,
                        onDataReceived: r,
                        onArchiveDataReceived: a,
                        desiredSampleRate: o,
                        splitBySource: n = !1
                    } = e;
                    if (this.releaseMediaResources(), this.audioContext = (0, u(601821).G)(o), this.audioContext.audioWorklet) try {
                        let e, s, D = new i(this.audioContext.sampleRate, o),
                            l = this.audioContext,
                            d = t.map(e => l.createMediaStreamSource(e));
                        await this.audioContext.audioWorklet.addModule(new URL(u(172136), u.b));
                        let c = e => t => {
                                let u = t.data;
                                if (u instanceof Float32Array) {
                                    let t = D.downsample(u);
                                    e(t)
                                }
                            },
                            p = n ? [...d.map((e, t) => {
                                let u = new AudioWorkletNode(l, "pcm-processor"),
                                    i = 0 === t ? "microphone" : "system_audio";
                                return u.port.onmessage = c(e => r(e, i)), e.connect(u), u
                            }), ...a ? [((e = new AudioWorkletNode(l, "pcm-processor")).port.onmessage = c(a), d.forEach(t => t.connect(e)), e)] : []] : [((s = new AudioWorkletNode(l, "pcm-processor")).port.onmessage = c(e => r(e)), d.forEach(e => e.connect(s)), s)];
                        this._audioWorkletNodes = p, this._sourceNodes = d
                    } catch {
                        console.info("unable to create worklet"), this.releaseMediaResources()
                    } else this.releaseMediaResources()
                }
                releaseMediaResources() {
                    this.sourceNodes = void 0, this.audioWorkletNodes = void 0, this.audioContext = void 0
                }
            }
        },
        85071: (e, t, u) => {
            u.r(t), u.d(t, {
                iconDefinition: () => r,
                integrationIcon: () => i
            }), u(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                i = (0, u(104509).wt)("integration", r, "default")
        },
        95783: (e, t, u) => {
            u.d(t, {
                w: () => r
            }), u(16280), u(18107), u(967357), u(898992), u(737550);

            function r(e) {
                var t, r, i, a, o, n;
                let {
                    environment: s,
                    createBlockItem: D,
                    from: l,
                    inMemoryRecordCache: d,
                    transaction: c,
                    selection: p
                } = e;
                if (!D.templateRootBlockId || !D.createTemplate) throw Error("Invalid createBlock item.");
                let m = (p.length > 0 ? p[0].getSpaceId() : void 0) ? ? e.spaceId ? ? (null == (t = u(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.getSpaceId()),
                    f = m ? s.idCreator.getSpaceIdCreatorSync(m) : void 0,
                    h = p.some(e => (0, u(398346).l)(e)),
                    F = D.createTemplate(s),
                    {
                        targetBlockStore: C
                    } = (0, u(963771).initializeTemplate)({
                        environment: s,
                        sourceBlockId: D.templateRootBlockId,
                        targetBlockPointer: (0, u(295447).zP)({
                            environment: s,
                            table: u(832375).evP,
                            spaceId: m
                        }),
                        sourceBlockSubtree: (0, u(412951).partialRecordMapToRecordMap)(F),
                        targetRecordCache: d,
                        transaction: c,
                        deepCopyTransclusionContainers: !0,
                        resolveTemplateVariables: !h,
                        spaceIdCreator: f
                    });
                null == (r = D.postCreateCallback) || r.call(D, C, s, c);
                let [g] = p;
                if (u(205103).eY({
                        environment: s,
                        store: C,
                        transaction: c,
                        previousStore: g
                    }), l && D.blockType) {
                    let e, t, r, d, c = D.collectionViewType,
                        m = 0 !== p.length ? null == (i = p[0]) ? void 0 : i.getParentCollectionIdUpToTwoLevels() : void 0;
                    if ("chart" === c) {
                        let u = null == (a = C.getCollectionViewStores()) ? void 0 : a.at(0);
                        e = null == u || null == (o = u.getChartConfig()) ? void 0 : o.type, t = null == u ? void 0 : u.getChartPlaceholderType()
                    }
                    if ("form_editor" === c) {
                        let e = null == (n = C.getCollectionViewStores()) ? void 0 : n.at(0),
                            t = null == e ? void 0 : e.getFormBlockStore();
                        r = null == t ? void 0 : t.id, d = null == e ? void 0 : e.id
                    }
                    let {
                        collectionId: f,
                        ownedCollectionCount: h,
                        linkedCollectionCount: F
                    } = (0, u(633171).P)(C, {
                        skipPages: !1
                    }), g = {
                        from: l,
                        collection_id: f,
                        owned_collection_count: h,
                        linked_collection_count: F,
                        view_type: "inline" === c || "full_page" === c ? "table" : c,
                        is_toggleable: D.isToggleable,
                        automation_id: C.getAutomationId(),
                        new_page_id: "page" === D.blockType ? C.id : void 0,
                        creating_block_id: C.id,
                        parent_collection_id: m,
                        is_full_screen: "full_page" === c,
                        chart_type: "placeholder" === e ? t : e,
                        is_chart_placeholder: "placeholder" === e,
                        form_id: r,
                        view_id: d
                    }, v = D.blockType;
                    u(549960).tP(v) ? u(549960).vH(s, { ...g,
                        type: v,
                        collection_id: f || ""
                    }) : u(549960).vH(s, { ...g,
                        type: v
                    })
                }
                return C
            }
        },
        150945: (e, t, u) => {
            function r(e) {
                let t, {
                        environment: r,
                        createBlockItem: i,
                        selection: a,
                        transaction: o,
                        analyticsFrom: n,
                        preventSetSelection: s
                    } = e,
                    D = u(584265).default.getCurrentRecordCache(),
                    l = new(u(303541)).UF({
                        environment: r,
                        userFlow: (null == i ? void 0 : i.blockType) === "page" ? "user_flow_create_page" : "user_flow_create_block",
                        from: n,
                        succeedOnEnqueue: !0
                    });
                if ((0, u(194020).E)(r, (0, u(974410).f)(a[0])) && i && D) {
                    let e = u(95783).w({
                        environment: r,
                        createBlockItem: i,
                        transaction: o,
                        inMemoryRecordCache: D,
                        from: n,
                        selection: a
                    });
                    l.track(e.pointer, o), t = (0, u(210318).L)({
                        environment: r,
                        blocksToInsert: [e],
                        target: a,
                        transaction: o,
                        replaceEmptyTextBlock: !1,
                        preventSetSelection: s
                    })[0]
                } else l.fail("invalid_state");
                return t
            }

            function i(e) {
                let t, {
                        environment: r,
                        createBlockItem: i,
                        selection: a,
                        transaction: o,
                        analyticsFrom: n,
                        preventSetSelection: s
                    } = e,
                    D = u(584265).default.getCurrentRecordCache();
                if ((0, u(194020).E)(r, (0, u(974410).f)(a[0])) && i && D) {
                    let e = u(95783).w({
                        environment: r,
                        createBlockItem: i,
                        transaction: o,
                        inMemoryRecordCache: D,
                        from: n,
                        selection: a
                    });
                    t = (0, u(199894).t)({
                        environment: r,
                        blocks: [e],
                        selection: a,
                        transaction: o,
                        preventSetSelection: s
                    })[0]
                }
                return t
            }

            function a(e) {
                let {
                    environment: t,
                    selection: i,
                    transaction: a
                } = e, o = r({ ...e,
                    preventSetSelection: !0
                });
                if (o) {
                    var n;
                    (0, u(270819).x)({
                        environment: t,
                        insertedStores: [o],
                        isCreated: !0
                    });
                    let e = u(708929).Uv.getMode(o);
                    if ("suggest" === e) {
                        let e = (0, u(714577).R)(t, a, o);
                        (0, u(132993).t)(a, o, {
                            id: u(92513).JW(),
                            type: "insert",
                            discussionId: e.id
                        }), (0, u(941538).c)({
                            environment: t,
                            transaction: a,
                            discussionStore: e,
                            addModifiedBlockIdsAfter: [o.id]
                        })
                    }
                    "suggest" === e && null != (n = o.getNavigableBlockStore({
                        skipCurrent: !0
                    })) && n.isCommentOnly() || (0, u(5556).u)({
                        transaction: a,
                        blocks: i
                    })
                }
                return o
            }

            function o(e) {
                let {
                    blocks: t,
                    transaction: i,
                    environment: a,
                    skipAnalytics: o
                } = e, n = r({
                    environment: a,
                    selection: t,
                    createBlockItem: u(992140).ry.text,
                    analyticsFrom: o ? void 0 : "text_insert_below",
                    transaction: i
                });
                return n && u(374176).default.afterNextFlush(() => {
                    (0, u(464515).z)({
                        environment: a,
                        blockStore: n,
                        insertedTextBlockLocation: "below",
                        editSelection: u(182553).h,
                        getRectFromStore: u(240414).T.getRectFromStore.bind(u(240414).T)
                    })
                }), n
            }

            function n(e) {
                let {
                    blocks: t,
                    transaction: r,
                    environment: a,
                    skipAnalytics: o
                } = e, n = i({
                    environment: a,
                    selection: t,
                    createBlockItem: u(992140).ry.text,
                    analyticsFrom: o ? void 0 : "text_insert_below",
                    transaction: r
                });
                return n && u(374176).default.afterNextFlush(() => {
                    (0, u(464515).z)({
                        environment: a,
                        blockStore: n,
                        insertedTextBlockLocation: "above",
                        editSelection: u(182553).h,
                        getRectFromStore: u(240414).T.getRectFromStore.bind(u(240414).T)
                    })
                }), n
            }
            u.r(t), u.d(t, {
                insertBlockAbove: () => i,
                insertBlockAndEdit: () => a,
                insertBlockBelow: () => r,
                insertTextAbove: () => n,
                insertTextBelow: () => o
            })
        },
        154642: (e, t, u) => {
            u.d(t, {
                Ay: () => l,
                Kj: () => n
            }), u(16280);
            var r = () => u(546605);

            function i(e) {
                for (let t of e.getTracks()) t.stop()
            }
            async function a() {
                if (!window.isSecureContext) return u(347971).wv;
                try {
                    let e = (0, u(601821).E)(),
                        t = await e.getUserMedia({
                            video: !1,
                            audio: !0
                        });
                    return i(t), u(347971).a3
                } catch (t) {
                    let {
                        displayDictationPermissionSnackbar: e
                    } = await Promise.all([u.e(9773), u.e(55373), u.e(36192), u.e(40994), u.e(57042), u.e(54280), u.e(16712), u.e(93186), u.e(80139), u.e(67542), u.e(15389), u.e(97732), u.e(23519), u.e(63771), u.e(53050), u.e(87353), u.e(45213), u.e(5721), u.e(57688), u.e(64696), u.e(87971), u.e(79349), u.e(76135), u.e(61842), u.e(71136), u.e(86102), u.e(4902)]).then(u.bind(u, 164093));
                    if (t instanceof Error) switch (t.name) {
                        case u(347971).nY:
                            return e(u(347971).JS), u(347971).JS;
                        case u(347971).V9:
                        case u(347971).mL:
                            return e(u(347971).rP), u(347971).rP
                    }
                    return e(u(347971).JC), u(347971).JC
                }
            }
            let o = (0, u(381453).nF)(a, 1e3);
            async function n() {
                if (!window.isSecureContext) return u(347971).wv;
                try {
                    let e = (0, u(601821).E)(),
                        t = await e.getDisplayMedia({
                            video: !1,
                            audio: !0,
                            systemAudio: "include"
                        });
                    return i(t), u(347971).a3
                } catch (e) {
                    return u(773352).log({
                        level: "error",
                        from: "checkScreenRecordingPermissionsByTesting",
                        error: (0, u(416607).convertErrorToLog)(e),
                        type: "checkScreenRecordingPermissionsByTestingUnableToCaptureSystemAudio"
                    }), u(347971).JC
                }
            }
            let s = (0, u(381453).nF)(n, 1e3);
            class D extends r().Store {
                async checkPermissions(e) {
                    let t = await o(),
                        r = e ? await s() : u(347971).wg;
                    return this.setState({ ...this.state,
                        audio: t,
                        screenRecording: r
                    }), {
                        audio: t,
                        screenRecording: r
                    }
                }
                getHasAttemptedScreenRecordingPermissions() {
                    return this.state.hasAttemptedScreenRecordingPermissions
                }
                setHasAttemptedScreenRecordingPermissions(e) {
                    this.setState({ ...this.state,
                        hasAttemptedScreenRecordingPermissions: e
                    })
                }
                getInitialState() {
                    let e = window.isSecureContext ? u(347971).wg : u(347971).wv;
                    return {
                        audio: e,
                        screenRecording: e,
                        hasAttemptedScreenRecordingPermissions: void 0
                    }
                }
            }
            let l = new D
        },
        172136: (e, t, u) => {
            e.exports = u.p + "f777cc7996a6bfbe.js"
        },
        177861: (e, t, u) => {
            function r(e) {
                let t = 1;
                return e.replace(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g, (e, u, r, i) => {
                    let a = encodeURIComponent(u),
                        o = encodeURIComponent(r),
                        n = encodeURIComponent(i),
                        s = encodeURIComponent(",");
                    return `[**[${t++}]**](#citation:${a}${s}${o}${s}${n})`
                })
            }

            function i(e, t) {
                let u = {
                    stepCitations: { ...e.stepCitations
                    }
                };
                for (let [e, r] of Object.entries(t.stepCitations)) {
                    if (!u.stepCitations[e]) {
                        u.stepCitations[e] = {
                            claims: [...r.claims],
                            artifacts: [...r.artifacts]
                        };
                        continue
                    }
                    let t = new Set(u.stepCitations[e].claims.map(e => e.id));
                    for (let i of r.claims) t.has(i.id) || u.stepCitations[e].claims.push(i);
                    let i = new Set(u.stepCitations[e].artifacts.map(e => e.id));
                    for (let t of r.artifacts) i.has(t.id) || u.stepCitations[e].artifacts.push(t)
                }
                return u
            }

            function a(e) {
                try {
                    let t = [];
                    for (let u in e.stepCitations)
                        for (let r of e.stepCitations[u].artifacts || []) r.citationInfo && t.push(r.citationInfo);
                    let u = t.length,
                        r = {};
                    for (let e of t) {
                        if (!e) continue;
                        let t = "unknown";
                        "notion" === e.citationType ? t = "notion" : "universal_search" === e.citationType && (t = e.target || "unknown"), r[t] = (r[t] || 0) + 1
                    }
                    return {
                        allArtifacts: t,
                        resultsBySource: r,
                        numSearchResults: u
                    }
                } catch (e) {
                    return {
                        allArtifacts: [],
                        resultsBySource: {},
                        numSearchResults: 0
                    }
                }
            }

            function o(e, t) {
                try {
                    let n = function(e) {
                            let t = [];
                            for (let u of e.matchAll(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g)) {
                                let [, e, r, i] = u;
                                ("claim" === r || "artifact" === r) && t.push({
                                    planKey: e,
                                    citationType: r,
                                    resourceId: i
                                })
                            }
                            return t
                        }(e),
                        s = {},
                        D = new Set;
                    for (let e of n) {
                        let {
                            planKey: n,
                            citationType: l,
                            resourceId: d
                        } = e;
                        try {
                            var u, r, i, a, o;
                            let e;
                            if (!n || !l || !d) continue;
                            let c = t.stepCitations[n];
                            if (!c) continue;
                            if ("claim" === l) {
                                let t = null == (r = c.claims) ? void 0 : r.find(e => e.id === d);
                                null != t && null != (i = t.supportingArtifactIds) && i[0] && (e = null == (a = c.artifacts) ? void 0 : a.find(e => e.id === t.supportingArtifactIds[0]))
                            } else "artifact" === l && (e = null == (o = c.artifacts) ? void 0 : o.find(e => e.id === d));
                            if (null != (u = e) && u.citationInfo) {
                                let t = "unknown";
                                "notion" === e.citationInfo.citationType ? (t = "notion", D.add(e.citationInfo.pageId)) : "universal_search" === e.citationInfo.citationType && (t = e.citationInfo.target || "unknown"), s[t] = (s[t] || 0) + 1
                            }
                        } catch (e) {
                            continue
                        }
                    }
                    let l = Object.values(s).reduce((e, t) => e + t, 0);
                    return {
                        citationsBySource: s,
                        numCitationsShown: l,
                        citationPageIds: Array.from(D)
                    }
                } catch (e) {
                    return {
                        citationsBySource: {},
                        numCitationsShown: 0,
                        citationPageIds: []
                    }
                }
            }

            function n(e) {
                let t = e.findLast(e => "researcher-report" === e.type);
                return {
                    citationInfo: t && t.citationInfo ? t.citationInfo : {
                        stepCitations: {}
                    },
                    reportContent: (null == t ? void 0 : t.value) || ""
                }
            }
            u.d(t, {
                Mi: () => i,
                VJ: () => n,
                W6: () => a,
                y5: () => r,
                ye: () => o
            }), u(410838), u(944114), u(517642), u(658004), u(733853), u(845876), u(432475), u(515024), u(731698), u(898992), u(354520), u(672577), u(581454), u(908872), u(737550)
        },
        199894: (e, t, u) => {
            u.d(t, {
                t: () => r
            }), u(16280), u(898992), u(672577), u(581454);

            function r(e) {
                let {
                    environment: t,
                    selection: r,
                    transaction: i,
                    preventSetSelection: a
                } = e, {
                    blocks: o
                } = e, n = (0, u(385941).Z)();
                if (!n) throw Error("No root store.");
                if (r.length > 0) {
                    let e = r[0],
                        n = u(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!n || !n.props.onInsertAbove) throw Error("No Selectable found.");
                    let s = n.props.onInsertAbove({
                        insertStores: o,
                        transaction: i
                    });
                    return a || (0, u(854924).t)({
                        environment: t,
                        stores: s
                    }), s
                } {
                    let e = n.getContentStore(),
                        r = o.map(t => (0, u(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: i
                        }).childStore);
                    return a || (0, u(854924).t)({
                        environment: t,
                        stores: r
                    }), r
                }
            }
        },
        228327: (e, t, u) => {
            u.d(t, {
                $W: () => a,
                Dg: () => D,
                E6: () => l,
                Rv: () => s,
                Tn: () => o,
                XG: () => n,
                d1: () => i,
                eY: () => d
            });
            var r = () => u(101787);
            class i extends r().WXf {
                constructor(e) {
                    super({
                        level: "error",
                        status: 500,
                        name: "DictationAudioRecorderFailedError",
                        message: e || "Audio recorder failed",
                        retryable: !1
                    })
                }
            }
            r().WXf;
            class a extends r().WXf {
                constructor() {
                    super({
                        level: "error",
                        status: 500,
                        name: "DictationSystemAudioHardwareError",
                        message: "System audio hardware error",
                        retryable: !1
                    })
                }
            }
            class o extends r().WXf {
                constructor() {
                    super({
                        level: "error",
                        status: 500,
                        name: "DictationStartTimeoutError",
                        message: "Dictation start timeout",
                        retryable: !0
                    })
                }
            }
            class n extends r().WXf {
                constructor(e) {
                    super({
                        level: "error",
                        status: 429,
                        name: "DictationRateLimitError",
                        message: e || "Rate limit exceeded",
                        retryable: !1
                    })
                }
            }
            class s extends r().WXf {
                constructor(e) {
                    super({
                        level: "error",
                        status: 403,
                        name: "DictationForbiddenError",
                        message: e || "Access forbidden",
                        retryable: !1
                    })
                }
            }
            class D extends r().WXf {
                constructor(e) {
                    super({
                        level: "error",
                        status: 403,
                        name: "DictationUpgradeRequiredError",
                        message: e || "Workspace upgrade required",
                        retryable: !1
                    })
                }
            }
            class l extends r().WXf {
                constructor(e, t) {
                    super({
                        level: "error",
                        status: t && (0, u(654070).Mh)(t) ? t : 500,
                        name: "DictationOpenAIError",
                        message: e,
                        retryable: !0
                    })
                }
            }
            class d extends r().WXf {
                constructor(e) {
                    super({
                        level: "error",
                        status: 400,
                        name: "DictationMissingUserOrSpaceError",
                        message: e || "Missing user or space information",
                        retryable: !1
                    })
                }
            }
        },
        250943: (e, t, u) => {
            u.d(t, {
                E: () => r
            }), u(581454);

            function r(e) {
                let {
                    multiSelection: t
                } = e;
                return (0, u(58512).$)(t).map(({
                    store: e,
                    selection: t
                }) => {
                    let r = (0, u(247438).RQ)(e.getValue()),
                        i = (0, u(247438).xbM)(r, t),
                        {
                            tokensInsideRange: a
                        } = (0, u(247438).AI5)(r, i.startIndex, i.endIndex);
                    return (0, u(536614).r4)(a, e)
                }).join("\n\n")
            }
        },
        253492: (e, t, u) => {
            u.d(t, {
                A: () => i
            }), u(296540);
            var r = u(474848);

            function i(e) {
                return (0, r.jsx)("div", {
                    style: {
                        width: "100%",
                        position: "relative",
                        paddingBottom: `${100*e.ratio}%`
                    },
                    children: e.children
                })
            }
        },
        330942: (e, t, u) => {
            u.d(t, {
                Mt: () => l,
                RM: () => s,
                dC: () => a,
                f_: () => r().f_,
                ie: () => n,
                q1: () => i,
                sQ: () => d,
                uF: () => D
            }), u(813451), u(944114), u(898992), u(354520), u(737550);
            var r = () => u(706968);

            function i(e) {
                return e.some(e => "config" === e.type && "workflow" === e.value.type)
            }

            function a(e) {
                return e.some(e => "config" === e.type && "researcher" === e.value.type)
            }
            let o = /<lang\s+.*?>\s*/g;

            function n(e) {
                if ("string" == typeof e.value) return { ...e,
                    value: e.value.replace(o, "")
                };
                if (Array.isArray(e.value)) {
                    let t = e.value.findIndex(e => "text" === e.type);
                    if (-1 === t) return e;
                    let u = "";
                    for (let r of e.value.slice(t))
                        if ("text" === r.type) u += r.content;
                        else break;
                    if (!o.exec(u)) return e;
                    let r = "",
                        i = t;
                    for (; i < e.value.length; i++) {
                        let t = e.value[i];
                        if ("text" === t.type) r += t.content;
                        else break
                    }
                    let a = [...e.value.slice(0, t), {
                        type: "text",
                        content: r.replace(o, "")
                    }, ...e.value.slice(i)];
                    return "text" === a[0].type && 0 === a[0].content.length && a.shift(), { ...e,
                        value: a
                    }
                }
                return e
            }

            function s(e, t) {
                let r = {};
                for (let t of e) "registered-tool-grouping" === t.type && (r[t.toolCallId] = t);
                let i = [...e];
                if ("agent-transcript-summary" === t.type) {
                    let e = i.findLastIndex(e => "agent-transcript-summary" === e.type && e.lastStepId === t.lastStepId);
                    if (-1 !== e) {
                        let u = i[e];
                        if ("agent-transcript-summary" === u.type) {
                            let r = u.summary.trim().length > 0,
                                a = t.summary.trim().length > 0;
                            return r && !a || (i[e] = t), i
                        }
                    }
                    return i.push({ ...t
                    }), i
                }
                if ("user" === t.type || "user-injected" === t.type || "error" === t.type || "premium-feature-unavailable" === t.type || "context" === t.type || "title" === t.type || "retry" === t.type || "search-observation" === t.type || "researcher-text-observation" === t.type || "debug-inference" === t.type || "wait" === t.type || "agent-search-query-generation" === t.type || "fast-researcher-plan" === t.type || "fast-researcher-search-results" === t.type || "memory-agent" === t.type || "summarize-transcript" === t.type || "summarize-transcript-record-map" === t.type || "summarize-transcript-error" === t.type || "record-pointers-updated" === t.type || (0, u(548161).P0)(t) || "researcher-agent-group" === t.type || "agent-debug-error" === t.type || "eval-result" === t.type || "attachment" === t.type || "activate-transcript-compaction" === t.type || "pi-compaction" === t.type || "agent-records-updated" === t.type || "agent-turn-start" === t.type || "agent-record-map" === t.type || "user-specified-context" === t.type || "mention" === t.type || "agent-integration" === t.type || "aiBlockResponse" === t.type || "system-notification" === t.type || "agent-trigger" === t.type || "agent-prebuilt-prompt" === t.type || "agent-instruction-state" === t.type || "agent-route-trigger" === t.type || "workflow-effect-calling" === t.type || "workflow-effect-called" === t.type || "workflow-effect-error" === t.type) i.push({ ...t
                });
                else if ("agent-turn-full-record-map" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "agent-turn-full-record-map" === i[e].type) {
                        let u = i[e];
                        i[e] = { ...u,
                            agentRecordMap: t.agentRecordMap,
                            threadRecordMap: t.threadRecordMap,
                            recordVersions: t.recordVersions
                        }
                    } else i.push({ ...t
                    })
                } else if ("search" === t.type) i = [...i.filter(e => e.id !== t.id), { ...t
                }];
                else if ("agent-inference" === t.type || "agent-tool-result" === t.type || "config" === t.type || "updated-config" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id); - 1 !== e ? i[e] = t : i.push({ ...t
                    })
                } else if ("markdown-chat" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "markdown-chat" === i[e].type) {
                        let u = i[e];
                        i[e] = { ...u,
                            value: `${u.value}${t.value}`
                        }
                    } else i.push({ ...t
                    })
                } else if ("search-chat" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "search-chat" === i[e].type) {
                        let u = i[e];
                        i[e] = { ...u,
                            value: `${u.value}${t.value}`
                        }
                    } else i.push({ ...t
                    })
                } else if ("fast-researcher-chat" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "fast-researcher-chat" === i[e].type) {
                        let u = i[e];
                        i[e] = { ...u,
                            value: `${u.value}${t.value}`
                        }
                    } else i.push({ ...t
                    })
                } else if ("setup" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id); - 1 !== e && "setup" === i[e].type ? i[e] = t : i.push({ ...t
                    })
                } else if ("researcher-report" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "researcher-report" === i[e].type) {
                        let r = i[e];
                        i[e] = { ...r,
                            value: `${r.value}${t.value}`,
                            citationInfo: (0, u(177861).Mi)(r.citationInfo, t.citationInfo)
                        }
                    } else i.push({ ...t
                    })
                } else if ("researcher-agent" === t.type) {
                    let e = i.findIndex(e => e.id === t.id); - 1 !== e && "researcher-agent" === i[e].type ? i[e] = { ...i[e],
                        value: Object.assign(i[e].value, t.value),
                        updatedAt: t.updatedAt
                    } : i.push({ ...t
                    })
                } else if ("researcher-next-steps" === t.type) {
                    let e = i.findIndex(e => e.id === t.id); - 1 !== e ? i[e] = { ...t
                    } : i.push({ ...t
                    })
                } else if ("registered-tool-call" === t.type || "registered-tool-output" === t.type || "registered-tool-error" === t.type) {
                    let e = r[t.toolCallId];
                    e || (e = {
                        id: t.toolCallId,
                        type: "registered-tool-grouping",
                        toolName: t.toolName,
                        toolCallId: t.toolCallId,
                        steps: []
                    }, r[t.toolCallId] = e, i.push(e));
                    let u = { ...t
                    };
                    e.steps.push(u)
                } else if ("registered-tool-grouping" === t.type) r[t.toolCallId] || (r[t.toolCallId] = t, i.push({ ...t
                }));
                else if ("setup-operations" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id),
                        u = i[e];
                    (null == u ? void 0 : u.type) === t.type ? i[e] = { ...u,
                        operations: [...u.operations, ...t.operations]
                    } : i.push({ ...t
                    })
                } else if ("generate-formula" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id); - 1 !== e && "generate-formula" === i[e].type ? i[e] = { ...i[e],
                        value: t.value
                    } : i.push({ ...t
                    })
                } else "database-agent-setup" === t.type || "agent-message" === t.type || "proactive-message" === t.type || "survey" === t.type || "computer-file" === t.type || "plan-mode" === t.type ? i.push({ ...t
                }) : (0, u(722371).HB)(t);
                return i
            }
            let D = "inferenceTranscript";

            function l(e) {
                return "object" == typeof e && null !== e && "transcript" in e
            }

            function d(e) {
                if (e && ("search" === e.type || "workflow" === e.type)) return e.searchSessionId
            }
        },
        346596: (e, t, u) => {
            u.d(t, {
                L: () => i,
                k: () => a
            });
            var r = u(296540);

            function i(e) {
                let {
                    workflowIdFromRoute: t,
                    spaceStore: i
                } = (0, u(682985).K8)(() => ({
                    workflowIdFromRoute: "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    spaceStore: u(728372).AppStoreSidebarSpaceStore.state
                }), [e]);
                return (0, r.useMemo)(() => {
                    if (t && i) return u(360851).N.createChildStore(i, {
                        table: u(43296).C,
                        id: t,
                        spaceId: i.id
                    })
                }, [t, i])
            }

            function a(e) {
                let t = "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    r = u(728372).AppStoreSidebarSpaceStore.state;
                if (t && r) return u(360851).N.createChildStore(r, {
                    table: u(43296).C,
                    id: t,
                    spaceId: r.id
                })
            }
        },
        425749: (e, t, u) => {
            u.d(t, {
                I$: () => o,
                R2: () => D,
                WF: () => s,
                bZ: () => n,
                cE: () => i,
                jX: () => a,
                rz: () => l
            });
            var r = () => u(381453);

            function i(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let a = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function o(e) {
                return !!(void 0 !== e && (0, u(722371).Xk)(a, e))
            }

            function n() {
                let e = (0, u(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: u(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, u(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function s(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let D = [{
                type: "everything"
            }];

            function l(e) {
                for (let t of D)
                    if (r().n4(e, t)) return !0;
                return !1
            }
        },
        464515: (e, t, u) => {
            u.d(t, {
                z: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    blockStore: r,
                    insertedTextBlockLocation: i,
                    editSelection: a,
                    getRectFromStore: o
                } = e, n = u(764615).Ay.state;
                if (a({
                        environment: t,
                        store: r
                    }), (0, u(940763).e)({
                        store: r.getBlockTitleStore()
                    }), !n.open && !t.device.isPhone) {
                    let e = r.getBlockTitleStore(),
                        a = o(r),
                        n = u(92513).JW();
                    a && (u(764615).Ay.setState({
                        id: n,
                        open: !0,
                        isAddMenu: !0,
                        collapsed: !0,
                        textStore: e,
                        oldTextValue: e.getValue(),
                        oldSelection: {
                            startIndex: 0,
                            endIndex: 0
                        },
                        selectionRect: a,
                        lettersAtLastResult: 0,
                        filter: "",
                        temporaryInputDataStore: u(546605).Store.createValue(void 0, {
                            name: "temporaryInputData"
                        }),
                        insertedTextBlockLocation: i
                    }), (0, u(525779).clear)({
                        environment: t
                    }), (0, u(940763).e)({
                        store: e
                    }), (0, u(104310).u)({
                        event: {
                            eventName: "open_slash_menu",
                            eventProperties: {
                                id: n,
                                source: "add_button"
                            }
                        }
                    }))
                }
            }
        },
        523144: (e, t, u) => {
            u.d(t, {
                Vj: () => a,
                ax: () => o,
                iI: () => n,
                iw: () => i,
                u3: () => r,
                uJ: () => s,
                zw: () => D
            }), u(898992), u(354520), u(581454), u(737550);
            let r = "–",
                i = " ";

            function a({
                start: e,
                end: t,
                locale: n,
                timeZone: s
            }) {
                let D = u(906745).DateTime.fromISO(e),
                    l = u(906745).DateTime.fromISO(t),
                    d = function({
                        start: e,
                        end: t
                    }) {
                        return !!(t.diff(e).as("hours") > 12) || e.hour < 12 != t.hour < 12
                    }({
                        start: D,
                        end: l
                    }),
                    c = o({
                        time: D,
                        showAmPm: d,
                        locale: n,
                        timeZone: s
                    }),
                    p = o({
                        time: l,
                        showAmPm: !0,
                        locale: n,
                        timeZone: s
                    });
                return `${c}${i}${r}${i}${p}`
            }

            function o({
                time: e,
                showAmPm: t,
                locale: r,
                timeZone: a
            }) {
                let s = n(r),
                    D = 0 !== e.minute || !s,
                    l = { ...u(906745).DateTime.TIME_SIMPLE,
                        hour: "numeric",
                        minute: D ? "2-digit" : void 0,
                        timeZone: (0, u(25825).lW)(a)
                    };
                return s && !t ? e.setLocale(r).toLocaleParts(l).filter(e => "dayPeriod" !== e.type).map(e => e.value.trim()).join("") : e.toLocaleString({ ...l,
                    hour12: s
                }, {
                    locale: r
                }).replace(" ", i)
            }
            let n = (0, u(381453).Bj)(function(e) {
                return u(906745).DateTime.fromObject({
                    hour: 13
                }).setLocale(e).toLocaleParts(u(906745).DateTime.TIME_SIMPLE).some(e => "dayPeriod" === e.type)
            });

            function s({
                time: e,
                locale: t,
                timeZone: r
            }) {
                let a = n(t);
                return e.toLocaleString({ ...u(906745).DateTime.DATETIME_MED,
                    hour: "numeric",
                    minute: "2-digit",
                    year: void 0,
                    month: void 0,
                    day: void 0,
                    timeZone: (0, u(25825).lW)(r),
                    hour12: a
                }, {
                    locale: t
                }).replaceAll(" ", i)
            }

            function D({
                startTime: e,
                endTime: t
            }) {
                let u = t.diff(e).shiftTo("hours", "minutes"),
                    r = Math.floor(u.hours),
                    i = Math.round(u.minutes);
                return 0 === r ? `${i}min` : 0 === i ? `${r}h` : `${r}h ${i}min`
            }
        },
        570551: (e, t, u) => {
            u.d(t, {
                A: () => r
            });

            function r(e, t) {
                if (t.length < e) throw TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
            }
        },
        580022: (e, t, u) => {
            u.d(t, {
                A: () => a
            });
            var r = () => u(546605);
            class i extends r().Store {
                constructor() {
                    super()
                }
                getInitialState() {}
            }
            let a = new i
        },
        593988: (e, t, u) => {
            u.r(t), u.d(t, {
                TranscriptionBlockDemoVideoModal: () => D
            });
            var r = u(296540);
            u(581454);
            let i = {
                    "start-transcription": (e, t) => {
                        (0, u(338227).startTranscription)({
                            environment: e,
                            blockStore: t,
                            from: "demo_video",
                            audioConsentEnabled: !1
                        })
                    },
                    "switch-to-transcript": (e, t) => {
                        let r = (0, u(869708).y1)(t, "transcript");
                        r && u(769719).c.setTabState(t.id, r.id)
                    },
                    "switch-to-notes": (e, t) => {
                        let r = (0, u(869708).y1)(t, "notes");
                        r && u(769719).c.setTabState(t.id, r.id)
                    },
                    "add-note": (e, t, r) => {
                        let i = (0, u(869708).y1)(t, "notes");
                        if (i) {
                            let t = null == r ? void 0 : r.noteContent;
                            if (!t) return;
                            let a = i.pointer.spaceId,
                                o = (0, u(377796).createAndCommit)({
                                    userAction: "transcriptionBlockDemoActions.addNotesContent",
                                    environment: e,
                                    canUndo: !1,
                                    cellTarget: a ? {
                                        spaceWithId: a
                                    } : void 0,
                                    perform: t => {
                                        let r = u(124937).Wv({
                                            environment: e,
                                            type: u(955630).xd.text,
                                            inMemoryRecordCache: i.inMemoryRecordCache,
                                            transaction: t,
                                            spaceId: i.pointer.spaceId
                                        });
                                        return u(579695).Ti({
                                            parentStore: i,
                                            childStore: r,
                                            transaction: t
                                        }), r
                                    }
                                }).performResult,
                                n = 0,
                                s = () => {
                                    if (n < t.length && o) {
                                        let r = t[n];
                                        (0, u(377796).createAndCommit)({
                                            userAction: "transcriptionBlockDemoActions.typeCharacter",
                                            environment: e,
                                            canUndo: !1,
                                            cellTarget: a ? {
                                                spaceWithId: a
                                            } : void 0,
                                            perform: t => {
                                                u(41403).yr({
                                                    environment: e,
                                                    store: o.getBlockTitleStore(),
                                                    tokens: [
                                                        [r]
                                                    ],
                                                    index: n,
                                                    transaction: t
                                                })
                                            }
                                        }), n++, setTimeout(s, 50 * Math.random() + 30)
                                    }
                                };
                            setTimeout(s, 100)
                        }
                    },
                    stop: (e, t) => {
                        (0, u(338227).stopTranscription)({
                            environment: e,
                            blockStore: t,
                            from: "demo_video"
                        })
                    }
                },
                a = [{
                    key: "start-transcription",
                    triggerTime: .5
                }, {
                    key: "switch-to-transcript",
                    triggerTime: 1
                }, {
                    key: "switch-to-notes",
                    triggerTime: 13
                }, {
                    key: "add-note",
                    triggerTime: 14,
                    metadata: {
                        noteContent: "Here, you can take notes on what's important to you."
                    }
                }, {
                    key: "stop",
                    triggerTime: 25
                }];
            u(517642), u(658004), u(733853), u(845876), u(432475), u(515024), u(731698);
            class o {
                actions;
                executedActions = new Set;
                isActive = !1;
                constructor(e) {
                    this.actions = [...e].sort((e, t) => e.triggerTime - t.triggerTime)
                }
                start() {
                    this.isActive = !0, this.executedActions.clear()
                }
                resume() {
                    this.isActive = !0
                }
                pause() {
                    this.isActive = !1
                }
                stop() {
                    this.isActive = !1, this.executedActions.clear()
                }
                onTimeUpdate(e) {
                    if (this.isActive)
                        for (let t of this.actions) !this.executedActions.has(t.key) && e >= t.triggerTime && (t.action(), this.executedActions.add(t.key))
                }
                reset() {
                    this.executedActions.clear()
                }
                restart() {
                    this.isActive = !1, this.executedActions.clear()
                }
                isComplete() {
                    return this.executedActions.size === this.actions.length
                }
                getExecutedActions() {
                    return Array.from(this.executedActions)
                }
            }
            var n = u(474848);
            let s = {
                overlay: {
                    position: "fixed",
                    bottom: "80px",
                    insetInlineEnd: "20px",
                    width: 400,
                    height: 225,
                    zIndex: 111,
                    borderRadius: 8,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                    backgroundColor: u(632079).Tj.background.primary,
                    overflow: "hidden"
                },
                videoContainer: {
                    position: "relative",
                    backgroundColor: u(632079).Tj.background.tertiary
                },
                video: {
                    width: "100%",
                    height: "100%"
                },
                dismissButton: {
                    position: "absolute",
                    top: 8,
                    insetInlineEnd: 8
                }
            };

            function D({
                onPlay: e,
                onPause: t,
                onEnd: l
            } = {}) {
                let d, c, p, m, f, h, F = (0, r.useRef)(null),
                    C = (0, u(533992).v3)(),
                    g = (0, u(109939).tz)(),
                    v = (0, r.useRef)(0),
                    [E, y] = (0, r.useState)(null),
                    S = (0, u(682985).K8)(() => u(769719).c.state.demoVideoModalOpenForBlockId, []),
                    A = void 0 !== S,
                    B = (0, u(682985).K8)(() => u(844365).B.state.blockStore, []),
                    w = (0, r.useMemo)(() => {
                        if (B) return new o(a.map((e, t) => ({
                            key: e.key,
                            triggerTime: e.triggerTime,
                            action: () => {
                                (0, u(104310).u)({
                                    event: {
                                        eventName: "transcription_demo_step_start",
                                        eventProperties: {
                                            demo_step_key: e.key,
                                            demo_step_index: t,
                                            step_trigger_time: e.triggerTime,
                                            block_id: B.id
                                        }
                                    }
                                });
                                let r = i[e.key];
                                r && r(C, B, e.metadata)
                            }
                        })))
                    }, [C, B]);
                d = (0, u(533992).v3)(), c = (0, u(839362).W)(), p = (0, u(682985).O$)(u(585823).ei), m = (0, u(682985).K8)(() => {
                    var e;
                    return u(844365).B.state.isOpen && (null == (e = u(844365).B.state.blockStore) ? void 0 : e.id) === (null == p ? void 0 : p.id)
                }, [null == p ? void 0 : p.id]), f = (0, u(682985).K8)(() => !!(null != p && p.isTranscriptionBlock()) && "transcribing" === (0, u(869708).by)(p).state, [p]), h = (0, r.useCallback)(() => {
                    if (!m || !f || !E) return;
                    let e = u(585823).Ay.state.lastReceivedTranscriptionAt;
                    !e || Date.now() - e >= 4 * u(695216).TD && (E.pause().catch(() => {}), p && (0, u(338227).pauseTranscription)({
                        environment: d,
                        blockStore: p,
                        shouldStopDictation: !0,
                        from: "demo_video"
                    }).catch(() => {}), u(844365).B.setShowAudioAlert(!0))
                }, [m, f, E, d, p]), (0, u(216266).n)(h, 2 * u(695216).TD, !!(m && f && c && E));
                let I = (0, r.useCallback)(async e => {
                    null == w || w.stop(), B && (0, u(104310).u)({
                        event: {
                            eventName: "transcription_demo_stop",
                            eventProperties: {
                                stop_reason: e,
                                demo_video_duration_seconds: v.current,
                                block_id: B.id
                            }
                        }
                    }), v.current = 0, u(769719).c.closeDemoVideoModal(), B && "transcribing" === (0, u(869708).by)(B).state && await (0, u(338227).stopTranscription)({
                        environment: C,
                        blockStore: B,
                        from: "demo_video"
                    })
                }, [w, C, B]);
                (0, r.useEffect)(() => (A || null == w || w.reset(), () => null == w ? void 0 : w.reset()), [A, w]);
                let T = (0, u(682985).K8)(() => {
                    var e;
                    let t = null == (e = (0, u(330870).a)()) ? void 0 : e.id;
                    if (!S || !B) return !0;
                    if (B.pathIsDead()) return !1;
                    let r = (0, u(637306).N)(B);
                    return t && r && t === r.id
                }, [S, B]);
                if ((0, r.useEffect)(() => {
                        S && A && !T && I((null == B ? void 0 : B.pathIsDead()) ? "block_deleted" : "navigation_away")
                    }, [S, A, T, I, B]), !A) return null;
                let b = u(907790).VH[u(849917).locale] || "en";
                return (0, n.jsx)("div", {
                    style: s.overlay,
                    children: (0, n.jsxs)("div", {
                        style: s.videoContainer,
                        children: [(0, n.jsx)(u(907790).Ay, {
                            ref: F,
                            src: "https://player.vimeo.com/video/1125229375?h=0d906bbe0c",
                            defaultTextTrack: b,
                            style: s.video,
                            onPlay: t => {
                                if (B) {
                                    (0, u(104310).u)({
                                        event: {
                                            eventName: "transcription_demo_video_start",
                                            eventProperties: {
                                                block_id: B.id
                                            }
                                        }
                                    });
                                    let e = (null == w ? void 0 : w.getExecutedActions()) || [],
                                        t = e[e.length - 1] || "start";
                                    (0, u(104310).u)({
                                        event: {
                                            eventName: "transcription_demo_user_interaction",
                                            eventProperties: {
                                                interaction_type: "play",
                                                interaction_target: "play_button",
                                                demo_step_active: t,
                                                block_id: B.id
                                            }
                                        }
                                    })
                                }
                                v.current = t.seconds, (null == w ? void 0 : w.getExecutedActions().length) === 0 ? null == w || w.start() : null == w || w.resume(), null == e || e(t)
                            },
                            onPause: e => {
                                if (v.current = e.seconds, B) {
                                    let e = (null == w ? void 0 : w.getExecutedActions()) || [],
                                        t = e[e.length - 1] || "start";
                                    (0, u(104310).u)({
                                        event: {
                                            eventName: "transcription_demo_video_pause",
                                            eventProperties: {
                                                interruption_reason: "user_action",
                                                demo_step_interrupted_at: t,
                                                demo_video_duration_seconds: v.current,
                                                block_id: B.id
                                            }
                                        }
                                    }), (0, u(104310).u)({
                                        event: {
                                            eventName: "transcription_demo_user_interaction",
                                            eventProperties: {
                                                interaction_type: "pause",
                                                interaction_target: "pause_button",
                                                demo_step_active: t,
                                                block_id: B.id
                                            }
                                        }
                                    })
                                }
                                null == w || w.pause(), null == t || t(e)
                            },
                            onEnd: e => {
                                v.current = e.seconds, null == w || w.stop(), B && (0, u(104310).u)({
                                    event: {
                                        eventName: "transcription_demo_complete",
                                        eventProperties: {
                                            demo_video_duration_seconds: e.seconds,
                                            block_id: B.id
                                        }
                                    }
                                }), null == l || l(e), v.current = 0, u(769719).c.closeDemoVideoModal()
                            },
                            onTimeUpdate: e => {
                                v.current = e.seconds, null == w || w.onTimeUpdate(e.seconds)
                            },
                            onPlayerReady: y,
                            options: {
                                playsinline: !0,
                                autoplay: !1,
                                muted: !1
                            },
                            customPlayButton: g.formatMessage({
                                id: "transcriptionBlockDemoVideoModal.startDemo",
                                defaultMessage: "Start"
                            })
                        }), (0, n.jsx)(u(226512).R, {
                            onClick: () => void I("user_manual_stop"),
                            style: s.dismissButton
                        })]
                    })
                })
            }
        },
        598132: (e, t, u) => {
            function r(e) {
                let t = u(728372).AppStoreCurrentUserRootStore.state;
                if (!t) return !1;
                let r = t.getSpaceViewStores();
                return (0, u(381453).oE)(null == r ? void 0 : r.map(e => e.getSpaceId())).map(t => u(949830).A.getData(e, {
                    spaceId: t,
                    userId: e.currentUser.id
                })).some(e => a(e))
            }

            function i(e, t) {
                return a(u(949830).A.getData(e, {
                    spaceId: t,
                    userId: e.currentUser.id
                }))
            }

            function a(e) {
                switch (null == e ? void 0 : e.membershipType) {
                    case void 0:
                    case "none":
                    case "page_guest":
                        return !1;
                    case "restricted_member":
                    case "member":
                    case "membership_admin":
                    case "owner":
                        return !0 === e.is_sales_assisted;
                    default:
                        (0, u(722371).HB)(e)
                }
            }
            u.d(t, {
                h0: () => r,
                lM: () => i
            }), u(898992), u(581454), u(737550)
        },
        601821: (e, t, u) => {
            function r() {
                let e = navigator.mediaDevices;
                if (e instanceof MediaDevices) return e;
                throw Error("Media devices unavailable in current context.")
            }

            function i(e) {
                let t = window.AudioContext || window.webkitAudioContext || !1;
                if (t) {
                    var u;
                    return new t({ ...(null == (u = navigator) || null == (u = u.mediaDevices) ? void 0 : u.getSupportedConstraints().sampleRate) && {
                            sampleRate: e
                        }
                    })
                }
                throw Error("Browser does not support Web Audio API (AudioContext is not available).")
            }
            u.d(t, {
                E: () => r,
                G: () => i
            }), u(16280)
        },
        606982: (e, t, u) => {
            u.d(t, {
                A: () => r
            });

            function r(e, t) {
                (0, u(570551).A)(2, arguments);
                var r = (0, u(10123).A)(e),
                    i = (0, u(10123).A)(t),
                    a = r.getTime() - i.getTime();
                return a < 0 ? -1 : a > 0 ? 1 : a
            }
        },
        607825: (e, t, u) => {
            u.d(t, {
                Ay: () => D,
                X8: () => n,
                dc: () => s
            }), u(944114), u(898992), u(354520), u(672577), u(908872);
            var r = () => u(546605);
            async function i() {
                let e = (0, u(601821).E)();
                return (await e.enumerateDevices()).reduce((e, t) => {
                    if (t.kind && t.label && t.deviceId && t.groupId) switch (t.kind) {
                        case "videoinput":
                            e.videoInput.push(t);
                            break;
                        case "audioinput":
                            e.audioInput.push(t);
                            break;
                        case "audiooutput":
                            e.audioOutput.push(t)
                    }
                    return e
                }, {
                    videoInput: [],
                    audioInput: [],
                    audioOutput: []
                })
            }
            class a extends r().Store {
                async updateMediaDevices() {
                    try {
                        let e = await i();
                        this.setState(e)
                    } catch {}
                }
                constructor() {
                    super();
                    try {
                        (0, u(601821).E)().addEventListener("devicechange", () => {
                            this.updateMediaDevices()
                        })
                    } catch {}
                    u(154642).Ay.addListener(() => {
                        this.updateMediaDevices()
                    })
                }
                getInitialState() {
                    return {
                        videoInput: [],
                        audioInput: [],
                        audioOutput: []
                    }
                }
            }
            let o = new a,
                n = new(u(345426)).ComputedStore(() => {
                    var e, t;
                    return (null == (e = o.state) || null == (e = e.audioInput) || null == (t = e.filter) ? void 0 : t.call(e, e => null == e ? void 0 : e.label)) ? ? []
                }, {
                    debugName: "AudioInputDevicesStore"
                }),
                s = new(u(345426)).ComputedStore(() => {
                    var e;
                    let t = u(580022).A.state,
                        r = null == (e = u(844561).d.state) ? void 0 : e.label,
                        i = n.state.find(e => e.label === r);
                    return t || i || n.state[0]
                }, {
                    debugName: "SelectedAudioInputDeviceStore"
                }),
                D = o
        },
        621347: (e, t, u) => {
            u.d(t, {
                g: () => r
            }), u(944114);
            async function r(e) {
                let {
                    environment: t,
                    onResponse: r,
                    data: i,
                    userId: a,
                    tracking: o,
                    abortSignal: n
                } = e, s = await t.api.callStreamApi({
                    eventName: "runInferenceTranscript",
                    environment: t,
                    data: i,
                    userId: a,
                    tracking: o,
                    abortSignal: n,
                    headers: (0, u(115118).WS)({
                        spaceId: i.spaceId
                    })
                });
                if ("success" !== s.type) return null != n && n.aborted ? {
                    error: {
                        message: "Aborted",
                        code: 0
                    }
                } : (u(647095).Qg(s), {
                    error: {
                        message: s.error.message,
                        code: s.status
                    }
                });
                let D = [];
                if (u(331653).hS.is(s.data))
                    for await (let e of s.data) {
                        if ("error" === e.type) return {
                            error: {
                                message: e.message,
                                code: e.errorCode
                            }
                        };
                        null == r || r(e), D.push(e)
                    }
                return {
                    value: D
                }
            }
        },
        634663: (e, t, u) => {
            u.r(t), u.d(t, {
                circleIcon: () => i,
                iconDefinition: () => r
            }), u(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                    })
                },
                i = (0, u(104509).wt)("circle", r, "default")
        },
        674880: (e, t, u) => {
            u.d(t, {
                BX: () => p,
                Jv: () => c,
                Kf: () => s,
                WM: () => a,
                Xd: () => m,
                Xw: () => f,
                defaultInferenceContextStore: () => r,
                fd: () => l,
                i6: () => n,
                uP: () => D
            }), u(944114), u(898992), u(354520), u(803949), u(581454), u(737550);
            let r = new(u(345426)).ComputedStore(() => {
                let e = u(728372).AppStoreSidebarSpaceStore.state,
                    t = u(728372).AppStoreCurrentUserStore.state,
                    r = u(728372).AppStoreSidebarSpaceViewStore.state,
                    i = u(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (e && t && r) return {
                    spaceStore: e,
                    userStore: t,
                    spaceViewStore: r,
                    blockStore: i,
                    peekStore: u(475097).default.state.open ? u(475097).default.state.targetStore : void 0,
                    workflowStore: (0, u(346596).k)(e.environment)
                }
            }, {
                debugName: "defaultInferenceContextStore"
            });

            function i(e) {
                let t = {};
                if (e.isCollectionView()) {
                    let r = (0, u(444610).U)(e),
                        i = null == r ? void 0 : r.collectionViewStore();
                    i && (t[e.id] = i.id)
                } else e.getContentStores().forEach(e => {
                    if (e.isCollectionView()) {
                        let r = (0, u(444610).U)(e),
                            i = null == r ? void 0 : r.collectionViewStore();
                        i && (t[e.id] = i.id)
                    }
                });
                return t
            }

            function a(e) {
                let {
                    environment: t,
                    surface: r,
                    inferenceContext: a,
                    config: o,
                    invokedFromBlockId: n,
                    checklistId: s,
                    checklistStepId: D
                } = e, {
                    userStore: l,
                    spaceStore: d,
                    spaceViewStore: c,
                    blockStore: p,
                    peekStore: m,
                    workflowStore: f
                } = a, h = (0, u(295447).Z1)({
                    environment: t,
                    table: u(832375).mSw,
                    spaceId: d.id
                }), F = "meet" === t.RouterStore.state.route.name, C = { ...p && p.isCollectionView() ? {
                        collectionViewBlockId: p.id,
                        visibleCollectionViewIds: i(p)
                    } : void 0,
                    ...p && !p.isCollectionView() && "personal_home_page" !== p.getType() && "daily_brief_reminder" !== r ? {
                        blockId: p.id,
                        visibleCollectionViewIds: i(p)
                    } : void 0,
                    ...m ? {
                        peekBlockId: m.id,
                        visibleCollectionViewIds: i(m)
                    } : void 0,
                    ...f ? {
                        workflowId: f.id
                    } : void 0,
                    ...F ? function(e) {
                        if (!u(218744).default.checkGate({
                                gateName: "agent_in_meetings_route"
                            })) return;
                        let {
                            environment: t,
                            spaceId: r,
                            userId: i
                        } = e, a = t.idCreator.getSpaceIdCreatorSync(r), o = (0, u(413388).sX)(i, a);
                        return {
                            collectionViewBlockId: o,
                            visibleCollectionViewIds: {
                                [o]: (0, u(413388).X$)(i, a)
                            }
                        }
                    }({
                        environment: t,
                        spaceId: d.id,
                        userId: l.id
                    }) : void 0
                }, g = {};
                if ("workflow" !== o.type || !o.isCustomAgent) {
                    let e = c.getSettings(),
                        t = null == e ? void 0 : e.agent_personalization_settings;
                    if (t) {
                        var v;
                        t.name && (g.agentName = t.name), null != (v = t.customization_items) && v[0] && (g.agentAccessory = t.customization_items[0]), t.context_page_id && (g.context_page_id = t.context_page_id)
                    }
                }
                let E = function(e) {
                    var t, r, i;
                    let {
                        config: a,
                        workflowStore: o
                    } = e;
                    if ("workflow" !== a.type || !a.isCustomAgent || !o) return;
                    let n = !0 === a.useCustomAgentDraft || !0 === a.use_draft_actor_pointer ? (null == (t = o.getDraftData()) ? void 0 : t.instructions) ? ? (null == (r = o.getData()) ? void 0 : r.instructions) : null == (i = o.getPublishedArtifactStore()) || null == (i = i.getData()) ? void 0 : i.instructions;
                    if ((0, u(886883).ap)(n)) return n.id
                }({
                    config: o,
                    workflowStore: f
                });
                if (E && (g.context_page_id = E), u(218744).default.checkGate({
                        gateName: "workflows_inference_replay"
                    })) return {
                    id: h,
                    type: "context",
                    value: {
                        timezone: "America/Los_Angeles",
                        userName: "Test User",
                        userEmail: "test@example.com",
                        userId: "test-user-id",
                        spaceName: "Test Space",
                        spaceId: d.id,
                        spaceViewId: c.id,
                        currentDatetime: "2024-01-01T00:00:00.000Z",
                        surface: r,
                        ...C,
                        invokedFromBlockId: n,
                        ..."onboarding_checklist" === r && s && D ? {
                            checklistId: s,
                            checklistStepId: D
                        } : {},
                        ...g
                    }
                };
                let y = u(218744).default.checkGate({
                    gateName: "agent_user_session_context"
                }) ? function(e) {
                    let {
                        spaceId: t,
                        limit: r = 10
                    } = e;
                    return u(420156).A.getWithoutSubscribing(t).map(({
                        pageId: e,
                        visitedAt: t
                    }) => ({
                        pageId: e,
                        visitedAt: t
                    })).slice(0, r)
                }({
                    spaceId: d.id
                }) : void 0;
                return {
                    id: h,
                    type: "context",
                    value: {
                        timezone: (0, u(714350).P)(),
                        userName: l.getName(),
                        userId: l.id,
                        userEmail: l.getEmail(),
                        spaceName: d.getName(),
                        spaceId: d.id,
                        spaceViewId: c.id,
                        currentDatetime: u(906745).DateTime.now().toISO(),
                        surface: r,
                        ...C,
                        invokedFromBlockId: n,
                        ..."onboarding_checklist" === r && s && D ? {
                            checklistId: s,
                            checklistStepId: D
                        } : {},
                        ...g,
                        recentPageVisits: y
                    }
                }
            }

            function o(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    config: i
                } = e;
                return {
                    id: (0, u(295447).Z1)({
                        environment: t,
                        table: u(832375).mSw,
                        spaceId: r.id
                    }),
                    type: "config",
                    value: i
                }
            }

            function n(e) {
                let {
                    existingTranscript: t,
                    environment: u,
                    spaceStore: r,
                    config: i
                } = e;
                if (!t.some(e => "config" === e.type)) return o({
                    environment: u,
                    spaceStore: r,
                    config: i
                })
            }

            function s(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    value: i,
                    userStore: a
                } = e, o = d(i);
                return {
                    id: (0, u(295447).Z1)({
                        environment: t,
                        table: u(832375).mSw,
                        spaceId: r.id
                    }),
                    type: "user",
                    value: o,
                    userId: a.id,
                    createdAt: u(906745).DateTime.now().toISO()
                }
            }

            function D(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    actualMessage: i,
                    displayMessage: a,
                    userStore: o,
                    surveyStepId: n,
                    sourceStepId: s
                } = e, D = d(i) ? ? [], l = d(a);
                return {
                    id: (0, u(295447).Z1)({
                        environment: t,
                        table: u(832375).mSw,
                        spaceId: r.id
                    }),
                    type: "user-injected",
                    actualMessage: D,
                    displayMessage: l,
                    userId: o.id,
                    createdAt: u(906745).DateTime.now().toISO(),
                    surveyStepId: n,
                    sourceStepId: s
                }
            }

            function l(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    agentMessageKey: i,
                    instructions: a
                } = e;
                return {
                    id: (0, u(295447).Z1)({
                        environment: t,
                        table: u(832375).mSw,
                        spaceId: r.id
                    }),
                    type: "proactive-message",
                    agentMessageKey: i,
                    instructions: a
                }
            }

            function d(e) {
                if (e) return (0, u(247438).bBR)((0, u(247438).ooo)(e))
            }

            function c({
                environment: e,
                spaceStore: t,
                userStore: r,
                promptType: i,
                value: a,
                locale: o,
                args: n
            }) {
                return {
                    id: (0, u(295447).Z1)({
                        environment: e,
                        table: u(832375).mSw,
                        spaceId: t.id
                    }),
                    type: "agent-prebuilt-prompt",
                    promptType: i,
                    userId: r.id,
                    createdAt: Date.now(),
                    value: a,
                    locale: o,
                    isEdited: !1,
                    args: n
                }
            }

            function p(e) {
                let t, r, {
                    environment: i,
                    spaceId: a,
                    pointers: o,
                    selectedBlockStores: n,
                    textSelection: s,
                    blockSelectionContext: D,
                    textSelectionContext: l
                } = e;
                if (D) t = D;
                else if (n && n.length > 0) {
                    let e = (0, u(685745).B)(n);
                    e && (t = {
                        type: "blocks",
                        value: n.map(e => e.pointer),
                        text: (0, u(250943).E)({
                            mode: "editing",
                            multiSelection: e,
                            forceExtendAnnotations: {}
                        }).slice(0, 1200)
                    })
                }
                if (l) r = l;
                else if (s && s.start.store.pointer.table === u(832375).evP && s.end.store.pointer.table === u(832375).evP) {
                    let e = (0, u(250943).E)({
                            mode: "editing",
                            multiSelection: s,
                            forceExtendAnnotations: {}
                        }),
                        t = e.slice(0, 1200),
                        i = e.length > 1200;
                    r = {
                        type: "text",
                        value: {
                            start: {
                                pointer: s.start.store.pointer,
                                index: s.start.index
                            },
                            end: {
                                pointer: s.end.store.pointer,
                                index: s.end.index
                            }
                        },
                        text: t,
                        ...i ? {
                            isPreviewTruncated: !0
                        } : {}
                    }
                }
                if (0 !== o.length || t || r) return {
                    id: (0, u(295447).Z1)({
                        environment: i,
                        table: u(832375).mSw,
                        spaceId: a
                    }),
                    type: "user-specified-context",
                    value: {
                        pointers: o,
                        blockSelection: t,
                        textSelection: r
                    }
                }
            }

            function m(e) {
                let {
                    environment: t,
                    inferenceContext: r,
                    config: i,
                    addSteps: n,
                    surface: s,
                    invokedFromBlockId: D,
                    checklistId: l,
                    checklistStepId: d
                } = e, c = [o({
                    environment: t,
                    spaceStore: r.spaceStore,
                    config: i
                }), a({
                    environment: t,
                    inferenceContext: r,
                    surface: s,
                    config: i,
                    invokedFromBlockId: D,
                    checklistId: l,
                    checklistStepId: d
                })];
                return n && c.push(...n), c.filter(u(722371).O9)
            }

            function f(e) {
                let {
                    environment: t,
                    spaceId: r,
                    message: i,
                    notificationType: a = "info",
                    metadata: o
                } = e;
                return {
                    id: (0, u(295447).Z1)({
                        environment: t,
                        table: u(832375).mSw,
                        spaceId: r
                    }),
                    type: "system-notification",
                    message: i,
                    notificationType: a,
                    metadata: o
                }
            }
        },
        685745: (e, t, u) => {
            u.d(t, {
                B: () => o
            });
            var r = () => u(129499),
                i = () => u(955630);

            function a(e) {
                for (let t of e) {
                    let e = function(e) {
                        let t = e.getTitleStore();
                        if (t && u(521595).n.findNodeFromStore(t)) return t
                    }(t);
                    if (e && t.getType() !== i().xd.code) return {
                        blockStore: t,
                        titleStore: e
                    }
                }
            }

            function o(e) {
                let t, i = a(e);
                if (!i) return;
                let o = a([...e].reverse());
                if (!o) return;
                let n = (0, u(787926).Ag)({
                    includeNonSelectableListContainer: !1,
                    rootStore: i.blockStore.getHighestContentBlockUIAncestor()
                });
                if (!n) return;
                let s = (0, u(787926).mP)(o.blockStore, n);
                if (s) {
                    for (let e of (0, u(827049).Y_)(s)) {
                        let u = e.value.store.getTitleStore();
                        if (u) {
                            let e = (0, r().s)(u);
                            e && (t = {
                                store: u,
                                index: e.endIndex
                            })
                        }
                    }
                    if (t) return {
                        start: {
                            store: i.titleStore,
                            index: 0
                        },
                        end: t
                    }
                }
            }
        },
        706968: (e, t, u) => {
            function r(e) {
                return n({
                    transcript: e
                })
            }

            function i(e) {
                let t = r(e);
                return (null == t ? void 0 : t.type) === "workflow" && !0 === t.isCustomAgent
            }

            function a(e) {
                let t = r(e);
                return (null == t ? void 0 : t.type) === "workflow" && !0 === t.isCustomAgent ? t.workflowId : void 0
            }

            function o(e) {
                let {
                    transcript: t,
                    fallback: u
                } = e, r = u;
                for (let e of t) {
                    if ("config" === e.type && "workflow" === e.value.type) {
                        r = e.value;
                        continue
                    }
                    if ("updated-config" === e.type && r) {
                        if (null === e.value || "object" != typeof e.value || Array.isArray(e.value)) continue;
                        r = { ...r,
                            ...e.value
                        }
                    }
                }
                return r
            }

            function n(e) {
                var t;
                let {
                    transcript: u
                } = e, r = null == (t = u.findLast(e => "config" === e.type)) ? void 0 : t.value;
                if (r) return "workflow" !== r.type ? r : o({
                    transcript: u
                }) ? ? r
            }
            u.d(t, {
                TU: () => n,
                f_: () => r,
                p0: () => i,
                py: () => o,
                zB: () => a
            }), u(410838)
        },
        729849: (e, t, u) => {
            u.d(t, {
                Gi: () => o,
                yB: () => a
            }), u(898992), u(354520), u(803949);
            var r = () => u(546605);

            function i() {
                return u(218744).default.getConfigKey("agent_max_attachments", "value")
            }

            function a() {
                return (0, u(682985).K8)(() => i(), [])
            }
            class o extends r().Store {
                getInitialState() {
                    return {
                        originalFileUrlToSuccessfullyUploadedFiles: new Map,
                        inProgressUploadFileIdsToProgress: new Map
                    }
                }
                setValueForUploadedFile(e, t) {
                    this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles).set(e, t)
                    })
                }
                markUploadedFilesAsSafe(e) {
                    let t = new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles);
                    e.forEach(e => {
                        var u;
                        let r = t.get(e);
                        r && t.set(e, { ...r,
                            metadata: { ...r.metadata,
                                guardrail: { ...null == (u = r.metadata) ? void 0 : u.guardrail,
                                    attachmentRisk: "confirmed_safe_by_user"
                                }
                            }
                        })
                    }), this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: t
                    })
                }
                setValueForUploadingFile(e, t) {
                    let u = new Map(this.state.inProgressUploadFileIdsToProgress),
                        r = u.get(e);
                    u.set(e, { ...t,
                        timeUploaded: (null == r ? void 0 : r.timeUploaded) ? ? Date.now()
                    }), this.setState({ ...this.state,
                        inProgressUploadFileIdsToProgress: u
                    })
                }
                getTimeUploadedForUploadingFile(e) {
                    let t = new Map(this.state.inProgressUploadFileIdsToProgress).get(e);
                    return (null == t ? void 0 : t.timeUploaded) ? ? Date.now()
                }
                getTimeUploadedForUploadedFile(e) {
                    let t = new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles).get(e);
                    return (null == t ? void 0 : t.timeUploaded) ? ? Date.now()
                }
                deleteValueForUploadingFile(e) {
                    let t = new Map(this.state.inProgressUploadFileIdsToProgress);
                    t.delete(e), this.setState({ ...this.state,
                        inProgressUploadFileIdsToProgress: t
                    })
                }
                deleteValueForUploadedFile(e) {
                    let t = new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles);
                    t.delete(e), this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: t
                    })
                }
                onFileUploadPercentageChanged(e) {
                    let {
                        fileId: t,
                        fileName: u,
                        percentage: r,
                        contentType: i
                    } = e;
                    this.setValueForUploadingFile(t, {
                        type: "uploading",
                        fileName: u,
                        progress: r,
                        contentType: i
                    })
                }
                onFileUploadFailed(e) {
                    let {
                        error: t
                    } = e, {
                        files: u
                    } = t;
                    u.forEach(({
                        fileId: e,
                        fileName: u
                    }) => {
                        this.setValueForUploadingFile(e, {
                            type: "error",
                            error: t,
                            fileName: u
                        })
                    })
                }
                onFileUploadCompleted(e, t) {
                    let u = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, { ...t,
                        timeUploaded: u
                    })
                }
                onComputerFileUploadCompleted(e, t) {
                    let r = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, {
                        originalFileUrl: t.originalFileUrl,
                        fileName: t.fileName,
                        contentType: "application/pdf",
                        base64EncodedFileUrl: "",
                        attachmentSource: "user_upload",
                        assistantSessionId: (0, u(818963).pg)(t.assistantSessionId),
                        timeUploaded: r
                    })
                }
                setCompletedFileForRetry(e) {
                    let t = this.getTimeUploadedForUploadedFile(e.originalFileUrl);
                    this.setValueForUploadedFile(e.originalFileUrl, { ...e,
                        timeUploaded: t
                    })
                }
                onDeleteFileUpload(e) {
                    this.deleteValueForUploadedFile(e)
                }
                isUploadInProgress() {
                    return Array.from(this.state.inProgressUploadFileIdsToProgress.values()).filter(e => "error" !== e.type).length > 0
                }
                hasTooManyAttachments() {
                    return this.isUploadInProgress() || this.state.originalFileUrlToSuccessfullyUploadedFiles.size > i()
                }
            }
        },
        775451: (e, t, u) => {
            u.d(t, {
                W: () => a
            }), u(296540);
            var r = u(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 2.06 14.57 16.51",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "m16.949 3.47-.618.619-1.164-1.165.625-.624a.823.823 0 0 1 1.157 0 .823.823 0 0 1 0 1.157zm-8.526 8.527 7.153-7.153-1.165-1.165-7.16 7.147a1.1 1.1 0 0 0-.247.414l-.303.978c-.055.206.137.4.33.33l.978-.303a.9.9 0 0 0 .414-.248"
                        }), (0, r.jsx)("path", {
                            d: "M9.578 5.438q.617 0 1.197.126l1.051-1.004a6.9 6.9 0 0 0-2.248-.372h-.35a6.603 6.603 0 0 0-6.603 6.602v.257c0 1.254.371 2.48 1.067 3.524a9.25 9.25 0 0 0 5.455 3.844l.514.129a.625.625 0 1 0 .303-1.213l-.513-.128a8 8 0 0 1-4.719-3.325 5.1 5.1 0 0 1-.857-2.831v-.257a5.353 5.353 0 0 1 5.353-5.352z"
                        }), (0, r.jsx)("path", {
                            d: "M12.444 15.748a6.47 6.47 0 0 1-5.471-1.878l1.387-.433a5.22 5.22 0 0 0 3.92 1.072l.08-.01a3.37 3.37 0 0 0 2.921-3.345 5.7 5.7 0 0 0-1.011-3.248l.904-.885a6.94 6.94 0 0 1 1.357 4.133 4.624 4.624 0 0 1-4.006 4.584z"
                        })]
                    })
                },
                a = (0, u(104509).wt)("pencilAndOutline", i, "default")
        },
        789701: (e, t, u) => {
            u.d(t, {
                y: () => i
            }), u(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.62 16.25 12.75",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M6.303 3.625c-.71 0-1.374.355-1.768.946L2.232 8.025c-.233.35-.357.76-.357 1.18v5.045c0 1.174.951 2.125 2.125 2.125h12a2.125 2.125 0 0 0 2.125-2.125V9.204c0-.42-.124-.83-.357-1.179l-2.303-3.454a2.13 2.13 0 0 0-1.768-.946zm-.728 1.64a.88.88 0 0 1 .728-.39h7.394c.293 0 .566.146.728.39l2.303 3.454a1 1 0 0 1 .083.156h-4.702a.625.625 0 0 0-.625.625v.476a1.484 1.484 0 0 1-2.968 0V9.5a.625.625 0 0 0-.625-.625H3.189a1 1 0 0 1 .083-.156zm-2.45 4.86H7.27a2.734 2.734 0 0 0 5.46 0h4.145v4.125a.875.875 0 0 1-.875.875H4a.875.875 0 0 1-.875-.875z"
                    })
                },
                i = (0, u(104509).wt)("inbox", r, "default")
        },
        799891: (e, t, u) => {
            u.d(t, {
                y: () => i
            }), u(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.639-6.938 5.705 0 1.438.583 2.752 1.617 3.76a.63.63 0 0 1 .18.546 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.007c4.006-.158 6.545-2.728 6.545-5.699m1.25 0c0 3.803-3.234 6.766-7.747 6.948l-.44.008a10.2 10.2 0 0 1-2.485-.299c-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.817 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.733-1.756-4.41 0-3.925 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
                    })
                },
                i = (0, u(104509).wt)("chatBubble", r, "default")
        },
        827380: (e, t, u) => {
            u.d(t, {
                A: () => r
            });

            function r(e) {
                return {
                    all: e = e || new Map,
                    on: function(t, u) {
                        var r = e.get(t);
                        r ? r.push(u) : e.set(t, [u])
                    },
                    off: function(t, u) {
                        var r = e.get(t);
                        r && (u ? r.splice(r.indexOf(u) >>> 0, 1) : e.set(t, []))
                    },
                    emit: function(t, u) {
                        var r = e.get(t);
                        r && r.slice().map(function(e) {
                            e(u)
                        }), (r = e.get("*")) && r.slice().map(function(e) {
                            e(t, u)
                        })
                    }
                }
            }
        },
        844365: (e, t, u) => {
            u.d(t, {
                B: () => a
            });
            var r = () => u(546605);
            class i extends r().Store {
                getInitialState() {
                    return {
                        isOpen: !1,
                        blockStore: void 0,
                        showAudioAlert: !1
                    }
                }
                open(e) {
                    this.setState({
                        isOpen: !0,
                        blockStore: e,
                        showAudioAlert: !1
                    }), u(769719).c.openDemoVideoModal(e.id)
                }
                close() {
                    this.setState({
                        isOpen: !1,
                        blockStore: void 0,
                        showAudioAlert: !1
                    }), u(769719).c.closeDemoVideoModal()
                }
                setShowAudioAlert(e) {
                    this.setState({ ...this.state,
                        showAudioAlert: e
                    })
                }
            }
            let a = new i
        },
        844561: (e, t, u) => {
            u.d(t, {
                d: () => r
            });
            let r = new(u(245541)).R({
                key: "preferred_audio_input_device",
                namespace: u(274919).cd,
                important: !0,
                trackingType: "preference"
            })
        },
        850563: (e, t, u) => {
            u.d(t, {
                G1: () => n,
                Ll: () => o,
                Pn: () => l,
                TU: () => r().TU,
                Vf: () => i,
                kQ: () => D,
                py: () => r().py,
                yD: () => a
            }), u(410838), u(813451), u(944114), u(898992), u(354520), u(672577), u(803949), u(581454), u(737550);
            var r = () => u(706968);

            function i(e) {
                return "inference" !== e.type && "queue-handoff" !== e.type && "reenqueue-with-delay" !== e.type && "record-map" !== e.type && "patch-start" !== e.type && "patch" !== e.type && "agent-search-extracted-results" !== e.type
            }

            function a(e) {
                return "patch" === e.type || "patch-start" === e.type
            }

            function o(e) {
                return "user-injected" === e.type && void 0 === e.displayMessage
            }

            function n(e) {
                let t;
                return (null == (t = e.find(e => "context" === e.type)) ? void 0 : t.value.surface) === "daily_brief_reminder" && 1 >= e.filter(e => "user" === e.type || "user-injected" === e.type && !o(e)).length
            }

            function s(e) {
                return "context" === e.type
            }

            function D(e) {
                let t = e.find(s);
                return null == t ? void 0 : t.value.surface
            }

            function l(e) {
                let t = 0,
                    u = e.findLastIndex(e => "user" === e.type);
                return -1 !== u && (t = u + 1), e.slice(t)
            }
        },
        853160: (e, t, u) => {
            u.r(t), u.d(t, {
                checkmarkCircleIcon: () => a,
                iconDefinition: () => i
            }), u(296540);
            var r = u(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M12.876 7.982a.625.625 0 1 0-1.072-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                        }), (0, r.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
                        })]
                    })
                },
                a = (0, u(104509).wt)("checkmarkCircle", i, "default")
        },
        890142: (e, t, u) => {
            u.d(t, {
                l: () => i
            });
            let r = (0, u(109939).YK)({
                twoItems: {
                    id: "formatSettings.twoItems",
                    defaultMessage: "{item1} and {item2}"
                },
                threeOrMoreItems: {
                    id: "formatSettings.threeOrMoreItems",
                    defaultMessage: "{item1}, and {numberOfOther} others"
                },
                twoItemsWithAmpersand: {
                    id: "formatSettings.twoItems.withAmpersand",
                    defaultMessage: "{item1} & {item2}"
                },
                threeOrMoreItemsWithAmpersand: {
                    id: "formatSettings.threeOrMoreItems.withAmpersand",
                    defaultMessage: "{item1}, & {numberOfOther} others"
                },
                threeOrMoreItemsWithAmpersandAndRemoveComma: {
                    id: "formatSettings.threeOrMoreItems.withAmpersandAndRemoveComma",
                    defaultMessage: "{item1} & {numberOfOther} others"
                }
            });

            function i(e, t) {
                let {
                    removeComma: i,
                    useAmpersand: a
                } = t || {};
                if (0 === e.length) return "";
                let o = e[0];
                if (1 === e.length) return o;
                let n = e[1];
                if (2 === e.length) return a ? u(962299).A.formatMessage(r.twoItemsWithAmpersand, {
                    item1: o,
                    item2: n
                }) : u(962299).A.formatMessage(r.twoItems, {
                    item1: o,
                    item2: n
                });
                let s = e.length - 1;
                return a ? i ? u(962299).A.formatMessage(r.threeOrMoreItemsWithAmpersandAndRemoveComma, {
                    item1: o,
                    numberOfOther: s
                }) : u(962299).A.formatMessage(r.threeOrMoreItemsWithAmpersand, {
                    item1: o,
                    numberOfOther: s
                }) : u(962299).A.formatMessage(r.threeOrMoreItems, {
                    item1: o,
                    numberOfOther: s
                })
            }
        },
        907790: (e, t, u) => {
            u.d(t, {
                Ay: () => s,
                VH: () => a
            }), u(898992), u(803949), u(814603), u(147566), u(198721);
            var r = u(296540),
                i = u(474848);
            let a = {
                    "en-US": "en",
                    "ja-JP": "ja",
                    "ko-KR": "ko",
                    "fr-FR": "fr",
                    "de-DE": "de",
                    "pt-BR": "pt-BR",
                    "es-ES": "es-ES"
                },
                o = {
                    innerStyle: {
                        position: "absolute",
                        top: 0,
                        insetInlineStart: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                        boxShadow: `0 1px 0 0 ${u(632079).Tj.border.secondary}`
                    }
                };

            function n(e) {
                return e.src ? (0, i.jsx)("img", {
                    alt: "",
                    style: e.style,
                    src: e.src
                }) : null
            }
            let s = r.forwardRef(function(e, t) {
                var a, s, D;
                let l, d = r.useRef(e);
                d.current = e;
                let c = r.useRef(void 0),
                    [p, m] = r.useState(!!e.customPlayButton),
                    [f, h] = r.useState(!1),
                    [F, C] = r.useState(!!e.preloadThumbnailSrc);
                r.useEffect(() => {
                    C(!!e.preloadThumbnailSrc)
                }, [e.preloadThumbnailSrc, e.src]), r.useEffect(() => {
                    let t, u = !0,
                        r = () => {
                            let i = window.Vimeo;
                            if (!i || !u) return;
                            let a = document.getElementById(e.src);
                            if (!a) return void setTimeout(r, 50);
                            try {
                                var o, n;
                                if (c.current = t = new i.Player(a, {
                                        logging: !1
                                    }), !u || !t) return;
                                t.on("play", e => {
                                    var t, u;
                                    m(!1), null == (t = (u = d.current).onPlay) || t.call(u, e)
                                }), t.on("playing", () => {
                                    C(!1)
                                }), t.on("pause", e => {
                                    var t, u;
                                    null == (t = (u = d.current).onPause) || t.call(u, e)
                                }), t.on("ended", e => {
                                    var t, u;
                                    null == (t = (u = d.current).onEnd) || t.call(u, e)
                                }), null == (o = (n = d.current).onPlayerReady) || o.call(n, t), t.on("timeupdate", e => {
                                    var t, u;
                                    null == (t = (u = d.current).onTimeUpdate) || t.call(u, e)
                                })
                            } catch (e) {}
                        };
                    if (window.Vimeo) r();
                    else {
                        let e = document.createElement("script");
                        e.src = "https://player.vimeo.com/api/player.js", e.onload = r, document.body.appendChild(e)
                    }
                    return () => {
                        if (u = !1, c.current = void 0, t) try {
                            t.off("play"), t.off("playing"), t.off("pause"), t.off("ended"), t.off("timeupdate")
                        } catch (e) {}
                    }
                }, [e.src]);
                let g = r.useCallback(() => {
                        let e = c.current;
                        e && (h(!0), e.play().catch(e => {
                            u(773352).log({
                                level: "error",
                                from: "VimeoVideoPlayer",
                                type: "vimeo_play_failed",
                                error: e
                            })
                        }))
                    }, []),
                    v = (s = e.src, D = {
                        texttrack: e.defaultTextTrack,
                        playsinline: !1,
                        dnt: (null == (a = e.options) ? void 0 : a.dnt) ? ? !0,
                        ...e.options
                    }, l = new URL(s), (0, u(722371).WP)(D).forEach(([e, t]) => {
                        void 0 !== t && l.searchParams.set(e, String(t))
                    }), l.toString()),
                    E = (0, u(960253).I)(() => ({
                        preloadThumbnail: {
                            zIndex: 1,
                            pointerEvents: "none",
                            opacity: +!!F,
                            transition: "opacity 0.15s ease-out"
                        },
                        customPlayButtonOverlay: {
                            position: "absolute",
                            top: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            opacity: +!f,
                            transition: "opacity 0.15s ease-out",
                            pointerEvents: f ? "none" : "auto",
                            zIndex: 2
                        }
                    }), [f, F]);
                return (0, i.jsxs)(u(253492).A, {
                    ratio: e.aspectRatioOverride ? ? 9 / 16,
                    children: [(0, i.jsx)(n, {
                        style: { ...o.innerStyle,
                            ...E.preloadThumbnail,
                            ...e.preloadThumbnailStyle
                        },
                        src: e.preloadThumbnailSrc
                    }), (0, i.jsx)("iframe", {
                        ref: t,
                        id: e.src,
                        className: e.className,
                        allowFullScreen: !0,
                        src: v,
                        style: { ...o.innerStyle,
                            ...e.style
                        }
                    }), p && e.customPlayButton ? (0, i.jsx)("div", {
                        style: E.customPlayButtonOverlay,
                        children: (0, i.jsx)(u(912946).A, {
                            onClick: g,
                            size: "lg",
                            colorPalette: "blue",
                            children: e.customPlayButton
                        })
                    }) : void 0]
                })
            })
        },
        937776: (e, t, u) => {
            u.d(t, {
                B: () => a
            }), u(296540);
            var r = u(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, r.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                a = (0, u(104509).wt)("archiveBox", i, "default")
        },
        964282: (e, t, u) => {
            function r(e) {
                let t = u(906745).DateTime.fromMillis(e.startUnixTimestampMS),
                    r = e.endUnixTimestampMS ? u(906745).DateTime.fromMillis(e.endUnixTimestampMS) : void 0,
                    i = u(906745).DateTime.fromMillis(e.startOfWeekUnixTimestampMS),
                    a = u(906745).DateTime.fromMillis(e.endOfWeekUnixTimestampMS),
                    o = t.startOf("day"),
                    n = u(906745).DateTime.max(i, o),
                    s = Math.ceil(n.diff(i, "days").get("days")),
                    D = 1;
                if (r) {
                    let e = r.endOf("day");
                    D = Math.ceil(u(906745).DateTime.min(a, e).diff(n, "days").get("days"))
                }
                return {
                    start: t,
                    end: r,
                    startOfWeek: i,
                    endOfWeek: a,
                    startColumn: s,
                    columnCount: D
                }
            }

            function i(e) {
                let t = (e.attendees || []).filter(e => !e.self && !e.resource);
                return e.hasParticipants && t.length > 0 && t.every(e => "declined" === e.responseStatus)
            }
            u.d(t, {
                Gj: () => r,
                RN: () => D,
                sM: () => l,
                sR: () => n,
                vZ: () => i,
                xy: () => d,
                y6: () => s
            }), u(944114), u(898992), u(823215), u(354520), u(672577);
            let a = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 5,
                    startedMinsThreshold: 15
                },
                o = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 5,
                    startedMinsThreshold: 5
                },
                n = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 15,
                    startedMinsThreshold: 15
                };

            function s(e) {
                let {
                    events: t,
                    accounts: r,
                    thresholds: i = a,
                    filters: o
                } = e, n = t.filter(e => {
                    if (!e.conferencing && !(null != o && o.includeEventsWithoutConferencing)) return !1;
                    let t = r.find(t => t.id === e.accountId);
                    return !(!(null != t && t.email) || !(0, u(120462).Ko)(e, t.email) || "declined" === (e.responseStatus ? ? "declined")) && !e.isAllDay
                });
                if (0 === n.length) return [];
                let {
                    upcomingMinsThreshold: s,
                    startingMinsThreshold: D,
                    startedMinsThreshold: l
                } = i, d = u(906745).DateTime.now(), c = (null == o ? void 0 : o.maxDaysInFuture) !== void 0 ? o.maxDaysInFuture * u(695216).XQ : void 0, p = (null == o ? void 0 : o.maxDaysInPast) !== void 0 ? o.maxDaysInPast * u(695216).XQ : void 0, m = [], f = [], h = [], F = [], C = [], g = [];
                for (let e of n) {
                    if (e.isAllDay) continue;
                    let t = function(e) {
                            let t = u(906745).DateTime.fromISO(e.start.dateTime, {
                                    zone: e.start.timeZone
                                }),
                                r = u(906745).DateTime.fromISO(e.end.dateTime, {
                                    zone: e.end.timeZone
                                });
                            return u(906745).IX.fromDateTimes(t, r)
                        }(e),
                        r = d.diff(t.end, "minutes").minutes;
                    if (void 0 !== p && r > p) continue;
                    if (null != o && o.excludeEventsOnDifferentDays && d.setZone(t.start.zone).toISODate() !== t.start.toISODate()) continue;
                    let i = t.start.diff(d, "minutes").minutes;
                    if (void 0 === c || !(i > c))
                        if (i >= 0 && i <= s) m.push(e);
                        else if (i < 0) {
                        let u = -i,
                            a = r >= 0 ? r : void 0;
                        u > 0 && u <= D ? h.push(e) : u > D && u <= l ? F.push(e) : t.contains(d) ? f.push(e) : void 0 !== p && void 0 !== a && a <= p && C.push(e)
                    } else g.push(e)
                }
                return f.sort((e, t) => {
                    let r = u(906745).DateTime.fromISO(e.start.dateTime, {
                        zone: e.start.timeZone
                    });
                    return u(906745).DateTime.fromISO(t.start.dateTime, {
                        zone: t.start.timeZone
                    }).diff(r).toMillis()
                }), C.length > 1 && C.sort((e, t) => {
                    let r = u(906745).DateTime.fromISO(e.end.dateTime, {
                        zone: e.end.timeZone
                    });
                    return u(906745).DateTime.fromISO(t.end.dateTime, {
                        zone: t.end.timeZone
                    }).diff(r).toMillis()
                }), [...m, ...h, ...F, ...null != o && o.excludeInProgressEvents ? [] : f, ...C, ...null != o && o.excludeUpcomingLaterEvents ? [] : g]
            }

            function D(e, t) {
                return s({
                    events: e,
                    accounts: t,
                    thresholds: a,
                    filters: void 0
                })[0]
            }

            function l(e, t, u) {
                return s({
                    events: e,
                    accounts: t,
                    thresholds: o,
                    filters: {
                        excludeUpcomingLaterEvents: !0,
                        ...u
                    }
                })
            }

            function d(e) {
                let {
                    spaceStore: t
                } = e, r = e.fileUrl;
                if (!t) return;
                let i = (0, u(132702).parseRoute)({
                        url: r,
                        isMobile: u(986939).A.isMobile,
                        baseUrl: u(986939).A.domainBaseUrl,
                        publicDomainName: u(986939).A.publicDomainName,
                        protocol: u(986939).A.protocol,
                        currentUrl: window.location.href,
                        requestedOnAlternateDomain: (0, u(700473).wasRequestedOnAlternateDomain)()
                    }),
                    a = "page" === i.name ? i.blockId : void 0;
                if (!a) return;
                let o = u(970831).B.createChildStore(t, {
                    table: u(832375).evP,
                    id: a
                });
                return o.load(), o
            }
        }
    }
]);