<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00079B, calcu00926B, calcu00730B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00079B(seed) - calcu00926B(seed) + calcu00730B(seed));
</script>

<template>
  <div class="blk">comp00331: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(72 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(252 50% 50%);
  display: inline-block;
}
</style>
