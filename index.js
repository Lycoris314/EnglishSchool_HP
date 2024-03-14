$(() => {

    //画像の自動切り替え

    function r(n) {
        if (n == 3) { return 0; }
        else { return n; }
    }
    const images = $(".back_img >img");

    images.eq(0).css("opacity", "1");

    setTimeout(() => {
        images.eq(0).css("opacity", "0");
    }, 5000);

    let n = 0;
    setInterval(() => {
        n++;
        n = r(n);

        images.eq(n).css("opacity", "1");

        setTimeout(() => {
            images.eq(n).css("opacity", "0");
        }, 5000);

    }, 6000);


    //inview

    //BBBが選ばれる理由
    $('.grid_a').on('inview', function (event, isInView) {

        if (isInView) {
            $(".grid_a").css("translate", "0 0")
                .css("opacity", "1");
        }
    });
    $('.grid_b').on('inview', function (event, isInView) {

        if (isInView) {
            $(".grid_b").css("translate", "0 0")
                .css("opacity", "1");
        }
    });

    //受講生の声
    $(".voice_container>li").on("inview", function (event, isInview) {

        if (isInview) {
            $(this).css("scale", "1 1")
                .css("opacity", "1");
        }
    });



    const nf = $(".nav_field");
    const spn = $(".ham_icon span");

    $(".ham_icon").on("click", () => {

        //メニューを開く
        if (nf.css("display") == "none") {

            nf.css("display", "block");
            setTimeout(() => {
                nf.css("opacity", "1");
            }, 10);

            //ハンバーガーアイコン変形
            spn.eq(0).css("rotate", "-45deg")
                .css("top", "50%");
            spn.eq(1).css("opacity", "0");
            spn.eq(2).css("rotate", "45deg")
                .css("top", "50%");

        }
        //メニューを閉じる
        else {
            nf.css("opacity", "0");
            setTimeout(() => {
                nf.css("display", "none");
            }, 500);

            //ハンバーガーアイコン変形
            spn.eq(0).css("rotate", "0deg")
                .css("top", "35%");
            spn.eq(1).css("opacity", "1");
            spn.eq(2).css("rotate", "0deg")
                .css("top", "65%");


        }
    });

    //リンクへ飛ぶときにメニューを閉じる
    $("nav ul a").on("click", () => {

        $(".nav_field").css("opacity", "0");
        setTimeout(() => {
            $(".nav_field").css("display", "none");
        }, 500);
    });

    //ハンバーガーアイコン変形(リンクへ飛ぶ場合)
    $("nav ul a").on("click", () => {

        spn.eq(0).css("rotate", "0deg")
            .css("top", "35%");
        spn.eq(1).css("opacity", "1");
        spn.eq(2).css("rotate", "0deg")
            .css("top", "65%");
    });
});