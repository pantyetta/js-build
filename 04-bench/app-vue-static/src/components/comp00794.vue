<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00598B, calcu00963B, calcu01578A, calcu00271B, calcu01080A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00598B(seed) - calcu00963B(seed) + calcu01578A(seed) - calcu00271B(seed) + calcu01080A(seed));
</script>

<template>
  <div class="blk">comp00794: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(140 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(320 50% 50%);
  display: inline-block;
}
</style>
