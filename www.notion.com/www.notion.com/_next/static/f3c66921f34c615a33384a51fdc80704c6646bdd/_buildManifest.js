self.__BUILD_MANIFEST = function(s, e, a, t, c, n, i, d, l, r, u, o, p, f, h, b, g, k, j, m, v, x, w, I, L, z, _, y, S, B, F, N, A, D, E, M, T, U, C, P, q, G, H, J, K, O, Q, R, V, W, X, Y, Z, $, ss, se, sa, st, sc, sn, si, sd, sl, sr, su, so, sp, sf, sh, sb, sg, sk, sj, sm, sv, sx, sw, sI, sL, sz, s_, sy, sS, sB, sF, sN, sA, sD, sE, sM, sT, sU, sC, sP, sq, sG, sH, sJ, sK, sO, sQ, sR, sV, sW, sX, sY, sZ, s$, s2, s4, s9, s1, s7, s5, s8, s0, s3, s6, es, ee, ea, et, ec, en, ei, ed, el, er, eu, eo) {
    return {
        __rewrites: {
            afterFiles: [{
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/.well-known/vercel/flags",
                destination: "/:nextInternalLocale/api/.well-known/vercel/flags"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/front-api/:path*",
                destination: "/:nextInternalLocale/api/:path*"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/@:creatorName",
                destination: "/:nextInternalLocale/templates/creators/:creatorName"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/product/ai",
                destination: "/:nextInternalLocale/md/ai-test"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/contact-sales/thank-you",
                destination: "/:nextInternalLocale/md/contact-sales/thank-you"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/enterprise",
                destination: "/:nextInternalLocale/md/enterprise-aifw"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/product/enterprise-search",
                destination: "/:nextInternalLocale/md/enterprise-search"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/product/notion-for-product-development",
                destination: "/:nextInternalLocale/md/epd"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/startups",
                destination: "/:nextInternalLocale/md/startups"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/nonprofits",
                destination: sT
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/pages/nonprofits",
                destination: sT
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/use-case/meetings",
                destination: "/:nextInternalLocale/md/meetings"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/builders",
                destination: "/:nextInternalLocale/md/builders"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/severance",
                destination: "/:nextInternalLocale/md/severance"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/lp/calculator",
                destination: "/:nextInternalLocale/md/calculator"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/notes",
                destination: "/:nextInternalLocale/md/notes"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/lp/nathan",
                destination: "/:nextInternalLocale/md/nathan"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/lp/econ102",
                destination: "/:nextInternalLocale/md/econ102"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/affiliates",
                destination: "/:nextInternalLocale/md/affiliates"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/compare-against/comparison-notion-vs-asana",
                destination: "/:nextInternalLocale/md/pm/notion-vs-asana"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/compare-against/notion-vs-confluence",
                destination: "/:nextInternalLocale/md/pm/notion-vs-confluence"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/compare-against/notion-vs-granola",
                destination: "/:nextInternalLocale/md/notion-vs-granola"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/partners",
                destination: "/:nextInternalLocale/partners/become-a-partner"
            }, {
                has: B,
                source: "/:nextInternalLocale(en\\-us|zh\\-cn|zh\\-tw|de|de\\-de|es|es\\-la|es\\-es|fr|fr\\-fr|ja|ja\\-jp|ko|ko\\-kr|pt|pt\\-br|da|nl|fi|nb|sv|da\\-dk|nl\\-nl|fi\\-fi|nb\\-no|sv\\-se|id|id\\-id|vi|vi\\-vn|th|th\\-th|en\\-gb|ar|ar\\-sa|he|he\\-il|pseudo)/trust",
                destination: "/:nextInternalLocale/md/trust"
            }],
            beforeFiles: [],
            fallback: []
        },
        "/": [s, e, r, t, a, c, n, i, d, u, R, si, sm, sv, sU, sC, sP, "static/chunks/pages/index-6a0e5a4c588ff621.js"],
        "/404": [s, e, t, a, c, n, i, d, "static/css/1f567bcc3dd01a0a.css", "static/chunks/pages/404-5e50e5c586f9dcba.js"],
        "/500": [s, e, t, a, c, n, i, d, l, sx, "static/chunks/pages/500-0854eaa02fa9419f.js"],
        "/__front-admin": [sr, su, s, e, so, sp, a, R, "static/css/7ef43f1f5ce24d34.css", "static/chunks/pages/__front-admin-87b0ba6862d779cc.js"],
        "/__front-admin/contentful/oauth/redirect": ["static/chunks/pages/__front-admin/contentful/oauth/redirect-8b18b209b4fc2d2b.js"],
        "/__front-admin/[...pathname]": [sr, su, s, e, r, ss, sd, so, sp, "static/chunks/19303-47386a2e3137de30.js", t, a, c, n, i, d, u, m, z, F, E, R, se, W, Y, sa, sw, sI, "static/css/e32b6dc8697abac8.css", "static/chunks/pages/__front-admin/[...pathname]-aa6613fc970964e7.js"],
        "/__mdpb/[...pathname]": [s, e, r, ss, sd, t, a, c, n, i, d, u, m, z, F, E, R, se, W, Y, sa, sf, sh, sL, sz, "static/chunks/pages/__mdpb/[...pathname]-a4bbc43e5a532b1e.js"],
        "/_error": ["static/chunks/1208-0d1c810ec0e03425.js", "static/chunks/pages/_error-12f8a005ca6c2a83.js"],
        "/about": [s, e, r, t, a, c, n, i, d, u, l, Z, "static/css/cda2689f4537ef26.css", "static/chunks/pages/about-03ebfcbb18e63b9f.js"],
        "/become-a-creator": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, q, H, J, K, "static/css/80d399bade356062.css", "static/chunks/pages/become-a-creator-22cc540c71ceda76.js"],
        "/blog": [s, e, t, a, c, n, i, d, l, sb, sg, "static/chunks/pages/blog-d38f321679b73366.js"],
        "/blog/page/[index]": [s, e, t, a, c, n, i, d, l, sb, sg, "static/chunks/pages/blog/page/[index]-16755005e6ef7ca0.js"],
        "/blog/topic/[slug]": [s, e, t, a, c, n, i, d, l, sb, sg, "static/chunks/pages/blog/topic/[slug]-69081ddb2c1231cc.js"],
        "/blog/topic/[slug]/page/[index]": [s, e, t, a, c, n, i, d, l, sb, sg, "static/chunks/pages/blog/topic/[slug]/page/[index]-685fc0de12049391.js"],
        "/blog/[slug]": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, X, Z, sl, sk, sq, "static/css/cfc6f72dd8413a9a.css", "static/chunks/pages/blog/[slug]-a666ed9308bc169f.js"],
        "/careers": [s, e, r, t, a, c, n, i, d, u, l, "static/chunks/32398-2ccc466295d8c4a6.js", "static/css/758c7a59895114a4.css", "static/chunks/pages/careers-9f66dfe5209f825e.js"],
        "/compare-against/[slug]": [s, e, r, b, g, k, v, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, z, E, O, V, st, "static/chunks/pages/compare-against/[slug]-6617b6c0f5dc3be7.js"],
        "/components": [s, e, sG, t, a, c, n, i, d, s_, sH, sJ, sK, "static/css/feecd58acb4093d1.css", "static/chunks/pages/components-bb2a517a5b340780.js"],
        "/components/[slug]": [s, e, sG, t, a, c, n, i, d, l, s_, sH, sJ, sK, "static/chunks/pages/components/[slug]-ee257c4a7be75c6a.js"],
        "/consulting-partners": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, sO, sQ, "static/chunks/pages/consulting-partners-f7dbd6a691c786e2.js"],
        "/contact-sales": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, E, H, J, O, V, sR, "static/chunks/pages/contact-sales-9d6bf5ff4d42d9f4.js"],
        "/contact-sales/[slug]": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, E, H, J, O, V, sR, "static/chunks/pages/contact-sales/[slug]-4dec02e41e5d7cc4.js"],
        "/contact-sales-multi": [s, e, t, a, c, n, E, O, sV, sW, "static/chunks/pages/contact-sales-multi-c99ded31fdf332f0.js"],
        "/contact-sales-multi/[slug]": [s, e, t, a, c, n, E, O, sV, sW, "static/chunks/pages/contact-sales-multi/[slug]-aa8ac7c41d623289.js"],
        "/custom-agent-templates": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, sy, sS, "static/css/e7ce7797d9cce97d.css", "static/chunks/pages/custom-agent-templates-1badb7e6409a6cae.js"],
        "/custom-agent-templates/[slug]": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, sB, sF, "static/css/7a7d4e5214263358.css", "static/chunks/pages/custom-agent-templates/[slug]-b5cd026f2a21d9a5.js"],
        "/customers": [s, e, t, a, c, n, i, d, l, p, f, h, X, Z, sl, "static/css/29899227b1a6c3a7.css", "static/chunks/pages/customers-ed28305cb5282b67.js"],
        "/customers/v2": [s, e, t, a, c, n, i, d, si, "static/css/9a8e7e7f35f6cdf9.css", "static/chunks/pages/customers/v2-83bbdb30112fd15c.js"],
        "/customers/[slug]": [sr, su, s, e, r, ss, sd, so, sp, "static/chunks/57845-475cc7bf72129ee0.js", "static/chunks/40817-77e518aef6070768.js", "static/chunks/64062-7537bc2048ce9e7a.js", "static/chunks/51471-a4ee72d898fa26ee.js", t, a, c, n, i, d, u, m, z, F, E, R, se, W, Y, sa, sw, sI, "static/css/3a46fe1e8c74d094.css", "static/chunks/pages/customers/[slug]-86d0e5c55021a2e0.js"],
        "/desktop": [s, e, t, a, c, n, i, d, l, z, q, "static/css/a3903a6d6ac404e0.css", "static/chunks/pages/desktop-ea899017c2d085b2.js"],
        "/desktop/[slug]": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, q, H, J, K, $, "static/chunks/pages/desktop/[slug]-1802f8c6e7b63390.js"],
        "/embed/help/guides/[slug]": [s, e, r, b, g, k, v, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, _, S, sX, "static/css/e893772119c84f94.css", "static/chunks/pages/embed/help/guides/[slug]-14792f745c482933.js"],
        "/embed/help/notion-academy/lesson/[slug]": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, "static/css/900e1fcfa1c25968.css", "static/chunks/pages/embed/help/notion-academy/lesson/[slug]-91e438c1a98517ae.js"],
        "/embed/help/sprig-survey": [s, e, t, a, c, n, i, d, "static/css/5b2a3a5f08554f6b.css", "static/chunks/pages/embed/help/sprig-survey-c681816002e565af.js"],
        "/embed/help/[slug]": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, "static/css/bddb46ff9a7cd2ac.css", "static/chunks/pages/embed/help/[slug]-52bf7bc323a5138d.js"],
        "/evernote": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, W, X, Z, sl, sk, "static/css/8ada8260eabbc593.css", "static/chunks/pages/evernote-f7ae9f9d2ffc4fd3.js"],
        "/experiment/template-category/[...exp]": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, sY, sZ, "static/chunks/pages/experiment/template-category/[...exp]-856dbe407f9f6a5b.js"],
        "/experiment/template-category-detail/[slug]/[...exp]": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, Q, s$, "static/chunks/pages/experiment/template-category-detail/[slug]/[...exp]-55b11c2b518857c1.js"],
        "/experiment/template-collection/[...exp]": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, s2, s4, "static/chunks/pages/experiment/template-collection/[...exp]-9c2adc527c1c8689.js"],
        "/experiment/template-collection-detail/[slug]/[...exp]": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, s9, s1, "static/chunks/pages/experiment/template-collection-detail/[slug]/[...exp]-92dec45a4e668e25.js"],
        "/experiment/template-creator-detail/[slug]/[...exp]": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, Q, s7, "static/chunks/pages/experiment/template-creator-detail/[slug]/[...exp]-cf85bde1c5b1ca86.js"],
        "/experiment/template-creators/[...exp]": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, s5, s8, "static/chunks/pages/experiment/template-creators/[...exp]-8b3f335fe2a0be1c.js"],
        "/experiment/template-detail/[slug]/[...exp]": [w, s, e, r, b, g, k, v, I, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, S, N, A, D, sB, sF, "static/chunks/pages/experiment/template-detail/[slug]/[...exp]-6f031b543e97a237.js"],
        "/experiment/template-home/[...exp]": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, sy, sS, s0, "static/chunks/pages/experiment/template-home/[...exp]-ff12ebaf3699c16a.js"],
        "/experiment/template-search/[...exp]": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, s3, s6, "static/chunks/pages/experiment/template-search/[...exp]-b23ea6124c3b3bc0.js"],
        "/explore": [s, e, t, a, c, n, i, d, z, "static/css/d7c73bba516d3ad2.css", "static/chunks/pages/explore-f4a7f4213fc69ee6.js"],
        "/explore-consultants": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, sO, sQ, "static/chunks/pages/explore-consultants-d0b928604ddbdd6d.js"],
        "/faces": [s, e, t, a, c, n, i, d, z, "static/css/7a36033086ab3ff0.css", "static/chunks/pages/faces-0cddea4e8d623bdc.js"],
        "/feature": [s, e, es, t, a, c, n, i, d, m, y, sc, sn, ee, ea, "static/chunks/pages/feature-a71efcbba623d124.js"],
        "/feature/[hub]": [w, s, e, r, b, g, k, v, I, sj, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, y, Q, sc, sn, sN, "static/chunks/pages/feature/[hub]-6872132bccfa4bd6.js"],
        "/feature/[hub]/[spoke]": [w, s, e, r, b, g, k, v, I, sj, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, y, Q, sc, sn, sN, "static/chunks/pages/feature/[hub]/[spoke]-ef0a8a38fd48b473.js"],
        "/getStatus": ["static/chunks/pages/getStatus-e84c0079f903dcb8.js"],
        "/help": [s, e, t, a, c, n, i, d, o, _, sA, et, ec, "static/css/9ecfa770feda7549.css", "static/chunks/pages/help-b98a19cc307d6014.js"],
        "/help/category/[slug]": [w, s, e, r, b, g, k, v, I, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, Q, "static/css/91b71aded16a5037.css", "static/chunks/pages/help/category/[slug]-f7c0481abd0b35a2.js"],
        "/help/category/[slug]/all": [s, e, t, a, c, n, i, d, _, sA, "static/css/f4374dfd828f0f83.css", "static/chunks/pages/help/category/[slug]/all-6641f7c4e3ad234a.js"],
        "/help/guides": [w, s, e, r, b, g, k, v, I, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, S, Q, "static/css/417854728bf85afe.css", "static/chunks/pages/help/guides-a53b51fa02a7aaee.js"],
        "/help/guides/category/[slug]": [w, s, e, r, b, g, k, v, I, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, S, Q, "static/css/872871b33b689ce5.css", "static/chunks/pages/help/guides/category/[slug]-edec2cd2d721a182.js"],
        "/help/guides/[slug]": [w, s, e, r, b, g, k, v, I, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, S, Q, "static/css/6c426c1cd5f1b53b.css", "static/chunks/pages/help/guides/[slug]-72ed9e9db47b25cc.js"],
        "/help/reference": [w, s, e, r, b, g, k, v, I, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, Q, "static/css/43433e4368478f68.css", "static/chunks/pages/help/reference-c22bb6f2d2ed386c.js"],
        "/help/results": [s, e, t, a, c, n, i, d, o, _, sA, et, ec, "static/css/a776a907d45b75b0.css", "static/chunks/pages/help/results-a4e934a797df2f4d.js"],
        "/help/[slug]": [w, s, e, r, b, g, k, v, I, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, Q, "static/css/1226333da0b99a6b.css", "static/chunks/pages/help/[slug]-9117c4af0205982b.js"],
        "/integrations": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, sD, "static/css/910668e167b44864.css", "static/chunks/pages/integrations-06cf98dbadfd62ad.js"],
        "/integrations/all": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, en, ei, "static/css/26dc10ac4d66d341.css", "static/chunks/pages/integrations/all-9691c9a281740f8f.js"],
        "/integrations/[slug]": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, sD, en, ei, "static/css/f4cdbf78c9fe5aa4.css", "static/chunks/pages/integrations/[slug]-fcf73eaed71d94ef.js"],
        "/lp/blog-subscribe": [s, e, t, a, c, n, i, d, "static/css/2812a9786a66fdff.css", "static/chunks/pages/lp/blog-subscribe-0c10c6509440d49d.js"],
        "/lp/pm/[slug]": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, q, H, J, K, $, "static/chunks/pages/lp/pm/[slug]-5a50f3d314382a32.js"],
        "/lp/[slug]": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, q, H, J, K, $, "static/chunks/pages/lp/[slug]-105adeed09a550f1.js"],
        "/md/[...pathname]": [s, e, r, ss, sd, t, a, c, n, i, d, u, m, z, F, E, R, se, W, Y, sa, sf, sh, sL, sz, "static/chunks/pages/md/[...pathname]-f361f88ab51b83db.js"],
        "/mobile/[slug]": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, q, H, J, K, $, "static/chunks/pages/mobile/[slug]-eb2406ca2b1918bc.js"],
        "/pages/back-soon": [s, e, t, a, c, n, i, d, l, sx, "static/chunks/pages/pages/back-soon-83f5ee6fc2e07eda.js"],
        "/pages/[slug]": [s, e, r, b, g, k, v, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, z, E, O, V, st, "static/chunks/pages/pages/[slug]-1408a83f115ce6d3.js"],
        "/personal": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, X, Z, sl, sk, "static/css/554da273054101eb.css", "static/chunks/pages/personal-3e942743ae2a7252.js"],
        "/pricing/[country]": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, m, E, W, Y, si, "static/css/d1199e83796b1586.css", "static/chunks/pages/pricing/[country]-88d5c6c427958f28.js"],
        "/product": [s, e, r, t, a, c, n, i, d, u, R, si, sm, sv, sU, sC, sP, "static/chunks/pages/product-b7657f40f3492409.js"],
        "/product/agents-homepage": [s, e, r, t, a, c, n, i, d, u, si, sm, sv, "static/chunks/pages/product/agents-homepage-e62429cb030dae7c.js"],
        "/product/ai/use-cases": [s, e, r, t, a, c, n, i, d, u, "static/css/aabe8b3e7843a54e.css", "static/chunks/pages/product/ai/use-cases-21b93c3869601bf6.js"],
        "/product/ai/use-cases/[slug]": [s, e, r, b, g, k, v, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, sX, "static/css/4228e3a346b3e908.css", "static/chunks/pages/product/ai/use-cases/[slug]-2158a8bc9e2aacdc.js"],
        "/product/ai-meeting-notes/[slug]": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, X, Z, sl, sk, sq, "static/css/e6bf6dc72f3cfa5a.css", "static/chunks/pages/product/ai-meeting-notes/[slug]-3cdfcb3ddf42e11e.js"],
        "/product/calendar": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, q, H, J, K, "static/css/e1ba1cce7b9915f7.css", "static/chunks/pages/product/calendar-6312a8cc733204fb.js"],
        "/product/calendar/download/[slug]": [s, e, t, a, c, n, i, d, z, ed, "static/chunks/pages/product/calendar/download/[slug]-c1ec2897699056a0.js"],
        "/product/charts": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, q, H, J, K, "static/css/cf05b68b7ad4070f.css", "static/chunks/pages/product/charts-875ac869dce425e2.js"],
        "/product/docs": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, q, H, J, K, el, "static/chunks/pages/product/docs-fcf076d57f4de9ed.js"],
        "/product/forms": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, q, H, J, K, $, "static/chunks/pages/product/forms-255107068ad05b28.js"],
        "/product/mail": [sr, su, s, e, r, ss, so, sp, t, a, c, n, i, d, u, m, z, F, E, R, se, W, Y, sa, sf, sh, sw, sI, "static/css/1ca564a62053955e.css", "static/chunks/pages/product/mail-b3d86a9070951392.js"],
        "/product/mail/download/[slug]": [s, e, t, a, c, n, i, d, z, ed, "static/chunks/pages/product/mail/download/[slug]-3265332e4af7e0f8.js"],
        "/product/notion-ai-for-work": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, E, q, H, J, K, O, er, "static/chunks/pages/product/notion-ai-for-work-3820a4609cdb4a10.js"],
        "/product/notion-ai-for-work/[slug]": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, E, q, H, J, K, O, er, "static/chunks/pages/product/notion-ai-for-work/[slug]-8411e8dd6d79d5ee.js"],
        "/product/notion-for-education": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, q, H, J, K, el, "static/chunks/pages/product/notion-for-education-68f9f0a4e7f52fe3.js"],
        "/product/projects": [s, e, r, t, a, c, n, i, d, u, l, p, f, h, z, q, X, eu, eo, "static/css/83ce8e227165139a.css", "static/chunks/pages/product/projects-8a2459377d7a4809.js"],
        "/product/sites": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, q, H, J, K, "static/css/5623ce226e05f5d6.css", "static/chunks/pages/product/sites-e1d7f559c0578de1.js"],
        "/product/speed": ["static/chunks/pages/product/speed-80803537c37ab6af.js"],
        "/product/wikis": [s, e, r, t, a, c, n, i, d, u, l, p, f, h, z, q, X, eu, eo, "static/css/deaa50d0bcd62617.css", "static/chunks/pages/product/wikis-75a23565132be27f.js"],
        "/product/[slug]": [s, e, r, b, g, k, v, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, z, E, O, V, st, "static/chunks/pages/product/[slug]-ff524b0bb483a545.js"],
        "/redeem/[...pathname]": [s, e, r, ss, sd, t, a, c, n, i, d, u, m, z, F, E, R, se, W, Y, sa, sf, sh, sL, sz, "static/chunks/pages/redeem/[...pathname]-2ebbc96af16d35b6.js"],
        "/releases": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, sE, sM, "static/chunks/pages/releases-6bf58d01c6053a87.js"],
        "/releases/page/[slug]": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, sE, sM, "static/chunks/pages/releases/page/[slug]-bc5aeaeb809a84e6.js"],
        "/releases/rss.xml": ["static/chunks/pages/releases/rss.xml-8c3b39a5d7cc953d.js"],
        "/releases/[slug]": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, sE, sM, "static/css/3224fcaae7f796c7.css", "static/chunks/pages/releases/[slug]-4cd3ff1a8a886a31.js"],
        "/sandbox/mwn": ["static/css/5c8aba97b7d32bd9.css", "static/chunks/pages/sandbox/mwn-8a59f44315f7d603.js"],
        "/sandbox/snack-bar": [s, e, t, a, c, n, i, d, l, sx, "static/chunks/pages/sandbox/snack-bar-75b8009358df7f20.js"],
        "/sandbox/super/[slug]": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, q, H, J, K, $, "static/chunks/pages/sandbox/super/[slug]-61e8b584ef2287d1.js"],
        "/security": [s, e, r, b, g, k, v, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, z, E, O, V, st, "static/chunks/pages/security-1b2d7848cef33b4b.js"],
        "/startups/pre-approved": [s, e, r, b, g, k, v, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, z, E, O, V, st, "static/chunks/pages/startups/pre-approved-96c1779e51499a05.js"],
        "/startups/[slug]": [w, s, e, r, b, g, k, v, I, G, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, F, q, H, J, K, $, "static/chunks/pages/startups/[slug]-3503e3889378ec65.js"],
        "/teams": [s, e, r, b, g, k, v, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, z, E, O, V, st, "static/chunks/pages/teams-7d252e973858b416.js"],
        "/templates": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, sy, sS, s0, "static/chunks/pages/templates-4a6e399d78e218f8.js"],
        "/templates/category": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, sY, sZ, "static/chunks/pages/templates/category-476a9d65672c80b7.js"],
        "/templates/category/[slug]": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, Q, s$, "static/chunks/pages/templates/category/[slug]-463c3f9a77400640.js"],
        "/templates/collections": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, s2, s4, "static/chunks/pages/templates/collections-a59c5b1b1f8c725e.js"],
        "/templates/collections/feed": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, "static/css/b8a8da9dbdf27a55.css", "static/chunks/pages/templates/collections/feed-e3669bb124c8a940.js"],
        "/templates/collections/[slug]": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, s9, s1, "static/chunks/pages/templates/collections/[slug]-b1c7f274c273f210.js"],
        "/templates/creators": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, s5, s8, "static/chunks/pages/templates/creators-b38cece36c2ba472.js"],
        "/templates/creators/[slug]": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, Q, s7, "static/chunks/pages/templates/creators/[slug]-037f5c1a45061cbc.js"],
        "/templates/search": [w, s, e, r, b, g, k, v, I, M, T, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, y, S, U, N, A, C, P, D, s3, s6, "static/chunks/pages/templates/search-925571db9854b6a2.js"],
        "/templates/[slug]": [w, s, e, r, b, g, k, v, I, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, _, S, N, A, D, sB, sF, "static/chunks/pages/templates/[slug]-99f11ef5d3fd917e.js"],
        "/upgraded-account": [s, e, t, a, c, n, i, d, l, "static/css/6a95ebacbf4a28b6.css", "static/chunks/pages/upgraded-account-ed2fc2a8f295546e.js"],
        "/use-case": [s, e, es, t, a, c, n, i, d, m, y, sc, sn, ee, ea, "static/chunks/pages/use-case-b93f1340e6f2db71.js"],
        "/use-case/[hub]": [w, s, e, r, b, g, k, v, I, sj, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, z, y, E, O, Q, sc, V, sn, "static/css/d1c359a92645371d.css", "static/chunks/pages/use-case/[hub]-a692e16dc0cde744.js"],
        "/use-case/[hub]/[spoke]": [w, s, e, r, b, g, k, v, I, sj, t, a, c, n, i, d, u, l, o, p, f, j, h, m, x, L, y, Q, sc, sn, sN, "static/chunks/pages/use-case/[hub]/[spoke]-457a2eb93c7e7f96.js"],
        "/web-clipper": [s, e, r, b, g, k, t, a, c, n, i, d, u, l, o, p, f, j, h, X, Z, "static/css/ca40e4aed222c780.css", "static/chunks/pages/web-clipper-a4d3b39cceef67c8.js"],
        "/webinars": [s, e, t, a, c, n, i, d, o, s_, "static/css/a179e4816ac8a8a7.css", "static/chunks/pages/webinars-05e96b3f83aad8fe.js"],
        "/webinars/[slug]": [s, e, r, t, a, c, n, i, d, u, l, o, E, O, sD, "static/chunks/93019-a1228f99ae16419c.js", "static/css/e8ce95a9efa447bd.css", "static/chunks/pages/webinars/[slug]-14e349d7a87944a0.js"],
        "/webinars-revamp": [s, e, t, a, c, n, i, d, z, "static/css/de8121a607432e08.css", "static/chunks/pages/webinars-revamp-df47871b42a4f95b.js"],
        sortedPages: ["/", "/404", "/500", "/__front-admin", "/__front-admin/contentful/oauth/redirect", "/__front-admin/[...pathname]", "/__mdpb/[...pathname]", "/_app", "/_error", "/about", "/become-a-creator", "/blog", "/blog/page/[index]", "/blog/topic/[slug]", "/blog/topic/[slug]/page/[index]", "/blog/[slug]", "/careers", "/compare-against/[slug]", "/components", "/components/[slug]", "/consulting-partners", "/contact-sales", "/contact-sales/[slug]", "/contact-sales-multi", "/contact-sales-multi/[slug]", "/custom-agent-templates", "/custom-agent-templates/[slug]", "/customers", "/customers/v2", "/customers/[slug]", "/desktop", "/desktop/[slug]", "/embed/help/guides/[slug]", "/embed/help/notion-academy/lesson/[slug]", "/embed/help/sprig-survey", "/embed/help/[slug]", "/evernote", "/experiment/template-category/[...exp]", "/experiment/template-category-detail/[slug]/[...exp]", "/experiment/template-collection/[...exp]", "/experiment/template-collection-detail/[slug]/[...exp]", "/experiment/template-creator-detail/[slug]/[...exp]", "/experiment/template-creators/[...exp]", "/experiment/template-detail/[slug]/[...exp]", "/experiment/template-home/[...exp]", "/experiment/template-search/[...exp]", "/explore", "/explore-consultants", "/faces", "/feature", "/feature/[hub]", "/feature/[hub]/[spoke]", "/getStatus", "/help", "/help/category/[slug]", "/help/category/[slug]/all", "/help/guides", "/help/guides/category/[slug]", "/help/guides/[slug]", "/help/reference", "/help/results", "/help/[slug]", "/integrations", "/integrations/all", "/integrations/[slug]", "/lp/blog-subscribe", "/lp/pm/[slug]", "/lp/[slug]", "/md/[...pathname]", "/mobile/[slug]", "/pages/back-soon", "/pages/[slug]", "/personal", "/pricing/[country]", "/product", "/product/agents-homepage", "/product/ai/use-cases", "/product/ai/use-cases/[slug]", "/product/ai-meeting-notes/[slug]", "/product/calendar", "/product/calendar/download/[slug]", "/product/charts", "/product/docs", "/product/forms", "/product/mail", "/product/mail/download/[slug]", "/product/notion-ai-for-work", "/product/notion-ai-for-work/[slug]", "/product/notion-for-education", "/product/projects", "/product/sites", "/product/speed", "/product/wikis", "/product/[slug]", "/redeem/[...pathname]", "/releases", "/releases/page/[slug]", "/releases/rss.xml", "/releases/[slug]", "/sandbox/mwn", "/sandbox/snack-bar", "/sandbox/super/[slug]", "/security", "/startups/pre-approved", "/startups/[slug]", "/teams", "/templates", "/templates/category", "/templates/category/[slug]", "/templates/collections", "/templates/collections/feed", "/templates/collections/[slug]", "/templates/creators", "/templates/creators/[slug]", "/templates/search", "/templates/[slug]", "/upgraded-account", "/use-case", "/use-case/[hub]", "/use-case/[hub]/[spoke]", "/web-clipper", "/webinars", "/webinars/[slug]", "/webinars-revamp"]
    }
}("static/chunks/41664-b0cceeee74bf7ff0.js", "static/chunks/25675-31b83ce944536367.js", "static/chunks/12123-410ca01e05f965f4.js", "static/css/46cd742b3841ac37.css", "static/css/12d22e7626b5e155.css", "static/chunks/59138-99b3fc1777b41006.js", "static/css/530e95f0c8305c86.css", "static/chunks/41619-d089679d232d5998.js", "static/css/e907e3ff90ef2f85.css", "static/chunks/59680-aa444a445b5d095f.js", "static/chunks/16501-526da3c40d86c5e0.js", "static/chunks/80259-9b5c8def6deb23b2.js", "static/chunks/68048-ee9fcfe277e36b9c.js", "static/chunks/26196-5d02971b7ef7796c.js", "static/css/640beb26b3aa6013.css", "static/chunks/21246-a1c1c1f3cbcea7dd.js", "static/chunks/24883-2a3de178d150824b.js", "static/chunks/54215-7f236e77a38ce69b.js", "static/chunks/66170-9091aa4a8d2de2a2.js", "static/chunks/33308-556b92a5ae707ed6.js", "static/chunks/95503-1aa967ee7bce5b4e.js", "static/chunks/92417-b9433b7cc8bd1cee.js", "static/chunks/e96d881e-a2a503c1cb8af6df.js", "static/chunks/84371-91276e31d21d7ef0.js", "static/chunks/57222-f7dea7c609c3b5ed.js", "static/chunks/17270-bf2dfc8416258a85.js", "static/chunks/99533-7f36b57b58e17d2e.js", "static/chunks/24320-231bd21ca9b1df53.js", "static/chunks/44201-e447e39205db590e.js", void 0, "static/chunks/4021-cc55658f503b6e95.js", "static/chunks/32484-afd3fbc9c16cb067.js", "static/chunks/69844-ea559302a397fef4.js", "static/css/7438409b54028291.css", "static/chunks/72678-7ff9da2b70602702.js", "static/chunks/5410-ece9cc04ed02ae33.js", "static/chunks/84173-880308c370ce0587.js", "static/chunks/55412-0578fc849facf5e9.js", "static/chunks/74407-ee9758e282544b7f.js", "static/chunks/25117-b7834ea40813f23f.js", "static/chunks/4097-6ffd99ae6cc88f7f.js", "static/chunks/51791-3783d8ce20577169.js", "static/css/90221b7305097225.css", "static/chunks/46898-6fc4a8b65cf59789.js", "static/chunks/72288-1118150ff5849f4d.js", "static/chunks/57691-2239e05c735606b3.js", "static/css/c580d2b1be783097.css", "static/chunks/40820-543888e632e0426b.js", "static/chunks/71564-8b3bdbd0a7387558.js", "static/chunks/94135-aef1b297eaa9f046.js", "static/chunks/48745-ba8f87755569aa57.js", "static/chunks/41266-cfd2262fd5e63f3c.js", "static/chunks/81863-8291caedbde5213c.js", "static/css/7c70187a7b6bcf74.css", "static/chunks/32441-77119c6ddcf7b8e0.js", "static/chunks/87396-d031cdbaaf0c9e97.js", "static/chunks/46310-f36ad11327d9b72c.js", "static/css/f5b6951351f37394.css", "static/chunks/73454-b0dcd08806778dd4.js", "static/chunks/60894-fb310d224f34bbcc.js", "static/css/5c1cdc19a1374ab9.css", "static/chunks/88718-25b669f349a94259.js", "static/chunks/92173-bcf9bde17d59f8b0.js", "static/chunks/ad943d25-72f3e01e54d809c7.js", "static/chunks/fec483df-7d16d70942d210cd.js", "static/chunks/49431-cff54d964849d38d.js", "static/chunks/36356-bb7a334b5a9a8132.js", "static/css/a6ba8ed6a5c95ee8.css", "static/css/f4cdcafe72f45b59.css", "static/chunks/2916-2424724487636d72.js", "static/css/2b6083e2aebf928e.css", "static/css/305cb8a9b54dd659.css", "static/chunks/35701-821099e53e91e216.js", "static/css/38cb675bdcef51da.css", "static/chunks/45670-dfbfd057163f9174.js", "static/css/b480a9106c543496.css", "static/css/fa2139d28e4bba80.css", "static/chunks/26111-56fdfebd22e20e7d.js", "static/css/81d6fbf955f45bd1.css", "static/chunks/54094-e9f82271ba409407.js", "static/chunks/53559-2c48a8fbf522ab5b.js", "static/css/28851ed40a3282dd.css", "static/chunks/54265-4c50f86f1226585d.js", "static/css/647ef469b9f8bd74.css", "static/chunks/79828-8b377484368d2465.js", "static/css/117bc1070338474a.css", "static/chunks/458-97d4bfc47e6326b1.js", "static/css/7962473f82e34a17.css", "static/css/494a9af2092ae6c2.css", "static/chunks/31892-ec5f71203b1d4528.js", "/:nextInternalLocale/md/nonprofits", "static/chunks/93975-3b855d829f92a379.js", "static/css/6a89ed9fa6d52eb0.css", "static/chunks/3547-cbaf413ae0f32a00.js", "static/chunks/64508-0e0af1719f69b4d6.js", "static/chunks/22779-fcd4c46a5b8422ba.js", "static/chunks/59389-e05fce68417d0c19.js", "static/css/c35454cd54b9c6cd.css", "static/chunks/87958-9c077e3a6a922074.js", "static/css/ddaff564d17ba46e.css", "static/chunks/20322-fae216bb0a40facd.js", "static/css/a8aa38f021a38be5.css", "static/css/345199ed7d5a1c96.css", "static/chunks/93427-b9a1822285480260.js", "static/chunks/85840-c1595f0faeb40fd7.js", "static/css/8885d5884eba5a54.css", "static/chunks/59190-a8fb3c14ad107b96.js", "static/css/2b4cb6c91fcd7f9a.css", "static/css/1a0f06a256d78fae.css", "static/chunks/22208-c20fdbf2cd080449.js", "static/css/783ae1725215b74e.css", "static/chunks/21935-a5d353b74bf43138.js", "static/css/9eb1ee5d816e5bdf.css", "static/css/ad7db43c36808eb4.css", "static/chunks/99649-9a2517730af4990f.js", "static/css/e18ee6946b4e8d8b.css", "static/css/af01cdddfcebcbef.css", "static/chunks/94874-55a5bc31522c62ce.js", "static/chunks/21182-2fcef04ee54fe8d0.js", "static/css/b60b8a92a0d16a4e.css", "static/chunks/25907-56524f539a49c2dd.js", "static/css/8871d7551af2473e.css", "static/chunks/87745-39d86802f2354a81.js", "static/css/4b2a9e002e627670.css", "static/chunks/38932-7c55c4746569002f.js", "static/css/45d3d2490b83c91a.css", "static/css/8bab74b200f0be89.css", "static/css/18f186790bf8ed38.css", "static/css/88a6bdb70a79ab11.css", "static/chunks/30664-3699de6729ba7237.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();