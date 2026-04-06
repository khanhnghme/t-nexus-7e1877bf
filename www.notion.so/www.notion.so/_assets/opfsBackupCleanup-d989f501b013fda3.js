"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [91787], {
        544751: (e, t, s) => {
            s.r(t), s.d(t, {
                TEST_ONLY__resetCleanupKillSwitchForTests: () => l,
                cleanupSnapshotsAfterUserQueueDrain: () => p
            }), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(898992), s(354520);
            var n = () => s(773352),
                a = () => s(416607),
                o = () => s(737096);
            async function r(e, t) {
                if (!s(22553).z.isEnabled) return {
                    guardedSnapshotId: void 0
                };
                let r = (0, s(6146).getOPFSPageCacheInstance)();
                if (!r) return {
                    guardedSnapshotId: void 0
                };
                let i = o().E.getOwnedTxSessionIds(e),
                    d = o().E.beginCleanupProtection(e);
                try {
                    for (let s of i) {
                        let i = await r.snapshots.listSnapshotIdsForSession(e, s),
                            d = s === t ? new Set(o().E.getCleanupProtectedSnapshotIds(e)) : void 0,
                            l = d ? i.filter(e => !d.has(e)) : i;
                        0 !== l.length && (o().E.hasHadUnretryableFailure(e, s) ? await r.snapshots.keepSnapshots(e, s, l).then(() => {}).catch(e => {
                            n().log({
                                level: "error",
                                from: "cleanupSnapshots",
                                type: "keepSnapshotsError",
                                error: (0, a().convertErrorToLog)(e),
                                data: {
                                    miscDataToConvertToString: {
                                        txSessionId: s
                                    }
                                }
                            })
                        }) : await r.snapshots.discardSnapshots(e, s, l).then(() => {}).catch(e => {
                            n().log({
                                level: "error",
                                from: "cleanupSnapshots",
                                type: "discardSnapshotsError",
                                error: (0, a().convertErrorToLog)(e),
                                data: {
                                    miscDataToConvertToString: {
                                        txSessionId: s
                                    }
                                }
                            })
                        }))
                    }
                    o().E.clearClaimedTxSessionIds(e, t)
                } finally {
                    o().E.endCleanupProtection(e)
                }
                return {
                    guardedSnapshotId: d
                }
            }
            var i = () => s(941701);
            let d = new Set;

            function l() {
                d.clear()
            }
            async function p(e) {
                if (d.has(e)) return;
                let t = !1,
                    s = 0;
                do {
                    if (t = !1, 10 === (s += 1)) {
                        let t = o().E.getSnapshotId(e),
                            a = o().E.getOwnedTxSessionIds(e),
                            r = o().E.getCleanupProtectedSnapshotIds(e);
                        n().log({
                            level: "warning",
                            from: "cleanupSnapshots",
                            type: "cleanupPassesWarningThresholdReached",
                            data: {
                                miscDataToConvertToString: {
                                    userId: e,
                                    passCount: s,
                                    snapshotId: t,
                                    txSessionId: i().transactionQueue.sessionId,
                                    ownedSessionIds: a,
                                    protectedSnapshotIds: r
                                }
                            }
                        })
                    }
                    if (s > 100) {
                        let t = o().E.getSnapshotId(e),
                            a = o().E.getOwnedTxSessionIds(e),
                            r = o().E.getCleanupProtectedSnapshotIds(e);
                        d.add(e), n().log({
                            level: "error",
                            from: "cleanupSnapshots",
                            type: "cleanupKillSwitchTripped",
                            data: {
                                miscDataToConvertToString: {
                                    userId: e,
                                    passCount: s,
                                    snapshotId: t,
                                    txSessionId: i().transactionQueue.sessionId,
                                    ownedSessionIds: a,
                                    protectedSnapshotIds: r
                                }
                            }
                        });
                        return
                    }
                    if (await i().transactionQueue.hasTasksForUser(e)) {
                        o().E.getSnapshotId(e), o().E.getOwnedTxSessionIds(e);
                        return
                    }
                    if (o().E.isCleanupInProgress(e)) return void o().E.requestCleanupRerun(e);
                    let {
                        guardedSnapshotId: a
                    } = await r(e, i().transactionQueue.sessionId), l = await i().transactionQueue.hasTasksForUser(e), p = o().E.getSnapshotId(e);
                    l || void 0 === a || p !== a || o().E.clearSnapshotId(e), t = o().E.consumeCleanupRerunRequested(e)
                } while (t)
            }
        }
    }
]);