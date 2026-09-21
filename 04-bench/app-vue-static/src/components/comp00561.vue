<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00005B, calcu01160A, calcu01515A, calcu00530A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00005B(seed) - calcu01160A(seed) + calcu01515A(seed) - calcu00530A(seed));
</script>

<template>
  <div class="blk">comp00561: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(52 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(232 50% 50%);
  display: inline-block;
}
</style>
