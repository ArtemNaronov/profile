<template>
    <section id="works" class="works">
        <section>
            <h2>Мои работы</h2>
            <p class="lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa molestiae suscipit incidunt quod officiis perspiciatis amet ut neque rerum quia!</p>
        
            <ProjectBlock v-for="item in data" :item="item" />
        
        </section>
    </section>
</template>

<script setup>

    const data = [
        {
            title: 'Ecommerce',
            date: '2022',
            type: 'front-end',
            content: 'Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience.',
            img: 'https://api.fanagoria.ru/storage/app/uploads/public/62d/e39/67e/62de3967ead25251125530.jpg',
            character: 'https://lh3.googleusercontent.com/8XXmugpz9RuXDZlBWRtirChUHr0SXp_cw8lVHPlGv4LgUNXT2sTbOXoZDYqjtlw34wo',
            title: 'Fanagoria'
        },
    ]

</script>

<style lang="scss" scoped>
    .lg {
        width: min( 80%, 50%);
    }
</style>