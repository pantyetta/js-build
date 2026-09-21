<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00162A, calcu00463B, calcu01139A, calcu00321B, calcu00061B } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00162A(seed) - calcu00463B(seed) + calcu01139A(seed) - calcu00321B(seed) + calcu00061B(seed));
</script>

<template>
  <div class="blk">comp01895: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(282 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(102 50% 50%);
  display: inline-block;
}
</style>
