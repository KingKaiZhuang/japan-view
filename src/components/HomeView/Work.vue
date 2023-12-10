<template>
    <div class="work">
        <h2>WORKS</h2>
        <hr>
        <a class="viewall" href="#">
            <span>View all</span>
            <span id="viewAllIcon"></span>
        </a>
        <div class="container row justify-content-center">
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="date">
                        <h3>2023.11.20 / Showcase</h3>
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
    margin: 20px 20px 0 0;
    display: flex;
    align-items: center;
}
.viewall:hover #viewAllIcon::after {
    transform: translate(0%,-50%);
    width: 60px;
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
    width: 38px;
    height: 38px;
    background: #e6e8eb;
    border-radius: 50%;
    border: 1px solid black;
}
#viewAllIcon::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-30%,-50%);
    height: 1px;
    width: 45px;
    background: #000000;
    transition: .3s;
}
.card {
    width: 342px;
    height: 335px;
    overflow: hidden;
    margin: auto;
}
.card .date {
    padding-block: 18px;
}
.card .date h3 {
    color: #6b6b6b;
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