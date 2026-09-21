<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00778A, calcu01110A, calcu01220B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00778A(seed) - calcu01110A(seed) + calcu01220B(seed));
</script>

<template>
  <div class="blk">comp00277: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(288 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(108 50% 50%);
  display: inline-block;
}
</style>
