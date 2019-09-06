<template>
  <div class="filter">
    <div class="demo-item-group">
      <h4>1. vlLowercase</h4>
      <div class="demo-item">{{message | vlLowercase}}</div>
      <div class="fenge"></div>
      <h4>2. vlUppercase</h4>
      <div class="demo-item">{{message | vlUpperCase}}</div>
      <div class="fenge"></div>
      <h4>3. vlKeyValue</h4>
      <div class="demo-item">{{site | vlKeyValue}}</div>
      <div class="fenge"></div>
      <h4>4. vlSlice</h4>
      <div class="demo-item">{{message | vlSlice(2)}}</div>
      <div class="demo-item">{{message | vlSlice(2, 12)}}</div>
      <div class="demo-item">{{itemss | vlSlice(2, 6)}}</div>
      <div class="fenge"></div>
      <h4>5. vlPercent</h4>
      <div class="demo-item">{{num1 | vlPercent}}</div>
      <div class="demo-item">{{num1 | vlPercent(3)}}</div>
      <div class="fenge"></div>
      <h4>6. vlJson</h4>
      <div class="demo-item">{{site | vlJson}}</div>
      <div class="demo-item">{{site | vlJson(4)}}</div>
      <div class="demo-item">{{site | vlJson('####')}}</div>
      <div class="fenge"></div>
      <h4>7. vlDateFormat</h4>
      <div class="demo-item">{{date | vlDateFormat}}</div>
      <div class="fenge"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'filter',
    data: function () {
      return {
        message: 'Hello Vue Filter !',
        site: { name: '菜鸟教程', url: 'http://www.runoob.com' },
        itemss: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        num1: 0.3142309621,
        date: new Date()
      }
    }
  }
</script>

<style scoped lang="less">
  .demo-item-group {
    display: flex;
    margin: 10px 30px;
    flex-direction: column;
    > label {
      font-size: 24px;
      color: #000080;
      margin-bottom: 5px;
      &.hasMao {
        font-weight: 600;
        &:after {
          content: ":";
        }
      }
    }
    > .demo-item {
      width: inherit;
      margin-top: 5px;
      font-size: 18px;
    }
    .fenge {
      width: 100%;
      height: 3px;
      margin-bottom: 3px;
      border-bottom: dashed 1px #999;
    }
    h4 {
      color: #008000;
    }
  }
</style>
