<template>

  <div id="app">
    <Index></Index>

    <!-- 总盒子 -->
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside>
        <!-- 第一层导航 -->
        <el-menu>
          <el-submenu index="1">
            <template slot="title">导航一</template>
            <!-- 第一层一次分支 -->
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <el-menu>
          <el-submenu index="1">
            <template slot="title">导航二</template>
            <!-- 第二层二次分支 -->
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右边区域 -->
      <el-container>
        <!-- 头部 -->
        <el-header style="text-align: center; line-height: 60px;">
          <span>李子明</span>
        </el-header>
        <!--  -->
        <el-maim>
          展示区域
          <template>

          </template>
        </el-maim>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import Index from '@/components/index.vue'
export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
</style>
