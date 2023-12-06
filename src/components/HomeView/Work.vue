<template>
    <div class="work">
        <h2>WORKS</h2>
        <hr>
        <div class="viewall">
            <span>View all</span>
            <span id="viewAllIcon"></span>
        </div>
        <div class="container row">
            <div class="col-12">
                <div class="card">
                    <div class="date">
                        <h3>2023 11 20 / Showcase</h3>
                    </div>
                    <div class="workpic">
                        <img src="https://picsum.photos/id/500/200/300" alt="">
                    </div>
                    <div class="worktxt">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.work {
    position: relative;
    height: 100vh;
    background: #e6e8eb;
}
.work h2 {
    text-align: center;
    color: black;
    padding-block: 80px;
    font-size: 42px;
    letter-spacing: 5px;
}
hr {
    background: #cbcbcb;
    height: 1px;
}
.viewall {
    position: absolute;
    top: 160px;
    right: 20px;
    display: flex;
    align-items: center;
}
.viewall span:nth-child(1) {
    color: black;
    font-weight: bold;
    margin-right: 25px;
}
#viewAllIcon {
    position: relative;
    display: inline-block;
    margin-left: 5px;
    width: 20px;
    height: 20px;
    background: #e6e8eb;
    border-radius: 50%;
    border: 1px solid black;
}
#viewAllIcon::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translate(-50%,-50%);
    height: 1px;
    width: 30px;
    background: #000000;
}
.card {
    width: 342px;
    height: 335px;
    overflow: hidden;
}
.card .date {
    padding-block: 18px;
}
.card .workpic {
    width: 100%;
}
.card .workpic img {
    width: 100%;
    height: 192px;
    object-fit: cover;
}
.card .worktxt p {
    padding-block-start: 20px;
    padding-block-end: 38px;
    color: #000000;
}
</style>