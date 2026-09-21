<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00370B, calcu00433A, calcu00995A, calcu00846A, calcu00672B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00370B(seed) - calcu00433A(seed) + calcu00995A(seed) - calcu00846A(seed) + calcu00672B(seed));
</script>

<template>
  <div class="blk">comp00219: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(11 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(191 50% 50%);
  display: inline-block;
}
</style>
