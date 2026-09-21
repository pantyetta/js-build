<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00189A, calcu00242B, calcu00650A, calcu00649B } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00189A(seed) - calcu00242B(seed) + calcu00650A(seed) - calcu00649B(seed));
</script>

<template>
  <div class="blk">comp01856: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(49 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(229 50% 50%);
  display: inline-block;
}
</style>
