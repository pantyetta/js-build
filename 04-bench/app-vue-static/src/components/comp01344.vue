<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00226B, calcu00644B, calcu01201B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00226B(seed) - calcu00644B(seed) + calcu01201B(seed));
</script>

<template>
  <div class="blk">comp01344: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(20 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(200 50% 50%);
  display: inline-block;
}
</style>
