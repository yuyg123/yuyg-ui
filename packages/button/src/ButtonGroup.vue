<template>
    <div class="buttonGroupDom">
            <span v-for="(option,index) in options"
                  class="item"
                  @click="change(option)"
                  :class="select === option.value?'current':''"
                  v-text="option.label"
                  :key="index"
            ></span>
    </div>
</template>

<script>
    export default {
        name: 'ButtonGroup',
        props: {
            select: {
                type: String,
                default: ''
            },
            options: {
                default: []
            }
        },
        methods: {
            change (option) {
                if (this.select === option.value) {
                    return;
                }
                this.$emit('changeElement', option);
            }
        }
    };
</script>

<style scoped>
    .buttonGroupDom {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        font-size: 0.8rem;
        background: rgba(227, 238, 249, 1);
        border-radius: 12px;
        border:1px solid rgba(191,221,245,1);
    }

    .item {
        display: inline-block;
        height: 100%;
        padding: 0 12px;
        border-radius: 12px;
        cursor: pointer;
    }

    .item.current {
        background: #298BBE;
        color: #FFF;
    }

</style>
