<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01037A, calcu00118A, calcu00892A, calcu01333A, calcu01077B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01037A(seed) - calcu00118A(seed) + calcu00892A(seed) - calcu01333A(seed) + calcu01077B(seed));
</script>

<template>
  <div class="blk">comp01169: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(124 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(304 50% 50%);
  display: inline-block;
}
</style>
