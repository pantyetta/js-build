<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01571B, calcu00785B, calcu00652B, calcu00100B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01571B(seed) - calcu00785B(seed) + calcu00652B(seed) - calcu00100B(seed));
</script>

<template>
  <div class="blk">comp01186: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(285 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(105 50% 50%);
  display: inline-block;
}
</style>
