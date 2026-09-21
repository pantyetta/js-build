<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00444A, calcu01039B, calcu01266A, calcu00615B, calcu01511B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00444A(seed) - calcu01039B(seed) + calcu01266A(seed) - calcu00615B(seed) + calcu01511B(seed));
</script>

<template>
  <div class="blk">comp01793: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(178 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(358 50% 50%);
  display: inline-block;
}
</style>
