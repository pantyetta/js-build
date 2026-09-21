<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00702B, calcu01367A, calcu01506B, calcu01154A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00702B(seed) - calcu01367A(seed) + calcu01506B(seed) - calcu01154A(seed));
</script>

<template>
  <div class="blk">comp01980: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(36 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(216 50% 50%);
  display: inline-block;
}
</style>
