<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00798A, calcu01081A, calcu01367A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00798A(seed) - calcu01081A(seed) + calcu01367A(seed));
</script>

<template>
  <div class="blk">comp00768: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(91 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(271 50% 50%);
  display: inline-block;
}
</style>
