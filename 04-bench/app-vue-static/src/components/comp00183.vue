<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00548B, calcu00627A, calcu00633B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00548B(seed) - calcu00627A(seed) + calcu00633B(seed));
</script>

<template>
  <div class="blk">comp00183: {{ total }}</div>
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
