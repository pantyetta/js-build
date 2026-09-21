<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01513A, calcu01491A, calcu00920B, calcu01171A, calcu01280B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01513A(seed) - calcu01491A(seed) + calcu00920B(seed) - calcu01171A(seed) + calcu01280B(seed));
</script>

<template>
  <div class="blk">comp01396: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(34 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(214 50% 50%);
  display: inline-block;
}
</style>
