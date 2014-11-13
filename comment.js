//Ajax JSON Recent Commnet
function RecentComments(a) {
    (function (b) {
        var c = {
            blogURL: "",
            numComments: 40,
            characters: 100,
            id_containrc: "#recent_comments",
            avatarSize: 50,
            LoadingText: "Memuat...",
            Showimage: true,
            defaultAvatar: "http://4.bp.blogspot.com/-AEWksK942OE/UFiyLzXJhiI/AAAAAAAAFKE/jBegaGPClxI/s70/user-anonymous-icon.png",
            MonthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
            maxfeeds: 50,
            adminBlog: ""
        };
        c = b.extend({}, c, a);
        var L = b(".komentare"),
            Q = b("#recent_comments");
        L.click(function () {
            L.addClass('active');
            Q.show().html('<div class="load">' + c.LoadingText + "</div>");
            b.get((c.blogURL === "" ? window.location.protocol + "//" + window.location.host : c.blogURL) + "/feeds/comments/default?alt=json-in-script&orderby=published", function (y) {
                var e, d = y.feed.entry;
                if (d !== undefined) {
                    e = "<a class='close' href='#close' title='Close'>&times;</a><div class='box-wrap antiscroll-wrap'><div class='box'><div class='antiscroll-inner'><div class='box-inner'><ol>";
                    ntotal = 0;
                    for (var x = 0; x < c.maxfeeds; x++) {
                        var n, z, C, k, D, j, r;
                        if (x == d.length) {
                            break
                        }
                        if (ntotal >= c.numComments) {
                            break
                        }
                        var g = d[x];
                        for (var t = 0; t < g.link.length; t++) {
                            if (g.link[t].rel == "alternate") {
                                n = g.link[t].href
                            }
                        }
                        for (var B = 0; B < g.author.length; B++) {
                            z = g.author[B].name.$t;
                            C = g.author[B].gd$image.src
                        }
                        if (z != c.adminBlog && ntotal < c.numComments) {
                            ntotal++;
                            e += "<li>";
                            if (C == "http://img1.blogblog.com/img/blank.gif") {
                                k = c.defaultAvatar
                            } else {
                                k = C.replace(/\/s[0-9]+(\-c|\/)/, "/s" + c.avatarSize + "$1")
                            }
                            j = (g.author[0].uri) ? g.author[0].uri.$t : "#nope";
                            e += (c.Showimage === true ? '<img class="avatar" src="' + k + '"  title="' + z + '" alt="' + z + '" style="width:' + c.avatarSize + "px;height:" + c.avatarSize + 'px;display:block"/>' : "");
                            var q = n.lastIndexOf("/") + 1,
                                s = n.lastIndexOf("."),
                                E = n.split("-").join(" ").substring(q, s) + "...";
                            D = g.published.$t.substring(0, 10);
                            var p = D.substring(0, 4),
                                u = D.substring(5, 7),
                                A = D.substring(8, 10),
                                v = c.MonthNames[parseInt(u, 10) - 1],
                                o = g.published.$t.substring(11, 16),
                                h = o.substring(0, 2),
                                w = o.substring(2, 5);
                            if (h < 12) {
                                r = "AM"
                            } else {
                                r = "PM"
                            }
                            if (h === 0) {
                                h = 12
                            }
                            if (h > 12) {
                                h = h - 12
                            }
                            e += '<strong class="title_content"><a target="_blank" rel="nofollow" title="' + z + '" href="' + j + '">' + z + '</a> pada <a class="url_komen" href="' + n + '">' + E + '</a></strong>';
                            var m = g.content.$t;
                            var f = m;
                            f = f.replace(/<i rel="pre">([\s\S]+)<\/i>/g, '<pre><code>$1</code></pre>');
                            f = f.replace(/<i rel="image">([\s\S]+)<\/i>/g, '<img alt="Gambar" src="$1" style="width:50px;height:50px" />');
                            f = f.replace(/<i rel="code">([\s\S]+)<\/i>/g, '<code>$1</code>');
							f = f.replace(/\s:D/g," <img class='emo' alt=':D' src='http://dte-project.googlecode.com/svn/trunk/emoticon/09.gif'/>");
							f = f.replace(/\s:\)+/g," <img class='emo' alt=':)' src='http://dte-project.googlecode.com/svn/trunk/emoticon/01.gif'/>");
							f = f.replace(/\s=\(/g," <img class='emo' alt='=(' src='http://dte-project.googlecode.com/svn/trunk/emoticon/04.gif'/>");
                            f = f.replace(/\s:s/ig," <img class='emo' alt=':s' src='http://dte-project.googlecode.com/svn/trunk/emoticon/07.gif'/>");
                            f = f.replace(/\s:-D/g," <img class='emo' alt=':-D' src='http://dte-project.googlecode.com/svn/trunk/emoticon/10.gif'/>");
                            f = f.replace(/\s\^:D/g," <img class='emo' alt='^:D' src='http://dte-project.googlecode.com/svn/trunk/emoticon/11.gif'/>");
                            f = f.replace(/\s\^o\^/ig," <img class='emo' alt='^o^' src='http://dte-project.googlecode.com/svn/trunk/emoticon/27.gif'/>");
                            f = f.replace(/\s7:\(/g," <img class='emo' alt='7:(' src='http://dte-project.googlecode.com/svn/trunk/emoticon/19.gif'/>");
                            f = f.replace(/\s:Q/ig," <img class='emo' alt=':Q' src='http://dte-project.googlecode.com/svn/trunk/emoticon/17.gif'/>");
                            f = f.replace(/\s:p/ig," <img class='emo' alt=':p' src='http://dte-project.googlecode.com/svn/trunk/emoticon/20.gif'/>");
                            f = f.replace(/\sT_T/ig," <img class='emo' alt='T_T' src='http://dte-project.googlecode.com/svn/trunk/emoticon/15.gif'/>");
                            f = f.replace(/\s@@,/g," <img class='emo' alt='@@' src='http://dte-project.googlecode.com/svn/trunk/emoticon/05.gif'/>");
                            f = f.replace(/\s:-a/ig," <img class='emo' alt=':-a' src='http://dte-project.googlecode.com/svn/trunk/emoticon/28.gif'/>");
                            f = f.replace(/\s:W/g," <img class='emo' alt=':W' src='http://dte-project.googlecode.com/svn/trunk/emoticon/37.gif'/>");
                            f = f.replace(/\s\*fck\*/ig," <img class='emo' alt='*fck*' src='http://dte-project.googlecode.com/svn/trunk/emoticon/29.gif'/>");
                            f = f.replace(/\sx\@/g," <img class='emo' alt='x@' src='http://dte-project.googlecode.com/svn/trunk/emoticon/31.gif'/>");
                            e += (c.characters > 0 ? "<span class='comment_content'>" + f + "</span>" : "");
                            e += '<span class="date text-right"><span class="day">' + A + '</span> <span class="month">' + v + '</span> <span class="year">' + p + '</span> - <span class="waktu">' + h + w + " " + r + "</span></span>";
                            e += "</li>"
                        }
                    }
                    e += "</ol></div></div></div></div>";
                    b(c.id_containrc).html(e);
                    var Z = b("#recent_comments .box-wrap").antiscroll().data("antiscroll")
                } else {
                    b(c.id_containrc).html("<span>No result!</span>")
                }
            }, "jsonp");
            return false
        });
        Q.on("click", ".close", function () {
            Q.fadeOut();
            L.removeClass('active');
            return false
        })
    })(jQuery)
};
RecentComments();