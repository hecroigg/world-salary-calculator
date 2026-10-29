/**
 * Payment schedule visualization, not a payroll withholding calculation.
 * The same annual gross is split into equal hypothetical instalments.
 * Individual payments and extra pays can have unequal tax withholding.
 */
export function annualPayIllustration(annualGross:number,annualNet:number) {
  const gross = Number.isFinite(annualGross) ? Math.max(0,annualGross) : 0;
  const net = Number.isFinite(annualNet) ? Math.max(0,annualNet) : 0;
  return {
    annualGross:gross,
    annualNet:net,
    twelve:{gross: gross/12,net:net/12},
    fourteen:{gross:gross/14,net:net/14},
  };
}
