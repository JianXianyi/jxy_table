<template>
  <div class="voucher-container">
    <div class="voucher_header">
      <div class="voucher_header_title">记账凭证</div>
      <div class="voucher_header_number">单据号: {{ voucher.numberId }}</div>
      <a-button type="default" class="my-4 btn"> 上传附件 </a-button>
      <a-button type="default" class="my-4 btn"> 搜索凭证 </a-button>
    </div>
    <div class="voucher_search">
      <select>
        <option>记</option>
      </select>
      第：<input type="text" style="width: 50px" value="155" name="" id="" />号
      <div class="search_date"> 日期：<input type="date" id="date" /> </div>
      <div class="form_counts">
        附单据：<input type="text" style="width: 30px" name="" value="1" id="" />张
      </div>
    </div>
    <div class="voucher_body" @click="nonConcat">
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
          <tr class="voucher_item" v-for="(item, index) in voucher.items" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td class="voucher_summary_val" contenteditable="true">{{ item.summart }}</td>
            <td class="voucher_subject_val" contenteditable="true">{{ item.subject }}</td>
            <td class="voucher_debite">
              <tr class="unit"><money-format :number="item.debite" /></tr>
            </td>
            <td class="voucher_credit">
              <tr class="unit"> <money-format :number="item.credit" /></tr> </td
          ></tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="voucher_sum" colspan="3">合计:{{ voucher.total }}</td>
          </tr>
        </tfoot>
      </table>
      <div class="voucher_footer">制单人:{{ voucher.bookkeeper }}</div>
    </div>
  </div>
</template>

<script>
  import MoneyFormat from '/@/views/voucher/component/MoneyFormat.vue';

  export default {
    name: 'MyTab',
    components: {
      MoneyFormat,
    },
    methods: {
      nonConcat() {
        this.$emit('nonConcat');
      },
    },
    props: {
      voucher: {
        type: Object,
        default() {
          return {};
        },
      },
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
  }

  .voucher_header {
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
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
    margin-left: 20px;
  }
  .voucher_table td {
    border: 1px solid #333;
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
</style>
