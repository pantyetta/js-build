<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01277A, calcu00743B, calcu00806A, calcu00174B, calcu00062B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu01277A(seed) - calcu00743B(seed) + calcu00806A(seed) - calcu00174B(seed) + calcu00062B(seed));
</script>

<template>
  <div class="blk">comp00704: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(51 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(231 50% 50%);
  display: inline-block;
}
</style>
