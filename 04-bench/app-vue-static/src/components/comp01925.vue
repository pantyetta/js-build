<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01290A, calcu01195A, calcu01367B, calcu00236B, calcu00645B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01290A(seed) - calcu01195A(seed) + calcu01367B(seed) - calcu00236B(seed) + calcu00645B(seed));
</script>

<template>
  <div class="blk">comp01925: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(193 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(13 50% 50%);
  display: inline-block;
}
</style>
