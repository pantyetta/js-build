<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01348A, calcu00169B, calcu01198B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu01348A(seed) - calcu00169B(seed) + calcu01198B(seed));
</script>

<template>
  <div class="blk">comp00927: {{ total }}</div>
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
