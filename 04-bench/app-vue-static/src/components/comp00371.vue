<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00930B, calcu01097B, calcu00692B, calcu00975A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00930B(seed) - calcu01097B(seed) + calcu00692B(seed) - calcu00975A(seed));
</script>

<template>
  <div class="blk">comp00371: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(27 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(207 50% 50%);
  display: inline-block;
}
</style>
