<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00466A, calcu01079A, calcu01175A, calcu01300B, calcu01048A } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00466A(seed) - calcu01079A(seed) + calcu01175A(seed) - calcu01300B(seed) + calcu01048A(seed));
</script>

<template>
  <div class="blk">comp00329: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(356 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(176 50% 50%);
  display: inline-block;
}
</style>
