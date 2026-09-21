<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00546B, calcu00563A, calcu00612A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00546B(seed) - calcu00563A(seed) + calcu00612A(seed));
</script>

<template>
  <div class="blk">comp01708: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(37 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(217 50% 50%);
  display: inline-block;
}
</style>
