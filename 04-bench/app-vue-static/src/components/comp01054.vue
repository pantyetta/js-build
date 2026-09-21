<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00642B, calcu01229B, calcu01172A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00642B(seed) - calcu01229B(seed) + calcu01172A(seed));
</script>

<template>
  <div class="blk">comp01054: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(347 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(167 50% 50%);
  display: inline-block;
}
</style>
