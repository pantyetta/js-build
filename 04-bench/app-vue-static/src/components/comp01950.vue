<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00466A, calcu01533B, calcu00650B, calcu00692B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00466A(seed) - calcu01533B(seed) + calcu00650B(seed) - calcu00692B(seed));
</script>

<template>
  <div class="blk">comp01950: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(315 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(135 50% 50%);
  display: inline-block;
}
</style>
