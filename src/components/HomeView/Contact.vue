<template>
    <div class="contact">
        <div class="content-grup">
            <h2>CONTACT</h2>
            <p>Unplugへの参加にご興味がある企業様・クリエイター様は、コンタクトフォームよりお気軽にご連絡ください。</p>
            <div class="organization">
                <p>企業・非営利組織</p>
            </div>
            <div class="content">
                <h3>動画・CG制作のご相談や無料見積り</h3>
                <h3>サービス資料の請求</h3>
                <h3>その他協業や取材・登壇依頼</h3>
            </div>
            <div class="organization">
                <p>協力パートナー</p>
            </div>
            <p>モーショングラフィックス・CG制作にご協力いただける、ディレクターやクリエイター様を募集しています。</p>
        </div>
    </div>
    <ContactSend/>
</template>

<style>
.contact {
    background: #121212;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 665px;
}
.contact .content-grup {
    width: 90%;
}
.contact .content-grup h2 {
    color: #555555;
    font-size: 45px;
    letter-spacing: 6px;
}
.contact .content-grup p {
    color: #555555;
    font-size: 14px;
    padding-top: 10px;
}
.contact .content-grup .organization {
    width: 184px;
    display: inline-block;
    
    margin-block: 15px;
    padding:8px 0 8px 12px; 
    border: #555555 solid 1px;
}
.contact .content-grup .organization p {
    padding-top: 0px;
}
.contact .content-grup .content {
   padding-bottom: 15px;
}
.contact .content-grup .content h3 {
    padding-block: 10px;
    font-size: 12px;
    color: #555555;
    letter-spacing: 1px;
    border-bottom: #555555 solid 1px;
}
.send-group {
    height: 744px;
}
</style>

<script>
import ContactSend from './ContactSend.vue';

export default {
    components: {
        ContactSend
    }
}
</script>