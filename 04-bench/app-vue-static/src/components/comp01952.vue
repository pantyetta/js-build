<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01497A, calcu01431B, calcu00065A, calcu00331B, calcu01166A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu01497A(seed) - calcu01431B(seed) + calcu00065A(seed) - calcu00331B(seed) + calcu01166A(seed));
</script>

<template>
  <div class="blk">comp01952: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(301 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(121 50% 50%);
  display: inline-block;
}
</style>
