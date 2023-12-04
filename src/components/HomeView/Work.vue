<template>
    <div class="work">
        <h2>WORKS</h2>
        <hr>
        <div class="viewall">
            <span>View all</span>
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
.work > hr {
    background: #cbcbcb;
    height: 1px;
}
.viewall {
    position: absolute;
    top: 160px;
    right: 20px;
}
.viewall span {
    color: black;
    font-weight: bold;
}
</style>