<template>
    <nav class="">
        <li class="lab-md"><a href="#works" class="link">Работы</a></li>
        <li class="lab-md"><a href="#" class="link">О себе</a></li>
        <li class="lab-md"><a href="#" class="link">Блог</a></li>
        <li class="lab-md"><a href="#" class="link">Контакты</a></li>
    </nav>
</template>

<style lang="scss" scope>
$white: #fff;
$red: #ff0000;
$blue: #2f00ff;
$gradient: linear-gradient(90deg, $white 0.85%, $blue 52.93%, $red 100.85%);
nav {
    position: fixed;
    height: 86px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 100%;
    background-color: rgba($color: #000, $alpha: .9);
    backdrop-filter: blur(8px);
    z-index: 2;
    
    & li {
        list-style-type: none;

        &:last-child {
            & .link {
                background: $gradient;
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;                
            }
        }
    }
}
</style>