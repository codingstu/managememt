<template>
  <div>

    <audio
      id="audio"
      src="https://www.runoob.com/try/demo_source/horse.mp3"
      hidden
    ></audio>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";

export default {
  name: "music",
  setup() {
    const handlePlay = () => {
      alert(1);
    };

    return {
      handlePlay,
    };
  },
};
</script>

<style>
</style>