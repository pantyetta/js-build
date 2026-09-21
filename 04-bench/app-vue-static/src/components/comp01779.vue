<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00938B, calcu01577A, calcu01405B, calcu00528B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00938B(seed) - calcu01577A(seed) + calcu01405B(seed) - calcu00528B(seed));
</script>

<template>
  <div class="blk">comp01779: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(49 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(229 50% 50%);
  display: inline-block;
}
</style>
