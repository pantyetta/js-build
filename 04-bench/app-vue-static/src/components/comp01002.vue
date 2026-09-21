<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01231B, calcu00092A, calcu00105B, calcu01204A, calcu01358A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu01231B(seed) - calcu00092A(seed) + calcu00105B(seed) - calcu01204A(seed) + calcu01358A(seed));
</script>

<template>
  <div class="blk">comp01002: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(323 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(143 50% 50%);
  display: inline-block;
}
</style>
