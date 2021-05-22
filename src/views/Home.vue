<template>
  <div class="home">
    <el-container>
      <el-header class="headBox">
        <el-row :gutter="20">
          <el-col :span="16">
            <img src="../assets/logo.png" alt="" />
          </el-col>
          <el-col :span="8" class="infoBox">
            <span>user</span>
            <el-button type="text" class="out-btn">退出</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div>
            <el-menu router="true" class="el-menu-vertical-demo">
              <el-menu-item :route='i.path' v-for="i in tablist" :key=i.name index="i.name">
                <i class="el-icon-document"></i>
                <template #title>{{i.meta.title}}</template>
              </el-menu-item>
            </el-menu>
          </div>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
// import { reactive } from 'vue'
import router from "../router/index";

export default {
  name: "Home",
  setup() {
    console.log(router);
    const tablist = router.options.routes[0].children
    return {
      tablist,
    };
  },
};
</script>

<style scoped>
img {
  width: 50px;
}
.headBox {
  background-color: #efefef;
  padding: 5px;
}
.infoBox {
  text-align: right;
}
.out-btn {
  margin-left: 20px;
}
</style>
