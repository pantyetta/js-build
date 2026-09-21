<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00535B, calcu00310A, calcu01542B, calcu00504B, calcu01032A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00535B(seed) - calcu00310A(seed) + calcu01542B(seed) - calcu00504B(seed) + calcu01032A(seed));
</script>

<template>
  <div class="blk">comp00345: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(61 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(241 50% 50%);
  display: inline-block;
}
</style>
