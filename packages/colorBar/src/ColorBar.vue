<template>
  <div class="colorbar" :class="type==='mini'? 'mini':''">
    <div class="colorBlock">
      <div v-for="(item,index) in colorOptions.values"
           :key="index"
           :style="{background: colorOptions.colors[index]}">
        <span class="btn-text" :class="colorOptions.flag ? 'title-up':''" v-text="item"></span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'ColorBar',
        props: {
            type: {
                default: null
            },
            colorOptions: {
                default: {
                    colors: [],
                    values: [],
                    flag: false
                }
            }

        },
        data () {
            return {};
        },
        methods: {
        }
    };
</script>

<style scoped>
  .colorbar {
    position: absolute;
    color: #000;
    left: 1rem;
    bottom: 1rem;
    display: block;
    font-size: 0.8rem;
    border-radius: 0.5rem;
    z-index: 1001;
    background:rgba(38,174,245,0.2);
    border:1px solid rgba(0,132,181,1);
  }

  .colorHeader {
    height: 1.8rem;
    margin-left: 5px;
  }

  .mini .colorHeader {
    display: none;
  }

  .colorBlock {
    width: 5rem;
    position: relative;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .mini .colorBlock {
    width: 3.2rem;
    margin: 0.5rem 0.7rem 1rem 0.7rem;
  }

  .colorBlock > div {
    width: 2rem;
    height: 1.2rem;
    cursor: pointer;
    position: relative;
  }

  .mini .colorBlock > div {
    width: 1.2rem;
    height: 2rem;
    border: 1px solid #CCC;
    border-bottom: 0;
  }
  .mini .colorBlock > div:nth-last-child(1){
    border-bottom:  1px solid #CCC;
  }

  .btn-text {
    position: absolute;
    left: 2.5rem;
    font-size: 0.6rem;
    margin-top: 0.6rem;
    bottom: -8px;
  }

  .mini .btn-text {
    left: 1.5rem;
    font-size: 10px;
  }

  .colorbar >>> .el-button.currentbtn {
    color: red;
  }

  .title-up {
    margin-top: -0.6rem;
  }

  .mini .title-up {
    margin-top: -0.4rem;
  }

  >>> .el-button,
  >>> .el-button {
    color: #f5f7fa;
    font-size: 1rem;
  }

  .colorbar >>> .down-btn.el-button {
    margin-left: 0;
  }

</style>
