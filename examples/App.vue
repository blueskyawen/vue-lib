<template>
  <div id="app">
    <div id="nav">
      <img alt="Vue logo" src="./assets/logo.png">
      <span class="gekai">|</span>
      <router-link to="/">组件</router-link>
      <router-link to="/filter">过滤器</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    .content {
      padding: 40px;
    }
  }
  #nav {
    padding: 15px 0px;
    margin: 0 40px;
    text-align: left;
    display: flex;
    align-items: center;
    border-bottom: solid 1px #ccc;
    a {
      font-weight: bold;
      color: #2c3e50;
      font-size: 24px;
      text-decoration: none;
      padding: 0 10px;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
    img {
      height: 20px;
      width: 20px;
      margin-right: 15px;
    }
    .gekai {
      color: #333;
      height: 24px;
    }
  }
</style>
