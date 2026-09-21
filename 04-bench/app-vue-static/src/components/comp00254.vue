<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00809A, calcu00998A, calcu00027B } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00809A(seed) - calcu00998A(seed) + calcu00027B(seed));
</script>

<template>
  <div class="blk">comp00254: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(150 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(330 50% 50%);
  display: inline-block;
}
</style>
