<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00417B, calcu01539B, calcu00647B, calcu01475B, calcu00063A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00417B(seed) - calcu01539B(seed) + calcu00647B(seed) - calcu01475B(seed) + calcu00063A(seed));
</script>

<template>
  <div class="blk">comp01477: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(74 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(254 50% 50%);
  display: inline-block;
}
</style>
