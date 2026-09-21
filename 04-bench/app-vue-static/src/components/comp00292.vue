<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00562B, calcu01153A, calcu01427B, calcu01339B } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00562B(seed) - calcu01153A(seed) + calcu01427B(seed) - calcu01339B(seed));
</script>

<template>
  <div class="blk">comp00292: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(38 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(218 50% 50%);
  display: inline-block;
}
</style>
