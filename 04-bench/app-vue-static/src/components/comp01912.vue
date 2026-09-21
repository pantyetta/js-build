<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00231B, calcu01445B, calcu01357A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00231B(seed) - calcu01445B(seed) + calcu01357A(seed));
</script>

<template>
  <div class="blk">comp01912: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(268 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(88 50% 50%);
  display: inline-block;
}
</style>
