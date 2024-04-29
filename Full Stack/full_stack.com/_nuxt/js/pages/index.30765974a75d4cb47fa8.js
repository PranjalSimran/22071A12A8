(window.webpackJsonp = window.webpackJsonp || []).push([
    [213], {
        1588: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(8),
                o = r(305),
                c = r(2),
                l = r(0),
                d = r(5),
                m = r(51),
                h = r(315),
                y = l.cc.Page,
                T = function() {
                    var e = Object(n.a)((function*(e, t, r, n) {
                        try {
                            var o = new l.mb({
                                id: r,
                                siteId: t
                            });
                            return r || (o.pageType = l.dc.Home), yield e.get(o)
                        } catch (e) {
                            throw e
                        }
                    }));
                    return function(t, r, n, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function() {
                    var e = Object(n.a)((function*(e, t, r) {
                        try {
                            var {
                                pageId: n
                            } = (null == t ? void 0 : t.homePageSettings) || {}, o = function() {
                                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new l.S,
                                    {
                                        homePageSettings: r,
                                        enabledApps: n = {}
                                    } = t,
                                    o = (null == r ? void 0 : r.pageTemplateType) || y;
                                return o !== l.cc.BlogPageList || null !== (e = n[l.a.Blog]) && void 0 !== e && e.isEnabled ? o : y
                            }(t) || y;
                            return {
                                page: yield T(e, r, n, o), pageTemplateType: o
                            }
                        } catch (e) {
                            throw e
                        }
                    }));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }();
            class v {
                constructor() {
                    this.site = new l.S, this.pageTemplateType = l.cc.Page
                }
            }
            t.default = o.a.extend({
                name: "Home",
                data: () => new v,
                head() {
                    return {
                        bodyAttrs: {
                            class: (e = this.pageTemplateType, e === l.cc.BlogPageList ? ["kmb-blog-template-default"] : ["kmb-general-template-default"])
                        }
                    };
                    var e
                },
                asyncData: e => Object(n.a)((function*() {
                    var {
                        $api: t,
                        $site: r,
                        $cookies: n,
                        $lcz: o,
                        store: c,
                        error: l
                    } = e;
                    try {
                        var h = c.getters.getSite(n, r) || {},
                            y = Object(m.a)({
                                store: c,
                                $cookies: n
                            }, null == r ? void 0 : r.id),
                            {
                                page: T,
                                pageTemplateType: v
                            } = yield f(t, h, y);
                        return c.dispatch("setPage", T), {
                            site: h,
                            page: T,
                            pageTemplateType: v
                        }
                    } catch (e) {
                        return null === d.a || void 0 === d.a || d.a.errorLog({
                            error_name: e.name,
                            message: e.message,
                            stack: e.stack,
                            source_dir: "pages/",
                            source_file: "index.tsx"
                        }), l({
                            statusCode: 404,
                            message: null == o ? void 0 : o.t("messages.pageNotFound")
                        })
                    }
                }))(),
                beforeDestroy() {
                    this.page = null
                },
                render(e) {
                    if (!Object(c.T)(this.page)) return e(h.a, {
                        attrs: {
                            site: this.site,
                            page: this.page
                        }
                    })
                }
            })
        },
        315: function(e, t, r) {
            "use strict";
            var n = r(6),
                o = r(1),
                c = r.n(o),
                l = r(342),
                d = r.n(l),
                m = r(7),
                h = r.n(m),
                y = r(76),
                T = r(14),
                f = r(11),
                v = r(5),
                w = r(341);
            class S {
                constructor() {
                    this.timer = null
                }
            }
            var k = n.componentFactory.mixin(T.D).create({
                name: "WebSitePageTemplate",
                props: {
                    site: c.a.ofType().optional,
                    page: c.a.ofType().required
                },
                data: () => new S,
                head() {
                    var {
                        title: title,
                        meta: meta
                    } = Object(f.I)(this.page);
                    return {
                        title: title,
                        meta: meta
                    }
                },
                mounted() {
                    this.onInitAOS()
                },
                beforeDestroy() {
                    clearTimeout(this.timer)
                },
                methods: {
                    onInitAOS() {
                        try {
                            this.isEnabledAnimation && d.a && (this.timer = setTimeout((() => {
                                d.a.init({
                                    easing: "ease-in-cubic",
                                    duration: 600
                                })
                            }), 1e3), this.$nuxt.$once("triggerScroll", (() => {
                                this.$nextTick((() => {
                                    d.a.refresh()
                                }))
                            })))
                        } catch (e) {
                            null === v.a || void 0 === v.a || v.a.errorLog({
                                error_name: e.name,
                                message: e.message,
                                stack: e.stack,
                                additional_info: "Error importing AOS",
                                source_dir: "components/Builder/TemplatesWebSitePageTemplate/",
                                source_file: "index.tsx"
                            })
                        }
                    }
                },
                render(e) {
                    if (this.page) return e("div", {
                        class: h()(Object(f.j)(this.page)),
                        attrs: {
                            "data-page-template-type": this.page.pageTemplateType
                        }
                    }, [Object(f.J)(e, w.a, this.page, this.currentSite, y.a)]);
                    null === v.a || void 0 === v.a || v.a.warnLog({
                        message: "Page is unavailable!",
                        source_dir: "components/Builder/Templates/WebSitePageCategoryTemplate/",
                        source_file: "index.tsx"
                    })
                }
            });
            t.a = k
        }
    }
]);