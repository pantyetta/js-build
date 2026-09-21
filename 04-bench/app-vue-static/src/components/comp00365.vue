<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00212B, calcu01195B, calcu00362B, calcu01176A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00212B(seed) - calcu01195B(seed) + calcu00362B(seed) - calcu01176A(seed));
</script>

<template>
  <div class="blk">comp00365: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(300 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(120 50% 50%);
  display: inline-block;
}
</style>
