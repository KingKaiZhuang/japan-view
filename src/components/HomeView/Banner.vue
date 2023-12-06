<template>
    <div class="banner">
        <div class="title">
            <p>Think</p>
            <p>in</p>
            <p>Motion</p>
            <h5>モーショングラフィックス / アニメーション / 3DCG / VR / イラスト</h5>
        </div>
        <div class="scroll-line">
            <p>scroll</p>
        </div>
    </div>
</template>

<style>
.banner {
    background-image: url("https://th.bing.com/th/id/OIG.SKvW4qfWXKjq4TF344ts?pid=ImgGn");
    width: 100%;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    top: 0;
    z-index: -5;
    display: flex;
    align-items: center;
}

.banner .title {
    width: 235px;
}

.banner .title p {
    font-size: 50px;
    font-weight: bold;
}

.banner .title h5 {
    font-size: 10px;
}

.banner .scroll-line {
    width: 100%;
    position: absolute;
    bottom: 65px;
}

.banner .scroll-line p {
    position: relative;
    text-align: center;
}

.banner .scroll-line p:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 1px;
    height: 60px;
    background: #666;
    /* 灰色到白色的漸變 */
    animation: scrollAnimation 2s infinite linear;
    /* 2秒的動畫，無限循環，線性運動 */
}

.banner .scroll-line p:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 1px;
    height: 0%;
    background: white;
    animation: scroll-anim 1.5s infinite ease-in-out;
}

@keyframes scroll-anim {
    0% {
        height: 0;
        top: 100%;
    }

    55% {
        height: 60px;
        top: 100%;
    }

    100% {
        height: 0px;

        top: 80px;
    }
}</style>
