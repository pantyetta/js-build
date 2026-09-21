<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00542A, calcu00890A, calcu00088A, calcu00615B, calcu00478B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00542A(seed) - calcu00890A(seed) + calcu00088A(seed) - calcu00615B(seed) + calcu00478B(seed));
</script>

<template>
  <div class="blk">comp00741: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(43 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(223 50% 50%);
  display: inline-block;
}
</style>
