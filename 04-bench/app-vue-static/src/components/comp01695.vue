<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00199A, calcu01320B, calcu00328B, calcu01224A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu00199A(seed) - calcu01320B(seed) + calcu00328B(seed) - calcu01224A(seed));
</script>

<template>
  <div class="blk">comp01695: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(266 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(86 50% 50%);
  display: inline-block;
}
</style>
