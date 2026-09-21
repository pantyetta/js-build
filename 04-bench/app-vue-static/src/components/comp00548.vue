<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00579B, calcu00127B, calcu01239B, calcu00991B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00579B(seed) - calcu00127B(seed) + calcu01239B(seed) - calcu00991B(seed));
</script>

<template>
  <div class="blk">comp00548: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(35 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(215 50% 50%);
  display: inline-block;
}
</style>
