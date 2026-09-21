<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01393A, calcu01094B, calcu00524B, calcu00171A, calcu01168A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01393A(seed) - calcu01094B(seed) + calcu00524B(seed) - calcu00171A(seed) + calcu01168A(seed));
</script>

<template>
  <div class="blk">comp00455: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(262 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(82 50% 50%);
  display: inline-block;
}
</style>
