<template>
    <div id="soft">
        <div class="imgslider">
            <img v-for="(image, index) in images" :key="index" :src="image" alt="">
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            images: [
                'https://picsum.photos/seed/picsum/200/100',
                'https://picsum.photos/seed/picsum/200/100',
                'https://picsum.photos/seed/picsum/200/100',
                'https://picsum.photos/seed/picsum/200/100',
                'https://picsum.photos/seed/picsum/200/100',
            ],
        };
    },
};
</script>
  
<style>
#soft {
    height: 190px;
    background: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#soft .imgslider {
    height: 93px;
    width: 100%;
    background: #d1fcff;
    display: flex;
    /* 新增這行使圖片排成一行 */
    animation: slide 40s ease infinite;
    /* 新增這行，啟用動畫 */
}

#soft .imgslider img {
    height: 93px;
    width: 200px;
    object-fit: cover;
    vertical-align: top;
    /* 新增這行，根據你的需求設定寬度 */
}

@keyframes slide {
  from{transform: translateX(100%)}
  to{transform: translateX(-100%)}
}
</style>
  