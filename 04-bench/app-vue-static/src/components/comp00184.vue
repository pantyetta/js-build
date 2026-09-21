<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00062A, calcu00036A, calcu01040B, calcu01575A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00062A(seed) - calcu00036A(seed) + calcu01040B(seed) - calcu01575A(seed));
</script>

<template>
  <div class="blk">comp00184: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(140 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(320 50% 50%);
  display: inline-block;
}
</style>
