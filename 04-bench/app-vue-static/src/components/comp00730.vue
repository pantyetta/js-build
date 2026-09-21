<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01227A, calcu01488A, calcu01587B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu01227A(seed) - calcu01488A(seed) + calcu01587B(seed));
</script>

<template>
  <div class="blk">comp00730: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(53 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(233 50% 50%);
  display: inline-block;
}
</style>
