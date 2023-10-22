<template>
    <div class="project">
        <div class="project__left">
            <h3 class="project__title">{{item.title}}</h3>
            <div class="project__subtitle">{{item.date}} - {{item.type}}</div>
            <div class="project__content lg" v-html="item.content"></div>
        </div>
        <div class="project__right card">
            <div class="wrapper">
                <img :src="item.img" class="cover-image" />
            </div>
            <div class="title">{{item.title}}</div>          
            <img :src="item.character" class="character" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})
</script>

<style lang="scss" scoped>
    $black: #0A0A0A;
    $black-light: #121212;
    $gray: #3B3B3B;
    $white-dark: #B3B3B3;
    $white: #FFFFFF;

    .project {
        display: flex;
        position: relative;
        width: 100%;
        margin: 40px 0;
        max-height: 70vh;
        padding: 60px;
        gap: 8px;
        border-radius: 24px;
        border: 1px solid $gray;
        background: $black-light;

        &__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 40%;
            padding-right: 60px;
        }

        &__right {
            max-width: 60%;

            &.card {
                width: 100%;
                aspect-ratio: 5 / 2;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                padding: 0 36px;
                perspective: 2500px;
                margin: 0 50px;

                &:hover .wrapper {
                    border-radius: 24px;
                    transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
                    box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
                    -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
                    -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
                }

                &:hover .title {
                    transform: translate3d(0%, -50px, 100px);
                }
            }

            .cover-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .wrapper {
                transition: all 0.5s;
                position: absolute;
                width: 100%;
                z-index: -1;

                img {
                    border-radius: 24px;
                }

                &::before,
                &::after {
                    content: "";
                    opacity: 0;
                    width: 100%;
                    height: 80px;
                    transition: all 0.5s;
                    position: absolute;
                    left: 0;
                    border-radius: 24px;
                }

                &::before {
                    top: 0;
                    height: 100%;
                    background-image: linear-gradient(
                        to top,
                        transparent 46%,
                        rgba(12, 13, 19, 0.5) 68%,
                        rgba(12, 13, 19) 97%
                    );
                }

                &::after {
                    bottom: 0;
                    opacity: 1;
                    background-image: linear-gradient(
                      to bottom,
                      transparent 46%,
                      rgba(12, 13, 19, 0.5) 68%,
                      rgba(12, 13, 19) 97%
                    );
                }
            }

            &.card:hover .wrapper::before,
            .wrapper::after {
                opacity: 1;
            }

            &.card:hover .wrapper::after {
                height: 120px;
            }
            .title {
                font-size: 4rem;
                margin-bottom: 1rem;
                margin-right: auto;
                color: $white;
                transition: transform 0.5s;
                text-shadow: 1px 1px 1px $black-light;
            }
            .character {
                width: 100%;
                opacity: 0;
                transition: all 0.5s;
                position: absolute;
                z-index: -1;
                max-height: 300px;
            }
              
            &.card:hover .character {
                opacity: 1;
                transform: translate3d(0%, -30%, 100px);
            }
        }

        &__subtitle {
            margin: 24px 0;
        }

        &__content {
            color: $white-dark
        }
        
    }
</style>