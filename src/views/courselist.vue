<template>
  <div></div>
  <el-table :data="data.table[data.page]" stripe style="width: 100%">
    <el-table-column prop="image_hue" label="日期" width="180"> </el-table-column>
    <el-table-column prop="" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="" label="地址"> </el-table-column>
  </el-table>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="data.page"
    layout="total, prev, pager, next, jumper"
    :total="data.total">
  </el-pagination>
</template>

<script>
import { reactive } from "vue";
import { getCourseData } from "../http/api";

export default {
  name: "courselist",
  setup() {
    let data = reactive({
      table: [],
      page: 0,
      pasges: 0,
      total:0

    });

    let getCourseDataList = async (obj) => {
      let arr = await getCourseData(obj),newarr=[];
      data.total=arr.length;
       for(let index=0;index<arr.length;index++){
        let obj = arr.splice(index,10);
        newarr.push(obj);
        index+=10;
    } 
    data.table=newarr;
    };
    let handleCurrentChange=index=>{
        data.page=index
    }
   
    getCourseDataList();

    return {
      data,
      handleCurrentChange
    };
  },
};
</script>

<style>
</style>