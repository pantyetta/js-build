<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01166B, calcu01112B, calcu00159B, calcu00778A, calcu00426A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu01166B(seed) - calcu01112B(seed) + calcu00159B(seed) - calcu00778A(seed) + calcu00426A(seed));
</script>

<template>
  <div class="blk">comp01709: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(147 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(327 50% 50%);
  display: inline-block;
}
</style>
