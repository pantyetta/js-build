<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00591B, calcu00610B, calcu00793B, calcu00249B, calcu01333B } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00591B(seed) - calcu00610B(seed) + calcu00793B(seed) - calcu00249B(seed) + calcu01333B(seed));
</script>

<template>
  <div class="blk">comp01204: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(163 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(343 50% 50%);
  display: inline-block;
}
</style>
