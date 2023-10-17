<template>
    <h1 class="title" :class="[
        {
            'title--center': center,
            // 'title--logo':logo,
            // [`title--logo-&{color}`]: color,
            [`title--${color}`]: color,
        },
    ]"
    ><slot />
</h1>
</template>

<script setup lang="ts">
defineProps<{
    center?: boolean;
    // logo?: boolean;
    color?: 'light' | 'blue';
}>();
</script>

<style lang="scss">

.title {
    font-family: var(--secondary-font), serif;
    color: var(--secondary-color);
    margin: 0 0 22px;
    font-size: 40px;

    &::after {
        background: var(--primary-color);
        content: '';
        display: block;
        width: 55px;
        height: 3px;
        margin: 22px 0px;
    }
}

.title--center {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
}

.title--light {
    color: var(--primary-text-color);
}

.title--blue::after {
    background: var(--secondary-color);
    content: '';
    display: block;
    width: 55px;
    height: 3px;
    margin: 22px 0px;
}

.title--logo {
    color: var(--primary-text-color);
    font-size: 23px;
}

.title--logo-blue {
    color: var(--secondary-color);
}
</style>