<template>
    <div class="send-group">
        <form action="" id="content">
            <label for="name" class="form-style">会社名</label>
            <input type="text" class="form-input">
            <label for="name" class="form-style">電話番号 *</label>
            <input type="text" class="form-input">
            <label for="name" class="form-style">お名前 *</label>
            <input type="text" class="form-input">
            <label for="name" class="form-style">メールアドレス *</label>
            <input type="text" class="form-input">
            <label for="name" class="form-style">お問い合わせ・ご相談内容 *</label>
            <textarea name="question" id="" cols="30" rows="10" class="form-QA"></textarea>
            <button type="submit" class="viewall">
                <span>Send</span>
                <span id="viewAllIcon"></span>
            </button>
        </form>
    </div>
</template>

<style>
.send-group {
    position: relative;
    width: 100%;
    height: 744px;
    background: #e4e7eb;

    display: flex;
    justify-content: center;
    align-items: center;
}

.send-group form {
    margin-top: -30px;
    display: flex;
    flex-direction: column;
    width: 90%;
}

.send-group form .form-style {
    font-size: 12px;
    font-weight: bold;
    color: #000;
}

.send-group form .form-input {
    color: #000;
    height: 48px;
    margin-bottom: 16px;
    outline: none;
    border-bottom: #cccccc solid 1px;
    font-size: 18px;
    background: #e4e7eb;
}

.send-group form .form-QA {
    color: #000;
    margin-top: 10px;
    height: 100px;
    outline: none;
    border-bottom: #cccccc solid 1px;
    font-size: 18px;
    background: #e4e7eb;
    resize: none;
    margin-bottom: 46px;
}

.viewall:not(:nth-child(2)) {
    position: unset;
    background: #e4e7eb;
    cursor: pointer;
    justify-content: right;
}

</style>