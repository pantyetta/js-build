<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01322A, calcu00748A, calcu00642A, calcu00298B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01322A(seed) - calcu00748A(seed) + calcu00642A(seed) - calcu00298B(seed));
</script>

<template>
  <div class="blk">comp00008: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(151 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(331 50% 50%);
  display: inline-block;
}
</style>
