<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00856A, calcu00560A, calcu00107B, calcu00287A, calcu01347B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00856A(seed) - calcu00560A(seed) + calcu00107B(seed) - calcu00287A(seed) + calcu01347B(seed));
</script>

<template>
  <div class="blk">comp01442: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(113 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(293 50% 50%);
  display: inline-block;
}
</style>
