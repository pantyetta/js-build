<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00393B, calcu01440B, calcu01130B, calcu00864B, calcu01426A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00393B(seed) - calcu01440B(seed) + calcu01130B(seed) - calcu00864B(seed) + calcu01426A(seed));
</script>

<template>
  <div class="blk">comp00903: {{ total }}</div>
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
