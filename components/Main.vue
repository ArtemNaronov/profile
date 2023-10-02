<template>
    <section class="main">
        <h1>Привет, меня зовут Артём</h1>
        <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Debitis ullam repellat sint facilis, laudantium modi, nostrum 
            veritatis tempora eos, praesentium cumque inventore. Iste dolore 
            accusamus minus aliquid ea soluta voluptas, corrupti natus, doloribus 
            numquam adipisci. Veniam quas vitae rerum nesciunt.
        </p>        
        <img class="photo" src="@/assets/images/F0DEkLbecbY-transformed.png" alt="" srcset="">
    </section>
</template>

<style lang="scss" scoped>
    h1 {
        text-align: center;
    }
    .main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .photo {
        position: absolute;
        right: 0;
        width: clamp(300px, 50%, 25%);
        top: 50%;
        height: auto;
        transform: translateY(-50%);
        -webkit-filter: contrast(150%) brightness(90%) opacity(0.5);
        filter: contrast(150%) brightness(90%) opacity(0.3);
        z-index: -1;
        border-radius: 20% 0 0 20%;
    }

    .subtitle {
        margin: 40px 0;
    }
</style>