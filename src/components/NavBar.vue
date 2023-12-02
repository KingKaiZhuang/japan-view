<template>
    <nav>
        <div class="title">
            <h1>Unplug</h1>
        </div>
        <button id="menu-button" @click="MenuButtonClick">
            <i :class="menuIconClass" id="menu-icon"></i>
            <p>Menu</p>
        </button>
        <div class="menu" :class="{ 'menu-open' : isMenuOpen }">
            <div class="header">
                <h2>Unplug</h2>
            </div>
            <div class="body">
                <a href="#">Works</a>
                <a href="#">Member</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
            </div>
            <div class="footer">
                <i class="fa-solid fa-x"></i>
                <p @click="MenuButtonClick">Close</p>
            </div>
        </div>
    </nav>
</template>

<style>
body {
    background: #000;
    position: relative;
}

nav {
    width: 100%;
    display: flex;
    align-items: center;
}

.title {
    display: inline-block;
    margin: 15px 0px 0px 25px;
}

.title h1 {
    color: white;
    font-size: 35px;
    font-weight: 500;
}

#menu-button {
    background: transparent;
    position: absolute;
    z-index: 10;
    top: 15px;
    right: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

#menu-button i {
    color: white;
    font-size: 25px;
    padding-bottom: 5px;
}
#menu-icon {
    transition: all 0.3s ease;
}
/* MenuItem */
.menu {
    background-color: #121212;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    opacity: 0;
    visibility: hidden;

    transition: .3s;
}
.menu-open {
    opacity: 1;
    visibility: visible;
}
.menu .header {
    width: 100%;
    /* background: #ff7777; */
    margin-top: -50px;
    padding-bottom: 20px;
}
.menu .header h2 {
    padding-block: 12px;
    text-align: center;
    font-size: 35px;
}
.menu .body {
    text-align: center;
    width: 100%;
    /* background: #7780ff; */
}
.menu .body a {
    display: block;
    font-size: 25px;
    padding-block: 20px;
}
.menu .footer {
    width: 100%;
    text-align: center;
    /* background: #ffe277; */
}
.menu .footer i {
    font-size: 40px;
    font-weight: lighter;
    padding-block-start: 50px;
    color: #565656;
}
.menu .footer p {
    padding-top: 5px;
    color: #a2a2a2;
}
</style>

<script>
export default {
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        MenuButtonClick() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    },
    computed: {
        menuIconClass() {
            return this.isMenuOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars';
        }
    }
}
</script>