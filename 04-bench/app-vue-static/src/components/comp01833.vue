<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00234B, calcu01203B, calcu01448B, calcu00377A, calcu00617B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00234B(seed) - calcu01203B(seed) + calcu01448B(seed) - calcu00377A(seed) + calcu00617B(seed));
</script>

<template>
  <div class="blk">comp01833: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(18 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(198 50% 50%);
  display: inline-block;
}
</style>
