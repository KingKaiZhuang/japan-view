<template>
    <div class="service">
        <div class="pattern">
            <div class="grid-container">
                <div>W</div>
                <div>H</div>
                <div>O</div>
                <div>W</div>
                <div></div>
                <div>E</div>
                <div>A</div>
                <div>R</div>
                <div>E</div>
            </div>
        </div>
        <div class="content-text">
            <p>Unplug（アンプラグ）は、モーショングラフィックス・CG専門の制作スタジオです。WEB
                CMや企業VP、MVやイベント、CG・VR開発など、あらゆるジャンルの映像を多彩なデジタルグラフィックを用いて制作しているチームです。</p>
            <p>枠に捉われない発想と高い技術力、そして丁寧な進行を大切に。心を動かすクリエイティブを届けていきます。</p>
        </div>
        <div class="container row justify-content-center">
            <div class="photo col-6">
                <div class="photo">
                    <img src="https://picsum.photos/id/237/200/300" alt="">
                    <p>モーショングラフィックス</p>
                    <p>アニメーション</p>
                </div>
            </div>
            <div class="col-6">
                <div class="photo">
                    <img src="https://picsum.photos/id/238/200/300" alt="">
                    <p>3DCGデザイン</p>
                    <p>VR開発</p>
                </div>
            </div>
            <div class="col-6">
                <div class="photo">
                    <img src="https://picsum.photos/id/239/200/300" alt="">
                    <p>キャラクターデザイン</p>
                    <p>イラスト制作</p>
                </div>
            </div>
        </div>
        <div class="foot">
            <h2>SERVICE</h2>
        </div>
    </div>
</template>

<style>
.service {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.pattern {
    display: block;
    width: 100%;
}

.grid-container {
    margin-block: 30px;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* 3列 */
    grid-template-rows: repeat(3, 1fr);
    /* 格子之間的間隔 */
    width: 130px;
    /* 整體寬度 */
    height: 130px;
    /* 整體高度 */
}

.grid-container div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cccccc00;
    /* 格子背景色 */
    font-size: 30px;
    font-weight: bold;
    color: #333;
}

.content-text {
    width: 85%;
}

.content-text p {
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 15px;
    line-height: 30px;
    font-size: 14px;
}
.photo {
    width: 128px;
    height: 180px;
    /* overflow: hidden; */
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
}
.photo img {
    width: 128px;
    height: 128px;
}
.photo p {
    margin-top: 10px;
    font-size: 10px;
}
.foot { 
    margin-top: 30px;
}
.foot h2 { 
    margin-right: -5px;
    letter-spacing: 5px;
    font-size: 20vw;
    color: #33333396;
}
</style>