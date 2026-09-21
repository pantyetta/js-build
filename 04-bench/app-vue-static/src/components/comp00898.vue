<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00785B, calcu01017B, calcu00772A, calcu00715B, calcu01459B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00785B(seed) - calcu01017B(seed) + calcu00772A(seed) - calcu00715B(seed) + calcu01459B(seed));
</script>

<template>
  <div class="blk">comp00898: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(33 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(213 50% 50%);
  display: inline-block;
}
</style>
