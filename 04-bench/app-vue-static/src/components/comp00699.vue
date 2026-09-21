<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00237B, calcu00453B, calcu01366B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00237B(seed) - calcu00453B(seed) + calcu01366B(seed));
</script>

<template>
  <div class="blk">comp00699: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(27 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(207 50% 50%);
  display: inline-block;
}
</style>
