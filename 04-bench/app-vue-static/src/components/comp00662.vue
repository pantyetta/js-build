<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00890B, calcu00368B, calcu00747B, calcu01252A, calcu00894B } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00890B(seed) - calcu00368B(seed) + calcu00747B(seed) - calcu01252A(seed) + calcu00894B(seed));
</script>

<template>
  <div class="blk">comp00662: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(25 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(205 50% 50%);
  display: inline-block;
}
</style>
