import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type DemoParams = BasicPageParams;

export interface DemoListItem {
  id: string;
  desc: string;
  name: string;
  bPrice: String;
  p1: Number;
  p2: Number;
  p3: Number;
  p4: Number;
  p5: Number;
  p6: Number;
  p7: Number;
  p8: Number;
  p9: Number;
  p10: Number;
  p11: Number;
  p12: Number;
  p13: Number;
}

/**
 * @description: Request list return value
 */
export type DemoListGetResultModel = BasicFetchResult<DemoListItem>;
