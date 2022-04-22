<template>
  <div class="voucher-container">
    <div class="voucher_header">
      <div class="voucher_header_title">记账凭证</div>
      <div class="voucher_header_number">单据号: {{ voucher.numberId }}</div>
      <div class="voucher_header_input">
        <a-button type="default" class="my-4 btn"> 上传附件 </a-button>
        <a-button type="default" class="my-4 btn"> 搜索凭证 </a-button>
        <a-button type="primary" class="my-4 btn"> 打印凭证 </a-button>
      </div>
    </div>
    <div class="voucher_search">
      <select>
        <option>记</option>
      </select>
      第：<input type="text" style="width: 50px" value="155" name="" id="" />号
      <div class="search_date"> 日期：<input type="date" id="date" v-model="nowTime" /> </div>
      <div class="form_counts">
        附单据：<input type="text" style="width: 30px" name="" value="1" id="" />张
      </div>
    </div>
    <div class="voucher_body">
      <table class="voucher_table">
        <thead>
          <tr>
            <td style="width: 20px">序号</td>
            <td style="width: 300px" class="voucher_summary">摘要</td>
            <td style="width: 300px" class="voucher_subject">会计科目</td>
            <td class="voucher_price_01" style="height: 100%; width: 192px">
              <tr
                ><td style="text-align: center" colspan="13"
                  ><strong class="voucher_title">借方金额</strong></td
                ></tr
              >
              <tr class="unit" style="font-size: 12px">
                <td>百</td>
                <td>十</td>
                <td>亿</td>
                <td>千</td>
                <td>百</td>
                <td>十</td>
                <td>万</td>
                <td>千</td>
                <td>百</td>
                <td>十</td>
                <td>元</td>
                <td>角</td>
                <td class="voucher_last">分</td>
              </tr>
            </td>
            <td class="voucher_price_01" style="height: 100%; width: 192px">
              <tr
                ><td style="text-align: center" colspan="13"
                  ><strong class="voucher_title">贷方金额</strong></td
                ></tr
              >
              <tr class="unit" style="font-size: 12px">
                <td>百</td>
                <td>十</td>
                <td>亿</td>
                <td>千</td>
                <td>百</td>
                <td>十</td>
                <td>万</td>
                <td>千</td>
                <td>百</td>
                <td>十</td>
                <td>元</td>
                <td>角</td>
                <td class="voucher_last">分</td>
              </tr>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr ref="tr" class="voucher_item" v-for="(item, index) in voucher.items" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td
              class="voucher_summary_val tab-value"
              contenteditable="true"
              ref="summart"
              @keyup.enter="saveSummart(index)"
              >{{ item.summart }}</td
            >
            <td class="voucher_subject_val tab-value">
              <input list="subject" id="subject_inp" :value="item.subject" />
              <datalist id="subject">
                <option
                  v-for="(item_01, index_01) in subjectOption"
                  :value="item_01"
                  :key="index_01 + item_01"
                  >{{ item_01 }}</option
                >
              </datalist>
            </td>
            <td class="voucher_debite">
              <tr class="unit"
                ><money-format :number="item.debite" :rowIndex="index" @modified="modifiedDebite"
              /></tr>
            </td>
            <td class="voucher_credit">
              <tr class="unit">
                <money-format :number="item.credit" :rowIndex="index" @modified="modifiedCredit"
              /></tr> </td
          ></tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="voucher_sum" colspan="3">合计：{{ AllTotal }}</td>
            <td>
              <tr class="unit">
                <td v-for="(num, index) in debiteTotal" :key="index + num">
                  {{ num }}
                </td>
              </tr>
            </td>
            <td
              ><tr class="unit">
                <td v-for="(num, index) in creditTotal" :key="index + num">
                  {{ num }}
                </td>
              </tr></td
            >
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="voucher_footer">
      <div class="voucher_bookkeeper">制单人:{{ voucher.bookkeeper }}</div>
      <a-button type="primary" class="my-4 saveAll" @click="saveAll"> 保存 </a-button>
    </div>
  </div>
</template>

<script>
  import MoneyFormat from '/@/views/voucher/component/MoneyFormat.vue';

  import Utils from '/@/utils/myUtils';

  export default {
    name: 'MyTab',
    components: {
      MoneyFormat,
    },
    props: {
      voucher: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    data() {
      return {
        voucherData: this.voucher,
        subjectOption: ['项目一', '项目二', '项目三'],
        debiteStr: '',
        nowTime: new Date(),
      };
    },
    computed: {
      debiteTotal() {
        //计算属性 分割总数字符串
        let total = 0;
        for (let index in this.voucherData.items) {
          total += this.voucherData.items[index].debite;
        }
        return Utils.zero(Utils.dotClear(total.toFixed(2).toString()).split(''));
        // return total;
      },
      creditTotal() {
        //计算属性 分割总数字符串
        let total = 0;
        for (let index in this.voucherData.items) {
          total += this.voucherData.items[index].credit;
        }
        return Utils.zero(Utils.dotClear(total.toFixed(2).toString()).split(''));
      },
      debiteNum() {
        //返回借款数字
        let total = 0;
        for (let index in this.voucherData.items) {
          total += this.voucherData.items[index].debite;
        }
        return total;
      },
      creditNum() {
        //返回贷方数字
        let total = 0;
        for (let index in this.voucherData.items) {
          total += this.voucherData.items[index].credit;
        }
        return total;
      },
      AllTotal() {
        //计算总额数字
        return Utils.convertCurrency(this.debiteNum + this.creditNum);
      },
    },
    methods: {
      // nonConcat() {
      //   this.$emit('nonConcat');
      // },
      modifiedDebite(num, index) {
        //修改借款金额后的自定义事件
        // console.log(num, index);
        this.voucherData.items[index].debite = num;
      },
      modifiedCredit(num, index) {
        //修改贷方金额后的自定义事件
        // console.log(num, index);
        this.voucherData.items[index].credit = num;
      },
      test() {
        console.log(this.voucherData);
        // console.log(...[...this.$refs.summart].forEach((item) => console.log(item.innerText)));
      },
      saveSummart(index) {
        console.log(index);
      },
    },
    mounted() {
      console.log(Utils.date());
    },
  };
</script>

<style>
  .voucher-container {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .voucher_table {
    text-align: center;
    /* width: 90%; */
    margin: auto;
    overflow: auto;
  }
  .voucher_header {
    width: 100%;
    display: flex;
    position: relative;
    /* justify-content: space-between; */
  }
  thead {
    background-color: aliceblue;
  }
  .voucher_header_title {
    margin-top: 10px;
    margin-left: 60px;
    font-size: 24px;
    font-weight: bold;
  }
  .voucher_header_number {
    line-height: 44px;
    margin-left: 30px;
    margin-top: 10px;
    font-size: 14px;
  }
  .btn {
    margin-top: 10px;
    margin-left: 10px;
  }
  .voucher_table td {
    border: 1px solid #ddd;
  }
  .voucher_header_input {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  #subject_inp {
    width: 100%;
    height: 40px;
  }
  .voucher_debite .unit,
  .voucher_credit .unit {
    display: flex;
    justify-content: flex-end;
  }
  .unit {
    /* display: flex; */
  }
  .unit td {
    /* flex: 1; */
    width: 15px;
    height: 40px;
  }

  .voucher_search {
    position: relative;
    margin: 10px;
    margin-left: 20px;
  }
  .search_date {
    display: inline-block;
    margin-left: 50px;
  }
  .form_counts {
    display: inline-block;
    position: absolute;
    right: 0;
  }

  .voucher_footer {
    margin-left: 40px;
    margin-top: 10px;
  }
  .voucher_sum {
    height: 50px;
  }

  /* .voucher_price_01 {
    width: 192px;
  } */
  .voucher_summary,
  .voucher_subject,
  .voucher_title,
  .voucher_title {
    font-size: 14px;
    font-weight: bold;
  }

  .saveAll {
    display: inline-block;
    position: absolute;
    right: 20px;
    top: 0px;
  }
  .voucher_bookkeeper {
    display: inline-block;
    line-height: 60px;
  }
  .voucher_footer {
    position: relative;
    height: 60px;
  }
  tfoot {
    background-color: aliceblue;
  }
</style>
