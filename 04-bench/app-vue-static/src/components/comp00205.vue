<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00248B, calcu00378B, calcu00383B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00248B(seed) - calcu00378B(seed) + calcu00383B(seed));
</script>

<template>
  <div class="blk">comp00205: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(125 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(305 50% 50%);
  display: inline-block;
}
</style>
