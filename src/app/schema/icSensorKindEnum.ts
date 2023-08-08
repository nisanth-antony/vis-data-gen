export type IcSensorKindEnum =
  | 'evib1'
  | 'evib2'
  | 'hmv'
  | 'cmv'
  | 'kb'
  | 'mdp'
  | 'omega'
  | 'fdvk'
  | 'ccv'
  | 'other';

export const IcSensorKindEnum = {
  Evib1: 'evib1' as IcSensorKindEnum,
  Evib2: 'evib2' as IcSensorKindEnum,
  Hmv: 'hmv' as IcSensorKindEnum,
  Cmv: 'cmv' as IcSensorKindEnum,
  Kb: 'kb' as IcSensorKindEnum,
  Mdp: 'mdp' as IcSensorKindEnum,
  Omega: 'omega' as IcSensorKindEnum,
  Fdvk: 'fdvk' as IcSensorKindEnum,
  Ccv: 'ccv' as IcSensorKindEnum,
  Other: 'other' as IcSensorKindEnum
};
