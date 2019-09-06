<template>
  <div class="home">
    <form style="width: 600px;">
      <vl-form-group class="vc-from-group">
        <vl-form-label class="vc-from-label">用户名</vl-form-label>
        <vl-form-control class="vc-from-control">
          <vl-input v-model="name" placeholder="输入用户名" autocomplete="on" required></vl-input>
        </vl-form-control>
      </vl-form-group>
      <vl-form-group class="vc-from-group">
        <vl-form-label class="vc-from-label">密码</vl-form-label>
        <vl-form-control class="vc-from-control">
          <vl-input type="password" v-model="password" placeholder="输入密码" autocomplete="off" required></vl-input>
        </vl-form-control>
      </vl-form-group>
      <vl-form-group class="vc-from-group">
        <vl-form-label class="vc-from-label">文本域</vl-form-label>
        <vl-form-control class="vc-from-control">
          <vl-textarea v-model="description" placeholder="输入文本"></vl-textarea>
        </vl-form-control>
      </vl-form-group>
      <vl-form-group class="vc-from-group">
        <vl-form-label class="vc-from-label">食物</vl-form-label>
        <vl-form-control class="vc-from-control">
          <vl-checkbox class="oper-item" v-for="like in likes" v-model="like.checked"
                       :value="like.name" :key="like.value"></vl-checkbox>
        </vl-form-control>
      </vl-form-group>
      <vl-form-group class="vc-from-group">
        <vl-form-label class="vc-from-label">是否同意</vl-form-label>
        <vl-form-control class="vc-from-control">
          <vl-switch class="oper-item" v-model="aggres[0]"></vl-switch>
          <vl-switch class="oper-item" v-model="aggres[1]" :tip-labels="['是','否']"></vl-switch>
          <vl-switch class="oper-item" v-model="aggres[2]" :type="'min'" :disabled="true"></vl-switch>
        </vl-form-control>
      </vl-form-group>
      <vl-form-group class="vc-from-group">
        <vl-form-label class="vc-from-label"></vl-form-label>
        <vl-form-control class="vc-from-control">
          <vl-button class="oper-item" @click="showLoading('normal')">Normal-Loading</vl-button>
          <vl-button class="oper-item" :type="'add'" @click="showLoading('clover')">Clover-Loading</vl-button>
          <vl-button class="oper-item" :type="'cancel'" @click="showLoading('horizon')">Horizon-Loading</vl-button>
        </vl-form-control>
      </vl-form-group>
    </form>
    <p>{{getData}}</p>
    <div class="opers" v-if="loadType === 'normal'">
      <vl-loading :type="'normal'" :size="'max'"></vl-loading>
      <vl-loading :type="'normal'" :size="'medium'"></vl-loading>
      <vl-loading :size="'min'"></vl-loading>
    </div>
    <div class="opers" v-if="loadType === 'clover'">
      <vl-loading :type="'clover'" :size="'max'"></vl-loading>
      <vl-loading :type="'clover'" :size="'medium'"></vl-loading>
      <vl-loading :type="'clover'" :size="'min'"></vl-loading>
    </div>
    <div class="opers" v-if="loadType === 'horizon'">
      <vl-loading class="oper-item" :type="'horizontal'" :size="'max'"></vl-loading>
      <vl-loading class="oper-item" :type="'horizontal'" :size="'medium'"></vl-loading>
      <vl-loading class="oper-item" :type="'horizontal'" :size="'min'"></vl-loading>
    </div>
  </div>
</template>

<script>
// @ is an alias to /examples
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      aggres: [true, false, true],
      likes: [
        {value: 'fish', name: '鱼肉', checked: true},
        {value: 'pid', name: '猪肉', checked: true},
        {value: 'apple', name: '苹果', checked: false}
      ],
      name: 'jack',
      password: '',
      description: '',
      loadType: ''
    }
  },
  methods: {
    showLoading: function (type) {
      this.loadType = type
    }
  },
  computed: {
    getData () {
      return this.$data
    }
  }
}
</script>

<style lang="less">
  .home {
    .opers {
      padding: 5px 0;
    }
    .oper-item {
      margin-right: 10px;
    }
    .vc-from-group {
      width: 100%;
      .vc-from-label {
        width: 20%;
      }
      .vc-from-control {
        width: 80%;
      }
    }
  }
</style>
