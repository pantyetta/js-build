<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00742B, calcu00052B, calcu01195B, calcu01370B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00742B(seed) - calcu00052B(seed) + calcu01195B(seed) - calcu01370B(seed));
</script>

<template>
  <div class="blk">comp00489: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(94 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(274 50% 50%);
  display: inline-block;
}
</style>
