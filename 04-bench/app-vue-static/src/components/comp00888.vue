<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01238A, calcu00325A, calcu01524B, calcu01228B } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01238A(seed) - calcu00325A(seed) + calcu01524B(seed) - calcu01228B(seed));
</script>

<template>
  <div class="blk">comp00888: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(269 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(89 50% 50%);
  display: inline-block;
}
</style>
