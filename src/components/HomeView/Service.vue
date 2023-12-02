<template>
    <div class="service">
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
    
</template>

<style>
.service {
    position: relative;
    display: flex;
    justify-content: center;
}

.grid-container {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* 3列 */
    grid-template-rows: repeat(3, 1fr);
    /* 格子之間的間隔 */
    width: 170px;
    /* 整體寬度 */
    height: 170px;
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
</style>