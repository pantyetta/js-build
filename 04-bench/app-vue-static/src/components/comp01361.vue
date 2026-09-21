<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00793B, calcu01322B, calcu01222B, calcu00599A } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00793B(seed) - calcu01322B(seed) + calcu01222B(seed) - calcu00599A(seed));
</script>

<template>
  <div class="blk">comp01361: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(337 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(157 50% 50%);
  display: inline-block;
}
</style>
