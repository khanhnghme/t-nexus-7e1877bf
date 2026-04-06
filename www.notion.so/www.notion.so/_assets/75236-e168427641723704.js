"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [37342, 75236], {
        13649: (e, t, u) => {
            u.d(t, {
                T: () => a
            });
            let a = {
                popup: { ...u(986939).A.isMobile && {
                        borderStartStartRadius: 12,
                        borderStartEndRadius: 12,
                        overflow: "hidden"
                    }
                },
                menuScroller: u(986939).A.isMobile ? {
                    background: u(632079).Tj.background.secondary
                } : {},
                header: u(986939).A.isMobile ? {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 16,
                    fontWeight: u(699422).Wy.semibold,
                    background: u(632079).Tj.background.secondary,
                    height: 45
                } : {
                    paddingInlineStart: 12,
                    paddingInlineEnd: 12,
                    paddingTop: 8,
                    fontWeight: u(699422).Wy.medium
                },
                subheader: u(986939).A.isMobile ? {
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    fontSize: 15,
                    fontWeight: u(699422).Wy.medium,
                    background: u(632079).Tj.background.secondary,
                    height: 45,
                    color: u(632079).Tj.text.secondary,
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16
                } : {
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16,
                    paddingTop: 10,
                    fontWeight: u(699422).Wy.semibold
                },
                sectionMenuItem: u(986939).A.isMobile ? {
                    overflow: "hidden",
                    background: u(632079).Tj.background.elevated,
                    borderRadius: 12,
                    marginInlineStart: 16,
                    marginInlineEnd: 16,
                    marginBottom: 16,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: u(632079).Tj.border.secondary,
                    padding: void 0
                } : {},
                buttonMenuItem: u(986939).A.isMobile ? {
                    backgroundColor: u(632079).Tj.background.elevated,
                    paddingTop: 12,
                    paddingBottom: 12,
                    borderBottomWidth: 1,
                    borderBottomStyle: "solid",
                    borderBottomColor: u(632079).Tj.border.secondary
                } : {},
                buttonMenuItemPressed: {
                    background: u(632079).Tj.buttonPressedBackground
                },
                transparentButtonMenuItemBorder: {
                    borderBottomColor: "transparent"
                },
                title: u(986939).A.isMobile ? {
                    fontSize: 16
                } : {},
                icon: { ...u(986939).A.isMobile ? {
                        height: 24,
                        width: 24
                    } : {
                        height: 20,
                        width: 20
                    }
                },
                checkIcon: { ...u(986939).A.isMobile ? {
                        height: 20,
                        width: 20
                    } : {
                        height: 16,
                        width: 16
                    }
                }
            }
        },
        29855: (e, t, u) => {
            u.d(t, {
                j: () => a
            }), u(898992), u(354520);

            function a(e) {
                var t, a, D, i;
                let {
                    environment: r,
                    commentStore: o,
                    discussionStore: d,
                    transaction: n,
                    discussionLocation: s
                } = e;
                if (u(575125).A.state.open) {
                    let e = null == (i = u(575125).A.state.discussionIds) ? void 0 : i.filter(e => e !== d.id);
                    u(575125).A.setState({ ...u(575125).A.state,
                        discussionIds: e,
                        open: ((null == e ? void 0 : e.length) || 0) > 0
                    })
                }(0, u(173157).z)({
                    store: d,
                    data: {
                        resolved: !0
                    },
                    transaction: n
                }), u(350175).A.setState({ ...u(350175).A.state,
                    discussionIds: (null == (t = u(350175).A.state) || null == (t = t.discussionIds) ? void 0 : t.filter(e => e !== d.id)) || []
                });
                let c = u(313432).eR.includes(s),
                    l = null == d || null == (a = d.getParentStore()) ? void 0 : a.getNavigableBlockStore(),
                    p = d.getPropertyId(),
                    f = d.getParentStore(),
                    {
                        property_type: b,
                        collection_id: F,
                        collection_view_id: m,
                        view_type: C,
                        collection_view_block_id: g
                    } = (0, u(618682).q)(p, f);
                u(65255).MR(r, {
                    comment_id: null == o ? void 0 : o.id,
                    discussion_id: d.id,
                    discussion_type: d.getType(),
                    parent_block_id: d.getParentId(),
                    resolution_type: e.resolutionType,
                    from: e.discussionLocation,
                    parent_collection_id: null == (D = d.getParentStore()) ? void 0 : D.getParentCollectionIdUpToTwoLevels(),
                    ...c && {
                        inbox_session_id: u(825109).Ay.state.sessionId,
                        notification_page_id: null == l ? void 0 : l.id
                    },
                    property_type: b,
                    collection_id: F,
                    collection_view_id: m,
                    view_type: C,
                    collection_view_block_id: g
                })
            }
        },
        43371: e => {
            e.exports = function() {
                return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFE])|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC3B\u200D\u2744|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDF])\u200D[\u2640\u2642])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g
            }
        },
        57168: (e, t, u) => {
            u.r(t), u.d(t, {
                ClientAIChatStore: () => n,
                UserChatPreferenceLocalStorageStore: () => o,
                defaultClientAIChatStore: () => s,
                defaultLegacyThreadConfig: () => d
            });
            var a = () => u(546605);
            u(898992), u(354520), u(430670), u(803949);
            let D = "confirmed_safe_by_user",
                i = {
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
            class r extends a().Store {
                getInitialState() {
                    return i
                }
                resetState() {
                    var e;
                    null == (e = this.state.abortController) || e.abort(), this.setState(i)
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
                        toolResultStepId: a,
                        results: D
                    } = e;
                    this.setState({ ...this.state,
                        agentSearchResultsByToolResultStepId: { ...this.state.agentSearchResultsByToolResultStepId,
                            [a]: {
                                agentStepId: t,
                                toolCallId: u,
                                results: D
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
                    } = e, u = this.getTemporaryAttachmentStagedDataOrInstantiate(), a = { ...u,
                        stagedInferenceTranscriptSteps: [...u.stagedInferenceTranscriptSteps, t]
                    };
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: a
                        }
                    })
                }
                unstageAttachmentInferenceTranscriptStep(e) {
                    var t;
                    let {
                        fileId: u
                    } = e, a = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!a) return;
                    let D = a.stagedInferenceTranscriptSteps.filter(e => "attachment" !== e.type && "computer-file" !== e.type || e.fileUrl !== u);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...a,
                                stagedInferenceTranscriptSteps: D
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
                    let a = t.stagedAttachmentUploadStore;
                    u.forEach(e => {
                        a.onDeleteFileUpload(e)
                    });
                    let D = t.stagedInferenceTranscriptSteps.filter(e => "computer-file" !== e.type);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...t,
                                stagedInferenceTranscriptSteps: D
                            }
                        }
                    })
                }
                markStagedAttachmentInferenceTranscriptStepAsSafe(e) {
                    var t, u;
                    let {
                        fileUrl: a
                    } = e, i = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!i) return;
                    let r = i.stagedInferenceTranscriptSteps.findIndex(e => "attachment" === e.type && e.fileUrl === a);
                    if (r < 0) return;
                    let o = i.stagedInferenceTranscriptSteps[r];
                    if ("attachment" !== o.type) return;
                    let d = null != (u = o.metadata) && u.guardrail ? { ...o.metadata.guardrail,
                            attachmentRisk: D
                        } : {
                            attachmentRisk: D
                        },
                        n = { ...o,
                            metadata: { ...o.metadata ? ? {},
                                guardrail : d
                            }
                        },
                        s = [...i.stagedInferenceTranscriptSteps];
                    s[r] = n, this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...i,
                                stagedInferenceTranscriptSteps: s
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
            let o = new(u(245541)).R({
                    key: "spacedScopedUserChatPreference",
                    namespace: u(274919).Bq,
                    important: !0,
                    trackingType: "preference"
                }),
                d = {
                    type: "search",
                    scopeForNextSearch: {
                        type: "everything"
                    }
                };
            class n extends a().Store {
                getInitialState() {
                    return {
                        showHistory: !1,
                        showDebug: !1,
                        loading: !1,
                        configForNewTranscripts: d,
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
                        let t = new r;
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
            let s = new n;
            (0, u(202146).exposeDebugValue)("clientAiChatStore", s)
        },
        69138: (e, t, u) => {
            u.d(t, {
                d: () => i
            }), u(296540);
            var a = u(474848);
            let D = {
                tooltip: { ...(0, u(51831).n)(!1),
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: -4,
                    borderRadius: 6,
                    paddingTop: 4,
                    paddingInlineEnd: 10,
                    paddingBottom: 4,
                    paddingInlineStart: 8,
                    gap: 5
                }
            };

            function i(e) {
                let {
                    enableIcon: t,
                    onClick: i,
                    gradientColor: r
                } = e, o = (0, u(960253).I)(() => ({
                    moreCommentsWrapper: {
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        zIndex: 1,
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        height: 30,
                        background: `linear-gradient(to bottom, ${u(632079).Tj.contentBackgroundTransparent} 0px, ${r??u(632079).Tj.selectedMarginDiscussionBackground} 30px)`,
                        marginTop: -28
                    }
                }), [r]);
                return (0, a.jsx)("div", {
                    style: o.moreCommentsWrapper,
                    children: (0, a.jsxs)("div", {
                        tabIndex: 0,
                        role: "button",
                        style: D.tooltip,
                        onClick: i,
                        children: [t ? (0, a.jsx)(u(16275).I, {
                            colorVariant: "inversePrimary",
                            icon: u(242912).arrowStraightDownSmallIcon,
                            size: "xxs"
                        }) : null, (0, a.jsx)(u(109939).sA, {
                            defaultMessage: "See more",
                            id: "discussion.moreMessageTooltip"
                        })]
                    })
                })
            }
        },
        73888: (e, t, u) => {
            u.d(t, {
                y: () => a
            }), u(944114), u(898992), u(354520), u(803949), u(581454);

            function a(e) {
                let {
                    environment: t,
                    transaction: a,
                    spaceStore: D,
                    actors: i,
                    metadata: r
                } = e;
                if (!D.isDefined()) return !1;
                let o = D.id,
                    d = i.filter(e => "user" === e.type).map(e => ({
                        id: (0, u(729052).yO)({
                            spaceId: o,
                            userId: e.userId
                        }),
                        space_id: o,
                        membership_type: e.membershipType,
                        user_id: e.userId
                    })),
                    n = i.filter(e => "bot" === e.type).map(e => {
                        var t, a;
                        return {
                            id: (0, u(611042).YS)({
                                spaceId: D.id,
                                botId: e.botId
                            }),
                            space_id: o,
                            bot_id: e.botId,
                            bot_parent_id: null == e || null == (t = e.parent) ? void 0 : t.id,
                            bot_parent_table: null == e || null == (a = e.parent) ? void 0 : a.table,
                            membership_type: e.membershipType
                        }
                    });
                return d.map(e => [e, u(993189).lJX.create(e).operations[0]]).forEach(([e, t]) => (0, u(421439).y4)({
                    store: (0, u(993077).dp)(D, e.user_id),
                    operation: t,
                    transaction: a
                })), n.map(e => [e, u(993189).p7l.create(e).operations[0]]).forEach(([e, t]) => (0, u(421439).y4)({
                    store: (0, u(993077).Ts)(D, e.bot_id),
                    operation: t,
                    transaction: a
                })), a.postSubmitCallbacks.push(async a => {
                    var o, s;
                    let c = i.map(e => (0, u(283161).z)(e));
                    u(594311).Ah({
                        status: a ? "fail" : "success",
                        location: null == r ? void 0 : r.pagePermissionChangeLocation,
                        permission_items: c
                    }), d.forEach(e => {
                        u(594311).sY({
                            spaceUser: e,
                            from: null == r ? void 0 : r.from,
                            status: a ? "fail" : "success"
                        })
                    }), n.forEach(e => {
                        u(594311).W7({
                            spaceBot: e,
                            from: null == r ? void 0 : r.from,
                            status: a ? "fail" : "success"
                        })
                    }), null != (o = e.metadata) && o.metric && u(680007).default.DO_NOT_USE_measureLegacy(null == (s = e.metadata) ? void 0 : s.metric, {}), a || await u(371151).nO({
                        environment: t,
                        spaceStore: D
                    })
                }), !0
            }
        },
        81930: (e, t, u) => {
            u.d(t, {
                D: () => r,
                P: () => i
            }), u(16280), u(581454), u(296540);
            var a = u(474848);
            let D = (0, u(109939).YK)({
                removingGuest: {
                    id: "convertGuestToMember.removeGuest.updatingMessage",
                    defaultMessage: "Updating…"
                },
                convertingGuest: {
                    id: "convertGuestToMember.convertingGuest.updatingMessage",
                    defaultMessage: "Updating…"
                }
            });
            async function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    membershipType: r,
                    guestUserStore: o
                } = e, d = o.id, n = o.getEmail();
                try {
                    if (u(262058).m({
                            message: D.convertingGuest
                        }), !i.isTeamsEnabled() && !await u(821969).oH({
                            environment: t,
                            flowId: "",
                            trackCreateTeamComplete: !1
                        })) return;
                    let a = [{
                            type: "user",
                            userId: d,
                            membershipType: r,
                            inviteId: void 0
                        }],
                        {
                            serverCommitResult: o
                        } = (0, u(377796).createAndCommit)({
                            userAction: "spacePerimssionGuestActions.convertGuestToMember",
                            environment: t,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: i.id
                            },
                            perform: e => {
                                (0, u(73888).y)({
                                    environment: t,
                                    spaceStore: i,
                                    actors: a,
                                    transaction: e
                                })
                            }
                        });
                    await o, u(287621).gc(t, {
                        member_user_id: d,
                        convert_to: "owner" === r ? "admin" : "member",
                        origin: e.origin
                    }), u(179701).Jg(t, {
                        role: (0, u(729052).ps)(r),
                        is_space: !0,
                        invite_targets: [{
                            type: "existingUser",
                            value: {
                                id: d,
                                version: 0,
                                email: ""
                            },
                            membershipType: "none"
                        }],
                        is_onboarding: !1,
                        invite_origin: "convert_to_member",
                        permission_items: a.map(e => (0, u(283161).z)(e)),
                        invite_message_length: 0,
                        domainType: (0, u(904434).FX)()
                    })
                } catch (e) {
                    u(436555).D6({
                        label: (0, a.jsx)(u(109939).sA, {
                            id: "spacePermissionsSettings.externalTab.userThreeDotMenu.convertToMember.snackbar.failure",
                            defaultMessage: "Failed to convert {email} to workspace member",
                            values: {
                                email: n
                            }
                        })
                    })
                } finally {
                    await u(371151).nO({
                        environment: t,
                        spaceStore: i
                    }), u(262058).V()
                }
            }
            async function r(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    guestUserStore: r
                } = e, o = r.id, d = r.getEmail();
                try {
                    u(262058).m({
                        message: D.removingGuest
                    });
                    let e = await t.api.callApi({
                        eventName: "removeUsersFromSpace",
                        environment: t,
                        data: {
                            userIds: [o],
                            spaceId: i.id,
                            removePagePermissions: !0,
                            revokeUserTokens: !1
                        }
                    });
                    if ("success" === e.type) u(287621).wX(t);
                    else throw Error("Failed to remove guest")
                } catch (e) {
                    u(436555).D6({
                        label: (0, a.jsx)(u(109939).sA, {
                            id: "spacePermissionsSettings.externalTab.userThreeDotMenu.removeFromWorkspace.snackbar.failure",
                            defaultMessage: "Failed to remove {email} from workspace",
                            values: {
                                email: d
                            }
                        })
                    })
                } finally {
                    await u(371151).nO({
                        environment: t,
                        spaceStore: i
                    }), u(262058).V(), u(287621).xO(t, {
                        origin: "space_setting_guest_tab",
                        changedNumber: -1
                    })
                }
            }
        },
        85071: (e, t, u) => {
            u.r(t), u.d(t, {
                iconDefinition: () => a,
                integrationIcon: () => D
            }), u(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                D = (0, u(104509).wt)("integration", a, "default")
        },
        111057: (e, t, u) => {
            u.d(t, {
                A: () => i
            });
            var a = () => u(546605);
            class D extends a().Store {
                getInitialState() {
                    return {
                        recentRecoverableUsers: [],
                        searchQuery: void 0
                    }
                }
            }
            let i = new D
        },
        133565: (e, t, u) => {
            u.d(t, {
                E: () => a
            });

            function a(e) {
                let {
                    spaceId: t
                } = e, a = (0, u(226309).lh)({
                    spaceId: t
                });
                return (0, u(192159).Fq)(a)
            }
        },
        179701: (e, t, u) => {
            function a(e) {
                var t;
                let a = e.invite_targets.filter(u(64273).Gz),
                    D = e.invite_targets.filter(u(64273).ju),
                    i = a.length + D.length,
                    r = u(381453).oE(e.permission_items.map(e => {
                        if ("user_permission" === e.type) return e.user_id && (0, u(4962).ot)(e.user_id)
                    })),
                    o = new Set(null == (t = (0, u(328765).S)()) ? void 0 : t.getEmailDomains()),
                    d = e.invite_targets.filter(e => {
                        if ("existingUser" !== e.type && "newUser" !== e.type) return !1;
                        let t = (0, u(801109).zN)(e.value.email);
                        return t && o.has(t)
                    }).flatMap(e => "agent" === e.type ? [] : e.value.id ? [(0, u(4962).ot)(e.value.id)] : []),
                    n = (0, u(216260).AI)(),
                    s = e.invitee_ids_with_internal_domain ? ? [];
                return {
                    role: e.role,
                    user_count: i,
                    new_user_count: a.length,
                    new_workspace_member_count: e.is_space ? i : d.length,
                    new_workspace_member_ids: e.is_space ? r : d,
                    is_onboarding: e.is_onboarding,
                    invite_flow_id: e.invite_flow_id,
                    invite_origin: e.invite_origin,
                    invitee_ids: r,
                    invite_message_length: e.invite_message_length,
                    subscription_tier: n,
                    domain_type: e.domainType,
                    ...!e.is_space && {
                        share_menu_session_id: e.share_menu_session_id
                    },
                    allow_domain_auto_invite: d.length > 0,
                    is_space: e.is_space,
                    collection_id: e.collection_id,
                    owned_collection_count: e.owned_collection_count,
                    linked_collection_count: e.linked_collection_count,
                    parent_collection_id: e.parent_collection_id,
                    is_internal_domain: s.length > 0,
                    invitee_ids_with_internal_domain: s,
                    invitee_ids_with_internal_domain_enforced: e.invitee_ids_with_internal_domain_enforced
                }
            }

            function D(e) {
                let t = a(e);
                (0, u(104310).u)({
                    event: {
                        eventName: "invite_error",
                        eventProperties: t
                    }
                })
            }

            function i(e, t) {
                let D = a(t);
                (0, u(104310).u)({
                    event: {
                        eventName: "invite",
                        eventProperties: { ...D,
                            is_space: t.is_space
                        }
                    }
                });
                let i = (0, u(328765).S)();
                if (!i) return;
                let o = i.id;
                if (u(105692).subscriptionDataStoreInstance.waitUntilLoaded().then(() => {
                        let a = u(105692).subscriptionDataStoreInstance.state,
                            i = a ? (0, u(34504).V)(e, a, o) : void 0,
                            d = a ? (0, u(19676).h)(e, a, o) : void 0;
                        (0, u(104310).u)({
                            event: {
                                eventName: "invite_debug_with_block_usage",
                                eventProperties: { ...D,
                                    is_space: t.is_space,
                                    is_over_block_limit: i,
                                    block_usage: d
                                }
                            }
                        }), t.is_space || (r(e, D), u(287621).xO(e, {
                            inviteTargets: t.invite_targets,
                            origin: t.invite_origin
                        }))
                    }), t.is_space || D.allow_domain_auto_invite) {
                    (0, u(104310).u)({
                        event: {
                            eventName: "space_invite",
                            eventProperties: D
                        }
                    }), (0, u(772208).M)(e, {
                        space_invited: !0
                    }), u(287621).KX(e, {
                        invite_origin: t.invite_origin,
                        domainType: t.domainType,
                        new_workspace_member_count: D.new_workspace_member_count,
                        new_workspace_member_ids: D.new_workspace_member_ids,
                        allow_domain_auto_invite: D.allow_domain_auto_invite
                    });
                    let a = (0, u(616579).j)({
                        environment: e,
                        spaceId: i.id
                    }) ? ? 1;
                    var d, n = e,
                        s = {
                            visibleMembersCount: a,
                            isProfessionalTeamUser: t.isProfessionalTeamUser,
                            domainType: t.domainType
                        };
                    let r = (0, u(216260).AI)();
                    if (s.visibleMembersCount <= 1) {
                        (0, u(195857).DO_NOT_USE_trackLegacy)("workspace_first_invite_sent"), d = {
                            subscriptionTier: r,
                            domainType: s.domainType
                        }, (0, u(378414).W)(n, {
                            event: "workspace_first_invite_sent",
                            data: d
                        }), "professional" === s.domainType && ((0, u(104310).u)({
                            event: {
                                eventName: "professional_workspace_first_invite_sent",
                                eventProperties: {
                                    visible_members_count: s.visibleMembersCount,
                                    is_professional_team_user: s.isProfessionalTeamUser,
                                    domain_type: s.domainType
                                }
                            }
                        }), (0, u(378414).W)(n, {
                            event: "professional_workspace_first_invite_sent"
                        }))
                    }
                }
                t.is_space || D.new_workspace_member_ids.length === t.invite_targets.length || ((0, u(104310).u)({
                    event: {
                        eventName: "page_invite",
                        eventProperties: D
                    }
                }), function(e, t) {
                    let a = u(728372).AppStoreCurrentUserSettingsStore.state;
                    if (!a) return;
                    let D = a.getKeyStore("settings").getKeyStore("signup_time").getValue();
                    if (!a.getKeyStore("settings").getKeyStore("first_page_invite_at").getValue()) {
                        let i = Date.now(),
                            r = { ...t,
                                ...D ? {
                                    signup_time_ready: !0,
                                    time_from_signup_to_first_page_invite: D - i
                                } : {
                                    signup_time_ready: !1
                                }
                            };
                        (0, u(104310).u)({
                            event: {
                                eventName: "page_invite_time",
                                eventProperties: r
                            }
                        }), (0, u(377796).createAndCommit)({
                            userAction: "firstPageInvite",
                            environment: e,
                            cellTarget: "main",
                            userId: a.id,
                            canUndo: !0,
                            perform: e => {
                                (0, u(862759).m)({
                                    userSettingsStore: a,
                                    data: {
                                        first_page_invite_at: i
                                    },
                                    transaction: e
                                })
                            }
                        })
                    }
                }(e, D))
            }
            async function r(e, t) {
                let a, D = u(728372).AppStoreSidebarSpaceStore.state,
                    i = u(728372).AppStoreCurrentUserStore.state,
                    r = D && D.canEditMembership(),
                    o = u(904434).FX(),
                    d = null == i ? void 0 : i.getEmail();
                if (!r || !o || !d || "professional" !== o) return;
                let n = (0, u(801109).zN)(d);
                if (n) {
                    if (u(908032).i({
                            userId: null == i ? void 0 : i.id,
                            spaceId: D.id,
                            debugFrom: "trackPageInviteGuestSummary"
                        })) {
                        let t = u(218744).default.getConfigKey("email_alias_migration", "mode"),
                            i = await e.api.callApi({
                                eventName: "listUsers",
                                environment: e,
                                data: {
                                    cursor: void 0,
                                    membershipFilter: "guests",
                                    limit: 1e4,
                                    sort: "name_normalized",
                                    sortDirection: "asc",
                                    query: "",
                                    spaceId: D.id,
                                    includeAliasSearch: (0, u(485477).K)(t)
                                }
                            });
                        if ("success" !== i.type) return;
                        a = i.data.users.map(e => e.id)
                    } else {
                        let e = u(105692).subscriptionDataStoreInstance.state;
                        if (!e) return;
                        a = (0, u(883947).o)(e).slice(0, 50).map(e => ({
                            email: u(807825).L.createChildStore(D, {
                                table: u(832375).oo9,
                                id: e.userId
                            }).getEmail(),
                            guestId: e.userId
                        })).filter(e => e.email && (0, u(801109).zN)(e.email) === n).map(e => e.guestId)
                    }(0, u(104310).u)({
                        event: {
                            eventName: "page_invite_guest_summary",
                            eventProperties: { ...t,
                                guest_with_same_domain_count: a.length,
                                guest_ids: a
                            }
                        }
                    })
                }
            }

            function o(e) {
                let t = (0, u(192159).AI)(e.billingData);
                (0, u(104310).u)({
                    event: {
                        eventName: "invite_typed",
                        eventProperties: {
                            invite_flow_id: e.invite_flow_id,
                            invite_origin: e.invite_origin,
                            subscription_tier: t
                        }
                    }
                })
            }

            function d(e) {
                let t, {
                    selected_user_token: a
                } = e;
                "group" === a.type && (t = {
                    type: a.type,
                    value: {
                        id: a.value.group_id
                    }
                }), (0, u(104310).u)({
                    event: {
                        eventName: "invite_select_target",
                        eventProperties: t ? { ...e,
                            selected_user_token: t
                        } : e
                    }
                })
            }

            function n(e) {
                (0, u(104310).u)({
                    event: {
                        eventName: "invite_change_role",
                        eventProperties: e
                    }
                })
            }

            function s(e) {
                (0, u(104310).u)({
                    event: {
                        eventName: "abandon_permissions_invite",
                        eventProperties: e
                    }
                })
            }

            function c(e) {
                (0, u(104310).u)({
                    event: {
                        eventName: "open_share_workspace_invite",
                        eventProperties: e
                    }
                })
            }

            function l(e) {
                (0, u(104310).u)({
                    event: {
                        eventName: "send_share_workspace",
                        eventProperties: e
                    }
                })
            }

            function p(e) {
                (0, u(104310).u)({
                    event: {
                        eventName: "send_membership_request",
                        eventProperties: e
                    }
                })
            }

            function f(e) {
                (0, u(195857).DO_NOT_USE_trackLegacy)("send_guest_request", e)
            }

            function b(e) {
                (0, u(104310).u)({
                    event: {
                        eventName: "skip_share_workspace",
                        eventProperties: e
                    }
                })
            }

            function F(e) {
                (0, u(104310).u)({
                    event: {
                        eventName: "open_page_share_invite",
                        eventProperties: e
                    }
                })
            }

            function m() {
                (0, u(104310).u)({
                    event: {
                        eventName: "open_space_invite",
                        eventProperties: {}
                    }
                })
            }

            function C(e) {
                (0, u(104310).u)({
                    event: {
                        eventName: "invite_modal_input_focus",
                        eventProperties: e
                    }
                })
            }

            function g(e) {
                (0, u(104310).u)({
                    event: {
                        eventName: "invite_users_to_page",
                        eventProperties: e
                    }
                }), u(707964).u4({
                    name: "invite_users_to_page"
                })
            }

            function v(e) {
                (0, u(104310).u)({
                    event: {
                        eventName: "internal_domain_enforced",
                        eventProperties: e
                    }
                })
            }

            function I() {
                (0, u(104310).u)({
                    event: {
                        eventName: "workspace_over_guest_limit",
                        eventProperties: {}
                    }
                })
            }

            function E(e) {
                (0, u(104310).u)({
                    event: {
                        eventName: "open_invite_members_modal",
                        eventProperties: e
                    }
                })
            }

            function h(e) {
                (0, u(104310).u)({
                    event: {
                        eventName: "share_menu_invite_display_mode_change",
                        eventProperties: e
                    }
                })
            }
            u.d(t, {
                iv: () => s,
                _u: () => l,
                Jg: () => i,
                J8: () => D,
                hp: () => v,
                Jy: () => n,
                Wd: () => C,
                kH: () => d,
                D2: () => o,
                R2: () => g,
                vX: () => E,
                F1: () => F,
                bT: () => c,
                VV: () => m,
                xF: () => f,
                RH: () => p,
                UC: () => h,
                l8: () => b,
                ig: () => I
            }), u(517642), u(658004), u(733853), u(845876), u(432475), u(515024), u(731698), u(898992), u(354520), u(430670), u(581454)
        },
        187649: (e, t, u) => {
            let a, D;

            function i(e) {
                a = e
            }
            async function r() {
                return D || (a ? D = await a() : void 0)
            }
            u.d(t, {
                Q: () => i,
                z: () => r
            })
        },
        189684: (e, t, u) => {
            function a(e) {
                return e.replaceAll(/(<([^>]+)>)/gi, "").trim()
            }

            function D(e, t = 140) {
                if (e.length <= t) return e;
                let u = e.substring(0, t).trim(),
                    a = u.split(" ");
                return a.length > 1 && " " !== u.charAt(u.length - 1) ? (a.pop(), `${a.map(e=>e.trim()).join(" ")}...`) : `${u.substring(0,t-3)}...`
            }

            function i(e) {
                return /[\"\']/.test(e)
            }
            u.d(t, {
                Kq: () => a,
                vo: () => i,
                xv: () => D
            }), u(898992), u(354520), u(581454)
        },
        205954: (e, t, u) => {
            function a({
                spaceStore: e,
                members: t
            }) {
                let D = r({
                        spaceStore: e
                    }),
                    i = (0, u(533992).v3)(),
                    o = e.id,
                    [d] = (0, u(97668).Yb)(async () => {
                        if (!D) return;
                        let e = await i.api.callApi({
                            eventName: "getRecentlyRemovedUsers",
                            environment: i,
                            data: {
                                spaceId: o
                            }
                        });
                        if ("failed" === e.type) throw u(647095).Qg(e), e;
                        return e.data.recentlyRemovedMembers
                    }, [o, i, D, t]);
                return d.value
            }

            function D({
                spaceStore: e,
                subscriptionData: t
            }) {
                let a = i({
                        spaceStore: e,
                        subscriptionData: t
                    }),
                    r = (0, u(533992).v3)();
                (0, u(97668).Yb)(async () => {
                    if (!a) return;
                    let t = await r.api.callApi({
                        eventName: "getRecoverableSpaceUserContent",
                        environment: r,
                        data: {
                            spaceId: e.id
                        }
                    });
                    if ("failed" === t.type) throw t;
                    let D = t.data.recentSpaceRecoverPages;
                    return u(111057).A.setState({ ...u(111057).A.state,
                        recentRecoverableUsers: D
                    }), D
                }, [e, r, a])
            }

            function i({
                spaceStore: e,
                subscriptionData: t
            }) {
                return (0, u(682985).K8)(() => e.canAdmin() && u(262166).OX(t.subscriptionTier), [t, e])
            }

            function r({
                spaceStore: e
            }) {
                return (0, u(682985).K8)(() => e.canAdmin(), [e])
            }

            function o({
                spaceStore: e
            }) {
                return (0, u(682985).K8)(() => !!e && e.canEditMembership(), [e])
            }

            function d({
                spaceStore: e
            }) {
                let t = (0, u(993077).U2)(e);
                return (0, u(682985).K8)(() => (0, u(405461).Ny)({
                    spaceStore: e,
                    spaceUserStore: t
                }), [e, t])
            }

            function n() {
                let e = (0, u(533992).v3)();
                return (0, u(682985).K8)(() => (0, u(939588).v)(e), [e])
            }

            function s({
                spaceStore: e
            }) {
                let t = (0, u(394810).h)(e);
                return (0, u(682985).K8)(() => !!((null == e ? void 0 : e.canEditMembership()) && t), [e, t])
            }

            function c({
                spaceStore: e
            }) {
                let t = (0, u(394810).h)(e),
                    a = !!((0, u(682985).K8)(() => null == e ? void 0 : e.canAdmin(), [e]) && t);
                return {
                    hoverCard: a,
                    directory: a,
                    activity: a
                }
            }
            u.d(t, {
                BV: () => a,
                Gg: () => s,
                Ul: () => c,
                k4: () => o,
                qz: () => d,
                r1: () => r,
                rl: () => D,
                t1: () => i,
                zh: () => n
            })
        },
        215813: (e, t, u) => {
            u.d(t, {
                E: () => r
            }), u(944114);
            var a = () => u(517013),
                D = () => u(832375),
                i = () => u(173157);

            function r(e) {
                var t;
                let {
                    environment: r,
                    store: o,
                    permissionItems: d,
                    transaction: n,
                    inviteFlowId: s,
                    inviteMessage: c,
                    inviteOrigin: l,
                    disable_invite_email: p
                } = e, f = o.getSpaceId() || (o.table === D().NXh ? o.id : null == (t = (0, u(974410).f)(o)) ? void 0 : t.id), {
                    id: b
                } = r.currentUser;
                for (let e of d)
                    if (f && "user_permission" === e.type && e.invite_id) {
                        if (o.table === D().C0E) continue;
                        let {
                            inviteeId: t,
                            inviteeTable: r
                        } = function(e) {
                            let {
                                item: t,
                                spaceId: a
                            } = e;
                            return u(642157).B2(t) ? {
                                inviteeId: t.user_id,
                                inviteeTable: D().oo9
                            } : u(642157).P3(t) ? {
                                inviteeId: t.bot_id,
                                inviteeTable: D().GPl
                            } : u(642157).Ds(t) ? {
                                inviteeId: t.group_id,
                                inviteeTable: u(434652).gp
                            } : u(642157).Lg(t) ? {
                                inviteeId: a,
                                inviteeTable: D().NXh
                            } : u(642157).gl(t) ? {
                                inviteeId: t.team_id,
                                inviteeTable: D().yKj
                            } : {}
                        }({
                            item: e,
                            spaceId: f
                        }), d = {
                            id: e.invite_id,
                            version: 1,
                            flow_id: s,
                            space_id: f,
                            target_id: o.id,
                            target_table: o.table,
                            inviter_id: b,
                            inviter_table: D().oo9,
                            invitee_id: t,
                            invitee_table_or_group: r,
                            message: c,
                            created_time: Date.now(),
                            attributes: {
                                permission: e,
                                origin_type: l,
                                disable_invite_email: p
                            }
                        };
                        (0, i().z)({
                            store: (0, a().v3)(o, {
                                table: "invite",
                                id: d.id,
                                spaceId: f
                            }),
                            data: d,
                            transaction: n
                        })
                    }
                return n.postSubmitCallbacks.push(e => {
                    u(179701).R2({
                        status: e ? "fail" : "success",
                        origin: l
                    })
                }), !0
            }
        },
        283161: (e, t, u) => {
            u.d(t, {
                z: () => a
            });

            function a(e) {
                return "user" === e.type ? {
                    type: "user_permission",
                    role: (0, u(729052).ps)(e.membershipType),
                    user_id: e.userId,
                    invite_id: e.inviteId
                } : "bot" === e.type ? {
                    type: "bot_permission",
                    role: (0, u(611042).rf)(e.membershipType),
                    bot_id: e.botId
                } : void(0, u(722371).HB)(e)
            }
        },
        322095: (e, t, u) => {
            function a(e, t) {
                return e.map(e => D(e, t))
            }

            function D(e, t) {
                var a, D;
                let i, {
                        nameMessage: r,
                        descriptionMessage: o,
                        ...d
                    } = e,
                    {
                        rootId: n,
                        previewRootId: s,
                        spaceId: c
                    } = (a = e, D = t, i = (0, u(599412).H)(D), a.sources[i] || a.sources[u(599412).q]);
                return { ...d,
                    id: r.id,
                    rootId: n,
                    spaceId: c,
                    previewRootId: s,
                    name: t.formatMessage(r),
                    description: o ? t.formatMessage(o) : void 0
                }
            }
            u.d(t, {
                B: () => D,
                o: () => a
            }), u(581454)
        },
        394810: (e, t, u) => {
            u.d(t, {
                h: () => a
            });

            function a(e) {
                var t;
                let {
                    spaceId: a,
                    currentUserId: D
                } = (0, u(682985).K8)(() => {
                    var t;
                    return {
                        spaceId: null == e ? void 0 : e.id,
                        currentUserId: null == (t = u(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id
                    }
                }, [e]), i = (0, u(217844)._)({
                    name: "members",
                    spaceId: a,
                    userId: D,
                    amount: "unknown"
                }), r = null == i || null == (t = i.limit) ? void 0 : t.total;
                return !!r && ("unlimited" === r || r > 1)
            }
        },
        540336: (e, t, u) => {
            u.d(t, {
                Jy: () => F,
                LZ: () => m,
                vU: () => b
            }), u(581454);
            var a = u(296540),
                D = u(474848);
            let i = {
                    kORKVm: "xryxfnj",
                    kXHlph: "xw2csxc",
                    k1xSpc: "x78zum5",
                    kzqmXN: "xh8yej3",
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                r = {
                    kGVxlE: "xx4f2qb",
                    $$css: !0
                },
                o = {
                    kGuDYH: "xif65rj",
                    kZCmMZ: "xmzvs34",
                    kwRFfy: "xf159sx",
                    kY2c9j: "x1vjfegm",
                    $$css: !0
                },
                d = {
                    kGuDYH: "x1j61zf2",
                    kLKAdn: "x1nn3v0j",
                    kY2c9j: "xhtitgo",
                    kZKoxP: "xn3w4p2",
                    kC7eKd: "x1mmz80m",
                    $$css: !0
                },
                n = {
                    kZCmMZ: "xf7dkkf",
                    kwRFfy: "xv54qhq",
                    $$css: !0
                },
                s = {
                    kLKAdn: "x1yrsyyn",
                    kGO01o: "x10b6aqq",
                    khDVqt: "xuxw1ft",
                    k7Eaqz: "xeuugli",
                    kmuXW: "x2lah0s",
                    kMwMTN: "x1b8rd1j",
                    $$css: !0
                },
                c = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                l = {
                    k4EQJz: "xkaiwgt",
                    kVAEAm: "x10l6tqk",
                    krVfgx: "x1ey2m1c",
                    kLqNvP: "xrotz4w",
                    kt4wiu: "x11dcrhx",
                    $$css: !0
                },
                p = {
                    k1xSpc: "x78zum5",
                    kzQI83: "x1iyjqo2",
                    $$css: !0
                },
                f = {
                    selectedTab: {
                        color: u(632079).Tj.text.primary
                    }
                };

            function b(e, t) {
                if (e) return `${e}-tab-${t}`
            }

            function F(e, t) {
                if (e) return `${e}-tabpanel-${t}`
            }
            let m = a.memo(function({
                tabs: e,
                selectedIndex: t,
                onChange: m,
                right: C,
                style: g,
                tabStyle: v,
                tabTitleStyle: I,
                selectedTabTitleStyle: E,
                tabBorderStyle: h,
                selectedTabStyle: _,
                readOnly: A,
                hideTabBorder: B,
                idPrefix: S
            }) {
                let w = (0, a.useContext)(u(649476).xu),
                    y = (0, u(616844).Y5)("left", 16),
                    x = (0, u(616844).Y5)("right", 16),
                    R = w.menuType === u(649476).gu.Popup;
                return (0, D.jsxs)("div", { ...u(952687).A.props(i, !B && r, u(986939).A.isMobile ? [d, R ? n : ((e, t) => [{
                        kZCmMZ: null != e ? "xnvo3vl" : e,
                        kwRFfy: null != t ? "x120eax6" : t,
                        $$css: !0
                    }, {
                        "--x-paddingInlineStart": "number" == typeof e ? e + "px" : null != e ? e : void 0,
                        "--x-paddingInlineEnd": "number" == typeof t ? t + "px" : null != t ? t : void 0
                    }])(y, x)] : o, g, {
                        $$css: !0,
                        className: "hide-scrollbar"
                    }),
                    children: [(0, D.jsx)("div", {
                        role: "tablist",
                        ...u(952687).A.props(p, "object" == typeof g && g && "flexDirection" in g && {
                            flexDirection: g.flexDirection
                        }),
                        children: e.map((e, i) => {
                            let r = i === t;
                            return (0, D.jsx)(a.Fragment, {
                                children: (0, D.jsxs)("div", { ...u(952687).A.props(s, v, r && c, r && f.selectedTab, r && _),
                                    children: [(0, D.jsx)(u(988022).p, {
                                        role: "tab",
                                        style: [I, r && E],
                                        onClick: () => m(i),
                                        disabled: A,
                                        "aria-selected": r,
                                        id: b(S, i),
                                        "aria-controls": F(S, i),
                                        colorPalette: r ? void 0 : "gray",
                                        children: e
                                    }), r ? (0, D.jsx)("div", { ...u(952687).A.props(l, h)
                                    }) : void 0]
                                }, `tabButton-${i}`)
                            }, i)
                        })
                    }), C ? (0, D.jsx)("div", {
                        className: "x1iyjqo2 x78zum5 x6s0dn4 x13a6bvl x1b8rd1j",
                        children: C
                    }) : void 0]
                })
            })
        },
        577280: (e, t, u) => {
            u.d(t, {
                w: () => D
            }), u(296540);
            var a = u(474848);

            function D(e) {
                let {
                    labelType: t
                } = e, D = "invited" === t ? u(805186).S.invitedLabel : "external" === t ? u(805186).S.externalLabel : u(805186).S.guestLabel;
                return (0, a.jsx)(u(746434).E, {
                    content: (0, a.jsx)(u(109939).sA, { ...D
                    }),
                    color: "invited" === t || "external" === t ? "gray" : "yellow"
                })
            }
        },
        606430: (e, t, u) => {
            u.d(t, {
                w: () => n,
                y: () => d
            });
            let a = {
                    sources: {
                        "en-US": {
                            previewRootId: "e950a58c-0d6f-42c3-8225-9e7adc5d4182",
                            rootId: "e950a58c-0d6f-42c3-8225-9e7adc5d4182",
                            spaceId: u(54353).rQ
                        }
                    },
                    nameMessage: u(647414).DZ.getStartedPage
                },
                D = {
                    sources: {
                        "en-US": {
                            previewRootId: "89ba9061-3275-4d76-966f-11691fdfd72f",
                            rootId: "89ba9061-3275-4d76-966f-11691fdfd72f",
                            spaceId: u(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "0eb824c6-f768-47bc-9204-d94dbb912c6e",
                            rootId: "0eb824c6-f768-47bc-9204-d94dbb912c6e",
                            spaceId: u(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "09f3541c-8edb-4603-9bc3-02bd22cd7836",
                            rootId: "09f3541c-8edb-4603-9bc3-02bd22cd7836",
                            spaceId: u(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "b13cc3bd-a0a3-4b61-b482-63051d7804b5",
                            rootId: "b13cc3bd-a0a3-4b61-b482-63051d7804b5",
                            spaceId: u(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "b2b10be2-1b2f-4a48-a453-532657bd8e92",
                            rootId: "b2b10be2-1b2f-4a48-a453-532657bd8e92",
                            spaceId: u(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "a00ebb82-58f2-4b40-89ee-a65be3befabf",
                            rootId: "a00ebb82-58f2-4b40-89ee-a65be3befabf",
                            spaceId: u(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",
                            rootId: "6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",
                            spaceId: u(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "50a76940-a26e-443a-b752-1412855e6ad7",
                            rootId: "50a76940-a26e-443a-b752-1412855e6ad7",
                            spaceId: u(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",
                            rootId: "4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",
                            spaceId: u(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "555c9896-0c2d-4af7-a951-1d81f051de2e",
                            rootId: "555c9896-0c2d-4af7-a951-1d81f051de2e",
                            spaceId: u(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "751d20c2-e2be-4e61-921a-adb553651c8c",
                            rootId: "751d20c2-e2be-4e61-921a-adb553651c8c",
                            spaceId: u(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "8e0ffb71-86cb-46bf-abf2-720dcb4378f9",
                            rootId: "8e0ffb71-86cb-46bf-abf2-720dcb4378f9",
                            spaceId: u(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "53da1632-5152-4b4f-b440-19b82802360b",
                            rootId: "53da1632-5152-4b4f-b440-19b82802360b",
                            spaceId: u(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "a2ca886e-3537-47e1-823b-57633cb94702",
                            rootId: "a2ca886e-3537-47e1-823b-57633cb94702",
                            spaceId: u(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "ed24d770-243d-4ef4-b469-0187beadf16e",
                            rootId: "ed24d770-243d-4ef4-b469-0187beadf16e",
                            spaceId: u(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-81e2-ac8b-ee29b0a7809b",
                            rootId: "22317954-d9c2-81e2-ac8b-ee29b0a7809b",
                            spaceId: u(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-81f9-9472-fdb4858f55e8",
                            rootId: "22317954-d9c2-81f9-9472-fdb4858f55e8",
                            spaceId: u(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b0-a305-eff50acb3864",
                            rootId: "22317954-d9c2-81b0-a305-eff50acb3864",
                            spaceId: u(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81f4-a6bd-f0eda23061c7",
                            rootId: "22317954-d9c2-81f4-a6bd-f0eda23061c7",
                            spaceId: u(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8087-ac1a-c8f8ae60bfdb",
                            previewRootId: "2b817954-d9c2-8087-ac1a-c8f8ae60bfdb",
                            spaceId: u(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-803f-88fc-cb42d429b01d",
                            previewRootId: "2b817954-d9c2-803f-88fc-cb42d429b01d",
                            spaceId: u(54353).rQ
                        }
                    },
                    nameMessage: u(647414).DZ.getStartedPage
                },
                i = {
                    sources: {
                        "en-US": {
                            previewRootId: "30fa18a6-609e-4f5b-af3d-31906c46fe23",
                            rootId: "30fa18a6-609e-4f5b-af3d-31906c46fe23",
                            spaceId: u(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "3afd60d5-3ce7-431a-b812-2c836b7596a3",
                            rootId: "3afd60d5-3ce7-431a-b812-2c836b7596a3",
                            spaceId: u(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "dd2f1d05-d4ef-48a0-899c-10fe0346a447",
                            rootId: "dd2f1d05-d4ef-48a0-899c-10fe0346a447",
                            spaceId: u(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "ac411712-ee48-4589-828d-b4e5827efc17",
                            rootId: "ac411712-ee48-4589-828d-b4e5827efc17",
                            spaceId: u(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "0c5be7d7-cfcf-417b-824a-1a280254a58e",
                            rootId: "0c5be7d7-cfcf-417b-824a-1a280254a58e",
                            spaceId: u(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "35c18cd6-99a8-47f3-91ee-40dbfec922fa",
                            rootId: "35c18cd6-99a8-47f3-91ee-40dbfec922fa",
                            spaceId: u(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "017372b2-9d34-4118-ad13-9b8e15c30ebd",
                            rootId: "017372b2-9d34-4118-ad13-9b8e15c30ebd",
                            spaceId: u(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "035cfcde-4292-4905-82b2-6517e58a28b9",
                            rootId: "035cfcde-4292-4905-82b2-6517e58a28b9",
                            spaceId: u(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "42a8570d-5be6-4be4-9ca3-0569f54863bf",
                            rootId: "42a8570d-5be6-4be4-9ca3-0569f54863bf",
                            spaceId: u(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "5f103e1f-2659-4c6a-bb30-705d2dae0774",
                            rootId: "5f103e1f-2659-4c6a-bb30-705d2dae0774",
                            spaceId: u(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "811aca42-41c0-4f83-9e08-e795d7a5f803",
                            rootId: "811aca42-41c0-4f83-9e08-e795d7a5f803",
                            spaceId: u(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "7643a79b-68c8-46af-ae10-f089cb1ae62b",
                            rootId: "7643a79b-68c8-46af-ae10-f089cb1ae62b",
                            spaceId: u(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "6e5d9018-2dc0-4dc7-802c-be95d99f1660",
                            rootId: "6e5d9018-2dc0-4dc7-802c-be95d99f1660",
                            spaceId: u(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "289fe37a-a3fc-4cec-b690-a6f99dec65a8",
                            rootId: "289fe37a-a3fc-4cec-b690-a6f99dec65a8",
                            spaceId: u(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "a9fef1fc-6a95-45fc-9a7f-137790c06105",
                            rootId: "a9fef1fc-6a95-45fc-9a7f-137790c06105",
                            spaceId: u(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8168-b83f-ebfc302217e4",
                            rootId: "22317954-d9c2-8168-b83f-ebfc302217e4",
                            spaceId: u(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-812b-acae-d320272c9931",
                            rootId: "22317954-d9c2-812b-acae-d320272c9931",
                            spaceId: u(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81c3-ade9-cfcadf726253",
                            rootId: "22317954-d9c2-81c3-ade9-cfcadf726253",
                            spaceId: u(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81ae-abe1-c77fb13e32c2",
                            rootId: "22317954-d9c2-81ae-abe1-c77fb13e32c2",
                            spaceId: u(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-801e-9e31-f0ad39acb40d",
                            previewRootId: "2b817954-d9c2-801e-9e31-f0ad39acb40d",
                            spaceId: u(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-80e2-8969-d8a70ea19101",
                            previewRootId: "2b817954-d9c2-80e2-8969-d8a70ea19101",
                            spaceId: u(54353).rQ
                        }
                    },
                    nameMessage: u(647414).DZ.getStartedPage
                },
                r = {
                    sources: {
                        "en-US": {
                            previewRootId: "bd0b93b9-a0e9-4582-a164-98acdc7a5b45",
                            rootId: "bd0b93b9-a0e9-4582-a164-98acdc7a5b45",
                            spaceId: u(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "ecdfe65a-28ee-46d2-a82b-99573e3dd63d",
                            rootId: "ecdfe65a-28ee-46d2-a82b-99573e3dd63d",
                            spaceId: u(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "56dd4a06-5073-46d2-8aca-8e37d90e5610",
                            rootId: "56dd4a06-5073-46d2-8aca-8e37d90e5610",
                            spaceId: u(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "1f8febec-2e84-4be2-a67d-7b5165845a4b",
                            rootId: "1f8febec-2e84-4be2-a67d-7b5165845a4b",
                            spaceId: u(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "ee67a0e4-8343-4dd6-9636-9504cae6c573",
                            rootId: "ee67a0e4-8343-4dd6-9636-9504cae6c573",
                            spaceId: u(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",
                            rootId: "eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",
                            spaceId: u(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "56ba9c1f-2a28-4d05-910c-e89fb051327d",
                            rootId: "56ba9c1f-2a28-4d05-910c-e89fb051327d",
                            spaceId: u(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "07ffa801-adfb-41f3-809b-87f69ae9e9cd",
                            rootId: "07ffa801-adfb-41f3-809b-87f69ae9e9cd",
                            spaceId: u(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "62f63581-5683-49a3-8812-32e2de74a6a6",
                            rootId: "62f63581-5683-49a3-8812-32e2de74a6a6",
                            spaceId: u(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "f01bdcc5-d573-4790-b605-988df0f3a5ea",
                            rootId: "f01bdcc5-d573-4790-b605-988df0f3a5ea",
                            spaceId: u(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "e404919f-5dda-4fc3-a28f-6550e70cee12",
                            rootId: "e404919f-5dda-4fc3-a28f-6550e70cee12",
                            spaceId: u(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "cee1de64-79f4-45b4-85d5-1ffae9624a8e",
                            rootId: "cee1de64-79f4-45b4-85d5-1ffae9624a8e",
                            spaceId: u(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "86ecfb21-c0ed-42cb-864c-83890d49cb51",
                            rootId: "86ecfb21-c0ed-42cb-864c-83890d49cb51",
                            spaceId: u(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "244bca5a-9931-40fb-91cd-bbcd97f1e8be",
                            rootId: "244bca5a-9931-40fb-91cd-bbcd97f1e8be",
                            spaceId: u(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "802eb5a0-67f1-4f31-a058-938206b68f1c",
                            rootId: "802eb5a0-67f1-4f31-a058-938206b68f1c",
                            spaceId: u(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8179-944e-cebc376a24f1",
                            rootId: "22317954-d9c2-8179-944e-cebc376a24f1",
                            spaceId: u(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-8174-8225-c55b3053258c",
                            rootId: "22317954-d9c2-8174-8225-c55b3053258c",
                            spaceId: u(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b4-844e-dfaa568db972",
                            rootId: "22317954-d9c2-81b4-844e-dfaa568db972",
                            spaceId: u(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-817b-b9b4-cbd055e05ba6",
                            rootId: "22317954-d9c2-817b-b9b4-cbd055e05ba6",
                            spaceId: u(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8018-8891-c7de9ab4efc1",
                            previewRootId: "2b817954-d9c2-8018-8891-c7de9ab4efc1",
                            spaceId: u(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-80d4-a4ba-f35b66365d8b",
                            previewRootId: "2b817954-d9c2-80d4-a4ba-f35b66365d8b",
                            spaceId: u(54353).rQ
                        }
                    },
                    nameMessage: u(647414).DZ.getStartedPage
                },
                o = {
                    sources: {
                        "en-US": {
                            previewRootId: "2e568628-70b1-4f35-934e-81ea4263d0e8",
                            rootId: "2e568628-70b1-4f35-934e-81ea4263d0e8",
                            spaceId: u(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "3d8c8d33-f904-41f7-a3ff-b6272c633079",
                            rootId: "3d8c8d33-f904-41f7-a3ff-b6272c633079",
                            spaceId: u(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "9aefc3b4-f172-4917-b1c7-495c26ec37f9",
                            rootId: "9aefc3b4-f172-4917-b1c7-495c26ec37f9",
                            spaceId: u(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "4453c56e-831c-4203-83fc-9736e276b7dc",
                            rootId: "4453c56e-831c-4203-83fc-9736e276b7dc",
                            spaceId: u(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",
                            rootId: "6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",
                            spaceId: u(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "95dafcd5-6243-4838-bea1-8e19b0596f6f",
                            rootId: "95dafcd5-6243-4838-bea1-8e19b0596f6f",
                            spaceId: u(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "34d8ae09-8161-49ec-ae2d-c188c477bb90",
                            rootId: "34d8ae09-8161-49ec-ae2d-c188c477bb90",
                            spaceId: u(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "cb2a5d30-074f-4c07-97b5-61147e0ea504",
                            rootId: "cb2a5d30-074f-4c07-97b5-61147e0ea504",
                            spaceId: u(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "72e66598-65f8-47ec-ba84-000d7321b482",
                            rootId: "72e66598-65f8-47ec-ba84-000d7321b482",
                            spaceId: u(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "ec8b7591-22e8-41e6-9342-b44c1190b855",
                            rootId: "ec8b7591-22e8-41e6-9342-b44c1190b855",
                            spaceId: u(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8147-ab85-d82ae2e2590a",
                            rootId: "22317954-d9c2-8147-ab85-d82ae2e2590a",
                            spaceId: u(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-81ca-9be8-efc8add2fab4",
                            rootId: "22317954-d9c2-81ca-9be8-efc8add2fab4",
                            spaceId: u(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b1-9d4c-c3571789c534",
                            rootId: "22317954-d9c2-81b1-9d4c-c3571789c534",
                            spaceId: u(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81c5-9a7c-ce158660ac68",
                            rootId: "22317954-d9c2-81c5-9a7c-ce158660ac68",
                            spaceId: u(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8014-8867-f5e5cbf2c71c",
                            previewRootId: "2b817954-d9c2-8014-8867-f5e5cbf2c71c",
                            spaceId: u(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-809d-bb3d-f9c22caad3de",
                            previewRootId: "2b817954-d9c2-809d-bb3d-f9c22caad3de",
                            spaceId: u(54353).rQ
                        }
                    },
                    nameMessage: u(647414).DZ.getStartedPageEvernote
                },
                d = {
                    desktopPersonal: D,
                    desktopTeamCreate: i,
                    desktopTeamJoin: r,
                    mobile: {
                        sources: {
                            "en-US": {
                                previewRootId: "16017954-d9c2-806e-8eba-d994c71414b9",
                                rootId: "16017954-d9c2-806e-8eba-d994c71414b9",
                                spaceId: u(54353).rQ
                            },
                            "ko-KR": {
                                previewRootId: "1a817954-d9c2-80ee-a7cc-f06b312607c6",
                                rootId: "1a817954-d9c2-80ee-a7cc-f06b312607c6",
                                spaceId: u(54353).rQ
                            },
                            "ja-JP": {
                                previewRootId: "1a817954-d9c2-80ab-b876-ce0540bcbc50",
                                rootId: "1a817954-d9c2-80ab-b876-ce0540bcbc50",
                                spaceId: u(54353).rQ
                            },
                            "de-DE": {
                                previewRootId: "1a817954-d9c2-809c-be16-eada2bec6449",
                                rootId: "1a817954-d9c2-809c-be16-eada2bec6449",
                                spaceId: u(54353).rQ
                            },
                            "fr-FR": {
                                previewRootId: "1a817954-d9c2-80e4-a2f7-cbc04084b700",
                                rootId: "1a817954-d9c2-80e4-a2f7-cbc04084b700",
                                spaceId: u(54353).rQ
                            },
                            "es-ES": {
                                previewRootId: "1a817954-d9c2-80ba-a1d2-f116653c87e7",
                                rootId: "1a817954-d9c2-80ba-a1d2-f116653c87e7",
                                spaceId: u(54353).rQ
                            },
                            "es-LA": {
                                previewRootId: "1a817954-d9c2-8009-ace4-c7a8be973d30",
                                rootId: "1a817954-d9c2-8009-ace4-c7a8be973d30",
                                spaceId: u(54353).rQ
                            },
                            "pt-BR": {
                                previewRootId: "1a817954-d9c2-8013-97f7-c8514ce9ca72",
                                rootId: "1a817954-d9c2-8013-97f7-c8514ce9ca72",
                                spaceId: u(54353).rQ
                            },
                            "nb-NO": {
                                previewRootId: "1b417954-d9c2-802c-8aad-ead5bdae042e",
                                rootId: "1b417954-d9c2-802c-8aad-ead5bdae042e",
                                spaceId: u(54353).rQ
                            },
                            "nl-NL": {
                                previewRootId: "1b417954-d9c2-8040-99cd-f6f24a7b664e",
                                rootId: "1b417954-d9c2-8040-99cd-f6f24a7b664e",
                                spaceId: u(54353).rQ
                            },
                            "da-DK": {
                                previewRootId: "1b417954-d9c2-8000-bc82-e5b055b64bfd",
                                rootId: "1b417954-d9c2-8000-bc82-e5b055b64bfd",
                                spaceId: u(54353).rQ
                            },
                            "sv-SE": {
                                previewRootId: "1b417954-d9c2-8083-934b-e38126f120e2",
                                rootId: "1b417954-d9c2-8083-934b-e38126f120e2",
                                spaceId: u(54353).rQ
                            },
                            "fi-FI": {
                                previewRootId: "1b417954-d9c2-8011-b27a-e0ad995bd435",
                                rootId: "1b417954-d9c2-8011-b27a-e0ad995bd435",
                                spaceId: u(54353).rQ
                            },
                            "zh-CN": {
                                previewRootId: "1b417954-d9c2-8014-bc84-cf44da811cf8",
                                rootId: "1b417954-d9c2-8014-bc84-cf44da811cf8",
                                spaceId: u(54353).rQ
                            },
                            "zh-TW": {
                                previewRootId: "1a817954-d9c2-80a9-bb6f-f39ba79e7dcc",
                                rootId: "1a817954-d9c2-80a9-bb6f-f39ba79e7dcc",
                                spaceId: u(54353).rQ
                            },
                            "en-GB": {
                                previewRootId: "22317954-d9c2-81fa-b3bc-e876ef8712aa",
                                rootId: "22317954-d9c2-81fa-b3bc-e876ef8712aa",
                                spaceId: u(54353).rQ
                            },
                            "id-ID": {
                                previewRootId: "22317954-d9c2-8135-ba53-c91462db2bd9",
                                rootId: "22317954-d9c2-8135-ba53-c91462db2bd9",
                                spaceId: u(54353).rQ
                            },
                            "vi-VN": {
                                previewRootId: "22317954-d9c2-8120-af12-dbf6ca2ad3c8",
                                rootId: "22317954-d9c2-8120-af12-dbf6ca2ad3c8",
                                spaceId: u(54353).rQ
                            },
                            "th-TH": {
                                previewRootId: "22317954-d9c2-816e-a1db-ede575b22b4b",
                                rootId: "22317954-d9c2-816e-a1db-ede575b22b4b",
                                spaceId: u(54353).rQ
                            },
                            "ar-SA": {
                                rootId: "2b817954-d9c2-80c3-bd3a-c079ca7962cb",
                                previewRootId: "2b817954-d9c2-80c3-bd3a-c079ca7962cb",
                                spaceId: u(54353).rQ
                            },
                            "he-IL": {
                                rootId: "2b817954-d9c2-8064-846c-f5466598e98d",
                                previewRootId: "2b817954-d9c2-8064-846c-f5466598e98d",
                                spaceId: u(54353).rQ
                            }
                        },
                        nameMessage: u(647414).DZ.getStartedPageMobile
                    },
                    evernote: o,
                    web: a
                },
                n = {
                    teamsHomepage: {
                        emoji: "🏠",
                        nameMessage: u(647414).DZ.teamsHomepage,
                        sources: {
                            "en-US": {
                                previewRootId: "4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",
                                rootId: "4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",
                                spaceId: u(54353).rQ
                            },
                            "ko-KR": {
                                previewRootId: "82be252e-5184-44cd-a91b-a7d6ffdefac6",
                                rootId: "82be252e-5184-44cd-a91b-a7d6ffdefac6",
                                spaceId: u(54353).rQ
                            },
                            "ja-JP": {
                                previewRootId: "bea8efd0-61d7-495b-a255-5c1f40753cf7",
                                rootId: "bea8efd0-61d7-495b-a255-5c1f40753cf7",
                                spaceId: u(54353).rQ
                            },
                            "fr-FR": {
                                previewRootId: "12a6eaa5-30f7-419b-aee7-1be2dbc7278c",
                                rootId: "12a6eaa5-30f7-419b-aee7-1be2dbc7278c",
                                spaceId: u(54353).rQ
                            },
                            "de-DE": {
                                previewRootId: "75db54d0-46ad-43b1-8ef0-7556ce0e9069",
                                rootId: "75db54d0-46ad-43b1-8ef0-7556ce0e9069",
                                spaceId: u(54353).rQ
                            },
                            "es-ES": {
                                previewRootId: "9ac64262-cad7-44f3-bfae-96dabec9e770",
                                rootId: "9ac64262-cad7-44f3-bfae-96dabec9e770",
                                spaceId: u(54353).rQ
                            },
                            "es-LA": {
                                previewRootId: "5b51de44-604b-4a96-b421-9f3e3cf470d2",
                                rootId: "5b51de44-604b-4a96-b421-9f3e3cf470d2",
                                spaceId: u(54353).rQ
                            },
                            "pt-BR": {
                                previewRootId: "b9626438-4451-441c-9608-35ab50e3b182",
                                rootId: "b9626438-4451-441c-9608-35ab50e3b182",
                                spaceId: u(54353).rQ
                            }
                        }
                    }
                }
        },
        689220: (e, t, u) => {
            u.d(t, {
                S: () => i
            }), u(296540);
            var a = u(474848);
            let D = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.88 1.87 13.8 13.8",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 .918 12.182l.091-.014-.032-.087a4 4 0 0 1-.233-1.056l-.006-.08-.08.01q-.323.045-.658.045a4.875 4.875 0 1 1 4.83-4.216l-.01.079.08.006q.555.044 1.056.233l.087.032.014-.092q.068-.449.068-.917A6.125 6.125 0 0 0 8 1.875"
                        }), (0, a.jsx)("path", {
                            d: "M5.892 6.025c-.444 0-.779.413-.779.891s.335.891.78.891c.443 0 .778-.413.778-.891s-.335-.891-.779-.891m4.216 0c-.444 0-.779.413-.779.891s.335.891.779.891.779-.413.779-.891-.335-.891-.779-.891M6.499 9.323a.575.575 0 0 0-.954.642A2.96 2.96 0 0 0 9.008 11.1l.03-.011.013-.03a3.9 3.9 0 0 1 1.374-1.658l.066-.045-.048-.063a.576.576 0 0 0-.933.03 1.82 1.82 0 0 1-1.506.802A1.81 1.81 0 0 1 6.5 9.323m6.1.202a3.075 3.075 0 1 0 0 6.15 3.075 3.075 0 0 0 0-6.15m-.425 1.409a.425.425 0 1 1 .85 0v1.241h1.242a.425.425 0 1 1 0 .85h-1.242v1.242a.425.425 0 0 1-.85 0v-1.242h-1.242a.425.425 0 0 1 0-.85h1.242z"
                        })]
                    })
                },
                i = (0, u(104509).wt)("emojiFacePlusSmall", D, "small")
        },
        729849: (e, t, u) => {
            u.d(t, {
                Gi: () => r,
                yB: () => i
            }), u(898992), u(354520), u(803949);
            var a = () => u(546605);

            function D() {
                return u(218744).default.getConfigKey("agent_max_attachments", "value")
            }

            function i() {
                return (0, u(682985).K8)(() => D(), [])
            }
            class r extends a().Store {
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
                        let a = t.get(e);
                        a && t.set(e, { ...a,
                            metadata: { ...a.metadata,
                                guardrail: { ...null == (u = a.metadata) ? void 0 : u.guardrail,
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
                        a = u.get(e);
                    u.set(e, { ...t,
                        timeUploaded: (null == a ? void 0 : a.timeUploaded) ? ? Date.now()
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
                        percentage: a,
                        contentType: D
                    } = e;
                    this.setValueForUploadingFile(t, {
                        type: "uploading",
                        fileName: u,
                        progress: a,
                        contentType: D
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
                    let a = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, {
                        originalFileUrl: t.originalFileUrl,
                        fileName: t.fileName,
                        contentType: "application/pdf",
                        base64EncodedFileUrl: "",
                        attachmentSource: "user_upload",
                        assistantSessionId: (0, u(818963).pg)(t.assistantSessionId),
                        timeUploaded: a
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
                    return this.isUploadInProgress() || this.state.originalFileUrlToSuccessfullyUploadedFiles.size > D()
                }
            }
        },
        731512: (e, t, u) => {
            u.d(t, {
                A: () => i
            }), u(296540);
            var a = u(474848);
            let D = {
                display: "flex",
                alignItems: "center",
                borderRadius: 4
            };

            function i(e) {
                let t = (0, u(533992).Y0)(),
                    i = (0, u(960253).I)(() => ({
                        innerStyle: {
                            padding: "2px 6px",
                            borderRadius: 4,
                            color: u(632079).Tj.text.secondary,
                            background: u(632079).Tj.background.tertiary,
                            fontSize: u(986939).A.isMobile ? 11 : 9,
                            lineHeight: t.isAndroid ? 1.5 : 1,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            whiteSpace: "nowrap"
                        }
                    }), [t.isAndroid]);
                return u(986939).A.isMobile ? (0, a.jsx)(u(64960).Ay, {
                    style: { ...D,
                        ...e.mobileStyle
                    },
                    disabled: void 0 === e.onClick,
                    children: (0, a.jsx)("div", {
                        style: { ...i.innerStyle,
                            ...e.innerStyle
                        },
                        children: e.children
                    })
                }) : (0, a.jsx)(u(64960).Ay, {
                    style: { ...D,
                        ...e.desktopStyle
                    },
                    disabled: void 0 === e.onClick,
                    ...e,
                    children: (0, a.jsx)("div", {
                        style: { ...i.innerStyle,
                            ...e.innerStyle
                        },
                        children: e.children
                    })
                })
            }
        },
        732080: (e, t, u) => {
            u.d(t, {
                A: () => i
            }), u(296540);
            var a = u(474848);
            let D = {
                    label: {
                        color: u(632079).Tj.text.inversePrimary,
                        fontWeight: u(699422).Wy.medium,
                        textAlign: "center",
                        overflowWrap: "anywhere"
                    },
                    emojiContainer: {
                        background: "white",
                        borderRadius: 4,
                        padding: 4,
                        display: "flex",
                        lineHeight: 1,
                        marginTop: 2
                    }
                },
                i = function(e) {
                    let {
                        type: t,
                        emoji: i,
                        customEmojiStore: r,
                        text: o,
                        deletedText: d,
                        subText: n
                    } = e, s = (0, u(682985).K8)(() => "custom" === t && r.isDefined() && r.getAlive(), [r, t]);
                    return (0, a.jsxs)(u(4458).VP, {
                        gap: 4,
                        alignItems: "center",
                        children: ["custom" === t && s ? (0, a.jsx)("div", {
                            style: D.emojiContainer,
                            children: (0, a.jsx)(u(689479).A, {
                                emojiStore: r,
                                size: 40
                            })
                        }) : "unicode" === t ? (0, a.jsx)("div", {
                            style: D.emojiContainer,
                            children: (0, a.jsx)(u(945304).A, {
                                size: 40,
                                char: i
                            })
                        }) : null, (0, a.jsx)(u(324489).V, {
                            isSmall: !0,
                            isMultiline: !0,
                            style: D.label,
                            children: "unicode" === t || s ? o : d
                        }), n ? (0, a.jsx)(u(324489).V, {
                            isSmall: !0,
                            isMultiline: !0,
                            style: D.label,
                            children: n
                        }) : void 0]
                    })
                }
        },
        758972: (e, t, u) => {
            u.d(t, {
                Ay: () => n,
                NJ: () => r,
                d5: () => o
            }), u(898992), u(354520), u(581454), u(737550);
            var a, D, i = () => u(546605);
            let r = ((a = {}).unselected = "unselected", a.workspace_member = "workspace_member", a.request_workspace_member = "request_workspace_member", a.page_guest = "page_guest", a.closed = "closed", a),
                o = ((D = {})[D.closed = 0] = "closed", D[D.share_page = 1] = "share_page", D[D.share_workspace = 2] = "share_workspace", D[D.request_workspace = 3] = "request_workspace", D);
            class d extends i().Store {
                getInitialState() {
                    return {
                        inviteStage: o.closed,
                        selection: r.workspace_member,
                        order: [r.workspace_member, r.page_guest],
                        invitedUsers: [],
                        invitedEmailToUserIdMap: {},
                        flowId: u(92513).JW()
                    }
                }
                startWorkspaceInvite() {
                    this.setState({ ...this.state,
                        inviteStage: o.share_workspace,
                        order: [r.workspace_member, r.page_guest],
                        selection: r.workspace_member
                    })
                }
                startRequestMembership() {
                    this.setState({ ...this.state,
                        inviteStage: o.request_workspace,
                        order: [r.request_workspace_member, r.page_guest],
                        selection: r.request_workspace_member
                    })
                }
                hasGuests() {
                    return this.state.invitedUsers.some(e => e.isGuest)
                }
                getGuestEmails() {
                    return this.state.invitedUsers.filter(e => e.isGuest).map(e => e.email)
                }
            }
            let n = d
        },
        761659: (e, t, u) => {
            u.d(t, {
                u: () => D
            }), u(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.79 2.35 14.41 15.68",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M10 2.355a2.35 2.35 0 0 0-2.253 1.686q-.12.06-.236.126l.834.973a4 4 0 0 1 .186-.084l.33-.138.048-.354A1.104 1.104 0 0 1 10 3.605c.556 0 1.017.415 1.091.96l.049.353.329.138a3.81 3.81 0 0 1 2.337 3.512v1.189c0 .917.25 1.812.716 2.59l2.383 2.78a1.55 1.55 0 0 0-.092-1.937l-.818-.935a3.8 3.8 0 0 1-.939-2.498v-1.19a5.06 5.06 0 0 0-2.803-4.526A2.35 2.35 0 0 0 10 2.355m6.767 14.531L5.489 3.73a.6.6 0 0 1-.093-.144l-.121-.142a.625.625 0 0 0-.95.814L5.718 5.88a5.03 5.03 0 0 0-.773 2.688v1.189c0 .919-.334 1.806-.939 2.498l-.818.935c-.881 1.007-.166 2.583 1.173 2.583h3.02a2.65 2.65 0 0 0 5.24 0h1.577l1.529 1.784a.625.625 0 0 0 1.04-.67M6.194 8.568c0-.602.14-1.172.389-1.678l6.543 7.633H4.36a.308.308 0 0 1-.232-.51l.818-.935a5.04 5.04 0 0 0 1.248-3.321zm5.305 7.205a1.55 1.55 0 0 1-2.998 0z"
                    })
                },
                D = (0, u(104509).wt)("bellSlash", a, "default")
        },
        765898: (e, t, u) => {
            u.d(t, {
                BS: () => o,
                CO: () => D,
                Hb: () => r,
                Y3: () => a,
                _T: () => d
            }), u(898992), u(672577), u(803949), u(814603), u(147566), u(198721);
            let a = 8,
                D = 70;
            (0, u(109939).YK)({
                member: {
                    id: "sharedContextualInviteHelpers.member.inviteMessage2",
                    defaultMessage: "{userName} shared a page {pageName} with you."
                },
                guest: {
                    id: "sharedContextualInviteHelpers.guest.inviteMessage2",
                    defaultMessage: "Accept {userName}{userNameEndsWithS, select, true {’} other {’s}} invite to view {pageName}."
                },
                default: {
                    id: "sharedContextualInviteHelpers.default.inviteMessage",
                    defaultMessage: "Your invitation message"
                },
                optional: {
                    id: "sharedContextualInviteHelpers.default.inviteMessagePrefix",
                    defaultMessage: "Optional message…"
                }
            });
            let i = /@0x[0-9a-fA-F]+/g;

            function r(e, t = 1e3) {
                let a, D;
                if (!e) return "";
                let o = (a = (0, u(189684).Kq)(e), D = "[link]", a = a.replaceAll(i, D), u(159523).I6(a, "url").forEach(e => {
                    a = a.replace(e.value, D)
                }), a);
                return o.length > t && (o = `${o.substring(0,t)}...`), o
            }

            function o(e) {
                return !!e && u(159523).I6(e, "url").length > 0
            }

            function d(e, t) {
                var a;
                let D = null == (a = u(993189).Bj6.fromValue("block", e).getPermissionItems()) ? void 0 : a.find(e => "user_permission" === e.type && e.user_id === t.invited_user_id);
                if (D && "invite_id" in D) return D.invite_id
            }
        },
        860583: (e, t, u) => {
            u.d(t, {
                tx: () => B,
                ZR: () => c,
                Of: () => s,
                Ay: () => S,
                uJ: () => h
            }), u(898992), u(354520), u(581454), u(737550);
            var a = u(296540),
                D = u(474848);
            let i = {
                    flex: 1,
                    justifyContent: "center",
                    display: "flex",
                    minWidth: 60
                },
                r = {
                    width: 20,
                    height: 20
                };

            function o({
                reactionStores: e,
                initialIndex: t
            }) {
                let [d, n] = a.useState(t), s = (0, u(109939).tz)(), c = (0, u(591404).Ol)(), l = (0, u(682985).K8)(() => e.map((e, t) => {
                    let a = e.getIcon();
                    if (!a) return;
                    let i = "raw" !== c || u(871871).qg.isCustomEmojiString(a);
                    return (0, D.jsx)("span", {
                        style: i && t !== d ? {
                            opacity: .5
                        } : {},
                        children: (0, D.jsx)(u(945304).A, {
                            size: 14,
                            char: a
                        })
                    }, a)
                }).filter(u(722371).O9), [e, d, c]), p = (0, u(682985).K8)(() => e[d].getActorStores().map(e => ({
                    id: e.id,
                    store: e,
                    name: e.getDisplayName(s)
                })).filter(u(722371).O9), [e, d, s]);
                return (0, D.jsxs)(u(747369).A, {
                    menuType: u(649476).gu.ActionSheet,
                    children: [(0, D.jsx)(u(540336).LZ, {
                        tabStyle: i,
                        tabs: l,
                        selectedIndex: d,
                        onChange: e => n(e)
                    }), p.map(e => (0, D.jsx)(u(636518).Ay, {
                        title: e.name,
                        dontShrinkIcon: !0,
                        icon: (0, D.jsx)(u(10097).E, {
                            authorStore: e.store,
                            avatarSize: 20,
                            avatarStyle: r
                        })
                    }, e.id))]
                })
            }

            function d(e) {
                let t = (0, u(533992).Y0)(),
                    i = (0, u(682985).K8)(() => u(868249).L.getUserVisibleReactions(e.store), [e.store]),
                    r = (0, a.useRef)(null),
                    d = (0, u(690980).A)({
                        onLongPress: () => {
                            var e;
                            return null == (e = r.current) ? void 0 : e.setOpen(!0)
                        }
                    });
                if (!u(986939).A.isMobile) return (0, D.jsx)(D.Fragment, {
                    children: e.children
                });
                let n = i.findIndex(t => !e.reactionStore || t === e.reactionStore) ? ? 0;
                return (0, D.jsx)(u(656252).A, {
                    bottomSheetBackgroundColor: "elevated",
                    ref: r,
                    bottomSheetInitialState: "half",
                    popupType: t.isTablet ? u(656252).z.Popup : u(656252).z.BottomSheet,
                    content: () => (0, D.jsx)(o, {
                        initialIndex: n,
                        reactionStores: i
                    }),
                    children: () => (0, D.jsx)("div", { ...d,
                        onTouchStart: e => {
                            e.stopPropagation(), d.onTouchStart()
                        },
                        onTouchMove: e => {
                            e.stopPropagation(), d.onTouchMove(e)
                        },
                        onTouchEnd: e => {
                            e.stopPropagation(), d.onTouchEnd()
                        },
                        onTouchCancel: e => {
                            e.stopPropagation(), d.onTouchCancel()
                        },
                        children: e.children
                    })
                }, e.store.id)
            }
            let n = (0, u(109939).YK)({
                    addReaction: {
                        defaultMessage: "Add reaction",
                        id: "ReactionBar.newReaction.ariaLabel"
                    },
                    resolveDiscussion: {
                        defaultMessage: "Resolve",
                        id: "ReactionBar.resolveDiscussion.ariaLabel"
                    },
                    emojiPickerTitle: {
                        defaultMessage: "Reaction",
                        id: "ReactionBar.emojiModalMenu.title"
                    }
                }),
                s = {
                    height: 25
                },
                c = {
                    height: 32,
                    borderRadius: 100,
                    fontSize: 13,
                    paddingTop: 1,
                    paddingInlineEnd: 12,
                    paddingBottom: 1,
                    paddingInlineStart: 12,
                    minWidth: 44,
                    transform: "translateZ(0)"
                },
                l = {
                    style0: {
                        maxWidth: 250,
                        width: "max-content"
                    },
                    reaction: { ...s,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        borderRadius: "100px",
                        fontSize: 14,
                        fontVariantNumeric: "tabular-nums",
                        ...u(986939).A.isMobile ? c : {},
                        paddingTop: 2,
                        paddingInlineEnd: 8,
                        paddingBottom: 2,
                        paddingInlineStart: 8,
                        border: "none"
                    },
                    count: {
                        fontSize: u(418676).Kw
                    },
                    countNoReact: {
                        color: u(632079).Tj.text.secondary
                    },
                    emojiStyle: {
                        paddingTop: 1,
                        color: "black",
                        display: "flex"
                    }
                };

            function p(e) {
                let {
                    store: t,
                    disabled: a,
                    onClick: i,
                    size: r
                } = e, o = (0, u(682985).K8)(() => t.getActors(), [t]), d = (0, u(682985).K8)(() => t.getIcon(), [t]), n = r ? ? 16, {
                    currentUser: s
                } = (0, u(533992).v3)();
                if (!o || !d || 0 === o.length) return null;
                let c = o.some(e => e.id === s.id),
                    p = { ...l.count,
                        ...!c && l.countNoReact
                    };
                return (0, D.jsx)(u(51831).m, {
                    textWrap: !0,
                    style: l.style0,
                    placement: "bottom",
                    delayThreshold: 300,
                    content: () => (0, D.jsx)(F, {
                        store: t,
                        icon: d
                    }),
                    children: e => (0, D.jsxs)(u(265779).E, {
                        colorPalette: c ? "blue" : void 0,
                        disabled: a,
                        style: l.reaction,
                        onClick: i,
                        ...e,
                        children: [(0, D.jsx)("span", {
                            style: l.emojiStyle,
                            children: (0, D.jsx)(u(945304).A, {
                                size: n,
                                char: d
                            })
                        }), (0, D.jsx)("span", {
                            style: p,
                            children: o.length
                        })]
                    })
                })
            }
            let f = {
                remaining: { ...l.reaction,
                    ...l.count,
                    color: u(632079).Tj.text.secondary
                }
            };

            function b(e) {
                let {
                    parentStore: t,
                    reactions: i,
                    disabled: r,
                    onReact: o
                } = e, [n, s] = (0, a.useState)(e.maxReactionsToShow), c = i.slice(0, n), l = void 0 !== n ? i.length - n : 0;
                return (0, D.jsxs)(D.Fragment, {
                    children: [c.map(e => (0, D.jsx)(d, {
                        reactionStore: e,
                        store: t,
                        children: (0, D.jsx)(p, {
                            disabled: r,
                            store: e,
                            onClick: () => {
                                null == o || o(e)
                            }
                        })
                    }, e.id)), l > 0 ? (0, D.jsx)("div", {
                        role: "button",
                        tabIndex: 0,
                        style: f.remaining,
                        onClick: () => s(void 0),
                        children: (0, D.jsx)(u(109939).sA, {
                            defaultMessage: "+{count}",
                            id: "ReactionBar.remaining",
                            values: {
                                count: l
                            }
                        })
                    }) : null]
                })
            }

            function F({
                store: e,
                icon: t
            }) {
                let a = (0, u(109939).tz)(),
                    i = (0, u(682985).K8)(() => e.getActorStores(), [e]),
                    r = (0, u(682985).K8)(() => i.map(e => e.getDisplayName(a)).filter(u(722371).O9), [i, a]),
                    o = u(871871).qg.isCustomEmojiString(t),
                    d = (0, u(682985).K8)(() => {
                        if (o) {
                            let e = u(871871).qg.fromCustomEmojiString(t).pointer;
                            return (0, u(63839).nA)({
                                parentStore: void 0,
                                pointer: e
                            })
                        }
                    }, [t, o]),
                    n = (0, u(682985).K8)(() => {
                        if (null != d && d.isDefined()) return null == d ? void 0 : d.getModel().getRenderTitle()
                    }, [d]);
                return o ? d ? (0, D.jsx)(u(732080).A, {
                    type: "custom",
                    customEmojiStore: d,
                    text: (0, D.jsx)(C, {
                        names: r,
                        emojiNameOrIcon: (0, D.jsx)("span", {
                            className: "notranslate",
                            children: n
                        }),
                        isDeletedCustomEmoji: !1
                    }),
                    deletedText: (0, D.jsx)(C, {
                        names: r,
                        emojiNameOrIcon: (0, D.jsx)("span", {
                            className: "notranslate",
                            children: n
                        }),
                        isDeletedCustomEmoji: !0
                    })
                }) : null : (0, D.jsx)(u(732080).A, {
                    type: "unicode",
                    emoji: t,
                    text: (0, D.jsx)(C, {
                        names: r,
                        emojiNameOrIcon: (0, D.jsx)(u(945304).A, {
                            size: 12,
                            char: t
                        }),
                        isDeletedCustomEmoji: !1
                    })
                })
            }
            let m = {
                text: {
                    color: u(632079).Tj.text.inverseSecondary
                }
            };

            function C({
                names: e,
                emojiNameOrIcon: t,
                isDeletedCustomEmoji: a
            }) {
                return e.length > 50 ? (0, D.jsx)(u(109939).sA, {
                    defaultMessage: "{additionalNames, plural, one {{names} and {additionalNames} other <medium>reacted with</medium> {icon}} other {{names} and {additionalNames} others <medium>reacted with</medium> {icon}}} {isDeletedCustomEmoji, select, true {<medium>(deleted)</medium>} other {}}",
                    id: "ReactionBar.hoverTooltip.textAbbreviated",
                    values: {
                        additionalNames: e.length - 50,
                        names: e.slice(0, 50).join(", "),
                        medium: e => (0, D.jsx)("span", {
                            style: m.text,
                            children: e
                        }),
                        icon: t,
                        isDeletedCustomEmoji: a
                    }
                }) : (0, D.jsx)(u(109939).sA, {
                    defaultMessage: "{nameOrNames} <medium>reacted with</medium> {icon} {isDeletedCustomEmoji, select, true {<medium>(deleted)</medium>} other {}}",
                    id: "ReactionBar.hoverTooltip.text",
                    values: {
                        numberOfNames: e.length,
                        nameOrNames: e.join(", "),
                        medium: e => (0, D.jsx)("span", {
                            style: m.text,
                            children: e
                        }),
                        icon: t,
                        isDeletedCustomEmoji: a
                    }
                })
            }
            let g = {
                height: 24,
                width: 24,
                flex: "0 0 auto"
            };

            function v(e) {
                let {
                    store: t,
                    discussionLocation: i,
                    onEmojiSelection: r,
                    style: o
                } = e, d = (0, u(533992).v3)(), s = (0, a.useRef)(null), c = (0, u(960253).I)(() => ({
                    container: {
                        padding: 2,
                        display: "flex",
                        boxShadow: u(632079).Tj.shadow.outline.md,
                        backgroundColor: u(632079).Tj.buttonGroupBackground,
                        borderRadius: u(986939).A.isMobile ? 3 : 4,
                        ...o
                    }
                }), [o]), l = (0, u(109939).tz)();
                return (0, D.jsx)("div", {
                    style: c.container,
                    children: (0, D.jsx)(u(374533).A, {
                        hasBackground: !0,
                        ariaLabel: l.formatMessage(n.addReaction),
                        showShadow: !1,
                        icon: () => (0, D.jsx)(u(16275).I, {
                            icon: u(704694).r,
                            colorVariant: "secondary"
                        }),
                        style: g,
                        ref: s,
                        onClick: () => h(d, l, t, null == s ? void 0 : s.current, i, r)
                    })
                })
            }
            let I = {
                minWidth: "2em"
            };

            function E({
                store: e,
                discussionLocation: t,
                onEmojiSelection: i
            }) {
                let r = (0, u(533992).v3)(),
                    o = (0, a.useRef)(null),
                    d = (0, u(109939).tz)();
                return (0, D.jsx)(u(265779).E, {
                    style: { ...l.reaction,
                        ...I
                    },
                    ref: o,
                    onClick: () => h(r, d, e, null == o ? void 0 : o.current, t, i),
                    children: (0, D.jsx)(u(16275).I, {
                        icon: u(689220).S,
                        size: "sm",
                        colorVariant: "secondary"
                    })
                })
            }

            function h(e, t, a, i, r, o) {
                if (!(i instanceof Element)) return;
                let d = i.getBoundingClientRect();
                u(874443).W(e, {
                    originGap: 4,
                    originRect: d,
                    popupWidth: u(703188).jv,
                    popupHeight: u(703188).GF,
                    isSmallWidth: !1,
                    title: t.formatMessage(n.emojiPickerTitle),
                    currentTab: "emoji",
                    tabs: [{
                        type: "emoji",
                        title: (0, D.jsx)(u(109939).sA, {
                            defaultMessage: "Emoji",
                            id: "recordIcon.emojiTab.title"
                        }),
                        hideRandomButton: !0,
                        onChange: (t, D) => {
                            o && o();
                            let i = a.getSpaceId();
                            (0, u(377796).createAndCommit)({
                                environment: e,
                                userAction: "Comment.toggleReactionFromMenu",
                                cellTarget: i ? {
                                    spaceWithId: i
                                } : void 0,
                                canUndo: !0,
                                perform: i => {
                                    u(197657).toggleReaction({
                                        environment: e,
                                        transaction: i,
                                        store: a,
                                        icon: t,
                                        discussionLocation: r
                                    }), D && D.keepVisible || u(874443).I()
                                }
                            })
                        }
                    }]
                })
            }
            let _ = a.memo(function(e) {
                    let {
                        parentStore: t,
                        discussionLocation: a,
                        onReactionToggle: i,
                        newReactionStyle: r
                    } = e, o = (0, u(533992).v3)(), n = (0, u(682985).K8)(() => !!o.currentUser.isLoggedIn() && t.canComment(), [t, o.currentUser]), s = (0, u(682985).K8)(() => u(868249).L.getUserVisibleReactions(t), [t]), c = (0, u(682985).K8)(() => {
                        if (t.table === u(832375).SNf) {
                            let e = t.getParentBlockStore();
                            return !!(e && e.pathIsDead())
                        }
                        if (t.table === u(832375).$YH) {
                            let e = t.getParentStore();
                            return !!(e && e.pathIsDead())
                        }
                        return !1
                    }, [t]), l = (0, u(83208).X)("enable_reactions_for_trashed_blocks"), f = c && !l, b = n && !f && s.length > 0 && "updates_menu_archive" !== a, F = n && !f && 0 === s.length;
                    return (0, D.jsxs)(u(4458).fI, {
                        flexWrap: "wrap",
                        gap: 4,
                        children: [s.map(e => (0, D.jsx)(d, {
                            reactionStore: e,
                            store: t,
                            children: (0, D.jsx)(p, {
                                disabled: !n || f,
                                store: e,
                                onClick: () => {
                                    if (e.isDefined()) {
                                        let D = t.getSpaceId(),
                                            r = (0, u(377796).createAndCommit)({
                                                environment: o,
                                                userAction: "Comment.toggleReaction",
                                                cellTarget: D ? {
                                                    spaceWithId: D
                                                } : void 0,
                                                canUndo: !0,
                                                perform: D => u(197657).toggleReaction({
                                                    environment: o,
                                                    transaction: D,
                                                    store: t,
                                                    icon: e.getIcon(),
                                                    discussionLocation: a
                                                })
                                            });
                                        void 0 !== r.performResult && i && i(r.performResult)
                                    }
                                }
                            })
                        }, e.id)), b ? (0, D.jsx)(d, {
                            store: t,
                            children: (0, D.jsx)(E, {
                                store: t,
                                discussionLocation: a,
                                onEmojiSelection: void 0 !== i ? () => i("Added") : void 0
                            })
                        }) : void 0, F ? (0, D.jsx)(v, {
                            store: t,
                            discussionLocation: a,
                            onEmojiSelection: void 0 !== i ? () => i("Added") : void 0,
                            style: r
                        }) : void 0]
                    })
                }),
                A = {
                    actionButton: {
                        borderRadius: "50%",
                        marginInlineStart: 2
                    },
                    postReactionButton: { ...s,
                        width: 40,
                        paddingTop: 0,
                        paddingInlineEnd: 10,
                        paddingBottom: 0,
                        paddingInlineStart: 10,
                        borderRadius: 13,
                        borderWidth: 1,
                        borderColor: u(632079).Tj.border.secondary,
                        borderStyle: "solid",
                        ...u(986939).A.isMobile ? c : {},
                        border: "none",
                        background: u(632079).Tj.background.secondary
                    },
                    style0: {
                        display: "flex",
                        alignItems: "center",
                        marginInlineStart: 2
                    },
                    style1: {
                        borderRadius: "50%",
                        marginInlineStart: 4
                    }
                };

            function B(e) {
                let {
                    parentStore: t,
                    discussionLocation: i,
                    onReact: r,
                    focused: o,
                    showAddReactionButton: s = !0,
                    additionalItems: c
                } = e, [l, p] = (0, a.useState)(!1), f = (0, u(960253).I)(() => ({
                    container: {
                        gap: "4px",
                        marginTop: 12 * ("feed_item_top_level_discussion" !== i && "page_discussion" !== i),
                        paddingBottom: 0,
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        willChange: "transform",
                        transition: "transform 200ms ease",
                        transformOrigin: "center left",
                        transform: o ? "scale3d(1.05)" : "scale(1)"
                    }
                }), [o, i]), F = e => {
                    let a = t.getSpaceId();
                    (0, u(377796).createAndCommit)({
                        userAction: "Discussion.handleResolve",
                        environment: m,
                        cellTarget: a ? {
                            spaceWithId: a
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, u(29855).j)({
                                environment: m,
                                discussionStore: t,
                                transaction: e,
                                discussionLocation: i
                            })
                        }
                    }), u(821243).UP(), null == e || e.stopPropagation()
                }, m = (0, u(533992).v3)(), C = (0, u(682985).K8)(() => !!m.currentUser.isLoggedIn() && t.canComment(), [t, m.currentUser]), g = (0, u(682985).K8)(() => !!m.currentUser.isLoggedIn() && t.canEdit() && "feed_item_top_level_discussion" !== i, [t, m.currentUser, i]), v = (0, a.useRef)(null), I = (0, u(109939).tz)(), E = l || e.focused, _ = (0, u(682985).K8)(() => u(868249).L.getUserVisibleReactions(t), [t]), B = () => {
                    h(m, I, t, null == v ? void 0 : v.current, i, r)
                }, S = (0, a.useCallback)(e => {
                    if (!e.isDefined() || (null == r || r(), "margin_comments" === i && !o)) return;
                    let a = t.getSpaceId();
                    (0, u(377796).createAndCommit)({
                        environment: m,
                        userAction: "Comment.toggleReaction",
                        cellTarget: a ? {
                            spaceWithId: a
                        } : void 0,
                        canUndo: !0,
                        perform: a => u(197657).toggleReaction({
                            environment: m,
                            transaction: a,
                            store: t,
                            icon: e.getIcon(),
                            discussionLocation: i
                        })
                    })
                }, [m, t, i, o, r]);
                return (0, D.jsxs)("div", {
                    onMouseEnter: () => p(!0),
                    onMouseLeave: () => p(!1),
                    style: f.container,
                    children: [(0, D.jsx)(b, {
                        parentStore: t,
                        reactions: _,
                        disabled: !C,
                        onReact: S,
                        maxReactionsToShow: u(986939).A.isMobile ? 6 : void 0
                    }), s ? (0, D.jsxs)(u(654979).A, {
                        animate: {
                            opacity: +!!E,
                            visibility: E ? "visible" : "hidden"
                        },
                        style: A.style0,
                        children: [C ? (0, D.jsx)(d, {
                            store: t,
                            children: (0, D.jsx)(u(51831).m, {
                                content: () => (0, D.jsx)(u(109939).sA, { ...n.addReaction
                                }),
                                children: t => (0, D.jsx)(u(374533).A, {
                                    style: "feed_item_top_level_discussion" === e.discussionLocation ? A.postReactionButton : A.actionButton,
                                    hasBackground: !1,
                                    showShadow: !1,
                                    ref: v,
                                    icon: () => (0, D.jsx)(u(16275).I, {
                                        icon: u(704694).r,
                                        colorVariant: "secondary"
                                    }),
                                    onClick: B,
                                    ...t,
                                    ariaLabel: I.formatMessage(n.addReaction)
                                })
                            })
                        }) : void 0, g ? (0, D.jsx)(u(51831).m, {
                            content: () => (0, D.jsx)(u(109939).sA, { ...n.resolveDiscussion
                            }),
                            children: e => (0, D.jsx)(u(374533).A, {
                                style: A.style1,
                                hasBackground: !1,
                                showShadow: !1,
                                icon: () => (0, D.jsx)(u(16275).I, {
                                    icon: u(971730).checkmarkSmallIcon,
                                    size: "sm",
                                    colorVariant: "secondary"
                                }),
                                onClick: F,
                                ...e,
                                ariaLabel: I.formatMessage(n.resolveDiscussion)
                            })
                        }) : void 0]
                    }) : void 0, c]
                })
            }
            let S = _
        },
        883947: (e, t, u) => {
            u.d(t, {
                o: () => a
            }), u(898992), u(354520);

            function a(e) {
                return (0, u(576968).B)(e).filter(u(573143).QE)
            }
        },
        939588: (e, t, u) => {
            u.d(t, {
                v: () => a
            });

            function a(e) {
                var t;
                let a;
                return t = ["personal", "student", "personal_free"], !((a = (0, u(216260).AI)()) && t.includes(a))
            }
        }
    }
]);