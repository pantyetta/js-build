<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00719B, calcu01584B, calcu00995A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00719B(seed) - calcu01584B(seed) + calcu00995A(seed));
</script>

<template>
  <div class="blk">comp00785: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(346 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(166 50% 50%);
  display: inline-block;
}
</style>
