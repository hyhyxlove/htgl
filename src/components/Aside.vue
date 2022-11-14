<template>
    <el-menu default-active="1-4-1" class="tst el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <h3>后台管理</h3>
        <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-s-shop"></i>
            <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-s-custom"></i>
            <span slot="title">用户管理</span>
        </el-menu-item>
        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-d-caret"></i>
                <span slot="title">其他</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="4-3">
                <span slot="title">选项3</span>
                <el-menu-item index="4-3-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
    </el-menu>
</template>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.tst {
    text-align: left;
    height: 100vh;
    h3{
        text-align: center;
        color: #ffd04b;
        font-weight: 700;
        margin: 5px  0 ;
    }
}
</style>
  
<script>
export default {
    data() {
        return {
            isCollapse: false
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>