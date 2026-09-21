<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01042B, calcu01144A, calcu00467B, calcu01049B, calcu00398A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu01042B(seed) - calcu01144A(seed) + calcu00467B(seed) - calcu01049B(seed) + calcu00398A(seed));
</script>

<template>
  <div class="blk">comp00448: {{ total }}</div>
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
