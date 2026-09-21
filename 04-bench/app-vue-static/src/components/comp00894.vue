<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00127B, calcu01058A, calcu00228B, calcu01573B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00127B(seed) - calcu01058A(seed) + calcu00228B(seed) - calcu01573B(seed));
</script>

<template>
  <div class="blk">comp00894: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(220 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(40 50% 50%);
  display: inline-block;
}
</style>
