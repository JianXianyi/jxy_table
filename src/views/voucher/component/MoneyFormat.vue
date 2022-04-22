<template>
  <tr v-if="nonConcat" class="unit">
    <td
      @click="concatUnit"
      contenteditable="true"
      v-for="(num, index) in numberData"
      :key="index + num"
    >
      {{ num }}
    </td>
  </tr>
  <tr v-else @nonConcat="nonCon">
    <td style="position: relative">
      <input
        type="text"
        maxlength="13"
        style="height: 37px; width: 192px"
        @keyup.enter="splitNum"
        v-model="num1"
        name=""
        id=""
      />
      <a class="a-click" @click="splitNum">确定</a>
    </td>
  </tr>
</template>

<script>
  import Utils from '../../../utils/myUtils.js';
  // const dotClear1 = dotClear;
  // console.log(Utils.zero(['2', '2', '2']));
  export default {
    name: 'MoneyFormat',
    props: {
      number: {
        type: Number,
        default() {
          return 0;
        },
      },
      rowIndex: {
        type: Number,
      },
    },
    data() {
      return {
        numberData: Utils.zero(Utils.dotClear(this.number.toFixed(2).toString()).split('')),
        nonConcat: true,
        num1: this.number,
      };
    },
    methods: {
      concatUnit() {
        // console.log(2222);
        this.nonConcat = !this.nonConcat;
      },
      splitNum() {
        this.$emit('modified', Number(this.num1), this.rowIndex);
        this.numberData = Utils.zero(
          Utils.dotClear(Number(this.num1).toFixed(2).toString()).split(''),
        );
        this.nonConcat = !this.nonConcat;
      },
    },
  };
</script>

<style scoped>
  .a-click {
    position: absolute;
    top: 10px;
    right: 5px;
  }
</style>
