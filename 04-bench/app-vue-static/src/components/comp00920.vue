<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00416A, calcu01464B, calcu01341B, calcu00297A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00416A(seed) - calcu01464B(seed) + calcu01341B(seed) - calcu00297A(seed));
</script>

<template>
  <div class="blk">comp00920: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(318 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(138 50% 50%);
  display: inline-block;
}
</style>
