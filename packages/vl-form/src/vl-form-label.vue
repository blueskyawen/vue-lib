<template>
  <div class="vl-form-group-label" :style="{height: height}">
    <label>
      <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'vl-form-label',
    props: ['height']
  }
</script>

<style scoped lang="less">
  .vl-form-group-label {
    height:36px;
    display:inline-flex;
    align-items:center;
    justify-content: flex-end;
    color:#333;
    width:100%;
    label {
      display:inline-flex;
      height:100%;
      align-items:center;
      color: #666;
      position: relative;
      &:after{
        content:":";
        margin-right: 10px;
      }
    }
    .nc-form-group-label-require {
      margin-left: -10px;
      color:#ff3300;
    }
    &.nc-form-noshow-option label:after {
      content:"";
    }
  }
</style>
