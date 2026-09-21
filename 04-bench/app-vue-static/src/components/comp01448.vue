<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00576A, calcu01336B, calcu01375A, calcu00006B, calcu00819B } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00576A(seed) - calcu01336B(seed) + calcu01375A(seed) - calcu00006B(seed) + calcu00819B(seed));
</script>

<template>
  <div class="blk">comp01448: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(41 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(221 50% 50%);
  display: inline-block;
}
</style>
