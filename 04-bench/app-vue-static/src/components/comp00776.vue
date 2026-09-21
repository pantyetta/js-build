<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00832A, calcu00988B, calcu00801B, calcu01182B, calcu00329B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00832A(seed) - calcu00988B(seed) + calcu00801B(seed) - calcu01182B(seed) + calcu00329B(seed));
</script>

<template>
  <div class="blk">comp00776: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(31 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(211 50% 50%);
  display: inline-block;
}
</style>
