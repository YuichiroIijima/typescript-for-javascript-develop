export {};

/**
 * BMIを求める関数
 * @param height 身長
 * @param weight 体重
 */
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.72, 60));

