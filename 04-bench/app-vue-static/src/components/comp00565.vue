<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00170B, calcu01473B, calcu00271B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00170B(seed) - calcu01473B(seed) + calcu00271B(seed));
</script>

<template>
  <div class="blk">comp00565: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(282 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(102 50% 50%);
  display: inline-block;
}
</style>
