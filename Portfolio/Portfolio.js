$(function() {

    // var getBanner = "";for (var i = 1; i < 11; i++) {if (i == 10) { getBanner += '<img src="images/BANNER' + i + '.jpg">' } elseif (i == 4 || i == 5) { getBanner += '<img src="images/BANNER0' + i + '.gif">' } else { getBanner += '<img src="images/BANNER0' + i + '.jpg">' }}$("#Scroll").append("<button class='goLeft'>", "<button class='goRight'>", "<figure id='figure'>" + getBanner); $("#Scroll img").on("error", function() { var src = $(this).attr("src"), address = src.substr(0, src.indexOf(".") + 1); $(this).attr("src", address + "gif") });

    var banner = $("#Scroll>figure"),
        bannerLength = banner.find("img").length;

    $("#Scroll").after(
        '<div class="viewBox"><figure>' +
        banner.html() +
        '</figure><button class="nextImg">' +
        '<button class="backImg">' +
        '<button class="closeViewBox">'
    );

    function viewBoxHide() {
        $(".viewBox").fadeOut()
    }

    $(".closeViewBox").click(viewBoxHide);

    $("#Scroll img").click(

        function() {
            var viewImg = $(this).index();
            $(".viewBox").fadeIn();

            function showImg() {

                $(".viewBox img").attr("style", "");
                $(".viewBox img")[viewImg].style = "display: block";
                (viewImg == bannerLength - 1) ? $(".nextImg").hide(): $(".nextImg").show();
                (viewImg == 0) ? $(".backImg").hide(): $(".backImg").show()

            }

            $(".nextImg").click(
                function() {
                    if (viewImg < bannerLength - 1) {
                        viewImg++;
                        showImg()
                    }
                }
            )

            $(".backImg").click(
                function() {
                    if (viewImg < bannerLength && viewImg > 0) {
                        viewImg--;
                        showImg()
                    }
                }
            )
            showImg()
        }
    );

    var moveRange = 400,
        $figure = document.getElementById('figure'),
        $figure_W = $('figure').width(),
        $goR = $(".goRight"),
        $goL = $(".goLeft");

    // $(".goLeft,.goRight").on("click",function(){
    //     moveRange=($(this).attr("class")=="goLeft")?-moveRange:moveRange
    //     $("#Scroll figure").stop(true,false).animate({scrollLeft:"+="+moveRange})
    // })

    $goL.click(goLeft);
    $goR.click(goRight);

    $figure.onwheel = function(e) {
        e.preventDefault();
        (e.deltaY < 0) ? goLeft(): goRight();
    }

    if ($(document).width() > 768) {
        $("#figure").scroll(
            function() {
                var $figure_SW = $(this)[0].scrollWidth,
                    $figure_SL = $(this)[0].scrollLeft;

                ($figure_W + $figure_SL >= $figure_SW) ? $goR.fadeOut(): $goR.fadeIn("fast");
                ($figure_SL <= 0) ? $goL.fadeOut(): $goL.fadeIn("fast");
            }
        );
    }

    function goLeft() {
        $("#figure")
            .stop(true, false)
            .animate({
                scrollLeft: '-=' + moveRange
            })
    }

    function goRight() {
        $("#figure")
            .stop(true, false)
            .animate({
                scrollLeft: '+=' + moveRange
            })
    }

    // var $Tab_input = $('<div>'),$Tab_label = "",imgNumber = ["", "A", "B", "C", "D", "E", "F", "G"],$shopTitle = ["", "存錢筒", "零錢包", "自動筆", "多多龍", "便條紙", "糖果機", "便當袋"];for (var i = 1; i < 8; i++) {$Tab_label += '<label for="Tab' + i + '">' + $shopTitle[i] + '</label>';$("#Tab").append($('<figure>').attr("class", "Tab" + i));$Tab_input.append($('<input>').attr({ type: "radio", name: "Tab", id: "Tab" + i }));var x = 1;while (x < 5) {$(".Tab" + i).append($('<img>').attr("src", "images/Shop " + imgNumber[i] + "0" + x + ".jpg"));x++}}$("#Tab h2").after($('<div>').html($Tab_label)).after($Tab_input.html())$("#Tab input:nth-of-type(1)").attr("checked", "checked");var x = 0,$Photo_Label = "",$Photo_Img = "", $Photo = ["Photo14", "Photo09", "Photo08", "Photo19", "Photo17", "Photo25"],$LINE = "",$LINE_img = ["CAT01", "CHICK01", "FOXY01", "REBIT03", "SAD01", "SHEEP01"],$LINE_link = ["1342692", "1206182", "1255531", "3437205", "1599407", "1143185"];while (x < 6) {$('#Photo').append($('<input>').attr({ type: "radio", name: "Photo", id: "Photo" + x }));$Photo_Label += '<label for="Photo' + x + '" style="background-image: url(images/' + $Photo[x] + '.jpg)"></label>';if (x < 3) { $Photo_Img += '<img src="images/' + $Photo[x] + '-airbrush.jpg" class="Photo' + [x] + '">' } else { $Photo_Img += '<img src="images/' + $Photo[x] + '-Animate ver.jpg" class="Photo' + [x] + '">' }$LINE += '<a href="https://store.line.me/stickershop/product/' + $LINE_link[x] + '/" target="_blank"><img src="images/LINE ' + $LINE_img[x] + '.jpg"></a>';x++}$('#Photo').append($('<div>').html($Photo_Label)).append($('<figure>').html($Photo_Img)); $('#LINE').append($('<div>').html($LINE));

    var icons = [
            [
                '<img src="images/RWD.svg">',
                '<img src="images/HTML5.svg">',
                '<img src="images/seo.svg">',
                '<img src="images/css3.svg">',
                '<img src="images/SASS.svg">',
                '<img src="images/BS.svg">',
                '<img src="images/JS.svg">',
                '<img src="images/JQ.svg">',
                '<img src="images/VUE.svg">',
                '<img src="images/DW.svg">',
                '<img src="images/VS Code.svg">',
                '<img src="images/Sublime.png">',
                '<img src="images/wordpress.svg">'
            ],
            [
                '<img src="images/EXCEL.png">',
                '<img src="images/PPT.png">',
                '<img src="images/PUBLISHE.png">',
                '<img src="images/Word.png">'
            ],
            [
                '<img src="images/AE.svg">',
                '<img src="images/MEDIA.png">',
                '<img src="images/AI.svg">',
                '<img src="images/BR.png">',
                '<img src="images/ID.svg">',
                '<img src="images/PS.svg">'
            ],
            [
                '<img src="images/CACANI.png">',
                '<img src="images/CLIP.png">',
                '<img src="images/COMIC EX.png">',
                '<img src="images/POSE.png">'
            ]
        ],
        $icons = "",
        $Collapse_labe = ['網頁設計', '文書處理', '影像編輯', '電腦繪圖'];

    $("#Collapse").append("<ul>");

    for (var x = 0; x < 4; x++) {

        $("#Collapse>ul").append(

            $('<input>').attr({
                type: "radio",
                name: "Collapse",
                id: "Collapse" + x
            }),

            $('<label for="Collapse' + x + '">' + $Collapse_labe[x] + '</label>'),

            $('<li>').append(
                $icons = icons[x]
            )
        );
    }
    $("#Photo input:nth-of-type(1), #Collapse input:nth-of-type(1)").attr("checked", "checked")

    var $section_top = [],
        section_start = 0;

    window.onload = function() {
        var $nav = $('nav').offset().top;
        var $footer = $('footer').offset().top;
        $('article>section').each(
            function() {
                $section_top[section_start] = Math.ceil($(this).offset().top - 10);
                section_start++
                var $id = this.id
                $('nav').append(
                    $('<a>').attr("href", "#" + $id)
                )
            }
        );

        function unActive() {
            $('nav a').removeClass("active")
        }

        window.onscroll = function() {
            var $scroll = this.scrollY;
            if ($scroll > $nav && $scroll < $footer) {

                $('nav').addClass('fixed');

                var run = 0
                while ($scroll >= $section_top[run]) {

                    unActive()
                    $('.fixed a:eq(' + run + ')').addClass('active')

                    if (run == 1 || run == 2) {
                        if (window.innerWidth >= 1024) {
                            $('.fixed a:eq(1), .fixed a:eq(2)').addClass('active')
                        }
                    }
                    run++
                }
            } else {
                unActive()
                $('nav').removeClass('fixed');
            }
        }


        $('body>span').fadeOut();
        $('body').attr('style', '');

        setTimeout(function() {
            $('#stop5min').css("display", "flex")
        }, 300000)


    }

    var about = [
        ["<p>楊舒雅 1988</p><p>耕莘護專<br>幼兒保育系</p>"],
        ["<dt>曾任職位</dt><dd>電腦部副主管(管理人數:4人)</dd>"],
        ["<dt>在學經歷</dt><dd>科學會文書組長(二專)</dd><dd>科學會副會長(高中)</dd>"],
        ["<dt>工作經歷</dt><dd>網頁設計(旅行社/3年)</dd><dd>平面設計(出版社/1年)</dd><dd>網拍美編(日本精品/3年)</dd><dd>教保人員(何嘉仁/5年)</dd>"],
        ["<dt>工作內容</dt><dd>網站管理優化、程式編寫與後端工程師接洽</dd><dd>DM及實體商品設計、書籍手冊出版</dd><dd>商品布置拍照、修圖排版上架、店商廣告製作</dd><dd>課程教案編寫及幼兒發展評估、成長手冊製作</dd>"],
        ["<dt>軟體應用</dt><div><dd class='code'>Visual Studio Code<br>Sublime Text<br>Dreamweaver</dd><dd class='publish'>Illustrator<br>Indesign</dd><dd class='image'>Photoshop<br>After Effects<br>Media Encoder</dd><dd class='paint'>Comic Studio EX<br>Clip Studio Paint</dd><dd class='threeD'>SketchUp</dd><dd class='office'>Word<br>Excel<br>Power Point<br>Publisher</dd></div>"]
    ];

    $('footer').append(
        $('<div>').append(
            $('<img>').attr("src", "images/ME.jpg"),
            $('<div>').append(about[0])
        ),
        $('<ul>').append(
            $('<dl>').append(about[1], about[2], about[3]),
            $('<dl>').append(about[4]),
            $('<dl>').append(about[5])
        )
    );

    // $('aside').append($('<botton>').attr({ class: "goTOP" }).append($('<img>').attr("src", "images/upward.svg")),$('<a>').attr({href: "https://join.skype.com/invite/RAFcUK1XtirS",target: "_blank"}).append($('<img>').attr("src", "images/skype.svg")),$('<a>').attr({href: "https://www.facebook.com/messages/t/SHUYA152",target: "_blank"}).append($('<img>').attr("src", "images/facebook.svg")),$('<a>').attr({href: "mailto:shuya7711@gmail.com",target: "_blank"}).append($('<img>').attr("src", "images/gmail.svg")));

    $('.goTOP').click(
        function() {
            $("html")
                .stop(true, false)
                .animate({
                    scrollTop: 0
                }, 100)
        }
    )

    var newDate = new Date(),
        week = ["日", "一", "二", "三", "四", "五", "六"],
        content = [
            "12點了該睡覺囉",
            "起居有時,才能長壽",
            "這麼晚了還在忙嗎?",
            "再不睡就爆肝啦",
            "還在忙嗎天都快要亮了",
            "這麼早起還是還沒睡呢?",
            "早起的鳥兒有蟲吃",
            "一日之計在於晨",
            "又是個美好的一天",
            "今天也要全力以赴喔",
            "快中午了起來活動筋骨吧",
            "決定好今日的午餐了嗎?",
            "中午放飯補充體力",
            "休息是為了走更遠的路",
            "提起精神繼續打拼",
            "來杯咖啡轉換心情",
            "加油再撐一會就下班了",
            "今日事今日畢",
            "下班了好好放鬆一下",
            "吃過晚餐了嗎?",
            "泡泡澡消除一天的疲勞",
            "放鬆心情準備就寢",
            "早睡早起身體好",
            "該躺下啦明天繼續努力"
        ];

    var newDate = new Date();
    setInterval(
        function() {
            var time = new Date().toLocaleTimeString(),
                hours = new Date().getHours();

            document.querySelector('time').innerHTML =
                "現在是 " +
                newDate.getFullYear() + "年" +
                (newDate.getMonth() + 1) + "月" +
                newDate.getDate() + "日 " +
                "星期" + week[newDate.getDay()] +
                " " + time + " " +
                content[hours]
        }, 1000);

    // $('body>span').html('<img src="images/load.gif">');


    $('body>p')
        .attr({
            class: "stop5min",
            id: "stop5min"
        })
        .append(
            $('<div>').append(
                '<h4>你已在此停留5分鐘囉!</h4><span>你也可以逛逛我幫前一家公司編寫的網頁更了解我</span><a href="https://www.tahsintour.com.tw/" target="_blank">大興旅行社</a>',
                $('<button>')
                .attr({
                    id: "closeNote"
                })
                .html("close")
            )
        );

    $('#closeNote').click(
        function() {
            $('#stop5min').fadeOut()
        }
    );



})