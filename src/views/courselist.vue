<template>
  <!-- <div>{{data.table.list}}</div> -->
   <el-table
      :data="data.table.list"
      style="width: 100%">
      <el-table-column
        prop="PostNumber"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="Province"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="City"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="District"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="Address"
        label="地址">
      </el-table-column>
    </el-table>
</template>

<script>
import { reactive } from "vue";
import { getCourseData } from "../http/api";
import axios from "vue";

export default {
  name: "courselist",
  setup() {
    let data = reactive({
      table: [],
      page: 0,
      pasges: 0,
      total:0
    });
    getCourseData().then(res => {
      data.table = res.result;
      console.log(data)
    });
    // let getCourseDataList = async (obj) => {
    //   let arr = await getCourseData(obj),
    //   newArr = [];
    //   data.total = arr.length;
    //   console.log(data.table)
    //   //   [1,2,3,4,5,6,7]   [10,11,12----100]
    //   //   [[1,2],[3,4],[5,6],[7]]
    //   //split(index,10)==[0-10]
    //   for (let index = 0; index < arr.length; index++) {
    //     let obj = arr.splice(index, 8);
    //     newArr.push(obj);
    //     index += 10;
    //   }
    //   data.table = newArr;
    //   console.log(newArr);
    // };

    // let handleCurrentChange=index=>{
    //     data.page=index;
    // }
    // getCourseDataList();

    return {
      data,
      // handleCurrentChange,
      // getCourseDataList
    };
  },
};
</script>

<style>
</style>