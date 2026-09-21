<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00874B, calcu00935A, calcu00844A, calcu00531A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00874B(seed) - calcu00935A(seed) + calcu00844A(seed) - calcu00531A(seed));
</script>

<template>
  <div class="blk">comp00290: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(5 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(185 50% 50%);
  display: inline-block;
}
</style>
