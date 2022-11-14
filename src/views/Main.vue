<template>
    <div>
        <!-- 总盒子 -->
        <el-container>
            <!-- 左侧边栏 -->
            <el-aside>
                <Aside></Aside>
            </el-aside>
            <!-- 右边区域 -->
            <el-container>
                <!-- 头部 -->
                <el-header style="text-align: center; line-height: 60px;">
                    <span>李子明</span>
                </el-header>
                <!--  -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import Aside from '../components/Aside.vue';

export default {
    data() {
        return {
        }
    },
    components: {
        Aside
    }
}
</script>
