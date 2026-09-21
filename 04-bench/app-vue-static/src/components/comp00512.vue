<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01210B, calcu00855A, calcu00463B, calcu00589B, calcu00800B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01210B(seed) - calcu00855A(seed) + calcu00463B(seed) - calcu00589B(seed) + calcu00800B(seed));
</script>

<template>
  <div class="blk">comp00512: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(32 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(212 50% 50%);
  display: inline-block;
}
</style>
