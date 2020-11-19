<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  overflow: hidden;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
}
.flex-column-space {
  display: flex;
  display: -ms-flex;
  display: -webkit-flex;
  flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
}
.flex-row-space {
  display: flex;
  display: -ms-flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  flex-direction: row;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  align-content: space-between;
  -webkit-align-items: center;
}
.flex-row-center {
  display: flex;
  display: -ms-flex;
  display: -webkit-flex;
  flex-direction: row;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
}
.flex-column-center {
  display: flex;
  display: -ms-flex;
  display: -webkit-flex;
  flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
}

// 底部按钮显示隐藏
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
.bounceR-enter-active {
  animation: fadeInRight 1s;
}
.bounceR-leave-active {
  animation: fadeInRight 1s reverse;
}
@keyframes bounce-in {
  from {
    opacity: 0;
    -webkit-transform: translate(-1000px); /* Safari */
    transform: translate(-1000px); /* 标准语法 */
  }
  to {
    opacity: 1;
    -webkit-transform: translate(0); /* Safari */
    transform: translate(0); /* 标准语法 */
  }
}
@-webkit-keyframes bounce-in {
  from {
    opacity: 0;
    -webkit-transform: translate(-1000px); /* Safari */
    transform: translate(-1000px); /* 标准语法 */
  }
  to {
    opacity: 1;
    -webkit-transform: translate(0); /* Safari */
    transform: translate(0); /* 标准语法 */
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate(1000px, 0);
    transform: translate(1000px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate(1000px, 0);
    transform: translate(1000px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
</style>
